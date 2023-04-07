
export const Contacts = () => {
    return (

        <div className="contact">
            <div className="header">
                <div>
                    <iframe title="googleMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2935.1914342030536!2d23.372284425592177!3d42.636101454291726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cb55668ae1%3A0x447f9dd693e57def!2sSoftware%20University!5e0!3m2!1sbg!2sbg!4v1680891083702!5m2!1sbg!2sbg" width="100%" height="220" alt=""></iframe>

                </div>
                <div>
                    <h2>Contacts</h2>
                </div>
            </div>
            <div className="contain-fluid">
            </div>
            <div className="contact-form">
                <div className="form">
                    <h2>Conect with us</h2>
                    <form action="index.html">
                        <input type="text" name="Name" />
                        <input type="text" name="Email" />
                        <input type="text" name="Subject" />
                        <textarea name="meassage" cols="40" rows="3"></textarea>
                        <input type="submit" value="Submit" id="submit" />
                        <input type="submit" value="Clear" id="submit" />

                    </form>

                </div>

            </div>
        </div>
    )
}