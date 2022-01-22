import { Container, Grid } from "@mui/material";
import React from "react";
import GratitudeSpaceCard from "./GratitudeSpaceCard";

export default function GratitudeSpace({ journals }) {
  // console.log(journals);
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {journals &&
          journals.map((journal) =>
            journal.grateful_space === null ? null : (
              <GratitudeSpaceCard
                key={journal.id}
                author={journal.i_last_name}
                journal_entry={journal.grateful_space}
              />
            )
          )}
      </Grid>
    </Container>
  );
}
