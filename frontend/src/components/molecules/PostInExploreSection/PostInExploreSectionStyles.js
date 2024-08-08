import styled from "styled-components";

export const ContainerPostInExploreSectionStyles = styled.section`
	width: 100%;
	height: auto;
	display: grid;
	grid-template-columns: ${(props) => {
		switch (props.posts) {
			case 1:
				return "minmax(auto, 500px)";
			case 2:
				return "auto auto";
			case 3:
				return "1fr 1fr 1fr";
			case 4:
				return "1fr 1fr 1fr 1fr";
			case 5:
				return "minmax(230px, 280px) minmax(230px, 280px) auto";
		}
	}};

	grid-template-rows: ${(props) => {
		switch (props.posts) {
			case 1:
				return "1fr";
			case 2 || 3:
				return "300px";
			case 4:
				return "80vh";
			case 5:
				return "230px 230px";
		}
	}};

	gap: 5px;
	direction: ${(props) => props.index % 2 != 0};

	font-family: "Red Hat Display";

	:first-child {
		grid-column: ${(props) => {
		switch (props.posts) {
			case !5:
				return "100%";
			case 5:
				return "3/3";
		}
	}};
		grid-row: ${(props) => {
		switch (props.posts) {
			case !5:
				return "100%";
			case 5:
				return "1/3";
		}
	}};
	}

	@media (max-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		direction: ltr;
		padding: 5px;

		:first-child {
			grid-column: auto;
			grid-row: auto;
		}
	}

	@media (max-width: 490px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: ${(props) => {
		switch (props.posts) {
			case 1:
				return "1fr";
			case 2 || 3:
				return "200px";
			case 4:
				return "80vh";
			case 5:
				return "200px 200px 200px";
		}
	}};
	}
`;

export const CardPostInExploreStyles = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}

	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1500;
		background-color: transparent;
		opacity: 0;
		visibility: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		span {
			display: flex;
			align-items: center;
			gap: 10px;
			font-size: 1.3rem;
			font-weight: 900;
			background-color: transparent;
		}

		.iconHeart,
		.iconView {
			background-color: transparent;
		}

		.iconHeart {
			color: ${props => props.isLike ? "crimson" : "white"};
		}
	}

	&:hover .overlay {
		backdrop-filter: blur(5px);
		background-color: #00000050;
		opacity: 1;
		visibility: visible;
		cursor: pointer;
	}

	@media (max-width: 490px) {
		height: 200px;

		img {
			object-fit: cover;
		}

		.overlay {
			display: flex;
			opacity: 1;
			visibility: visible;
			height: 20px;
			flex-direction: row;
			gap: 10px;
			background-color: #00000080;
			justify-content: flex-end;
			padding: 5px 10px 5px 0px;
			bottom: 0px;

		}
	}
`

export const CardPostTextStyles = styled.div`
	width: 100%;
	height: 100%;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 10px;
	padding: 10px;
	color: white;
	font-family: "Red Hat Display";
	background-color: #00000020;
	border-radius: 5px;
	
	.imgUser {
		width: 35px;
		height: 35px;
		object-fit: cover;
		border-radius: 50%;
		background-color: transparent;
	}
	

	span {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 5px;
		background-color: transparent;
	}

	b, p, h5 {
		background-color: transparent;
	}

@media (max-width: 490px) {
	height: 100%;
	justify-content: space-around;
	pre {
	    display: -webkit-box;
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
	}
}
`;
