import styled from 'styled-components'

export const TopTenMasterContainer = styled.div`
border:1px solid black;
display:flex;
justify-content:center;
flex-direction:column;

`;


export const TopTenTitle = styled.div`
border:1px solid red;
display:flex;
justify-content:center;
`;


export const TopTenCardContainer =  styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-evenly;
align-content:center;

`;



export const TopTenCard = styled.div`
height: 348px;
width: 292px;
position: relative;
margin-top:2%;
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        }
`;

export const CardDetail = styled.div`
position: absolute;
background-color: rgba(255, 255, 255, 0.7);
bottom: 0.01rem;
width: 100%;
height: 15%;
display:flex;
justify-content:space-around;
align-items:center;
    p {
    font-weight: 500;
    text-align: center;
}
`;