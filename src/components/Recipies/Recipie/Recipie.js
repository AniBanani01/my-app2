import { Link } from "react-router-dom";

export const Recipie = ({
    _id,
    imageUrl,
    title,
    ingredients,
    level,
}) => {
    return (
        <div className="recipie">
            <img src={imageUrl} alt="e/xample1" />
            <div className="container">
                <p className="title">
                    {title}
                </p>
                <p><strong>Ingredients:</strong><span className="ingredients">{ingredients}</span> </p>
                <p><strong>Level:</strong> <span className="level">{level}</span> </p>
                {/* <p><strong>Time to cook:</strong><span className="time">15</span>min</p> */}
                <p><Link to={`/recipies/${_id}`} className="details-btn">Details</Link></p>
            </div>
        </div>

    );
}
