import Menu from 'Components/Menu';
import PaginaPadrao from 'Components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function AppRouter(){
	return(
		<main>
			<Router>
				{/* Adiciona o menu */}
				<Menu />
				{/* Renderiza as demais páginas de acordo com a rota */}
				<Routes>
					<Route path='/' element={<PaginaPadrao/>}>
						<Route index element={<Inicio/>} />
						<Route path='cardapio' element={<Cardapio/>} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
}