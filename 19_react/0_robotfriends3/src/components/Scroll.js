import React from 'react'

const Scroll = (props) => {
	return (
		// css: overflow-y
		// jsx: overflowY
		// You must camelCase for JSX
		<div style={{overflowY: 'scroll', border: '3px solid black', height: '800px'}}>
			{
				props.children
			}
		</div>
	)
}

export default Scroll