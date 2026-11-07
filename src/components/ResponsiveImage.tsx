import Image from "next/image";
import { ProjectImage } from "@/types";

type ResponsiveImageProps = ProjectImage & {
  className?: string;
  /** Marks the image as the page's LCP candidate: loaded eagerly with high fetch priority. */
  priority?: boolean;
  sizes?: string;
};

const ResponsiveImage = ({
  src,
  alt,
  className,
  priority = false,
  sizes = "100vw",
}: ResponsiveImageProps) => (
  <Image
    src={src}
    alt={alt}
    className={className}
    sizes={sizes}
    {...(priority && { loading: "eager", fetchPriority: "high" })}
  />
);

export default ResponsiveImage;
