import { Button } from '@/components/ui/button';
import { Sparkles, Star, Heart } from 'lucide-react';
import heroBackground from '@assets/generated_images/magical_storybook_hero_background_e7f2c4b8.png';
import heroCharacter from '@assets/generated_images/hero_character_and_lion_27635e39.png';

export default function HeroSection() {
  const handleCreateBook = () => {
    console.log('Create Your Book clicked - Navigate to customization page');
    // TODO: remove mock functionality - Navigate to book creation page
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover'
        }}
      />
      
      {/* Magical Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Stars */}
        <Star className="absolute top-20 left-20 text-yellow-300 w-6 h-6 animate-pulse" />
        <Star className="absolute top-32 right-32 text-pink-300 w-4 h-4 animate-bounce" />
        <Sparkles className="absolute top-40 left-1/3 text-purple-300 w-5 h-5 animate-pulse" />
        <Heart className="absolute bottom-40 right-20 text-pink-300 w-5 h-5 animate-bounce" />
        <Star className="absolute bottom-32 left-16 text-blue-300 w-4 h-4 animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary leading-tight"
                data-testid="text-hero-headline"
              >
                Your Child,
                <br />
                <span className="text-accent">The Hero Of</span>
                <br />
                Their Own Story
              </h1>
              
              <p 
                className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0"
                data-testid="text-hero-description"
              >
                Create magical personalized storybooks where your child becomes the star of their own adventure. Watch their face light up as they discover themselves in enchanting tales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-xl"
                onClick={handleCreateBook}
                data-testid="button-create-book"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Create Your Book
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-full border-2 bg-white/90 backdrop-blur-sm hover:bg-white"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Character Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroCharacter}
                alt="Child riding a friendly lion in a magical storybook style"
                className="w-full max-w-md mx-auto lg:max-w-full object-contain"
                data-testid="img-hero-character"
              />
            </div>
            
            {/* Floating elements around character */}
            <div className="absolute inset-0 pointer-events-none">
              <Star className="absolute -top-4 -left-4 text-yellow-300 w-8 h-8 animate-spin" style={{ animationDuration: '3s' }} />
              <Sparkles className="absolute top-10 -right-6 text-purple-300 w-6 h-6 animate-bounce" />
              <Heart className="absolute -bottom-2 left-8 text-pink-300 w-6 h-6 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
    </section>
  );
}