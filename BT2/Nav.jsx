import React, { useState } from "react";
import Cart from "./Cart";

export default function Nav() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <div>
                        <h1 style={{ fontSize: 30 }}>Hello My Shop</h1>
                        <span>Cart product</span>
                    </div>
                    <button style={{ fontSize: 30 }} onClick={() => setShow(!show)}>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </nav>
            {show && (
                <div>
                    <Cart />
                </div>
            )}
        </div>
    );
}