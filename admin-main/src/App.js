import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Components/User/Users";
import UsersEdit from "./Components/User/Edit";
import CreateHouse from "./Components/House/Create";
import ViewHouse from "./Components/House/View";
import EditHouse from "./Components/House/Edit";
import FeedBack from "./Components/Feedback/view";
import TopNav from "./Dashboard/TopNav";
import Side from "./Dashboard/Side";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <Routes>
          {/* <Route path="/Side" element={<Side/>} /> */}

          <Route path="/" element={<Users />} />
          <Route path="/Edit/:id" element={<UsersEdit/>} />
        
          <Route path="/createHouse" element={<CreateHouse/>} />
          <Route path="/View" element={<ViewHouse/>} />
          <Route path="/Edit/:id" element={<EditHouse/>} />

          <Route path="/ViewFeedback" element={<FeedBack/>} />
          <Route path="/side" element={<Side/>} />
          <Route path="/TopNav" element={<TopNav/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
