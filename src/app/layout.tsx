
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

    if (!isAuthenticated && pathname !== '/login') {
      router.replace('/login');
    } else if (isAuthenticated && pathname === '/login') {
      router.replace('/');
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  // Durante o carregamento ou antes do redirecionamento, não renderiza nada para evitar piscar o conteúdo
  if (isLoading || (!isAuthenticated && pathname !== '/login')) {
    return null; // Renderiza um fragmento vazio
  }

  // Renderiza a página de login sem o layout principal
  if (pathname === '/login') {
    return <main className="min-h-screen">{children}</main>;
  }
  
  // Renderiza o layout principal para usuários autenticados
  return (
    <>
      <Header />
      <main className="pb-24 pt-20 min-h-screen">{children}</main>
      <BottomNav />
    </>
  );
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
            <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
