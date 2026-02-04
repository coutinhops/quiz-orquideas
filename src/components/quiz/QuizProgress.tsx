import { cn } from "@/lib/utils";

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

const QuizProgress = ({ currentStep, totalSteps }: QuizProgressProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-3 sm:mb-4 flex-shrink-0">
      <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-1.5">
        <span>Pergunta {currentStep} de {totalSteps}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-1.5 sm:h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default QuizProgress;
