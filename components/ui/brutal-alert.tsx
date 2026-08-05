import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-base border-base p-4 shadow-shadow-sm flex items-start gap-3",
  {
    variants: {
      variant: {
        default: "bg-main text-white border-bw",
        destructive: "bg-destructive text-white border-bw",
        success: "bg-[#A3E635] text-black border-bw",
        warning: "bg-brand-yellow text-black border-bw",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const icons = {
  default: Info,
  destructive: AlertCircle,
  success: CheckCircle2,
  warning: AlertCircle,
}

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const Icon = icons[variant || "default"]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <Icon className="h-5 w-5 shrink-0" />
        <div className="font-heading text-sm [&_p]:leading-relaxed">
          {children}
        </div>
      </div>
    )
  }
)
Alert.displayName = "Alert"

export { Alert }
