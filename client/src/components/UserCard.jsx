
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addData, addSearchData, addDetailsOpen, addDetails } from "../Redux/UserCards/action";
import Avatar from '@mui/material/Avatar';
import CircleIcon from '@mui/icons-material/Circle';

export const UserCard = ({ element, id }) => {
    
    const dispatch = useDispatch();

    return (
        <Container key={id} onClick={() => {
            dispatch(addDetailsOpen(true));
            dispatch(addDetails(element));
        }}>
            <div className="left">
                <Avatar
                    alt="Remy Sharp"
                    src={element.image}
                    sx={{ width: 35, height: 35 }}
                    />
                <p>{element.name}</p>
            </div>
            <div className="right">
                <CircleIcon status={element.status} className="icon" />
                <p className="right__content">{element.status} - {element.species}</p>
            </div>
        </Container>
    )

}

const Container = styled.div`
    width : 94.1%;
    padding : .5vw .6vw;
    border-radius: .2vw;
    height : 6vh;
    background-color: white;
    margin : 0 0 .4vw 0;
    display : flex;
    align-items: center;
    justify-content: space-between;
    gap: .5vw;
    cursor: pointer;
    &:hover {
        box-shadow : #567259 0 3px 8px;

        transition: 400ms;
    }
    .left {
        display: flex;
        width : 52%;
        align-items: center;
        gap: .5vw;
        font-size: .9vw;
    }
    .right {
        width: 48%;
        font-size: .8vw;
        display : flex;
        align-items: center;
        gap: .4vw;
        .icon {
            color : ${(props) => (props.status === "unknown" ? "#02f523" : "blue")};
        }
        .right__content {
            margin : auto auto auto .1vw;
        }
    }
`