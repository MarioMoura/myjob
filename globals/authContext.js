import React, { useState, createContext } from 'react';

const AuthContext = createContext({ signed: true });

export default AuthContext;
