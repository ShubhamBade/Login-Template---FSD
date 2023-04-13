import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Welcome() {
    const { state } = useLocation();
    const { email } = state;
    return (
        <>
            <div className="container my-5" style={{ width: "400px" }}>
                <div className="my-3">
                    <img id="personimg" className='rounded mx-auto d-block' style={{ width: "250px" }} src={require("./person.jpg")} alt="pictures" />
                    <h2 className='text-center'>Welcome!
                    <label htmlFor="personimg" className='text-center mx-2'>{email}
                    </label>
                    </h2>
                </div>
            </div>
        </>
    )
}
