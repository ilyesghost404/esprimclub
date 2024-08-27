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
                <input type='text' name='lastname'/>
            </div>
            <div>
                <h3>id esprim</h3>
                <input type='text' name='idesprim'/>
            </div>
            <div>
                <h3>email</h3>
                <input type='email' name='email'/>
            </div>
            <select name='club'>
                <option>select your club</option>
                <option value='robotic'>robotic</option>
                <option value='data science'>data science</option>
                <option value='sports'>sports</option>
                <option value='ea sports'>ea sports</option>
            </select>
            <button>SUBMIT</button>
        </form>
    );
}