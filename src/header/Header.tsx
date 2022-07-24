import React from 'react'



export default function Header() {
  return (
    <div className='header mt-6 mb-2'>
        <div className="headerTitles flex flex-col items-center font-serif text-gray-600">
            <span className="headerTitleSm  top-[15%]">Welcome</span>
            <span className="headerTitleLg  top-[20%] text-5xl">Blog</span>
        </div>
        <img src="https://c1.wallpaperflare.com/preview/535/878/340/ship-strom-sea-night.jpg" 
        alt="" className="headerImg w-full h-1/5 mt-2 object-cover" />
    </div>
  )
}