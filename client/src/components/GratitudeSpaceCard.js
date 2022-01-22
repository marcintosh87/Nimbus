import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function GratitudeSpaceCard({ journal_entry, author }) {
  return (
    <Grid item xs>
      <Card sx={{ width: 200, p: 2, mt: 2, mx: 0.2 }}>
        <Typography variant="h5" align="center">
          <EmojiEmotionsIcon color="action" fontSize="large" /> Gratitude Post
        </Typography>
        <CardContent>
          <Typography
            variant="body2"
            align="center"
          >{`"${journal_entry}"`}</Typography>
        </CardContent>
        <Typography
          sx={{ fontSize: 14, px: 2 }}
          color="text.secondary"
          gutterBottom
          align="right"
        >
          -{author}
        </Typography>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </Grid>
  );
}
