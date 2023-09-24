import { useState } from "react";
import React from 'react'
const DropDown = () => {
const [active, setActive] = useState<boolean>(false)
const options:any[] = [{name:'Applied', title:1745}, {name:'Shortlisted', title:452}, {name:'Technical interview', title:24}, {name:'Opportunity', title:244}, {name:'Video Interview I', title:25}, {name:'Video interview II', title:25}, {name:'Offer', title:25}, {name:'Withdrawn', title:25}];
const [selected, setSelected] = useState<string>('')
 return(
<div onClick={() => setActive(!active)}>


<div className="relative">
        <button className="flex justify-between px-2 items-center w-[299px] h-10 pl-3 border border-transparent bg-white focus:outline-none">
            <span className="text-blue-500 text-sm leading-none">
                {!selected ? "Opportunity Browsing" : selected}
            </span>
            <svg className="text-blue-500 w-4 h-4 mt-px ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg>
        </button>
{active && (
<div  className="absolute z-50 flex flex-col w-[299px] mt-1  border border-transparent bg-white shadow-lg rounded-sm">
    {options.map((option) => (
         <div className="group cursor-pointer justify-between items-center hover:bg-blue-100  py-2 text-sm" onClick={() => {
            setSelected(option.name)
            setActive(false)
        }}>
        <div className="group cursor-pointer flex justify-between items-center gap-x-24 hover:bg-blue-100  py-2 px-4 text-sm ">
          <a className="group-hover:text-blue-500 group-hover:bg-text-100" href="#">{option.name}</a>
            <p className="group-hover:text-blue-500 bg-gray-100 rounded-lg p-1">{option.title}</p>
          </div>
        </div>
    ))}
</div>
)}
</div>
</div>
 )
}

export default DropDown;
