import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "./Authenticate";

const SignOutButton = () => {
  const navigate = useNavigate();
  // const { handleAuth } = useAuth();

  useEffect(() => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");

    sessionStorage.setItem("isSignedIn", false);
    // handleAuth(false);

    navigate("/");
  }, [navigate]);

  return (
    <>
      <h2>Ready to sign out?</h2>

      <button type="submit">Sign Out</button>
    </>
  );
};

export default SignOutButton;
