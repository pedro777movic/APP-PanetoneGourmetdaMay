
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CandyCane, LogIn } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (email === 'cliente237@panetone.com' && password === 'meupanetone20') {
      login();
      toast({
        title: 'Login bem-sucedido!',
        description: 'Bem-vindo(a) de volta!',
      });
      router.push('/');
    } else {
      setError('Email ou senha inválidos. Tente novamente.');
      toast({
        variant: 'destructive',
        title: 'Falha no Login',
        description: 'Email ou senha inválidos. Por favor, tente novamente.',
      });
    }
  };

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md bg-card shadow-lg shadow-black/30 border-primary/20 relative overflow-hidden">
        <div className="absolute top-4 right-4">
            <CandyCane className="h-10 w-10 text-primary/50" />
        </div>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline text-primary">Área Exclusiva</CardTitle>
          <CardDescription className="font-body text-base">Faça login para acessar o conteúdo premium.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-headline text-base">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                className="bg-background"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-headline text-base">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Sua Senha"
                className="bg-background"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm font-medium text-destructive">{error}</p>}
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase font-bold tracking-widest">
              <LogIn className="mr-2 h-5 w-5" />
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
