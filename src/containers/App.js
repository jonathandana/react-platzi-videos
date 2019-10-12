import React, {useState,useEffect} from 'react';
import '../assets/styles/App.scss';
import Header from "../components/Header";
import Search from "../components/Search";

//Carousel.
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";

const API = 'http://localhost:3000/initalState';

const App = () => {

    const initialState = useInitialState(API);


    return (
        <div className="App">
            <Header/>
            <Search/>
            {initialState.mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>

                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {
                        initialState.trends.map(video =>
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
