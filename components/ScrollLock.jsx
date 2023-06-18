import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import anime from 'animejs';
import { setSectionIsAnimating } from './store';

function ScrollLock({ isAnimating }) {
    const dispatch = useDispatch();

    const handleWheel = (event) => {
        event.preventDefault();
        if (isAnimating) {
            console.log('returning scrollElement');
            return;
        }
        const direction = event.deltaY >= 0 ? 'down' : 'up';
        const distance = window.innerHeight;
        dispatch(setSectionIsAnimating(true));
        console.log('working ? ---', isAnimating);
        anime({
            targets:
                window.document.scrollingElement ||
                window.document.body ||
                window.document,
            scrollTop:
                window.pageYOffset + (direction === 'down' ? distance : -distance),
            duration: 1000,
            easing: 'easeInOutCubic',
            complete: () => {
                setTimeout(() => {
                    dispatch(setSectionIsAnimating(false));
                    window.location.hash = getVisibleSectionId();
                }, 500);
                console.log('Animation complete');
            },
            update: (anim) => {
                console.log(isAnimating);
                if (anim.animations[0]) {
                    // console.log('scrollTop:', anim.animations[0].currentValue);
                }
            },
            changeBegin: function (anim) {},
        });
    };

    const getVisibleSectionId = () => {
        const sections = document.querySelectorAll('.section');
        const windowHeight = window.innerHeight;
        let closestSection = null;
        let closestDistance = Number.MAX_VALUE;
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();
            if (rect.bottom > windowHeight / 2 && rect.top < windowHeight) {
                const distance = rect.bottom - windowHeight;
                if (distance < closestDistance) {
                    closestSection = section;
                    closestDistance = distance;
                }
            }
        }
        console.log('Getting Section ID', closestSection.id);
        return closestSection ? closestSection.id : '';
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isAnimating]);

    return null;
}

export default ScrollLock;