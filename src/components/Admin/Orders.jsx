import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi"
import { getAdminOrders, processOrder } from "../../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader";
import toast from "react-hot-toast";

const Orders = () => {
    const dispatch = useDispatch();

    const { loading, orders, message, error } = useSelector(state => state.admin);

    const processHandler = (id) => {
        dispatch(processOrder(id));
    };

    useEffect(() => {
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" });
        }
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }

        dispatch(getAdminOrders());
    }, [dispatch, message, error]);


    return (
        <section className="tableClass">
            {loading === false ? <main>
                <table>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Status</th>
                            <th>Item Qty</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>User</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders && orders.map((i) => (
                            <tr key={i._id}>
                                <td>#{i._id}</td>
                                <td>{i.orderStatus}</td>
                                <td>
                                    {
                                        i.orderItems.alooTikkiBurger.quantity +
                                        i.orderItems.mexicanAlooTikkiBurger.quantity +
                                        i.orderItems.cornAndCheeseBurger.quantity +
                                        i.orderItems.veggieBurger.quantity +
                                        i.orderItems.spicyPannerBurger.quantity +
                                        i.orderItems.masalaEggBurger.quantity +
                                        i.orderItems.chickenKebabBurger.quantity +
                                        i.orderItems.chickenBurger.quantity +
                                        i.orderItems.grilledChickenAndCheeseBurger.quantity +
                                        i.orderItems.filetOFishBurger.quantity
                                    }
                                </td>
                                <td>₹{i.totalAmount}</td>
                                <td>{i.paymentMethod}</td>
                                <td>{i.user.name}</td>
                                <td>
                                    <Link to={`/order/${i._id}`}>
                                        <AiOutlineEye />
                                    </Link>

                                    <button onClick={() => processHandler(i._id)}>
                                        < GiArmoredBoomerang />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main> : <Loader />}
        </section>
    );
};

export default Orders;