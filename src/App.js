import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  ComponentPage,
  FileNotFoundPage,
  HomePage,
  LandingPage,
  SignUpPage,
  Test,
  CategoriesPage,
  ProductPage,
  CheckOutPage,
  LoginPage,
  CategoryPage,
} from "./pages";
import { Header } from "./components";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/components-page" exact component={ComponentPage} />
          <Route path="/404" exact component={FileNotFoundPage} />
          <Route path="/landing-page" exact component={LandingPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/test" exact component={Test} />
          <Route path="/checkout" exact component={CheckOutPage} />
          <Route path="/categories" exact component={CategoriesPage} />
          <Route
            path="/category/:category-name"
            exact
            component={CategoryPage}
          />
          <Route path="/ProductPage/:productid" exact component={ProductPage} />
          <Route>
            <Route path="/" component={HomePage} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
