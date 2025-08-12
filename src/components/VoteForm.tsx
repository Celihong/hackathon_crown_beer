"use client";
import { useState } from "react";

// Replace with the real target submission URL (Google Form action or API endpoint)
const VOTE_SUBMIT_URL = process.env.NEXT_PUBLIC_VOTE_URL || "";

export default function VoteForm({
  beerId,
  beerName,
}: {
  beerId: string;
  beerName: string;
}) {
  const [taste, setTaste] = useState(5);
  const [appearance, setAppearance] = useState(5);
  const [aroma, setAroma] = useState(5);
  const [overall, setOverall] = useState(5);
  const [notes, setNotes] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    // payload — adapt to your backend / Google Form fields
    const payload = {
      beerId,
      beerName,
      taste,
      appearance,
      aroma,
      overall,
      notes,
      submittedAt: new Date().toISOString(),
    };

    try {
      if (VOTE_SUBMIT_URL) {
        await fetch(VOTE_SUBMIT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        // fallback: save to localStorage so operator can export later
        const stash = JSON.parse(localStorage.getItem("ccb_votes") || "[]");
        stash.push(payload);
        localStorage.setItem("ccb_votes", JSON.stringify(stash));
      }
      setDone(true);
    } catch (err) {
      console.error(err);
      alert(
        "Could not submit vote. If the network is down, the vote was saved locally."
      );
      const stash = JSON.parse(localStorage.getItem("ccb_votes") || "[]");
      stash.push(payload);
      localStorage.setItem("ccb_votes", JSON.stringify(stash));
      setDone(true);
    } finally {
      setSending(false);
    }
  }

  if (done)
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded">
        Thanks! Your vote for <strong>{beerName}</strong> is recorded.
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm">Taste (1-10)</label>
        <input
          type="range"
          min={1}
          max={10}
          value={taste}
          onChange={(e) => setTaste(Number(e.target.value))}
        />
        <div className="text-sm">{taste}</div>
      </div>
      <div>
        <label className="block text-sm">Appearance (1-10)</label>
        <input
          type="range"
          min={1}
          max={10}
          value={appearance}
          onChange={(e) => setAppearance(Number(e.target.value))}
        />
        <div className="text-sm">{appearance}</div>
      </div>
      <div>
        <label className="block text-sm">Aroma (1-10)</label>
        <input
          type="range"
          min={1}
          max={10}
          value={aroma}
          onChange={(e) => setAroma(Number(e.target.value))}
        />
        <div className="text-sm">{aroma}</div>
      </div>
      <div>
        <label className="block text-sm">Overall (1-10)</label>
        <input
          type="range"
          min={1}
          max={10}
          value={overall}
          onChange={(e) => setOverall(Number(e.target.value))}
        />
        <div className="text-sm">{overall}</div>
      </div>
      <div>
        <label className="block text-sm">Notes (optional)</label>
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={sending}
          className="w-full bg-black text-white py-2 rounded"
        >
          {sending ? "Sending..." : "Submit vote"}
        </button>
      </div>
    </form>
  );
}
