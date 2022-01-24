import {
  Button,
  Container,
  Fab,
  Grid,
  TextField,
  Box,
  FormControlLabel,
  Switch,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";

import JournalVNav from "./JournalVNav";
import { Link } from "react-router-dom";

export default function UserJournalForm({ currentUser, setCounter, counter }) {
  const [privateGrat, setPrivateGrat] = useState(true);
  const [labelSwitch, setlabelSwitch] = useState("Private");
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    mood: "",
    relax_entry: "",
    journal_entry: "",
    grateful_entry: "",
    grateful_entry_private: privateGrat,
    user_id: currentUser.id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/journals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          //   nav(`/${currentUser.id}/entries`);
          setCounter(counter + 1);
        });
      } else {
        res.json().then((errors) => {
          setErrors("What you entered is invalid");
          console.error(errors);
        });
      }
    });
    setFormData({
      title: "",
      mood: "",
      relax_entry: "",
      journal_entry: "",
      grateful_entry: "",
      grateful_entry_private: true,
      user_id: currentUser.id,
    });
  };

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSwitch() {
    if (formData.grateful_entry_private === true) {
      setFormData({
        ...formData,
        grateful_entry_private: false,
      });
    } else {
      setFormData({
        ...formData,
        grateful_entry_private: true,
      });
    }
  }
  //   console.log(formData);
  return (
    <>
      <Container className="journal-items-container">
        <Grid container direction="row">
          <Grid item xs={3} sx={{ mp: 1 }}>
            {currentUser && (
              <JournalVNav counter={counter} currentUser={currentUser} />
            )}
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={8}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                autoComplete="given-name"
                name="title"
                required
                fullWidth
                id="journal-title"
                label="title"
                value={formData.title}
                onChange={handleChange}
                autoFocus
                sx={{ my: 2 }}
              />
              <FormControl sx={{ width: 200, mb: 3 }}>
                <InputLabel id="select-mood">Mood</InputLabel>
                <Select
                  name="mood"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.mood}
                  label="Mood"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Depressed</MenuItem>
                  <MenuItem value={1}>Anxious</MenuItem>
                  <MenuItem value={2}>Sad</MenuItem>
                  <MenuItem value={3}>Unmotivated</MenuItem>
                  <MenuItem value={4}>Pensive</MenuItem>
                  <MenuItem value={5}>Motivated</MenuItem>
                  <MenuItem value={6}>Happy</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: 300, mb: 3, ml: 1 }}>
                <InputLabel id="select-relax">
                  How did you relax today?
                </InputLabel>
                <Select
                  name="relax_entry"
                  labelId="relax_entry"
                  id="select_relax"
                  value={formData.relax_entry}
                  label="How did you relax today?"
                  onChange={handleChange}
                >
                  <MenuItem value="Meditation">Meditation</MenuItem>
                  <MenuItem value="Nature Walk">Nature Walk</MenuItem>
                  <MenuItem value="Listened to Music">
                    Listened to Music
                  </MenuItem>
                  <MenuItem value="Caught a Woobly">Caught a Woobly</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="grateful-input"
                name="grateful_entry"
                label="What are you grateful for?"
                multiline
                rows={4}
                fullWidth
                onChange={handleChange}
                value={formData.grateful_entry}
              />

              <FormControlLabel
                control={<Switch defaultChecked />}
                label={labelSwitch}
                onChange={() => {
                  handleSwitch();
                  setlabelSwitch(
                    labelSwitch === "Public" ? "Private" : "Public"
                  );
                }}
              />
              <TextField
                name="journal_entry"
                id="journal-input"
                label="Journal Entry"
                multiline
                rows={4}
                fullWidth
                onChange={handleChange}
                value={formData.journal_entry}
              />

              {/* <ReactQuill
              name="journal_entry"
              id="quill-journal"
              theme="snow"
              onChange={handleChange}
              value={formData.journal_entry}
              style={{ maxHeight: "600px" }}
            /> */}
              <Grid container direction="row" sx={{ mt: 2 }}>
                <Grid item xs={8}></Grid>
                <Grid item xs={4}>
                  <Button
                    type="submit"
                    variant="contained"
                    id="save-btn"
                    sx={{ mr: 2 }}
                  >
                    Save
                  </Button>
                  <Link
                    to={`/${currentUser.id}/journal`}
                    className="react-links"
                  >
                    <Button variant="contained" id="delete-btn">
                      Cancel
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
