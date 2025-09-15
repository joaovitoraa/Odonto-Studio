'use client'


import React from 'react';
import './Button.css'
import Image from "next/image";
export default function Button (){

const [hover, setHover] = React.useState(false);

    return (
    <div className='button-container'>
                 <button className="custom-button" onMouseEnter= {() => setHover(true)}   onMouseLeave={() => setHover(false)} >Agende sua consulta 
             <span className='icon'>
                    <Image 
                    src={hover ? "/images/seta-zul.svg" : "/images/seta.png"}
                    alt="Seta"
                    width={16}
                    height={16}
                    />
                </span>
                  </button>
    </div>
               
                
    
    )
}