import React, {useState,useEffect} from 'react';
import '../assets/styles/App.scss';
import Header from "../components/Header";
import Search from "../components/Search";

//Carousel.
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const App = () => {
    const initialState = {
        "mylist": [],
        "trends": []
    };

    const [videos,setVideos] = useState(initialState);

    useEffect(()=>{
        fetch('http://localhost:3000/initalState')
            .then(res => res.json())
            .then(data => setVideos(data))
    },[]);


    return (
        <div className="App">
            <Header/>
            <Search/>
            {videos.mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>

                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {
                        videos.trends.map(video =>
                                <CarouselItem key={video.id} {...video}/>
                            )
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi video">
                <Carousel>

                </Carousel>
            </Categories>
            <Footer/>
        </div>
    );
}

export default App;
