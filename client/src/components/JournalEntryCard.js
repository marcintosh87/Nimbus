import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fab,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { typography } from "@mui/system";

export default function JournalEntryCard({
  journalEntry,
  title,
  created,
  currentUser,
  id,
}) {
  return (
    <div style={{ marginTop: "12px" }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            {title}
          </Typography>
          <Grid container direction="row" sx={{ mt: 2 }}>
            <Grid item xs={8}>
              <Typography>Posted on: {created}</Typography>
              <CardActions>
                <Button href={`/${currentUser}/journal/${id}`}>Read</Button>
              </CardActions>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
