import React from 'react';
import film from '../../../public/film.json';
import Lottie from 'lottie-react'

const LotieAnimation = () => {
    return (
        <div className='w-1/2'>
            <Lottie loop={true} animationData={film}/>
        </div>
    );
};

export default LotieAnimation;