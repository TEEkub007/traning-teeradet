import React from 'react'
import Layout from '../components/Layout';
import{ useParams } from "react-router-dom";

const Contact = () => {
  const params = useParams()
  return (
    <Layout>
      <h1>{params.name}</h1>
      <h1 className="font-bold text-7xl text-center mb-2 text-blue-950">Nvc Tranning</h1>
      <hr />

      
      <h1 className='mb-3 text-center text-xl'>ติดต่อโทร 034-5665-445</h1>
      <h1 className='mb-3 text-center text-xl'>อีเมล nvctraning001@gmail.com</h1>
      <h1 className='mb-3 text-center text-xl '>ที่อยู่ 90 ถนน เทศา ตำบล พระปฐมเจดีย์ อำเภอ เมือง นครปฐม 73000</h1>
      <div className="flex justify-center mt-3">
        <img className='w-1/2 rounded-3xl' src="https://www.coursesonline.co.uk/wp-content/uploads/Subject-Programming.jpeg?height=485&dpr=2" alt="" />
        
      </div>
      
    </Layout>
  )
}

export default Contact