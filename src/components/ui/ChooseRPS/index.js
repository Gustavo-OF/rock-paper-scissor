import styled from "styled-components";

const BackgroundIcon = styled.div`
    border: 20px solid ${props => (props.mode) };
    width: 28%;
    height: 5.7rem;
    float: ${props => (props.float) };
    border-radius: 50%;
    background-color: white;
    margin-top: ${props => (props.marginTop) };
    position: ${props => (props.position) };
    margin-left: ${props => (props.marginLeft) };
    text-align: center;
    padding-top: 7.5%;
    box-shadow:0;
    -webkit-box-shadow: 0px 10px 0px 0px #d3d3d3 inset;

`
const Options = styled.div`
    width: 33%;
    height: 30rem;
    position: relative;
    left: 32%;
    top: 10%;
    //border: 1px solid red;
`

export { 
    Options,
    BackgroundIcon 
}