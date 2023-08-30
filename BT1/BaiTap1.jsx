import { useState } from "react";
import CartProduct from "./CartProduct";
import Footers from "./Footers";
import Header from "./Header";
import NavBar from "./NavBar";

function BaiTap1() {

    const [status, setStatus] = useState(false)
    function showCart() {
        setStatus(!status)
    }

    return (
        <>
            <NavBar showCart={showCart}></NavBar>
            <Header></Header>
            <Footers></Footers>
            {status ? <CartProduct /> : <></>}
        </>
    );
}

export default BaiTap1;
