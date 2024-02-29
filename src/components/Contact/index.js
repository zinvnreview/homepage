
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import React from "react";
import { NavLink } from "react-router-dom";


export default function Contact() {
  return (
    <div
      id="contact"
      className="flex text-center flex-col gap-12 my-10 min-h-screen ml-4 overflow-hidden"
    >
      <div className="text-5xl font-bold" data-aos={"fade"}>
        Liên hệ tôi
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row ">
        <div className="flex-auto  md:w-32  sm:pl-0  overflow-visible">
          <form className="ml-2"   data-aos={"slide-up"}>
          <button
        className="py-2 mx-auto px-7 bg-transparent border-2 w-fit border-blue-500 rounded-sm  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800"
        data-aos="zoom-out-up"
        data-aos-delay="1400"
      >
        <NavLink
          to="#"
          onClick={() => {
            window.location.href = 'mailto:kunmaxstudio@gmail.com'
          }}
        >
          <p title="Contact"> Liên Hệ Tôi</p>
        </NavLink>
      </button>
          </form>
        </div>
        <div className="flex-auto w-full md:w-80  flex flex-col justify-center text-center items-center  gap-1">
          <div
            data-aos={"fade-left"}
            className="w-[180px]  md:w-[290px] lg:w-[350px] hidden md:block"
          >
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets9.lottiefiles.com/packages/lf20_3rqwsqnj.json"
              // style={{ width: "80%" }}
            />
          </div>
          <div data-aos={"slide-up"} className="text-center mt-10">
            <div className="text-center  mt-2  text-3xl xs:text-xl md:text-2xl font-bold">
              Theo
            </div>
            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-4">
              <div
                title="Github"
                onClick={() =>
                  window.open("#",)
                }
              >
                <GitHubIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                title="Instagram"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/",
                    "_blank"
                  )
                }
              >
                {" "}
                <InstagramIcon className="cursor-pointer hover:scale-105" />
              </div>
        <div
          title="YouTube"
          onClick={() =>
            window.open(
              "https://www.youtube.com/@ZinVnReview/",
              "_blank"
            )
          }
        >
          {" "}
          <YouTubeIcon className="cursor-pointer hover:scale-105" />
        </div>
              <div
                title="Facebook"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/ZinDevVn",
                    "_blank"
                  )
                }
              >
                <FacebookIcon className="cursor-pointer hover:scale-105" />
              </div>{" "}
            </div>
            <div className="mt-6 italic text-sm font-medium text-blue-500 ">
              <span className=" pl-1 ">Copyright</span>
              <CopyrightIcon className="cursor-pointer mx-1" />
              <span>2024 Zin Review</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
