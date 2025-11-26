import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'panettone-4') ?? { imageUrl: 'https://picsum.photos/seed/105/800/600', imageHint: 'gourmet food' };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-headline text-primary mb-8 text-center">
        About Panetone Gourmet da May
      </h1>
      <Card className="max-w-4xl mx-auto bg-card shadow-lg shadow-black/20">
        <CardHeader className="p-0">
          <Image 
            src={aboutImage.imageUrl}
            alt="About us"
            width={800}
            height={600}
            className="rounded-t-lg object-cover w-full aspect-[4/2]"
            data-ai-hint={aboutImage.imageHint}
          />
        </CardHeader>
        <CardContent className="p-8">
          <CardTitle className="font-headline text-3xl mb-4 text-primary">Our Story</CardTitle>
          <div className="space-y-6 font-body text-lg text-foreground/80">
            <p>
              Welcome to Panetone Gourmet da May, where tradition meets innovation in the world of artisanal baking. Our journey began with a simple passion: to elevate the classic panettone into a true gourmet experience. May, our founder and chief baker, has spent years perfecting her craft, traveling through Italy to learn from the masters and sourcing only the finest, all-natural ingredients.
            </p>
            <p>
              Each panettone is a labor of love, slow-leavened over 72 hours to achieve its signature airy texture and rich, complex flavor. We believe in quality over quantity, which is why we produce in small batches to ensure every loaf meets our exacting standards.
            </p>
            <p>
              Our mission is to share the joy of an exceptional panettone, transforming a holiday treat into a year-round delicacy. From our kitchen to your table, we invite you to taste the difference that passion, patience, and premium ingredients make.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
