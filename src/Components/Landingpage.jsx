import one from '../Assets/1.png'
import two from '../Assets/2.png'
import three from '../Assets/3.png'
import four from '../Assets/4.png'
import pack1 from '../Assets/pack2.png'
import add from '../Assets/add.png'

const Landingpage = () => {
    return (
        <main>
            <section className="hero-section">

                <section className="hero-images">
                    <img src={one} alt="one" className="one"></img>
                    <img src={two} alt="two" className="twos"></img>
                    <img src={three} alt="three" className="three"></img>
                    <img src={four} alt="four" className="four"></img>
                    <div className="three-twos">
                        <img src={three} alt="four" className="three-two"></img>
                    </div>
                </section>

                <section className="hero-section-one">
                    <div className="hero-section-text">
                        <h1>Hey! <br />
                            do you like <br />
                            my six <br />
                            pac?
                        </h1>
                    </div>
                    <div>
                        <button>Menu</button>
                    </div>
                </section>

                <section className="hero-section-two">

                    <div className="two">
                        <div className="food-packs">
                            <img src={pack1} alt="pack1" className="food" />
                            <img src={add} alt="pack1" className="add" />
                        </div>
                    </div>

                    <div className="order-menus">
                        <div className="order-menu locations">
                            <p>Location</p>
                            <select>
                                <option>Lekki</option>
                                <option>Lekki</option>
                            </select>
                        </div>
                        <div className="order-menu quantity">
                            <p>QTY</p>
                            <input type='number'></input>
                        </div>
                        <div className="order-menu total">
                            <p>Total</p>
                            <h6>₦3,400</h6>
                        </div>
                        <div className="order-menu order">
                            <button>Order Now</button>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Landingpage;