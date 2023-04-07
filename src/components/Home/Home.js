import { Link } from "react-router-dom";

export const Home = () => {
    return (

        <section className="home">
            <div className="info">
                <h1>ARE YOU HUNGRY</h1>
                <h1>LET'S FIND SOME DELISIOUS AND EASY TO MAKE RECIPIES</h1>
                <p><Link to={"/recipies"} >GET STARTED</Link></p>
                <div id="filter"></div>
            </div>
        </section>

    // {/* <section className="categories">
    //     <h2>CATEGORIES</h2>
    //     <article>
    //         <h4>WITH UNDER 5 INGREDIENTS</h4>
    //         <a href="#">Read More</a>
    //     </article>
    //     <article>
    //         <h4>READY FOR 15 MINUTES</h4>
    //         <a href="#">Read More</a>
    //     </article>
    //     <article>
    //         <h4>YOU SHOULD TRY THIS</h4>
    //         <a href="#">Read More</a>
    //     </article>
    // </section>
    // */}
    )
}