import React, { useState } from 'react';
import weba from "../src/images/jkdb10.jpg";
import webb from "../src/images/jkdb11.jpg";
import webc from "../src/images/jkdb16.jpg";
import webd from "../src/images/jkdb14.png";
import webe from "../src/images/jkdb15.jpg";
import webf from "../src/images/jkdb9.jpg";




const Products = (props) => {


    const [total,setTotal] = useState();

    const [ival, setIval] = useState(0);
    const [aval, setAval] = useState(0);
    const [bval, setBval] = useState(0);
    const [cval, setCval] = useState(0);
    const [dval, setDval] = useState(0);
    const [fval, setFval] = useState(0);

    const [line,setLine] = useState(false);
    const [linea, setLinea] = useState(false);
    const [lineb, setLineb] = useState(false);
    const [linec, setLinec] = useState(false);
    const [lined, setLined] = useState(false);
    const [linee, setLinee] = useState(false);

    const [click, setClick] = useState(false);
    const [clicka, setClicka] = useState(false);
    const [clickb, setClickb] = useState(false);
    const [clickc, setClickc] = useState(false);
    const [clickd, setClickd] = useState(false);
    const [clicke, setClicke] = useState(false);

    const [linka, setLinka] = useState(false);

    const [amount, setAmount] = useState(0);
    const [amounta, setAmounta] = useState(0);
    const [amountb, setAmountb] = useState(0);
    const [amountc, setAmountc] = useState(0);
    const [amountd, setAmountd] = useState(0);
    const [amounte, setAmounte] = useState(0);

    
    
    

    return(
        <>
        <div className="container-fluid">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <h1 className="text-center pt-5 headerr">Our Organic Products</h1>
                     <div className = "row">

                    <div className="col-md-4 pt-5 mx-auto">
                    <div className="card" style={{height: '500px', border: '2px solid grey'}}  >
                    <img src={weba} className="card-img-top" style={{height:'300px'}} alt="PAPAYA" />
                    <div className="card-body">
                    <h5 className="card-title text-center">PAPAYA</h5>
                    <h6 className="mt-3 text-center"> Price: Rs.15/kg </h6>
           
                     { line === true ? null : <div className="mt-2 adddiv">
                        <h6>Add Items </h6>
                        <button onClick={() => {
                            setLine(true);
                        }}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div> }
                    { line === true ?  <div className="mt-2 carddiv">
                    <button onClick={ () => {
                        setIval(ival - 1);
                        if( ival <= 0){
                         setIval(0);
                         setLine(false);
                        setClick(false);
                        setLinka(false);
                        setAmount(0);
                        }
                       setAmount((ival-1) * 15);
                    }}> <i class="fa fa-minus" aria-hidden="true"></i></button>
                     <h4> {ival} </h4>
                     <button onClick={ () => {
                         setClick(true);
                         setIval(ival + 1);
                         setAmount((ival+1) * 15);
                     }}> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                     </div> : null }
                     { click === true ?  <div className="">
                     <p className="text-center"> Amount: {amount}.00/- </p>
                     </div> : null }
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4 pt-5 mx-auto">
                    <div className="card" style={{height: '500px', border: '2px solid grey'}}  >
                    <img src={webb} className="card-img-top" style={{height:'300px'}} alt="RAW BANANA" />
                    <div className="card-body">
                    <h5 className="card-title text-center">RAW BANANA</h5>
                    <h6 className="mt-2 text-center"> Price: Rs.40/kg </h6>
                    
                    { linea === true ? null : <div className="mt-2 adddiv">
                        <h6>Add Items </h6>
                        <button onClick={() => {
                            setLinea(true);
                        }}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div> }
                    { linea === true ?  <div className="mt-2 carddiv">
                    <button onClick={ () =>{
                        setAval(aval - 1);
                        if(aval <= 0){
                            setAval(0);
                            setClicka(false);
                            setLinea(false);
                            setLinka(false);
                            setAmounta(0);
                            }
                        setAmounta((aval-1) * 40);
                        }}> <i class="fa fa-minus" aria-hidden="true"></i></button>
                     <h4> {aval} </h4>
                     <button onClick={ () => {
                         setClicka(true);
                         setAval(aval + 1);
                         setAmounta((aval+1) * 40);
                         }}> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                     </div> : null }
                     { clicka === true ?  <div className="">
                     <p className="text-center"> Amount: {amounta}.00/- </p>
                     </div> : null }
                    </div>
                    </div>
                    </div>



                    <div className="col-md-4 pt-5 mx-auto">
                    <div className="card" style={{height: '500px', border: '2px solid grey'}}  >
                    <img src={webc} className="card-img-top" style={{height:'300px'}} alt="MORINGA DRUMSTICK" />
                    <div className="card-body">
                    <h5 className="card-title text-center">MORINGA DRUMSTICK</h5>
                    <h6 className="mt-2 text-center"> Price: Rs.80/kg </h6>
                    { lineb === true ? null : <div className="mt-2 adddiv">
                        <h6>Add Items </h6>
                        <button onClick={() => {
                            setLineb(true);
                        }}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div> }
                    { lineb === true ?  <div className="mt-2 carddiv">
                    <button onClick={ () =>{
                        setBval(bval - 1);
                        if(bval <= 0){
                            setBval(0);
                            setClickb(false);
                            setLineb(false);
                            setLinka(false);
                            setAmountb(0);
                        }
                        setAmountb((bval-1) * 80);
                        }}> <i class="fa fa-minus" aria-hidden="true"></i></button>
                     <h4> {bval} </h4>
                     <button onClick={ () => {
                         setClickb(true);
                         setBval(bval + 1);
                         setAmountb((bval+1) * 80);
                         }}> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                     </div> : null }
                     { clickb === true ?  <div className="">
                     <p className="text-center"> Amount: {amountb}.00/- </p>
                     </div> : null }
                   </div>
                    </div>
                    </div>




                    <div className="col-md-4 pt-5 mx-auto">
                    <div className="card" style={{height: '500px', border: '2px solid grey'}}  >
                    <img src={webf} className="card-img-top" style={{height:'300px'}} alt="GREEN CHILLI" />
                    <div className="card-body">
                    <h5 className="card-title text-center">GREEN CHILLI</h5>
                    <h6 className="mt-2 text-center"> Price: Rs.80/kg </h6>
                    { linec === true ? null : <div className="mt-2 adddiv">
                        <h6>Add Items </h6>
                        <button onClick={() => {
                            setLinec(true);
                        }}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div> }
                    { linec === true ?  <div className="mt-2 carddiv">
                    <button onClick={ () =>{
                        setCval(cval - 1);
                        if(cval <= 0){
                            setCval(0);
                            setClickc(false);
                            setLinec(false);
                            setLinka(false);
                            setAmountc(0);
                        }
                        setAmountc((cval-1) * 80);
                        }}> <i class="fa fa-minus" aria-hidden="true"></i></button>
                     <h4> {cval} </h4>
                     <button onClick={ () => {
                         setClickc(true);
                         setCval(cval + 1);
                         setAmountc((cval+1) * 80);
                         }}> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                     </div> : null }
                     { clickc === true ?  <div className="">
                     <p className="text-center"> Amount: {amountc}.00/- </p>
                     </div> : null }
                    </div>
                    </div>
                    </div>



                    <div className="col-md-4 pt-5 mx-auto">
                    <div className="card" style={{height: '500px', border: '2px solid grey'}}  >
                    <img src={webd} className="card-img-top" style={{height:'300px'}} alt="COCONUT" />
                    <div className="card-body">
                    <h5 className="card-title text-center">COCONUT</h5>
                    <h6 className="mt-2 text-center"> Price: Rs.20/Piece </h6>
                    { lined === true ? null : <div className="mt-2 adddiv">
                        <h6>Add Items </h6>
                        <button onClick={() => {
                            setLined(true);
                        }}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div> }
                    { lined === true ?  <div className="mt-2 carddiv">
                    <button onClick={ () =>{
                        setDval(dval - 1);
                        if(dval <= 0){
                            setDval(0);
                            setClickd(false);
                            setLined(false);
                            setLinka(false);
                            setAmountd(0);
                        }
                        setAmountd((dval-1) * 20);
                        }}> <i class="fa fa-minus" aria-hidden="true"></i></button>
                     <h4> {dval} </h4>
                     <button onClick={ () => {
                         setClickd(true);
                         setDval(dval + 1);
                         setAmountd((dval+1) * 20);
                         }}> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                     </div> : null }
                     { clickd === true ?  <div className="">
                     <p className="text-center"> Amount: {amountd}.00/- </p>
                     </div> : null }
                
                    </div>
                    </div>
                    </div>




                    <div className="col-md-4 pt-5 mx-auto">
                    <div className="card" style={{height: '500px', border: '2px solid grey'}}  >
                    <img src={webe} className="card-img-top" style={{height:'300px'}} alt="GUAVA" />
                    <div className="card-body">
                    <h5 className="card-title text-center">GUAVA</h5>
                    <h6 className="mt-2 text-center"> Price: Rs.20/kg </h6>
                    { linee === true ? null : <div className="mt-2 adddiv">
                        <h6>Add Items </h6>
                        <button onClick={() => {
                            setLinee(true);
                        }}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div> }
                    { linee === true ?  <div className="mt-2 carddiv">
                    <button onClick={ () =>{
                        setFval(fval - 1);
                        if(fval <= 0){
                            setFval(0);
                            setClicke(false);
                            setLinee(false);
                            setLinka(false);
                            setAmounte(0);
                        }
                        setAmounte((fval-1) * 20);
                        }}> <i class="fa fa-minus" aria-hidden="true"></i></button>
                     <h4> {fval} </h4>
                     <button onClick={ () => {
                         setClicke(true);
                         setFval(fval + 1);
                         setAmounte((fval+1) * 20);
                         }}> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                     </div> : null }
                     { clicke === true ?  <div className="">
                     <p className="text-center"> Amount: {amounte}.00/- </p>
                     </div> : null }
                    </div>
                    </div>
                    </div>



                

                       
                    
                    </div>
                </div>
            </div>
        </div>

        
    
        </>
    )
}


export default Products;