import styled from 'styled-components';

export const ViewPostDescriptionStyles = styled.div`
width:100%;
height:auto;
min-height:30px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 20px;
background-color: transparent;
`
export const ViewPostHandleActiveDescriptionStyles = styled.span`
width:100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
color:white;
cursor: pointer;
gap:10px;
padding-left:10px;

span {
    display: flex;
    gap:10px;
}

.openDescription {
    display: ${ props => props.hiddenDescription ? 'none' : 'flex' };
}


.hiddenDescription {
    display: ${ props => props.hiddenDescription ? 'flex' : 'none' };
}
small {
    font-weight: 600;
}
`

export const WrapperCommentContainerStyles = styled.div`
width: 100%;
height: auto;
min-height: 40px;
display:flex;
justify-content: center;
align-items: center;
color: white;
`

export const ListCommentsStyles = styled.ul`
width: 100%;
height:100%;
max-height:500px;
overflow-y: scroll;
display: ${ props => props.comments ? 'flex' : 'none' };
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap:40px;
`

export const DescriptionPostContainerStyles = styled.div`
width:100%;
transition: all 0.2s ease-in-out;
white-space: pre-wrap;
padding: 0px 5px 0 0px;
height: ${ props => props.hiddenDescription ? '100%' : '0' };
opacity: ${ props => props.hiddenDescription ? '1' : '0' };
`






