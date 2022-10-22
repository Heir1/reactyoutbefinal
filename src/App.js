import './style.css';
import { Login } from './Components/Login/Login';
import { Home } from './Components/Home/Home';
import Popular from './Components/Home/Popular';
import { Channels } from './Components/channels/Channels';
import { Likes } from './Components/Likes/Likes';
import { Routes, Route } from 'react-router-dom';
import { Watch } from './Components/Watch/Watch';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/mysubscriptions" element={<Home/>} />
        <Route path="/popularvideos" element={<Popular/>} />
        <Route path="/mychannels" element={<Channels/>} />
        <Route path="/mylikes" element={<Likes/>} />
        <Route path='*' element={<Login/>}  replace/>
        <Route path='/mysubscriptions/:id' element={<Watch/>} />
        <Route path='/popularvideos/:id' element={<Watch/>} />
      </Routes>
    </div>
  );
}

export default App;
