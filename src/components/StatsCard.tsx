import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: number;
  suffix?: string;
}

export default function StatsCard({ title, value, icon, trend, suffix }: StatsCardProps) {
  const isPositive = trend && trend > 0;
  
  return (
    <Card className="p-6 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/10 animate-scale-in">
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-display font-bold text-foreground">
              {value}
            </h3>
            {suffix && <span className="text-lg text-muted-foreground">{suffix}</span>}
          </div>
          {trend !== undefined && (
            <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              <Icon name={isPositive ? 'TrendingUp' : 'TrendingDown'} size={14} />
              <span>{Math.abs(trend)}%</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon name={icon} size={24} className="text-primary" />
        </div>
      </div>
    </Card>
  );
}
