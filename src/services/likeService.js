import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/likes';
const request = requestFactory();

export const getAll = async (recipieId) => {

    const result = await request.get(`${baseUrl}?where=recipieId%3D%22${recipieId}%22&load=author%3D_ownerId%3Ausers`);
    const likes = Object.values(result);
    // console.log(likes);

    return likes;
};

export const create = async (recipieId, like) => {
    const result = await request.post(baseUrl, { recipieId, like });

    return result;
};
