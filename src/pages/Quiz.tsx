import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Truck, ShieldCheck } from "lucide-react";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizResult from "@/components/quiz/QuizResult";
import logo from "@/assets/logo.png";

// Import quiz images
import question1Image from "@/assets/quiz/question-1-profile.jpg";
import question2Image from "@/assets/quiz/question-2-objection.jpg";
import question3Image from "@/assets/quiz/question-3-location.jpg";
import question4Image from "@/assets/quiz/question-4-routine.jpg";
import question5Image from "@/assets/quiz/question-5-commitment.jpg";

const quizQuestions = [
  {
    id: 1,
    question: "Qual dessas opções mais se parece com você hoje?",
    image: question1Image,
    options: [
      { id: "beginner", text: "Nunca tive orquídeas, mas quero começar agora" },
      { id: "intermediate", text: "Já tive algumas, mas nem sempre dão certo" },
      { id: "experienced", text: "Já cultivo orquídeas e quero ampliar minha coleção" },
    ],
  },
  {
    id: 2,
    question: "O que mais te impede de ter mais orquídeas hoje?",
    image: question2Image,
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
    image: question3Image,
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
    image: question4Image,
    options: [
      { id: "little", text: "Pouco tempo, rotina bem corrida" },
      { id: "moderate", text: "Um tempo moderado durante a semana" },
      { id: "dedicated", text: "Gosto de cuidar com mais atenção" },
    ],
  },
  {
    id: 5,
    question: "Se pudesse receber mudas saudáveis pagando apenas o frete, você testaria?",
    image: question5Image,
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
    <div className="h-[100dvh] bg-gradient-hero flex flex-col overflow-hidden">
      {/* Authority bar */}
      <div className="bg-primary text-primary-foreground py-1.5 flex-shrink-0">
        <div className="container mx-auto px-4 flex items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Entrega Garantida em todo Brasil</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Você está Seguro!</span>
          </div>
        </div>
      </div>

      {/* Header - compact */}
      <header className="py-2 px-4 border-b border-border/50 bg-background/80 backdrop-blur-sm flex-shrink-0">
        <div className="flex items-center justify-center">
          <a href="/">
            <img src={logo} alt="Campo das Orquídeas" className="h-7 sm:h-9" />
          </a>
        </div>
      </header>

      {/* Main content - fills available space */}
      <main className="flex-1 flex flex-col p-3 sm:p-4 overflow-hidden">
        <div className="w-full max-w-xl mx-auto flex flex-col flex-1">
          {!showResult ? (
            <>
              <QuizProgress currentStep={currentStep} totalSteps={totalSteps} />
              
              <div className="bg-card rounded-2xl shadow-elevated overflow-hidden flex-1 flex flex-col">
                <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                  <QuizQuestion
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    selectedOption={answers[currentStep] || null}
                    onSelect={handleSelect}
                    image={currentQuestion.image}
                  />

                  {currentStep > 1 && (
                    <button
                      onClick={handleBack}
                      className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto block hover:underline flex-shrink-0"
                    >
                      ← Voltar
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-card rounded-2xl shadow-elevated p-4 sm:p-6 md:p-8 flex-1 overflow-auto">
              <QuizResult onContinue={handleContinue} />
            </div>
          )}
        </div>
      </main>

      {/* Footer - compact */}
      <footer className="py-2 px-4 text-center flex-shrink-0">
        <p className="text-[10px] sm:text-xs text-muted-foreground">
          +77 mil seguidores • 50 mil+ caixas enviadas
        </p>
      </footer>
    </div>
  );
};

export default Quiz;
