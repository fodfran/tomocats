import React from 'react';

const Card = ({ id, name, username, email }) =>{
	//const { id, name, username, email } = props;
	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<img alt="cats" src={`https://robohash.org/${id}?size=200x200&set=set4`} />
			<div>
				<h3>{name}</h3>
				<p>{username}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;