import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import JournalEntriesList from "./JournalEntriesList";

export default function JournalVNav({ currentUser }) {
  return (
    <>
      <aside className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <Button>Dashboard</Button>
        </ul>
        <p className="menu-label">Journals</p>

        <ul className="menu-list">
          <Link to="/addJournal" className="react-links">
            <Button>Add Journal</Button>
          </Link>
          {/* <Link to="addJournal" className="react-links">
          <Button>Recent Entries</Button>
        </Link> */}
          <li>
            <Link to="/addJournal" className="react-links">
              <Button>Recent Entries</Button>
            </Link>

            <ul>
              {currentUser &&
                currentUser.journals.map((journal) => (
                  <JournalEntriesList
                    currentUser={currentUser}
                    key={journal.id}
                    id={journal.id}
                    journalTitle={journal.title}
                    journalEntry={journal.journal_entry}
                  />
                ))}
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}
