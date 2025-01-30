import { useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";

const TopDoctors = () => {
  // Check if doctors data exists and has content
  if (!doctors || doctors.length === 0) {
    return <p>No doctors available to display.</p>;
  }
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors To Book</h1>
      <p className="sm:w-1/3 text-center text-small">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
          onClick={()=>navigate(`/appointment/${item._id}`)}
            className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img
              className="bg-blue-50  h-64 object-cover"
              src={item.image}
              alt={item.name || "Doctor Image"}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <p className="w-2.5 h-2.5 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 py-2 px-6 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
        More
      </button>
    </div>
  );
};

export default TopDoctors;
