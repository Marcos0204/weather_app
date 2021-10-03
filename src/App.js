import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [ query, setQuery ] = useState('');
    const [ weather, setWeather ] = useState({})
    const Search = async (e) =>{
        if(e.key === 'Enter'){
            const data = await fetchWeather(query)
            setWeather(data);
            setQuery('');
        }
    }
    console.log(weather)
    return (
        <div className='main-container'>
            <input
                type='text'
                className='search'
                placeholder='Search...'
                value={query}
                onChange= {(e) => setQuery(e.target.value)}
                onKeyPress={Search}
            />
        </div>
    )
}

export default App
