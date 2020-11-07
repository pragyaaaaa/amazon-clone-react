import React from 'react'
import './Sumtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getCartTotal } from './Reducer';
import { useHistory } from "react-router-dom"
function Sumtotal() {
    const history = useHistory();//browser-history
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className="sumtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Sumtotal ({cart.length} items): <strong>{value}</strong>
                        </p>
                        <small className="sumtotal-gift">
                            <input type="checkbox" />This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Sumtotal
