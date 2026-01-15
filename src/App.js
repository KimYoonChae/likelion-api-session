import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//import List from "./components/0115/List";
//import Create from "./components/0115/Create";
//import Update from "./components/0115/Update";
import GoogleLogin from "./components/0116/loginPage";
import Loading from "./components/0116/loading";
import TestPage from "./components/0116/TestPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*  <Route path="/" element={<List />} /> 
          <Route path="/list" element={<List />} /> 
          <Route path="/create" element={<Create />} /> 
          <Route path="/update" element={<Update />} /> */}
         <Route path="/" element={<GoogleLogin />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
