import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-base text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] focus-visible:ring-ring-brutal focus-visible:ring-[4px]",
  {
    variants: {
      variant: {
        default: 'bg-bw text-white border-base border-bw hover:bg-bw/90 hover:shadow-shadow active:shadow-shadow-sm',
        destructive:
          'bg-destructive text-white border-base border-bw hover:bg-destructive/90 hover:shadow-shadow active:shadow-shadow-sm',
        outline:
          'border-base border-bw bg-white text-bw hover:bg-gray-50 hover:shadow-shadow active:shadow-shadow-sm',
        secondary:
          'bg-brand-yellow text-black border-base border-bw hover:bg-brand-yellow/90 hover:shadow-shadow active:shadow-shadow-sm',
        main:
          'bg-main text-white border-base border-bw hover:bg-main/90 hover:shadow-shadow active:shadow-shadow-sm',
        ghost:
          'border-base border-bw rounded-xl hover:bg-gray-50 bg-white hover:shadow-shadow active:shadow-shadow-sm',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-9 px-4 py-2 text-xs',
        lg: 'py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg h-auto',
        icon: 'size-12',
        'icon-sm': 'size-9',
        'icon-lg': 'size-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
