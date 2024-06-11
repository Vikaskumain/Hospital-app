import { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://admin.tomedes.com/api/v1/get-reviews?page=1"
        );
        const result = response.data; 
        console.log(result);  
        const formattedReviews = result.data.map(
          ({ Name, Platform, Reviews }) => ({
            name: Name,
            Platform: Platform,
            review: Reviews,
          })
        );
        setReviews(formattedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <div className="min-h-screen  bg-white p-32 ">
        <h1 className="news-heading text-center">
          We Have The Best Specialist
        </h1>
        <p className="news-para text-center">
          We have a wide experience in experience desgin and strategy,
          <br /> with locally-rooted knowledge..
        </p>
        <div className="boxess mt-10 flex justify-evenly items-center gap-12">
          <div className="outsidebox rounded-3xl">
            <div className="inside-box"></div>
            <h1 className="boxx-heading text-center p-3">Doctor Awastif al</h1>
            <p className="boxx-para text-center">Dental Care</p>
          </div>
          <div className="outsidebox rounded-3xl">
            <div className="inside-box"></div>
            <h1 className="boxx-heading text-center p-3">Doctor Awastif al</h1>
            <p className="boxx-para text-center">Dental Care</p>
          </div>
          <div className="outsidebox rounded-3xl">
            <div className="inside-box"></div>
            <h1 className="boxx-heading text-center p-3">Doctor Awastif al</h1>
            <p className="boxx-para text-center">Dental Care</p>
          </div>
          <div className="outsidebox rounded-3xl">
            <div className="inside-box"></div>
            <h1 className="boxx-heading text-center p-3">Doctor Awastif al</h1>
            <p className="boxx-para text-center">Dental Care</p>
          </div>
        </div>
      </div>
      <div className="coustmores min-h-screen ">
        <h1 className="coustomres-heading px-16 ml-16">
          What Our Coustmores Say
        </h1>
        <div className="flex flex-wrap justify-evenly   ">
          {reviews.map((review, index) => (
            <div key={index} className="m-4 ">
              <div className="border border-gray-200 rounded-3xl  text-black p-6 testmonial">
                <p className="text-center p-4">{review.review}</p>
                <div className="flex justify-center items-center p-4">
                  <div className="m-2">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png"
                      alt="testimonial-img"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center ml-4">
                    <p className="text-center">{review.Platform}</p>
                    <h1 className="text-lg font-semibold">{review.name}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="insidediv flex justify-center items-center min-h-screen  ">
          <div className="outsidediv rounded-lg">
            <div>
              <h1 className="heading-outsidediv p-6">
                Subscribe To Newsletter
              </h1>
              <p className="heading-outsidediv-para">
                {" "}
                We Have a wide experience in experience desgin and strategy
              </p>
            </div>
            <div className="form-div  m-auto rounded-2xl mt-10 flex justify-center items-center">
              <input
                type="text "
                placeholder="Enter Your Email Address"
                className="form-input"
              />
              <button className="form-btn bg-blue-600 rounded-3xl ml-2">
                Send Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
