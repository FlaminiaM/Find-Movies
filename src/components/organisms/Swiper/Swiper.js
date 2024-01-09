import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

import './Swiper.scss';

import movieImage from '../../../assets/images/movie-image.png'
import MoviePreview from '../../molecules/MoviePreview/MoviePreview';
import Icon from '../../atoms/Icon/Icon';

function Swiper({ }) {
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
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 5,
                },

                1020: {
                    slidesPerView: 6.2,
                },

            },
            navigation: {
                nextEl: ".swiper-navigation__next",
                prevEl: ".swiper-navigation__prev"
            }
        };

        // Assign it to swiper element
        Object.assign(swiperRef.current, params);

        // initialize swiper
        swiperRef.current.initialize();
    }, []);


    return (
        <div className='swiper-wrapper'>
            <swiper-container
                init="false" ref={swiperRef}
            >
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>
                <swiper-slide><MoviePreview image={movieImage} title='Everything Everywhere All at Once' rating='8.0' /></swiper-slide>


            </swiper-container>
            <div className='swiper-navigation'>
                <div className='swiper-navigation__prev'><Icon name='play' height={40} width={40} viewbox="0 0 24 24" /></div>
                <div className='swiper-navigation__next'><Icon name='play' height={40} width={40} viewbox="0 0 24 24" /></div>
            </div>


        </div>
    )
}

export default Swiper;