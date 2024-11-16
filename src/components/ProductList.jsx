import { productos } from '../data.js';

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, cantidad: item.cantidad + 1 }
					: item
			);
			setTotal(total + product.precio * product.cantidad);
			setCountProducts(countProducts + product.cantidad);
			return setAllProducts([...products]);
		}

		setTotal(total + product.precio * product.cantidad);
		setCountProducts(countProducts + product.cantidad);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className='container-items'>
			{productos.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<imagen src={product.imagen} alt={product.titulo} />
					</figure>
					<div className='info-product'>
						<h2>{product.titulo}</h2>
						<p className='precio'>${product.precio}</p>
						<button onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};