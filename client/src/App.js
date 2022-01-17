import "./App.css";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import UserJournal from "./components/UserJournalForm";

function App() {
  return (
    <>
      <Navbar />
      <UserJournal />
    </>
  );
}

export default App;
