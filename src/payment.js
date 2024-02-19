import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState } from "react";

function Payment() {
    const [balance, setBalance] = useState(1000);

    function handlePay() {
        if (balance>0) {
                    setBalance(prevBalance => prevBalance - 250);
        }
        else
        setBalance(prevBalance => 'no enough money');

    }

    return (
        <div className="payment">
            <p>current balance: {balance}</p>
            <button type="button" class="btn btn-primary" onClick={handlePay}>Pay</button>
        </div>
    );
}

export default Payment;