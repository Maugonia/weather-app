import React from 'react';
import "./Form.css"
const  Form = props => {
    return (  
     <div className="myForm">
        <form onSubmit={props.submit}>
              <div className="input-group mb-3">
              {/* <div class="col-2"> */}
            <input 
            type="text" className="form-control"
            value={props.value}
            onChange={props.change}
            placeholder="City"
            />
           

            <div className="input-group-append">
            <button className="btn btn-dark" id="button-addon2">Search city</button>
            </div>
         
            </div>
        </form>
        </div>
    
    );
}
 
export default Form;