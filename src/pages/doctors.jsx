import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  // console.log(speciality)
  return (
    <div>
      <p className="text-gray-600">browse through doctors speciality</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col text-gray-500 text-sm gap-4" >
          <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounder transition-all cursor-pointer">General physician</p>
          <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounder transition-all cursor-pointer">Gynecologist</p>
          <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounder transition-all cursor-pointer">Dermatologist</p>
          <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounder transition-all cursor-pointer">Pediatricians</p>
          <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounder transition-all cursor-pointer">Neurologist</p>
          <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounder transition-all cursor-pointer">Gastroenterologist</p>
        </div>
    
      <div className="w-full grid grid-cols-auto gap-4  gap-y-6">
        {filterDoc.map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
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
      </div>
    </div>
  );
};

export default Doctors;
