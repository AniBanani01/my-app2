import { useForm } from "../../../hooks/useForm";

export const RecipieComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <article className="create-comment">
        <h2>Add new comment:</h2>
        <form className="form" onSubmit={onSubmit}>
            <textarea name="comment"
                placeholder="Comment......"
                value={values.comment}
                onChange={changeHandler}
            ></textarea>
            <input
                className="btn submit"
                type="submit"
                value="Add Comment" />
        </form>
    </article>
    );
};