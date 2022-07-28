import React from 'react'
import './CharacterCard.css'

const CharacterCard = (props) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img className='roundCornerImage' alt={props.character.name} src={props.character.image} />
			<h2>{props.character.name}</h2>
		</div>
	)
}

export default CharacterCard