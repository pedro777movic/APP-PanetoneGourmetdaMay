import { videos } from '@/app/lib/data';
import VideoCard from '@/components/video-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const featuredVideos = videos.filter((v) => !v.isPremium).slice(0, 2);
  const premiumVideos = videos.filter((v) => v.isPremium).slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline text-primary tracking-wider mb-4">
          A Arte do Panetone
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground font-body">
          Descubra receitas exclusivas, masterclasses e os segredos por trás do panetone gourmet perfeito.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-headline mb-6 border-l-4 border-primary pl-4">
          Vídeos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-headline mb-6 border-l-4 border-primary pl-4">
          Conteúdo Premium
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {premiumVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
         <div className="text-center mt-8">
          <Button asChild size="lg" variant="destructive" className="uppercase font-bold tracking-widest">
            <Link href="/videos">Ver Todos os Vídeos</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
