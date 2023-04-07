// import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import {useRecipieContext} from '../../contexts/RecipieContext'

export const Create=()=>{
    const {onCreateRecipieSubmit} = useRecipieContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        imageUrl: '',
        category: '',
        ingredients:'',
        time:'',
        level:'',
        text:'',
    },onCreateRecipieSubmit);
    
    return(
        <section className="create">
        <div className="form">
            <h2>New recipie</h2>
            <form className="create-form" onSubmit={onSubmit}>
                <input  value={values.title} onChange={changeHandler}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Recipie name"
                />
                <input value={values.imageUrl} onChange={changeHandler}
                    type="text"
                    name="imageUrl"
                    id="recipie-image"
                    placeholder="Recipie Image"
                />
                <input value={values.category} onChange={changeHandler}
                    type="text"
                    name="category"
                    id="recipie-category"
                    placeholder="Category"
                />

                <input value={values.ingredients} onChange={changeHandler}
                    type="text"
                    name="ingredients"
                    id="ingredients"
                    placeholder="Ingredients"
                />
                <input value={values.time} onChange={changeHandler}
                    type="text"
                    name="time"
                    id="time"
                    placeholder="Preparation Time"
                />
                <input  value={values.level} onChange={changeHandler}
                    type="text"
                    name="level"
                    id="level"
                    placeholder="Level"
                />

                <textarea value={values.text} onChange={changeHandler}
                    id="recipie-description"
                    name="text"
                    placeholder="Preparation steps"
                    rows="5"
                    cols="50"
                ></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    </section>
    )
}