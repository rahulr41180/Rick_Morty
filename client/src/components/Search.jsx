
import styled from "styled-components";

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, addSearchData } from "../Redux/UserCards/action";
import axios from "axios";

export const Search = () => {

    const dispatch = useDispatch();

    const fetchData = useMemo(async () => {
        try {
            const data = await axios.get(`https://rickandmortyapi.com/api/character/?page=1`);
            return data.data.results;
        }
        catch(error) {
            console.log("message :", error.message);
        }
    },[]);

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if(timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            },1000)
        }
    }

    const handleChange = async (event) => {
        const { value } = event.target;
        console.log('value:', value)
        if(value === "") {
            console.log("fetchData :",fetchData);
            const data = await fetchData;
            console.log('data1:', data)
            dispatch(addSearchData(data));
            return;
        }
        const data = await axios.get(`https://rickandmortyapi.com/api/character/?name=${value}`);
        console.log('data:', data);
        dispatch(addSearchData(data.data.results));
    }
    const optimisedVersion =  useCallback(debounce(handleChange),[]);

    return (
       <Container>
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 0, flex: 1, width : "85%", height : "7.2vh" , padding : "0 0 0 .5vw"}}
                placeholder="Search for a contact"
                inputProps={{ 'aria-label': 'Search for a contact' }}
                onChange={ optimisedVersion }
            />
       </Container>
    )
}

const Container = styled.div`
    width: 27%;
    padding : 0 0 0 1.5vw;
    background-color: white;
    border-radius: .2vw;
`