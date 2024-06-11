function Servics() {
  return (
    <div>
      <div className="flex min-h-screen py-2 items-center justify-evenly ">
        <div>
          <div className="img-box2  rounded-2xl  absolute ml-20   ">
            <img
              className="doctor-img2  m-auto   "
              src="https://i.pinimg.com/474x/76/95/02/7695023f6e3d0d591c5806df8f48b672.jpg"
              alt="img-doctor"
            />
          <h1 className="doctor-text ">24 Servics</h1>
          </div>
        </div>
        <div>
          <h1 className="servics-heading">Clinic With Innvovative</h1>
          <p className="servics-para">
            We provide the most full medical services,so every person could
            heave the oppputunity to receive qualitative medical help..
          </p>
          <button className="servics-btn btn rounded-3xl p-2 mt-3 bg-blue-500">
            Learn More
          </button>
        </div>
        <div className="">
          <div className="img-box1  mb-96   rounded-2xl   ">
            <img
              className="doctor-img  m-auto "
              src="https://t4.ftcdn.net/jpg/04/35/00/53/360_F_435005389_NSCTMbLGcasLDcpfyFLxlbKbAOd2XoVl.jpg"
              alt="img-doctor"
            />
            <h1 className="doctor-text">Qualified Doctor</h1>
          </div>
        </div>
        <div className="">
          <div className="img-box1  rounded-2xl    ">
            <img
              className="doctor-img  m-auto bg-white   "
              src="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_640.png"
              alt="img-doctor"
            />
            <h1 className="doctor-text">Emergency Care</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servics;
