import cardapio from 'Data/cardapio.json';
import styles from './inicio.module.scss';
import stylesTema from 'styles/tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

// Uma página para exibir pratos randômicos inicialmente

export default function Inicio(){

	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(()=> 0.5-Math.random()).splice(0,3);

	const navigate = useNavigate();

	function redirecionarParaDetalhes(prato: Prato){
		navigate(`/prato/${prato.id}`, {state:{prato}, replace: false});
	}

	return(
		<section>
			<h3 className={styles.titulo}>Recomendações da Cozinha</h3>
			<div className={styles.recomendados}>
				{pratosRecomendados.map((item)=>(
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button onClick={()=>redirecionarParaDetalhes(item)} className={styles.recomendado__botao}>Ver mais</button>
					</div>
				))}
			</div>
			<h3>
				Nossa Casa
			</h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} />
				<div className={styles.nossaCasa__endereco}>
					Rua Vergueiro, 3185
					<br/>
					<br/>
					Vila Mariana - SP
				</div>
			</div>
		</section>
	);
}