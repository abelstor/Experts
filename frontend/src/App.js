import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchResults from './screens/SearchResults';
import NotFound from './screens/NotFound';
import Register from './screens/Register';
import NavBar from './components/NavBar';
import Landing from './screens/Landing';
import Home from './screens/Home';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;