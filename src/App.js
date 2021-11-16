import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Properties from "./pages/Properties/Properties";
import Payments from "./pages/Payments/Payments";
import Hosts from "./pages/Hosts/Hosts";
import HostRequests from "./pages/Hosts/HostRequests";
import Reviews from "./pages/Reviews/Reviews";
import Bookings from "./pages/Bookings/Bookings";
import Users from "./pages/Users/Users";
import Settings from "./pages/Settings/Settings";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1d4354",
    },
    secondary: {
      main: "#0097a7",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="dashboard" element={<Dashboard />}></Route>
            <Route exact path="hostsrequest" element={<HostRequests />}></Route>

            <Route path="properties" element={<Properties />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="hosts" element={<Hosts />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="bookings" element={<Bookings />}></Route>
            <Route path="payments" element={<Payments />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
