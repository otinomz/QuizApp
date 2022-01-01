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
    
    .setScore{
        color: white;
        font-size: 2rem;
        margin: 0;
    }

    h1{
        font-family: Fascinate inline;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        padding: 0 20px;
        background-clip: text;
        --webkit-background-clip : text;
        --webkit-text-fill-color : transparent; 
        --moz-background-clip : text;
        --moz-text-fill-color : transparent;

        filter: drop-shadow(2px 2px #678D9F);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }
    

`