import axios from "axios";
import { ChangeEvent, useState } from "react";
import FormInput from "./FormInput";
import FormHeading from "./FormHeading";
function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      console.log(response);
      alert("account created successfully");
    } catch (err) {
      console.log(err);
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
    <div className="h-screen flex flex-col justify-center items-center  bg-white">
      <div className="text-left max-w-xl text-slate-600 border-2 border-gray-300 p-12 rounded-2xl bg-gray-50">
       <FormHeading type={"signup"}/>
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
            <button
              className="text-white bg-slate-600 hover:bg-white hover:text-gray-700 hover:border-2 hover:border-gray-700 focus:ring-4 focus:ring-blue-300 font-medium border-2 border-slate-600  text-sm px-5 py-2.5 text-center mt-4 rounded-full"
              type="submit"
            >
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Auth;


