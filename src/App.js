import './App.css';


function App() {
  return (
    <>
     <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:id" element/>
      </Routes>
     </div>
    </>
  );
}

export default App;
