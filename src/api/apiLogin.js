import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const API_LOGIN = process.env.NEXT_PUBLIC_API_LOGIN

export const apiLogin = async (formData) => {
    try {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/${API_LOGIN}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: formData
        };
        const response = await axios.request(config)
        return response.data
    } catch (error) {
        console.error("Error al loguearse", error)
        throw error
    }
}