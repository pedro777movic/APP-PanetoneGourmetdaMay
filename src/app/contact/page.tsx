import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-headline text-primary mb-8 text-center">
        Get In Touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <h2 className="font-headline text-3xl">Contact Information</h2>
          <p className="text-lg text-muted-foreground">
            Have a question, a special request, or just want to talk panettone? We'd love to hear from you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:contato@panetonedamay.com" className="text-lg hover:text-primary transition-colors">contato@panetonedamay.com</a>
            </div>
            <div className="flex items-center gap-4">
              <Instagram className="h-6 w-6 text-primary" />
              <a href="#" className="text-lg hover:text-primary transition-colors">@panetone_da_may</a>
            </div>
             <div className="flex items-center gap-4">
              <Facebook className="h-6 w-6 text-primary" />
              <a href="#" className="text-lg hover:text-primary transition-colors">/panetonegourmetdamay</a>
            </div>
          </div>
        </div>

        <Card className="bg-card p-2 shadow-lg shadow-black/20">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-headline text-base">Name</Label>
                <Input id="name" placeholder="Your Name" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-headline text-base">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" className="bg-background"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-headline text-base">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} className="bg-background"/>
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase font-bold tracking-widest">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
