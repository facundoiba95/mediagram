import React, { useEffect } from "react";
import {
	CardPostInExploreStyles,
	CardPostTextStyles,
} from "../../../molecules/PostInExploreSection/PostInExploreSectionStyles";
import { useNavigate, useParams } from "react-router-dom";
import { FaEye, FaHeart } from "react-icons/fa";
import IconVideo from "../../../atoms/IconVideo/IconVideo";
import { VIDEO } from "../../../../libs/mediaType";
import ReactionsInPost from "../../../molecules/ReactionsInPost/ReactionsInPost";
import PostTextContent from "../../../molecules/PostTextContent/PostTextContent";

const CardPostInExplore = ({
	heightCard,
	thumbnail,
	counterLikes,
	counterViews,
	counterComments,
	posts,
	mediaType,
	textContent,
	postBy,
	isLike,
	_id,
}) => {
	const navigator = useNavigate();
	const params = useParams();

	const goPost = (e) => {
		const idPost = e.currentTarget.dataset.id;
		params.idPost = idPost;
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		navigator(`/getPostByID/${params.idPost}`);
	};

	const renderPostText = () => {
		return (
			<CardPostTextStyles>
				<span>
					<img src={postBy.thumbnail} alt="" className="imgUser" />
					<b>{postBy.username}</b>
				</span>
				<PostTextContent textContent={textContent} />
				<ReactionsInPost
					counterLikes={counterLikes}
					counterViews={counterViews}
					counterComments={counterComments}
					isLike={isLike}
				/>
			</CardPostTextStyles>
		);
	};

	const renderPostMedia = () => {
		return (
			<>
				<span className="overlay">
					<span>
						<FaHeart className="iconHeart" />
						{counterLikes}
					</span>
					<span>
						<FaEye className="iconView" />
						{counterViews}
					</span>
				</span>
				<img src={thumbnail} alt="" />
			</>
		);
	};

	return (
		<CardPostInExploreStyles
			heightCard={heightCard}
			posts={posts.length}
			data-id={_id}
			onClick={goPost}
			isLike={isLike}
		>
			{mediaType === VIDEO ? <IconVideo /> : <></>}
			{textContent ? renderPostText() : renderPostMedia()}
		</CardPostInExploreStyles>
	);
};

export default CardPostInExplore;
