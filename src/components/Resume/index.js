import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
      Kinh nghiệm - Kỹ Năng
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
          <li class="mb-10" data-aos="zoom-in">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold  text-white ml-30">
              Lập trình web và app stream video youtube Zin Review
            </h3>
            <time class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
              Từ 20/02/2024 đến hiện tại
            </time>
            <p class="mb-4 text-base font-normal  text-gray-400">
              Lập kế hoạch vào đưa ra các giải pháp cho các task của web và app,
              Lấy video từ kênh youtube về web và app, 
              public web và build app
            </p>
            <p class="text-base font-normal text-gray-400">
              Công nghệ: React, nodejs, Java, React Navite, firebase, SQL Server
            </p>
          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            Lập trình app Music player
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
            từ 27/02/2024 đến 28/02/2024
            </time>
            <p class="text-base font-normal text-gray-400">
              thiết kế giao diện app, Lập trình app, App có api music từ spotify, build app
            </p>
            <p class="text-base font-normal text-gray-400">
              chức năng app: Nghe nhạc, download nhạc về nghe offline
            </p>
            <p class="text-base font-normal text-gray-400">
              Công nghệ: react Navite, firebase
            </p>
          </li>
          <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              Lập trình app đọc truyện tranh
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              từ 5/2023 đến 6/2023
            </time>
            <p class="text-base font-normal text-gray-400">
            Lập kế hoạch cho các task module của projcet,Lập trình app, Sửa lỗi và tối ưu app<p>
Build app</p>
            </p>
            <p class="text-base font-normal text-gray-400">
              Công nghệ: Java,  MY SQL
            </p>
          </li>
          <p></p>
          <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              Thiết kế Website Giới thiệu công ty
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              từ 8/2022 đến 9/2022
            </time>
            <p class="text-base font-normal text-gray-400">
            Trao đổi và đưa ra giải pháp cho project, Lập kế hoạch cho các task module của projcet, Lập trình website, Sửa lỗi và tối ưu code, 
Hỗ trợ đưa source lên host
            </p>
            <p>
             Công nghệ: Java String, MySQL
            </p>
          </li>
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">Kỹ Năng của tôi</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"React Navite"} percent={50} />
            <BarGraph name={"TypeScript"} percent={30} />
            <BarGraph name={"Java"} percent={70} />
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"SQL"} percent={65} />
            <BarGraph name={"nodejs"} percent={45} />
          </div>

          <a
            href={require("../../assets/files/Daniel Resume.pdf")}
            download={"Zin"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
