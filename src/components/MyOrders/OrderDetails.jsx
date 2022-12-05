import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/orderAction";
import Loader from "../Layout/Loader";

const OrderDetails = () => {
    const params = useParams();
    const { orders, loading, order } = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderDetails(params.id));
    }, [params.id, dispatch]);


    return (
        <section className="orderDetails">
            {loading === false && order !== undefined ? <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address: </b>
                        {`${order.shippingInfo.hNo}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.country} - ${order.shippingInfo.pinCode}`}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name: </b>
                        {`${order.user.name}`}
                    </p>
                    <p>
                        <b>Phone: </b>
                        {`${order.shippingInfo.phoneNo}`}
                    </p>
                </div>

                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status: </b>
                        {`${order.orderStatus}`}
                    </p>
                    <p>
                        <b>Placed At: </b>
                        {order.createdAt.split("T")[0]}
                    </p>
                    <p>
                        <b>Delivered At: </b>
                        {order.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}
                    </p>
                </div>

                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method: </b>
                        {order.paymentMethod}
                    </p>
                    <p>
                        <b>Payment Reference: </b>#{order.paymentMethod === "Online" ? order.paymentInfo : "NA"}
                    </p>
                    <p>
                        <b>Paid At: </b>
                        {order.paymentMethod === "Online" ? order.paidAt.split("T")[0] : "NA"}
                    </p>
                </div>

                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total: </b>₹{order.itemsPrice}
                    </p>
                    <p>
                        <b>Shipping Charges: </b>₹{order.shippingCharges}
                    </p>
                    <p>
                        <b>Tax: </b>₹{order.taxPrice}
                    </p>
                    <p>
                        <b>Total Amount: </b>₹{order.totalAmount}
                    </p>
                </div>

                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Aloo Tikki Burger</h4>
                        <div>
                            <span>{order.orderItems.alooTikkiBurger.quantity}</span> x{" "}
                            <span>{order.orderItems.alooTikkiBurger.price}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Mexican Aloo Tikki Burger</h4>
                        <div>
                            <span>{order.orderItems.mexicanAlooTikkiBurger.quantity}</span> x{" "}
                            <span>{order.orderItems.mexicanAlooTikkiBurger.price}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Corn and Cheese Burger</h4>
                        <div>
                            <span>{order.orderItems.cornAndCheeseBurger.quantity}</span> x{" "}
                            <span>{order.orderItems.cornAndCheeseBurger.price}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Veggie Burger</h4>
                        <div>
                            <span>{order.orderItems.veggieBurger.quantity}</span> x{" "}
                            <span>{order.orderItems.veggieBurger.price}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Spicy Panner Burger</h4>
                        <div>
                            <span>{order.orderItems.spicyPannerBurger.quantity}</span> x{" "}
                            <span>{order.orderItems.spicyPannerBurger.price}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Masala Egg Burger</h4>
                        <div>
                            <span>{order.orderItems.masalaEggBurger.quantity}</span> x{" "}
                            <span>{order.orderItems.masalaEggBurger.price}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Chicken Kebab Burger</h4>
                        <div>
                            <span>{order.orderItems.chickenKebabBurger.quantity}</span> x{" "}
                            <span>{order.orderItems.chickenKebabBurger.price}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Chicken Burger</h4>
                        <div>
                            <span>{order.orderItems.chickenBurger.quantity}</span> x{" "}
                            <span>{order.orderItems.chickenBurger.price}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Grilled Chicken and Cheese Burger</h4>
                        <div>
                            <span>{order.orderItems.grilledChickenAndCheeseBurger.quantity}</span> x{" "}
                            <span>{order.orderItems.grilledChickenAndCheeseBurger.price}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Filet-O-Fish Burger</h4>
                        <div>
                            <span>{order.orderItems.filetOFishBurger.quantity}</span> x{" "}
                            <span>{order.orderItems.filetOFishBurger.price}</span>
                        </div>
                    </div>
                    <div>
                        <h4
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            Sub Total
                        </h4>
                        <div
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            ₹{order.itemsPrice}
                        </div>
                    </div>
                </article>
            </main> : <Loader />}
        </section>
    );
};

export default OrderDetails;