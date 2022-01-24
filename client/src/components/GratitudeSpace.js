import { Container, Grid } from "@mui/material";
import React from "react";
import GratitudeSpaceCard from "./GratitudeSpaceCard";
import banner from "./../images/gratitude-space-banner.jpg";
import { Box } from "@mui/system";

export default function GratitudeSpace({ journals }) {
  // console.log(journals);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <img src={banner} alt="Gratitude space banner" />
      </Box>
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
    </>
  );
}
