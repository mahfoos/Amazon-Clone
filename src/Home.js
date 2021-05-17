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
                        title = "The Lean Startup: how Constant Innovation Creates Radically Successful Business Paperback"
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
                        title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moiniter"
                        price = {199.99}
                        image = "https://th.bing.com/th/id/R9ad137c5c2b84a309b4a69671b06626d?rik=2pIJ6CscK9gikg&pid=ImgRaw"
                    />
                    <Product
                        title = "Amazon Echo (3rd genaration) | Smart speaker with Alexa, Charcoal Fabric"
                        price = {98.99}
                        image = "https://www.buyitdirect.ie/Images/B0792KWK57_1_LargeProductImage.jpg?width=450&height=450&v=1"
                    />
                    <Product
                        title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128Gb) - Silver (4th Genaration)"
                        price = {598.99}
                        image = "https://purewows3.imgix.net/images/articles/2020_03/ipad-pro.jpg?auto=format,compress&cs=strip"
                    />
                </div>

                <div className="home_row">
                <Product
                        title = "Apple Watch Series 6 | HiConsumption"
                        price = {239.0}
                        image = "https://cdn.hiconsumption.com/wp-content/uploads/2020/09/Apple-Watch-Series-6-FB.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home;
