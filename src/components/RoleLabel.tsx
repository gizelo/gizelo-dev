import { ProductRole } from "@/types";
import { cn } from "@/lib/utils";

export const roleLabels: Record<ProductRole, string> = {
  solo: "Solo build",
  lead: "Lead developer",
  team: "Team project",
};

const markerClasses: Record<ProductRole, string> = {
  solo: "bg-current",
  lead: "bg-current ring-1 ring-current ring-offset-2 ring-offset-transparent",
  team: "border-[1.5px] border-current",
};

type RoleLabelProps = {
  role: ProductRole;
  inverted?: boolean;
  className?: string;
};

const RoleLabel = ({ role, inverted = false, className }: RoleLabelProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em]",
      inverted ? "text-white/85" : "text-ink",
      className,
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        "h-2 w-2 shrink-0",
        inverted ? "text-white" : "text-electric",
        markerClasses[role],
      )}
    />
    {roleLabels[role]}
  </span>
);

export default RoleLabel;
