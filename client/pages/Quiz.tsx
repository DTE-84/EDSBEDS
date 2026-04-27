import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  ChevronRight, 
  RotateCcw, 
  Home, 
  Save, 
  CircleHelp, 
  ShoppingCart,
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';
import { cn } from "@/lib/utils";

type Step = 'welcome' | 'q1' | 'q2' | 'q6' | 'loading' | 'results';

const MattressQuiz = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [answers, setAnswers] = useState<any>({});
  const [progress, setProgress] = useState(0);

  const mattresses = {
    'cool_choice_14': {
      name: 'RZ COOL CHOICE 14" MATTRESS',
      description: "You've matched with the Cool Choice 14\", our premium mattress designed for those who value quality and comfort. With advanced cooling technology and superior pressure relief, it offers the best sleep experience for your needs.",
      features: [
        { icon: '💪', title: 'Medium-Firm Feel', desc: 'Five foam layers create a naturally responsive feel that\'s luxuriously supportive' },
        { icon: '🌡️', title: 'Pressure Point Relief', desc: 'Microcoil layers cushion tension points and ease pressure on your spine' },
        { icon: '🛡️', title: 'Superior Support', desc: 'Ergonomically designed to support your lower back and lift your hips' },
        { icon: '❄️', title: 'Stay Cool All Night', desc: 'The GlacioTex™ Cooling Cover feels cool to the touch' }
      ]
    },
    'cool_flex_pro_14': {
      name: 'RZ COOL FLEX PRO 14" MATTRESS',
      description: "You've matched with the Cool Flex Pro 14\", designed for those who need excellent support with responsive flexibility. Perfect for combination sleepers who change positions.",
      features: [
        { icon: '🔄', title: 'Responsive Support', desc: 'Advanced coil system adapts to your movements throughout the night' },
        { icon: '❄️', title: 'Cooling Technology', desc: 'Stay comfortable all night with advanced cooling materials' },
        { icon: '💪', title: 'Firm Support', desc: 'Ideal for those who prefer a supportive, firm sleeping surface' },
        { icon: '🛡️', title: 'Pressure Relief', desc: 'Targeted support for back and side sleepers' }
      ]
    }
  };

  const calculateResults = () => {
    // In a real app, this would use all answers
    const temp = answers.q9;
    if (temp === 'every' || temp === 'most') return 'cool_choice_14';
    return 'cool_flex_pro_14';
  };

  const handleNext = (nextStep: Step, answer = null) => {
    if (answer) setAnswers({ ...answers, ...answer });
    
    if (nextStep === 'loading') {
        setCurrentStep('loading');
        setProgress(90);
        setTimeout(() => {
            setCurrentStep('results');
            setProgress(100);
        }, 2000);
        return;
    }

    setCurrentStep(nextStep);
    
    // Progress mapping
    const progressMap: Record<string, number> = {
        'welcome': 0,
        'q1': 20,
        'q2': 40,
        'q6': 70,
        'loading': 90,
        'results': 100
    };
    setProgress(progressMap[nextStep] || 0);
  };

  const handleBack = (prevStep: Step) => {
    setCurrentStep(prevStep);
    const progressMap: Record<string, number> = {
        'welcome': 0,
        'q1': 20,
        'q2': 40,
        'q6': 70,
        'loading': 90,
        'results': 100
    };
    setProgress(progressMap[prevStep] || 0);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return (
          <div className="max-w-4xl mx-auto text-center space-y-12 animate-in fade-in zoom-in duration-700">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                <Sparkles className="w-3 h-3" />
                Sleep Science Engine
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-foreground">
                Got 60 Seconds? <br/>Find Your <span className="text-primary italic">Perfect Match.</span>
              </h1>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
                Take our precision matching quiz to discover the mattress engineered for your specific body and sleep style.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => handleNext('q1')} 
                className="group relative px-12 py-6 bg-primary text-white text-lg font-black uppercase tracking-widest rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                    Start My Profile <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
               {[
                 { n: 1, t: "Contact", d: "Who is it for?" },
                 { n: 2, t: "Physical", d: "Body stats" },
                 { n: 3, t: "Habits", d: "Sleep style" },
                 { n: 4, t: "Match", d: "Get results" }
               ].map(s => (
                 <div key={s.n} className="space-y-2 group">
                   <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mx-auto text-primary font-black border border-border group-hover:border-primary/30 transition-colors">
                     {s.n}
                   </div>
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground/40 group-hover:text-primary transition-colors">{s.t}</h4>
                 </div>
               ))}
            </div>
          </div>
        );

      case 'q1':
        return (
          <div className="max-w-xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">What's your email?</h1>
              <p className="text-foreground/60 font-medium text-lg">We'll use this to save your results to your profile.</p>
            </div>
            <div className="space-y-6">
                <input 
                type="email" 
                placeholder="name@example.com"
                autoFocus
                className="w-full bg-secondary p-8 rounded-[2rem] border-2 border-transparent focus:border-primary/30 outline-none text-2xl font-bold transition-all text-center placeholder:text-foreground/10"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        const val = (e.target as HTMLInputElement).value;
                        if (val.includes('@')) handleNext('q2', { email: val });
                    }
                }}
                />
                <button 
                    onClick={() => handleNext('q2')} 
                    className="w-full py-6 bg-foreground text-background font-black uppercase tracking-widest rounded-2xl hover:bg-primary hover:text-white transition-all shadow-xl"
                >
                    Continue
                </button>
            </div>
          </div>
        );

      case 'q2':
        return (
          <div className="max-w-xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Who is this mattress for?</h1>
              <p className="text-foreground/60 font-medium text-lg">Enter the primary sleeper's name.</p>
            </div>
            <div className="space-y-6">
                <input 
                type="text" 
                placeholder="Enter name"
                autoFocus
                className="w-full bg-secondary p-8 rounded-[2rem] border-2 border-transparent focus:border-primary/30 outline-none text-2xl font-bold transition-all text-center placeholder:text-foreground/10"
                onChange={(e) => setAnswers({...answers, name: e.target.value})}
                onKeyDown={(e) => e.key === 'Enter' && handleNext('q6')}
                />
                <button onClick={() => handleNext('q6')} className="w-full py-6 bg-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-xl hover:scale-[1.02] transition-transform">
                    Next Step
                </button>
            </div>
          </div>
        );

      case 'q6':
        return (
          <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                What's <span className="text-primary italic">{answers.name || 'your'}</span> primary sleep position?
              </h1>
              <p className="text-foreground/60 font-medium text-lg">Select the profile that best matches your habits.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { id: 'back', t: 'Back', d: 'Maximum spinal alignment support.' },
                 { id: 'side', t: 'Side', d: 'Pressure relief for hips and shoulders.' },
                 { id: 'stomach', t: 'Stomach', d: 'Firm surface to prevent arching.' },
                 { id: 'combo', t: 'Combination', d: 'Versatile kinetic response foam.' }
               ].map(pos => (
                 <button 
                  key={pos.id}
                  onClick={() => handleNext('loading', { q6: pos.id })}
                  className="bg-card p-10 rounded-[2.5rem] border border-border hover:border-primary/40 transition-all text-left group hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
                 >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    <h3 className="text-2xl font-black mb-3 group-hover:text-primary italic tracking-tight uppercase">{pos.t}</h3>
                    <p className="text-sm text-foreground/60 font-medium leading-relaxed">{pos.d}</p>
                    <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      Select <ChevronRight size={14} className="ml-1" />
                    </div>
                 </button>
               ))}
            </div>
            <button onClick={() => handleBack('q2')} className="mx-auto block text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 hover:text-primary transition-colors underline underline-offset-8">
                Back to Previous
            </button>
          </div>
        );

      case 'loading':
        return (
          <div className="max-w-xl mx-auto text-center space-y-12 animate-in fade-in duration-500 pt-20">
             <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 border-4 border-primary/10 rounded-full" />
                <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <Zap className="absolute inset-0 m-auto w-8 h-8 text-primary animate-pulse" />
             </div>
             <h1 className="text-5xl font-black italic tracking-tighter text-foreground">Analyzing <br/> Sleep Data...</h1>
             <div className="space-y-4">
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-primary animate-[loading_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(255,59,48,0.4)]" style={{width: '60%'}} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Cross-referencing pressure points</p>
             </div>
          </div>
        );

      case 'results':
        const matchKey = calculateResults();
        const match = mattresses[matchKey as keyof typeof mattresses];
        return (
          <div className="max-w-5xl mx-auto animate-in fade-in duration-1000 pb-20">
            <div className="text-center space-y-12 mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 rounded-full text-primary border border-primary/20">
                <CheckCircle2 size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Profile Analysis Complete</span>
              </div>
              
              <h1 className="text-6xl md:text-[7rem] font-bold tracking-tighter leading-[0.85] italic text-foreground">
                The {answers.name || 'Your'} <br/>Match is <span className="text-primary not-italic">Ready.</span>
              </h1>

              <div className="bg-card p-12 md:p-20 rounded-[4rem] border border-border shadow-2xl relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-bl-full blur-3xl" />
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic text-foreground uppercase">{match.name}</h2>
                <p className="text-xl text-foreground/60 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
                    {match.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button 
                    onClick={() => navigate('/product')}
                    className="flex-1 max-w-sm btn-primary py-6 rounded-2xl shadow-2xl shadow-primary/20 flex items-center justify-center gap-4 group/btn font-black uppercase tracking-widest text-[11px]"
                    >
                    <ShoppingCart size={20} className="group-hover/btn:-translate-y-1 transition-transform" />
                    Configure & Checkout
                    </button>
                    <button 
                    onClick={() => setCurrentStep('welcome')}
                    className="px-8 py-6 border-2 border-border text-foreground/60 font-black uppercase tracking-widest rounded-2xl hover:bg-secondary transition-all text-[11px]"
                    >
                    Retake Quiz
                    </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {match.features.map((f, i) => (
                <div key={i} className="p-10 bg-card border border-border rounded-[3rem] flex items-start gap-8 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group">
                  <div className="text-5xl p-6 bg-secondary rounded-[2rem] group-hover:bg-primary/10 transition-colors">{f.icon}</div>
                  <div>
                    <h4 className="text-2xl font-black mb-3 italic tracking-tight uppercase">{f.title}</h4>
                    <p className="text-base text-foreground/60 leading-relaxed font-medium">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-24 bg-background selection:bg-primary/30">
      {/* Quiz Header */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-background/80 backdrop-blur-2xl border-b border-border">
        <div className="container-max py-6 flex items-center justify-between">
           <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 hover:text-primary transition-all"
           >
             <Home size={16} /> Exit Quiz
           </button>
           
           <div className="flex-grow max-w-md mx-8 hidden sm:block">
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden border border-border">
                 <div 
                    className="h-full bg-primary transition-all duration-1000 shadow-[0_0_15px_rgba(255,59,48,0.5)]" 
                    style={{ width: `${progress}%` }} 
                 />
              </div>
           </div>

           <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 hover:text-accent transition-all">
             <Save size={16} /> Save Progress
           </button>
        </div>
      </div>

      <div className="container-max">
        {renderStep()}
      </div>

      <button className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-accent text-white shadow-2xl shadow-accent/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
         <CircleHelp size={28} className="group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};

export default MattressQuiz;
