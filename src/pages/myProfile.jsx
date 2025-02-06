import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "1997-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddressChange = (line, value) => {
    setUserData((prev) => ({
      ...prev,
      address: { ...prev.address, [line]: value },
    }));
  };

  const handleSave = () => {
    setIsEdit(false);
    
    // Display success toast
    toast.success("Profile updated successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <ToastContainer />
      <img className="w-36 rounded" src={userData.image} alt="Profile" />
      {isEdit ? (
        <input
          className="bg-gray-200 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800">{userData.name}</p>
      )}

      <hr className="bg-zinc-400 border-none h-[1px]" />

      <div>
        <p className="text-neutral-500 underline mt-5">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          {isEdit ? (
            <input
              className="bg-gray-200 max-w-52"
              type="text"
              value={userData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          ) : (
            <p className="text-blue-500">{userData.email}</p>
          )}

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-200 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}

          {/* Address - Editable */}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <>
              <input
                className="bg-gray-200 max-w-52"
                type="text"
                value={userData.address.line1}
                onChange={(e) => handleAddressChange("line1", e.target.value)}
              />
              <br />
              <input
                className="bg-gray-200 max-w-52"
                type="text"
                value={userData.address.line2}
                onChange={(e) => handleAddressChange("line2", e.target.value)}
              />
            </>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <p className="text-neutral-500 underline mt-5 font-medium">
          BASIC INFORMATION
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-medium">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              className="max-w-20 border-gray-300"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium">Date of Birth:</p>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              className="max-w-20 border-gray-300"
            />
          ) : (
            <p className="text-gray-500">{userData.dob}</p>
          )}

          {/* Edit / Save Button */}
          <div className="mt-10">
            <button
              className="border border-primary rounded-full py-2 px-8 hover:bg-primary hover:text-white transition-all duration-300"
              onClick={isEdit ? handleSave : () => setIsEdit(true)}
            >
              {isEdit ? "Save Information" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
