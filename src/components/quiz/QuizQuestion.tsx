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
    <div className="animate-fade-in-up">
      {/* Question Image */}
      {image && (
        <div className="mb-6 -mx-6 -mt-6 md:-mx-8 md:-mt-8 rounded-t-2xl overflow-hidden">
          <img 
            src={image} 
            alt="" 
            className="w-full h-40 sm:h-48 md:h-56 object-cover"
          />
        </div>
      )}

      <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 text-center leading-tight">
        {question}
      </h2>
      
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selectedOption === option.id;
          
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={cn(
                "w-full p-4 sm:p-5 rounded-xl border-2 text-left transition-all duration-300",
                "hover:border-primary hover:bg-primary/10 hover:scale-[1.02] hover:shadow-md",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "active:scale-[0.98]",
                isSelected
                  ? "border-primary bg-primary/15 shadow-lg scale-[1.02]"
                  : "border-border bg-card"
              )}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className={cn(
                    "w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300",
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground scale-110"
                      : "border-muted-foreground/30 bg-background"
                  )}
                >
                  {isSelected && <Check className="w-4 h-4 sm:w-5 sm:h-5" />}
                </div>
                <span className={cn(
                  "text-base sm:text-lg leading-snug",
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
