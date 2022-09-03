import {useEffect, useState} from "react";
import "./CityInput.scss";
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncAwait, fetchImageAsync, fetchImageInAction, getCity} from "./actions/cityViewActions";

const CityInput = ({cbUpdateImages}) => {

    const dispatch = useDispatch()

    const displayCity = useSelector(state => state.cityViewReducer.city)
    // console.log(displayCity)

    // const [city, setCity] = useState(DefaultCity)
    // const [images, setImages] = useState([])

    // useEffect using function in component
    // useEffect(() => fetchCity(city), [city])

    // useEffect using dispatch action
    // useEffect(() => dispatch(fetchImageInAction()),[])

    //event handler for key down
    const cbInput = (evt) => {
        let newCity = evt.target.value.trim().toLowerCase()
        evt.key === 'Enter' && (dispatch(getCity(newCity)))
    }

    // const fetchCity = city =>
    //     axios.get(BasicUrl, {
    //         params: {
    //             query: city,
    //             orientation: 'landscape'
    //         },
    //         headers: {
    //             Authorization: `Client-ID ${AccessKey}`
    //         }
    //     }).then(res => {
    //         let {data: {results}} = res
    //         let imageList = results.map(item => ({
    //             des: item.alt_description,
    //             regular: item.urls.regular,
    //             thumb: item.urls.thumb
    //         }))
    //         setImages(imageList)
    //         cbUpdateImages(imageList)
    //         console.log('tidied data', imageList)
    //
    //     }).catch(err => console.log('fetch city http error!', err))


    return (
        <div className="searchBar">
            <input
                className="inputCity"
                type="text"
                placeholder="Search City here ..."
                onKeyDown={cbInput}
            />
            <div className="clickBtn">
                <button
                    onClick={() => dispatch(fetchImageInAction())}
                    className="fetchCity"
                >Fetch City
                </button>
                <button
                    onClick={() => dispatch(fetchImageAsync(displayCity))}
                    className="fetchCity"
                >Fetch with Async Action
                </button>
                <button
                    onClick={() => dispatch(fetchAsyncAwait(displayCity))}
                    className="fetchCity"
                >Fetch Async Await
                </button>
            </div>
            {/*<h2 className="index">{index}</h2>*/}
            {/*{JSON.stringify(images)}*/}
        </div>
    )
}

export default CityInput