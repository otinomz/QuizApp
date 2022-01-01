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