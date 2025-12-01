import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Video } from '@/app/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Crown } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === video.imageId);
  const imageUrl = placeholder?.imageUrl ?? 'https://picsum.photos/seed/default/600/400';
  const imageHint = placeholder?.imageHint ?? '';

  return (
    <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group shadow-lg shadow-black/20">
      <Link href={`/videos/${video.id}`} className="block">
        <CardHeader className="p-0 relative">
          <div className="overflow-hidden">
            <Image
              src={imageUrl}
              alt={video.title}
              width={600}
              height={400}
              className="aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={imageHint}
            />
          </div>
          {video.isPremium && (
            <Badge
              variant="default"
              className="absolute top-2 right-2 bg-primary text-primary-foreground gap-1.5"
            >
              <Crown className="h-3 w-3" />
              Premium
            </Badge>
          )}
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="font-headline text-lg md:text-xl leading-tight group-hover:text-primary transition-colors">
            {video.title}
          </CardTitle>
        </CardContent>
      </Link>
    </Card>
  );
}
