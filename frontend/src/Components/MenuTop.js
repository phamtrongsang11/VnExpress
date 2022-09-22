import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../data';

export default function MenuTop() {
	return (
		<ListGroup horizontal>
			<ListGroup.Item>
				<i className="fa-solid fa-house"></i>
			</ListGroup.Item>
			{data.category.map((cate) => (
				<ListGroup.Item>
					<Link to="#">{cate.name}</Link>
				</ListGroup.Item>
			))}
		</ListGroup>
	);
}
