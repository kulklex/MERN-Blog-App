import React from 'react'



export default function Header() {
  return (
    <div className='header mt-6 mb-2'>
      <div className="headerTitles flex flex-col items-center text-[#444] font-[serif]">
        <span className="headerTitleSm absolute text-sm top-[18%]">React & Node</span>
        <span className="headerTitleLg absolute top-[20%] text-[100px]">Blog</span>
      </div>
      <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
        alt="" className="headerImg w-full h-1/5 mt-[80px] object-cover" />
    </div>
  )
}