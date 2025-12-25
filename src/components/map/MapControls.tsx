"use client";

import { Flashlight, MousePointer2, Info } from "lucide-react";
import { Skeleton } from "@/components/charts/EarthquakeCharts";

interface MapControlsProps {
  dbReady: boolean;
  enableBrushing: boolean;
  setEnableBrushing: (v: boolean) => void;
  syncCharts: boolean;
  toggleSyncCharts: () => void;
  brushRadius: number;
  setBrushRadius: (v: number) => void;
  clearBrush: () => void;
  onShowInfo: () => void;
}

export function MapControls({
  dbReady,
  enableBrushing,
  setEnableBrushing,
  brushRadius,
  setBrushRadius,
  clearBrush,
  onShowInfo
}: MapControlsProps) {
  return (
    <div className="absolute top-4 right-4 z-50 flex flex-col gap-4 bg-[#1f1d1b]/90 backdrop-blur p-2 rounded-sm border-slate-700 shadow-xl w-64">
      <div className="flex gap-2 items-center">
        {!dbReady && (
          <>
            <Skeleton h={35} />
            <Skeleton h={35} />
          </>
        )}

        {dbReady && (
          <>
            <button
              onClick={clearBrush}
              className={`flex-1 flex items-center justify-center gap-2 p-2 rounded ${
                !enableBrushing ? "bg-[#e67f5f] text-white" : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <MousePointer2 size={16} />
              <span className="text-xs font-medium">View</span>
            </button>

            <button
              onClick={() => setEnableBrushing(true)}
              className={`flex-1 flex items-center justify-center gap-2 p-2 rounded ${
                enableBrushing ? "bg-[#e67f5f] text-white" : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Flashlight size={16} />
              <span className="text-xs font-medium">Brush</span>
            </button>

            <button
              onClick={onShowInfo}
              className="p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <Info size={16} />
            </button>
          </>
        )}
      </div>

      {enableBrushing && (
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-300">
            <span>Radius</span>
            <span>{(brushRadius / 1000).toFixed(0)} km</span>
          </div>
          <input
            type="range"
            min="5000"
            max="300000"
            step="5000"
            value={brushRadius}
            onChange={e => setBrushRadius(Number(e.target.value))}
            className="w-full h-1 bg-slate-700 rounded-sm cursor-pointer accent-[#e67f5f]"
          />
        </div>
      )}
    </div>
  );
}