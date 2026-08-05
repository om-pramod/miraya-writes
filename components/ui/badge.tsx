import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center border-base border-bw rounded-base px-6 py-2 text-bw font-bold tracking-tight shadow-shadow-sm transition-all hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-main text-white",
        secondary: "bg-main-accent text-white",
        outline: "bg-blank",
        purple: "bg-brand-purple text-white",
        yellow: "bg-brand-yellow text-black",
        main: "bg-main text-white",
        mainAccent: "bg-main-accent text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
