import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className="home_container">
                <img className = "home_image"
                src="https://www.technologyshout.com/wp-content/uploads/2020/09/amazon_best_tv_march_2020_1585384758649.jpg" 
                />

                <div className="home_row">
                   <Product 
                        title = "The lean startup"
                        price = {29.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                   />
                   <Product
                        title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price = {239.0}
                        image = "https://th.bing.com/th/id/OIP.3c5as0ew9ahohrJSbUtJ7AHaJ3?pid=ImgDet&rs=1"
                    />
                </div>

                <div className="home_row">
                <Product
                        title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price = {239.0}
                        image = "https://th.bing.com/th/id/OIP.3c5as0ew9ahohrJSbUtJ7AHaJ3?pid=ImgDet&rs=1"
                    />
                    <Product
                        title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price = {239.0}
                        image = "https://th.bing.com/th/id/OIP.3c5as0ew9ahohrJSbUtJ7AHaJ3?pid=ImgDet&rs=1"
                    />
                    <Product
                        title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price = {239.0}
                        image = "https://th.bing.com/th/id/OIP.3c5as0ew9ahohrJSbUtJ7AHaJ3?pid=ImgDet&rs=1"
                    />
                </div>

                <div className="home_row">
                <Product
                        title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price = {239.0}
                        image = "https://th.bing.com/th/id/OIP.3c5as0ew9ahohrJSbUtJ7AHaJ3?pid=ImgDet&rs=1"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home;
