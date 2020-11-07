import React from 'react'
import './Sumtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider'
function Sumtotal() {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className="sumtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Sumtotal ({cart.length} items): <strong>0</strong>
                        </p>
                        <small className="sumtotal-gift">
                            <input type="checkbox" />This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Sumtotal
