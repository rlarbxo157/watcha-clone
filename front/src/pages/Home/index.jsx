import React,{useCallback, useState,useEffect} from 'react'
import Section from '../../components/Section/index'
import Footer from '../../views/Footer';
import Signup from '../../components/Signup';
import Header from '../../views/Header';
import axios from 'axios';
const Home = () => {

    // useEffect(()=> {
    //     axios.get('/').then((response)=> {
    //         console.log(response);
    //     })
    // },[])

    const [showSignupModal, setShowSignupModal] = useState(false);



    const onClickSignupModal =useCallback((e)=> {
        e.stopPropagation();
        setShowSignupModal((prev)=>!prev);  
    })
    return(
        <>
            <Header  show={showSignupModal} onClickSignupModal={onClickSignupModal} />
            {showSignupModal?<Signup />:null}
            <Section />
            <Footer />
        </>
    )
}

export default  Home;