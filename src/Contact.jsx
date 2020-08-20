import React, { useState } from 'react';



const Contact = () => {

    const [data, setData] = useState({
        username: "",
        emailid: "",
        mobile: "",
        text: "",
    });

    const InputEvent = (event) => {
         const name= event.target.name;
         const value = event.target.value;
         setData( (preval) =>{
             return{
                 ...preval,
                 [name] : value,
             }
         })
    }

    const SubmitEvent = (e) => {
        e.preventDefault();
        alert(`Thank You! Your fullname is: ${data.username}
               Your email address is: ${data.emailid}
               Your phone number is: ${data.mobile}
               You want to say: [${data.text}]
                Click on 'OK' 😄 
                `)
    }



    return(

        <>
         <div className="container-fluid">
             <div className='row'>
                 <div className="col-10 mx-auto">
                 <div className='row'>
                 <div className="col-md-6 mx-auto">
                 <h1 className=" mb-4" style={{fontFamily:'mulish', fontSize: '1.5rem', textDecoration:'underline'}}> Contact us </h1>
                 <p> You can contact us on +91 9437668565 </p>
                 <form onSubmit={SubmitEvent}>
                 <div class="form-group">
                 <label for="exampleInputEmail1">Fullname</label>
                 <input type="text" className="form-control" id="exampleInputfullname" aria-describedby="fullnameHelp" name="username" onChange={InputEvent} value={data.username} />
                 </div>
                 <div className="form-group mt-3">
                 <label for="exampleInputEmail1">Email address</label>
                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailid" onChange={InputEvent} value={data.emailid} />
                 </div>
                 <div className="form-group mt-3">
                 <label for="exampleInputPassword1">Phone number</label>
                 <input type="number" className="form-control" id="exampleInputphone" name="mobile" onChange={InputEvent} value={data.mobile} />
                 </div>
                 <div className="form-group mt-3">
                 <label for="exampleFormControlTextarea1">What you want to say</label>
                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="text" onChange={InputEvent} value={data.text}></textarea>
                 </div>
                 <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
                </div>
                  </div>
                 </div>
             </div>
         </div>
        </>
    )
}


export default Contact;