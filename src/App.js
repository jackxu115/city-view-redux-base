import "./App.css";
import CityInput from "./CityInput";

import {useState} from "react";

import ImageList from "./ImageList";
import {useSelector} from "react-redux";

function App() {

    const isLoading = useSelector(state => state?.cityViewReducer?.isLoading)
    const index = useSelector(state => state?.cityViewReducer?.index)
    const bgImage = useSelector(state => state?.cityViewReducer?.imgLibrary)

    const [images, setImages] = useState([])
    const updateImages = (newImages) => setImages(newImages)

    return (
        <div className="App"
             style={{background: bgImage[index] && bgImage[index].regular && `url('${bgImage[index].regular}') no-repeat center center/cover fixed`}}>
            <CityInput cbUpdateImages={updateImages}/>
            <ImageList images={images}/>
            {isLoading && <img src="https://i.stack.imgur.com/kOnzy.gif"/>}
        </div>
    )
}

export default App;
