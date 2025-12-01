
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 'useEffect' só roda no cliente, então 'sessionStorage' está seguro aqui.
    try {
      const storedAuth = sessionStorage.getItem('isAuthenticated');
      setIsAuthenticated(storedAuth === 'true');
    } catch (error) {
        console.error("Não foi possível acessar o sessionStorage.", error);
    }
    setIsLoading(false);
  }, []);

  const login = () => {
    try {
        sessionStorage.setItem('isAuthenticated', 'true');
    } catch (error) {
        console.error("Não foi possível acessar o sessionStorage.", error);
    }
    setIsAuthenticated(true);
  };

  const logout = () => {
    try {
        sessionStorage.removeItem('isAuthenticated');
    } catch (error) {
        console.error("Não foi possível acessar o sessionStorage.", error);
    }
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, isLoading, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
