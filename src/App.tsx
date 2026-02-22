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
    setCurrentQuestion(levelQs[0]);
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
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50">
        <div className="text-center space-y-4 glass-card p-8 rounded-3xl">
          <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mx-auto">
            <Filter size={32} />
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-800">No questions found</h2>
          <p className="text-slate-500 max-w-xs mx-auto">
            We couldn't find any questions for Level {currentLevel}. Please try another level.
          </p>
          <button onClick={resetQuiz} className="btn-primary w-full">
            Back to Levels
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {currentLevel !== null && (
              <button 
                onClick={resetQuiz}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-500"
                title="Back to Levels"
              >
                <RotateCcw size={20} />
              </button>
            )}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white">
                <GraduationCap size={24} />
              </div>
              <h1 className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                Grammar Master
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-500">
              <span>Progress:</span>
              <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                   className="h-full bg-brand-primary"
                   initial={{ width: 0 }}
                   animate={{ width: currentLevel ? `${((usedIds.size + (isSubmitted ? 1 : 0)) / levelQuestions.length) * 100}%` : '0%' }}
                />
              </div>
              <span>{currentLevel ? `${Math.min(usedIds.size + (isSubmitted ? 1 : 0), levelQuestions.length)}/${levelQuestions.length}` : '0/10'}</span>
            </div>
            <div className="flex items-center gap-1 bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold">
              <Trophy size={14} />
              <span>{score}</span>
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
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-display font-bold text-slate-900">Choose Your Level</h2>
                <p className="text-slate-500">Master grammar step by step through 9 challenging levels.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((lvl) => {
                  const difficulty = lvl <= 3 ? 'Beginner' : lvl <= 6 ? 'Intermediate' : 'Advanced';
                  return (
                    <button
                      key={lvl}
                      onClick={() => startLevel(lvl)}
                      className="glass-card p-6 rounded-3xl text-left hover:border-brand-primary transition-all group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <span className="text-xl font-bold">{lvl}</span>
                        </div>
                        <span className={cn(
                          "px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                          difficulty === 'Beginner' && "bg-emerald-100 text-emerald-700",
                          difficulty === 'Intermediate' && "bg-amber-100 text-amber-700",
                          difficulty === 'Advanced' && "bg-rose-100 text-rose-700",
                        )}>
                          {difficulty}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">Level {lvl}</h3>
                      <p className="text-sm text-slate-500">10 Questions</p>
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
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-brand-primary text-white rounded-full text-xs font-bold">
                    Level {currentLevel}
                  </span>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                    currentQuestion?.difficulty === 'Beginner' && "bg-emerald-100 text-emerald-700",
                    currentQuestion?.difficulty === 'Intermediate' && "bg-amber-100 text-amber-700",
                    currentQuestion?.difficulty === 'Advanced' && "bg-rose-100 text-rose-700",
                  )}>
                    {currentQuestion?.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                    {currentQuestion?.category}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    Question {usedIds.size + 1}/10
                  </span>
                </div>
              </div>

              {/* Question Card */}
              {currentQuestion && (
                <div className="glass-card rounded-3xl p-8 sm:p-12">
                  <div className="space-y-12">
                    <div className="text-center">
                      <h2 className="text-2xl sm:text-3xl font-display font-semibold leading-relaxed text-slate-800">
                        {currentQuestion.sentence.split('______').map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className={cn(
                                "inline-block min-w-[120px] border-b-2 mx-2 transition-all duration-300",
                                !selectedAnswer ? "border-slate-300 text-transparent" : 
                                isSubmitted ? (selectedAnswer === currentQuestion.correctAnswer ? "border-emerald-500 text-emerald-600" : "border-rose-500 text-rose-600") :
                                "border-brand-primary text-brand-primary"
                              )}>
                                {selectedAnswer || "______"}
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentQuestion.options.map((option) => (
                        <button
                          key={option}
                          disabled={isSubmitted}
                          onClick={() => handleAnswerSelect(option)}
                          className={cn(
                            "group relative p-4 rounded-2xl border-2 text-left transition-all duration-200",
                            selectedAnswer === option 
                              ? "border-brand-primary bg-brand-primary/5" 
                              : "border-slate-100 hover:border-slate-200 hover:bg-slate-50",
                            isSubmitted && option === currentQuestion.correctAnswer && "border-emerald-500 bg-emerald-50",
                            isSubmitted && selectedAnswer === option && option !== currentQuestion.correctAnswer && "border-rose-500 bg-rose-50",
                            isSubmitted && option !== selectedAnswer && option !== currentQuestion.correctAnswer && "opacity-50"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className={cn(
                              "text-lg font-medium",
                              selectedAnswer === option ? "text-brand-primary" : "text-slate-700"
                            )}>
                              {option}
                            </span>
                            {isSubmitted && option === currentQuestion.correctAnswer && (
                              <CheckCircle2 className="text-emerald-500" size={20} />
                            )}
                            {isSubmitted && selectedAnswer === option && option !== currentQuestion.correctAnswer && (
                              <XCircle className="text-rose-500" size={20} />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-center pt-4">
                      {!isSubmitted ? (
                        <button
                          onClick={handleSubmit}
                          disabled={!selectedAnswer}
                          className="btn-primary w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2"
                        >
                          Check Answer
                          <ChevronRight size={18} />
                        </button>
                      ) : (
                        <button
                          onClick={handleNext}
                          className="btn-primary bg-slate-900 hover:bg-slate-800 w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2"
                        >
                          {usedIds.size === levelQuestions.length - 1 ? "Finish Level" : "Next Question"}
                          <ArrowRight size={18} />
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
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={cn(
                      "rounded-3xl p-6 sm:p-8 border-2",
                      selectedAnswer === currentQuestion.correctAnswer 
                        ? "bg-emerald-50 border-emerald-100" 
                        : "bg-rose-50 border-rose-100"
                    )}>
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "p-3 rounded-2xl",
                          selectedAnswer === currentQuestion.correctAnswer ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                        )}>
                          <BookOpen size={24} />
                        </div>
                        <div className="space-y-4 flex-1">
                          <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-1">Detailed Explanation</h3>
                            <p className="text-slate-600 leading-relaxed">
                              {currentQuestion.explanation.rule}
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/60 p-4 rounded-xl">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 flex items-center gap-1">
                                <CheckCircle2 size={12} /> Correct Example
                              </h4>
                              <p className="text-sm italic text-slate-700">"{currentQuestion.explanation.example}"</p>
                            </div>
                            <div className="bg-white/60 p-4 rounded-xl">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-2 flex items-center gap-1">
                                <Info size={12} /> Common Mistake
                              </h4>
                              <p className="text-sm text-slate-700">{currentQuestion.explanation.commonMistake}</p>
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
              className="glass-card rounded-[2.5rem] p-12 text-center space-y-8 max-w-2xl mx-auto"
            >
              <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto text-brand-primary">
                <Trophy size={48} />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-4xl font-display font-bold text-slate-900">Level {currentLevel} Complete!</h2>
                <p className="text-slate-500 text-lg">You've mastered this level's challenges.</p>
              </div>

              <div className="flex justify-center gap-8 py-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary">{score}</div>
                  <div className="text-sm text-slate-500 font-medium">Correct</div>
                </div>
                <div className="w-px h-12 bg-slate-200 self-center" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-400">{levelQuestions.length}</div>
                  <div className="text-sm text-slate-500 font-medium">Total</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl">
                <p className="text-slate-700 font-medium italic">
                  {score === levelQuestions.length 
                    ? "Perfect! You're a true Grammar Master! 🌟" 
                    : score >= levelQuestions.length * 0.7
                    ? "Great job! You have a solid grasp of these concepts. 👍"
                    : "Keep practicing! Every mistake is a step towards mastery. 💪"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={resetQuiz} className="btn-secondary flex items-center justify-center gap-2">
                  <RotateCcw size={18} />
                  Back to Levels
                </button>
                {currentLevel < 9 && (
                  <button 
                    onClick={() => startLevel(currentLevel + 1)}
                    className="btn-primary flex items-center justify-center gap-2"
                  >
                    Next Level
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer / Tips */}
      {!showResult && (
        <footer className="max-w-4xl mx-auto px-4 mt-12">
          <div className="bg-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold">Quick Tip</h3>
                <p className="text-indigo-200 max-w-md">
                  When dealing with non-finite verbs, always identify the subject of the action first to decide between active (doing) and passive (done).
                </p>
              </div>
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-sm font-bold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
            {/* Decorative background element */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          </div>
        </footer>
      )}
    </div>
  );
}
