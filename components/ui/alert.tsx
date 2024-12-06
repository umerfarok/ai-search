import * as React from "react"
import { cn } from "../../lib/utils"

const Alert = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-md bg-red-50 p-4",
      className
    )}
    {...props}
  />
)

const AlertTitle = ({ className, ...props }) => (
  <h3
    className={cn(
      "text-sm font-medium text-red-800",
      className
    )}
    {...props}
  />
)

const AlertDescription = ({ className, ...props }) => (
  <div
    className={cn(
      "mt-2 text-sm text-red-700",
      className
    )}
    {...props}
  />
)

export { Alert, AlertTitle, AlertDescription }