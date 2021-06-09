import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Details from "./pages/Details/Details";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
