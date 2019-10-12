import {useState,useEffect} from 'react';

export default  function useInitialState (API) {
    const initialState = {
        "mylist": [],
        "trends": [],
        "originals":[]
    };

    const [videos,setVideos] = useState(initialState);
    useEffect(()=>{
        fetch(API)
            .then(res => res.json())
            .then(data => setVideos(data))
    },[]);

    return videos;
}
