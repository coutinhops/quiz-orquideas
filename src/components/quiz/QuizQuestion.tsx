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
}

const QuizQuestion = ({ question, options, selectedOption, onSelect }: QuizQuestionProps) => {
  return (
    <div className="animate-fade-in-up">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
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
                "w-full p-4 rounded-xl border-2 text-left transition-all duration-300",
                "hover:border-primary hover:bg-primary/5",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                isSelected
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300",
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground/30"
                  )}
                >
                  {isSelected && <Check className="w-4 h-4" />}
                </div>
                <span className={cn(
                  "text-base md:text-lg",
                  isSelected ? "text-foreground font-medium" : "text-muted-foreground"
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
