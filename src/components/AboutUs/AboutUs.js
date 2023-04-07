import styles from './AboutUs.module.css'
// import {React} from 'react'

export const AboutUs = () => {
    return (
	<section id="about-us" className="container">
		<h2>About Us</h2>
		<p>Welcome to our food blog! We are a group of food enthusiasts who love to cook, bake and eat delicious meals. Our mission is to share our passion for food and provide you with easy-to-follow recipes, cooking tips and food-related articles that will inspire you to get creative in the kitchen.</p>
		<p>We believe that food is more than just fuel for our bodies. It brings people together, creates memories and nourishes our soul. Whether you're a beginner cook or a seasoned pro, our blog has something for everyone.</p>

		<h2>Our Team</h2>
		<ul id="team-members">
			<li>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVPpDeeuxs8eRE97G6lUW3vysJjPIUuRnIQ&usqp=CAU" alt="Team Member 1"/>
				<h3>John Doe</h3>
				<p>John is our head chef and recipe creator. He has a degree in culinary arts and over 10 years of experience in the food industry. His passion for food is contagious and he loves to experiment with different ingredients and flavors.</p>
			</li>
			<li>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6WEr-VqNdJ9zdiTTThAletSY9qeE-zJ-fWqGRo6fPmtlx8_yoQ8MPhsNbO9tAGRIAiw&usqp=CAU" alt="Team Member 2"/>
				<h3>Jane Doe</h3>
				<p>Jane is our food photographer and stylist. She has a background in graphic design and a keen eye for detail. Her photos are not only beautiful, but also showcase the deliciousness of our recipes.</p>
			</li>
			<li>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnpREpyguL5ZtXT4RPKfvC1mOUEwfjoxWVQ&usqp=CAU" alt="Team Member 3"/>
				<h3>Mark Smith</h3>
				<p>Mark is our social media manager and content writer. He loves to share our recipes and food-related articles on various social media platforms. He also writes our blog posts and helps us stay up-to-date with the latest food trends.</p>
			</li>
		</ul>
	</section>
   
    )
}