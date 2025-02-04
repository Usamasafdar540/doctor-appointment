import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchDoctorInfo = async () => {
      const doctor = doctors.find((doc) => doc._id === docId);
      setDocInfo(doctor || null);
      setLoading(false); 
    };
    
    fetchDoctorInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (!docInfo) return;
    
    let groupedSlots = [];
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let dayName = daysOfWeek[currentDate.getDay()];
      let date = currentDate.toLocaleDateString([], { day: "2-digit", month: "short" });

      if (i === 0) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      let timeSlots = [];
      while (currentDate < endTime) {
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: currentDate.toLocaleString([], { hour: "2-digit", minute: "2-digit", hour12: true }),
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      groupedSlots.push({
        dayName,
        date,
        slots: timeSlots,
      });
    }

    setDocSlots(groupedSlots);
  }, [docInfo]);

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : docInfo ? (
        <>
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <img
                className="bg-primary w-full sm:max-w-72 rounded-lg"
                src={docInfo.image}
                alt="doctor-image"
              />
            </div>
            <div className="flex-1 border border-gray-300 p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 rounded-lg">
              <p className="flex items-center gap-2 text-2xl font-medium text-gray-500">
                {docInfo.name}
                <img className="w-5" src={assets.verified_icon} alt="" />
              </p>
              <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                <p>
                  {docInfo.degree} - {docInfo.speciality}
                </p>
                <button className="py-0.5 px-2 border text-xs rounded-full">
                  {docInfo.experience}
                </button>
              </div>
              <div>
                <p className="flex gap-1 text-sm font-medium text-gray-900 mt-3 items-center">
                  About <img src={assets.info_icon} alt="" />
                </p>
                <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
              </div>
              <p className="text-gray-600 mt-3 font-medium">
                Appointment Fee: {currencySymbol} {docInfo.fees}
              </p>
            </div>
          </div>

          {/* Booking Slots */}
          <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
            <p>Booking Slots</p>
            <div className="flex gap-3 text-sm items-center w-full overflow-x-scroll mt-4">
              {docSlots.map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`text-center py-6 min-w-16 rounded-full font-medium cursor-pointer ${
                      selectedDateIndex === index ? "bg-primary text-white" : ""
                    }`}
                    onClick={() => {
                      setSelectedDateIndex(index);
                      setSelectedSlot(null);
                    }}
                  >
                    <p>{item.dayName}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {docSlots.length > 0 && (
              <div className="flex gap-3 w-full overflow-x-scroll text-center mt-4">
                {docSlots[selectedDateIndex]?.slots.map((slot, slotIndex) => (
                  <div
                    key={slotIndex}
                    className={`cursor-pointer px-3 rounded-lg min-w-50 border text-sm ${
                      selectedSlot === slot.dateTime ? "bg-primary text-white" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSlot(slot.dateTime)}
                  >
                    <p className="text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer">
                      {slot.time.toLowerCase()}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
              Book an Appointment
            </button>
          </div>

          {docInfo && <RelatedDoctors docId={docId} speciality={docInfo.speciality} />}
        </>
      ) : (
        <p className="text-center text-red-500">Doctor not found.</p>
      )}
    </div>
  );
};

export default Appointment;
