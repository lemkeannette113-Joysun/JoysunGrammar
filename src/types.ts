
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type GrammarCategory = 
  | 'Non-finite Verbs' 
  | 'Relative Clauses' 
  | 'Adverbial Clauses' 
  | 'Conjunctions' 
  | 'Tenses' 
  | 'Subjunctive Mood';

export interface Question {
  id: string;
  sentence: string; // Use "______" for blanks
  options: string[];
  correctAnswer: string;
  explanation: {
    rule: string;
    example: string;
    commonMistake: string;
  };
  difficulty: Difficulty;
  category: GrammarCategory;
  level: number;
}

export interface UserProgress {
  score: number;
  totalAnswered: number;
  history: {
    questionId: string;
    isCorrect: boolean;
    userAnswer: string;
  }[];
}
