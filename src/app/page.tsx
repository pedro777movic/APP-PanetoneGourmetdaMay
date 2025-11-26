import { videos } from '@/app/lib/data';
import VideoCard from '@/components/video-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const featuredVideos = videos.filter((v) => !v.isPremium).slice(0, 2);
  const premiumVideos = videos.filter((v) => v.isPremium).slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-headline text-primary tracking-wider mb-4">
          The Art of Panettone
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-muted-foreground font-body">
          Discover exclusive recipes, masterclasses, and the secrets behind the perfect gourmet panettone.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-headline mb-6 border-l-4 border-primary pl-4">
          Featured Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-headline mb-6 border-l-4 border-primary pl-4">
          Premium Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {premiumVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
         <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase font-bold tracking-widest">
            <Link href="/videos">View All Videos</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
