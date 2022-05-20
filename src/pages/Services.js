import React, { useEffect, useState } from 'react';
import fetcher from '../api/fetcher';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await fetcher.get('/service')
            setServices(data);
        })()
    }, [])

    return (
        <div>
            <h1>This is services</h1>
            <h1>This is services</h1>
            <h1>This is services</h1>
            <h1>This is services</h1>
            <h1>This is services</h1>
            <h1>This is services</h1>
            <h1>This is services</h1>
            <h1>This is services</h1>
            <h1>This is services: {services.length}</h1>
        </div>
    );
};

export default Services;