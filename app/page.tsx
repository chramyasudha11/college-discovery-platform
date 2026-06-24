export default function Home() {
  return (
    <div className="p-6">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold">
          College Discovery Platform
        </h1>

        <p className="text-gray-300 mt-3">
          Explore colleges, compare options, predict admissions and discuss.
        </p>
      </div>

      {/* FULL WIDTH GRID WRAPPER */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          marginTop: "40px",
          width: "100%"
        }}
      >

        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

          <div className="card">
            <h2>🔍 Search Colleges</h2>
            <p>Find colleges across India easily.</p>
          </div>

          <div className="card">
            <h2>⚖️ Compare Colleges</h2>
            <p>Compare fee, location and rating.</p>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

          <div className="card">
            <h2>📊 Predict Rank</h2>
            <p>Get college based on your rank.</p>
          </div>

          <div className="card">
            <h2>💬 Discussion</h2>
            <p>Ask and answer questions.</p>
          </div>

        </div>

      </div>
    </div>
  );
}