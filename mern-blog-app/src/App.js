import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import SinglePost from './pages/SinglePost';
import './partials/App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddPost/>}></Route>
        <Route path='/posts/:id' element={<SinglePost/>}></Route>
        <Route path='/posts/:id/edit' element={<EditPost/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
