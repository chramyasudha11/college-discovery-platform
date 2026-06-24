"use client";

import { useState } from "react";

const initialData = [
  {
    question: "Is IIT better than NIT?",
    answers: [
      "Yes, IIT has better opportunities.",
      "NITs are also strong in core branches.",
      "Depends on branch and rank.",
      "IIT has stronger alumni network."
    ],
  },
  {
    question: "Is VIT worth it for CSE?",
    answers: [
      "Good placements for CSE.",
      "High fees but decent ROI.",
      "Crowd is large but opportunities exist.",
      "Needs self-learning for success."
    ],
  },
  {
    question: "Which is better: private or government college?",
    answers: [
      "Government is cheaper.",
      "Private has better infrastructure sometimes.",
      "Placements depend on skills.",
      "Peer group matters a lot."
    ],
  },
  {
    question: "How important is rank?",
    answers: [
      "Very important for top colleges.",
      "Mid ranks still have many options.",
      "Branch matters too.",
      "Counselling strategy is key."
    ],
  },
  {
    question: "Is CSE the best branch?",
    answers: [
      "High job opportunities.",
      "ECE and IT also strong.",
      "Depends on interest.",
      "AI/ML is growing fast."
    ],
  },
];

export default function DiscussionPage() {
  const [questions, setQuestions] = useState(initialData);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [newQuestion, setNewQuestion] = useState("");

  const toggleAnswers = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const addQuestion = () => {
    if (!newQuestion.trim()) return;

    const newQ = {
      question: newQuestion,
      answers: [
        "Interesting question 👍",
        "Depends on situation.",
        "Students usually consider multiple factors.",
        "Needs proper counselling guidance."
      ],
    };

    setQuestions([newQ, ...questions]);
    setNewQuestion("");
  };

  return (
    <div className="p-6 text-white min-h-screen bg-[#0b0f19]">

      <h1 className="text-2xl font-bold mb-4">
        Student Discussion Forum 💬
      </h1>

      {/* ASK QUESTION BOX */}
      <div className="mb-6 flex gap-2">
        <input
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="p-2 text-black rounded w-full"
        />

        <button onClick={addQuestion}>
          Ask
        </button>
      </div>

      {/* QUESTIONS LIST */}
      <div className="space-y-4">

        {questions.map((item, index) => (
          <div key={index} className="card">

            <h2 className="font-bold text-lg">
              ❓ {item.question}
            </h2>

            <button
              onClick={() => toggleAnswers(index)}
              className="mt-2"
            >
              {openIndex === index ? "Hide Answers" : "Show Answers"}
            </button>

            {openIndex === index && (
              <div className="mt-3 space-y-2 text-gray-300">

                {item.answers.map((ans, i) => (
                  <p key={i} className="border-l-2 border-blue-500 pl-2">
                    👤 {ans}
                  </p>
                ))}

              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}