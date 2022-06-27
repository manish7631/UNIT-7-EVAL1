import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoesFailure, getShoesRequest, getShoesSuccess, } from "../../Redux/action";
import { useEffect } from "react";
import axios from "axios";
import ShoeCard from "./ShoeCard/ShoeCard";
const Shoes = () => {

    const dispatch = useDispatch();

    const { shoes } = useSelector((store) => store)

    const getTodos = () => {
        dispatch(getShoesRequest())
        axios.get("http://localhost:8080/shoes").then((r) => {
            dispatch(getShoesSuccess(r.data))
        })
            .catch((e) => dispatch(getShoesFailure(e)))

    }
    useEffect(() => {
        if (shoes.length === 0) {
            getTodos()
        }

    }, [])

    return <div>{/* Map through the shoes list here */}

        <ShoeCard shoes={shoes} />

    </div>;
};

export default Shoes;