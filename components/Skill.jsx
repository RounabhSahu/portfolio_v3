import React, {useEffect, useRef, useState} from 'react';
import anime from 'animejs';


const Skill = () => {
    const svg1Ref = useRef(null);
    const path1 = "M 400 300 C 300 100 400 300 100 200 C 100 350 400 200 250 400 C 200 500 200 550 250 550 C 400 300 400 300 550 550 C 600 550 600 500 550 400 C 400 200 700 350 700 200 C 400 300 500 100 400 300 "
    const path2 = "M 400 100 C 250 200 250 200 100 300 C 150 300 200 300 250 300 C 250 400 250 400 250 550 C 375 550 425 550 550 550 C 550 450 550 450 550 300 C 600 300 650 300 700 300 C 550 200 550 200 400 100 "
    const [flag, setFlag] = useState(true);
// Create an animation timeline

    return (
        <div className='bg-black relative overflow-hidden text-white section' id={'skill'}>
        <div className='w-96 h-96' onClick={()=>{
            const ref = svg1Ref.current.querySelector('path')
            const timeline = anime.timeline({
                easing: 'easeInOutQuad',
                duration: 1000,
            });
            if(flag){
                timeline.add({
                    targets: ref,
                    d: path2,
                });
                setFlag(false);
            }
            else{
                timeline.add({
                    targets: ref,
                    d: path1,
                });
                setFlag(true);
            }
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" ref={svg1Ref}
                 version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
                 xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 700 700 ">
                <path
                    d={path1}
                    fill="hsl(340, 45%, 50%)"></path>
            </svg>

        </div>
    </div>);
};

export default Skill;