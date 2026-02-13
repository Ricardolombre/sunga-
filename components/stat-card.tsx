import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  trend?: {
    value: string
    isPositive: boolean
  }
  variant?: "default" | "accent" | "warning"
}

export function StatCard({ title, value, subtitle, trend, variant = "default" }: StatCardProps) {
  return (
    <Card
      className={cn(
        "transition-all hover:shadow-lg border-border bg-white",
        variant === "accent" && "border-accent/30 bg-accent/5",
        variant === "warning" && "border-destructive/30 bg-destructive/5",
      )}
    >
      <CardContent className="p-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-primary">{title}</p>
          <p
            className={cn(
              "text-3xl font-bold",
              variant === "accent" ? "text-accent" : variant === "warning" ? "text-destructive" : "text-accent",
            )}
          >
            {value}
          </p>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          {trend && (
            <p className={cn("text-xs font-medium", trend.isPositive ? "text-accent" : "text-destructive")}>
              {trend.value}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
