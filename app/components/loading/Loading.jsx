'use client';
import './LoadingStyles.scss';
import {BallTriangle} from 'react-loader-spinner';
const LoadingScreen = () => {
    return (
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#BE123C"
            visible={true}
            wrapperClass='container'
         />
    );
};

export default LoadingScreen;