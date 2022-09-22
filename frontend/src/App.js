import { Container } from 'react-bootstrap';

import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';

function App() {
	return (
		<BrowserRouter>
			<div>
				<header>
					<div>
						<Header />
					</div>
				</header>
				<main>
					<Container className="mt-3">
						<Routes>
							<Route path="/" element={<HomeScreen />}></Route>
						</Routes>
					</Container>
				</main>
				<Footer></Footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
