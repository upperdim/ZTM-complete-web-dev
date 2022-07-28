import React from "react"

const DataDisplay = (props) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Latitude</th>
						<th>Longitude</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{ props.latitude }</td>
						<td>{ props.longitude }</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default DataDisplay