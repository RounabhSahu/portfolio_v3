import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

const Nav = () => {
    const [sections, setSections] = useState([]);
    useEffect(() => {

        setSections(Array.from(document.getElementsByClassName('section')).map(function(section) {
            return section.id;
        }))

    }, []);

    return (
        <div className='w-full h-[10%] border border-white absolute bottom-0 left-0 text-white'>
            <div className='mx-auto w-1/3 border border-white h-full flex justify-around items-center'>
                {sections && sections.map((section,index)=>{
                    return (
                        <div
                            key={index}
                            className='h-full w-0  text-transparent border-4 border-amber-500 rounded-t-3xl nav-item transition-all duration-1000 hover:transform hover:scale-x-[2] hover:text-white'
                        >hello
                            <div className='h-full w-0.5 bg-amber-500 rounded-t-3xl' />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Nav;