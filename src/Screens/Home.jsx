import React from 'react'
import NavBar from '../Components/NavBar'
import Messi from '../images/messi-min.png'
function Home() {
    return (
        <>
            <NavBar />
            <div className='container-fluid ' style={{backgroundColor:'black'}}>
                <div className='row '>
                    <div className='col-lg-5 ml-5 col-md-5 col-12'>
                        <img width='350' src={Messi}></img>
                    </div>
                    <div className='col-lg-5 col-md-5 m-5 p-5 col-12' style={{color:'white'}} >
                        <h1>BUILT FOR YOUR BODY</h1>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo inventore consequatur et at qui ea non mollitia blanditiis debitis fugiat? Nemo tenetur numquam maxime ipsum aspernatur illo magnam ex maiores!</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
