import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProductVisual from "@/components/ProductVisual";
import RoleLabel from "@/components/RoleLabel";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  variant: "flagship" | "primary" | "secondary";
};

const stretchedLink = "after:absolute after:inset-0 after:content-['']";

const ProductTitle = ({
  product,
  className,
  as: Heading = "h3",
  inverted = false,
}: {
  product: Product;
  className: string;
  as?: "h3" | "h4";
  inverted?: boolean;
}) => {
  const href = product.caseSlug ? `/work/${product.caseSlug}` : product.website;
  const linkClassName = cn(inverted ? "focus-ring-inverse" : "focus-ring", stretchedLink);

  if (!href) {
    return <Heading className={className}>{product.name}</Heading>;
  }

  return (
    <Heading className={className}>
      {product.caseSlug ? (
        <Link href={href} className={linkClassName}>
          {product.name}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          {product.name}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </Heading>
  );
};

const MetaRow = ({ product, inverted = false }: { product: Product; inverted?: boolean }) => (
  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
    {product.role ? <RoleLabel role={product.role} inverted={inverted} /> : <span />}
    {product.platforms && (
      <span
        className={cn(
          "text-xs font-medium uppercase tracking-[0.14em]",
          inverted ? "text-white/70" : "text-ink/60",
        )}
      >
        {product.platforms}
      </span>
    )}
  </div>
);

const MyPart = ({
  text,
  inverted = false,
  className,
}: {
  text: string;
  inverted?: boolean;
  className?: string;
}) => (
  <p className={cn("leading-relaxed", inverted ? "text-white/80" : "text-ink/80", className)}>
    <b className={cn("font-semibold", inverted ? "text-white" : "text-ink")}>My part: </b>
    {text}
  </p>
);

const CardLinks = ({ product, inverted = false }: { product: Product; inverted?: boolean }) => (
  <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
    {product.caseSlug && (
      <Link
        href={`/work/${product.caseSlug}`}
        className={cn(
          "inline-flex min-h-11 items-center gap-2",
          inverted
            ? "focus-ring-inverse text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            : "focus-ring text-electric hover:text-electric-dark",
        )}
      >
        Case study<span className="sr-only">: {product.name}</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    )}
    {product.website && (
      <a
        href={product.website}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex min-h-11 items-center gap-2 underline underline-offset-4",
          inverted
            ? "focus-ring-inverse text-white/80 decoration-white/30 hover:text-white"
            : "focus-ring text-ink/75 decoration-ink/25 hover:text-ink",
        )}
      >
        Visit<span className="sr-only"> {product.name} (opens in a new tab)</span>
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    )}
  </div>
);

const ProductCard = ({ product, variant }: ProductCardProps) => {
  const subtitle = [product.kind, product.client].filter(Boolean).join(" · ");

  if (variant === "flagship") {
    return (
      <article className="relative grid bg-ink text-white lg:grid-cols-12">
        <ProductVisual
          product={product}
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[520px]"
        />
        <div className="flex flex-col p-6 sm:p-8 lg:col-span-5 lg:order-first lg:p-12">
          <MetaRow product={product} inverted />
          <ProductTitle
            product={product}
            inverted
            className="mt-6 text-4xl font-bold tracking-[-0.045em] sm:text-5xl"
          />
          <p className="mt-2 text-white/70">{subtitle}</p>
          <p className="mt-6 text-lg leading-relaxed text-white/85">{product.summary}</p>
          <MyPart text={product.myPart} inverted className="mt-4" />
          <div className="mt-auto">
            <CardLinks product={product} inverted />
          </div>
        </div>
      </article>
    );
  }

  if (variant === "primary") {
    return (
      <article className="relative flex flex-col">
        <ProductVisual
          product={product}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="aspect-[16/10] md:aspect-[4/3]"
        />
        <div className="mt-6 flex flex-1 flex-col">
          <MetaRow product={product} />
          <ProductTitle
            product={product}
            className="mt-4 text-3xl font-bold tracking-[-0.04em] lg:text-4xl"
          />
          <p className="mt-2 text-ink/60">{subtitle}</p>
          <p className="mt-5 leading-relaxed text-ink/75">{product.summary}</p>
          {product.detail && (
            <p className="mt-2 text-[15px] leading-relaxed text-ink/60">{product.detail}</p>
          )}
          <MyPart text={product.myPart} className="mt-4 text-[15px]" />
          <div className="mt-auto">
            <CardLinks product={product} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="relative grid grid-cols-[120px_1fr] gap-4 py-5 sm:block sm:py-0">
      <ProductVisual
        product={product}
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 50vw, 33vw"
        className="aspect-[4/3] sm:aspect-[3/2]"
      />
      <div className="min-w-0 sm:mt-5">
        <MetaRow product={product} />
        <ProductTitle
          product={product}
          as="h4"
          className="mt-2 text-lg font-bold tracking-[-0.02em] sm:mt-3 sm:text-xl"
        />
        <p className="mt-1 text-sm text-ink/60">{subtitle}</p>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/75 sm:mt-3 sm:line-clamp-none">
          {product.myPart}
        </p>
        {(product.caseSlug || product.website) && (
          <div className="hidden sm:block">
            <CardLinks product={product} />
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
