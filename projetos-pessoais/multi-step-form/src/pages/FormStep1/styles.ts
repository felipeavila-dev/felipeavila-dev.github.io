import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        colo: #B8B8D4;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }
    label{
        font-size: 13px;

        input {
            display: block;
            margin-top: 10px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: white;
            outline: 0;
            font-size: 15px;
            background-color: transparent;
        }
    }

    button {
        width: 150px;
        padding: 10px 5px;
        border: 0;
        font-size: 14px;
        font-weight: bold;
        border-radius: 20px;
        background-color: #25CD89;
        color: white;
        margin-top: 15px;
        cursor: pointer;
    }
`;