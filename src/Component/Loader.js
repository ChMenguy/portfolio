import React, { useEffect, useState } from 'react';
import LogoLoad from '../Assets/Images/logoLoad.png';
import ProgressBar from 'react-bootstrap/ProgressBar'

function Loader(){
    const [percent,setPercent] = useState(0)

    useEffect(()=>{
        setInterval(() => {
            setPercent(100)
        }, 1000);
    },[])

    return(
        <div className="mt-5">
            <div className="mx-auto text-center" >
                <img src={LogoLoad} alt="logo" width="400px" className="ml-2 " />
            </div>
            <div className="w-50 mx-auto mt-5">
                <ProgressBar width ={10} animated={true} now={percent} />
            </div>
        </div>
        
        
    )
}

export default Loader