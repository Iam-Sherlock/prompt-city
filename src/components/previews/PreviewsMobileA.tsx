
export function AINativePreview() {
  return (
    <div className="min-h-full bg-[#0a0a0a] text-white font-sans">
      {/* Chat-like hero */}
      <div className="px-4 pt-8 pb-4">
        <div className="text-[10px] uppercase tracking-[0.2em] text-purple-400 font-mono mb-2">AI Assistant</div>
        <h1 className="text-[22px] font-bold leading-tight mb-1">What would you like to create?</h1>
        <p className="text-[11px] text-white/40">Generative UI adapts to your intent</p>
      </div>

      {/* Generated cards */}
      <div className="px-4 space-y-3 pb-4">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/20 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-[10px]">✨</div>
            <span className="text-[11px] font-medium text-purple-300">Generated for you</span>
          </div>
          <div className="text-[13px] font-semibold mb-1">Weekly Summary</div>
          <div className="text-[11px] text-white/50 mb-3">Your productivity is up 23% this week</div>
          <div className="flex gap-2">
            <div className="h-8 flex-1 bg-white/5 rounded-lg flex items-center justify-center text-[10px] text-white/30">Tasks: 12</div>
            <div className="h-8 flex-1 bg-white/5 rounded-lg flex items-center justify-center text-[10px] text-white/30">Focus: 4h</div>
            <div className="h-8 flex-1 bg-white/5 rounded-lg flex items-center justify-center text-[10px] text-white/30">Streak: 7d</div>
          </div>
        </div>

        <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4">
          <div className="text-[13px] font-semibold mb-2">Suggested Actions</div>
          {["Review design feedback", "Schedule team sync", "Update project status"].map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/[0.04] last:border-0">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500/40 to-blue-500/40 shrink-0" />
              <span className="text-[12px] text-white/70">{item}</span>
              <div className="ml-auto text-[10px] text-purple-400">→</div>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4">
          <div className="text-[13px] font-semibold mb-2">Live Context</div>
          <div className="flex gap-2">
            {["📍 Office", "☀️ Clear", "📅 3 meetings"].map((tag, i) => (
              <div key={i} className="bg-white/[0.06] rounded-full px-2.5 py-1 text-[10px] text-white/50">{tag}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="sticky bottom-0 px-4 pb-4 pt-2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent">
        <div className="flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-2xl px-4 py-3">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shrink-0" />
          <span className="text-[12px] text-white/30">Ask anything...</span>
        </div>
      </div>
    </div>
  );
}

export function PredictiveNavPreview() {
  return (
    <div className="min-h-full bg-[#f8f8f8] text-[#1a1a1a] font-sans">
      <div className="px-4 pt-8 pb-4">
        <div className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-mono mb-1">Good morning</div>
        <h1 className="text-[24px] font-bold leading-tight">Sarah</h1>
      </div>

      {/* Predictive cards */}
      <div className="px-4 space-y-3">
        <div className="bg-blue-500 text-white rounded-2xl p-4 shadow-lg shadow-blue-500/20">
          <div className="text-[10px] uppercase tracking-wider opacity-70 mb-1">Next up • 2 min</div>
          <div className="text-[15px] font-semibold mb-1">Team standup</div>
          <div className="text-[11px] opacity-70">Zoom • 9:30 AM</div>
          <div className="flex gap-2 mt-3">
            <div className="bg-white/20 rounded-xl px-3 py-1.5 text-[11px] font-medium">Join</div>
            <div className="bg-white/10 rounded-xl px-3 py-1.5 text-[11px]">Snooze</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="text-[10px] uppercase tracking-wider text-orange-500 mb-1">Predicted</div>
          <div className="text-[13px] font-semibold mb-1">Your commute</div>
          <div className="text-[11px] text-black/50">22 min via transit • Leave by 9:05</div>
          <div className="mt-3 h-[40px] bg-gradient-to-r from-blue-100 to-green-100 rounded-lg" />
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="text-[10px] uppercase tracking-wider text-green-500 mb-1">For you</div>
          <div className="text-[13px] font-semibold mb-1">Quick Actions</div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {["☕ Order", "🎵 Play", "💬 Reply"].map((a, i) => (
              <div key={i} className="bg-gray-50 rounded-xl py-3 text-center text-[11px]">{a}</div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="text-[10px] text-black/40 mb-2">Based on your patterns</div>
          {["Open Spotify", "Check email", "Review PRs"].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-black/5 last:border-0">
              <span className="text-[12px]">{item}</span>
              <span className="text-[10px] text-blue-500">{["93%", "87%", "82%"][i]} likely</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="sticky bottom-0 mt-4 bg-white/90 backdrop-blur-xl border-t border-black/5 flex justify-around py-3">
        {["Home", "Search", "Profile"].map((t, i) => (
          <div key={i} className={`text-[10px] ${i === 0 ? "text-blue-500 font-medium" : "text-black/30"}`}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export function HyperPersonalizedPreview() {
  return (
    <div className="min-h-full bg-gradient-to-b from-[#1a0a2e] to-[#0f0f1a] text-white font-sans">
      <div className="px-4 pt-8 pb-3">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-violet-600" />
          <div>
            <div className="text-[13px] font-semibold">Welcome back</div>
            <div className="text-[10px] text-white/40">Mood: Focused • Energy: High</div>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-3">
        {/* Adaptive hero */}
        <div className="bg-gradient-to-br from-violet-600/30 to-pink-600/20 border border-violet-500/20 rounded-2xl p-4">
          <div className="text-[10px] text-violet-300 font-mono uppercase tracking-wider mb-1">Adapted for you</div>
          <div className="text-[16px] font-bold mb-1">Deep Work Mode</div>
          <div className="text-[11px] text-white/50 mb-3">Your focus peaks between 9-11 AM</div>
          <div className="flex gap-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flex-1 h-6 rounded ${i >= 2 && i <= 4 ? "bg-violet-500/60" : "bg-white/[0.06]"}`} />
            ))}
          </div>
          <div className="flex justify-between text-[9px] text-white/20 mt-1">
            <span>8AM</span><span>4PM</span>
          </div>
        </div>

        {/* Personalized feed */}
        <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4">
          <div className="text-[12px] font-semibold mb-3">Your Feed</div>
          {["Design Systems Weekly", "React 19 Deep Dive", "Color Theory Basics"].map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/[0.04] last:border-0">
              <div className={`w-8 h-8 rounded-lg ${["bg-pink-500/20", "bg-blue-500/20", "bg-amber-500/20"][i]}`} />
              <div className="flex-1">
                <div className="text-[11px] font-medium">{item}</div>
                <div className="text-[9px] text-white/30">{["98%", "94%", "91%"][i]} match</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4">
          <div className="text-[12px] font-semibold mb-2">Adaptive Theme</div>
          <div className="flex gap-2">
            {[["🌙", "Dark", true], ["☀️", "Light", false], ["🎨", "Auto", false]].map(([emoji, label, active], i) => (
              <div key={i} className={`flex-1 text-center py-2 rounded-xl text-[11px] ${active ? "bg-violet-500/30 border border-violet-500/30" : "bg-white/[0.04]"}`}>
                <div>{emoji as string}</div>
                <div className="mt-0.5">{label as string}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BentoMobilePreview() {
  return (
    <div className="min-h-full bg-[#f5f5f5] text-[#1a1a1a] font-sans">
      <div className="px-4 pt-8 pb-3">
        <h1 className="text-[22px] font-bold">Dashboard</h1>
        <p className="text-[11px] text-black/40">Your daily overview</p>
      </div>

      <div className="px-4 pb-6">
        <div className="grid grid-cols-2 gap-2.5">
          {/* Large card */}
          <div className="col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-4 shadow-lg shadow-blue-500/20">
            <div className="text-[10px] uppercase tracking-wider opacity-70">Revenue</div>
            <div className="text-[28px] font-bold mt-1">$12.4k</div>
            <div className="text-[11px] opacity-70 mt-0.5">↑ 24% from last week</div>
            <div className="flex gap-1 mt-3">
              {[40, 55, 35, 70, 60, 80, 65].map((h, i) => (
                <div key={i} className="flex-1 bg-white/20 rounded-full" style={{ height: `${h * 0.4}px` }} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-black/5">
            <div className="text-[10px] text-black/40">Users</div>
            <div className="text-[20px] font-bold mt-1">2.4k</div>
            <div className="text-[10px] text-green-500">+12%</div>
          </div>

          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-black/5">
            <div className="text-[10px] text-black/40">Orders</div>
            <div className="text-[20px] font-bold mt-1">384</div>
            <div className="text-[10px] text-green-500">+8%</div>
          </div>

          <div className="col-span-2 bg-white rounded-2xl p-4 shadow-sm border border-black/5">
            <div className="text-[12px] font-semibold mb-2">Recent Activity</div>
            {["New signup — Jane D.", "Order #4821 shipped", "Review posted — ★★★★★"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 py-2 border-b border-black/5 last:border-0">
                <div className={`w-6 h-6 rounded-full ${["bg-blue-100", "bg-green-100", "bg-amber-100"][i]}`} />
                <span className="text-[11px] text-black/60">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#1a1a1a] text-white rounded-2xl p-3.5">
            <div className="text-[10px] text-white/40">Tasks</div>
            <div className="text-[18px] font-bold mt-1">7/12</div>
            <div className="mt-2 h-1.5 bg-white/10 rounded-full"><div className="h-full w-[58%] bg-blue-400 rounded-full" /></div>
          </div>

          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-black/5">
            <div className="text-[10px] text-black/40">Rating</div>
            <div className="text-[18px] font-bold mt-1">4.8</div>
            <div className="text-[10px] text-amber-500">★★★★★</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BottomHeavyPreview() {
  return (
    <div className="min-h-full bg-white text-[#1a1a1a] font-sans flex flex-col">
      {/* Minimal top */}
      <div className="px-4 pt-8 pb-2">
        <div className="text-[10px] text-black/30 text-center">Tuesday, March 8</div>
      </div>

      {/* Spacious content area */}
      <div className="flex-1 px-4 flex flex-col justify-end pb-4">
        <div className="space-y-3">
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="text-[14px] font-semibold mb-1">Today's Focus</div>
            <div className="text-[11px] text-black/50">3 tasks remaining</div>
            <div className="mt-3 space-y-2">
              {["Ship landing page", "Review PR #42", "Update docs"].map((task, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full border-2 ${i === 0 ? "bg-blue-500 border-blue-500" : "border-gray-300"}`} />
                  <span className={`text-[12px] ${i === 0 ? "line-through text-black/30" : ""}`}>{task}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-semibold">Quick Notes</span>
              <span className="text-[10px] text-blue-500">+</span>
            </div>
            <div className="text-[11px] text-black/50">Remember to update the color tokens before the demo...</div>
          </div>
        </div>
      </div>

      {/* Heavy bottom section */}
      <div className="bg-[#1a1a1a] rounded-t-3xl px-4 pt-5 pb-6">
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[["📝", "Note"], ["📸", "Snap"], ["🎤", "Voice"], ["📎", "File"]].map(([icon, label], i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-[18px] mb-1">{icon}</div>
              <div className="text-[9px] text-white/50">{label}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3">
          <span className="text-[12px] text-white/30 flex-1">Type or ask anything...</span>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[12px]">↑</div>
        </div>
      </div>
    </div>
  );
}

export function DynamicIslandPreview() {
  return (
    <div className="min-h-full bg-[#000000] text-white font-sans">
      {/* Expanded dynamic island area */}
      <div className="px-4 pt-6 pb-4">
        <div className="bg-[#1c1c1e] rounded-[24px] p-4 mx-auto max-w-[260px]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600" />
            <div className="flex-1">
              <div className="text-[11px] font-medium">Now Playing</div>
              <div className="text-[10px] text-white/40">Arctic Monkeys — 505</div>
            </div>
            <div className="flex gap-1.5">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[8px]">⏮</div>
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[8px]">⏸</div>
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[8px]">⏭</div>
            </div>
          </div>
          <div className="h-1 bg-white/10 rounded-full"><div className="h-full w-[65%] bg-green-400 rounded-full" /></div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 space-y-3">
        <div className="text-[20px] font-bold">Explore</div>

        {/* Live activities */}
        <div className="bg-[#1c1c1e] rounded-2xl p-4">
          <div className="text-[10px] uppercase tracking-wider text-orange-400 mb-2">Live Activities</div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-[16px]">🍕</div>
              <div className="flex-1">
                <div className="text-[12px] font-medium">Food Delivery</div>
                <div className="text-[10px] text-white/40">Arriving in 8 min</div>
              </div>
              <div className="text-[10px] text-orange-400">Track →</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-[16px]">✈️</div>
              <div className="flex-1">
                <div className="text-[12px] font-medium">Flight AA 1234</div>
                <div className="text-[10px] text-white/40">Boards in 2h 15m</div>
              </div>
              <div className="text-[10px] text-blue-400">Details →</div>
            </div>
          </div>
        </div>

        <div className="bg-[#1c1c1e] rounded-2xl p-4">
          <div className="text-[10px] uppercase tracking-wider text-green-400 mb-2">Widgets</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.04] rounded-xl p-3">
              <div className="text-[10px] text-white/40">Steps</div>
              <div className="text-[16px] font-bold">8,421</div>
              <div className="text-[9px] text-green-400">Goal: 10k</div>
            </div>
            <div className="bg-white/[0.04] rounded-xl p-3">
              <div className="text-[10px] text-white/40">Weather</div>
              <div className="text-[16px] font-bold">72°</div>
              <div className="text-[9px] text-blue-400">Sunny</div>
            </div>
          </div>
        </div>

        <div className="bg-[#1c1c1e] rounded-2xl p-4">
          <div className="text-[12px] font-medium mb-2">Quick Actions</div>
          <div className="flex gap-2">
            {["Timer", "Wallet", "Home"].map((a, i) => (
              <div key={i} className="flex-1 bg-white/[0.06] rounded-xl py-2.5 text-center text-[11px] text-white/60">{a}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LayeredDepthPreview() {
  return (
    <div className="min-h-full bg-[#f0f0f5] text-[#1a1a1a] font-sans">
      <div className="px-4 pt-8 pb-3">
        <h1 className="text-[22px] font-bold">Discover</h1>
        <p className="text-[11px] text-black/40">Layered depth design</p>
      </div>

      <div className="px-4 pb-6 space-y-4">
        {/* Stacked cards with Z-depth */}
        <div className="relative h-[160px]">
          <div className="absolute inset-x-4 top-0 h-[140px] bg-white/50 rounded-2xl shadow-sm" />
          <div className="absolute inset-x-2 top-2 h-[140px] bg-white/70 rounded-2xl shadow-sm" />
          <div className="absolute inset-x-0 top-4 h-[140px] bg-white rounded-2xl shadow-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30" />
              <div>
                <div className="text-[13px] font-semibold">Featured</div>
                <div className="text-[10px] text-black/40">Design Collection</div>
              </div>
            </div>
            <div className="text-[11px] text-black/50">Explore the latest trends in spatial design with layered depth and Z-axis interactions.</div>
          </div>
        </div>

        {/* Elevated cards */}
        <div className="space-y-3">
          {[
            { title: "Parallax Layers", desc: "Motion depth effects", color: "from-blue-500 to-cyan-500", shadow: "shadow-blue-500/20" },
            { title: "Floating Cards", desc: "Elevated surfaces", color: "from-violet-500 to-purple-500", shadow: "shadow-violet-500/20" },
            { title: "Backdrop Blur", desc: "Glass layer effects", color: "from-pink-500 to-rose-500", shadow: "shadow-pink-500/20" },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-md flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} shadow-lg ${card.shadow} shrink-0`} />
              <div>
                <div className="text-[13px] font-semibold">{card.title}</div>
                <div className="text-[10px] text-black/40">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Depth demo */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-[12px] font-semibold mb-2">Z-Axis Layers</div>
          <div className="relative h-[80px]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="absolute rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200/50"
                style={{ left: `${i * 15}px`, top: `${i * 10}px`, right: `${(2 - i) * 15}px`, bottom: `${(2 - i) * 10}px`, zIndex: i }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
