import { Api } from "../api/Api";

export const getProducts = async () => {
    const response = await Api.get("/products")
    return response;
}