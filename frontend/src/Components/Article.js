import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Article(props) {
	const { article } = props;
	return (
		<div>
			<Card>
				<Card.Body>
					<Link to="#">
						<Card.Title>{article.title}</Card.Title>
					</Link>

					<Card.Text>
						<Row>
							<Col>
								<img
									src={article.image}
									className="img-fluid round"
									alt={article.title}
								></img>
							</Col>
							<Col>
								<Card.Text>
									{article.summary} <i class="fa-regular fa-message"></i>{' '}
									<span className="numReview">{article.numReviews}</span>
								</Card.Text>
							</Col>
						</Row>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}
