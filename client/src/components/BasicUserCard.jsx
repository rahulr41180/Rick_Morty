
import styled from "styled-components";

import { UserCard } from "./UserCard";
import { Loader } from "./loader";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Redux/UserCards/action";

export const BasicUserCard = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const storeData = useSelector(store => store);
    const characterData = storeData.allData.allData;
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const data = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            dispatch(addData(data.data.results));
            setLoading(true);
        }
        catch(error) {
            console.log("message :", error.message);
        }
    }

    useEffect(() => {
        fetchData();
    },[page])

    const loadMore = () => {
        setPage(prev => prev + 1);
    }

    const pageEnd = useRef();
    useEffect(() => {
        if(loading) {
            const observer = new IntersectionObserver(entries => {           
                if(entries[0].isIntersecting) {
                    loadMore();
                }
            },{
                threshold : 1
            })
            observer.observe(pageEnd.current);
        }
    },[loading])

    return (
        <Conatiner>
                {characterData.map((element,index) => {
                    return (
                        <UserCard id = {index} element = {element} />
                    )
                })}
                <Loader pageEnd = { pageEnd } />
        </Conatiner>
    )
}

const Conatiner = styled.div`
    width : 28.5%;
    padding : .2vw 0 1vw 0;
    height: 59vh;
    border-radius: .2vw;
    overflow-y: auto;
`