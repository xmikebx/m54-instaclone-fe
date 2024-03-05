import { useState, useEffect } from "react";

import LogOrSign from "./components/logOrSign/LogOrSign";
import PhotoContainer from "./components/photoContainer/PhotoContainer";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="wrapper">
      {!user.username ? (
        <LogOrSign setUser={setUser} />
      ) : (
        <>
          <Sidebar user={user.username} />
          <PhotoContainer />
        </>
      )}
    </div>
  );
}

export default App;
