import Header from '@/components/Header';
import ServerCard from '@/components/ServerCard';
import StatsCard from '@/components/StatsCard';

const Index = () => {
  const servers = [
    {
      id: 1,
      game: 'EURO TRUCK SIMULATOR 2',
      name: 'ПОКАТУШКИ НА ДАЛЬНЯК 24/7 #2',
      currentPlayers: 8,
      maxPlayers: 8,
      sessionId: '85568392929215003',
      image: 'https://cdn.poehali.dev/files/c1328686-f47a-4d86-bfed-26ed59383834.png'
    },
    {
      id: 2,
      game: 'AMERICAN TRUCK SIMULATOR',
      name: 'ПОКАТУШКИ НА ДАЛЬНЯК 24/7 #1',
      currentPlayers: 5,
      maxPlayers: 8,
      sessionId: '85568392929447906',
      image: 'https://cdn.poehali.dev/files/c1328686-f47a-4d86-bfed-26ed59383834.png'
    },
    {
      id: 3,
      game: 'EURO TRUCK SIMULATOR 2',
      name: 'ПОКАТУШКИ НА ДАЛЬНЯК 24/7 #4',
      currentPlayers: 2,
      maxPlayers: 8,
      sessionId: '85568392929999710',
      image: 'https://cdn.poehali.dev/files/c1328686-f47a-4d86-bfed-26ed59383834.png'
    },
    {
      id: 4,
      game: 'EURO TRUCK SIMULATOR 2',
      name: 'ПОКАТУШКИ НА ДАЛЬНЯК 24/7 #1',
      currentPlayers: 1,
      maxPlayers: 8,
      sessionId: '85568392928972339',
      image: 'https://cdn.poehali.dev/files/c1328686-f47a-4d86-bfed-26ed59383834.png'
    },
    {
      id: 5,
      game: 'EURO TRUCK SIMULATOR 2',
      name: 'ПОКАТУШКИ НА ДАЛЬНЯК 24/7 #5',
      currentPlayers: 6,
      maxPlayers: 8,
      sessionId: '85568392929215004',
      image: 'https://cdn.poehali.dev/files/c1328686-f47a-4d86-bfed-26ed59383834.png'
    },
    {
      id: 6,
      game: 'EURO TRUCK SIMULATOR 2',
      name: 'ПОКАТУШКИ НА ДАЛЬНЯК 24/7 #6',
      currentPlayers: 3,
      maxPlayers: 8,
      sessionId: '85568392929215005',
      image: 'https://cdn.poehali.dev/files/c1328686-f47a-4d86-bfed-26ed59383834.png'
    },
    {
      id: 7,
      game: 'EURO TRUCK SIMULATOR 2',
      name: 'ПОКАТУШКИ НА ДАЛЬНЯК 24/7 #7',
      currentPlayers: 7,
      maxPlayers: 8,
      sessionId: '85568392929215006',
      image: 'https://cdn.poehali.dev/files/c1328686-f47a-4d86-bfed-26ed59383834.png'
    },
    {
      id: 8,
      game: 'EURO TRUCK SIMULATOR 2',
      name: 'ПОКАТУШКИ НА ДАЛЬНЯК 24/7 #8',
      currentPlayers: 4,
      maxPlayers: 8,
      sessionId: '85568392929215007',
      image: 'https://cdn.poehali.dev/files/c1328686-f47a-4d86-bfed-26ed59383834.png'
    }
  ];

  const totalPlayers = servers.reduce((sum, server) => sum + server.currentPlayers, 0);
  const totalSlots = servers.reduce((sum, server) => sum + server.maxPlayers, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
            ВСЕ ИГРОВЫЕ СЕРВЕРЫ КОНВОЯ ОНЛАЙН
          </h1>
          <p className="text-primary text-lg font-semibold">
            Доступны 24/7. Перезагружаются с 4 до 6 и с 14 до 16 МСК
          </p>
          <p className="text-muted-foreground mt-2">
            Совет: нажмите на номер сессии, чтобы его скопировать
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatsCard 
            title="Всего игроков онлайн"
            value={totalPlayers}
            icon="Users"
            suffix="игроков"
          />
          <StatsCard 
            title="Активных серверов"
            value={servers.length}
            icon="Server"
            suffix="серверов"
          />
          <StatsCard 
            title="Всего слотов"
            value={totalSlots}
            icon="Database"
            suffix="мест"
          />
        </div>

        <div id="servers" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servers.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2024 ПОКАТУШКИ. Игровой мониторинг конвоя</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;