import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../assets/icons/clock.svg';
import Marker from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 px-2 gap-4 md:px-12 lg:px-24'>
            <InfoCard cardTittle='Opening Hours' cardDep='Lorem Ipsum is simply dummy text of the pri' bgClass="bg-gradient-to-r from-secondary to-primary" img={Clock} />
            <InfoCard cardTittle='Visit our location' cardDep='Brooklyn, NY 10036, United States' bgClass="bg-accent" img={Marker} />
            <InfoCard cardTittle='Contact us now' cardDep='+000 123 456789' bgClass="bg-gradient-to-r from-secondary to-primary" img={Phone} />
        </div>
    );
};

export default Info;