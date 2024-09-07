import React from "react";
import Layout from "../components/Layout";

const Course = () => {
  return (
    <Layout>
      <h1 className="font-bold text-7xl text-blue-950 text-center mb-2">
        Course
      </h1>
      <h2 className="text-center font-bold text-2xl">ครอสมากมายแนะนำสำหรับคุณ!</h2>
      <hr />

      <div className="flex flex-wrap justify-center space-x-4 ">
        <div className="card max-w-sm shadow-md bg-white p-5 mb-2">
          <img
            src="https://lh3.googleusercontent.com/drive-storage/AJQWtBPzYbJSOz5Pw2aJ4qlhyau09z4Jt9RVue_OkV4BHwIkL7sL_hWLTAeEIagEpet3r-gyePWFdACk6WSDAp2XNulUspf9Q1fKCvGO2vg2gT8FuA=w1920-h953"
            alt=""
          />
          <p className="text-xl">Basic React Native</p>
          <p className="text-lg">5 Days</p>
          <button className="p-2 text-white bg-gray-400 rounded-md">
            7500$
          </button>
        </div>
        <div className="card max-w-sm shadow-md bg-white p-5 mb-2">
          <img
            src="https://lh3.googleusercontent.com/drive-storage/AJQWtBPpF0hdh7BQ6v9ijSrQByzvAKAAi1LfwsnXWcvW8c406LcP5qpc3iBu_joc-jQwe2GNmShjviILy-q0-wTGmvWUbbpvjy_neFW9OFv9r13ghw=w1920-h952"
            alt=""
          />
          <p className="text-xl">Power BI Dashboard</p>
          <p className="text-lg"> 4Days</p>
          <button className="p-2 text-white bg-gray-400 rounded-md">
            5500$
          </button>
        </div>
        <div className="card max-w-sm shadow-md bg-white p-5 mb-2">
          <img
            src="https://lh3.googleusercontent.com/drive-storage/AJQWtBOd1lvN0jBXGhOBbWG4k0X_IEdA0p2q5Zp_qk68kYdK_XE0I8gicDEZw8sDczqpodaEsRERB9C62asCks9wd4esLbFie5-fdkD72ZFoljIXWw=w1920-h953"
            alt=""
          />
          <p className="text-xl">Cross Platform with Flutter</p>
          <p className="text-lg">5 Days</p>
          <button className="p-2 text-white bg-gray-400 rounded-md">
            6500$
          </button>
        </div>
        <div className="card max-w-sm shadow-md bg-white p-5 mb-2">
          <img
            src="https://lh3.googleusercontent.com/drive-storage/AJQWtBMwBEoLRYKhzFm3kwRMsz9UBQw3AUrNcPqZRVgEK5n5GgrwkKA_nzX83KjGl3fUn-Mg0aHqu6YeeutBHyyAyt-XiUVqKzbeoWC8PLszEQ0Ryw=w1920-h953"
            alt=""
          />
          <p className="text-xl">UI Design with Figma</p>
          <p className="text-lg">3 Days</p>
          <button className="p-2 text-white bg-gray-400 rounded-md">
            5000$
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
