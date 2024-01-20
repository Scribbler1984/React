import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const params = useParams();

  return (
    <div>
      <h1>Product Details for Product ID {params.productId}!</h1>
      {/* You can now use productID in your component */}
    </div>
  );
}