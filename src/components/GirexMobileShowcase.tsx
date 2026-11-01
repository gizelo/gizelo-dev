import ResponsiveImage from "@/components/ResponsiveImage";
import { cn } from "@/lib/utils";
import { ProjectImage } from "@/types";

type GirexMobileShowcaseProps = {
  images: ProjectImage[];
  compact?: boolean;
};

const GirexMobileShowcase = ({ images, compact = false }: GirexMobileShowcaseProps) => (
  <div
    className={cn(
      "mx-auto grid w-full grid-cols-[1fr_1.08fr_1fr] items-end gap-1 bg-white",
      compact ? "max-w-3xl px-4 py-8 sm:gap-3 sm:px-7" : "max-w-[1200px] gap-2 sm:gap-6",
    )}
  >
    {images.map((image, index) => (
      <div key={image.src} className={cn(index !== 1 && "px-1 pt-6 sm:px-2 sm:pt-10")}>
        <ResponsiveImage
          {...image}
          className="h-auto w-full object-contain"
          sizes={
            compact
              ? "(max-width: 1024px) 30vw, 22vw"
              : "(max-width: 640px) 31vw, (max-width: 1280px) 30vw, 390px"
          }
          eager
        />
      </div>
    ))}
  </div>
);

export default GirexMobileShowcase;
