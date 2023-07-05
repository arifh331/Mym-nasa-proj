import { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import Nasa from "./pages/nasa";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Nasa setLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
