
import { GoogleGenAI, Type } from "@google/genai";
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateQuestions(difficulty, count, startId) {
  const prompt = `Generate ${count} English grammar multiple choice questions for ${difficulty} level. 
  Each question should have:
  - id: string (starting from ${startId})
  - sentence: string (with "______" for the blank)
  - options: string array (4 options)
  - correctAnswer: string (one of the options)
  - explanation: { rule: string, example: string, commonMistake: string }
  - difficulty: "${difficulty}"
  - category: one of ['Non-finite Verbs', 'Relative Clauses', 'Adverbial Clauses', 'Conjunctions', 'Tenses', 'Subjunctive Mood']
  - level: number (1-9, distribute evenly)

  Return ONLY a JSON array of objects.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            sentence: { type: Type.STRING },
            options: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctAnswer: { type: Type.STRING },
            explanation: {
              type: Type.OBJECT,
              properties: {
                rule: { type: Type.STRING },
                example: { type: Type.STRING },
                commonMistake: { type: Type.STRING }
              },
              required: ["rule", "example", "commonMistake"]
            },
            difficulty: { type: Type.STRING },
            category: { type: Type.STRING },
            level: { type: Type.NUMBER }
          },
          required: ["id", "sentence", "options", "correctAnswer", "explanation", "difficulty", "category", "level"]
        }
      }
    }
  });

  return JSON.parse(response.text);
}

async function main() {
  try {
    console.log("Generating Beginner questions...");
    const beginner = await generateQuestions("Beginner", 100, "b");
    console.log("Generating Intermediate questions...");
    const intermediate = await generateQuestions("Intermediate", 100, "i");
    console.log("Generating Advanced questions...");
    const advanced = await generateQuestions("Advanced", 100, "a");

    const allQuestions = [...beginner, ...intermediate, ...advanced];
    
    const content = `
import { Question } from '../types';

export const QUESTIONS: Question[] = ${JSON.stringify(allQuestions, null, 2)};
`;

    fs.writeFileSync('./src/data/questions.ts', content);
    console.log("Successfully generated 300 questions!");
  } catch (error) {
    console.error("Error generating questions:", error);
    process.exit(1);
  }
}

main();
