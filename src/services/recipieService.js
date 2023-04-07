import { requestFactory } from './requester';

const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3030'
    : 'http://localhost:3030'; // TODO: Add server url when deployed
const url = `${baseUrl}/data/recipies`;

export const recipieServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(url);
        const recipies = Object.values(result);
    
        return recipies;
    };
    
    const getOne = async (recipieId) => {
        const result = await request.get(`${url}/${recipieId}`);
    
        return result;
    };
    
    const create = async (recipieData) => {
        const result = await request.post(url, recipieData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (recipieId, data) => request.put(`${url}/${recipieId}`, data);

    const deleteRecipie = (recipieId) => request.delete(`${url}/${recipieId}`);

    const getByCategory=async(category)=>{
        const result =await getAll();
        let filterRecipies=result.filter(recipie =>recipie.category===category)
        return filterRecipies
    }


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteRecipie,
        getByCategory,
    };
}