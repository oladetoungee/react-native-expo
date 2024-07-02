import { useEffect, useState } from 'react';
import { Alert } from 'react-native';



const useAppWrite = (fn: any) => {
    const [data, setData] = useState([]); // [1, 2, 3
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fn() as any;
            setData(response);
        } catch (error: Error | any) {
            Alert.alert('Error', error.message)
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
      
        fetchData();
    }
        , []);
        const reFetch = () => {
            fetchData();
        }
    return { data, loading, reFetch}
};

export default useAppWrite;