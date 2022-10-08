import { Api } from "../api/Api";

export const createCategory = async (name: string, active: boolean) => {
    const model = {name, active}
    await Api.post("/categories", model)
    
}