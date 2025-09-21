import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface CarbonMeterProps {
  label: string;
  value: number;
  maxValue: number;
  unit: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function CarbonMeter({ 
  label, 
  value, 
  maxValue, 
  unit, 
  trend = "neutral",
  className 
}: CarbonMeterProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const percentage = Math.min((value / maxValue) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-destructive";
      case "down":
        return "text-success";
      default:
        return "text-muted-foreground";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return "↗";
      case "down":
        return "↘";
      default:
        return "→";
    }
  };

  return (
    <div className={cn(
      "bg-gradient-glass backdrop-blur-sm border border-border rounded-lg p-6 shadow-glass",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-card-foreground">{label}</h3>
        <span className={cn("text-sm font-medium", getTrendColor())}>
          {getTrendIcon()}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-primary animate-co2-pulse">
            {animatedValue.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground mb-1">{unit}</span>
        </div>
        
        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-eco rounded-full transition-all duration-2000 ease-out animate-meter-fill"
            style={{ 
              width: `${percentage}%`,
              '--meter-width': `${percentage}%`
            } as React.CSSProperties}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-encrypt-glow" />
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0</span>
          <span>{maxValue.toLocaleString()} {unit}</span>
        </div>
      </div>
    </div>
  );
}