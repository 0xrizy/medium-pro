import Quote from "../Components/Quote";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import FormInput from "../Components/FormInput";
import FormHeading from "../Components/FormHeading";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Puff } from "react-loader-spinner";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleOnSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend.rizul-thakur1.workers.dev/api/v1/user/signup",
        {
          name,
          email,
          password,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      const token = response.data.jwt;
      Cookies.set("token", token);
      setLoading(false);
      alert("account created successfully");
      window.location.href = "/blog";
    } catch (err: any) {
      console.log(err.response.data.error);
      setLoading(false);
      alert(err.response.data.error);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div className="bg-white h-screen flex flex-row justify-center items-center">
      <div className="w-full lg:w-1/2">
        <div className="h-screen flex flex-col justify-center items-center  bg-white">
          <div className="text-left max-w-xl text-slate-600 border-2 border-gray-300 p-12 rounded-2xl bg-gray-50">
            <FormHeading type={"signup"} />
            <form onSubmit={handleOnSubmit}>
              <FormInput
                label="Name"
                placeholder="John Doe"
                onChange={handleNameChange}
              />
              <FormInput
                label="Email"
                placeholder="Johndoe@gmail.com"
                onChange={handleEmailChange}
              />
              <FormInput
                label="Password"
                placeholder="●●●●●●●●"
                onChange={handlePasswordChange}
              />
              <div className="flex justify-center ">
                {!loading ? (
                  <button
                    className="text-white bg-slate-600 hover:bg-white hover:text-gray-700 hover:border-2 hover:border-gray-700 focus:ring-4 focus:ring-blue-300 font-medium border-2 border-slate-600  text-sm px-5 py-2.5 text-center mt-4 rounded-full"
                    type="submit"
                  >
                    Sign Up
                  </button>
                ) : (
                  <div className="pt-2">
                    <Puff width="60" color="gray" />
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="invisible w-0 lg:visible lg:w-1/2">
        <Quote />
      </div>
    </div>
  );
}

export default Signup;
