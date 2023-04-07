import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { recipieServiceFactory } from '../services/recipieService';

export const recipieContext = createContext();

export const RecipieProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [recipies, setRecipies] = useState([]);
    const recipieService = recipieServiceFactory();

    useEffect(() => {
        recipieService.getAll()
            .then(result => {
                setRecipies(result)
            })
    },[]);

    const onCreateRecipieSubmit = async (data) => {
        const newRecipie = await recipieService.create(data);

        setRecipies(state => [...state, newRecipie]);

        navigate('/recipies');
    };

    const onRecipieEditSubmit = async (values) => {
        const result = await recipieService.edit(values._id, values);

        setRecipies(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/recipies/${values._id}`);
    };

    const deleteRecipie = (recipieId) => {
        setRecipies(state => state.filter(recipie => recipie._id !== recipieId));
    };

    const getRecipie = (recipieId) => {
        return recipies.find(recipie => recipie._id === recipieId);
    };

    const contextValues = {
        recipies,
        onCreateRecipieSubmit,
        onRecipieEditSubmit,
        deleteRecipie,
        getRecipie,
    };

    return (
        <recipieContext.Provider value={contextValues}>
            {children}
        </recipieContext.Provider>
    );
};

export const useRecipieContext = () => {
    const context = useContext(recipieContext);

    return context;
};