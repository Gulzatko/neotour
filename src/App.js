import './App.css';
import{Routes, Route} from 'react-router-dom';
import { Layout } from './Components/Layout';
import Main from './pages/Main';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout/>}>
       <Route index element={<Main/>}/>
       <Route path="/:id" element={<details/>}/>
     

      </Route>
     </Routes>
    </>
  );
}

export default App;
