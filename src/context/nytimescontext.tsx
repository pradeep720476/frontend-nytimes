import { useEffect } from "react";
import { ReactNode } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getNYNews } from "../api/nytimes.api";
import { Articles } from "../types/nyarticles.type";

export interface NyArticlesContextProps {
    loading: boolean;
    data?: Articles;
    error?: any;
    get?: (view: string) => Promise<void>;
}

export const NYTimesContext = createContext<NyArticlesContextProps>({
    loading: false,
});

interface NyTimesProviderProps {
    children?: ReactNode;
}

export const NYTimesProvider: React.FC<NyTimesProviderProps> = ({ children }) => {
    const [data, setData] = useState<Articles>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>();

    const get = async (view: string) => {
        setLoading(true);
        try {
            const response = await getNYNews(view);
            if (response) {
                setData(response);
            }
            if (response.error) {
                setError(response.error);
            }
        } catch (responseError) {
            setError(responseError);
        } 
        
        setLoading(false);
    };

    useEffect(() => {
        get('1.json');
    }, []);

    return <NYTimesContext.Provider
        value={{ data, loading, error, get }}>{children}</NYTimesContext.Provider>

}

