import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/Signup";
import SignIn from "./component/SignIn";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path="/" exact element={<Home />}></Route>}
      <Route path="/signup" exact element={<Signup />}></Route>
      <Route path="/login" exact element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
