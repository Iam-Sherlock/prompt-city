
export function Glassmorphism2Preview() {
  return (
    <div className="min-h-full bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] text-white font-sans relative overflow-hidden">
      {/* Blurred blobs */}
      <div className="absolute top-20 -left-10 w-40 h-40 bg-pink-400/40 rounded-full blur-[60px]" />
      <div className="absolute bottom-40 -right-10 w-48 h-48 bg-blue-400/30 rounded-full blur-[60px]" />

      <div className="relative z-10 px-4 pt-8 pb-6">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-mono mb-1">Glass 2.0</div>
        <h1 className="text-[22px] font-bold leading-tight">Ethereal</h1>
        <p className="text-[11px] text-white/50 mt-0.5">Next-gen glass effects</p>
      </div>

      <div className="relative z-10 px-4 space-y-3 pb-6">
        <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-lg">
          <div className="text-[13px] font-semibold mb-2">Frosted Panel</div>
          <div className="text-[11px] text-white/60 mb-3">Multi-layer glass with variable blur</div>
          <div className="grid grid-cols-3 gap-2">
            {["4px", "8px", "16px"].map((blur, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl py-3 text-center text-[10px] text-white/70">{blur}</div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30" />
            <div>
              <div className="text-[12px] font-medium">Tinted Glass</div>
              <div className="text-[10px] text-white/40">Dynamic tint adaptation</div>
            </div>
          </div>
          <div className="flex gap-2">
            {["🔵", "🟣", "🩷"].map((emoji, i) => (
              <div key={i} className="flex-1 bg-white/10 rounded-xl py-2 text-center text-[14px]">{emoji}</div>
            ))}
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
          <div className="text-[12px] font-medium mb-2">Depth Layers</div>
          <div className="space-y-2">
            {[80, 60, 40].map((w, i) => (
              <div key={i} className="h-2 bg-white/20 rounded-full" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ModernSkeuomorphismPreview() {
  return (
    <div className="min-h-full bg-[#e8e4df] text-[#2a2520] font-sans">
      <div className="px-4 pt-8 pb-3">
        <h1 className="text-[22px] font-bold" style={{ fontFamily: "Georgia, serif" }}>Tactile</h1>
        <p className="text-[11px] text-[#8a8078]">Touch-inspired interface</p>
      </div>

      <div className="px-4 space-y-3 pb-6">
        {/* Realistic toggle */}
        <div className="bg-[#d8d4cf] rounded-2xl p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,0.5)]">
          <div className="text-[12px] font-semibold mb-3">Controls</div>
          <div className="space-y-3">
            {["Notifications", "Dark Mode", "Haptics"].map((label, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-[12px]">{label}</span>
                <div className={`w-11 h-6 rounded-full ${i === 0 ? "bg-green-500" : "bg-[#c0bcb7]"} shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)] p-0.5`}>
                  <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${i === 0 ? "translate-x-5" : ""}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pressed button */}
        <div className="bg-[#d8d4cf] rounded-2xl p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,0.5)]">
          <div className="text-[12px] font-semibold mb-3">Actions</div>
          <div className="grid grid-cols-2 gap-2">
            {["Save", "Share", "Edit", "Delete"].map((btn, i) => (
              <div key={i} className={`py-3 rounded-xl text-center text-[12px] font-medium shadow-[0_3px_0_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] ${i === 0 ? "bg-[#4a90d9] text-white" : "bg-[#f0ece7]"}`}>
                {btn}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#d8d4cf] rounded-2xl p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,0.5)]">
          <div className="text-[12px] font-semibold mb-3">Volume</div>
          <div className="h-2 bg-[#c0bcb7] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
            <div className="h-full w-[60%] bg-gradient-to-r from-[#4a90d9] to-[#5da0e9] rounded-full shadow-sm" />
          </div>
          <div className="flex justify-between text-[9px] text-[#8a8078] mt-1">
            <span>🔈</span><span>🔊</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KineticTypoMobilePreview() {
  return (
    <div className="min-h-full bg-black text-white font-sans">
      <div className="px-4 pt-10 pb-6">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono mb-6">Typography in motion</div>
        <div className="space-y-1">
          <div className="text-[32px] font-black leading-none tracking-tight">MOVE</div>
          <div className="text-[32px] font-black leading-none tracking-tight text-transparent" style={{ WebkitTextStroke: "1px white" }}>WITH</div>
          <div className="text-[32px] font-black leading-none tracking-tight bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">TYPE</div>
        </div>
      </div>

      <div className="px-4 space-y-4 pb-6">
        <div className="border border-white/10 rounded-2xl p-4">
          <div className="text-[48px] font-black leading-none tracking-tighter mb-2" style={{ fontFamily: "Georgia, serif" }}>Aa</div>
          <div className="text-[11px] text-white/40 mb-3">Display / 48px / Black</div>
          <div className="h-px bg-white/10 my-3" />
          <div className="space-y-2">
            {["HEAVY", "Medium", "light"].map((w, i) => (
              <div key={i} className={`text-[14px] ${[" font-black", "font-medium", "font-light"][i]} ${i === 2 ? "text-white/40" : ""}`}>{w}</div>
            ))}
          </div>
        </div>

        <div className="border border-white/10 rounded-2xl p-4 overflow-hidden">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Marquee</div>
          <div className="text-[20px] font-bold whitespace-nowrap">
            DESIGN · MOTION · TYPE · RHYTHM · FLOW · DESIGN · MOTION ·
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-red-500 rounded-2xl p-4">
            <div className="text-[24px] font-black leading-none">Bold</div>
            <div className="text-[10px] mt-1 text-white/70">Statements</div>
          </div>
          <div className="border border-white/20 rounded-2xl p-4">
            <div className="text-[24px] font-thin leading-none">Thin</div>
            <div className="text-[10px] mt-1 text-white/40">Whispers</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DarkFirstPreview() {
  return (
    <div className="min-h-full bg-[#0c0c0c] text-white font-sans">
      <div className="px-4 pt-8 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[18px] font-bold">Noctis</div>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-mono mb-1">Dark First</div>
        <h1 className="text-[22px] font-bold leading-tight">Designed for the dark</h1>
        <p className="text-[11px] text-white/30 mt-1">Every pixel optimized for low-light</p>
      </div>

      <div className="px-4 space-y-3 pb-6">
        <div className="bg-[#161616] border border-white/[0.06] rounded-2xl p-4">
          <div className="text-[12px] font-semibold mb-3">Color Palette</div>
          <div className="flex gap-2">
            {[["#0c0c0c", "Base"], ["#161616", "Surface"], ["#222", "Raised"], ["#10b981", "Accent"]].map(([c, l], i) => (
              <div key={i} className="flex-1 text-center">
                <div className="w-full aspect-square rounded-lg mb-1 border border-white/5" style={{ backgroundColor: c }} />
                <div className="text-[8px] text-white/30">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#161616] border border-white/[0.06] rounded-2xl p-4">
          <div className="text-[12px] font-semibold mb-2">Contrast Levels</div>
          {[["High", "white", "100%"], ["Medium", "white/70", "70%"], ["Low", "white/40", "40%"], ["Subtle", "white/20", "20%"]].map(([label, , opacity], i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
              <span className="text-[11px]" style={{ opacity: parseInt(opacity as string) / 100 }}>{label as string}</span>
              <span className="text-[9px] text-white/20">{opacity as string}</span>
            </div>
          ))}
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4">
          <div className="text-[12px] font-semibold text-emerald-400 mb-1">Accent Usage</div>
          <div className="text-[11px] text-white/50">Emerald accents guide focus without overwhelming dark surfaces</div>
          <div className="mt-3 flex gap-2">
            <div className="flex-1 bg-emerald-500 rounded-xl py-2 text-center text-[11px] font-medium text-white">Primary</div>
            <div className="flex-1 bg-emerald-500/20 rounded-xl py-2 text-center text-[11px] text-emerald-400">Ghost</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HapticFirstPreview() {
  return (
    <div className="min-h-full bg-[#fafafa] text-[#1a1a1a] font-sans">
      <div className="px-4 pt-8 pb-3">
        <h1 className="text-[22px] font-bold">Haptic</h1>
        <p className="text-[11px] text-black/40">Feel every interaction</p>
      </div>

      <div className="px-4 space-y-3 pb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="text-[12px] font-semibold mb-3">Tap Feedback</div>
          <div className="grid grid-cols-3 gap-2">
            {[["Light", "○"], ["Medium", "◐"], ["Heavy", "●"]].map(([label, icon], i) => (
              <div key={i} className="bg-gray-50 rounded-xl py-4 text-center active:scale-95 transition-transform">
                <div className="text-[20px] mb-1">{icon}</div>
                <div className="text-[10px] text-black/50">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="text-[12px] font-semibold mb-3">Gesture Patterns</div>
          <div className="space-y-2">
            {[["Swipe →", "Navigate forward", "bg-blue-50 text-blue-600"], ["Long Press", "Context menu", "bg-purple-50 text-purple-600"], ["Pinch", "Zoom content", "bg-green-50 text-green-600"]].map(([gesture, desc, style], i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`px-3 py-1.5 rounded-lg text-[10px] font-medium ${style}`}>{gesture}</div>
                <span className="text-[11px] text-black/50">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="text-[12px] font-semibold mb-3">Vibration Intensity</div>
          <div className="flex items-center gap-3">
            <div className="text-[10px] text-black/30">Min</div>
            <div className="flex-1 h-2 bg-gray-100 rounded-full">
              <div className="h-full w-[70%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
            </div>
            <div className="text-[10px] text-black/30">Max</div>
          </div>
          <div className="flex gap-1 mt-3 justify-center">
            {[2, 4, 6, 8, 6, 4, 2, 4, 6, 8, 10, 8, 6].map((h, i) => (
              <div key={i} className="w-1.5 bg-blue-400 rounded-full" style={{ height: `${h * 2}px` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MicroInteractionsPreview() {
  return (
    <div className="min-h-full bg-[#0f0f12] text-white font-sans">
      <div className="px-4 pt-8 pb-4">
        <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-mono mb-1">The Pulse</div>
        <h1 className="text-[22px] font-bold">Micro-interactions</h1>
        <p className="text-[11px] text-white/30">Every detail matters</p>
      </div>

      <div className="px-4 space-y-3 pb-6">
        <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4">
          <div className="text-[12px] font-semibold mb-3">Status Indicators</div>
          <div className="space-y-3">
            {[["Online", "bg-green-500", true], ["Away", "bg-yellow-500", true], ["Busy", "bg-red-500", false]].map(([label, color, pulse], i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-3 h-3 rounded-full ${color}`} />
                  {pulse && <div className={`absolute inset-0 w-3 h-3 rounded-full ${color} animate-ping opacity-40`} />}
                </div>
                <span className="text-[12px]">{label as string}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4">
          <div className="text-[12px] font-semibold mb-3">Interaction States</div>
          <div className="space-y-2">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-[14px]">♥</div>
              <div>
                <div className="text-[11px] font-medium text-cyan-300">Like Animation</div>
                <div className="text-[9px] text-white/30">Scale + particle burst</div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[14px]">⟳</div>
              <div>
                <div className="text-[11px] font-medium">Pull to Refresh</div>
                <div className="text-[9px] text-white/30">Elastic overscroll</div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[14px]">✓</div>
              <div>
                <div className="text-[11px] font-medium">Success State</div>
                <div className="text-[9px] text-white/30">Checkmark draw + confetti</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/10 rounded-2xl p-4">
          <div className="text-[12px] font-medium text-center mb-2">Loading Skeleton</div>
          <div className="space-y-2">
            <div className="h-3 bg-white/10 rounded-full w-[80%] animate-pulse" />
            <div className="h-3 bg-white/10 rounded-full w-[60%] animate-pulse" />
            <div className="h-3 bg-white/10 rounded-full w-[70%] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpatialDesignPreview() {
  return (
    <div className="min-h-full bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white font-sans">
      <div className="px-4 pt-8 pb-3">
        <div className="text-[10px] uppercase tracking-[0.2em] text-blue-300/60 font-mono mb-1">Spatial</div>
        <h1 className="text-[22px] font-bold">Ready for depth</h1>
        <p className="text-[11px] text-white/30">Preparing for visionOS & spatial computing</p>
      </div>

      <div className="px-4 space-y-3 pb-6">
        {/* Glass window */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <div className="text-[14px] font-semibold mb-2">Window</div>
          <div className="text-[11px] text-white/50 mb-4">Spatial windows float in 3D space with natural lighting and depth</div>
          <div className="flex gap-2">
            <div className="flex-1 bg-white/10 rounded-2xl py-3 text-center text-[11px]">Tab 1</div>
            <div className="flex-1 bg-white/5 rounded-2xl py-3 text-center text-[11px] text-white/40">Tab 2</div>
          </div>
        </div>

        {/* Ornaments */}
        <div className="flex gap-3">
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
            <div className="text-[20px] mb-1">👁</div>
            <div className="text-[11px] font-medium">Eye Track</div>
            <div className="text-[9px] text-white/30 mt-0.5">Gaze input</div>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
            <div className="text-[20px] mb-1">🤏</div>
            <div className="text-[11px] font-medium">Pinch</div>
            <div className="text-[9px] text-white/30 mt-0.5">Select</div>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
            <div className="text-[20px] mb-1">🫳</div>
            <div className="text-[11px] font-medium">Drag</div>
            <div className="text-[9px] text-white/30 mt-0.5">Move</div>
          </div>
        </div>

        {/* Volume */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white/20">
          <div className="text-[12px] font-semibold mb-2">3D Object</div>
          <div className="flex items-center justify-center py-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400/30 to-purple-400/30 border border-white/20 flex items-center justify-center shadow-[0_8px_24px_rgba(59,130,246,0.2)]" style={{ transform: "perspective(200px) rotateX(5deg) rotateY(-10deg)" }}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg" />
            </div>
          </div>
          <div className="text-[10px] text-white/30 text-center">Rotate • Scale • Move in space</div>
        </div>
      </div>
    </div>
  );
}
