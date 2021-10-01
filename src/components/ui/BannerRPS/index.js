import styled from "styled-components";
import "@fontsource/barlow-semi-condensed";

const Banner = styled.div`
    border: 2px solid rgba(171, 183, 183, 0.5);
    width: 40%;
    height: 8rem;
    margin: 0px auto;
    position: relative;
    top: 5%;
    border-radius: 20px;
    font-family: "Barlow Semi Condensed";
`

const Game = styled.div`
    width: 25%;
    height: 6.5rem;
    position: relative;
    top: 6%;
    left: 4%;
    color: white;
    font-family: "Barlow Semi Condensed";
`

const Score = styled.div`
    width: 24%;
    height: 6.8rem;
    background-color: white;
    text-align: center;
    border-radius: 10px;
    float: right;
    position: relative;
    right: 5%;
    bottom: 73%;
`

export { 
    Banner,
    Game,
    Score 
}