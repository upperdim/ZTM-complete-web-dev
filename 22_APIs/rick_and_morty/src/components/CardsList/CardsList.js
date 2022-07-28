import React from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'

const CardsList = (props) => {
	return (
		<div>
			{
				props.characters.map(currCharacter => {
					return <CharacterCard 
						key={currCharacter.id}
						character={currCharacter}
					/>
				})
			}
		</div>
	)
}

export default CardsList