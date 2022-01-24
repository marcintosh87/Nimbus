import {
  Button,
  Card,
  CardContent,
  Container,
  Fab,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import JournalVNav from "./JournalVNav";
import EditIcon from "@mui/icons-material/Edit";
import banner from "./../images/Nimbus-journals-banner.jpg";
import { Box } from "@mui/system";

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

  const mood = (mood) => {
    if (mood === 0) {
      return "Depressed";
    } else if (mood === 1) {
      return "Anxious";
    } else if (mood === 2) {
      return "Sad";
    } else if (mood === 3) {
      return "Unmotivated";
    } else if (mood === 4) {
      return "Pensive";
    } else if (mood === 5) {
      return "Motivated";
    } else if (mood === 6) {
      return "Happy";
    }
  };
  return (
    <>
      <Container>
        <Grid container direction="row" sx={{ mt: 2 }}>
          <Grid item xs={3}>
            <JournalVNav currentUser={currentUser} />
          </Grid>
          <Grid item xs={9}>
            <Box>
              <img src={banner} alt="Journals Banner" />
            </Box>
            <Paper elevation={3} sx={{ p: 3, minHeight: 300 }}>
              <Typography variant="h4">{journal.title}</Typography>

              <Typography variant="caption">
                Mood:<b>{mood(journal.mood)}</b> | What you are doing to relax:{" "}
                <b>{journal.relax_entry}</b> | posted on:{" "}
                <b>{journal.created_date}</b>
              </Typography>

              <Card sx={{ mt: 2 }}>
                <CardContent>
                  <Typography variant="h6" color={"#0287A2"}>
                    Journal Entry
                  </Typography>
                  <Typography variant="body1" mt={2}>
                    {journal.journal_entry}
                  </Typography>
                  <Typography variant="h6" color={"#0287A2"} sx={{ mt: 2 }}>
                    What you are thankful for{" "}
                    <span style={{ color: "#DF5B5B" }}>
                      {" "}
                      {journal.grateful_entry_private
                        ? "(Private)"
                        : "(Public)"}
                    </span>
                  </Typography>
                  <Typography variant="body1" mt={2}>
                    {journal.grateful_entry}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
            <Grid container direction="row" sx={{ mt: 2 }}>
              <Grid item xs={8}></Grid>
              <Grid item xs={4}>
                <Link
                  to={`/${currentUser.id}/journal/${param.id}/edit`}
                  className="react-links"
                >
                  <Button variant="contained" id="edit-btn" sx={{ mr: 2 }}>
                    Edit
                  </Button>
                </Link>
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
