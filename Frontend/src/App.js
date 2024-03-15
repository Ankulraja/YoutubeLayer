import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Dashboard } from "./Pages/Dashboard";
import { Signup } from "./Pages/Signup";
import { Login } from "./Pages/Login";
import  Upload  from "./Pages/Upload";
import  Success  from "./Pages/Success";
import { PrivateRoute } from "./Components/PrivateRoute";
import MainHeader from "./Components/MainHeader";
import About from "./Pages/About";
import { EditorDashboard } from "./Pages/EditorDashboard";
// import { TokenProvider } from "./context/tokenContext";
import { AllSchemaIdProvider } from "./context/AllSchemaId";

function App() {
  const [isLoggedIn, setISLoggedIn] = useState(false);

  return (
    <AllSchemaIdProvider>
      <div className="bg-slate-950 w-screen min-h-screen text-white flex flex-col overflow-hidden ">
        <Navbar isLoggedIn={isLoggedIn} setISLoggedIn={setISLoggedIn} />
        <Routes>
          <Route path="/" element={<MainHeader></MainHeader>}>
            <Route path="/" element={<Home setISLoggedIn={setISLoggedIn} />} />
            <Route
              path="/about"
              element={<About setISLoggedIn={setISLoggedIn} />}
            />
            <Route
              path="/login"
              element={<Login setISLoggedIn={setISLoggedIn} />}
            />
            <Route
              path="/signup"
              element={<Signup setISLoggedIn={setISLoggedIn} />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard setISLoggedIn={setISLoggedIn}></Dashboard>}
            />
            <Route
              path="/editorDashboard"
              element={
                <EditorDashboard
                  setISLoggedIn={setISLoggedIn}
                ></EditorDashboard>
              }
            />
          </Route>
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </div>
    </AllSchemaIdProvider>
  );
}

export default App;
