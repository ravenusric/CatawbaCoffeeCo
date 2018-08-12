import React from "react";
import "./Menu.css"

// const styles = {
//     divStyle: {
//         background: "green",
//         justifyContent: "flex-end",
//     }
// };

const Menu = () => (
    <div className="Menupage">

        <h1 className="h1Menu">Menu</h1>
        <div className="Divider"></div>
        <div className="Lattes">
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
        <div className="Divider"></div>

        <div className="Brewed-Coffee">
            <h2 className="h2Menu">Brewed Coffee</h2>
            <ul>
                <h4>Short $1.50</h4>
                <h4>Tall $1.65</h4>
                <h4>Grande $1.85</h4>
            </ul>
        </div>
        <div className="Divider"></div>

        <div className="Yummy">
            <div className="Espresso-Drinks">
                <h2 className="h2Menu">Espresso Drinks</h2>
                <ul>
                    <h4>Espresso  $1.75</h4>
                    <h4>Americano  $1.75</h4>
                    <h4>Bad Wolf  $3.75</h4>
                    <h4>Cappuccino</h4>
                </ul>
            </div>
            <div className="Divider"></div>

            <div className="Extras">
                <h2 className="h2Menu">Extras</h2>
                <ul>
                    <h4>Espresso</h4>
                    <h4>Half-n-Half</h4>
                    <h4>Almond/Soy</h4>
                    <h4>Flavor</h4>
                    <h4>Whipped Cream</h4>
                    <h4>Refills</h4>
                </ul>
            </div>
            <div className="Divider"></div>

            <div className="Frappes">
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
            </div>
            <div className="Divider"></div>
        </div>
        <div className="Smoothies">
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
        <div className="Divider"></div>
        <div className="Edibles">
            <div className="Espresso">
                <h2 className="h2Menu">Non Espresso Drinks</h2>
                <ul>
                    <h4>Chai Latte</h4>
                    <h4>Hot Tea</h4>
                    <h4>Hot Chocolate</h4>
                    <h4>Steamers</h4>
                </ul>
            </div>
            <div className="Divider"></div>

            <div className="Food">
            <h2 className="h2Menu">Food</h2>
                <ul>
                    <h4>Salads</h4>
                    <h4>Muffins</h4>
                    <h4>Cookies</h4>
                    <h4>Pastries</h4>
                    <h4>Sandwiches</h4>
                    <h4>Breakfast Sandwiches</h4>
                </ul>
            </div>
        </div>
       
        <div className="footer">
      <div className="row">
      <div className="col-2">
      </div>

        <div id="addr"className="col-8">
          <p>Address: 117 N Main St, Mt Holly, NC 28120</p>
          <p>
            Hours: Sunday Closed Monday 7AM–8PM Tuesday 7AM–8PM Wednesday 7AM–8PM
            Thursday 7AM–8PM Friday 7AM–9PM Saturday 8AM–8PM
            </p>
          <p>Phone: (704) 820-6556</p>
        </div> {/* addr*/}

        <div id="media" className="col-2">
          <a href="https://www.facebook.com/catawbacoffeeco/">
            <img className="img-responsive1" src={require("../../images/fb.png")} alt="Facebook" width="35" height="35" />
          </a>
          <a href="https://www.yelp.com/biz/catawba-coffee-co-mount-holly">
            <img className="img-responsive2" src={require("../../images/Yelp.png")} alt="Yelp" width="35" height="35" /></a>
          <a href="https://www.instagram.com/catawbacoffeeco/">
            <img className="img-responsive3" src={require("../../images/Instagram.png")} alt="Instagram" width="35" height="35" /></a>
        </div> {/* media end*/}
      </div>
    </div>
    </div>



);

export default Menu;