import React from "react";
import CommentsInPost from "../../molecules/CommentsInPost/CommentsInPost";
import { ViewPostImageContainerStyles } from "../ViewPost/ViewPostStyles";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const ViewerPostMedia = ({
    mediaType,
    media_url,
    description,
    username,
    thumbnail,
    counterLikes,
    counterViews,
    anonymViews,
    likes,
    location,
    _id,
    referTo
}) => {
	return (
		<>
			<ViewPostImageContainerStyles>
				{mediaType === "IMAGE" ? (
					<img src={media_url} alt="image post" loading="lazy" />
				) : (
					<VideoPlayer media_url={media_url} />
				)}
			</ViewPostImageContainerStyles>
			<CommentsInPost
				description={description}
				username={username}
				thumbnail={thumbnail}
				counterLikes={counterLikes}
				counterViews={counterViews}
				anonymViews={anonymViews}
				likes={likes.map((like) => like.idUser)}
				referTo={referTo}
				location={location}
				idPost={_id}
			/>
		</>
	);
};

export default ViewerPostMedia;
