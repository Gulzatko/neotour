import './App.css';
import{Routes, Route} from 'react-router-dom';
import { Layout } from './Components/Layout';
import Vacation from './pages/Vacation';
import Details from './pages/Details';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout/>}>
       <Route index element={<Vacation/>}/>
       <Route path="/:id" element={<Details/>}/>
       </Route>
     </Routes>
    </>
  );
}

export default App;
