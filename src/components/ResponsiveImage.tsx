import Image from "next/image";
import { ProjectImage } from "@/types";

type ResponsiveImageProps = ProjectImage & {
  className?: string;
  eager?: boolean;
  sizes?: string;
};

const imageDimensions: Record<string, { width: number; height: number }> = {
  "/work/girex/current/dashboard.webp": { width: 1100, height: 590 },
  "/work/girex/current/wallet-history.webp": { width: 1178, height: 618 },
  "/work/girex/current/card-top-up.webp": { width: 900, height: 602 },
  "/work/girex/current/contextual-swap.webp": { width: 800, height: 578 },
  "/work/girex/current/card-responsive-web.webp": { width: 350, height: 716 },
  "/me1.jpeg": { width: 640, height: 640 },
  "/work/contributions/pactos.webp": { width: 1280, height: 720 },
  "/work/contributions/smartteach.webp": { width: 1280, height: 720 },
  "/work/contributions/web3-invest.webp": { width: 1280, height: 726 },
  "/work/contributions/zelus-wallet.webp": { width: 1280, height: 720 },
  "/work/girex/admin-overview.webp": { width: 1440, height: 1000 },
  "/work/girex/deal-chat.webp": { width: 1440, height: 1000 },
  "/work/girex/merchant-dashboard.webp": { width: 1440, height: 1000 },
  "/work/girex/native-dashboard.webp": { width: 1206, height: 2622 },
  "/work/girex/native-market.webp": { width: 1206, height: 2622 },
  "/work/girex/native-offline.webp": { width: 1206, height: 2622 },
  "/work/girex/mobile-chat.webp": { width: 390, height: 844 },
  "/work/girex/mobile-map.webp": { width: 390, height: 844 },
  "/work/girex/mobile-market.webp": { width: 390, height: 844 },
  "/work/girex/offline-map.webp": { width: 1440, height: 1000 },
  "/work/girex/p2p-market.webp": { width: 1440, height: 1000 },
  "/work/girex/profile.webp": { width: 1440, height: 1000 },
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
