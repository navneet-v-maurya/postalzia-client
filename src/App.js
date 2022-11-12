import "./App.css";
import Form from "./components/Auth/Form";
import Home from "./components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Form />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Home profile={true} /> : <Form />}
        />
      </Routes>
    </div>
  );
}

export default App;
