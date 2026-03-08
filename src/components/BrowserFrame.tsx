import { ReactNode } from "react";

interface BrowserFrameProps {
  url?: string;
  children: ReactNode;
}

export function BrowserFrame({ url = "https://preview.design", children }: BrowserFrameProps) {
  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl">
      {/* Chrome */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#2a2a2a] border-b border-white/10 shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[#1a1a1a] rounded-md px-4 py-1.5 text-xs text-white/40 font-mono truncate">
            {url}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
