import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Landing } from '../pages/Landing';

export const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        </Routes>
  )}