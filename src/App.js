import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Main from './containers/Main';
import Home from './containers/Home';
import MovieDetail from './containers/MovieDetail';
import Login from './containers/Login';
import Register from './containers/Register';
import { UserContext } from './contexts/UserContext';

const App = () => {
  const [context, setContext] = React.useState({ loggedIn: false, name: '' });
  return (
      <UserContext.Provider value={[context, setContext]}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="movie/:movieId" element={<MovieDetail />}/>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};
export default App;
