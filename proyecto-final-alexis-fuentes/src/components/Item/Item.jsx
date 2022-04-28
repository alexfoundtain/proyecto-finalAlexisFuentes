import React from 'react'

function Item({id, title, description, price, pictureUrl}){
        return (
            <div className='card' id={id}>
                <div className='header'>{title} </div>
                <div className='content'>
                    <div className='img-container'>
                        <img src={pictureUrl} alt='No image found' />
                        {description}
                    </div>
                </div>
                <div className='footer'>{price}</div>
            </div>
            )

      }
    


export default Item