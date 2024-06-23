import { createContext, useEffect, useContext, useState, ReactNode } from "react";
import { getCurrentUser } from "@/lib/appwrite";
import { get } from "http";

interface User {

    id: string;
    email: string;
  
}

interface GlobalContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isLoading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextProps | null>(null);
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};

const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      getCurrentUser()
      .then((res: any) => {
        if (res) {
            setUser(res);
            setIsLoggedIn(true);
        }
        else {
            setUser(null);
            setIsLoggedIn(false);
        }
      }
        )
        .catch(() => {
            setUser(null);
            setIsLoggedIn(false);
            }
        )
        .finally(() => setLoading(false
        ));

    }, []);

    return (
        <GlobalContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, isLoading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
