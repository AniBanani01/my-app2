import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useRecipieContext } from "../../contexts/RecipieContext";

export const RecipieOwner = ({
    children,
}) => {
    const { recipieId } = useParams();
    const { getRecipie } = useRecipieContext();
    const { userId } = useAuthContext();

    const currentRecipie = getRecipie(recipieId);

    if (currentRecipie && currentRecipie._ownerId !== userId) {
        return <Navigate to={`/recipies/${recipieId}`} replace />
    }

    return children ? children : <Outlet />
};