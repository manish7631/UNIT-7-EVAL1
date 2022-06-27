import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../../../Redux/action";
const ShoeCard = ({ shoes }) => {

    const counter = useSelector(store => store.counter);
    const dispatch = useDispatch()
    const handleIncrement = (g) => {
        dispatch(incrementCounter(1));
    };
    const handleDecrement = () => {
        dispatch(dispatch(decrementCounter(1)));
    };

    const shoeId = null;
    return (
        <>

            {shoes.map((e) => {
                return (
                    <div style={{
                        width: "30%",
                        height: "400px",

                    }} data-cy={`shoe-card-wrapper-${shoeId}`}>



                        <img style={{
                            width: "100%",
                            height: "300px"
                        }} src={e.image} data-cy="shoe-card-image" alt="shoe" />
                        <div>
                            <div data-cy="shoe-name">{e.name}</div>
                            <div>
                                In Cart:
                                <div data-cy="shoe-count">{counter}</div>
                                <button onClick={handleIncrement()} data-cy="increment-shoe-count-button">+</button>
                                <button onClick={handleDecrement} data-cy="decrement-shoe-count-button">-</button>
                            </div>
                        </div>




                    </div>
                )
            })}
        </>
    );
};

export default ShoeCard;