"use client";

import { useState } from "react";
import { colleges } from "../data/colleges";

export default function ComparePage() {
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [result, setResult] = useState<any>(null);

  const compare = () => {
    const col1 = colleges.find((c) => c.name === c1);
    const col2 = colleges.find((c) => c.name === c2);

    setResult({ col1, col2 });
  };

  return (
    <div className="p-6 text-white min-h-screen bg-[#0b0f19]">

      <h1 className="text-2xl font-bold mb-4">
        Compare Colleges ⚖️
      </h1>

      {/* DROPDOWNS */}
      <div className="flex gap-4">

        {/* COLLEGE 1 */}
        <select
          onChange={(e) => setC1(e.target.value)}
          className="p-2 text-black rounded"
        >
          <option value="">Select College 1</option>
          {colleges.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        {/* COLLEGE 2 */}
        <select
          onChange={(e) => setC2(e.target.value)}
          className="p-2 text-black rounded"
        >
          <option value="">Select College 2</option>
          {colleges.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <button onClick={compare}>
          Compare
        </button>

      </div>

      {/* RESULT */}
      {result?.col1 && result?.col2 && (
        <div className="grid grid-cols-2 gap-6 mt-8">

          <div className="card">
            <h2 className="font-bold text-lg">{result.col1.name}</h2>
            <p>Fee: {result.col1.fee}</p>
            <p>Location: {result.col1.location}</p>
            <p>Rating: {result.col1.rating}</p>
          </div>

          <div className="card">
            <h2 className="font-bold text-lg">{result.col2.name}</h2>
            <p>Fee: {result.col2.fee}</p>
            <p>Location: {result.col2.location}</p>
            <p>Rating: {result.col2.rating}</p>
          </div>

        </div>
      )}

    </div>
  );
}