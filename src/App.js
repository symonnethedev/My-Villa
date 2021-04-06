import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import Login from "./Login";
import CasaPastis from "./casaPastis";
import VistaAlegre from "./vistaAlegre";
import BelleVilla from "./belleVilla";
import VillaYama from "./villaYama";
import VillaMieke from "./villaMieke";
import CanaMilene from "./canaMilene";
import SanLorenzo from "./sanLorenzo";
import VillaAlessandra from "./villaAlessandra";
import VillaAtzi from "./villaAtzi";
import SaCalma from "./saCalma";
import VillaEmilito from "./villaEmilito";
import SerenaVista from "./SerenaVista";
import VillaAnna from "./villaAnna";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/VillaMieke" render={() => <VillaMieke />} />
          <Route path="/VillaAlessandra" render={() => <VillaAlessandra />} />
          <Route path="/CanaMilene" render={() => <CanaMilene />} />
          <Route path="/VillaEmilito" render={() => <VillaEmilito />} />
          <Route path="/SerenaVista" render={() => <SerenaVista />} />
          <Route path="/BelleVilla" render={() => <BelleVilla />} />
          <Route path="/VillaYama" render={() => <VillaYama />} />
          <Route path="/SanLorenzo" render={() => <SanLorenzo />} />
          <Route path="/VillaAtzi" render={() => <VillaAtzi />} />
          <Route path="/VistaAlegre" render={() => <VistaAlegre />} />
          <Route path="/SaCalma" render={() => <SaCalma />} />
          <Route path="/VillaAnna" render={() => <VillaAnna />} />
          <Route exact path="/CasaPastis" render={() => <CasaPastis />} />
          <Route path="/login">
            <Login Page />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
