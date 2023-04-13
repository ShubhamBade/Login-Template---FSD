import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';

export default function Data() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3000/data';
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    
    return (
        <>
        <BrowserRouter>
            <div>
                {data.map(item => (
                    <div key={item._id}>
                        <Routes>
                        <Route path="/" element={<Login username={item.username} password={item.password}/>} />
                        <Route path="/welcome" element={<Welcome />} />
                        </Routes>
                    </div>
                ))}
            </div>
            </BrowserRouter>
        </>
    )
}
