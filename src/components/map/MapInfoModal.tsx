"use client";

interface MapInfoModalProps {
  onClose: () => void;
}

export function MapInfoModal({ onClose }: MapInfoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center">
      <div className="bg-[#1f1d1b] text-slate-200 p-6 rounded-md w-96 border border-slate-700">
        <div className="text-sm leading-relaxed space-y-3">
          <p>
            This is an experimental interface showing linked visual
            exploration across maps and charts. Interactions on the map and
            histograms update each other in real time.
          </p>
          <p>
            The app is built using DeckGL, Mosaic, DuckDB-WASM and GeoArrow
            for all analytical queries. All filtering happens locally in the browser with no
            backend involved.
          </p>
        </div>
        <button onClick={onClose} className="mt-5 w-full bg-[#e67f5f] text-white py-2 rounded text-sm">
          Close
        </button>
      </div>
    </div>
  );
}