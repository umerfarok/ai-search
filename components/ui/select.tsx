"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import { cn } from "../../lib/utils"

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Root {...props}>
    <SelectPrimitive.Trigger
      ref={ref}
      className="inline-flex items-center justify-between w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
    >
      <SelectPrimitive.Value />
      <SelectPrimitive.Icon>
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Content className="z-50 mt-1 w-full rounded-md bg-white shadow-lg">
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Root>
))
Select.displayName = SelectPrimitive.Root.displayName

const SelectOption = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className="relative flex items-center rounded-md px-2 py-1.5 text-sm text-gray-700 cursor-pointer select-none focus:bg-indigo-600 focus:text-white"
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute left-0 inline-flex items-center pl-2">
      <CheckIcon />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
))
SelectOption.displayName = SelectPrimitive.Item.displayName

// Add the Option property to the Select component
  {/* @ts-ignore  */}
Select.Option = SelectOption

export { Select }