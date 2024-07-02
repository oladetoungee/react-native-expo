import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

const useAppWrite = (fn: () => Promise<any>) => {
    const [data, setData] = useState<any>(null); // Initialize data as null or undefined initially
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fn();
            setData(response); // Assuming response structure aligns with PostsData or can be transformed
        } catch (error: Error | any) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const reFetch = () => {
        fetchData();
    };

    return { data, loading, reFetch };
};

export default useAppWrite;
