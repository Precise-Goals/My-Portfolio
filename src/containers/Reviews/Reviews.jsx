import React from "react";
import "./reviews.css";
import { Reviewdata } from "./datas";

const Reviews = () => {
  const memoizedReviewData = React.useMemo(() => Reviewdata, []);

  return (
    <>
      <div id="Review" className="reviews">
        <div className="bgany">
          <div className="bgimg"></div>
          <div className="titlecontent">
            <h1>Work Appreciations</h1>
            <div></div>
            <p>
              Here are some beloved comments regarding the work value I provided to the Clients. <br /> Thanks for giving Review :D
            </p>
          </div>
          <div className="contennt">
            <div className="reviews">
              {memoizedReviewData.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="card">
                    <img width={60} height={60} src={review.pfp} alt={review.Username} loading="lazy" className="avatar" />
                    <div className="username">{review.Username}</div>
                  </div>
                  <div className="message">{review.message}</div>
                </div>
              ))}
            </div>
          </div>
          {/* <button><a href="#reviews">More Reviews</a></button> */}
        </div>
      </div>
    </>
  );
};

export default Reviews;
