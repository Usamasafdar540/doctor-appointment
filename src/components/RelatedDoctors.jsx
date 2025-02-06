import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const [relDocs, setRelDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
      console.log(doctorsData, "Related Data"); // ✅ Now this will show the correct related doctors
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top {speciality} Specialists</h1>
      <p className="sm:w-1/3 text-center text-small">
        Browse through our extensive list of trusted {speciality} specialists.
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDocs.length > 0 ? (
          relDocs.slice(0, 5).map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                className="bg-blue-50 h-64 object-cover"
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
          ))
        ) : (
          <p className="text-gray-500">
            No related {speciality} specialists found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedDoctors;
