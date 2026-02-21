import React, { createContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}
