import React from "react";
import "./Menu.css"

const Menu = () => (
    <div className="Menupage">

        <h1>Menu</h1>
        <div className="Divider"></div>
        <div className="Lattes">
            <h2> Lattes </h2>
            <ul>
                <li> Milky Way</li>
                <li> Nutella Mocha </li>
                <li> Thin Mint </li>
                <li> Banana Bread </li>
                <li>The Almond G</li>
                <li>Zebra Mocha</li>
                <li>Birthday Cake</li>
                <li>Raspberry Truffle</li>
                <li>Caramel</li>
                <li>Creme Brulee</li>
                <li>Funky Monkey</li>
                <li>Mayan Mocha</li>
                <li>Cinnamon Bun</li>
                <li>Loch Ness Mocha</li>
                <li>Mocha</li>
                <p> Short: $3.50  Tall: $3.75  Grande: $4.05 </p>
            </ul>
        </div>
        <div className="Divider"></div>

        <div className="Brewed-Coffee">
            <h2>Brewed Coffee</h2>
            <ul>
                <li>Short $1.50</li>
                <li>Tall $1.65</li>
                <li>Grande $1.85</li>
            </ul>
        </div>
        <div className="Divider"></div>

        <div className="Yummy">
            <div className="Espresso-Drinks">
                <h2>Espresso Drinks</h2>
                <ul>
                    <li>Espresso  $1.75</li>
                    <li>Americano  $1.75</li>
                    <li>Bad Wolf  $3.75</li>
                    <li>Cappuccino</li>
                </ul>
            </div>
            <div className="Divider"></div>

            <div className="Extras">
                <h2>Extras</h2>
                <ul>
                    <li>Espresso</li>
                    <li>Half-n-Half</li>
                    <li>Almond/Soy</li>
                    <li>Flavor</li>
                    <li>Whipped Cream</li>
                    <li>Refills</li>
                </ul>
            </div>
            <div className="Divider"></div>

            <div className="Frappes">
                <h2>Frappes</h2>
                <ul>
                    <li>Vanilla</li>
                    <li>Cappuccino</li>
                    <li>Mocha</li>
                    <li>Cookie and Cream</li>
                    <li>Peanut Butter Mocha</li>
                    <li>Chai</li>
                    <p>$4.05</p>
                </ul>
            </div>
            <div className="Divider"></div>
        </div>
        <div className="Smoothies">
            <h2>Smoothies</h2>
            <ul>
                <li>Peach</li>
                <li>Strawberry</li>
                <li>Mango</li>
                <li>Strawberry Banana</li>
                <li>Wildberry</li>
                <li>Pina Colada</li>
                <p>$4.05</p>
            </ul>
        </div>
        <div className="Divider"></div>
        <div className="Edibles">
            <div className="Espresso">
                <h2>Non Espresso Drinks</h2>
                <ul>
                    <li>Chai Latte</li>
                    <li>Hot Tea</li>
                    <li>Hot Chocolate</li>
                    <li>Steamers</li>
                </ul>
            </div>
            <div className="Divider"></div>

            <div className="Food">
                <h2>Food</h2>
                <ul>
                    <li>Salads</li>
                    <li>Muffins</li>
                    <li>Cookies</li>
                    <li>Pastries</li>
                    <li>Sandwiches</li>
                    <li>Breakfast Sandwiches</li>
                </ul>
            </div>
        </div>
    </div>

);

export default Menu;