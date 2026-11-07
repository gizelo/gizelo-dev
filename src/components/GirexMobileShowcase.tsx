import ResponsiveImage from "@/components/ResponsiveImage";
import { cn } from "@/lib/utils";
import { ProjectImage } from "@/types";

type GirexMobileShowcaseProps = {
  images: ProjectImage[];
  compact?: boolean;
  priority?: boolean;
};

const GirexMobileShowcase = ({
  images,
  compact = false,
  priority = false,
}: GirexMobileShowcaseProps) => (
  <div
    className={cn(
      "mx-auto grid w-full grid-cols-[1fr_1.08fr_1fr] items-end",
      compact ? "max-w-2xl gap-2 px-6 sm:gap-4 sm:px-10" : "max-w-[1200px] gap-2 sm:gap-6",
    )}
  >
    {images.map((image, index) => (
      <div key={image.src.src} className={cn(index !== 1 && "pb-6 sm:pb-10")}>
        <ResponsiveImage
          {...image}
          className="h-auto w-full object-contain"
          sizes={
            compact
              ? "(max-width: 1024px) 30vw, 18vw"
              : "(max-width: 640px) 31vw, (max-width: 1280px) 30vw, 390px"
          }
          priority={priority}
        />
      </div>
    ))}
  </div>
);

export default GirexMobileShowcase;
