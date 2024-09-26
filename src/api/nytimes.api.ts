import api from './api';

export const getNYNews = async (view: string) => {
    const response = await api.get(view);
    return response.data;
}
