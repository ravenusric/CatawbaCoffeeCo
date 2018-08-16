import React from "react";
import "./Menu.css"

const Menu = () => (
    <div className="Menupage">

        <h1 className="h1Menu">Menu</h1>
        <div className="Divider"></div>
        <div className="row">
            <div className="col-3" id="Lattes">
                <h2 className="h2Menu"> Lattes </h2>
                <ul>
                    <h4> Milky Way</h4>
                    <h4> Nutella Mocha </h4>
                    <h4> Thin Mint </h4>
                    <h4> Banana Bread </h4>
                    <h4>The Almond G</h4>
                    <h4>Zebra Mocha</h4>
                    <h4>Birthday Cake</h4>
                    <h4>Raspberry Truffle</h4>
                    <h4>Caramel</h4>
                    <h4>Creme Brulee</h4>
                    <h4>Funky Monkey</h4>
                    <h4>Mayan Mocha</h4>
                    <h4>Cinnamon Bun</h4>
                    <h4>Loch Ness Mocha</h4>
                    <h4>Mocha</h4>
                    <p> Short: $3.50  Tall: $3.75  Grande: $4.05 </p>
                </ul>
            </div>

            <div className="col-3" id="Brewed-Coffee">
                <h2 className="h2Menu">Brewed Coffee</h2>
                <ul>
                    <h4>Short $1.50</h4>
                    <h4>Tall $1.65</h4>
                    <h4>Grande $1.85</h4>
                </ul>
       

           
                <h2 className="h2Menu">Espresso Drinks</h2>
                <ul>
                    <h4>Espresso  $1.75</h4>
                    <h4>Americano  $1.75</h4>
                    <h4>Bad Wolf  $3.75</h4>
                    <h4>Cappuccino</h4>
                </ul>

                  <h2 className="h2Menu">Smoothies</h2>
                <ul>
                    <h4>Peach</h4>
                    <h4>Strawberry</h4>
                    <h4>Mango</h4>
                    <h4>Strawberry Banana</h4>
                    <h4>Wildberry</h4>
                    <h4>Pina Colada</h4>
                    <p>$4.05</p>
                </ul>
            </div>

<div className="col-3" id="Frappes">
                <h2 className="h2Menu">Frappes</h2>
                <ul>
                    <h4>Vanilla</h4>
                    <h4>Cappuccino</h4>
                    <h4>Mocha</h4>
                    <h4>Cookie and Cream</h4>
                    <h4>Peanut Butter Mocha</h4>
                    <h4>Chai</h4>
                    <p>$4.05</p>
                </ul>

                <h2 className="h2Menu">Non Espresso Drinks</h2>
                <ul>
                    <h4>Chai Latte</h4>
                    <h4>Hot Tea</h4>
                    <h4>Hot Chocolate</h4>
                    <h4>Steamers</h4>
                    <p>$4.05</p>
                </ul>
            </div>

            <div className="col-3" id="Extras">
                <h2 className="h2Menu">Extras</h2>
                <ul>
                    <h4>Espresso</h4>
                    <h4>Half-n-Half</h4>
                    <h4>Almond/Soy</h4>
                    <h4>Flavor</h4>
                    <h4>Whipped Cream</h4>
                    <h4>Refills</h4>
                    <p>$4.05</p>
                </ul>

                <h2 className="h2Menu">Food</h2>
                <ul>
                    <h4>Salads</h4>
                    <h4>Muffins</h4>
                    <h4>Cookies</h4>
                    <h4>Pastries</h4>
                    <h4>Sandwiches</h4>
                    <h4>Breakfast Sandwiches</h4>
                    <p>$4.05</p>
                </ul>
            </div>
        </div>
       
    </div>

);

export default Menu;