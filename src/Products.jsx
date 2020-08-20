import React from 'react';
import Productlists from './Listproduct.jsx';



const Products = () => {

    return(
        <>
        <div className="container-fluid">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <h1 className="text-center pt-5 headerr">Our Organic Products</h1>
                    <div className="row">

                    {Productlists.map( (value,index) => {
                        return(
                    <div className="col-md-4 pt-5 mx-auto">
                    <div className="card" style={{height: '500px', border: '2px solid grey'}}  >
                    <img src={value.imgsrc} className="card-img-top" style={{height:'300px'}} alt={value.imgsrc} />
                    <div className="card-body">
                    <h5 className="card-title text-center">{value.name}</h5>
                    <p className="card-text pt-4">{value.title}</p>
                    </div>
                    </div>
                    </div>
                        )
                    })}
                    
                    </div>
                </div>
            </div>
        </div>
    
        </>
    )
}


export default Products;