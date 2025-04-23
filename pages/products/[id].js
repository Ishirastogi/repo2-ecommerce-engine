// pages/products/[id].js
import { useRouter } from 'next/router';
import { products } from '../../lib/products';
import { motion } from 'framer-motion';
import styles from '../../styles/products.module.css';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <motion.div
      className={styles.productDetail}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <button className={styles.addToCart}>Add to Cart</button>
      </div>
    </motion.div>
  );
}
