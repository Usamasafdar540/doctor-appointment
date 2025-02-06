import { useState } from "react";

const inputFields = {
  email: { label: "Email", type: "email" },
  password: { label: "Password", type: "password" },
};

const Login = () => {
  const [logState, setLogState] = useState("sign up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={onSubmit} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 items-start m-auto p-8 min-w-[360px] sm:m-w-96 border rounded-xl text-zinc-600 shadow-lg text-sm">
        <p className="text-2xl font-semibold">
          {logState === "sign up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {logState === "sign up" ? "sign up" : "login"} to Book an
          Appointment
        </p>

        {/* Show "Full Name" only for Sign Up */}
        {logState === "sign up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 w-full rounded p-2 mt-1"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Render Email & Password fields dynamically */}
        {Object.entries(inputFields).map(([key, field]) => (
          <div className="w-full" key={key}>
            <p>{field.label}</p>
            <input
              className="border border-zinc-300 w-full rounded p-2 mt-1"
              type={field.type}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}

        <button className="border py-2 text-white rounded-md text-base bg-primary w-full">
          {logState === "sign up" ? "Create Account" : "Login"}
        </button>

        {logState === "sign up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setLogState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>{" "}
          </p>
        ) : (
          <p>
            Create a New Account?{" "}
            <span
              onClick={() => setLogState("sign up")}
              className="text-primary underline cursor-pointer"
            >
              Click Here
            </span>{" "}
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
