"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "../../lib/utils"

// Avatar components
const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            className
        )}
        {...props}
    />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center rounded-full bg-muted",
            className
        )}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

// Card components
const Card = ({ children, className, ...props }) => (
    <div className={cn("rounded-lg border shadow-md", className)} {...props}>
        {children}
    </div>
)

const CardContent = ({ children, className, ...props }) => (
    <div className={cn("p-4", className)} {...props}>
        {children}
    </div>
)

const CardHeader = ({ children, className, ...props }) => (
    <div className={cn("border-b p-4", className)} {...props}>
        {children}
    </div>
)

const CardTitle = ({ children, className, ...props }) => (
    <h2 className={cn("text-lg font-bold", className)} {...props}>
        {children}
    </h2>
)

const CardDescription = ({ children, className, ...props }) => (
    <p className={cn("text-sm text-muted", className)} {...props}>
        {children}
    </p>
)

const CardFooter = ({ children, className, ...props }) => (
    <div className={cn("border-t p-4", className)} {...props}>
        {children}
    </div>
)

export { Avatar, AvatarImage, AvatarFallback, Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter }