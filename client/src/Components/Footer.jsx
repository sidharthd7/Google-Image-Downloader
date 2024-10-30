import React from 'react'
import { IconButton } from '@material-tailwind/react';
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  return (
    <div className='flex gap-5 align-middle justify-center text-center bg-slate-50 border-2 border-slate-200 rounded-t-md w-screen p-3'>
        <a href='https://github.com/sidharthd7'>
          <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
            <i className="fab fa-github text-lg" />
          </IconButton>
        </a>
        <a href='https://www.linkedin.com/in/sidharth-dhawan/'>
          <IconButton className="rounded bg-[#0077B5] hover:shadow-[#0077B5]/20 focus:shadow-[#0077B5]/20 active:shadow-[#0077B5]/10">
          <i className="fab fa-linkedin text-lg" />
          </IconButton>
        </a>
        
        
    </div>
  )
}

export default Footer