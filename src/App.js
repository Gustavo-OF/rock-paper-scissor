import { Fragment, React } from "react"
import { Route } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import { ChooseRPS } from "./components/ChooseRPS";
import { PlayRPS } from "./components/PlayRPS";

import { Background } from "./components/ui"


function App() {
  return (
    <Fragment>
      <Background>
        <Router>
          <Route path="/">
            <ChooseRPS></ChooseRPS>
          </Route>
          <Route path="/play/:option">
            <PlayRPS></PlayRPS>
          </Route>
        </Router>
      </Background>
    </Fragment>
  );
}

export default App;
