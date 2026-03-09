import { ReactNode } from "react";

interface IPhoneFrameProps {
  children: ReactNode;
}

export function IPhoneFrame({ children }: IPhoneFrameProps) {
  return (
    <div className="flex items-center justify-center h-full py-4">
      <div className="relative w-[320px] h-[660px] rounded-[3rem] border-[3px] border-[#2a2a2a] bg-black shadow-[0_0_60px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Titanium edge highlight */}
        <div className="absolute inset-0 rounded-[3rem] border border-white/[0.08] pointer-events-none z-30" />

        {/* Full edge-to-edge content */}
        <div className="absolute inset-0 overflow-auto scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`.scrollbar-none::-webkit-scrollbar { display: none; }`}</style>
          <div className="min-h-full">
            {children}
          </div>
        </div>

        {/* Dynamic Island — floats over content */}
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 z-20 w-[120px] h-[34px] bg-black rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.9)]">
          <div className="absolute top-1/2 -translate-y-1/2 left-[20px] w-[11px] h-[11px] rounded-full bg-[#0a0a0a] ring-1 ring-[#1a1a1a]" />
        </div>

        {/* Status Bar — floats over content */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-7 pt-[14px] pb-1 text-white">
          <span className="text-[12px] font-semibold tracking-tight">9:41</span>
          <div className="flex items-center gap-1.5">
            <div className="flex items-end gap-[2px]">
              <div className="w-[3px] h-[4px] bg-white rounded-[0.5px]" />
              <div className="w-[3px] h-[6px] bg-white rounded-[0.5px]" />
              <div className="w-[3px] h-[8px] bg-white rounded-[0.5px]" />
              <div className="w-[3px] h-[10px] bg-white/30 rounded-[0.5px]" />
            </div>
            <svg width="13" height="10" viewBox="0 0 13 10" fill="white" className="opacity-90">
              <path d="M6.5 9.5a1 1 0 100-2 1 1 0 000 2zM3.5 6.8a4.2 4.2 0 016 0l-.8.8a3 3 0 00-4.4 0l-.8-.8zM1.2 4.5a7.1 7.1 0 0110.6 0l-.8.8a5.9 5.9 0 00-9 0l-.8-.8z" />
            </svg>
            <div className="flex items-center gap-[2px]">
              <div className="w-[20px] h-[9px] rounded-[2px] border border-white/40 p-[1.5px]">
                <div className="h-full w-[70%] bg-white rounded-[1px]" />
              </div>
              <div className="w-[1.5px] h-[4px] bg-white/40 rounded-r-full" />
            </div>
          </div>
        </div>

        {/* Home Indicator — floats over content at bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
          <div className="w-[120px] h-[4px] rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}
