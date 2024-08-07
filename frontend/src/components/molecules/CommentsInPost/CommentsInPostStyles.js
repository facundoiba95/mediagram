<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
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

@media (max-width: 490px) {
    margin-top: 1rem;
}
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

@media (max-width: 490px) {
    display: flex;
}
`

export const LocationAndReferToDataContainerStyles = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap:10px;
padding-top:5px;

.containerLocation {
    width: 100%;
    max-width: 300px;
    background-color: purple;
    border-radius:5px;
    display: flex;
    align-items: center;

    h5 {
        padding:2px 5px;
        color:white;
        width: 100%;
        max-width:300px;
        white-space: normal;
        word-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        background-color: transparent;
    }
}

.iconLocation {
    border-radius:50%;
    background-color: white;
    color: purple;
}

.containerReferTo {
    display: ${props => props.referTo ? 'flex' : 'none'};
    gap: 3px;

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

::-webkit-scrollbar {
    display: none;
}
`

export const ListCommentsStyles = styled.ul`
width: 100%;
height: 400px;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
justify-content: ${ props => props.comments ? 'flex-start' : 'center'};
gap:40px;

::-webkit-scrollbar {
    display: none;
}
@media (max-width: 490px) {
    height:200px;
}
`

export const DescriptionPostContainerStyles = styled.div`
width:100%;
transition: all 0.2s ease-in-out;
white-space: pre-wrap;
padding: 0px 5px 0 0px;
height: ${ props => props.hiddenDescription ? '100%' : '0' };
opacity: ${ props => props.hiddenDescription ? '1' : '0' };
`






<<<<<<< HEAD
=======
import styled from 'styled-components';
=======
import styled from "styled-components";
>>>>>>> ce9b3c9f (viewerPostText)

export const ViewPostDescriptionStyles = styled.div`
	width: 100%;
	height: auto;
	min-height: 30px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;
	background-color: transparent;

	@media (max-width: 490px) {
		margin-top: 1rem;
	}
`;
export const ViewPostHandleActiveDescriptionStyles = styled.span`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	color: white;
	cursor: pointer;
	gap: 10px;
	padding-left: 10px;

	span {
		display: flex;
		gap: 10px;
	}

	.openDescription {
		display: ${(props) => (props.hiddenDescription ? "none" : "flex")};
	}

	.hiddenDescription {
		display: ${(props) => (props.hiddenDescription ? "flex" : "none")};
	}
	small {
		font-weight: 600;
	}

	@media (max-width: 490px) {
		display: flex;
	}
`;

export const LocationAndReferToDataContainerStyles = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding-top: 5px;

	.containerLocation {
		width: 100%;
		max-width: 300px;
		background-color: purple;
		border-radius: 5px;
		display: flex;
		align-items: center;

		h5 {
			padding: 2px 5px;
			color: white;
			width: 100%;
			max-width: 300px;
			white-space: normal;
			word-wrap: normal;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			background-color: transparent;
		}
	}

	.iconLocation {
		border-radius: 50%;
		background-color: white;
		color: purple;
	}

	.containerReferTo {
		display: ${(props) => (props.referTo ? "flex" : "none")};
		gap: 3px;

		small {
			color: #808080;
			font-weight: 600;
			cursor: pointer;
		}

		small:hover {
			color: white;
		}

		small:nth-child(1) {
			color: white;
		}
	}
`;

export const WrapperCommentContainerStyles = styled.div`
	width: 100%;
	height: 100%;
	min-height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const ListCommentsStyles = styled.ul`
	width: 100%;
	height: 400px;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${(props) => (props.comments ? "flex-start" : "center")};
	gap: 40px;

	::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: 490px) {
		height: 200px;
	}
`;

export const DescriptionPostContainerStyles = styled.div`
<<<<<<< HEAD
width:100%;
transition: all 0.2s ease-in-out;
white-space: pre-wrap;
padding: 0px 5px 0 0px;
height: ${ props => props.hiddenDescription ? '100%' : '0' };
opacity: ${ props => props.hiddenDescription ? '1' : '0' };
`






>>>>>>> b3173dc1 (first commit in Ubuntu)
=======
	width: 100%;
	transition: all 0.2s ease-in-out;
	white-space: pre-wrap;
	padding: 0px 5px 0 0px;
	height: ${(props) => (props.hiddenDescription ? "100%" : "0")};
	opacity: ${(props) => (props.hiddenDescription ? "1" : "0")};
`;
>>>>>>> ce9b3c9f (viewerPostText)
=======
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
