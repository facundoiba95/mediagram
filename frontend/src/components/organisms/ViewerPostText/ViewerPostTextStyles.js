import styled from "styled-components";

export const HeadViewerPostTextStyles = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	color: white;
	gap: 10px;
	padding: 10px;
	border-bottom: 1px solid #80808080;

	.infoUser {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		cursor: pointer;
		gap: 5px;
		
		img {
			width: 60px;
			height: 60px;
			object-fit: cover;
			border-radius: 10px;
		}

		h5 {
			color: #b7b9bd;
		}
	}

	.contentPost {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	pre {
		width: 100%;
		font-size: 1.2rem;
	}
`;

export const SectionViewerPostTextStyles = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	color: white;
	margin-top: 2rem;
`;

export const EmptyCommentsStyles = styled.div`
width: 100%;
height: 50vh;
text-align: center;
font-weight: "Red Hat Display";
display: flex;
justify-content: center;
align-items: center;
`
