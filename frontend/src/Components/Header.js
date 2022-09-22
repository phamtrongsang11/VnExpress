import React, { useRef } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MenuTop from './MenuTop';

export default function Header() {
	const currentDate = new Date();
	const menuToggle = useRef();
	const navigation = useRef();
	const ToggleMenu = () => {
		menuToggle.current.classList.toggle('active');
		navigation.current.classList.toggle('active');
	};
	return (
		<div>
			<Navbar variant="light" expand="lg">
				<Container>
					<div
						className="menuToggle"
						ref={menuToggle}
						onClick={ToggleMenu}
					></div>
					<LinkContainer to="/">
						<Navbar.Brand>
							<img
								src="/Images/logo.png"
								height="30"
								className="d-inline-block align-top"
								alt="logo"
							/>
						</Navbar.Brand>
					</LinkContainer>

					<Nav.Link className="no-border ml-15">
						Thứ {currentDate.getDay()}
						{', '}
						{currentDate.getDate()}
						{'/'}
						{currentDate.getMonth()}
						{'/'}
						{currentDate.getFullYear()}
					</Nav.Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto w-100 justify-content-end">
							<Nav.Link className="ml-15">
								<i className="fa-solid fa-clock"></i> Mới nhất
							</Nav.Link>
							<Nav.Link className="ml-15">
								<img
									src="/Images/international.png"
									alt="international"
									height="22"
								></img>
								International
							</Nav.Link>
							<div className="divider ml-15"></div>
							<div className="search-top ml-15">
								<Form action="">
									<input
										type="text"
										name="q"
										className="form-control"
										placeholder="Tìm kiếm"
									></input>
									<Button>
										<i className="fa-solid fa-magnifying-glass"></i>
									</Button>
								</Form>
							</div>

							<Nav.Link className="ml-15">
								<i className="fa-solid fa-user"></i> Đăng nhập
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="navigation" ref={navigation}>
				<MenuTop />
			</div>
		</div>
	);
}
