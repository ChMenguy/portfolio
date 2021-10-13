
import React, { useEffect, useState } from 'react';
import About from './Component/About';
import Service from './Component/Service';
import Banner from './Component/Banner'
import PricingPlan from './Component/PricingPlan';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Portfolio from './Component/Portfolio';
import Navbar from './Component/Navbar';
import Loader from './Component/Loader';


function Display() {
    const [load,setLoad] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoad(false)
        }, 1600);
    })

    return (
        load ?
            <Loader />
            :
            <div className="App">
                <Navbar />
                <Banner/>
                <About/>
                <Service/>
                <Portfolio/>
                <PricingPlan/>
                <Contact/>
                <Footer/>
            </div>
    );
}

export default Display