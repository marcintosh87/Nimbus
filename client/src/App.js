import "./App.css";
import "./Login.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GratitudeSpace from "./components/GratitudeSpace";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import { useEffect, useState } from "react";
import UserJournal from "./components/UserJournal";
import JournalEntry from "./components/JournalEntry";
import JournalVNav from "./components/JournalVNav";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [journals, setJournals] = useState("");
  const [counter, setCounter] = useState(1);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      }
    });
  }, []);

  const fetchJournals = async () => {
    fetch("/gratitude_space").then((res) => {
      if (res.ok) {
        res.json().then(setJournals);
      } else {
        console.error("Nothing here");
      }
    });
  };

  useEffect(() => {
    fetchJournals();
  }, [counter]);

  return (
    <>
      <BrowserRouter>
        <Navbar
          authenticated={authenticated}
          currentUser={currentUser}
          setAuthenticated={setAuthenticated}
        />
        <Routes>
          <Route path="/" element={<GratitudeSpace journals={journals} />} />

          {authenticated && currentUser ? (
            <Route
              path="/addJournal"
              element={
                <UserJournal
                  currentUser={currentUser}
                  setCounter={setCounter}
                  counter={counter}
                />
              }
            />
          ) : (
            <Route
              path="/sign-in"
              element={
                <SignIn
                  setAuthenticated={setAuthenticated}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
          )}
          {/* signup */}
          {authenticated ? null : (
            <Route
              path="/sign-up"
              element={
                <Signup
                  setCurrentUser={setCurrentUser}
                  setAuthenticated={setAuthenticated}
                />
              }
            />
          )}

          <Route
            element={
              authenticated &&
              currentUser.journals.map((each) => (
                <JournalEntry
                  key={each.id}
                  title={each.title}
                  journalEntry={each.journal_entry}
                />
              ))
            }
            path={
              authenticated &&
              `/${currentUser.id}/journal/${currentUser.journals.map(
                (each) => each.id
              )}`
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// //      {authenticated ? (
//   <Route
//   path={`/${currentUser.id}/journal/${currentUser.journals.map(
//     (each) => each.id
//   )}`}
//   element={
//     <JournalEntry
//       journalEntry={
//         currentUser &&
//         currentUser.journals.map((each) => each.journal_entry)
//       }
//       currentUser={currentUser}
//     />
//   }
// />
// // ) : null}
