import { Button } from "@/components/ui/button";
import { pb } from "@/lib/pocketbase";
import Image from "next/image";

type Props = {
  params: {
    productId: string;
  };
};
export default async function ProductDetailView({ params }: Props) {
  const product = await pb.collection("productos").getOne(params.productId);
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div>
        <Image
          alt="Product Image"
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          height={600}
          src={`http://localhost:8090/api/files/${product.collectionId}/${product.id}/${product.imagen}`}
          width={600}
        />
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-2">
          <h1 className="font-bold text-3xl lg:text-4xl">{product.nombre}</h1>
          <p>Soft and comfortable fleece pullover in a classic design.</p>
          <p className="text-gray-500 dark:text-gray-400">
            {product.descripcion}
          </p>
        </div>
        <div className="grid gap-2">
          <Button size="lg">Add to Cart {product.precio} $</Button>
        </div>
      </div>
    </div>
  );
}
