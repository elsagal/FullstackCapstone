import { useState } from "react";
// import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Store from "./components/Store/Store";
import Login from "./components/LoginSignup/LoginForm";
import SignUp from "./components/LoginSignup/SignUpForm";
import SingleProduct from "./components/Store/SingleProduct";
import HomePage from "./components/Home";
import Cart from "./components/Cart/Cart";
import Authenticate from "./components/LoginSignup/Authencticate";
import SignOutButton from "./components/LoginSignup/SignOut";
import Checkout from "./components/Cart/Checkout";
import MessageButton from "./components/Cart/MessageButton";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const [token, setToken] = useState(null);

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/SingleProduct" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/logOut" element={<SignOutButton />} />
          <Route path="/MessageButton" element={<MessageButton />} />
          <Route
            path="/logIn-signUp"
            element={
              currentForm === "login" ? (
                <Login
                  token={token}
                  setToken={setToken}
                  onFormSwitch={toggleForm}
                />
              ) : (
                <SignUp onFormSwitch={toggleForm} />
              )
            }
          />
        </Routes>
        <Authenticate token={token} setToken={setToken} />
      </div>
    </>
  );
}

export default App;
