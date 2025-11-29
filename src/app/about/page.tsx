import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'panettone-4') ?? { imageUrl: 'https://picsum.photos/seed/105/800/600', imageHint: 'gourmet food' };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-headline text-primary mb-8 text-center">
        Sobre os panetones Gourmet da May
      </h1>
      <Card className="max-w-4xl mx-auto bg-card shadow-lg shadow-black/20">
        <CardHeader className="p-0">
          <Image 
            src={aboutImage.imageUrl}
            alt="Sobre nós"
            width={800}
            height={600}
            className="rounded-t-lg object-cover w-full aspect-[4/2]"
            data-ai-hint={aboutImage.imageHint}
          />
        </CardHeader>
        <CardContent className="p-8">
          <CardTitle className="font-headline text-3xl mb-4 text-primary">Nossa História</CardTitle>
          <div className="space-y-6 font-body text-lg text-foreground/80">
            <p>
              Bem-vindo à Panetone Gourmet da May, onde a tradição encontra a inovação no mundo da panificação artesanal. Nossa jornada começou com uma paixão simples: elevar o panetone clássico a uma verdadeira experiência gourmet. May, nossa fundadora e padeira-chefe, passou anos aperfeiçoando sua arte, viajando pela Itália para aprender com os mestres e buscando apenas os melhores ingredientes naturais.
            </p>
            <p>
              Cada panetone é um trabalho de amor, com fermentação lenta de mais de 72 horas para alcançar sua textura arejada característica e sabor rico e complexo. Acreditamos na qualidade sobre a quantidade, e é por isso que produzimos em pequenos lotes para garantir que cada pão atenda aos nossos exigentes padrões.
            </p>
            <p>
              Nossa missão é compartilhar a alegria de um panetone excepcional, transformando uma delícia de feriado em uma iguaria para o ano todo. Da nossa cozinha para a sua mesa, convidamos você a saborear a diferença que a paixão, a paciência e os ingredientes premium fazem.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
