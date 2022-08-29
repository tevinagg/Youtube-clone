import React, {useState} from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";


function App() {
    const [videos, setVideos] = useState([])

    const searchSubmit = async (text) =>{
        const response = await youtube.get('/search', {
            params: {q: text}
        })
        setVideos(response.data.items)
        }

    return (
        <div className="ui container">
            <SearchBar search={searchSubmit} />
            <VideoList videos={videos}/>
        </div>
    )
}

export default App