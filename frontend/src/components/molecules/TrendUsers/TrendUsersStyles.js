<<<<<<< HEAD
import styled from "styled-components";

export const TrendUsersContainerStyles = styled.div`
width: 100%;
height: 100%;
color: white;
padding: 10px;
font-family: "Red Hat Display";

.iconFire {
    background-color: transparent;
    color: #ffba08;
}


`

export const TrendUsersItemStyles = styled.li`
width: 100%;
height: auto;
background-color: transparent;
display: flex;
align-items: flex-start;
padding: 5px;
gap: 10px;
border-radius: 5px;

img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
}

.iconUserDefault{
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    color: var(--violetpink);
    background-color: white;
}

span, p, b, .iconView {
    background-color: transparent;
}

p {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 800;
    font-size: 0.9rem;
}

&:nth-child(1) {
    color: #53FC18;
}

&:hover {
    cursor: pointer;
    background-color: #80808020;
}

@media (max-width: 1024px) {
    font-size: 0.9rem;
    padding: 0px;
    
    p {
        font-size: 0.8rem;
    }

    &:hover {
      cursor: normal;
      background-color: transparent;
    }
}
=======
import styled from "styled-components";

export const TrendUsersContainerStyles = styled.div`
width: 100%;
height: 100%;
color: white;
padding: 10px;
font-family: "Red Hat Display";

.iconFire {
    background-color: transparent;
    color: #ffba08;
}


`

export const TrendUsersItemStyles = styled.li`
width: 100%;
height: auto;
background-color: transparent;
display: flex;
align-items: flex-start;
padding: 5px;
gap: 10px;
border-radius: 5px;

img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
}

.iconUserDefault{
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    color: var(--violetpink);
    background-color: white;
}

span, p, b, .iconView {
    background-color: transparent;
}

p {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 800;
    font-size: 0.9rem;
}

&:nth-child(1) {
    color: #53FC18;
}

&:hover {
    cursor: pointer;
    background-color: #80808020;
}

@media (max-width: 1024px) {
    font-size: 0.9rem;
    padding: 0px;
    
    p {
        font-size: 0.8rem;
    }

    &:hover {
      cursor: normal;
      background-color: transparent;
    }
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
`