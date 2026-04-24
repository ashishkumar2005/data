/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { quizData, Question } from './data/questions';
import { 
  ChevronRight, 
  CheckCircle2, 
  ArrowLeft, 
  GraduationCap, 
  BookOpen, 
  Trophy,
  RefreshCcw
} from 'lucide-react';

type ViewState = 'dashboard' | 'quiz' | 'result';

export default function App() {
  const [currentWeek, setCurrentWeek] = useState<number | null>(null);
  const [view, setView] = useState<ViewState>('dashboard');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState<number>(0);
  const [showError, setShowError] = useState(false);

  const startQuiz = (week: number) => {
    setCurrentWeek(week);
    setAnswers({});
    setView('quiz');
    setShowError(false);
    window.scrollTo(0, 0);
  };

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmit = () => {
    if (!currentWeek) return;

    const questions = quizData[currentWeek];
    const allAnswered = questions.every(q => answers[q.id] !== undefined);

    if (!allAnswered) {
      setShowError(true);
      return;
    }

    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.answerIndex) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setView('result');
    window.scrollTo(0, 0);
  };

  const reset = () => {
    setView('dashboard');
    setCurrentWeek(null);
    setAnswers({});
  };

  const answeredCount = Object.keys(answers).length;
  const progressPercentage = (answeredCount / 20) * 100;

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 flex flex-col border-r border-slate-200 hidden md:flex">
        <div className="p-6">
          <h1 className="text-white text-xl font-bold tracking-tight flex items-center gap-2 cursor-pointer" onClick={reset}>
            <GraduationCap className="w-6 h-6 text-blue-400" />
            QuizPortal
          </h1>
          <p className="text-slate-400 text-[10px] mt-1 uppercase tracking-widest font-semibold">Academic Assessment</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {[1, 2, 3, 4].map((week) => (
            <button
              key={week}
              onClick={() => startQuiz(week)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                currentWeek === week 
                  ? 'bg-blue-600 text-white font-medium shadow-lg shadow-blue-900/20' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="w-6 text-center text-xs opacity-50">0{week}</span>
                Week {week}
              </span>
              {currentWeek === week ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <div className="w-4 h-4 rounded-full border border-slate-700" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800">
          <div className="bg-slate-800/50 rounded-xl p-4">
            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Session Info</p>
            <p className="text-white text-sm font-medium mt-1">
              {view === 'quiz' ? `Assessment Started` : 'Ready to Start'}
            </p>
            <p className="text-slate-500 text-[11px] mt-2 leading-tight italic">
              Submit answers to calculate your final score.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-y-auto">
        {/* Header */}
        <header className="min-h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-30">
          <div>
            <div className="md:hidden flex items-center gap-2 mb-1" onClick={reset}>
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-sm">QuizPortal</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">
              {view === 'dashboard' ? 'Course Dashboard' : 
               view === 'result' ? 'Assessment Result' : 
               `Week ${currentWeek} Assignment`}
            </h2>
            <p className="text-slate-500 text-sm">
              {view === 'quiz' ? '20 Questions • 1 point each' : 'Review your progress across weeks'}
            </p>
          </div>
          
          {view === 'quiz' && (
            <div className="hidden sm:block text-right">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Completion</p>
              <div className="flex items-center gap-3">
                <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-500" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-slate-700">{answeredCount.toString().padStart(2, '0')} / 20</span>
              </div>
            </div>
          )}
        </header>

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-8">
          <AnimatePresence mode="wait">
            {view === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl space-y-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {[1, 2, 3, 4].map((week) => (
                    <div 
                      key={week}
                      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">Module 0{week}</span>
                          <span className="text-slate-400 text-xs">20 Questions</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Assignment {week}</h3>
                        <p className="text-slate-500 text-sm mb-6">Comprehensive quiz covering all core concepts from Week {week}.</p>
                      </div>
                      <button
                        onClick={() => startQuiz(week)}
                        className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                      >
                        Start Assessment
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {view === 'quiz' && currentWeek && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-5xl space-y-8 pb-32"
              >
                <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
                  <div className="space-y-6">
                    {quizData[currentWeek].map((q, idx) => (
                      <div id={`question-${q.id}`} key={q.id} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 scroll-mt-24">
                        <div>
                          <p className="text-blue-600 font-bold text-xs uppercase mb-2">Question {(idx + 1).toString().padStart(2, '0')}</p>
                          <h3 className="text-lg font-semibold text-slate-800 leading-tight">{q.text}</h3>
                        </div>

                        <div className="grid gap-2">
                          {q.options.map((option, optIdx) => (
                            <button
                              key={optIdx}
                              onClick={() => handleOptionSelect(q.id, optIdx)}
                              className={`text-left px-5 py-4 rounded-xl border transition-all text-sm font-medium flex items-center gap-4 ${
                                answers[q.id] === optIdx
                                  ? 'border-blue-200 bg-blue-50/50 text-blue-800 shadow-sm'
                                  : 'border-slate-100 hover:bg-slate-50 text-slate-600'
                              }`}
                            >
                              <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${
                                answers[q.id] === optIdx ? 'border-blue-600 bg-blue-600' : 'border-slate-300'
                              }`}>
                                {answers[q.id] === optIdx && <div className="w-2 h-2 bg-white rounded-full" />}
                              </div>
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Sticky Sidebar for Quiz Navigator */}
                  <div className="hidden lg:block sticky top-28 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <h3 className="text-slate-800 font-bold text-sm mb-4">Question Navigator</h3>
                      <div className="grid grid-cols-5 gap-2">
                        {quizData[currentWeek].map((q, idx) => (
                          <a
                            key={idx}
                            href={`#question-${q.id}`}
                            className={`aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                              answers[q.id] !== undefined 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                            }`}
                          >
                            {idx + 1}
                          </a>
                        ))}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">Click any number to jump to that question.</p>
                    </div>
                  </div>
                </div>

                <div className="fixed bottom-0 left-0 md:left-64 right-0 p-6 bg-white/90 backdrop-blur-md border-t border-slate-200 z-40">
                  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm font-medium text-slate-500">
                      Progress: <span className="text-slate-900 font-bold">{answeredCount} / 20</span> completed
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-1">
                      {showError && answeredCount < 20 && (
                        <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider">Incomplete: Answer all questions</span>
                      )}
                      <button
                        onClick={handleSubmit}
                        className="bg-slate-900 hover:bg-black text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-slate-200 transition-all flex items-center gap-2 group"
                      >
                        Submit Assignment
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {view === 'result' && (
              <motion.div
                key="result"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-xl mx-auto text-center space-y-10 pt-12"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl opacity-50 pulse" />
                  <div className="relative bg-white w-56 h-56 rounded-full border-8 border-slate-900 flex flex-col items-center justify-center mx-auto shadow-2xl">
                    <Trophy className="w-10 h-10 mb-2 text-slate-200" />
                    <span className="text-6xl font-black font-mono leading-none">{score}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Points Gained</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-slate-900">Module Assessment Complete</h2>
                  <p className="text-slate-500 leading-relaxed px-4">
                    You have successfully completed the Week {currentWeek} assignment. 
                    Final analysis: <span className="font-bold text-slate-800">{score} out of 20</span> points achievement.
                  </p>
                </div>

                <div className="grid gap-3 pt-4 sm:grid-cols-2">
                  <button
                    onClick={() => startQuiz(currentWeek!)}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full py-4 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
                  >
                    <RefreshCcw className="w-5 h-5" />
                    Retake Quiz
                  </button>
                  <button
                    onClick={reset}
                    className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 w-full py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors"
                  >
                    Module Dashboard
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Hint */}
        <footer className="min-h-12 border-t border-slate-200 bg-slate-50 flex items-center justify-center px-8 text-[10px] text-slate-400 uppercase tracking-widest font-medium text-center">
          Comprehensive Data Mining Course Assessment • Total 80 Questions Across 4 Modules
        </footer>
      </main>
    </div>
  );
}
