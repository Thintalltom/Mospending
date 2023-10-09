import React from "react";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Hand from "../../assets/Hand.png";
import Money from "../../assets/money.png";
import People from "../../assets/people.png";
import Card from "../../assets/card.png";
import Atm from "../../assets/Atmhand.png";
import Cone from "../../assets/cone.png";
import Vector from "../../assets/Vector.png";
import Orange from "../../assets/47orange.png";
import Logo from "../../assets/logo.png";
import { BiSolidCheckCircle } from "react-icons/bi";
import { BsTwitter, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
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
          <p className="breakText mt-[20px] text-slate-400 introduce font-light">
            Introducing our new instant Visa card feature! With just a few taps
            in our app, you can instantly create a virtual Visa card and start
            making purchases online or in-store. Say goodbye to waiting for your
            physical card to arrive in the mail and hello to instant spending
            power. Try it today and experience the convenience of our fintech
            app.{" "}
          </p>
          <div className="gap-[20px]  smallerText font-light">
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

      <div>
        <div className="flex justify-around flexSmall">
          <div className="p-[50px] flex justify-center align-center flex-col flexX ">
            <p className="text-4xl font-extrabold Xbold">Easy Tracking</p>
            <p className="font-light">
              Easily track your payments with our payment tracking feature.
              Monitor your bills and payments in one place, and get alerts when
              bills are due, so you never miss a payment again. With our app,
              you can simplify your finances and stay organized.
            </p>
          </div>
          <img src={People} className="flexImg" />
        </div>
      </div>

      {/*the Box section */}
      <div className=" w-100 h-[100vh] boxOffers">
        <p className="text-center text-3xl offers">
          We have more offers for you
        </p>
        <p className="text-center font-light offersText">
          With features like customizable dashboards, real-time alerts, and
          secure data encryption, <br /> you can effortlessly manage your
          transactions and take control of your financial life.
        </p>

        <div className="flex justify-around sendBox">
          <div className="bg-orange-400 p-[20px] sendBox1  mt-[30px] h-[60vh] rounded-[10px] w-[30vw]">
            <p className="text-2xl">
              Send and recieve without <br /> border
            </p>
            <p className="text-blue-700 font-light">Explore Payments </p>
            <div className="flex justify-center align-center">
              <img className="w-[300px] moneyBox" src={Money} />
            </div>
          </div>

          <div className="bg-blue-800 p-[20px] mt-[30px] h-[60vh] sendBox1 rounded-[10px] w-[30vw]">
            <p className="text-white text-2xl">Invoice that works smarter</p>
            <p className="text-orange-300">Learn more about invoices</p>
            <div className="flex justify-center align-center mt-[50px]">
              <img className="w-[300px] moneyBox" src={Card} />
            </div>
          </div>
        </div>

        {/*the Smart Company section */}
        <div className="  mt-[20px] flex align-center justify-center smart">
          <div className="bg-green-700 p-[20px] smartHold w-[80vw] h-[50vh]  rounded-[10px] mt-[20px] round-[10px]">
            <p className="text-slate-200 text-2xl ">
              Smart company debit cards help you <br /> and team go further{" "}
            </p>
            <p className="text-orange-200 font-light">Learn more about Cards</p>
            <img
              src={Atm}
              className="w-[450px] float-right mt-[-109px] smartAtm"
            />
          </div>
        </div>

        {/*the Suggestion section */}
        <div className="flex justify-center align-center mt-[50px] suggest">
          <div className="bg-[#3B38B2] w-[80vw] h-[50vh] suggestBox1 rounded-[20px]">
            <img src={Cone} className="suggestBox1Img" />
            <div className="flex justify-center suggestBox2 align-center">
              <img src={Vector} className="w-[100px] suggestBox2Img" />
              <p className="text-6xl text-center text-white">
                We offer personalised <br /> saving suggestions
              </p>
            </div>
            <div className="flex justify-around orangeBox">
              <img src={Orange} className="orange1" />
              <button className="text-white p-[20px] orangeBtn h-[60px] mt-[20px] bg-[#FFA051] rounded-[30px]">
                {" "}
                Create Account
              </button>
              <img src={Orange} className="orange1" />
            </div>
          </div>
        </div>

        {/*the footer section */}
        <div className="bg-[#000000] mt-[-70px] h-[50vh] footerS0 flex ">
          <div className="h-[50vh] w-screen footerS1">
            <div className=" h-[30vh] mt-[150px] p-[20px] footerS2">
              <div className="flex justify-between footerS3">
                <div>
                  <img src={Logo} />
                  <p className="text-white font-light ">
                    Discover the power of fintech
                  </p>

                  <div className="flex gap-9 mt-[10px] text-white">
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                    <BsLinkedin />
                  </div>
                </div>

                <div className="flex hover:cursor-pointer footerS4 justify-between gap-[80px] p-4 text-white">
                  <div className="p0">
                    <p className="font-light">Product</p>
                    <div className="mt-4 p1">
                      <p className="font-light">How it works </p>
                      <p className="font-light">Pricing </p>
                    </div>
                  </div>
                  <div className="text-white p1">
                    <p className="font-light">Company</p>
                    <div className="mt-4">
                      <p className="font-light">About </p>
                      <p className="font-light">FAQs</p>
                      <p className="font-light">Contact</p>
                      <p className="font-light">Blog</p>
                    </div>
                  </div>
                  <div className="text-white p2">
                    <p className="font-light">Utility</p>
                    <div className="mt-4">
                      <p className="font-light">Privacy Policy</p>
                      <p className="font-light">Term of use </p>
                      <p className="font-light">404 page</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="bg-red-500  mt-[-30px]" />
            <p className="text-white font-light text-xs mt-4">
              &copy; Mospending Poweredby SilverGeorge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage2;
