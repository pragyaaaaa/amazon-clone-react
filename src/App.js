import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import { db, auth } from './firebase'
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from './Payment'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51HkkhoDuNr994M1JreAo2QO4yNcRO2PWxGh9JKn3Ijm2kBWchx1PzL6dhNMgKBf8Pd1ERC3hyVS1KYNL6PieJnWS00t4d9Q5Oj"
);
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //logged in user
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
