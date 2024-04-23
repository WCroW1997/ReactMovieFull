import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './layout/Layout'
import Home from '../../08 ReactMovie/src/pages/Home'
import Catalog from './pages/Catalog'
import Details from './pages/details/Details'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/:category' element={<Catalog />} />
					<Route path='/:category/search/:keyword' element={<Catalog />} />
					<Route path='/:category/:id' element={<Details />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
