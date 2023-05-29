import React, { Dispatch, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AnyAction } from 'redux';
import './App.css';
import { IUser } from './models/User';
import User from './pages/User';
import { getUsers } from './store/slices/userSlice';

function App() {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<User />} />
    </Routes>
  );
}

export default App;
