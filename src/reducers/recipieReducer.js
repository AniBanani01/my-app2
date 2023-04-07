export const recipieReducer = (state, action) => {
    switch (action.type) {
        case "LIKE_RECIPIE":
            return {
                ...state,
                like: action.like,
            };

        // case "UNLIKE_RECIPIE":
        //     return {
        //         ...state,
        //         unlike: action.unlikeValue,
        //     };
        case 'RECIPIE_FETCH':
            // return Object.assign({}, action.payload);
            return { ...action.payload };
        case 'COMMENT_ADD':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.userEmail,
                        }
                    }
                ],
            }

            case 'LIKE_ADD':
                return {
                    ...state,
                    likes: [
                        ...state.likes,
                        {
                            ...action.payload,
                            author: {
                                email: action.userEmail,
                            }
                        }
                    ],
                }
        default:
            return state;
    }
};