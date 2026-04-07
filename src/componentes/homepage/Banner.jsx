import React from "react";
import BookImg from "../../assets/hero_img.jpg"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] my-10 rounded-2xl container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img
            src={BookImg}
          />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
            <button className="btn btn-success text-white mt-10">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
