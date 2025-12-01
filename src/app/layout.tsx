
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

    const isProtectedRoute = pathname !== '/login';

    if (!isAuthenticated && isProtectedRoute) {
      router.replace('/login');
    } else if (isAuthenticated && !isProtectedRoute) {
      router.replace('/');
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  if (isLoading) {
    return null; // ou um componente de loading global
  }

  if (!isAuthenticated && pathname !== '/login') {
    return null; // Evita renderizar conteúdo protegido antes do redirecionamento
  }

  if (pathname === '/login') {
    return <main className="min-h-screen">{children}</main>;
  }
  
  // Renderiza o layout principal apenas para usuários autenticados
  return (
    <>
      <Header />
      <main className="pb-24 pt-20 min-h-screen">{children}</main>
      <BottomNav />
      <Toaster />
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
        </AuthProvider>
      </body>
    </html>
  );
}
