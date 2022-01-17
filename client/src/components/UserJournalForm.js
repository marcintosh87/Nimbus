import {
  Autocomplete,
  Button,
  Container,
  Fab,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";

export default function UserJournal() {
  const [convertedText, setConvertedText] = useState("Some default content");
  return (
    <>
      <Container className="journal-items-container">
        <Grid container direction="row">
          <Grid item xs={3} sx={{ mp: 1 }}>
            <aside className="menu">
              <p className="menu-label">General</p>
              <ul className="menu-list">
                <Button>Dashboard</Button>
              </ul>
              <p className="menu-label">Journals</p>

              <ul className="menu-list">
                <Button>Add Journal</Button>
                <Button>Recent Journals</Button>
                <li>
                  <a className="is-active">2021</a>
                  <ul>
                    <li>
                      <a>Journal 1</a>
                    </li>
                    <li>
                      <a>Journal 2</a>
                    </li>
                    <li>
                      <a>Journal 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </aside>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={8}>
            <TextField
              className="journal-title"
              label="Title of Journal"
              variant="outlined"
              sx={{ my: 3 }}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={relaxationOptions}
              sx={{ width: 300, mb: 3 }}
              renderInput={(params) => (
                <TextField {...params} label="How did you relax today?" />
              )}
            />
            <ReactQuill
              id="quill"
              theme="snow"
              value={convertedText}
              onChange={setConvertedText}
              style={{ maxHeight: "600px" }}
            />
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
                <Button variant="contained" id="save-btn" sx={{ mr: 2 }}>
                  Save
                </Button>
                <Button variant="contained" id="delete-btn">
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

const relaxationOptions = [{ label: "Meditation" }];
