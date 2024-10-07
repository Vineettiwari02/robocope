import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Landing } from '../pages/Landing';
import { Errorpage } from '../pages/Errorpage';

export const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<Errorpage/>}/>
        </Routes>
  )}