import React, { useState } from 'react';
import web from "../src/images/jkdb1.jpg";
import plantb from "../src/images/jkdb2.jpg";
import plantc from "../src/images/jkdb3.jpg";
import plantd from "../src/images/jkdb4.jpg";
import plante from "../src/images/jkdb5.jpg";
import plantf from "../src/images/jkdb6.jpg";
import plantg from "../src/images/jkdb17.jpg";
import planth from "../src/images/jkdb18.jpg";




const About = () => {

    const [image, setImage] = useState(web);
    const [num, setNum] = useState(0);

    const imgArr = [plantb, plantc, plantd, plante, plantf, plantg, planth, web];
    let i = 0;
  
    const increment = () =>{
        setNum(num + 1);
        setImage(imgArr[num]);
        

        if(num >= (imgArr.length-1)){
            setNum(0);
        }
    }
    


   

    


    return(
        <>
        <section className="my-5">
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-10 mx-auto pt-3">
                    <div className='row'>
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mx-auto my-auto abtdiv">
                            <h2 className="text-center"> About us </h2>
                            <p style={{textAlign:'justify'}} className="pt-2"> <span style={{fontWeight:'bold', color:'rgb(0, 122, 0)'}}>Manjulata Organic</span> supports the value of organic products and encourging people to start Organic Farming. 
                            We do Farming activity starts from the nursery to plantation to harvesting without using any synthetic fertilizer or pesticides. </p>
                            <h4>We urge everyone to use organic products in order to:  </h4>
                            <h6> 🌳 Help prevent soil erosion   </h6>
                            <h6> 🌳 Save energy by not using pesticides and fertilizers </h6>
                            <h6> 🌳 Protect the health of farm workers </h6>
                            <h6> 🌳 Keep the carcinogens found in most herbicides and pesticides out of our water systems  </h6>
                        </div>
                        <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 mx-auto my-auto abtimg">
                              <img src={image} alt={web} />
                              <button className="btn btn-outline-primary mt-2" onClick={increment}> Click Here </button>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default About;