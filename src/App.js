import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Class from "./pages/home/Class";
import Stucapstone from "./pages/capstone/Stucapstone";
import Capstone from "./pages/capstone/Capstone";
import Batches from "./pages/batch/Batches";
import Event from "./pages/eventManage/Events";
function App() {
  const token = window.localStorage.getItem("app-token");

  return (
    <div className="App mx-5">
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<Login />} />
            <Route exact path="/home" element={<Class />} />
            <Route path="/eventManage" element={<Event/> }/>
            <Route path="/stucapstone" element={<Stucapstone />} />
            <Route path="/capstone/:userId" element={<Capstone />} />
            <Route path="/batchCreate" element={<Batches />} />
          </>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;