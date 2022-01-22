import { Button, Container, Fab, Grid, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import JournalVNav from "./JournalVNav";

export default function JournalEntry({ currentUser, journalEntry, title }) {
  return (
    <Container>
      <Grid container direction="row" sx={{ mt: 2 }}>
        <Grid item xs={3}>
          <JournalVNav />
        </Grid>

        <Grid item xs={9}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="p">{journalEntry}</Typography>
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
              <Button variant="contained" id="delete-btn">
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
