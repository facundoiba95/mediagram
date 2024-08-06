<<<<<<< HEAD
import React from 'react'
import { HeadCardPostInProfileStyles } from '../../organisms/Cards/CardPostInFeed/CardPostInFeedStyles'
import { RiUserSmileFill } from 'react-icons/ri'

const HeadCardPost = ({
    imgProfile,
    username,
    goProfile,
    referTo,
}) => {

    const renderReferTo = () => {
        return referTo.map((item, index) => (
          <small data-username={item.username} onClick={(e) => goProfile(e)} key={index}>{`@${item.username}`}</small>
        ))
      }

    return (
        <HeadCardPostInProfileStyles>
            {
                imgProfile
                    ? <img src={imgProfile} />
                    : <RiUserSmileFill className='imgProfile' />
            }
            <div>
                <h4 data-username={username} onClick={(e) => goProfile(e)}>{username}</h4>
                <span>
                    {
                        referTo.length
                            ? <><small>Menciones: </small>{renderReferTo()}</>
                            : <></>
                    }
                </span>
            </div>
        </HeadCardPostInProfileStyles>
    )
}

=======
import React from 'react'
import { HeadCardPostInProfileStyles } from '../../organisms/Cards/CardPostInFeed/CardPostInFeedStyles'
import { RiUserSmileFill } from 'react-icons/ri'

const HeadCardPost = ({
    imgProfile,
    username,
    goProfile,
    referTo,
}) => {

    const renderReferTo = () => {
        return referTo.map((item, index) => (
          <small data-username={item.username} onClick={(e) => goProfile(e)} key={index}>{`@${item.username}`}</small>
        ))
      }

    return (
        <HeadCardPostInProfileStyles>
            {
                imgProfile
                    ? <img src={imgProfile} />
                    : <RiUserSmileFill className='imgProfile' />
            }
            <div>
                <h4 data-username={username} onClick={(e) => goProfile(e)}>{username}</h4>
                <span>
                    {
                        referTo.length
                            ? <><small>Menciones: </small>{renderReferTo()}</>
                            : <></>
                    }
                </span>
            </div>
        </HeadCardPostInProfileStyles>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default HeadCardPost