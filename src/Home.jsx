import React from 'react';
import planta from "../src/images/img1.jpg";
import { NavLink } from 'react-router-dom';








const Home = (props) => {

    

    return(
        <>
        <section className="my-5">
        <div className="container-fluid">
            <div className='row'>
                <div className="col-10 mx-auto pt-5">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mx-auto my-auto maindiv">
                        <h1 className="text-center"> Organic Farming </h1>
                        <p className="mt-3" style={{textAlign:'justify'}}>
                        Agriculture was practiced for thousands of years without the use of artificial chemicals.
                        Organic agriculture is a method of growing and processing that helps protect, rather than deplete our natural resources.
                        Instead of harmful chemicals, we use methods like composting, crop rotation and inter-planting to control weeds and pests, 
                        replenish the soil, and sustain the health of our planet.<br /><br />
                        Well-balanced soils grow strong and healthy plants, which many believe taste better and contain more balanced nutrients.
                        </p>
                        <NavLink to="/products"><button className="btn btn-outline-success" style={{borderRadius:"20px"}}>Get Started</button></NavLink>
                     </div>
                    <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 mx-auto my-auto imgdiv">
                        <img src={planta} alt={planta} />
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        </>


    )

    
}


export default Home;