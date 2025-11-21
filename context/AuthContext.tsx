import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    user: any | null;
    signIn: () => void;
    signOut: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    signIn: () => { },
    signOut: () => { },
    isLoading: false,
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const signIn = () => {
        setIsLoading(true);
        // Mock sign in
        setTimeout(() => {
            setUser({ name: 'David', email: 'david@example.com' });
            setIsLoading(false);
        }, 1000);
    };

    const signOut = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}
