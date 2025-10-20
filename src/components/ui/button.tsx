import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group active:scale-95 active:shadow-inner",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-pink-500 before:opacity-0 hover:before:opacity-20 active:before:opacity-30 before:transition-opacity before:duration-300 after:absolute after:inset-0 after:bg-white after:opacity-0 active:after:opacity-20 after:transition-opacity after:duration-150 after:animate-ping",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-red-500 before:opacity-0 hover:before:opacity-20 active:before:opacity-30 before:transition-opacity after:absolute after:inset-0 after:bg-white after:opacity-0 active:after:opacity-10 after:transition-opacity after:duration-150",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:bg-accent/80 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500/10 before:to-purple-500/10 before:opacity-0 hover:before:opacity-100 active:before:opacity-50 before:transition-opacity after:absolute after:inset-0 after:bg-gradient-to-r after:from-pink-500/20 after:to-purple-500/20 after:opacity-0 active:after:opacity-100 after:transition-opacity after:duration-150",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-400 before:to-purple-400 before:opacity-0 hover:before:opacity-10 active:before:opacity-20 before:transition-opacity after:absolute after:inset-0 after:bg-white after:opacity-0 active:after:opacity-10 after:transition-opacity after:duration-150",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/80 before:absolute before:inset-0 before:bg-pink-500/10 before:opacity-0 hover:before:opacity-100 active:before:opacity-50 before:transition-opacity after:absolute after:inset-0 after:bg-pink-500/20 after:opacity-0 active:after:opacity-100 after:transition-opacity after:duration-150",
        link: "text-primary underline-offset-4 hover:underline hover:text-pink-600 active:text-pink-700 transition-colors active:translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
