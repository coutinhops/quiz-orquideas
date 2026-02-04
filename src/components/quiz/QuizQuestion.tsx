import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestionProps {
  question: string;
  options: QuizOption[];
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
  image?: string;
}

const QuizQuestion = ({ question, options, selectedOption, onSelect, image }: QuizQuestionProps) => {
  return (
    <div className="animate-fade-in-up flex flex-col h-full">
      {/* Question Image - full display */}
      {image && (
        <div className="mb-3 sm:mb-4 -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 md:-mx-8 md:-mt-8 rounded-t-2xl overflow-hidden bg-secondary/30">
          <img 
            src={image} 
            alt="" 
            className="w-full h-40 sm:h-52 md:h-64 object-contain"
          />
        </div>
      )}

      <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4 text-center leading-tight">
        {question}
      </h2>
      
      <div className="space-y-2 sm:space-y-3 flex-1">
        {options.map((option) => {
          const isSelected = selectedOption === option.id;
          
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={cn(
                "w-full p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-300",
                "hover:border-primary hover:bg-primary/10 hover:scale-[1.01] hover:shadow-md",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "active:scale-[0.98]",
                isSelected
                  ? "border-primary bg-primary/15 shadow-lg scale-[1.01]"
                  : "border-border bg-card"
              )}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className={cn(
                    "w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300",
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground/30 bg-background"
                  )}
                >
                  {isSelected && <Check className="w-3 h-3 sm:w-4 sm:h-4" />}
                </div>
                <span className={cn(
                  "text-sm sm:text-base leading-snug",
                  isSelected ? "text-foreground font-semibold" : "text-muted-foreground"
                )}>
                  {option.text}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
