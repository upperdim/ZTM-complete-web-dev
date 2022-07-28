import React from 'react';
import Card from './Card'

// This is the clean version of the code, below for explanations.
const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('NOOOO')
	// }

	return (
		<div>
			{
				robots.map((currentRobot, i) => {
					return (
						<Card
							key={i}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
						/>
					);
				})
			}
		</div>
	);
};

// Old, explanatory version of the code:
//
// // Destructures `props` argument of `CardList` as `{robots}`
// const CardList = ({ robots }) => {
// 	// `robots.map` returns array of robot count, it's stored in cardComponent (10 cards in this case)
// 	const cardsArray = robots.map((currentRobot, i) => {
// 		// `robots` array elements are mapped with this function and resultant array is returned
// 		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} /> // `key` makes React happy. It wants each element to have a unique key to be able to distinguish. We used `i` which changes and is not good actually. `id` would be better because it's unique.
// 	});
//
// 	return (
// 		<div>
// 			{cardsArray}
// 		</div>
// 	);
// };


export default CardList;


// // Examples to understand this better:

// // Example 1:
// const roboList2 = robots.map((currRobot, i) => {
//     return `${robots[i].id} ___ ${robots[i].name} ___ ${robots[i].email}`;
// });

// // Example 2:
// const roboList3 = robots.map((currRobot, i) => {
// 	return [robots[i].id, robots[i].name, robots[i].email];
// });
