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

export const LocationAndReferToDataContainerStyles = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap:10px;
padding-top:5px;

span {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    gap:5px;

    h5:nth-child(2) {
    width: 100%;
    max-width:300px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    color: white;
    background-color: purple;
    padding: 2px 5px;
    border-radius: 5px;
    }

    .iconLocation {
    font-size: 1.2rem;
    background-color: white;
    color: purple;
    border-radius: 50%;
    }

    small {
    color: #808080;
    font-weight:600;  
    cursor: pointer;
    }

    small:hover {
        color:white;
    }

    small:nth-child(1) {
        color:white;
    }
}


`

export const WrapperCommentContainerStyles = styled.div`
width: 100%;
height: 100%;
min-height: 40px;
display:flex;
justify-content: center;
align-items: center;
color: white;
`

export const ListCommentsStyles = styled.ul`
width: 100%;
height:400px;
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






