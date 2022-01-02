import styled, {createGlobalStyle} from 'styled-components'
// @ts-ignore
import BGImage from './image/bg.jpeg'

export const GlobalStyle = createGlobalStyle`
    html {
        heigt: 100%
    }

    body {
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        height: 100vh;
        background-image: url(${BGImage});
        background-size: cover;
        background-position: top;
    }

    *{
        box-sizing: border-box;
        font-family: "Catamaran", sans-serif;
    }

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: white;
    }
    
    .score{
        color: white;
        font-size: 1.2rem;
        margin: 10px 0px;
    }

    h1{
        font-family: Fascinate inline;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        padding: 0 20px;
        background-clip: text;
        -webkit-background-clip : text;
        -webkit-text-fill-color : transparent; 
        -moz-background-clip : text;
        -moz-text-fill-color : transparent;
        filter: drop-shadow(2px 2px #678D9F);
        font-size: 70px;
        margin-top: 27px;
        text-align: center;
        font-weight: 400;
        
        @media(max-width : 768px){
            font-size: 30px;
        }
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #ffffff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

`