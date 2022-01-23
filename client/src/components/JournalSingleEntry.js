import { Button, Container, Fab, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JournalVNav from "./JournalVNav";
import EditIcon from "@mui/icons-material/Edit";

export default function JournalSingleEntry({
  currentUser,
  counter,
  setCounter,
}) {
  const param = useParams();
  const [journal, setJournal] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch(`/journals/${param.id}`).then((res) => res.json().then(setJournal));
  }, [param.id]);
  //Deletes journal

  const handleDelete = () => {
    fetch(`/journals/${param.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    nav("/");
    setCounter(counter + 1);
    window.location.reload(false);
  };
  return (
    <>
      <Container>
        <Grid container direction="row" sx={{ mt: 2 }}>
          <Grid item xs={3}>
            <JournalVNav currentUser={currentUser} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h4">{journal.title}</Typography>
            <Typography variant="p">{journal.journal_entry}</Typography>
            <Grid container direction="row" sx={{ mt: 2 }}>
              <Grid item xs={8}>
                <Fab
                  color="secondary"
                  size="small"
                  aria-label="edit"
                  id="edit-btn"
                >
                  <EditIcon />
                </Fab>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  id="delete-btn"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
