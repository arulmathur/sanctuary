import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);

      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error.message);
      setLoginError(
        "Incorrect email or password, please try again or create an account"
      );
    }
  };

  return (
    <div className="p-10">
      <p className="text-4xl font-bold mb-10">Log In</p>
      <div className="flex flex-col">
        {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <p className="text-sm mb-2" htmlFor="email">
              Email address
            </p>
            <input
              className="appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className="text-sm mb-2" htmlFor="password">
              Password
            </p>
            <input
              className="appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-right mb-10 text-sm mt-2">Forgot password?</p>
          <div className="flex flex-col items-center justify-center">
            <button
              className="bg-blue-700 hover:bg-blue-900 text-white border border-blue-700 font-bold py-3 rounded-xl w-full"
              type="submit"
            >
              Log in
            </button>
            {loginError && (
              <button
                onClick={() => navigate("/signup")}
                className="bg-white hover:bg-gray-200 text-black border border-blue-700 font-bold py-3 rounded-xl w-full mt-2"
              >
                Create Account
              </button>
            )}
          </div>
        </form>
        <div className="flex items-center text-center">
          <hr class="h-px my-8 w-full  dark:bg-gray-400"></hr>
          <p class="text-sm flex-none mx-3 text-gray-500 font-light">
            Or login with
          </p>
          <hr class="h-px my-8 w-full  dark:bg-gray-400"></hr>
        </div>

        <div className="flex flex-row items-center justify-center space-x-3">
          <button
            // onClick={handleGoogleSignIn}
            className="border px-10 py-3 rounded-xl bg-gray-400 hover:cursor-default"
          >
            <img
              className="w-full h-full md:h-10 md:w-10"
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              loading="lazy"
              alt="facebook logo"
            />
          </button>
          <button
            // onClick={handleGoogleSignIn}
            className="border px-10 py-3 rounded-xl bg-gray-400 hover:cursor-default"
          >
            <img
              className="w-full h-full md:h-10 md:w-10"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
          </button>
          <button
            // onClick={handleGoogleSignIn}
            className="border px-10 py-3 rounded-xl bg-gray-400 hover:cursor-default"
          >
            <img
              className="w-full h-full md:h-10 md:w-10"
              src="https://www.svgrepo.com/show/475633/apple-color.svg"
              loading="lazy"
              alt="apple logo"
            />
          </button>
        </div>
        <p className="text-center mt-5 text-gray-500 text-xs italic">
          Login with third parties coming soon
        </p>
        <div className="flex justify-center space-x-1 mt-5">
          <p className="font-light">Don't have an account? </p>
          <a href="/signup" className="font-semibold">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
