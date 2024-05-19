import api from './api';

export const getAllProducts = async () => {
    return await api.get('/product');
};

export const getProductById = async (id: string) => {
    return await api.get(`/product/${id}`);
};

export const createProduct = async (name: string, description: string, price: string, amount: number, imageUrl: string) => {
    return await api.post('/product', { name, description, price, amount, imageUrl });
};

export const updateProduct = async (productId: string, name: string, description: string, price: string, amount: number, imageUrl: string) => {
    return await api.put(`/product/${productId}`, { name, description, price, amount, imageUrl });
};

export const updateAmount = async (productId: string, amount: number) => {
    return await api.put(`/product/${productId}`, {amount})
}

export const deleteProduct = async (id: string) => {
    return await api.delete(`/product/${id}`);
};
