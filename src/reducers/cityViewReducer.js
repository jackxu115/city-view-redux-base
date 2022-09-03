import {DISPLAY_IMAGE_INDEX, FETCH_ALL_IMAGES, GET_CITY, LOADING} from "../consts";


const initialState = {
    imgLibrary: [],
    index: undefined,
    isLoading: false,
    city: undefined
}

export const cityViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_IMAGES:
            return {...state, imgLibrary: action?.payload}
        case DISPLAY_IMAGE_INDEX:
            return {...state, index: action?.payload}
        case LOADING:
            return {...state, isLoading: action?.payload}
        case GET_CITY: {
            console.log('reducer', action.payload)
            return {...state, city: action?.payload}
        }
        default:
            return state
    }
}