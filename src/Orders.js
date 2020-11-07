import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import { useStateValue } from './StateProvider'
import './Orders.css'
function Orders() {
    const [orders, setOrders] = useState([])
    const [{ cart, user }, dispatch] = useStateValue();
    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSanapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        }
        else {
            setOrders([])
        }

    }, [])
    return (
        <div className='orders'>
            <h1>Your orders</h1>
            <div className='orders-order'>
                {orders?.map(oredr => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
