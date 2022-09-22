import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Article from '../Components/Article';
import data from '../data';

export default function HomeScreen() {
	return (
		<div>
			<Row className="top mb-3">
				<Col md={8}>
					<Row className="target">
						<Col md={8}>
							<img
								src={data.articles[0].image}
								className="img-fluid rounded"
								alt=""
							></img>
						</Col>
						<Col md={4}>
							<Card>
								<Card.Body>
									<Link to="#">
										<Card.Title>{data.articles[0].title}</Card.Title>
									</Link>
									<Card.Text>{data.articles[0].summary}</Card.Text>

									<Card.Text>
										<Link to="#">{data.articles[0].category}</Link>{' '}
										<i class="fa-regular fa-message"></i>{' '}
										<span className="numReview">
											{data.articles[0].numReviews}
										</span>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row className="target white">
						{data.articles.slice(0, 3).map((art) => (
							<Col md={4}>
								<Card>
									<Card.Body>
										<Link to="#">
											<Card.Title>{art.title}</Card.Title>
										</Link>
										<Card.Text>
											{art.summary} <i class="fa-regular fa-message"></i>{' '}
											<span className="numReview">{art.numReviews}</span>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
				<Col md={4}>
					<ListGroup>
						<ListGroup.Item>
							<Link to="#">
								<img
									src="/Images/r1.jpg"
									className="img-fluid rounded"
									alt="img1"
								></img>
							</Link>
						</ListGroup.Item>
						<ListGroup.Item>
							<Link to="#">
								<img
									src="/Images/r2.jpg"
									className="img-fluid rounded"
									alt="img2"
								></img>
							</Link>
						</ListGroup.Item>
						<ListGroup.Item>
							<Link to="#">
								<img
									src="/Images/r3.jpg"
									className="img-fluid rounded"
									alt="img3"
								></img>
							</Link>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>

			<Row className="mainScreen">
				<Col md={5} className="leftMainScreen mt-3">
					{data.articles.map((art) => (
						<Article article={art} />
					))}
				</Col>
				<Col md={7}>
					<ListGroup className="mt-3">
						{data.category.slice(0, 5).map((cate) => (
							<ListGroup.Item>
								<div className="cateTitle">
									<Link to="#">
										<h4>{cate.name}</h4>
									</Link>
								</div>
								{data.articles
									.filter((x) => x.category === cate.name)
									.slice(0, 1)
									.map((art) => (
										<div>
											<Row>
												<Card>
													<Card.Body>
														<Row>
															<Col>
																<img
																	src={art.image}
																	className="img-fluid rounded"
																	alt={art.title}
																></img>
															</Col>
															<Col>
																<Link to="#">
																	<Card.Title>{art.title}</Card.Title>
																</Link>

																<Card.Text>
																	{art.summary}{' '}
																	<i class="fa-regular fa-message"></i>{' '}
																	<span className="numReview">
																		{art.numReviews}
																	</span>
																</Card.Text>
															</Col>
														</Row>
														<Row class="mt-3">
															<ListGroup horizontal>
																{data.articles
																	.filter((x) => x.category === cate.name)
																	.map((art) => (
																		<ListGroup.Item>
																			<i class="fa-solid fa-circle"></i>{' '}
																			<Link to="#">{art.title} </Link>
																			<i className="fa-regular fa-message"></i>{' '}
																			<span className="numReview">
																				{art.numReviews}
																			</span>
																		</ListGroup.Item>
																	))}
															</ListGroup>
														</Row>
													</Card.Body>
												</Card>
											</Row>
										</div>
									))}
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
}
