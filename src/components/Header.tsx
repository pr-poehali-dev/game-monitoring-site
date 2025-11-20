import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={28} className="text-white" />
            </div>
            <span className="text-3xl font-bold text-primary tracking-tight">ПОКАТУШКИ</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#servers" className="text-foreground hover:text-primary transition-colors uppercase text-sm font-bold tracking-wide">
              Серверы онлайн
            </a>
            <a href="#rules" className="text-foreground hover:text-primary transition-colors uppercase text-sm font-bold tracking-wide">
              Правила
            </a>
            <a href="#join" className="text-foreground hover:text-primary transition-colors uppercase text-sm font-bold tracking-wide">
              Как подключиться
            </a>
            <a href="#games" className="text-foreground hover:text-primary transition-colors uppercase text-sm font-bold tracking-wide">
              Игры
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors uppercase text-sm font-bold tracking-wide">
              Общение
            </a>
            <a href="#logistics" className="text-foreground hover:text-primary transition-colors uppercase text-sm font-bold tracking-wide">
              Логистика
            </a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase text-sm">
            <Icon name="LogIn" size={18} className="mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
}