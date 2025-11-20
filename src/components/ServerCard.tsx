import { Card } from '@/components/ui/card';

interface ServerCardProps {
  game: string;
  name: string;
  currentPlayers: number;
  maxPlayers: number;
  sessionId: string;
  image: string;
}

export default function ServerCard({ game, name, currentPlayers, maxPlayers, sessionId, image }: ServerCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:border-primary transition-all duration-300 bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={game}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute top-4 left-4 right-4">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider">
            {game}
          </h3>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-center mb-4">
            <div className="text-7xl font-bold text-primary leading-none">
              {currentPlayers}/{maxPlayers}
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-white font-bold text-center text-sm uppercase tracking-wide">
              {name}
            </h4>
            <div className="text-primary text-center text-xs font-mono font-semibold">
              {sessionId}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}