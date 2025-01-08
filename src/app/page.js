import styles from './products.module.css';
import Image from 'next/image';

// Mark as async server component (no 'use client' directive)
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

// Helper function to trim title to exactly 20 characters
const trimTitle = (title) => {
  if (title.length <= 20) return title;
  return `${title.substring(0, 20)}...`;
};

export default async function Home() {
  let products = [];
  let error = null;

  try {
    products = await getProducts();
  } catch (err) {
    error = 'Please refresh the page to try again.';
  }

  return (
    <div className={styles.productsGrid}>
      {error ? (
        <div className={styles.errorMessage}>
          {error}
        </div>
      ) : (
        products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.productInfo}>
              <h3>{trimTitle(product.title)}</h3>
              <div className="product-signin">
                <a href="#" className="signin-text">
                  <span className="underline">Sign in</span> or Create an account to see pricing
                </a>
                <Image 
                  src="/heart.svg" 
                  alt="Wishlist" 
                  width={20} 
                  height={20}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
