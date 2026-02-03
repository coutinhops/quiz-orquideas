import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizResult from "@/components/quiz/QuizResult";

const quizQuestions = [
  {
    id: 1,
    question: "Qual dessas opções mais se parece com você hoje?",
    options: [
      { id: "beginner", text: "Nunca tive orquídeas, mas quero começar agora" },
      { id: "intermediate", text: "Já tive algumas, mas nem sempre dão certo" },
      { id: "experienced", text: "Já cultivo orquídeas e quero ampliar minha coleção" },
    ],
  },
  {
    id: 2,
    question: "O que mais te impede de ter mais orquídeas hoje?",
    options: [
      { id: "fear", text: "Medo de comprar e a planta não sobreviver" },
      { id: "price", text: "Preço alto para algo que posso errar" },
      { id: "quality", text: "Já recebi plantas fracas em compras anteriores" },
      { id: "trust", text: "Falta de um vendedor confiável online" },
    ],
  },
  {
    id: 3,
    question: "Em qual região do Brasil você mora?",
    options: [
      { id: "sul", text: "Sul" },
      { id: "sudeste", text: "Sudeste" },
      { id: "centro-oeste", text: "Centro-Oeste" },
      { id: "nordeste", text: "Nordeste" },
      { id: "norte", text: "Norte" },
    ],
  },
  {
    id: 4,
    question: "Quanto tempo você consegue dedicar ao cuidado das plantas?",
    options: [
      { id: "little", text: "Pouco tempo, rotina bem corrida" },
      { id: "moderate", text: "Um tempo moderado durante a semana" },
      { id: "dedicated", text: "Gosto de cuidar com mais atenção" },
    ],
  },
  {
    id: 5,
    question: "Se pudesse receber mudas saudáveis pagando apenas o frete, você testaria?",
    options: [
      { id: "yes", text: "Sim, com certeza" },
      { id: "yes-trusted", text: "Sim, desde que seja de um orquidário confiável" },
      { id: "maybe", text: "Talvez, quero entender melhor como funciona" },
    ],
  },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizQuestions[currentStep - 1];
  const totalSteps = quizQuestions.length;

  const handleSelect = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionId }));

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResult(true);
      }
    }, 400);
  };

  const handleContinue = () => {
    // Navigate to the sales page (landing page)
    navigate("/#comprar");
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {/* Header */}
      <header className="py-4 px-4 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-bold text-foreground">
              Campo das Orquídeas
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-xl">
          {!showResult ? (
            <>
              <QuizProgress currentStep={currentStep} totalSteps={totalSteps} />
              
              <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-8">
                <QuizQuestion
                  question={currentQuestion.question}
                  options={currentQuestion.options}
                  selectedOption={answers[currentStep] || null}
                  onSelect={handleSelect}
                />

                {currentStep > 1 && (
                  <button
                    onClick={handleBack}
                    className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto block"
                  >
                    ← Voltar
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-8">
              <QuizResult onContinue={handleContinue} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-4 text-center">
        <p className="text-sm text-muted-foreground">
          +77 mil seguidores no Instagram • Mais de 50 mil caixas enviadas
        </p>
      </footer>
    </div>
  );
};

export default Quiz;
