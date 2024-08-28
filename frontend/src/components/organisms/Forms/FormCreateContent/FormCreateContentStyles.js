import { styled } from "styled-components";

export const CreateContentContainerStyles = styled.div`
width:100%;
height:auto;
padding:10px;
margin:1rem 0 1rem 0;
background-color: var(--lightblack);
border-radius:10px;

::placeholder{
    color:white;
}
`

export const FormCreateContentContainerStyles = styled.form`
width:100%;
height:auto;
font-family:'Red Hat Display';
display:grid;
grid-template-columns: ${props => props.isLoading ? '1fr' : 'minmax(180px,500px) 1fr 1fr'};
grid-template-rows: 50px 1fr;
position:relative;
color: white;

p, h2{
    width:auto;
    height:auto;
    background-color: var(--lightblack);
}

.titleCreateContent{
    grid-row:1/2;
    grid-column:1/4;
}

#imgPost{
    width:100%;
    padding:5px;
}

.iconAddContent{
    font-size:4rem;
}

@media (max-width: 490px) {
    display: flex;
    flex-direction: column;  
    justify-content: flex-start;  
    height: 100%;
}
`

export const ListUserSearchedStyles = styled.ul`
width:100%;
max-width:250px;
height:100%;
min-height:180px;
overflow-y: scroll;
display:flex;
flex-direction: column;
position: absolute;
top: 40px;
gap:5px;
background-color:var(--lightblack);
padding:5px;
visibility:${props => props.isExistUserSearched ? 'visible' : 'hidden'};
opacity:${props => props.isExistUserSearched ? '1' : '0'};
transition:all 0.2s ease-in-out;
`


export const ItemUserSearchedStyles = styled.li`
width:100%;
height: 50px;
background-color: var(--lightblack);
display:flex;
justify-content: flex-start;
align-items:center;
gap:5px;
padding:5px;
border-radius: 5px;

img{
    width:40px;
    height: 40px;
    border-radius: 50%;
    object-fit:cover;
}

p{
    font-weight:600;
}

.iconFriends{
    background-color: transparent;
    margin-left: 5px;
}

&:hover{
    transition:all 0.1s ease-in-out;
    cursor: pointer;
    background-color:var(--light);
    color:black;
}
`

export const ListRefersToStyles = styled.ul`
width:100%;
max-width:300px;
height: 100%;
display:flex;
flex-wrap: wrap;
justify-content:flex-start;
align-items: center;
line-height: 5px;
gap:10px;
`

export const ItemRefersToStyles = styled.li`
width:auto;
height: 20px;
display:flex;
justify-content: center;
align-items: center;
background-color: var(--light);
border-radius:5px;
cursor: pointer;
padding:2px;
gap:10px;
font-weight: 600;
color: black;

.iconDeleteReferTo{
    color: crimson;
}
`

export const GridOneContainerStyles = styled.span`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    
    img{
        width:100%;
        height:370px;
        background-color:transparent;
        object-fit:contain;
    }

    .btnSelectedImage {
        display: none;
    }

@media (max-width: 490px) {
    padding: 5px;
    height: 100%;
    gap: 5px;

    .btnSelectedImage {
        display: block;
        background-color: yellow;
        padding: 2px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    img {
        height: ${props => props.isSelectedImage ? '100px' : '350px'};
        width: ${props => props.isSelectedImage ? '100px' : '350px'};
    }
}


@media (max-width: 351px) {
    
    img {
        height: ${props => props.isSelectedImage ? '120px' : '250px'};
    }
}
`

export const GridTwoContainerStyles = styled.span`
    grid-row: 2/3;
    grid-column: 2/4;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    
    span {
        display:flex;
        flex-direction:column;
        gap:5px;
        padding:5px;
        width:100%;

        .iconLocation {
            font-size: 1.3rem;
            background-color:transparent;
            margin-right:2px;
            color: var(--violetpink);
        }

        p{
            background-color:transparent;
        }

        input{
            width:200px;
            height:30px;
            padding-left:5px;
            border:none;
            border-bottom: 1px solid black;
            color:white;
        }

        input:focus {
            outline: none;
            border-bottom:2px solid var(--violetpink);
        }

        input:hover {
            transition:all 0.2s ease-in-out;
            background-color: var(--darkgrey);
        }

        button{
            margin-top:0.5rem;
            width:130px;
            height: 30px;
            border-radius:5px;
            background-color: var(--dark);
            border: none;
            font-weight:600;
            cursor: pointer;
        }

        textarea {
            width:100%;
            max-width:500px;
            height:150px;
            resize: none;
            padding:5px;
            border-radius:5px;
            color:white;
        }

        textarea:focus {
            outline: none;
            border: 2px solid var(--violetpink);
        } 
    }

    .iconDeleteLocationSelected {
        position: absolute;
        right: 10px;
        top:10px;
        text-align:end;
        color: crimson;
        font-size:1.1rem;
    }

    ::-webkit-scrollbar{
    background-color: var(--dark);
    height:10px;
    width:10px;
}
::-webkit-scrollbar-thumb{
    background-color: var(--light);
    height:10px;
    width:10px;
}

.infoUserAuth {   
    text-align:start; 
    p{
        font-weight: 600;
    }
    img {
      width:50px;
      height:50px;
      border-radius: 50%;
    }
}

.imgProfile{
    width:50px;
    height: 50px;
    font-size:3rem;
    color: var(--violetpink);
    background-color:var(--heavyLight);
    border-radius:50%;
}

@media (max-width: 490px) {
    display: ${props => props.isSelectedImage ? 'flex' : 'none'};

    .infoUserAuth {
        display: none;
    }

    span {
        textarea {
          height: 90px;
        }
    }
}
`

export const ResultLocationContainerStyles = styled.span`
           position:relative;
           display: flex;
           flex-wrap: wrap;
           width: auto;
           max-width: 300px;
           justify-content:center;
           align-items: flex-start;
           border-radius:5px;
           cursor: pointer;
           opacity: ${props => props.isLocation ? '1' : '0'};
           visibility: ${props => props.isLocation ? 'visible' : 'hidden'}; 
`

export const ReferToContainerStyles = styled.span`
    position: relative;
`
export const ButtonCreateContentStyles = styled.button`
width:130px;
height:40px;
border: none;
border-radius:10px;
background-color: #38b000;
position:absolute;
top:70px;
right:20px;
color:white;
font-weight: 600;
cursor: pointer;

&:hover {
    transition: all 0.2s ease-in-out;
    border:3px solid yellow;
    font-weight: 900;
}

@media (max-width: 490px) {
    right: 0;
    top:0;
    height: 30px;
    width: 120px;
}
`