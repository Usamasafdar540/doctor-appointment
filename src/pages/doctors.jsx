import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const specialties = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleSpecialityClick = (speciality) => {
    if (speciality === "General physician") {
      navigate(`/doctors`);
    } else {
      navigate(`/doctors/${speciality}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="w-full sm:w-1/4 bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-semibold mb-4">Specialties</p>
          <div className="flex flex-col gap-4">
            {specialties.map((speciality, index) => (
              <p
                key={index}
                onClick={() => handleSpecialityClick(speciality)}
                className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md transition-all hover:bg-primary hover:text-white"
              >
                {speciality}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterDoc.length === 0 ? (
            <div className="col-span-3 text-center p-8 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-600 mb-4">
                No doctors available
              </h2>
              <p className="text-gray-500">
                Unfortunately, we couldn&apos;t find any doctors matching this
                specialty.
              </p>
            </div>
          ) : (
            filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              >
                <img
                  className="bg-blue-50 h-64 object-cover w-full"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
