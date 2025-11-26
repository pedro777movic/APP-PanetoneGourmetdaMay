import { videos } from '@/app/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function VideoPage({ params }: { params: { videoId: string } }) {
  const video = videos.find((v) => v.id === params.videoId);

  if (!video) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg shadow-black/30 border border-border">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <Card className="bg-card">
          <CardHeader>
            <div className="flex justify-between items-start gap-4">
              <CardTitle className="text-3xl font-headline text-primary">{video.title}</CardTitle>
              {video.isPremium && (
                 <Badge
                    variant="default"
                    className="bg-primary text-primary-foreground gap-1.5 flex-shrink-0"
                  >
                    <Crown className="h-4 w-4" />
                    Premium
                  </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-body text-lg text-foreground/80">
              {video.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return videos.map((video) => ({
    videoId: video.id,
  }));
}
