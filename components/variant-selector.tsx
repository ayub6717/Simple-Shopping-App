"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

type Color = {
  name: string
  value: string
}

type VariantSelectorProps = {
  sizes: string[]
  colors: Color[]
  selectedSize: string
  selectedColor: Color
  onSizeChange: (size: string) => void
  onColorChange: (color: Color) => void
}

export default function VariantSelector({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}: VariantSelectorProps) {
  return (
    <div className="space-y-6">
      {/* Size Selector */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="size-selector" className="text-sm font-medium">
            Size
          </Label>
          <button className="text-xs text-primary hover:underline">Size Guide</button>
        </div>
        <RadioGroup
          id="size-selector"
          value={selectedSize}
          onValueChange={onSizeChange}
          className="grid grid-cols-6 gap-2"
          aria-label="Select size"
        >
          {sizes.map((size) => (
            <div key={size}>
              <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
              <Label
                htmlFor={`size-${size}`}
                className={`flex h-10 items-center justify-center rounded-md border text-sm transition-colors hover:bg-secondary/10 ${
                  selectedSize === size ? "border-teal bg-teal/10 font-medium text-teal" : "border-input"
                }`}
              >
                {size}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Color Selector */}
      <div className="space-y-2">
        <Label htmlFor="color-selector" className="text-sm font-medium">
          Color: <span className="text-muted-foreground">{selectedColor.name}</span>
        </Label>
        <RadioGroup
          id="color-selector"
          value={selectedColor.name}
          onValueChange={(value) => {
            const color = colors.find((c) => c.name === value)
            if (color) onColorChange(color)
          }}
          className="flex gap-2"
          aria-label="Select color"
        >
          {colors.map((color) => (
            <div key={color.name}>
              <RadioGroupItem value={color.name} id={`color-${color.name}`} className="sr-only" />
              <Label
                htmlFor={`color-${color.name}`}
                className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110 ${
                  selectedColor.name === color.name ? "ring-2 ring-teal ring-offset-2" : ""
                }`}
              >
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: color.value }}
                  aria-hidden="true"
                ></span>
                <span className="sr-only">{color.name}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}

