import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function JournalEntriesList({ journalTitle, id, currentUser }) {
  return (
    <>
      {currentUser && (
        <Link to={`/${currentUser.id}/journal/${id}`} className="react-links">
          <li>
            <Typography>{journalTitle}</Typography>
          </li>
        </Link>
      )}
    </>
  );
}
