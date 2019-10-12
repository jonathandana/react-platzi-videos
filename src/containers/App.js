import React from 'react';
import '../assets/styles/App.scss';
import Header from "../components/Header";
import Search from "../components/Search";

//Carousel.
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const App = () => (
    <div className="App">
        <Header/>
        <Search/>
        <Categories>
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
    </div>
);


export default App;
