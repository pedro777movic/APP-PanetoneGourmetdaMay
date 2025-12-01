import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-headline text-primary mb-8 text-center">
        Entre em Contato
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-headline text-2xl md:text-3xl">Informações de Contato</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Tem alguma dúvida, um pedido especial ou apenas quer falar sobre panetone? Adoraríamos ouvir de você. Preencha o formulário ao lado e retornaremos o mais breve possível.
          </p>
        </div>

        <Card className="bg-card p-2 shadow-lg shadow-black/20">
          <CardHeader>
            <CardTitle className="font-headline text-xl md:text-2xl">Envie-nos uma Mensagem</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-headline text-base">Nome</Label>
                <Input id="name" placeholder="Seu Nome" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-headline text-base">Email</Label>
                <Input id="email" type="email" placeholder="Seu Email" className="bg-background"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-headline text-base">Mensagem</Label>
                <Textarea id="message" placeholder="Sua mensagem..." rows={5} className="bg-background"/>
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase font-bold tracking-widest">
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
