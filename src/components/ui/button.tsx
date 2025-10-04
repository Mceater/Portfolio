import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      {
        "bg-blue-600 text-white hover:bg-blue-700": variant === "default",
        "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50": variant === "outline",
        "text-gray-900 hover:bg-gray-100": variant === "ghost",
      },
      {
        "h-10 py-2 px-4": size === "default",
        "h-9 px-3": size === "sm",
        "h-11 px-8": size === "lg",
      },
      className
    )

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(baseClasses, (children.props as any)?.className),
        ref,
        ...props,
      } as any)
    }

    return (
      <button
        className={baseClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
