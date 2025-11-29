import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex h-20 items-center justify-center px-4">
        <Link href="/" className="text-xl md:text-2xl font-headline text-primary uppercase tracking-widest text-center">
          Panetone Gourmet da May
        </Link>
      </div>
    </header>
  );
}
