import { createStore } from 'redux';

const initialState = {
    sections: {},
    isAnimating: false,
};

const SET_SECTION_IS_ANIMATING = 'SET_SECTION_IS_ANIMATING';

export const setSectionIsAnimating = (isAnimating) => ({
    type: SET_SECTION_IS_ANIMATING,
    payload: { isAnimating },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SECTION_IS_ANIMATING:
            const { isAnimating } = action.payload;
            return {
                ...state,
                isAnimating,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;