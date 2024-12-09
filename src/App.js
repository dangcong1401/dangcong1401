import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./page/login/login";
import Register from "./page/register/register";

function App() {
  return (
    <div className="App">
      <Header>

      </Header>
      <Routes>
          <Route  path="/" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
    </div>
  );
}

export default App;
