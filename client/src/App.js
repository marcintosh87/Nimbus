import "./App.css";
import "./Login.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import GratitudeSpace from "./components/GratitudeSpace";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import { useEffect, useState } from "react";

import JournalEntry from "./components/JournalEntry";
import UserJournalForm from "./components/UserJournalForm";
import JournalSingleEntry from "./components/JournalSingleEntry";
import JournalEntryEdit from "./components/JournalEntryEdit";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [journals, setJournals] = useState("");
  const [alljournals, setAllJournals] = useState([]);
  const [counter, setCounter] = useState(1);

  // This allows for the user to remain logged in once authenticated. It must be at the highest level of flow
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      }
    });
  }, [counter]);
  // this fetch provides the gratitude wall journals, except for entries marked as private
  const fetchJournals = async () => {
    fetch("/gratitude_space").then((res) => {
      if (res.ok) {
        res.json().then(setJournals);
      } else {
        console.error("Nothing here");
      }
    });
  };

  const fetchAllJournals = () => {
    fetch("/journals").then((res) => {
      if (res.ok) {
        res.json().then(setAllJournals);
      } else {
        console.error("Nothing here");
      }
    });
  };
  useEffect(() => {
    fetchAllJournals();
  }, [counter]);

  useEffect(() => {
    fetchJournals();
  }, [counter]);

  return (
    <>
      {/* Navbar is inside her so that useNavigate can be used to redirect */}
      <Navbar
        authenticated={authenticated}
        currentUser={currentUser}
        setAuthenticated={setAuthenticated}
      />

      <Routes>
        {currentUser && (
          <Route
            path="/:id/journal/:id"
            element={
              <JournalSingleEntry
                currentUser={currentUser}
                counter={counter}
                setCounter={setCounter}
              />
            }
          />
        )}
        {currentUser ? (
          <Route
            path="/:id/journal"
            element={<JournalEntry currentUser={currentUser} />}
          />
        ) : null}
        {currentUser ? (
          <Route
            path=":id/addJournal"
            element={
              <UserJournalForm
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
        {/* edit entry */}
        {currentUser && (
          <Route
            path="/:id/journal/:id/edit"
            element={
              <JournalEntryEdit
                currentUser={currentUser}
                counter={counter}
                setCounter={setCounter}
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
                currentUser={currentUser}
              />
            }
          />
        )}
        <Route path="/" element={<GratitudeSpace journals={journals} />} />
      </Routes>
    </>
  );
}

export default App;
