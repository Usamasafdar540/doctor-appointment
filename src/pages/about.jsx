import { assets } from "../assets/assets_frontend/assets";
const features = [
  {
    title: "Efficiency",
    description:
      "Streamlined appointment scheduling that fits into your busy lifestyle.",
  },
  {
    title: "Convenience",
    description:
      "Access to a network of trusted healthcare professionals in your area.",
  },
  {
    title: "Personalization",
    description:
      "Tailored recommendations and reminders to help you stay on top of your health.",
  },
];
const about = () => {
  return (
    <div>
      <div className="text-center text-gray-500 text-2xl pt-10">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 my-10">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-1xl text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you&apos;re booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          Why<span className="text-gray-700 font-semibold">Choose Us?</span>{" "}
        </p>
      </div>
      <div className="flex flex-col mn-20 md:flex-row">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border px-10 md:px-16 py-8 flex flex-col sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer"
          >
            <p>{feature.title}:</p>
            <b>{feature.description}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default about;
