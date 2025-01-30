import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col py-16 gap-4 text-gray-800 items-center"
      id="speciality"
    >
      <h1 className="text-3xl  font-medium">find by speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex gap-4 flex-wrap sm:justify-center pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link onClick={()=>(scrollTo(0,0))} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`}>
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
