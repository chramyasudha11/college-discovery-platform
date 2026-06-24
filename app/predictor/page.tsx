"use client";

import { useState } from "react";
import { colleges } from "../data/colleges";

export default function PredictPage() {
  const [rank, setRank] = useState("");
  const [result, setResult] = useState<any[]>([]);

  const handlePredict = () => {
    const userRank = Number(rank);

    if (!userRank) {
      setResult([]);
      return;
    }

    // 🔥 SMART NEAR MATCH LOGIC
    const scored = colleges
      .map((college) => {
        const diff = Math.abs(college.cutoff - userRank);
        return { ...college, diff };
      })
      .sort((a, b) => a.diff - b.diff)
      .slice(0, 3); // show top 3 closest colleges

    setResult(scored);
  };

  return (
    <div className="p-6 text-white min-h-screen bg-[#0b0f19]">

      <h1 className="text-2xl font-bold">
        Predict Colleges 🎓
      </h1>

      <p className="text-gray-300 mt-2">
        Enter your rank to get nearest matching colleges
      </p>

      {/* INPUT SECTION */}
      <div className="mt-4">
        <input
          type="number"
          placeholder="Enter your rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="p-2 text-black rounded"
        />

        <button onClick={handlePredict} className="ml-3">
          Predict
        </button>
      </div>

      {/* RESULT SECTION */}
      <div className="mt-6 space-y-3">

        {result.length === 0 ? (
          <p className="text-gray-400">
            Enter rank to see predictions
          </p>
        ) : (
          result.map((c) => (
            <div key={c.name} className="card">
              <h2 className="font-bold text-lg">{c.name}</h2>
              <p>Fee: {c.fee}</p>
              <p>Location: {c.location}</p>
              <p>Rating: {c.rating}</p>
            </div>
          ))
        )}

      </div>

    </div>
  );
}