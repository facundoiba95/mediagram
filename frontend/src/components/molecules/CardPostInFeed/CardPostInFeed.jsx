import React from 'react'
import { CardPostInFeedContainerStyles, FootCardPostInProfileStyles, HeadCardPostInProfileStyles } from './CardPostInFeedStyles'
import data from '../../dataTestUsers';
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';

const CardPostInFeed = () => {
// los datos de "data" deben ir como argumentos del componente, para que al ser llamado
// sea renderizado con los datos de la api.
  return (
    <CardPostInFeedContainerStyles>
        <HeadCardPostInProfileStyles>
          <img src={data[0].imgProfile} alt="" />
          <h4>{data[0].username}</h4>
        </HeadCardPostInProfileStyles>
        <img src="https://scontent.fcor18-1.fna.fbcdn.net/v/t1.18169-9/11219369_10153639685434165_5012510746251206608_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c2f564&_nc_eui2=AeGFIyO-ky98kraZrevgfUF08wCQzA51cyDzAJDMDnVzIBxAU6X6r3z6QJhDzf0jkwE&_nc_ohc=YV66hgB4lOYAX-DPz6j&_nc_ht=scontent.fcor18-1.fna&oh=00_AfCXFAZ6TaUTKn_hpP7CBeifyP5GQ-AJeYUN3aTvrYBcvQ&oe=655EB5AC" alt="" />
        <FootCardPostInProfileStyles isDescription={data[0].description}>
          <span className='containerIconPost'>
            <div><FaEye className='iconView'/><h5>22</h5></div>         {/** counterViews */}
            <div><FaHeart className='iconHeart'/><h5>4</h5></div>       {/** counterLikes */}
            <div><FaComment className='iconComment'/><h5>6</h5></div>   {/** counterComments */}
          </span>
          <span className='containerDescription'>
            {
              data[0].description ?
              <>
                <h4>{ data[0].username }</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eum, eligendi dicta, velit corrupti iusto culpa quasi, et sunt repellat aliquid quis odio suscipit? Atque cupiditate tempore voluptatum nostrum unde?</p>
              </>
              : <></>
            }
          </span>
          <small>Ver post completo</small>
        </FootCardPostInProfileStyles>
    </CardPostInFeedContainerStyles>
    )
}

export default CardPostInFeed