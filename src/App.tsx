/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  Trophy, 
  ChevronRight,
  Filter,
  GraduationCap,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Question, Difficulty, GrammarCategory } from './types';
import { QUESTIONS } from './data/questions';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);

  const levelQuestions = useMemo(() => {
    if (currentLevel === null) return [];
    return QUESTIONS.filter(q => q.level === currentLevel);
  }, [currentLevel]);

  const startLevel = (level: number) => {
    setCurrentLevel(level);
    const levelQs = QUESTIONS.filter(q => q.level === level);
    // Randomize questions for this level
    const shuffled = [...levelQs].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    
    setCurrentQuestion(selected[0]);
    setUsedIds(new Set());
    setScore(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setShowExplanation(false);
    setLevelComplete(false);
    setShowResult(false);
  };

  const difficultyLevels: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced'];

  const getNextQuestion = (currentDiff: Difficulty, wasCorrect: boolean): Question | null => {
    return null; // Level based now
  };

  const handleAnswerSelect = (option: string) => {
    if (isSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || isSubmitted || !currentQuestion) return;
    
    setIsSubmitted(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
      audio.volume = 0.4;
      audio.play().catch(e => console.log('Audio play failed:', e));
    } else {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
      audio.volume = 0.4;
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
    
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (!currentQuestion || !currentLevel) return;

    const newUsedIds = new Set(usedIds);
    newUsedIds.add(currentQuestion.id);
    setUsedIds(newUsedIds);

    if (newUsedIds.size < levelQuestions.length) {
      const nextQ = levelQuestions.find(q => !newUsedIds.has(q.id));
      if (nextQ) {
        setCurrentQuestion(nextQ);
        setSelectedAnswer(null);
        setIsSubmitted(false);
        setShowExplanation(false);
      } else {
        // Fallback if find fails for some reason
        setLevelComplete(true);
      }
    } else {
      setLevelComplete(true);
      if (score >= levelQuestions.length * 0.7) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const resetQuiz = () => {
    setCurrentLevel(null);
    setCurrentQuestion(null);
    setUsedIds(new Set());
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setLevelComplete(false);
  };

  if (currentLevel !== null && !currentQuestion && !levelComplete) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0F172A]">
        <div className="text-center space-y-6 bg-slate-800 border-4 border-black p-12 rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-20 h-20 bg-neon-pink/20 text-neon-pink rounded-3xl flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,0,255,0.2)]">
            <Filter size={40} />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-brutal uppercase text-white">No questions found</h2>
            <p className="text-slate-400 max-w-xs mx-auto">
              We couldn't find any questions for Level {currentLevel}. Please try another level.
            </p>
          </div>
          <button onClick={resetQuiz} className="btn-brutal bg-neon-blue text-slate-900 border-slate-900 w-full">
            Back to Levels
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] pb-12">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-slate-900/90 backdrop-blur-xl border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {currentLevel !== null && (
              <button 
                onClick={resetQuiz}
                className="btn-brutal p-3 bg-neon-pink text-slate-900 border-black"
                title="Back to Levels"
              >
                <RotateCcw size={24} />
              </button>
            )}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-neon-blue border-4 border-black rounded-2xl flex items-center justify-center text-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <GraduationCap size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-brutal uppercase tracking-tighter text-white leading-none">
                  Grammar <span className="text-neon-pink">Master</span>
                </h1>
                <p className="text-xs uppercase tracking-[0.3em] text-neon-blue font-bold mt-1">Level Up Your English</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-black">Current Progress</span>
              <div className="flex items-center gap-3 mt-1">
                <div className="w-32 h-3 bg-slate-800 border-2 border-black rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-neon-green"
                    initial={{ width: 0 }}
                    animate={{ width: currentLevel ? `${((usedIds.size + (isSubmitted ? 1 : 0)) / 10) * 100}%` : '0%' }}
                  />
                </div>
                <span className="text-white font-mono font-bold text-lg">{currentLevel ? `${Math.min(usedIds.size + (isSubmitted ? 1 : 0), 10)}/10` : '0/10'}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-neon-yellow text-slate-900 px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Trophy size={24} className="animate-bounce" />
              <span className="font-mono font-black text-2xl">{score}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-8">
        <AnimatePresence mode="wait">
          {currentLevel === null ? (
            <motion.div
              key="level-selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <h2 className="text-5xl font-brutal uppercase text-white tracking-tight">
                  Choose Your <span className="text-neon-blue">Challenge</span>
                </h2>
                <p className="text-slate-400 max-w-md mx-auto">Master grammar step by step through 9 levels of increasing difficulty. Each level features 10 random questions from our massive bank.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((lvl) => {
                  const difficulty = lvl <= 3 ? 'Beginner' : lvl <= 6 ? 'Intermediate' : 'Advanced';
                  const colors = {
                    Beginner: "border-neon-green shadow-[0_0_20px_rgba(0,255,0,0.2)] hover:shadow-[0_0_30px_rgba(0,255,0,0.4)]",
                    Intermediate: "border-neon-yellow shadow-[0_0_20px_rgba(255,255,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,0,0.4)]",
                    Advanced: "border-neon-pink shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:shadow-[0_0_30px_rgba(255,0,255,0.4)]"
                  };
                  return (
                    <button
                      key={lvl}
                      onClick={() => startLevel(lvl)}
                      className={cn(
                        "relative overflow-hidden group p-8 rounded-[2rem] bg-slate-800 border-4 border-black transition-all duration-300 text-left shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]",
                        colors[difficulty]
                      )}
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BookOpen size={80} />
                      </div>
                      <div className="flex justify-between items-start mb-6">
                        <div className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center text-slate-900 font-brutal text-2xl transition-transform group-hover:scale-110",
                          difficulty === 'Beginner' ? "bg-neon-green" : difficulty === 'Intermediate' ? "bg-neon-yellow" : "bg-neon-pink"
                        )}>
                          {lvl}
                        </div>
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                          difficulty === 'Beginner' && "bg-neon-green/10 text-neon-green border border-neon-green/20",
                          difficulty === 'Intermediate' && "bg-neon-yellow/10 text-neon-yellow border border-neon-yellow/20",
                          difficulty === 'Advanced' && "bg-neon-pink/10 text-neon-pink border border-neon-pink/20",
                        )}>
                          {difficulty}
                        </span>
                      </div>
                      <h3 className="text-2xl font-brutal uppercase text-white mb-2">Level {lvl}</h3>
                      <p className="text-sm text-slate-400 font-medium">10 Random Questions</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : !levelComplete && currentQuestion ? (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Filters & Info */}
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-neon-blue text-slate-900 rounded-xl font-brutal uppercase text-sm border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Level {currentLevel}
                  </div>
                  <div className={cn(
                    "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
                    currentQuestion?.difficulty === 'Beginner' && "bg-neon-green text-slate-900",
                    currentQuestion?.difficulty === 'Intermediate' && "bg-neon-yellow text-slate-900",
                    currentQuestion?.difficulty === 'Advanced' && "bg-neon-pink text-slate-900",
                  )}>
                    {currentQuestion?.difficulty}
                  </div>
                  <div className="px-4 py-2 bg-slate-800 text-slate-400 rounded-xl text-xs font-black uppercase tracking-widest border-2 border-white/10">
                    {currentQuestion?.category}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
                    Question {usedIds.size + 1}/10
                  </span>
                </div>
              </div>

              {/* Question Card */}
              {currentQuestion && (
                <div className="bg-slate-800 border-4 border-black rounded-[2.5rem] p-8 sm:p-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-yellow" />
                  
                  <div className="space-y-16">
                    <div className="text-center">
                      <h2 className="text-3xl sm:text-4xl font-display font-bold leading-relaxed text-white">
                        {currentQuestion.sentence.split('______').map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className={cn(
                                "inline-block min-w-[160px] border-b-4 mx-3 transition-all duration-500",
                                !selectedAnswer ? "border-slate-600 text-transparent" : 
                                isSubmitted ? (selectedAnswer === currentQuestion.correctAnswer ? "border-neon-green text-neon-green" : "border-neon-pink text-neon-pink") :
                                "border-neon-blue text-neon-blue neon-glow"
                              )}>
                                {selectedAnswer || "______"}
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {currentQuestion.options.map((option) => (
                        <button
                          key={option}
                          disabled={isSubmitted}
                          onClick={() => handleAnswerSelect(option)}
                          className={cn(
                            "group relative p-6 rounded-3xl border-4 text-left transition-all duration-300",
                            selectedAnswer === option 
                              ? "border-neon-blue bg-neon-blue/10 shadow-[4px_4px_0px_0px_rgba(0,255,255,0.3)]" 
                              : "border-black bg-white/5 hover:border-white/20 hover:bg-white/10",
                            isSubmitted && option === currentQuestion.correctAnswer && "border-neon-green bg-neon-green/10 shadow-[4px_4px_0px_0px_rgba(0,255,0,0.3)]",
                            isSubmitted && selectedAnswer === option && option !== currentQuestion.correctAnswer && "border-neon-pink bg-neon-pink/10 shadow-[4px_4px_0px_0px_rgba(255,0,255,0.3)]",
                            isSubmitted && option !== selectedAnswer && option !== currentQuestion.correctAnswer && "opacity-30"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className={cn(
                              "text-xl font-bold tracking-tight",
                              selectedAnswer === option ? "text-neon-blue" : "text-slate-300"
                            )}>
                              {option}
                            </span>
                            {isSubmitted && option === currentQuestion.correctAnswer && (
                              <CheckCircle2 className="text-neon-green" size={24} />
                            )}
                            {isSubmitted && selectedAnswer === option && option !== currentQuestion.correctAnswer && (
                              <XCircle className="text-neon-pink" size={24} />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-center pt-8">
                      {!isSubmitted ? (
                        <button
                          onClick={handleSubmit}
                          disabled={!selectedAnswer}
                          className="btn-brutal bg-neon-blue text-slate-900 border-slate-900 w-full sm:w-auto min-w-[250px] flex items-center justify-center gap-3 text-lg"
                        >
                          Check Answer
                          <ChevronRight size={20} />
                        </button>
                      ) : (
                        <button
                          onClick={handleNext}
                          className="btn-brutal bg-white text-slate-900 border-slate-900 w-full sm:w-auto min-w-[250px] flex items-center justify-center gap-3 text-lg"
                        >
                          {usedIds.size === levelQuestions.length - 1 ? "Finish Level" : "Next Question"}
                          <ArrowRight size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Explanation Card */}
              <AnimatePresence>
                {showExplanation && currentQuestion && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="overflow-hidden"
                  >
                    <div className={cn(
                      "rounded-[2rem] p-8 sm:p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
                      selectedAnswer === currentQuestion.correctAnswer 
                        ? "bg-neon-green text-slate-900" 
                        : "bg-neon-pink text-slate-900"
                    )}>
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-black text-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                          <BookOpen size={32} />
                        </div>
                        <div className="space-y-6 flex-1">
                          <div>
                            <h3 className="text-2xl font-brutal uppercase mb-2">Why this is {selectedAnswer === currentQuestion.correctAnswer ? 'Right' : 'Wrong'}</h3>
                            <p className="text-lg font-bold leading-tight opacity-90">
                              {currentQuestion.explanation.rule}
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-black/10 p-6 rounded-2xl border-2 border-black/20">
                              <h4 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                                <CheckCircle2 size={16} /> Example
                              </h4>
                              <p className="text-lg font-mono italic">"{currentQuestion.explanation.example}"</p>
                            </div>
                            <div className="bg-black/10 p-6 rounded-2xl border-2 border-black/20">
                              <h4 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Info size={16} /> Watch Out
                              </h4>
                              <p className="text-lg font-mono">{currentQuestion.explanation.commonMistake}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="brutal-card rounded-[3rem] p-12 text-center space-y-10 max-w-2xl mx-auto"
            >
              <div className="w-28 h-28 bg-neon-yellow border-4 border-black rounded-full flex items-center justify-center mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Trophy size={56} className="text-slate-900" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-5xl font-brutal uppercase text-slate-900">Level {currentLevel} Complete!</h2>
                <p className="text-slate-500 text-xl font-bold uppercase tracking-widest">You've mastered this stage.</p>
              </div>

              <div className="flex justify-center gap-12 py-6">
                <div className="text-center">
                  <div className="text-6xl font-brutal text-neon-blue stroke-black stroke-2">{score}</div>
                  <div className="text-xs font-black uppercase tracking-tighter text-slate-400 mt-2">Correct</div>
                </div>
                <div className="w-1 bg-slate-200 self-stretch" />
                <div className="text-center">
                  <div className="text-6xl font-brutal text-slate-300">10</div>
                  <div className="text-xs font-black uppercase tracking-tighter text-slate-400 mt-2">Total</div>
                </div>
              </div>

              <div className="bg-slate-50 border-4 border-black p-8 rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-slate-900 text-xl font-brutal uppercase leading-tight">
                  {score === 10 
                    ? "Perfect! You're a true Grammar Master! 🌟" 
                    : score >= 7
                    ? "Great job! You have a solid grasp! 👍"
                    : "Keep practicing! Every mistake is a step! 💪"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <button onClick={resetQuiz} className="btn-brutal bg-white text-slate-900 flex items-center justify-center gap-3 text-lg">
                  <RotateCcw size={24} />
                  Back to Levels
                </button>
                {currentLevel < 9 && (
                  <button 
                    onClick={() => startLevel(currentLevel + 1)}
                    className="btn-brutal bg-neon-green text-slate-900 flex items-center justify-center gap-3 text-lg"
                  >
                    Next Level
                    <ArrowRight size={24} />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer / Tips */}
      {!showResult && (
        <footer className="max-w-5xl mx-auto px-4 mt-16">
          <div className="brutal-card bg-slate-900 border-white/20 p-10 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-brutal uppercase text-neon-blue">Grammar Tip</h3>
                <p className="text-slate-400 max-w-lg text-lg font-medium">
                  When dealing with non-finite verbs, always identify the subject of the action first to decide between active (doing) and passive (done).
                </p>
              </div>
              <button className="btn-brutal bg-neon-pink text-slate-900 border-black flex items-center gap-3 text-lg">
                Learn More <ArrowRight size={20} />
              </button>
            </div>
            {/* Decorative background element */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl" />
          </div>
        </footer>
      )}
    </div>
  );
}
