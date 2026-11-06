import ResponsiveImage from "@/components/ResponsiveImage";
import GirexMobileShowcase from "@/components/GirexMobileShowcase";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

type ProductVisualProps = {
  product: Product;
  className?: string;
  sizes: string;
  eager?: boolean;
};

const ProductVisual = ({ product, className, sizes, eager }: ProductVisualProps) => {
  if (product.phones) {
    return (
      <div
        className={cn("flex items-center justify-center overflow-hidden py-6 lg:py-10", className)}
      >
        <GirexMobileShowcase images={product.phones} compact />
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden bg-ink/[0.04]", className)}>
      {product.image && (
        <ResponsiveImage
          {...product.image}
          className="h-full w-full object-contain p-[5%] drop-shadow-[0_6px_16px_rgba(20,22,19,0.1)]"
          sizes={sizes}
          eager={eager}
        />
      )}
    </div>
  );
};

export default ProductVisual;
