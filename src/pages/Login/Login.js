import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material/";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../actions/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Ubuntu, sans-serif",
  },
  text: {
    fontFamily: "Ubuntu, sans-serif",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    textAlign: "right",
    display: "block",
    color: "grey",
  },
}));

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "admin" && formData.password === "admin123") {
      dispatch(signin(formData, navigate));
    } else {
      console.log("shade");
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <img src="/Assets/Joey_Rooms_logo-trans.png" alt="logo-name" />
        </div>
        <Typography
          className={classes.text}
          component="h1"
          variant="h5"
          style={{
            marginTop: "20px",
            fontWeight: "600",
            fontFamily: "Ubuntu, sans-serif",
          }}
        >
          Admin Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Link className={classes.link} to="/forgotPassword">
            Forgot Password
          </Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{
              marginTop: "20px",
              backgroundColor: "#1880c9",
              padding: "15px 0",
            }}
          >
            Log-In
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Login;
