import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipieContext } from "../../contexts/RecipieContext";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { recipieServiceFactory } from "../../services/recipieService";

export const Edit = () => {
    const { onRecipieEditSubmit } = useRecipieContext();
    const { recipieId } = useParams();
    const recipieService = useService(recipieServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        title: '',
        imageUrl: '',
        category: '',
        ingredients: '',
        time: '',
        level: '',
        text: '',
    }, onRecipieEditSubmit);

    useEffect(() => {
        recipieService.getOne(recipieId)
            .then(result => {
                changeValues(result);
            });
    }, [recipieId]);

    return (
        <section className="edit-page" >
            <div className="form">
                <h2>Edit Recipie</h2>
                <form className="edit-form" method="post" onSubmit={onSubmit}>

                    <input value={values.title} onChange={changeHandler}
                        type="text"
                        name="title"
                        id="title"
                    />
                    <input value={values.imageUrl} onChange={changeHandler}
                        type="text"
                        name="imageUrl"
                        id="recipie-image"
                    />
                    <input value={values.category} onChange={changeHandler}
                        type="text"
                        name="category"
                        id="recipie-category"
                    />

                    <input value={values.ingredients} onChange={changeHandler}
                        type="text"
                        name="ingredients"
                        id="ingredients"
                    />
                    <input value={values.time} onChange={changeHandler}
                        type="text"
                        name="time"
                        id="time"
                    />
                    <input value={values.level} onChange={changeHandler}
                        type="text"
                        name="level"
                        id="level"
                    />

                    <textarea value={values.text} onChange={changeHandler}
                        id="recipie-description"
                        name="text"
                        placeholder="Preparation steps"
                        rows="5"
                        cols="50"
                    ></textarea>

                    <input className="btn submit" type="submit" value="Edit Recipie" />
                </form>
            </div>
        </section>
    );
};