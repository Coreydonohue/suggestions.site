import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz";
import { Provider } from "react-redux";
import store from "../store";
import Books from "./pages/Books";
import Movies from "./pages/Movies";
import NavBar from "./components/Nav";
import MyList from "./pages/MyList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <NavBar/> 
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/bookranking" element={<Books />} />
        <Route path="/movieranking" element={<Movies />} />
      </Routes>
      </div>
  
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
