import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import React from 'react';

import './App.css'
import Login from './components/Login'

function App() {


  return (
    <>
    <UserContextProvider>
    <h1>Let's revise Context API</h1>
    <Login />
    <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
