import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Posts from "./components/Posts";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./context/UserContext";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Posts />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/create" element={<CreatePost />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
