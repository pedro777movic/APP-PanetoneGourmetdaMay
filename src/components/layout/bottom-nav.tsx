
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, PlaySquare, Info, Mail, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Início', icon: Home },
  { href: '/videos', label: 'Vídeos', icon: PlaySquare },
  { href: '/login', label: 'Login', icon: User },
  { href: '/about', label: 'Sobre', icon: Info },
  { href: '/contact', label: 'Contato', icon: Mail },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 h-20 bg-card border-t border-border">
      <div className="container mx-auto grid h-full max-w-lg grid-cols-5">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center text-xs sm:text-sm gap-1 transition-colors',
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
