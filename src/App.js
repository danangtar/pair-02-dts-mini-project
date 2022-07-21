import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Main from './containers/Main';
import Home from './containers/Home';
import MovieDetail from './containers/MovieDetail';
import Login from './containers/Login';
import Register from './containers/Register';
import { AuthContext } from "./contexts/AuthContext";
import { fakeAuthProvider } from "./Auth";

function RequireAuth({ children }) {
  let auth = React.useContext(AuthContext);
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function RequireNotAuth({ children }) {
  let auth = React.useContext(AuthContext);
  let location = useLocation();

  if (auth.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="movie/:movieId" element={<RequireAuth><MovieDetail /></RequireAuth>}/>
          </Route>
          <Route path="login" element={<RequireNotAuth><Login /></RequireNotAuth>}/>
          <Route path="register" element={<RequireNotAuth><Register /></RequireNotAuth>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default App;
