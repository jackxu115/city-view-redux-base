import {AccessKey, BasicUrl, DISPLAY_IMAGE_INDEX, FETCH_ALL_IMAGES, GET_CITY} from "../consts";
import axios from "axios";

const imgLibrary = [
    {
        des: 'Crossing',
        url: 'https://images.unsplash.com/photo-1506751470038-e579eb91f580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwxfHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        des: 'body of water',
        url: 'https://images.unsplash.com/photo-1507992781348-310259076fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwzfHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        des: 'city buildings',
        url: 'https://images.unsplash.com/photo-1503206557829-9a9979ad1227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHw0fHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        des: 'city wallpapers',
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max'
    },
    {
        des: 'high-rise buildings',
        url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHw1fHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    }
]

// action creator (to return action object)

export const fetchImageInAction = () => {

    return {
        type: FETCH_ALL_IMAGES,
        payload: imgLibrary
    }
}

// async
export const fetchImageAsync = () => dispatch => {
    dispatch({
        type: 'LOADING',
        payload: true
    })
    axios.get(BasicUrl, {
        params: {
            query: 'beijing',
            orientation: 'landscape'
        },
        headers: {
            Authorization: `Client-ID ${AccessKey}`
        }
    }).then(res => {
        let {data: {results}} = res
        let imageList = results.map(item => ({
            des: item.alt_description,
            regular: item.urls.regular,
            url: item.urls.thumb
        }))
        console.log('ready to dispatch')
        dispatch({
            type: FETCH_ALL_IMAGES,
            payload: imageList
        })
        dispatch({
            type: 'LOADING',
            payload: false
        })
    }).catch(err => {
        console.log(err)
        dispatch({
            type: 'LOADING',
            payload: false
        })
    })
    console.log('fetch async from API')
}

// sync
export const fetchAsyncAwait = () => async dispatch => {
    try {
        let res = await axios.get(BasicUrl, {
            params: {
                query: 'shanghai',
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        })

        let {data: {results}} = res
        let imageList = results.map(item => ({
            des: item.alt_description,
            regular: item.urls.regular,
            url: item.urls.thumb
        }))
        console.log('ready to dispatch')
        dispatch({
            type: FETCH_ALL_IMAGES,
            payload: imageList
        })
        console.log('fetch async from API')
    } catch (err) {
        console.log(err)
    }
}

// sync
export const fetchImageWithCity = city => async dispatch => {
    try {
        let res = await axios.get(BasicUrl, {
            params: {
                query: `${city}`,
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        })

        let {data: {results}} = res
        let imageList = results.map(item => ({
            des: item.alt_description,
            regular: item.urls.regular,
            url: item.urls.thumb
        }))
        console.log('ready to dispatch')
        dispatch({
            type: FETCH_ALL_IMAGES,
            payload: imageList
        })
        console.log('fetch async from API')
    } catch (err) {
        console.log(err)
    }
}

export const displayImageIndex = index => ({
    type: DISPLAY_IMAGE_INDEX,
    payload: index
})

export const getCity = city => dispatch => {

    dispatch({
        type: GET_CITY,
        payload: city
    })
    dispatch(fetchImageWithCity(city))
}
