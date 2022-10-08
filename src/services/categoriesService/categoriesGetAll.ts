import { Api } from "../api/Api";

export const getCategories = async () => {
    const response = await Api.get("/categories")
    return response;
}