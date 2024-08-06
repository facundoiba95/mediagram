<<<<<<< HEAD
import { styled } from "styled-components";

export const CardTypeContentCreateContainerStyles = styled.div`
width:100%;
height:150px;
max-width: 300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
background-color:${ props => props.type === 'POST' ? '#b5e48c' : props.type === 'FASTPOST' ? '#d9ed92' : props.type === 'EXCLUSIVEPOST' ? '#48cae4' : ''};
font-family: 'Red Hat Display';
border-radius:10px;
padding:8px;
border:${ props => props.isSelected ? '2px solid var(--violetpink)' : ''};
transform: ${ props => props.isSelected ? 'scale(1.02)' : 'none'};
font-weight: ${ props => props.isSelected ? '900' : '' };

&:hover {
    cursor: pointer;
    transition:all 0.1s ease-in-out;
    transform: scale(1.02);
    font-weight:900;
}
`

export const ContentTypeStyles = styled.div`
    width:100%;
    height:100%;
    display:flex;
    gap:10px;
    flex-direction:column;
    background-color:${ props => props.type === 'POST' ? '#b5e48c' : props.type === 'FASTPOST' ? '#d9ed92' : props.type === 'EXCLUSIVEPOST' ? '#48cae4' : ''};

    h3{
       background-color:${ props => props.type === 'POST' ? '#b5e48c' : props.type === 'FASTPOST' ? '#d9ed92' : props.type === 'EXCLUSIVEPOST' ? '#48cae4' : ''};
    } 

    p{
      background-color:${ props => props.type === 'POST' ? '#b5e48c' : props.type === 'FASTPOST' ? '#d9ed92' : props.type === 'EXCLUSIVEPOST' ? '#48cae4' : ''};
    }

    .iconType{
      font-size:2.5rem;
      text-align:center;
      width:100%;
      background-color:${ props => props.type === 'POST' ? '#b5e48c' : props.type === 'FASTPOST' ? '#d9ed92' : props.type === 'EXCLUSIVEPOST' ? '#48cae4' : ''};
    }
`
=======
import { styled } from "styled-components";

export const CardTypeContentCreateContainerStyles = styled.div`
width:100%;
height:150px;
max-width: 300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
background-color:${ props => props.type === 'POST' ? '#b5e48c' : props.type === 'FASTPOST' ? '#d9ed92' : props.type === 'EXCLUSIVEPOST' ? '#48cae4' : ''};
font-family: 'Red Hat Display';
border-radius:10px;
padding:8px;
border:${ props => props.isSelected ? '2px solid var(--violetpink)' : ''};
transform: ${ props => props.isSelected ? 'scale(1.02)' : 'none'};
font-weight: ${ props => props.isSelected ? '900' : '' };

&:hover {
    cursor: pointer;
    transition:all 0.1s ease-in-out;
    transform: scale(1.02);
    font-weight:900;
}
`

export const ContentTypeStyles = styled.div`
    width:100%;
    height:100%;
    display:flex;
    gap:10px;
    flex-direction:column;
    background-color:${ props => props.type === 'POST' ? '#b5e48c' : props.type === 'FASTPOST' ? '#d9ed92' : props.type === 'EXCLUSIVEPOST' ? '#48cae4' : ''};

    h3{
       background-color:${ props => props.type === 'POST' ? '#b5e48c' : props.type === 'FASTPOST' ? '#d9ed92' : props.type === 'EXCLUSIVEPOST' ? '#48cae4' : ''};
    } 

    p{
      background-color:${ props => props.type === 'POST' ? '#b5e48c' : props.type === 'FASTPOST' ? '#d9ed92' : props.type === 'EXCLUSIVEPOST' ? '#48cae4' : ''};
    }

    .iconType{
      font-size:2.5rem;
      text-align:center;
      width:100%;
      background-color:${ props => props.type === 'POST' ? '#b5e48c' : props.type === 'FASTPOST' ? '#d9ed92' : props.type === 'EXCLUSIVEPOST' ? '#48cae4' : ''};
    }
`
>>>>>>> b3173dc1 (first commit in Ubuntu)
