import styles from './Item.module.scss'; 
import { Prato } from 'types/Prato';
import TagsPrato from 'Components/TagsPrato';

//type Props = typeof cardapio[0];

//export default function Item(props: Props) {
export default function Item(props: Prato) {
	const { title, description, category, size, serving, price, photo } = props;
	return (
		<div className={styles.item}>
			<div className={styles.item__imagem}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2> {title} </h2>
					<p> {description} </p>
				</div>
				<TagsPrato {...props} />
			</div>
		</div>
	);
}