import useSWR from 'swr';
import api from '../services/api';


export default function useFetch<Data = any, Error = any>(url: string) {
    const { data, error, mutate } = useSWR<Data, Error>(url, () => api.get(url).then(response => response.data));

    return { data, error, mutate };
}


