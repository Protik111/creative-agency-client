import React from 'react';
import Header from '../Header/Header';
import Logo from '../Logos/Logo';
import Services from '../Services/Services';
import MainHeader from '../MainHeader/MainHeader';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Logo></Logo>
            <Services></Services>
            <MainHeader></MainHeader>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;