import * as React from "react"
import { cn } from "@/lib/utils"

const GridCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:bg-accent transition-colors duration-300",
      className
    )}
    {...props}
  />
))
GridCard.displayName = "GridCard"

export { GridCard }
