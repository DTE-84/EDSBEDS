import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleCheckBig, ChevronRight, RotateCcw, House, Save, CircleHelp, ShoppingCart } from 'lucide-react';

const MattressQuiz = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState('welcome'); // welcome, q1-q10, results
  const [answers, setAnswers] = useState({});
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
    // ... more would be added based on inventory logic
  };

  const calculateResults = () => {
    const budget = answers.q10;
    const temp = answers.q9;
    if (budget === 'best' || temp === 'every' || temp === 'most') return 'cool_choice_14';
    return 'cool_flex_pro_14';
  };

  const handleNext = (nextStep, answer = null) => {
    if (answer) setAnswers({ ...answers, ...answer });
    setCurrentStep(nextStep);
    
    // Simple progress calculation
    const stepNum = parseInt(nextStep.replace('q', ''));
    if (!isNaN(stepNum)) setProgress((stepNum / 10) * 100);
    if (nextStep === 'results') setProgress(100);
  };

  const handleBack = (prevStep) => {
    setCurrentStep(prevStep);
    const stepNum = parseInt(prevStep.replace('q', ''));
    if (!isNaN(stepNum)) setProgress((stepNum / 10) * 100);
    else setProgress(0);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return (
          <div className="max-w-4xl mx-auto text-center space-y-12 animate-in fade-in duration-700">
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-[var(--accent-red)] tracking-[0.3em] uppercase sans">Sleep Science</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">Got 60 Seconds? <br/>Find Your Perfect Match.</h1>
              <p className="text-xl text-[var(--text-dim)] max-w-2xl mx-auto">Take our precision matching quiz to discover the mattress engineered for your specific body and sleep style.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={() => handleNext('q1')} className="btn-primary px-12 py-6 text-lg rounded-2xl shadow-2xl shadow-[var(--accent-blue)]/20">Start My Profile</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-100">
               {[
                 { n: 1, t: "Contact", d: "Who is it for?" },
                 { n: 2, t: "Physical", d: "Body stats" },
                 { n: 3, t: "Habits", d: "Sleep style" },
                 { n: 4, t: "Match", d: "Get results" }
               ].map(s => (
                 <div key={s.n} className="space-y-2">
                   <div className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mx-auto text-[var(--accent-blue)] font-bold">{s.n}</div>
                   <h4 className="text-xs font-bold uppercase tracking-widest">{s.t}</h4>
                 </div>
               ))}
            </div>
          </div>
        );

      case 'q1':
        return (
          <div className="max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">What's your email?</h1>
              <p className="text-[var(--text-dim)]">We'll use this to save your results.</p>
            </div>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full bg-[var(--bg-secondary)] p-6 rounded-2xl border-2 border-transparent focus:border-[var(--accent-blue)] outline-none text-xl font-medium transition-all"
              onKeyDown={(e) => e.key === 'Enter' && handleNext('q2', { email: e.target.value })}
            />
            <button onClick={() => handleNext('q2')} className="w-full btn-primary py-5 rounded-2xl">Continue</button>
          </div>
        );

      case 'q2':
        return (
          <div className="max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Who is this mattress for?</h1>
              <p className="text-[var(--text-dim)]">Enter the sleeper's name.</p>
            </div>
            <input 
              type="text" 
              placeholder="Enter name"
              className="w-full bg-[var(--bg-secondary)] p-6 rounded-2xl border-2 border-transparent focus:border-[var(--accent-blue)] outline-none text-xl font-medium transition-all"
              onChange={(e) => setAnswers({...answers, name: e.target.value})}
            />
            <button onClick={() => handleNext('q3')} className="w-full btn-primary py-5 rounded-2xl">Next Step</button>
          </div>
        );

      case 'q6': // Sleep Position - using as example of card choice
        return (
          <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold italic tracking-tighter text-[var(--text-main)]">What's {answers.name || 'your'} primary sleep position?</h1>
              <p className="text-[var(--text-dim)] font-medium">Select the profile that best matches your habits.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { id: 'back', t: 'Back', d: 'Maximum spinal alignment support.' },
                 { id: 'side', t: 'Side', d: 'Pressure relief for hips and shoulders.' },
                 { id: 'stomach', t: 'Stomach', d: 'Firm surface to prevent arching.' },
                 { id: 'combo', t: 'Combination', d: 'Versatile kinetic response foam.' }
               ].map(pos => (
                 <button 
                  key={pos.id}
                  onClick={() => handleNext('q7', { q6: pos.id })}
                  className="bg-white p-10 rounded-[40px] border border-gray-100 hover:border-[var(--accent-blue)] transition-all text-left group hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,113,227,0.1)] relative overflow-hidden"
                 >
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent-blue)] italic tracking-tighter">{pos.t}</h3>
                    <p className="text-xs text-[var(--text-dim)] font-medium leading-relaxed">{pos.d}</p>
                    <div className="mt-6 flex items-center text-[8px] font-black uppercase tracking-widest text-[var(--accent-blue)] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      Select <ChevronRight size={12} className="ml-1" />
                    </div>
                 </button>
               ))}
            </div>
            <button onClick={() => handleBack('q5')} className="mx-auto block text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-dim)] hover:text-[var(--accent-red)] transition-colors italic underline">Back to Previous</button>
          </div>
        );

      case 'results':
        const match = mattresses[calculateResults()];
        return (
          <div className="max-w-5xl mx-auto animate-in fade-in duration-1000">
            <div className="text-center space-y-10 mb-20">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-[var(--accent-blue)]/5 rounded-full text-[var(--accent-blue)] border border-[var(--accent-blue)]/10 shadow-sm">
                <CircleCheckBig size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Profile Analysis Complete</span>
              </div>
              <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] italic text-[var(--text-main)]">
                The {answers.name || 'Your'} <br/>Match is <span className="text-[var(--accent-blue)] not-italic">Ready.</span>
              </h1>
              <div className="bg-white p-16 rounded-[60px] border border-gray-100 shadow-[0_50px_120px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-blue)]/5 rounded-bl-full" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter italic text-[var(--text-main)]">{match.name}</h2>
                <p className="text-xl text-[var(--text-dim)] leading-relaxed mb-12 max-w-2xl mx-auto font-medium">{match.description}</p>
                <button 
                  onClick={() => navigate('/product')}
                  className="w-full max-w-sm mx-auto btn-primary py-6 rounded-2xl shadow-2xl shadow-[var(--accent-blue)]/30 flex items-center justify-center gap-4 group/btn font-sans text-[11px]"
                >
                  <ShoppingCart size={20} className="group-hover/btn:-translate-y-1 transition-transform" />
                  Configure & Checkout
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {match.features.map((f, i) => (
                <div key={i} className="p-10 bg-white border border-gray-50 rounded-[40px] shadow-sm flex items-start gap-8 hover:border-[var(--accent-blue)]/20 hover:shadow-xl transition-all duration-500">
                  <div className="text-5xl p-4 bg-gray-50 rounded-2xl">{f.icon}</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 italic tracking-tighter">{f.title}</h4>
                    <p className="text-base text-[var(--text-dim)] leading-relaxed font-medium">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
               <button onClick={() => setCurrentStep('welcome')} className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-dim)] hover:text-[var(--accent-red)] transition-all opacity-60 hover:opacity-100">
                 <RotateCcw size={16} /> Retake Sleep Profile Analysis
               </button>
            </div>
          </div>
        );

      default:
        // Mocking skip to q6 and results for logic demo
        return (
          <div className="max-w-xl mx-auto text-center space-y-12 animate-in fade-in duration-500 pt-20">
             <h1 className="text-5xl font-bold italic tracking-tighter text-[var(--text-main)]">Analyzing <br/> Sleep Data...</h1>
             <div className="w-full h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-[var(--accent-blue)] animate-[loading_2s_ease-in-out_infinite]" style={{width: '60%'}} />
             </div>
             <div className="flex gap-4 justify-center">
                <button onClick={() => handleNext('q6')} className="btn-secondary py-4 px-8 text-[10px]">Resume Analysis</button>
                <button onClick={() => handleNext('results')} className="btn-primary py-4 px-8 text-[10px]">Generate Results</button>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-24 bg-white selection:bg-[var(--accent-red)] selection:text-white">
      {/* Quiz Header */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="container py-6 flex items-center justify-between">
           <button onClick={() => navigate(-1)} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] hover:text-[var(--accent-red)] transition-all">

             <House size={16} /> Exit Quiz
           </button>
           <div className="flex-grow max-w-md mx-12">
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                 <div className="h-full bg-[var(--accent-red)] transition-all duration-1000 shadow-[0_0_10px_rgba(255,59,48,0.5)]" style={{ width: `${progress}%` }} />
              </div>
           </div>
           <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] hover:text-[var(--accent-blue)] transition-all opacity-40">
             <Save size={16} /> Save
           </button>
        </div>
      </div>

      <div className="container">
        {renderStep()}
      </div>

      <button className="fixed bottom-10 right-10 w-14 h-14 rounded-full bg-[var(--accent-blue)] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50">
         <CircleHelp size={24} />
      </button>
    </div>
  );
};

export default MattressQuiz;
