// pages/index.js (Repo 2)
import Link from 'next/link';
import { products } from '../lib/products';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product List (Repo 2)</h1>
      <ul style={{ lineHeight: '2rem' }}>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
