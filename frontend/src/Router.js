import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import AuthContext from './context/AuthContext';

function Router() {
  const { loggedIn, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // Optional: Show a loading indicator
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Redirect to="/" /> {/* Redirect to the LandingPage if no matching route */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
