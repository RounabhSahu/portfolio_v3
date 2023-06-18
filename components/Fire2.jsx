import React, {useEffect} from 'react';
import anime from "animejs";

const Fire2 = () => {
    const xtrans=['-30%','-80%','-96%']
    const ytrans=['-40%','-60%','-10%']
    const colors =['rgba(255,0,0,1)','rgb(255,98,0)','rgb(255,69,0)','rgb(255,145,0)','rgba(255,0,0,1)']
    const ele =['#flameBase .flame21','#flameBase .flame22','#flameBase .flame23']
    const flameType1 = () => anime({
        targets: '#flameContainer1 .flame',
        delay: anime.stagger(450),
        translateY: function(){return ['-50%',anime.random(-80, -300)]},
        rotate:30,
        backgroundColor: [
            {value: ['#de0404', '#ffa500']},
            {value: ['#ffa500', '#fff300']},
        ],
        opacity:function(){return anime.random(1, 0);},
        translateX: function(){return ['-50%',anime.random(0, -100)];},
        scale: {
            value: 0,
            easing: 'easeOutQuad'
        },
        skew: function () {return anime.random(0, 10);},
        loop: true,
        easing: "easeInSine",
        duration: 1300,
    })
    const flameType2 = () => anime({
        targets: '#flameContainer2 .flame',
        delay: anime.stagger(700),
        backgroundColor: [
            {value: ['#F7D17E', '#FFC857']},
            {value: ['#FFC857', '#ffc700']},
        ],
        translateY: function(){return ['-40%',anime.random(-80, -300)]},
        rotate:30,
        opacity:1,
        translateX: function(){return ['-60%',anime.random(-50, -150)];},
        scale: {
            value: 0,
            easing: 'linear'
        },
        skew: function () {return anime.random(0, 10);},
        loop: true,
        easing: "easeInSine",
        duration: 1500,
    })
    const flameType3 = () => anime({
        targets: '#flameContainer3 .flame',
        delay: anime.stagger(200),
        translateY: function(){return ['-60%',anime.random(-80, -300)]},
        rotate:30,
        backgroundColor: ['#de0404', '#ffdd00'],
        opacity:1,
        translateX: function(){return ['-60%',anime.random(-20, 20)];},
        scale: {
            value: 0,
            easing: 'easeOutQuad'
        },
        skewX:function(){
            let i =anime.random(0,100)
            return [-70,70][Math.floor(i/50)]
        },
        loop: true,
        easing: "easeInSine",
    })
    const flameType4 = () => anime({
        targets: '#flameContainer4 .flame',
        delay: anime.stagger(400),
        translateY: function(){return ['-60%',anime.random(-80, -300)]},
        rotate:30,
        backgroundColor: ['#f7ff00', '#c00e0e'],
        opacity:1,
        // opacity:function(){return anime.random(.5, 1);},
        translateX: function(){return ['-60%',anime.random(-70, -30)];},
        scale: {
            value: 0,
            easing: 'linear',

        },
        skew: function () {return anime.random(0, 10);},
        loop: true,
        easing: "easeInSine",
        duration: 1000
    })
    const baseFlame1 =()=>anime({
        targets: '#flameBase .flame1',
        scaleX:0,
        skewX:function(){
            let i =anime.random(0,100)
            return [-70,70][Math.floor(i/50)]
        },
        scaleY:0.5,
        backgroundColor: [
            {value: [colors[anime.random(0,3)], '#ff0000']},
            {value: ['#ff5900', '#fff300']},
        ],
        endDelay: 800,
        delay:anime.stagger(1200),
        opacity:1,
        translateX: ['-110%',anime.random(-10, -200)],
        translateY: function(){return ['-40%',anime.random(-400, -700)]},
        duration: 1200,
        easing: 'linear',
        loop: true,
    })
    const baseFlame2 =(str,i)=>anime({
        targets: str,
        keyframes: [
            {scale: .8},
            {scale: .825},
            {scale: .95},
            {scale: .9},
            {scale: .85},
            {scale: .8}
        ],
        backgroundColor: ['#9d0404', 'rgba(255,140,0,0.93)'],
        translateX: function(el){
            return [xtrans[i],xtrans[i]]
            // return [`${anime.random(30,80)}%`,`${anime.random(30,80)}%`]
        },
        translateY: function(el){
            return [ytrans[i],ytrans[i]]
            // return [`${anime.random(30,80)}%`,`${anime.random(30,80)}%`]
        },
        duration: 1400,
        easing: 'easeInSine',
        loop: true,
    })
    const baseFlame3 =()=>anime({
        targets: '#flameBase .flame3',
        scaleX:0,
        skewX:function(){
            let i =anime.random(0,100)
            return [-70,70][Math.floor(i/50)]
            },
        scaleY:0.5,
        endDelay: 300,
        opacity:1,
        translateX: ['-10%',anime.random(100, -150)],
        translateY: function(){return ['-10%',anime.random(-400, -700)]},
        duration: 2000,
        backgroundColor: [colors[anime.random(0,3)], '#ff003b'],
        delay:anime.stagger(1000),
        easing: 'easeInSine',
        loop: true,
    })
    useEffect(()=>{
        flameType1()
        flameType2()
        flameType3()
        flameType4()
        baseFlame1()
        baseFlame3()
        let i=0
        const baseFlame2Interval =setInterval(()=>{
            baseFlame2(ele[i],i)
            i++

        },400)

    },[])
    return (
        <div className='w-full h-full relative'>
            <div className='absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2' id='flameContainer1'>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className='h-40 aspect-square bg-orange-500 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded origin-center flame opacity-0'
                    ></div>
                ))}
            </div>
            <div className='absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2' id='flameContainer2'>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className='h-28 aspect-square bg-orange-500 absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[60%] rounded origin-center flame opacity-0'
                    ></div>
                ))}
            </div>
            <div className='absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2' id='flameContainer3'>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className='h-32 w-36 bg-orange-500 absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[60%] rounded origin-center flame opacity-0'
                    ></div>
                ))}
            </div>

            <div className='absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 w-fit border-xl border-cyan-500' id='flameContainer4'>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className='h-20 aspect-square bg-yellow-500 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[10%] rounded origin-center flame opacity-0'
                    ></div>
                ))}

            </div>
            <div className='absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 w-fit border-xl border-cyan-500' id='flameBase'>
                <div className='h-12 w-12 bg-yellow-500/0 absolute top-1/2 left-1/2 -translate-x-[90%] -translate-y-[10%] rounded origin-center rotate-[30deg] flame1 opacity-0'></div>
                <div className='h-12 w-12 bg-yellow-500/0 absolute top-1/2 left-1/2 -translate-x-[90%] -translate-y-[10%] rounded origin-center rotate-[30deg] flame1 opacity-0'></div>
                <div className='h-12 w-12 bg-yellow-500/0 absolute top-1/2 left-1/2 -translate-x-[90%] -translate-y-[10%] rounded origin-center rotate-[30deg] flame1 opacity-0'></div>
                <div className='h-12 w-12 bg-yellow-500/0 absolute top-1/2 left-1/2 -translate-x-[90%] -translate-y-[10%] rounded origin-center rotate-[30deg] flame1 opacity-0'></div>
                <div className='h-20 w-16 bg-yellow-500/0 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded origin-center  flame21 opacity-75'></div>
                <div className='h-16 w-16 bg-yellow-500/0 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded origin-center  flame22 opacity-75'></div>
                <div className='h-12 w-12 bg-yellow-500/0 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded origin-center  flame23 opacity-75'></div>
                <div className='h-12 w-12 bg-yellow-500/0 absolute top-1/2 left-1/2 -translate-x-[10%] -translate-y-[10%] rounded origin-center rotate-[60deg] flame3 opacity-0'></div>
                <div className='h-12 w-12 bg-yellow-500/0 absolute top-1/2 left-1/2 -translate-x-[10%] -translate-y-[10%] rounded origin-center rotate-[60deg] flame3 opacity-0'></div>
                <div className='h-12 w-12 bg-yellow-500/0 absolute top-1/2 left-1/2 -translate-x-[10%] -translate-y-[10%] rounded origin-center rotate-[60deg] flame3 opacity-0'></div>

            </div>
            <div className='absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 w-fit border-xl border-cyan-500' >
                <div className='h-3 w-28 flameWood -translate-x-[50%] translate-y-[250%] '></div>

                <div className='h-[35px] w-4 flameWood translate-x-[220%] translate-y-[70%] '></div>
                <div className='h-[35px] w-4 flameWood translate-x-[90%] translate-y-[70%] '></div>
                <div className='h-[35px] w-4 flameWood -translate-x-[40%] translate-y-[70%] '></div>
                <div className='h-[35px] w-4 flameWood -translate-x-[180%] translate-y-[70%] '></div>
                <div className='h-[35px] w-4 flameWood -translate-x-[320%] translate-y-[70%] '></div>

                <div className='h-3 w-32 flameWood -translate-x-[50%] translate-y-[420%] '></div>



            </div>
        </div>
    );
};

export default Fire2;
