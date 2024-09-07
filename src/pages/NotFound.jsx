import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom"

const NotFound = () => {
    return (
      <>
        <Layout>
          <h1 className="font-bold text-7xl text-blue-950 text-center mb-2">
            Sorry,Not Found Page :( 


          </h1>
          <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><NavLink to="/"  className="text-black hover:text-slate-400">Get back Home</NavLink></a>
        </Layout>
        
          
        
        </>
      );
    };
    
    export default NotFound;
