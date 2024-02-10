import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[8px] bg-muted-foreground/50",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
