import Image from "next/image";
import { ProjectImage } from "@/types";

type ResponsiveImageProps = ProjectImage & {
  className?: string;
  eager?: boolean;
  sizes?: string;
};

const imageDimensions: Record<string, { width: number; height: number }> = {
  "/work/girex/native/cover.png": { width: 1200, height: 630 },
  "/work/gimecs/program-execute.jpg": { width: 1280, height: 836 },
  "/work/gimecs/program-edit.jpg": { width: 1280, height: 836 },
  "/work/gimecs/wps-monitoring.jpg": { width: 1280, height: 768 },
  "/work/gimecs/wps-specification.jpg": { width: 1280, height: 769 },
  "/work/web3-invest/dashboard.jpg": { width: 1280, height: 726 },
  "/work/girex/native/01-home.png": { width: 1662, height: 3212 },
  "/work/girex/native/02-card-plus-usd.png": { width: 1734, height: 3260 },
  "/work/girex/native/09-swap-quote.png": { width: 1710, height: 3392 },
  "/work/girex/current/dashboard.webp": { width: 1100, height: 590 },
  "/work/girex/current/wallet-history.webp": { width: 1178, height: 618 },
  "/work/girex/current/card-top-up.webp": { width: 900, height: 602 },
  "/work/contributions/pactos.webp": { width: 1280, height: 720 },
  "/work/contributions/smartteach.webp": { width: 1280, height: 720 },
  "/work/contributions/zelus-wallet.webp": { width: 1280, height: 720 },
  "/work/house-of-smile/about.webp": { width: 1280, height: 720 },
  "/work/house-of-smile/home.webp": { width: 1440, height: 1000 },
  "/work/house-of-smile/services.webp": { width: 1280, height: 720 },
  "/work/chocolatin-labs/dogs.webp": { width: 1440, height: 805 },
  "/work/chocolatin-labs/home.webp": { width: 1280, height: 720 },
  "/work/chocolatin-labs/puppies.webp": { width: 1440, height: 805 },
};

const ResponsiveImage = ({
  src,
  alt,
  className,
  eager = false,
  sizes = "100vw",
}: ResponsiveImageProps) => {
  const dimensions = imageDimensions[src] ?? { width: 1440, height: 1000 };

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      className={className}
      sizes={sizes}
      priority={eager}
    />
  );
};

export default ResponsiveImage;
