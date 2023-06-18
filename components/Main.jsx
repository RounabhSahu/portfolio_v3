import React, {useEffect, useRef, useState} from 'react';
import anime from 'animejs';
import {useDispatch} from "react-redux";
import { setSectionIsAnimating } from './store';


const Main = () => {
    const dispatch = useDispatch();
    const main = useRef(null);
    const side = useRef(null)
    const sideTop = useRef(null)
    const sideBottom = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: main.current,
                            translateX: {
                                value:['0%','-15%'],
                                duration: 1000,
                                easing: 'easeInOutQuad',
                                delay: 4000

                            },
                            opacity:{
                                value: [0,1],
                                duration: 1000,
                                easing: 'easeInOutQuad',
                                delay: 1000
                            }

                        })
                        anime({
                            targets: side.current,
                            translateX: {
                                value: ['100%','0%'],
                                duration: 1000,
                                easing: 'easeInOutQuad',
                                delay: 4000
                            },
                        })
                        anime({
                            targets: sideTop.current,
                            translateY: {
                                value: ['-100%','0%'],
                                duration: 1000,
                                easing: 'easeInOutQuad',
                                delay: 4200
                            },
                            opacity:{
                                value: [0,1],
                                duration: 1000,
                                easing: 'easeInOutQuad',
                                delay: 4200
                            }
                        })
                        anime({
                            targets: sideBottom.current,
                            translateY: {
                                value: ['100%','0%'],
                                duration: 1000,
                                easing: 'easeInOutQuad',
                                delay: 4200
                            },
                            opacity:{
                                value: [0,1],
                                duration: 1000,
                                easing: 'easeInOutQuad',
                                delay: 4200
                            },
                            complete: () => {
                                    // localStorage.setItem('animationComplete', 'true');
                                //work the magic here
                                console.log('Dispatching animation complete')
                                dispatch(setSectionIsAnimating(false));
                                }
                        })
                    }
                    // else{
                    //     console.log('Exit Animation')
                    //     anime({
                    //         targets: sideTop.current,
                    //         translateY: {
                    //             value: ['0%','-100%'],
                    //             duration: 300,
                    //             easing: 'easeInOutQuad',
                    //             delay: 300
                    //         },
                    //         opacity:{
                    //             value: [1,0],
                    //             duration: 300,
                    //             easing: 'easeInOutQuad',
                    //             delay: 300
                    //         }
                    //     })
                    //     anime({
                    //         targets: sideBottom.current,
                    //         translateY: {
                    //             value: ['0%','100%'],
                    //             duration: 300,
                    //             easing: 'easeInOutQuad',
                    //             delay: 300
                    //         },
                    //         opacity:{
                    //             value: [1,0],
                    //             duration: 1000,
                    //             easing: 'easeInOutQuad',
                    //             delay: 1000
                    //         }
                    //     })
                    //     anime({
                    //         targets: side.current,
                    //         translateX: {
                    //             value: ['0%','100%'],
                    //             duration: 1000,
                    //             easing: 'easeInOutQuad',
                    //             delay: 2000
                    //         },
                    //     })
                    //     anime({
                    //         targets: main.current,
                    //         translateX: {
                    //             value:['-15%','0%'],
                    //             duration: 1000,
                    //             easing: 'easeInOutQuad',
                    //             delay: 2000
                    //
                    //         },
                    //         opacity:{
                    //             value: [1,0],
                    //             duration: 1000,
                    //             easing: 'easeInOutQuad',
                    //             delay: 4000
                    //         }
                    //
                    //     })
                    // }
                });
            },
            { threshold: 0.5 }
        )

        if (main.current) {
            observer.observe(main.current);
        }

    }, [main]);


    return (
        <div className='bg-black border border-white relative overflow-hidden text-white section' id={'main'}>
            <div className='absolute w-full h-full flex justify-center items-center top-0 left-0 border border-red-500 bg-amber-600' ref={main}>Hello Main</div>
            <div className='absolute top-0 right-0 w-1/3 h-full flex flex-col justify-center items-center border border-sky-500 bg-blue-700' ref={side}>
                <div className='w-full h-1/2 flex justify-center items-center border border-blue-300 bg-red-600' ref={sideTop}>Part 1</div>
                <div className='w-full h-1/2 flex justify-center items-center border border-amber-300 bg-green-500' ref={sideBottom}>Part 2</div>
            </div>
        </div>
    );
};

export default Main;