import React from 'react';
import Header from '../Header/Header';
import Logo from '../Logos/Logo';
import Services from '../Services/Services';
import MainHeader from '../MainHeader/MainHeader';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Logo></Logo>
            <Services></Services>
            <MainHeader></MainHeader>
        </div>
    );
};

export default Home;