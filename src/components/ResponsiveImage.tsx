import { ProjectImage } from "@/types";

type ResponsiveImageProps = ProjectImage & {
  className?: string;
  eager?: boolean;
};

const ResponsiveImage = ({
  src,
  srcSmall,
  alt,
  className,
  eager = false,
}: ResponsiveImageProps) => (
  <picture>
    {srcSmall && <source media="(max-width: 900px)" srcSet={srcSmall} />}
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  </picture>
);

export default ResponsiveImage;
