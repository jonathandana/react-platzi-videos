import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import '../assets/styles/App.scss';
import Search from "../components/Search";

//Carousel.
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";




const Home = ({myList,trends,originals}) => {

  return (
        <>
            <Search/>
            {myList &&
                <Categories title="Mi lista">
                    <Carousel>
                        {myList.map(
                            video => <CarouselItem key={video.id} {...video}/>
                        )}
                    </Carousel>
                </Categories>
            }

            {trends &&
                <Categories title="Tendencias">
                    <Carousel>
                        {trends.map(
                            video => <CarouselItem key={video.id} {...video}/>
                        )}
                    </Carousel>
                </Categories>
            }

            {originals &&
            <Categories title="Originales de Platzi video">
                <Carousel>
                    {originals.map(
                        video => <CarouselItem key={video.id} {...video}/>
                    )}
                </Carousel>
            </Categories>
            }
        </>
    );
};

const mapStateToProps = state =>{
  return{
    myList: state.myList,
    trends: state.trends,
    originals: state.original,
  };
};
//export default Home;
export default connect(mapStateToProps,null)(Home);
