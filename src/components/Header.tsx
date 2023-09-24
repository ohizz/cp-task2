import DropDown from "./DropDown";
import React from 'react'
const Header = () => {
 return(
 <header className="pt-6 flex justify-center items-start gap-x-10">
    <div>
    <h1 className="text-blue-500 text-xl font-meduim tracking-wide">London Internship Program</h1>
    <p>London</p>
    </div> 
<DropDown/>

    <div className="flex justify-center gap-x-4 items-center">
<div className="[&>*]:bg-white [&>*]:flex  [&>*]:justify-center  [&>*]:items-center [&>*]:rounded-lg [&>*]:w-10 [&>*]:h-10 flex justify-center items-center gap-x-2">
<button>
<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.96008 1.28003L16.3426 7.66253C17.1001 8.42003 17.1001 9.64253 16.3426 10.4L10.7701 15.9725C10.0126 16.73 8.79008 16.73 8.03258 15.9725L1.65008 9.59003C1.29008 9.23003 1.08008 8.73503 1.08008 8.22503V2.65253C1.08008 1.58753 1.95008 0.717529 3.01508 0.717529H8.58758C9.10508 0.717529 9.60008 0.920029 9.96008 1.28003Z" stroke="#444444" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5801 6.25254C6.15585 6.25254 6.6226 5.7858 6.6226 5.21004C6.6226 4.63428 6.15585 4.16754 5.5801 4.16754C5.00434 4.16754 4.5376 4.63428 4.5376 5.21004C4.5376 5.7858 5.00434 6.25254 5.5801 6.25254Z" stroke="#444444" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>

<button>
<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 16C13 13.7909 10.3137 12 7 12C3.68629 12 1 13.7909 1 16M15 11L19 7M15 7L19 11M7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5C11 7.20914 9.20914 9 7 9Z" stroke="#A80000" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>

<button>
<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 16C13 13.7909 10.3137 12 7 12C3.68629 12 1 13.7909 1 16M19 7L15 11L13 9M7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5C11 7.20914 9.20914 9 7 9Z" stroke="#0B0B0B" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>
<button>
<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 17C13 14.7909 10.3137 13 7 13C3.68629 13 1 14.7909 1 17M14.8281 3.17163C15.1996 3.54307 15.4942 3.98402 15.6952 4.46932C15.8962 4.95463 15.9998 5.47469 15.9998 5.99997C15.9998 6.52526 15.8963 7.04543 15.6953 7.53073C15.4943 8.01604 15.1996 8.45702 14.8281 8.82846M17 1C17.6566 1.65661 18.1775 2.43612 18.5328 3.29402C18.8882 4.15192 19.071 5.07134 19.071 5.99993C19.071 6.92851 18.8881 7.84808 18.5327 8.70598C18.1774 9.56388 17.6566 10.3435 17 11.0001M7 10C4.79086 10 3 8.20914 3 6C3 3.79086 4.79086 2 7 2C9.20914 2 11 3.79086 11 6C11 8.20914 9.20914 10 7 10Z" stroke="#0B0B0B" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>

<button>
<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L10.2286 8L17.9999 2M19 4.19995V11.8C19 12.9201 19.0002 13.4802 18.7822 13.908C18.5905 14.2844 18.2841 14.5902 17.9078 14.782C17.48 15 16.9203 15 15.8002 15H4.2002C3.08009 15 2.51962 15 2.0918 14.782C1.71547 14.5902 1.40973 14.2844 1.21799 13.908C1 13.4802 1 12.9201 1 11.8V4.19995C1 3.07985 1 2.51986 1.21799 2.09204C1.40973 1.71572 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.48 1 17.9078 1.21799C18.2841 1.40973 18.5905 1.71572 18.7822 2.09204C19.0002 2.51986 19 3.07985 19 4.19995Z" stroke="#0B0B0B" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>

</div>
        <button className="bg-[#1D5ECD] rounded-l-lg py-2 text-white w-[230px]">Move To Video Interview |</button>
    </div>
 </header>
 )
}

export default Header;