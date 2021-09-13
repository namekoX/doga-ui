import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import Const from './common/const';
import HowToComponent from "./components/HowToComponent";
import MenuComponent from './components/MenuComponent';
import NotFoundComponect from "./components/NotFoundComponect";
import SearchComponent from "./components/SearchComponent";
import SearchProvider from "./provider/SearchProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path={Const.SITE_SEARCH}
            render={() => {
              return (
                <div>
                  <MenuComponent />
                  <SearchProvider>
                    <SearchComponent />
                  </SearchProvider>
                </div>
              );
            }}
          />
          <Route
            exact path={Const.HOW_TO}
            render={() => {
              return (
                <div>
                  <MenuComponent />
                  <HowToComponent />
                </div>
              );
            }}
          />
          <Route component={NotFoundComponect} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
