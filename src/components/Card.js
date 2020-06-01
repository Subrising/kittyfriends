import React from 'react'

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='kitties' src={`https://robohash.org/${id}?set=set4`} />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;
