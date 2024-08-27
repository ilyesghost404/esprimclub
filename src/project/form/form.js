import React from 'react';
import './form.css';
export default function Form(){

    return(
        <form className='form' action='/' method='post'>
            <div>
                <h3>first name</h3>
                <input type='text' name='firstname'/>
            </div>
            <div>
                <h3>last name</h3>
                <input type='text' name='firstname'/>
            </div>
            <div>
                <h3>id esprim</h3>
                <input type='text' name='firstname'/>
            </div>
            <div>
                <h3>email</h3>
                <input type='email' name='firstname'/>
            </div>
            <select name='club'>
                <option>select your club</option>
                <option>robotic</option>
                <option>data science</option>
                <option>sports</option>
                <option>ea sports</option>
            </select>
            <button>SUBMIT</button>
        </form>
    );
}