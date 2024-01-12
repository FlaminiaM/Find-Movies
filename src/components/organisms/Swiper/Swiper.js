import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

import './Swiper.scss';

import movieImage from '../../../assets/images/movie-image.png'
import MoviePreview from '../../molecules/MoviePreview/MoviePreview';
import Icon from '../../atoms/Icon/Icon';

function Swiper({ moviesData, name, type }) {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Register Swiper web component
        register();

        // Object with parameters
        const params = {
            // slidesPerView: 5,
            navigation: true,
            breakpoints: {
                0: {
                    slidesPerView: 1.5,
                },

                660: {
                    slidesPerView: 3.2,
                },
                768: {
                    slidesPerView: 4.2,
                },

                1020: {
                    slidesPerView: 5.2,
                },

                1200: {
                    slidesPerView: 6.2,
                },

            },
            navigation: {
                nextEl: `#swiper-${name} .swiper-navigation__next`,
                prevEl: `#swiper-${name} .swiper-navigation__prev`,
            }
        };

        // Assign it to swiper element
        Object.assign(swiperRef.current, params);

        // initialize swiper
        swiperRef.current.initialize();
    }, []);


    return (
        <div className='swiper-wrapper' id={`swiper-${name}`}>
            <swiper-container
                init="false" ref={swiperRef}
            >
                {
                    moviesData.map(movie => <swiper-slide key={movie.id}><MoviePreview type={type} id={movie.id} title={movie.title} rating={movie.vote_average} image={movie.poster_path} /></swiper-slide>)
                }



            </swiper-container>
            {/* <div className='swiper-navigation'>
            </div> */}

            <div className='swiper-navigation swiper-navigation__prev'><Icon name='play' height={40} width={40} viewbox="0 0 24 24" /></div>
            <div className='swiper-navigation swiper-navigation__next'><Icon name='play' height={40} width={40} viewbox="0 0 24 24" /></div>



        </div>
    )
}

export default Swiper;