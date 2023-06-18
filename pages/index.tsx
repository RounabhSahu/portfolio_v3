import React, {useEffect, useRef, useState} from 'react';
import Main from '../components/Main';
import Skill from '../components/Skill';
import About from '../components/About';
import ScrollLock from '../components/ScrollLock';
import Landing from '../components/Landing';
import Fire from '../components/Fire';
import Fire2 from '../components/Fire2';
import NavBar from "@/components/NavBar";
import {Provider, useSelector} from 'react-redux';
import store from '@/components/store';
import { useDispatch } from 'react-redux';


const Index = () => {
    // @ts-ignore
    const isAnimating = useSelector((state) => state.isAnimating);
    return (
            <div className='overflow-hidden'>
                {/*<Main />*/}
                {/*<Skill/>*/}
                {/*<About/>*/}
                {/*<Fire2/>*/}
                <Landing/>
                {/*<ScrollLock isAnimating={isAnimating}/>*/}
                {/*<NavBar/>*/}
                {/*<Fire/>*/}
            </div>
);
};

export default Index;
