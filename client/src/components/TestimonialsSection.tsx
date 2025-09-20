import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import testimonialAvatar from '@assets/generated_images/testimonial_parent_avatar_2ee225b6.png';

interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  childName: string;
  avatar?: string;
}

export default function TestimonialsSection() {
  // TODO: remove mock functionality - Replace with real testimonials from backend
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      quote: 'Our son loved his book! Such a wonderful gift. The illustrations are beautiful and seeing himself as the hero made him so excited to read.',
      rating: 5,
      childName: 'Emma',
      avatar: testimonialAvatar
    },
    {
      id: '2', 
      name: 'Michael Chen',
      quote: 'Amazing quality and fast delivery. My daughter carries her book everywhere now. It really sparked her love for reading!',
      rating: 5,
      childName: 'Lily'
    },
    {
      id: '3',
      name: 'Jessica Martinez',
      quote: 'Perfect for bedtime stories! The personalization made it feel so special. Highly recommend to all parents.',
      rating: 5,
      childName: 'Alex'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-heading text-primary mb-4"
            data-testid="text-testimonials-title"
          >
            Happy Families
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            data-testid="text-testimonials-subtitle"
          >
            See what parents and children are saying about their magical storybook adventures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="relative p-6 bg-card/80 backdrop-blur-sm border-2 border-card-border hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1" data-testid={`rating-${index}`}>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote 
                  className="text-foreground/80 text-sm leading-relaxed"
                  data-testid={`text-quote-${index}`}
                >
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2">
                  <Avatar className="h-10 w-10">
                    {testimonial.avatar ? (
                      <AvatarImage 
                        src={testimonial.avatar} 
                        alt={`${testimonial.name} avatar`}
                        data-testid={`img-avatar-${index}`}
                      />
                    ) : null}
                    <AvatarFallback 
                      className="bg-primary/10 text-primary font-semibold text-sm"
                      data-testid={`text-avatar-fallback-${index}`}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div 
                      className="font-semibold text-foreground text-sm"
                      data-testid={`text-author-${index}`}
                    >
                      {testimonial.name}
                    </div>
                    <div 
                      className="text-xs text-foreground/60"
                      data-testid={`text-child-${index}`}
                    >
                      Parent of {testimonial.childName}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}