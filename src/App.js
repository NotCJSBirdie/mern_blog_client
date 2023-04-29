import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Posts from "./components/Posts";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Posts />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
