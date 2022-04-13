import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

const useAuth = () => {
  let navigate = useNavigate();
  const signedIn = useSelector(
    (state: RootState) => state.authentication.loggedIn
  );
  useEffect(() => {
    if (signedIn) {
      return navigate('/app');
    }
  }, [signedIn]);
  return { signedIn };
};

export { useAuth };
