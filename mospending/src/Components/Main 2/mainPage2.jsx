import React from "react";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Hand from "../../assets/Hand.png";
import { BiSolidCheckCircle } from "react-icons/bi";
const MainPage2 = () => {
  return (
    <div className="mt-[450px]  w-full h-screen">
      <div className=" bigScreen">
        <p className="text-center text-slate-900 font-extrabold text-2xl ">
          Our Features
        </p>
        <p className="text-center feature mt-4 text-slate-500 features font-extralight">
          With features like customizable dashboard, real-time alerts and secure
          data encryption <br /> you can effortlessly manage your transactions
          and take control of your financial life
        </p>
      </div>
      <div className="flex justify-around mt-[30px] FrameHolder">
        <img src={Frame1} className="frame1" />
        <img src={Frame2} className="frame2" />
      </div>

      <div className="flex justify-around mt-[10px] seconFlex">
        <img src={Hand} className="secImage" />
        <div className="mt-[150px] holder  p-[100px]">
          <p className="text-3xl font-extrabold bolderText  text-slate-900">
            Instant Visa Card
          </p>
          <p className="breakText mt-[20px] text-slate-400 introduce font-extralight">
            Introducing our new instant Visa card feature! With just a few taps
            in  our app, you can instantly create a virtual Visa card and
            start making  purchases online or in-store. Say goodbye to
            waiting for your physical
            card to arrive in the mail and hello to instant spending
            power. Try it
            today and experience the convenience of our fintech app.{" "}
          </p>
          <div className="gap-[20px]  smallerText font-extralight">
            <p className="flex gap-4 text-slate-400">
              {" "}
              <BiSolidCheckCircle className="text-orange-500" />
              instant access to funds
            </p>
            <p className="flex gap-4 text-slate-400">
              {" "}
              <BiSolidCheckCircle className="text-orange-500" />
              Convenience
            </p>
            <p className="flex gap-4 text-slate-400">
              {" "}
              <BiSolidCheckCircle className="text-orange-500" />
              Flexibility
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage2;
