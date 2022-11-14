import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import router from "next/router";
import { createSession } from "src/api/session";
import { getFormations } from "src/api/formation";
import { getFormateurs } from "src/api/formateur";

const SessionForm = (props) => {
  const [values, setValues] = useState({});
  const [formateurs, setFormateurs] = useState([]);
  const [formations, setFormations] = useState([]);
  const [criteria, setCriteria] = useState("");

 
  useEffect(() => {
    getFormations(criteria).then((res) => setFormations(res.data));
  }, [criteria]);
  useEffect(() => {
    getFormateurs(criteria).then((res) => setFormateurs(res.data));
  }, [criteria]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values)
  };
  const handleChangeFormateur = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values)
  };
  const handleChangeFormation= (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values)
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    createSession(values)
      .then((res) => {
        console.log(res);
        router.push("/sessions");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form autoComplete="off" noValidate {...props} onSubmit={handleSubmit}>
      <Card>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="titre"
                onChange={handleChange}
                required
                value={values.titre}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            
            <Grid item md={6} xs={12}>
            <InputLabel id="label">Formation</InputLabel>
            <Select 
              labelId="label"
              id="select"
              name="formation"
              fullWidth
              onChange={handleChangeFormation} 
              value={values.formation ? values.formation: " "}
              label="Formation"
            >
            {formations.map((formation) => (
              <MenuItem value={formation._id}>{formation.titre}</MenuItem>
            ))}
          </Select>
            </Grid>
            <Grid item md={6} xs={12}>
            <InputLabel id="label">Formateur</InputLabel>
            <Select 
              labelId="label"
              id="select"
              name="formateur"
              fullWidth
              onChange={handleChangeFormateur} 
              value={values.formateur ? values.formateur: " "}
              label="Formateur"
            >
            {formateurs.map((formateur) => (
              <MenuItem value={formateur._id}>{formateur.prenom} {formateur.nom}</MenuItem>
            ))}
          </Select>
            </Grid>
            
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SessionForm;
