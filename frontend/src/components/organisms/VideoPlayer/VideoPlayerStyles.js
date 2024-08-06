<<<<<<< HEAD
import styled from "styled-components";

export const VideoPlayerContainerStyles = styled.div`
width: 100%;
height: ${props => props.isFeed ? "600px" : "100%"};

video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 16/9;
    padding: 0px 30px;
    margin: 0 auto;
}

@media (max-width: 490px) {
    video {
        padding: 0;
    }
}
=======
import styled from "styled-components";

export const VideoPlayerContainerStyles = styled.div`
width: 100%;
height: ${props => props.isFeed ? "600px" : "100%"};

video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 16/9;
    padding: 0px 30px;
    margin: 0 auto;
}

@media (max-width: 490px) {
    video {
        padding: 0;
    }
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
`