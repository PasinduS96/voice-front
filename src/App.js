import React from "react";
import "./App.css";
import Navbar from "./Partials/Navbar";
import SideNavBar from "./Partials/SideNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InterviewList from "./Components/InterviewList";
import CandiateList from "./Components/CandiateList";
import QuizList from "./Components/QuizList";
import ArchiveList from "./Components/Archives";
import ArchiveCandidate from "./Components/ArchiveCandidate";
import Questions from "./Components/Questions";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "bootstrap/dist/css/bootstrap.css";
const options = {
  timeout: 2000,
  position: positions.BOTTOM_CENTER,
  transition: "scale",
};

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={InterviewList} />
          <Route path="/interview" component={CandiateList} />
          <Route path="/candiates/:name" component={CandiateList} />
          <Route path="/archives" component={ArchiveList} />
          <Route path="/candidatearchives/:name" component={ArchiveCandidate} />
          <Route path="/Questions" component={Questions} />
          <Provider template={AlertTemplate} {...options}>
            <Route path="/quiz/:id/:candidateid" component={QuizList} />
          </Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
