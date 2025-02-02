import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import ArticlesPage from './page/ArticlesPage';

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/articles' element={<ArticlesPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
