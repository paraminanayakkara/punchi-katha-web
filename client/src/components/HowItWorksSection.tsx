import { Card } from '@/components/ui/card';
import { User, Upload, BookOpen, Heart } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

export default function HowItWorksSection() {
  const steps: Step[] = [
    {
      id: 1,
      title: "Tell Us About Your Child",
      description: "Share your child's name and a favorite photo. This personalizes their magical adventure story.",
      icon: User,
      color: "text-blue-500"
    },
    {
      id: 2,
      title: "Choose Your Story Theme",
      description: "Pick from our collection of magical adventures - from fairy tale kingdoms to space odysseys.",
      icon: BookOpen,
      color: "text-purple-500"
    },
    {
      id: 3,
      title: "We Create the Magic",
      description: "Our talented illustrators craft a beautiful, personalized storybook featuring your child as the hero.",
      icon: Upload,
      color: "text-green-500"
    },
    {
      id: 4,
      title: "Watch Them Light Up",
      description: "Receive your custom storybook and watch your child's face glow as they discover their own magical tale.",
      icon: Heart,
      color: "text-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-heading text-primary mb-4"
            data-testid="text-how-it-works-title"
          >
            How The Magic Happens
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            data-testid="text-how-it-works-subtitle"
          >
            Creating your child's personalized storybook is simple and magical
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={step.id}
                className="relative p-6 text-center bg-card/80 backdrop-blur-sm border-2 border-card-border hover-elevate transition-all duration-300 group"
                data-testid={`card-step-${step.id}`}
              >
                {/* Step Number */}
                <div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold"
                  data-testid={`number-step-${step.id}`}
                >
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-full bg-secondary/20 ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 
                    className="text-lg font-semibold text-foreground"
                    data-testid={`text-step-title-${step.id}`}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-sm text-foreground/70 leading-relaxed"
                    data-testid={`text-step-description-${step.id}`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p 
            className="text-foreground/70 mb-4"
            data-testid="text-ready-message"
          >
            Ready to create your child's magical adventure?
          </p>
          <div className="inline-flex items-center space-x-2 text-primary font-semibold">
            <Heart className="h-5 w-5 text-pink-400 fill-current animate-pulse" />
            <span data-testid="text-magic-message">Let's start the magic!</span>
            <Heart className="h-5 w-5 text-pink-400 fill-current animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}