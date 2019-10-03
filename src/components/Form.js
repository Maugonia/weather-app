import React from 'react';
import "./Form.css"
const  Form = props => {
    return (  
     
        <form onSubmit={props.submit}>
              <div class="input-group mb-3">
              {/* <div class="col-2"> */}
            <input 
            type="text" className="form-control"
            value={props.value}
            onChange={props.change}
            placeholder="City"
            />
           

            <div class="input-group-append">
            <button className="btn btn-dark" id="button-addon2">Search city</button>
            </div>
         
            </div>



  



        </form>
    
    );
}
 
export default Form;