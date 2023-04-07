import styles from './Footer.module.css'

export const Footer=()=>{
    return (
        <footer>

        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Recipies</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
            <ul>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Write us</a></li>
                <li><a href="#">Call us</a></li>
            </ul>
            <ul className="space">
                <li><a href="#">Address : Sofia, Bulgaria</a></li>
                <li><a href="#">Email : ani_par7@abv.bg</a></li>
                <li><a href="#">Phone : 0887696943</a></li>
            </ul>
            <ul>
                <li><a href="#">Follow Us</a></li>
                <div>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
            </ul>

        </nav>
        <p>
            Copyright © 2023. All Rights Reserved.
        </p>
    </footer>
    )
}