import { TbDental } from "react-icons/tb";
import img from "../asstes/img.png"


function HeroSection() {
  return (
    <div className="  bg-gray-100 ">
      <div className="flex items-center justify-center bg-white p-10 rounded shadow-lg space-x-8 ">
        <div className="">
          <h1 className="Heading1">Welcome To MediCare+ Clinic</h1>
          <h2 className="Heading2">Best Speslistes</h2>
          <p className="para">
            We are on the leading edge of cancer care. Proivding the full
            continuum of cancer treatments and spportive care services in a
            single conventient location..
          </p>
          <div>
            <button className="btn1 bg-blue-500 rounded-3xl cursor-pointer">
              Make an Appointment
            </button>
            <button className="btn2 bg-gray-100 rounded-lg cursor-pointer ml-3">
              Departments
            </button>
          </div>
        </div>

        <div className="box rounded-3xl"></div>
      </div>
      <div className="">
        <h1 className="feture">Our Services </h1>
        <p className="para1">We provide the most full medical services, so every person could
        <br/> heave the oppurtunity to receive qualitative medical help..</p>
      </div>

      <div className="flex  items-center justify-evenly  gap-11 p-16">
        <div className="box1 rounded-3xl px-16 ">
     <TbDental className="Dental mt-4"/>
     <h1 className="dental-heading">Dental Care</h1>
  
        </div>
        <div className="box2 bg-blue-600 rounded-3xl py-14 ">
        <img src="https://cdn-icons-png.freepik.com/512/8389/8389738.png " alt="pulmonary"  className="pulmonary mt-7 ml-12 "/>
        <h1 className="pulmonary-name mt-7 ml-12 ">Pulmonary</h1>
        </div>
        <div className="box3 rounded-3xl py-14">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZXonXRN-BReUsQxOhv4iL24nBjOaZHyOu2g&s" alt="neruological" className="pulmonary  mt-7 ml-12"  />
      <h1 className="nerulogical mt-7 ml-12">Nerological</h1>
        </div>
        <div className="box4 rounded-3xl py-14">
         <img src={img} alt="" className="pulmonary mt-7 ml-12" />
         <h1 className="nerulogical mt-7 ml-12 " > Prediatirics</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
