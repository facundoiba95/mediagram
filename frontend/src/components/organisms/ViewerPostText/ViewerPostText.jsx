import React, { useContext, useState } from "react";
import {
	EmptyCommentsStyles,
	HeadViewerPostTextStyles,
	SectionViewerPostTextStyles,
} from "./ViewerPostTextStyles";
import PostTextContent from "../../molecules/PostTextContent/PostTextContent";
import PostComments from "../PostComments/PostComments";
import dateTime from "../../../libs/dateTime";
import AddComment from "../../molecules/AddComment/AddComment";
import ReactionsInPost from "../../molecules/ReactionsInPost/ReactionsInPost";
import { useNavigate, useParams } from "react-router-dom";
import useIsLike from "../../../Hooks/useLike";
import { useDispatch, useSelector } from "react-redux";
import { handleLikeToPost } from "../../../redux/slices/postSlices/postSlices";
import { GlobalContext } from "../../../Context/GlobalContext";
import { getLikes } from "../../../redux/slices/likeSlices/likeSlices";
import { POST } from "../../../libs/entities";
import { getViews } from "../../../redux/slices/viewSlices/viewSlices";

const ViewerPostText = ({
	postBy,
	comments,
	_id,
	textContent,
	createdAt,
	counterComments,
	counterLikes,
	counterViews,
	likes
}) => {
	const navigator = useNavigate();
	const params = useParams();
	const sendLike = useIsLike();
	const dispatch = useDispatch();
	const { isLogged } = useSelector(state => state.authSlices);
	const userAuth = useSelector(state => state.authSlices.user);
	const [isLike, setIsLike] = useState(isLogged ? likes.some(usr => usr.idUser === userAuth._id) : false);
	const [countLikes, setCountLikes] = useState(counterLikes);
	const { setIsOpenModalWindowAuth, setIsOpen } = useContext(GlobalContext);


	const user = {
		username: postBy.username,
		thumbnail: postBy.thumbnail,
		_id: postBy._id,
		isPrivate: postBy.isPrivate,
	};


	const goProfile = () => {
		params.username = user.username;
		window.scroll({
			top: 0,
			behavior: "smooth"
		})
		navigator(`/profile/${params.username}`)
	}

	const handleSendLike = async () => {
		if (!isLogged) {
			await sendLike(handleLikeToPost, params.idPost, user.username, isLike);
		} else {
			isLike ? setCountLikes(countLikes - 1) : setCountLikes(countLikes + 1)
			setIsLike(!isLike);
			await sendLike(handleLikeToPost, params.idPost, user.username, isLike);
		}
	}


	const openLikes = async () => {
		params.typeInteraction = 'likes';
		await dispatch(getLikes({ entity: POST, entityID: params.idPost }));
		navigator(`/getPostByID/${params.idPost}/${params.typeInteraction}`);
		setIsOpen(true);
	}

	const openViews = async () => {
		params.typeInteraction = 'views';
		await dispatch(getViews({ entity: POST, entityID: params.idPost }))
		navigator(`/getPostByID/${params.idPost}/${params.typeInteraction}`);
		setIsOpen(true);
	}



	return (
		<SectionViewerPostTextStyles>
			<HeadViewerPostTextStyles>
				<span className="infoUser" onClick={goProfile}>
					<img src={user.thumbnail} alt="" />
					<b>{user.username}</b>
					<h5 className="dateTime">{dateTime(createdAt)}</h5>
				</span>
				<span className="contentPost">
					<PostTextContent textContent={textContent} />
					<ReactionsInPost
						counterComments={counterComments}
						counterLikes={countLikes}
						counterViews={counterViews}
						handleSendLike={handleSendLike}
						handleOpenLikes={openLikes}
						handleOpenViews={openViews}
						isLike={isLike}
					/>
				</span>
			</HeadViewerPostTextStyles>
			{comments.length ? (
				<PostComments comments={comments} limit={false} />
			) : (
				<EmptyCommentsStyles>
					<h3>Aún no hay comentarios</h3>
				</EmptyCommentsStyles>
			)}
			<AddComment hiddenComments={false} idPost={_id} postBy={postBy} />
		</SectionViewerPostTextStyles>
	);
};

export default ViewerPostText;
