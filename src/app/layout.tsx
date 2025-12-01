
'use client';

import './globals.css';
import Header from '@/components/layout/header';
import BottomNav from '@/components/layout/bottom-nav';
import { Toaster } from '@/components/ui/toaster';
import { usePathname } from 'next/navigation';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function AppContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const isAuthPage = pathname === '/login';

    if (!isAuthenticated && !isAuthPage) {
      router.replace('/login');
    } else if (isAuthenticated && isAuthPage) {
      router.replace('/');
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  if (isLoading) {
    return null; // Renderiza nada enquanto carrega o estado de autenticação
  }

  if (!isAuthenticated && pathname !== '/login') {
    return null; // Não renderiza nada em rotas protegidas se não estiver autenticado
  }
  
  if (pathname === '/login') {
    return <main className="min-h-screen">{children}</main>;
  }
  
  // Renderiza o layout principal apenas para usuários autenticados e nas rotas corretas
  if (isAuthenticated && pathname !== '/login') {
    return (
      <>
        <Header />
        <main className="pb-24 pt-20 min-h-screen">{children}</main>
        <BottomNav />
        <Toaster />
      </>
    );
  }

  // Se for a página de login e não estiver autenticado, renderiza apenas o children
  if(!isAuthenticated && pathname === '/login') {
    return <main className="min-h-screen">{children}</main>;
  }

  return null;
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;700&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <AuthProvider>
            <AppContent>{children}</AppContent>
        </AuthProvider>
      </body>
    </html>
  );
}
