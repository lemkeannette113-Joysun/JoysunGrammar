
import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // LEVEL 1: Beginner (1-10)
  {
    id: 'b1', level: 1,
    sentence: "This is the museum ______ we visited last summer.",
    options: ["that", "where", "who", "when"],
    correctAnswer: "that",
    explanation: {
      rule: "In a relative clause, 'that' or 'which' is used when the relative pronoun acts as the object of the verb 'visit'.",
      example: "The book that I bought is interesting.",
      commonMistake: "Students often use 'where' for places, but 'visit' is a transitive verb requiring an object."
    },
    difficulty: 'Beginner',
    category: 'Relative Clauses'
  },
  {
    id: 'b2', level: 1,
    sentence: "I won't go to the party ______ I am invited.",
    options: ["unless", "if", "because", "since"],
    correctAnswer: "unless",
    explanation: {
      rule: "'Unless' means 'if...not', used to introduce a negative condition.",
      example: "You will fail unless you work hard.",
      commonMistake: "Confusing 'unless' with 'if'."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },
  {
    id: 'b3', level: 1,
    sentence: "He is the man ______ car was stolen yesterday.",
    options: ["whose", "who", "whom", "which"],
    correctAnswer: "whose",
    explanation: {
      rule: "'Whose' is a relative pronoun used to show possession.",
      example: "The girl whose mother is a doctor is my friend.",
      commonMistake: "Using 'who' which only refers to the subject."
    },
    difficulty: 'Beginner',
    category: 'Relative Clauses'
  },
  {
    id: 'b4', level: 1,
    sentence: "______ it rained heavily, they still went for a hike.",
    options: ["Although", "Because", "Unless", "Despite"],
    correctAnswer: "Although",
    explanation: {
      rule: "'Although' is a conjunction used to introduce a concessive clause.",
      example: "Although he is old, he is very active.",
      commonMistake: "Using 'Despite', which must be followed by a noun or gerund."
    },
    difficulty: 'Beginner',
    category: 'Adverbial Clauses'
  },
  {
    id: 'b5', level: 1,
    sentence: "Look! The children ______ football on the playground.",
    options: ["are playing", "play", "played", "will play"],
    correctAnswer: "are playing",
    explanation: {
      rule: "The present continuous tense is used for actions happening right now.",
      example: "Listen! Someone is singing.",
      commonMistake: "Using the simple present 'play' for current actions."
    },
    difficulty: 'Beginner',
    category: 'Tenses'
  },
  {
    id: 'b6', level: 1,
    sentence: "I have lived here ______ I was born.",
    options: ["since", "for", "when", "before"],
    correctAnswer: "since",
    explanation: {
      rule: "'Since' is used with the present perfect to indicate a starting point in the past.",
      example: "I haven't seen him since 2010.",
      commonMistake: "Using 'for' which indicates a duration of time."
    },
    difficulty: 'Beginner',
    category: 'Tenses'
  },
  {
    id: 'b7', level: 1,
    sentence: "He is ______ student in our class.",
    options: ["the tallest", "taller", "tall", "tallest"],
    correctAnswer: "the tallest",
    explanation: {
      rule: "The superlative degree is used to compare three or more things.",
      example: "This is the most beautiful flower.",
      commonMistake: "Forgetting the definite article 'the' before superlatives."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },
  {
    id: 'b8', level: 1,
    sentence: "Would you like ______ apple?",
    options: ["an", "a", "the", "/"],
    correctAnswer: "an",
    explanation: {
      rule: "'An' is used before words starting with a vowel sound.",
      example: "An hour, an umbrella.",
      commonMistake: "Using 'a' before vowel sounds."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },
  {
    id: 'b9', level: 1,
    sentence: "There ______ some milk in the bottle.",
    options: ["is", "are", "be", "have"],
    correctAnswer: "is",
    explanation: {
      rule: "'Milk' is an uncountable noun and takes a singular verb.",
      example: "Water is essential for life.",
      commonMistake: "Using 'are' with uncountable nouns."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },
  {
    id: 'b10', level: 1,
    sentence: "I ______ my homework yet.",
    options: ["haven't finished", "didn't finish", "don't finish", "won't finish"],
    correctAnswer: "haven't finished",
    explanation: {
      rule: "The present perfect is often used with 'yet' in negative sentences.",
      example: "He hasn't arrived yet.",
      commonMistake: "Using the simple past 'didn't finish' with 'yet'."
    },
    difficulty: 'Beginner',
    category: 'Tenses'
  },

  // LEVEL 2: Beginner (11-20)
  {
    id: 'b11', level: 2,
    sentence: "She is good ______ playing the piano.",
    options: ["at", "in", "on", "with"],
    correctAnswer: "at",
    explanation: {
      rule: "The phrase 'be good at' means to be skilled in something.",
      example: "I am good at math.",
      commonMistake: "Using 'in' or 'with'."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },
  {
    id: 'b12', level: 2,
    sentence: "We ______ to the zoo last Sunday.",
    options: ["went", "go", "gone", "going"],
    correctAnswer: "went",
    explanation: {
      rule: "The simple past tense is used for completed actions in the past.",
      example: "I saw a movie yesterday.",
      commonMistake: "Using the base form 'go'."
    },
    difficulty: 'Beginner',
    category: 'Tenses'
  },
  {
    id: 'b13', level: 2,
    sentence: "How ______ money do you have?",
    options: ["much", "many", "long", "often"],
    correctAnswer: "much",
    explanation: {
      rule: "'Much' is used with uncountable nouns like 'money'.",
      example: "How much water do you need?",
      commonMistake: "Using 'many' with uncountable nouns."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },
  {
    id: 'b14', level: 2,
    sentence: "This is the book ______ I bought yesterday.",
    options: ["which", "who", "whom", "whose"],
    correctAnswer: "which",
    explanation: {
      rule: "'Which' or 'that' is used to refer to things in relative clauses.",
      example: "The car which he drives is new.",
      commonMistake: "Using 'who' for objects."
    },
    difficulty: 'Beginner',
    category: 'Relative Clauses'
  },
  {
    id: 'b15', level: 2,
    sentence: "It's time ______ to bed.",
    options: ["to go", "go", "going", "went"],
    correctAnswer: "to go",
    explanation: {
      rule: "The structure 'It's time to do something' is used to suggest an action.",
      example: "It's time to start.",
      commonMistake: "Using 'go' or 'going'."
    },
    difficulty: 'Beginner',
    category: 'Non-finite Verbs'
  },
  {
    id: 'b16', level: 2,
    sentence: "He is ______ than his brother.",
    options: ["taller", "tallest", "the taller", "tall"],
    correctAnswer: "taller",
    explanation: {
      rule: "The comparative degree is used to compare two things.",
      example: "She is smarter than me.",
      commonMistake: "Using the superlative 'tallest'."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },
  {
    id: 'b17', level: 2,
    sentence: "I enjoy ______ music.",
    options: ["listening to", "listen to", "to listen to", "listened to"],
    correctAnswer: "listening to",
    explanation: {
      rule: "The verb 'enjoy' is followed by a gerund (doing).",
      example: "I enjoy swimming.",
      commonMistake: "Using the infinitive 'to listen'."
    },
    difficulty: 'Beginner',
    category: 'Non-finite Verbs'
  },
  {
    id: 'b18', level: 2,
    sentence: "The sun ______ in the east.",
    options: ["rises", "rise", "rising", "rose"],
    correctAnswer: "rises",
    explanation: {
      rule: "The simple present is used for universal truths.",
      example: "Water boils at 100 degrees.",
      commonMistake: "Using the base form 'rise' for singular subjects."
    },
    difficulty: 'Beginner',
    category: 'Tenses'
  },
  {
    id: 'b19', level: 2,
    sentence: "Can you help me ______ the box?",
    options: ["carry", "carried", "carrying", "carries"],
    correctAnswer: "carry",
    explanation: {
      rule: "'Help' can be followed by an object and a bare infinitive or 'to' infinitive.",
      example: "Help me (to) do it.",
      commonMistake: "Using 'carrying'."
    },
    difficulty: 'Beginner',
    category: 'Non-finite Verbs'
  },
  {
    id: 'b20', level: 2,
    sentence: "There are ______ apples on the table.",
    options: ["some", "any", "much", "a little"],
    correctAnswer: "some",
    explanation: {
      rule: "'Some' is used in affirmative sentences with plural countable nouns.",
      example: "I have some friends.",
      commonMistake: "Using 'any' in affirmative sentences."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },

  // LEVEL 3: Beginner (21-30)
  {
    id: 'b21', level: 3,
    sentence: "I ______ to Beijing twice.",
    options: ["have been", "have gone", "went", "go"],
    correctAnswer: "have been",
    explanation: {
      rule: "'Have been to' means someone has visited a place and returned.",
      example: "I have been to Paris.",
      commonMistake: "Using 'have gone to' which means they are still there."
    },
    difficulty: 'Beginner',
    category: 'Tenses'
  },
  {
    id: 'b22', level: 3,
    sentence: "She ______ her keys yesterday.",
    options: ["lost", "loses", "has lost", "lose"],
    correctAnswer: "lost",
    explanation: {
      rule: "Use simple past for actions at a specific time in the past.",
      example: "I lost my wallet an hour ago.",
      commonMistake: "Using 'has lost' with a specific time word like 'yesterday'."
    },
    difficulty: 'Beginner',
    category: 'Tenses'
  },
  {
    id: 'b23', level: 3,
    sentence: "The flowers ______ watered every day.",
    options: ["should be", "should", "be", "are being"],
    correctAnswer: "should be",
    explanation: {
      rule: "Passive voice with modal verbs: modal + be + past participle.",
      example: "It must be done.",
      commonMistake: "Forgetting 'be' in the passive structure."
    },
    difficulty: 'Beginner',
    category: 'Tenses'
  },
  {
    id: 'b24', level: 3,
    sentence: "I don't know ______ he will come or not.",
    options: ["whether", "if", "that", "when"],
    correctAnswer: "whether",
    explanation: {
      rule: "'Whether' is preferred over 'if' when followed by 'or not'.",
      example: "I wonder whether it will rain or not.",
      commonMistake: "Using 'if' in formal 'or not' structures."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },
  {
    id: 'b25', level: 3,
    sentence: "He is interested ______ history.",
    options: ["in", "at", "on", "about"],
    correctAnswer: "in",
    explanation: {
      rule: "The phrase 'be interested in' is a fixed collocation.",
      example: "Are you interested in art?",
      commonMistake: "Using 'about'."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },
  {
    id: 'b26', level: 3,
    sentence: "Wait ______ I come back.",
    options: ["until", "since", "while", "as"],
    correctAnswer: "until",
    explanation: {
      rule: "'Until' is used to indicate the end of a period of time.",
      example: "Stay here until I return.",
      commonMistake: "Using 'since'."
    },
    difficulty: 'Beginner',
    category: 'Adverbial Clauses'
  },
  {
    id: 'b27', level: 3,
    sentence: "The girl ______ is standing there is my sister.",
    options: ["who", "which", "whom", "whose"],
    correctAnswer: "who",
    explanation: {
      rule: "'Who' is used as a subject relative pronoun for people.",
      example: "The man who lives next door is nice.",
      commonMistake: "Using 'which' for people."
    },
    difficulty: 'Beginner',
    category: 'Relative Clauses'
  },
  {
    id: 'b28', level: 3,
    sentence: "I ______ a book when the phone rang.",
    options: ["was reading", "read", "am reading", "have read"],
    correctAnswer: "was reading",
    explanation: {
      rule: "The past continuous is used for an action in progress when another action happened.",
      example: "I was sleeping when you called.",
      commonMistake: "Using simple past 'read'."
    },
    difficulty: 'Beginner',
    category: 'Tenses'
  },
  {
    id: 'b29', level: 3,
    sentence: "He is ______ enough to carry the bag.",
    options: ["strong", "strongly", "stronger", "strongest"],
    correctAnswer: "strong",
    explanation: {
      rule: "'Enough' follows an adjective in its base form.",
      example: "He is old enough.",
      commonMistake: "Using the adverb 'strongly'."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },
  {
    id: 'b30', level: 3,
    sentence: "Please turn ______ the light before leaving.",
    options: ["off", "on", "down", "up"],
    correctAnswer: "off",
    explanation: {
      rule: "'Turn off' means to stop a device from working.",
      example: "Turn off the TV.",
      commonMistake: "Using 'on' when leaving."
    },
    difficulty: 'Beginner',
    category: 'Conjunctions'
  },

  // LEVEL 4: Intermediate (1-10)
  {
    id: 'i1', level: 4,
    sentence: "______ tired, she still finished the report.",
    options: ["Feeling", "Felt", "To feel", "Feel"],
    correctAnswer: "Feeling",
    explanation: {
      rule: "Present participle (doing) is used as an adverbial of reason or time when the subject performs the action.",
      example: "Feeling hungry, I went to the kitchen.",
      commonMistake: "Using 'Felt' as a main verb without a conjunction."
    },
    difficulty: 'Intermediate',
    category: 'Non-finite Verbs'
  },
  {
    id: 'i2', level: 4,
    sentence: "If I ______ you, I would take the offer.",
    options: ["were", "am", "was", "be"],
    correctAnswer: "were",
    explanation: {
      rule: "In the second conditional, 'were' is used for all persons to express an imaginary situation.",
      example: "If she were here, she would help us.",
      commonMistake: "Using 'was' in formal contexts."
    },
    difficulty: 'Intermediate',
    category: 'Subjunctive Mood'
  },
  {
    id: 'i3', level: 4,
    sentence: "I remember ______ him somewhere before.",
    options: ["seeing", "to see", "saw", "seen"],
    correctAnswer: "seeing",
    explanation: {
      rule: "'Remember doing' means to recall a past action.",
      example: "I remember closing the door.",
      commonMistake: "Using 'to see' which means to remember a task to be done."
    },
    difficulty: 'Intermediate',
    category: 'Non-finite Verbs'
  },
  {
    id: 'i4', level: 4,
    sentence: "The problem is ______ we can get enough money.",
    options: ["whether", "if", "that", "what"],
    correctAnswer: "whether",
    explanation: {
      rule: "In a predicative clause, 'whether' is used to express doubt, while 'if' is not used.",
      example: "The question is whether he will come.",
      commonMistake: "Using 'if' as a predicative clause connector."
    },
    difficulty: 'Intermediate',
    category: 'Adverbial Clauses'
  },
  {
    id: 'i5', level: 4,
    sentence: "Hardly ______ the station when the train left.",
    options: ["had I reached", "I had reached", "did I reach", "I reached"],
    correctAnswer: "had I reached",
    explanation: {
      rule: "When 'Hardly' starts a sentence, partial inversion is required.",
      example: "Hardly had he started when it rained.",
      commonMistake: "Using normal word order."
    },
    difficulty: 'Intermediate',
    category: 'Adverbial Clauses'
  },
  {
    id: 'i6', level: 4,
    sentence: "It is the first time that I ______ to this city.",
    options: ["have been", "was", "had been", "am"],
    correctAnswer: "have been",
    explanation: {
      rule: "The structure 'It is the first time that...' requires the present perfect.",
      example: "It is the third time he has failed.",
      commonMistake: "Using simple past."
    },
    difficulty: 'Intermediate',
    category: 'Tenses'
  },
  {
    id: 'i7', level: 4,
    sentence: "I'd rather you ______ here tomorrow.",
    options: ["didn't come", "not come", "won't come", "don't come"],
    correctAnswer: "didn't come",
    explanation: {
      rule: "'Would rather someone did' expresses a wish about the present or future using the subjunctive.",
      example: "I'd rather you stayed.",
      commonMistake: "Using 'don't come'."
    },
    difficulty: 'Intermediate',
    category: 'Subjunctive Mood'
  },
  {
    id: 'i8', level: 4,
    sentence: "The house ______ last year is very beautiful.",
    options: ["built", "building", "to be built", "being built"],
    correctAnswer: "built",
    explanation: {
      rule: "Past participle used as an adjective to show a completed passive action.",
      example: "The broken window was fixed.",
      commonMistake: "Using 'building' which is active."
    },
    difficulty: 'Intermediate',
    category: 'Non-finite Verbs'
  },
  {
    id: 'i9', level: 4,
    sentence: "Not only ______ but also he is very kind.",
    options: ["is he clever", "he is clever", "does he clever", "clever is he"],
    correctAnswer: "is he clever",
    explanation: {
      rule: "Inversion is required after 'Not only' when it starts a sentence.",
      example: "Not only did he come, but he also stayed.",
      commonMistake: "Forgetting inversion."
    },
    difficulty: 'Intermediate',
    category: 'Adverbial Clauses'
  },
  {
    id: 'i10', level: 4,
    sentence: "I found it difficult ______ the work in two hours.",
    options: ["to finish", "finish", "finishing", "finished"],
    correctAnswer: "to finish",
    explanation: {
      rule: "'It' is a formal object, and the infinitive is the real object.",
      example: "I find it easy to learn English.",
      commonMistake: "Using 'finishing'."
    },
    difficulty: 'Intermediate',
    category: 'Non-finite Verbs'
  },

  // LEVEL 5: Intermediate (11-20)
  {
    id: 'i11', level: 5,
    sentence: "The reason ______ he was late was that he missed the bus.",
    options: ["why", "because", "that", "which"],
    correctAnswer: "why",
    explanation: {
      rule: "'Why' is the relative adverb for 'reason'.",
      example: "That is the reason why I left.",
      commonMistake: "Using 'because' in a relative clause."
    },
    difficulty: 'Intermediate',
    category: 'Relative Clauses'
  },
  {
    id: 'i12', level: 5,
    sentence: "He spoke so fast ______ I couldn't follow him.",
    options: ["that", "as", "than", "which"],
    correctAnswer: "that",
    explanation: {
      rule: "'So...that' is used to express result.",
      example: "He was so tired that he fell asleep.",
      commonMistake: "Using 'as'."
    },
    difficulty: 'Intermediate',
    category: 'Adverbial Clauses'
  },
  {
    id: 'i13', level: 5,
    sentence: "By the time he arrived, the meeting ______.",
    options: ["had started", "started", "has started", "starts"],
    correctAnswer: "had started",
    explanation: {
      rule: "Past perfect is used for actions completed before a certain time in the past.",
      example: "I had finished my work by 5 PM.",
      commonMistake: "Using simple past."
    },
    difficulty: 'Intermediate',
    category: 'Tenses'
  },
  {
    id: 'i14', level: 5,
    sentence: "I am looking forward to ______ you soon.",
    options: ["seeing", "see", "seen", "to see"],
    correctAnswer: "seeing",
    explanation: {
      rule: "'Look forward to' is followed by a gerund (doing).",
      example: "I look forward to meeting you.",
      commonMistake: "Using the infinitive 'see'."
    },
    difficulty: 'Intermediate',
    category: 'Non-finite Verbs'
  },
  {
    id: 'i15', level: 5,
    sentence: "No sooner ______ than it began to rain.",
    options: ["had he left", "he had left", "did he leave", "he left"],
    correctAnswer: "had he left",
    explanation: {
      rule: "'No sooner...than' requires inversion in the first clause.",
      example: "No sooner had I arrived than he left.",
      commonMistake: "Using normal word order."
    },
    difficulty: 'Intermediate',
    category: 'Adverbial Clauses'
  },
  {
    id: 'i16', level: 5,
    sentence: "The news ______ he won the gold medal is true.",
    options: ["that", "which", "what", "whether"],
    correctAnswer: "that",
    explanation: {
      rule: "Appositive clauses use 'that' to explain the content of a noun.",
      example: "The fact that he is honest is well known.",
      commonMistake: "Using 'which'."
    },
    difficulty: 'Intermediate',
    category: 'Adverbial Clauses'
  },
  {
    id: 'i17', level: 5,
    sentence: "He is used to ______ early in the morning.",
    options: ["getting up", "get up", "got up", "to get up"],
    correctAnswer: "getting up",
    explanation: {
      rule: "'Be used to' means 'be accustomed to' and is followed by a gerund.",
      example: "I am used to cold weather.",
      commonMistake: "Confusing it with 'used to do' (past habit)."
    },
    difficulty: 'Intermediate',
    category: 'Non-finite Verbs'
  },
  {
    id: 'i18', level: 5,
    sentence: "I don't know the girl ______ you are talking.",
    options: ["about whom", "whom", "who", "that"],
    correctAnswer: "about whom",
    explanation: {
      rule: "Preposition + relative pronoun (whom/which) is used in formal relative clauses.",
      example: "The person to whom I spoke was helpful.",
      commonMistake: "Forgetting the preposition."
    },
    difficulty: 'Intermediate',
    category: 'Relative Clauses'
  },
  {
    id: 'i19', level: 5,
    sentence: "It is high time that we ______ something about it.",
    options: ["did", "do", "will do", "have done"],
    correctAnswer: "did",
    explanation: {
      rule: "'It is high time that...' is followed by a past simple subjunctive.",
      example: "It's time we went home.",
      commonMistake: "Using simple present 'do'."
    },
    difficulty: 'Intermediate',
    category: 'Subjunctive Mood'
  },
  {
    id: 'i20', level: 5,
    sentence: "______ the weather is like tomorrow, we will go.",
    options: ["Whatever", "However", "Whichever", "Whether"],
    correctAnswer: "Whatever",
    explanation: {
      rule: "'Whatever' introduces an adverbial clause of concession.",
      example: "Whatever happens, stay calm.",
      commonMistake: "Using 'However' which modifies adjectives/adverbs."
    },
    difficulty: 'Intermediate',
    category: 'Adverbial Clauses'
  },

  // LEVEL 6: Intermediate (21-30)
  {
    id: 'i21', level: 6,
    sentence: "He was seen ______ into the building.",
    options: ["to enter", "enter", "entered", "enters"],
    correctAnswer: "to enter",
    explanation: {
      rule: "In passive voice, verbs of perception (see, hear) require 'to' before the infinitive.",
      example: "He was heard to sing.",
      commonMistake: "Using bare infinitive 'enter'."
    },
    difficulty: 'Intermediate',
    category: 'Non-finite Verbs'
  },
  {
    id: 'i22', level: 6,
    sentence: "Only in this way ______ solve the problem.",
    options: ["can we", "we can", "do we can", "can"],
    correctAnswer: "can we",
    explanation: {
      rule: "When 'Only + adverbial' starts a sentence, partial inversion is needed.",
      example: "Only then did I realize.",
      commonMistake: "Using normal word order."
    },
    difficulty: 'Intermediate',
    category: 'Adverbial Clauses'
  },
  {
    id: 'i23', level: 6,
    sentence: "The teacher, as well as the students, ______ interested in the movie.",
    options: ["is", "are", "be", "were"],
    correctAnswer: "is",
    explanation: {
      rule: "When 'as well as' connects subjects, the verb agrees with the first subject.",
      example: "He as well as I is happy.",
      commonMistake: "Using 'are' because of 'students'."
    },
    difficulty: 'Intermediate',
    category: 'Conjunctions'
  },
  {
    id: 'i24', level: 6,
    sentence: "I wish I ______ more time to study.",
    options: ["had", "have", "will have", "would have"],
    correctAnswer: "had",
    explanation: {
      rule: "'Wish' followed by a past tense expresses a present regret.",
      example: "I wish I were rich.",
      commonMistake: "Using 'have'."
    },
    difficulty: 'Intermediate',
    category: 'Subjunctive Mood'
  },
  {
    id: 'i25', level: 6,
    sentence: "It was because of the rain ______ he was late.",
    options: ["that", "why", "because", "which"],
    correctAnswer: "that",
    explanation: {
      rule: "In emphatic sentences 'It is...that', 'that' is used regardless of the emphasized part.",
      example: "It was him that I saw.",
      commonMistake: "Using 'why'."
    },
    difficulty: 'Intermediate',
    category: 'Adverbial Clauses'
  },
  {
    id: 'i26', level: 6,
    sentence: "The more you practice, ______ you will be.",
    options: ["the better", "better", "the best", "best"],
    correctAnswer: "the better",
    explanation: {
      rule: "The structure 'The + comparative, the + comparative' shows correlation.",
      example: "The more, the merrier.",
      commonMistake: "Forgetting 'the'."
    },
    difficulty: 'Intermediate',
    category: 'Conjunctions'
  },
  {
    id: 'i27', level: 6,
    sentence: "He suggested ______ a meeting.",
    options: ["holding", "to hold", "hold", "held"],
    correctAnswer: "holding",
    explanation: {
      rule: "'Suggest' is followed by a gerund (doing).",
      example: "I suggest going now.",
      commonMistake: "Using 'to hold'."
    },
    difficulty: 'Intermediate',
    category: 'Non-finite Verbs'
  },
  {
    id: 'i28', level: 6,
    sentence: "I don't know ______ to do next.",
    options: ["what", "how", "which", "that"],
    correctAnswer: "what",
    explanation: {
      rule: "'What' acts as the object of 'do' in the infinitive phrase.",
      example: "I don't know what to say.",
      commonMistake: "Using 'how'."
    },
    difficulty: 'Intermediate',
    category: 'Non-finite Verbs'
  },
  {
    id: 'i29', level: 6,
    sentence: "The mountain is ______ high for us to climb.",
    options: ["too", "so", "very", "quite"],
    correctAnswer: "too",
    explanation: {
      rule: "'Too...to' means 'more than enough to prevent something'.",
      example: "He is too young to go to school.",
      commonMistake: "Using 'so' which requires a 'that' clause."
    },
    difficulty: 'Intermediate',
    category: 'Conjunctions'
  },
  {
    id: 'i30', level: 6,
    sentence: "Neither he nor I ______ going to the party.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "am",
    explanation: {
      rule: "With 'neither...nor', the verb agrees with the nearest subject.",
      example: "Neither you nor he is right.",
      commonMistake: "Using 'are'."
    },
    difficulty: 'Intermediate',
    category: 'Conjunctions'
  },

  // LEVEL 7: Advanced (1-10)
  {
    id: 'a1', level: 7,
    sentence: "The project ______ next month will be very challenging.",
    options: ["to be finished", "finished", "finishing", "being finished"],
    correctAnswer: "to be finished",
    explanation: {
      rule: "The infinitive 'to be done' indicates a future passive action.",
      example: "The work to be done is hard.",
      commonMistake: "Using 'finished' (past)."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },
  {
    id: 'a2', level: 7,
    sentence: "The teacher suggested that we ______ the homework on time.",
    options: ["finish", "finished", "to finish", "will finish"],
    correctAnswer: "finish",
    explanation: {
      rule: "Verbs of suggestion/demand use '(should) + do' in the 'that' clause.",
      example: "I suggest he go.",
      commonMistake: "Using 'finished'."
    },
    difficulty: 'Advanced',
    category: 'Subjunctive Mood'
  },
  {
    id: 'a3', level: 7,
    sentence: "______ from the top of the hill, the city looks beautiful.",
    options: ["Seen", "Seeing", "To see", "Saw"],
    correctAnswer: "Seen",
    explanation: {
      rule: "Past participle used as an adverbial when the subject (the city) receives the action.",
      example: "Seen from space, Earth is blue.",
      commonMistake: "Using 'Seeing' (active)."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },
  {
    id: 'a4', level: 7,
    sentence: "Had I known the truth, I ______ so.",
    options: ["wouldn't have said", "didn't say", "won't say", "shouldn't say"],
    correctAnswer: "wouldn't have said",
    explanation: {
      rule: "Inverted third conditional: Had + subject + done, subject + would have done.",
      example: "Had he come, I would have seen him.",
      commonMistake: "Using 'didn't say'."
    },
    difficulty: 'Advanced',
    category: 'Subjunctive Mood'
  },
  {
    id: 'a5', level: 7,
    sentence: "The man ______ you spoke is my uncle.",
    options: ["to whom", "whom", "who", "that"],
    correctAnswer: "to whom",
    explanation: {
      rule: "Preposition + relative pronoun is required when the verb 'speak' needs 'to'.",
      example: "The person with whom I work is nice.",
      commonMistake: "Forgetting 'to'."
    },
    difficulty: 'Advanced',
    category: 'Relative Clauses'
  },
  {
    id: 'a6', level: 7,
    sentence: "______ no bus, we had to walk home.",
    options: ["There being", "There was", "It being", "Being"],
    correctAnswer: "There being",
    explanation: {
      rule: "Absolute structure: There being + noun/pronoun acts as an adverbial of reason.",
      example: "There being no time, we left.",
      commonMistake: "Using 'There was' without a conjunction."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },
  {
    id: 'a7', level: 7,
    sentence: "But for your help, I ______ the goal.",
    options: ["couldn't have reached", "didn't reach", "won't reach", "haven't reached"],
    correctAnswer: "couldn't have reached",
    explanation: {
      rule: "'But for' means 'if it hadn't been for' and requires the subjunctive mood.",
      example: "But for the rain, we would have gone.",
      commonMistake: "Using simple past."
    },
    difficulty: 'Advanced',
    category: 'Subjunctive Mood'
  },
  {
    id: 'a8', level: 7,
    sentence: "The meeting ______ tomorrow is very important.",
    options: ["to be held", "held", "holding", "being held"],
    correctAnswer: "to be held",
    explanation: {
      rule: "Infinitive 'to be done' shows future passive purpose.",
      example: "The plan to be discussed is new.",
      commonMistake: "Using 'held'."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },
  {
    id: 'a9', level: 7,
    sentence: "It is essential that every student ______ the rules.",
    options: ["obey", "obeys", "obeyed", "will obey"],
    correctAnswer: "obey",
    explanation: {
      rule: "Adjectives like 'essential', 'important' require '(should) + do' in the 'that' clause.",
      example: "It is vital that he be here.",
      commonMistake: "Using 'obeys'."
    },
    difficulty: 'Advanced',
    category: 'Subjunctive Mood'
  },
  {
    id: 'a10', level: 7,
    sentence: "The car ______ in the accident was a total loss.",
    options: ["damaged", "damaging", "to be damaged", "being damaged"],
    correctAnswer: "damaged",
    explanation: {
      rule: "Past participle used as an attribute to show a completed passive state.",
      example: "The stolen car was found.",
      commonMistake: "Using 'damaging'."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },

  // LEVEL 8: Advanced (11-20)
  {
    id: 'a11', level: 8,
    sentence: "I'd rather you ______ anything about it now.",
    options: ["didn't do", "not do", "don't do", "won't do"],
    correctAnswer: "didn't do",
    explanation: {
      rule: "'Would rather' + subject + past simple expresses a present/future preference.",
      example: "I'd rather you went.",
      commonMistake: "Using 'not do'."
    },
    difficulty: 'Advanced',
    category: 'Subjunctive Mood'
  },
  {
    id: 'a12', level: 8,
    sentence: "______ the task, he went home.",
    options: ["Having finished", "Finishing", "Finished", "To finish"],
    correctAnswer: "Having finished",
    explanation: {
      rule: "Perfect participle (having done) shows an action completed before the main verb.",
      example: "Having seen the movie, I left.",
      commonMistake: "Using 'Finishing' which implies simultaneous action."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },
  {
    id: 'a13', level: 8,
    sentence: "It was in the park ______ I met her.",
    options: ["that", "where", "which", "when"],
    correctAnswer: "that",
    explanation: {
      rule: "Emphatic structure: It is [place] that... uses 'that' even for places.",
      example: "It was here that I found it.",
      commonMistake: "Using 'where'."
    },
    difficulty: 'Advanced',
    category: 'Adverbial Clauses'
  },
  {
    id: 'a14', level: 8,
    sentence: "The problem ______ at the meeting is complex.",
    options: ["being discussed", "discussed", "to be discussed", "discussing"],
    correctAnswer: "being discussed",
    explanation: {
      rule: "Present participle passive (being done) shows an action currently in progress.",
      example: "The bridge being built is long.",
      commonMistake: "Using 'discussed' (completed)."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },
  {
    id: 'a15', level: 8,
    sentence: "If it ______ for your help, I would have failed.",
    options: ["hadn't been", "wasn't", "weren't", "isn't"],
    correctAnswer: "hadn't been",
    explanation: {
      rule: "Third conditional: If it hadn't been for... (past regret).",
      example: "If it hadn't been for you, I'd be lost.",
      commonMistake: "Using 'wasn't'."
    },
    difficulty: 'Advanced',
    category: 'Subjunctive Mood'
  },
  {
    id: 'a16', level: 8,
    sentence: "The boy ______ parents died is very brave.",
    options: ["whose", "who", "whom", "which"],
    correctAnswer: "whose",
    explanation: {
      rule: "'Whose' indicates possession in relative clauses.",
      example: "The man whose house was burnt is sad.",
      commonMistake: "Using 'who'."
    },
    difficulty: 'Advanced',
    category: 'Relative Clauses'
  },
  {
    id: 'a17', level: 8,
    sentence: "I don't mind ______ for a few minutes.",
    options: ["waiting", "to wait", "wait", "waited"],
    correctAnswer: "waiting",
    explanation: {
      rule: "'Mind' is followed by a gerund (doing).",
      example: "Do you mind opening the window?",
      commonMistake: "Using 'to wait'."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },
  {
    id: 'a18', level: 8,
    sentence: "The reason ______ he gave was not convincing.",
    options: ["which", "why", "because", "that"],
    correctAnswer: "which",
    explanation: {
      rule: "When 'reason' is the object of the relative clause, use 'which' or 'that'.",
      example: "The reason which he explained was clear.",
      commonMistake: "Using 'why' blindly for 'reason'."
    },
    difficulty: 'Advanced',
    category: 'Relative Clauses'
  },
  {
    id: 'a19', level: 8,
    sentence: "______ he is, he will never succeed.",
    options: ["Rich as", "As rich", "Rich although", "Richly as"],
    correctAnswer: "Rich as",
    explanation: {
      rule: "Concessive clause with 'as': Adjective/Adverb + as + subject + verb.",
      example: "Hard as he tried, he failed.",
      commonMistake: "Using 'As rich'."
    },
    difficulty: 'Advanced',
    category: 'Adverbial Clauses'
  },
  {
    id: 'a20', level: 8,
    sentence: "I ______ my keys. I can't find them anywhere.",
    options: ["must have lost", "should have lost", "could lose", "lost"],
    correctAnswer: "must have lost",
    explanation: {
      rule: "'Must have done' expresses a strong logical deduction about the past.",
      example: "He must have arrived.",
      commonMistake: "Using 'should have lost' (regret)."
    },
    difficulty: 'Advanced',
    category: 'Tenses'
  },

  // LEVEL 9: Advanced (21-30)
  {
    id: 'a21', level: 9,
    sentence: "The house ______ of wood was destroyed by fire.",
    options: ["made", "making", "to be made", "being made"],
    correctAnswer: "made",
    explanation: {
      rule: "Past participle used as an attribute for a completed passive state.",
      example: "A table made of glass.",
      commonMistake: "Using 'making'."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },
  {
    id: 'a22', level: 9,
    sentence: "It is time that we ______ the truth.",
    options: ["told", "tell", "will tell", "have told"],
    correctAnswer: "told",
    explanation: {
      rule: "'It is time that...' uses the past simple subjunctive.",
      example: "It's time you learned.",
      commonMistake: "Using 'tell'."
    },
    difficulty: 'Advanced',
    category: 'Subjunctive Mood'
  },
  {
    id: 'a23', level: 9,
    sentence: "______ the news, she burst into tears.",
    options: ["On hearing", "Hearing", "Heard", "To hear"],
    correctAnswer: "On hearing",
    explanation: {
      rule: "'On/Upon doing' means 'as soon as' or 'at the moment of'.",
      example: "On arriving, he called me.",
      commonMistake: "Using 'Hearing' (less specific timing)."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },
  {
    id: 'a24', level: 9,
    sentence: "I ______ to the meeting, but I was too busy.",
    options: ["would have come", "should come", "came", "had come"],
    correctAnswer: "would have come",
    explanation: {
      rule: "Conditional perfect expresses an action that didn't happen in the past.",
      example: "I would have helped you.",
      commonMistake: "Using 'came'."
    },
    difficulty: 'Advanced',
    category: 'Subjunctive Mood'
  },
  {
    id: 'a25', level: 9,
    sentence: "The man ______ I was talking to is a doctor.",
    options: ["whom", "who", "which", "whose"],
    correctAnswer: "whom",
    explanation: {
      rule: "'Whom' is the object relative pronoun for people.",
      example: "The person whom I met was kind.",
      commonMistake: "Using 'who' in formal object positions."
    },
    difficulty: 'Advanced',
    category: 'Relative Clauses'
  },
  {
    id: 'a26', level: 9,
    sentence: "______ he said is true.",
    options: ["What", "That", "Which", "Whether"],
    correctAnswer: "What",
    explanation: {
      rule: "'What' acts as the subject and object within a noun clause.",
      example: "What I need is a rest.",
      commonMistake: "Using 'That'."
    },
    difficulty: 'Advanced',
    category: 'Adverbial Clauses'
  },
  {
    id: 'a27', level: 9,
    sentence: "I ______ my homework by the time you come back.",
    options: ["will have finished", "finish", "finished", "have finished"],
    correctAnswer: "will have finished",
    explanation: {
      rule: "Future perfect shows an action completed before a future point.",
      example: "I will have graduated by next year.",
      commonMistake: "Using simple present."
    },
    difficulty: 'Advanced',
    category: 'Tenses'
  },
  {
    id: 'a28', level: 9,
    sentence: "The book ______ on the desk is mine.",
    options: ["lying", "laying", "laid", "lied"],
    correctAnswer: "lying",
    explanation: {
      rule: "Present participle of 'lie' (to be in a position) is 'lying'.",
      example: "The cat is lying on the rug.",
      commonMistake: "Confusing with 'laying' (placing something)."
    },
    difficulty: 'Advanced',
    category: 'Non-finite Verbs'
  },
  {
    id: 'a29', level: 9,
    sentence: "I ______ him for ten years.",
    options: ["have known", "know", "knew", "had known"],
    correctAnswer: "have known",
    explanation: {
      rule: "Present perfect shows a state starting in the past and continuing to now.",
      example: "I have lived here for a week.",
      commonMistake: "Using 'know'."
    },
    difficulty: 'Advanced',
    category: 'Tenses'
  },
  {
    id: 'a30', level: 9,
    sentence: "______ it rain tomorrow, the match would be cancelled.",
    options: ["Should", "Were", "Had", "If"],
    correctAnswer: "Should",
    explanation: {
      rule: "Inverted first conditional (formal): Should + subject + do.",
      example: "Should you need help, call me.",
      commonMistake: "Using 'If' without correct tense matching."
    },
    difficulty: 'Advanced',
    category: 'Subjunctive Mood'
  }
];
