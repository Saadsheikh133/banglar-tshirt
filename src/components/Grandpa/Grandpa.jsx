import React from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';
import { createContext } from 'react';

export const RingContext = createContext('Gold')
const Grandpa = () => {
    const Ring = 'Diamond';
    
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <RingContext.Provider value = 'Golden Ring'>
                <section className='flex'>
                    <Father Ring={Ring}></Father>
                    <Uncle></Uncle>
                    <Unty></Unty>
                </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;