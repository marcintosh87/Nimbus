import {
  Button,
  Container,
  Divider,
  Fab,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

import JournalVNav from "./JournalVNav";
import JournalEntryCard from "./JournalEntryCard";

export default function JournalEntry({ currentUser }) {
  return (
    <Container>
      <Grid container direction="row" sx={{ mt: 2 }}>
        <Grid item xs={3}>
          <JournalVNav currentUser={currentUser} />
        </Grid>

        <Grid item xs={9}>
          <Typography sx={{ mb: 2 }} variant="h3">
            List of all Journals
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {currentUser &&
            currentUser.journals.map((journal) => (
              <JournalEntryCard
                key={journal.id}
                id={journal.id}
                currentUser={currentUser.id}
                title={journal.title}
                created={journal.created_date}
              />
            ))}
        </Grid>
      </Grid>
    </Container>
  );
}
