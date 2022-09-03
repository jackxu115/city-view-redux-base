import "./ImageList.scss"
import {useDispatch, useSelector} from "react-redux";
import {displayImageIndex} from "./actions/cityViewActions";

const ImageList = ({images}) => {

    // use data from global store
    const imageLibrary = useSelector(state => state?.cityViewReducer?.imgLibrary)

    const dispatch = useDispatch()

    console.log('images got from ImageList', images)
    return (
        <div className="gallery">
            {
                // images && images.map((img, index) => {
                imageLibrary && imageLibrary.map((img, index) => {
                    return <div
                        className="imgContainer"
                        key={index}
                        style={{background: `url('${img.url}') no-repeat center center fixed`}}
                        onClick={() => dispatch(displayImageIndex(index))}
                    >
                    </div>
                })
            }
        </div>
    )
}

export default ImageList