import React, {useState} from 'react'

export default function FaqCard(props) {
    const [desc, setDesc] = useState(false)
  return (
    <div>
    <div className={`  ${desc ? "bg-[#FF5A5F] text-white" : "bg-[#F4F4F4] text-black"} rounded px-2 py-2 xl:px-10 text-sm xl:text-3xl`} onClick={(e)=>(setDesc(!desc), e.stopPropagation())}>
        <h1 className={`font-normal  `}>{props.title || "Heading Goes here"}</h1>
    </div>
        <p className={` ${desc ? "" : "hidden"} bg-[#F4F4F4] text-black text-xs xl:text-lg  p-3 xl:px-12`}>{props.description || "Description will go here"}</p>
    </div>
  )
}
