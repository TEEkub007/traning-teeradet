import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="font-bold text-7xl text-blue-950 text-center mb-2">
        Nvc Traning 
      </h1>
      <hr className="mt-8 mb-10 text-3xl text-center "/>
    
      <div className="flex justify-center">
        <img className="w-1/2 rounded-3xl"
          src="https://online.maryville.edu/wp-content/uploads/sites/97/2021/04/whiteboard-training.jpg"
          alt=""
        />
      </div>
    </Layout>
  );
};

export default Home;
