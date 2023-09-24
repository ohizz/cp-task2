

const Containers = () => {
    const candidates:{name: string, country: string, degree:string, date:string}[] = [{name:'Aaliyah Sanderson', country:"Riyadh, Saudi Arabia", degree: "Bachelor - Cambridge University", date:"2023 - 2023"}, {name:'John Doe', country:"Baston, USA", degree: "Bachelor - MIT", date:"2023 - 2023"}, {name:'Thomas Matt', country:"Edinburgh, UK", degree: "Bachelor - Havard University", date:"2023 - 2023"}, {name:'Kamilia Smith', country:"London, UK", degree: "Bachelor - Boston University", date:"2023 - 2023"}, {name:'Roy Jade', country:"Cmabridge, UK", degree: "Bachelor - Yale University", date:"2023 - 2023"}, {name:'Ahmed Salman', country:"Riyadh, Saudi Arabia", degree: "Bachelor - Cambridge University", date:"2023 - 2023"}];
 return(
    <div className="flex flex-col justify-center gap-x-6 items-center">
 <div className="absolute top-40 left-20">
    <input type="text" className=" w-[299px] border border-transparent bg-white shadow-lg px-2 py-2.5  rounded-lg" placeholder="search by name"/>

<div className="bg-white mt-4 p-4 border rounded-lg">

<div className="flex justify-between gap-x-8 border-b border-gray py-2 mb-4">
        <p>Filter</p>
        <p>0 selected</p>
    </div>

    <div className="flex flex-col justify-start gap-y-6 [&>*]:border-gray-100  [&>*]:border-b [&>*:last-child]:border-b-0 [&>*]:pb-2 [&>*]:flex [&>*]:justify-between">
        <div>
        <p>Personal Information</p>
        <svg className="text-blue-500 w-4 h-4 mt-px ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg>
        </div>
        <div>
        <p>Education</p>
        <svg className="text-blue-500 w-4 h-4 mt-px ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg>
        </div>
        <div>
        <p>Work Experience</p>
        <svg className="text-blue-500 w-4 h-4 mt-px ml-2" xmlns="http://www.w3.org/
        
        2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg>
        </div>
        <div>
        <p>Activity Filter</p>
        <svg className="text-blue-500 w-4 h-4 mt-px ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg>
        </div>
        <div className=" flex gap-x-8 justify-center items-center">
        <p>Advance Filter</p>
        <svg className="text-blue-500 w-4 h-4 mt-px ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg>
        </div>
        </div>
   
    </div>
</div>
    <div className="absolute top-40 right-[5rem] bg-white border rounded-lg border-b-gray px-4 py-2.5">
        <div className="w-[48rem] h-10 flex justify-between items-center">
        <div className="flex gap-x-4 items-center">
            <input type="checkbox"/> <p className="text-blue-700">247 candidates</p>
        </div>
        <div className="flex gap-x-10 justify-center items-center">
            <p className="text-blue-700">Qualified</p>
            <p className="text-sm cursor-pointer">Task <span className="ml-1 p-1 bg-gray-100 rounded-lg text-black">25</span></p>
            <p className="text-sm cursor-pointer">Disqualified<span className="ml-1 p-1 bg-gray-100 rounded-lg text-black">78</span></p>
        </div>
    </div>
        </div>

<div className="mt-10 absolute top-60 left-[420px] flex gap-y-10 flex-col">
{candidates.map((candidate) => (
    <div className="flex gap-x-8 items-center">
        <input type="checkbox"/>
        <div className="bg-blue-100 text-blue-200 border rounded-full w-20 h-20 flex justify-center items-center text-2xl">
            AS</div>
        <div className="flex flex-col gap-y-2">
       <h1 className="font-black"> {candidate.name}</h1>
       <p className="text-sm font-medium">{candidate.country}</p>
       <p className="text-sm font-extralight ">{candidate.degree} {candidate.date}</p>
       {/* <p>{candidate.tag}</p> */}
    </div>
    </div>
))}
</div>
    <div>

    </div>
 
    </div>

 )
}

export default Containers;