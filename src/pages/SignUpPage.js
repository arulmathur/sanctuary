import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setSignUpError("Passwords do not match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created:", userCredential.user);
      navigate("/onboarding"); // Redirect to account link after sign up
    } catch (error) {
      console.error("Error signing up:", error.message);
      if (error.code === "auth/email-already-in-use") {
        setSignUpError(
          "This email is already in use. Would you like to sign in?"
        );
      } else {
        setSignUpError(
          "An error occurred, please try again or log in instead."
        );
      }
    }
  };

  return (
    <div className="p-10">
      <p className="text-4xl font-bold mb-10">Sign Up</p>
      <div className="flex flex-col">
        {signUpError && <p className="text-red-500 mb-4">{signUpError}</p>}
        <form onSubmit={handleSignUp}>
          <div className="mb-5">
            <p className="text-sm mb-2" htmlFor="email">
              Email
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
          <div className="mb-5">
            <p className="text-sm mb-2" htmlFor="password">
              Create a password
            </p>
            <input
              className=" appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="must be 8 characters or more"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <p className="text-sm mb-2" htmlFor="confirmPassword">
              Confirm password
            </p>
            <input
              className=" appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
              id="confirmPassword"
              type="password"
              placeholder="re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className="bg-blue-700 hover:bg-blue-900 text-white border border-blue-700 font-bold py-3 rounded-xl w-full"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="flex items-center text-center">
          <hr class="h-px my-8 w-full  dark:bg-gray-400"></hr>
          <p class="text-sm flex-none mx-3 text-gray-500 font-light">
            Or register with
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
          Sign up with third parties coming soon
        </p>
        <div className="flex justify-center space-x-1 mt-5">
          <p className="font-light">Already have an account? </p>
          <a href="/login" className="font-semibold">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
