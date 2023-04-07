import { useRecipieContext } from "../../contexts/RecipieContext";

import { Recipie } from "./Recipie/Recipie";

export const Recipies = () => {
    const { recipies } = useRecipieContext();
    return (

        <>
            <h2>Recipies</h2>
            <section className="recipies-colection">
                
            {recipies.map(x =>
                <Recipie key={x._id} {...x} />
            )}

            {recipies.length === 0 && (
            <h2>No recipies yet.</h2>
            )}
        </section>

{/*              
                <div className="recipie">
                    <img src='https://sodelicious.recipes/wp-content/uploads/2018/11/type-of-salmon-e1541579682737-720x380.jpg' alt="e/xample1" />
                    <div className="container">
                        <p className="title">
                            RECIPIE1
                        </p>
                        <p><strong>Ingredients:</strong><span className="ingredients">neshto</span> </p>
                        <p><strong>Level:</strong> <span className="level">beginers</span> </p>
                        <p><strong>Time to cook:</strong><span className="time">15</span>min</p>
                        <p><a className="details-btn" href="">Details</a></p>
                    </div>
                </div>
                <div className="recipie">
                    <img src="https://lexiscleankitchen.com/wp-content/uploads/2018/07/Roasted-Chicken-Veggies3.jpg" alt="e/xample1" />
                    <div className="container">
                        <p className="title">
                            RECIPIE1
                        </p>
                        <p><strong>Ingredients:</strong><span className="ingredients">neshto</span> </p>
                        <p><strong>Level:</strong> <span className="level">beginers</span> </p>
                        <p><strong>Time to cook:</strong><span className="time">15</span>min</p>
                        <p><a className="details-btn" href="">Details</a></p>
                    </div>
                </div>
             */}
            {/* <!-- </div> --> */}

        </>
    )
}