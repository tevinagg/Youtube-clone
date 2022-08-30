import React, {useState,useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


function App() {
    const [videos, setVideos] = useState([])
    const [videoSelect, setVideoSelect] = useState(null)

    useEffect(() => {
        searchSubmit('mancity')
    }, [])

    const searchSubmit = async (text) =>{
        const response = await youtube.get('/search', {
            params: {q: text}
        })
        setVideos(response.data.items)
        setVideoSelect(response.data.items[0])
        }

        const onVideoSelect = (video) => {
        setVideoSelect(video)
        }

    return (
        <div className="ui container">
            <SearchBar search={searchSubmit} />

            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail  video={videoSelect} />
                    </div>
                    <div className='five wide column'>
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App