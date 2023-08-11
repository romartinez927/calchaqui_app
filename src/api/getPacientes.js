const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_PACIENTES = process.env.NEXT_PUBLIC_GET_PACIENTES

export const getPacientes = async () => {
    try {
        const url = `${API_BASE_URL}/${GET_PACIENTES}`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Failed to fetch patients.")
        }

        const dataResponse = await response.json()
        // const adaptedData = dataResponse.map(adaptarMedicoDesdeApi)
        return dataResponse
    } catch (error) {
        console.error("Error fetching patients", error)
        return []
    }
}