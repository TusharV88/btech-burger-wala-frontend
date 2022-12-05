import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAdminStats } from "../../redux/actions/adminAction";

ChartJS.register(Tooltip, ArcElement, Legend);


const Box = ({ title, value }) => (
    <div>
        <h3>
            {title === "Income" && "₹"}
            {value}
        </h3>
        <p>{title}</p>
    </div>
);

const Dashboard = () => {
    const dispatch = useDispatch();
    const { loading, usersCount, ordersCount, totalIncome } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(getAdminStats());
    }, [dispatch]);

    const data = {
        labels: ["Preparing", "Shipped", "Delivered"],
        datasets: [
            {
                label: "# of orders",
                data: ordersCount ? [ordersCount.preparing, ordersCount.shipped, ordersCount.delivered] : [0, 0, 0],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                borderColor: ['rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)'],
                borderWidth: 1,
                hoverOffset: 2,
            },
        ],
    };

    return (
        <section className="dashboard">
            {loading === false ? (
                <main>
                    <article>
                        <Box title="Users" value={usersCount} />
                        <Box title="Orders" value={ordersCount.total} />
                        <Box title="Income" value={Math.round(totalIncome)} />
                    </article>

                    <section>
                        <div>
                            <Link to="/admin/orders">View Orders</Link>
                            <Link to="/admin/users">View Users</Link>
                        </div>

                        <aside>
                            <Doughnut data={data} />
                        </aside>
                    </section>
                </main>
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default Dashboard;