/* Claymorphism Theme — Full Website */
export function ClaymorphismPreview() {
  return (
    <div className="min-h-full bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5">
          <span className="text-lg font-extrabold text-[#333]" style={{ fontFamily: "'Nunito', sans-serif" }}>Clay ✨</span>
          <div className="flex gap-6 text-sm text-[#666]">
            <span className="text-[#333] font-bold">Home</span>
            <span>Products</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <button className="px-5 py-2 rounded-xl text-white font-bold text-sm transition-transform hover:scale-105" style={{ background: "#ff7f7f", boxShadow: "0 4px 16px rgba(255,127,127,0.3), inset 0 -2px 4px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.4)" }}>
            Sign Up
          </button>
        </nav>

        {/* Hero */}
        <section className="py-16">
          <h1 className="text-5xl font-extrabold text-[#333] mb-5 leading-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Squishy &<br />Delightful ✨
          </h1>
          <p className="text-lg text-[#666] mb-8 max-w-md leading-relaxed">
            Playful 3D elements that feel like digital clay. Touch, squish, and interact with interfaces that bring joy to every click.
          </p>
          <div className="flex gap-3">
            <button className="px-8 py-4 rounded-2xl text-white font-bold text-lg transition-transform hover:scale-105" style={{ background: "#ff7f7f", boxShadow: "0 8px 32px rgba(255,127,127,0.3), inset 0 -4px 8px rgba(0,0,0,0.05), inset 0 4px 8px rgba(255,255,255,0.4)" }}>
              Let's Play!
            </button>
            <button className="px-8 py-4 rounded-2xl text-[#333] font-bold text-lg transition-transform hover:scale-105" style={{ background: "#f8f9fa", boxShadow: "0 4px 16px rgba(0,0,0,0.08), inset 0 -2px 4px rgba(0,0,0,0.03), inset 0 2px 4px rgba(255,255,255,0.6)" }}>
              Learn More
            </button>
          </div>
        </section>

        {/* Feature cards */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: "Create", color: "#7fdfbf", desc: "Mold ideas into tangible digital experiences with soft, rounded interfaces" },
              { title: "Shape", color: "#b19cd9", desc: "Form beautiful components with puffy edges and satisfying shadows" },
              { title: "Mold", color: "#87ceeb", desc: "Craft delightful interactions that feel real and irresistibly touchable" },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-3xl transition-transform hover:scale-105" style={{ background: card.color, boxShadow: `0 8px 32px ${card.color}44, inset 0 -4px 8px rgba(0,0,0,0.05), inset 0 4px 8px rgba(255,255,255,0.4)` }}>
                <h3 className="text-xl font-extrabold text-[#333] mb-2">{card.title}</h3>
                <p className="text-sm text-[#333]/45 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="rounded-3xl p-8 mb-16" style={{ background: "#ff7f7f", boxShadow: "0 8px 32px rgba(255,127,127,0.3), inset 0 -4px 8px rgba(0,0,0,0.05), inset 0 4px 8px rgba(255,255,255,0.3)" }}>
          <div className="grid grid-cols-4 gap-6 text-center">
            {[
              { val: "50K+", label: "Happy Users" },
              { val: "100+", label: "Components" },
              { val: "4.9★", label: "Rating" },
              { val: "0", label: "Sharp Edges" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-white">{s.val}</div>
                <div className="text-xs text-white/60 mt-1 font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16 p-8 rounded-3xl" style={{ background: "#b19cd9", boxShadow: "0 8px 32px rgba(177,156,217,0.3), inset 0 -4px 8px rgba(0,0,0,0.05), inset 0 4px 8px rgba(255,255,255,0.3)" }}>
          <p className="text-[#333]/70 leading-relaxed mb-3 font-medium">
            "Our users literally said 'I want to squish the buttons.' That's when we knew the claymorphism approach was working."
          </p>
          <div className="text-sm text-[#333]/40 font-bold">— Luna Park, Product Designer at PlayCo</div>
        </section>

        {/* CTA */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-extrabold text-[#333] mb-3" style={{ fontFamily: "'Nunito', sans-serif" }}>Ready to get squishy? ✨</h2>
          <p className="text-[#666] mb-6">Build playful interfaces your users will love.</p>
          <button className="px-10 py-4 rounded-2xl text-white font-bold text-lg transition-transform hover:scale-105" style={{ background: "#87ceeb", boxShadow: "0 8px 32px rgba(135,206,235,0.4), inset 0 -4px 8px rgba(0,0,0,0.05), inset 0 4px 8px rgba(255,255,255,0.4)" }}>
            Start Building →
          </button>
        </section>

        <footer className="border-t border-[#333]/5 py-6 flex justify-between text-xs text-[#666]/50">
          <span>© 2026 Clay Studio ✨</span>
          <div className="flex gap-4"><span>Twitter</span><span>Figma</span><span>GitHub</span></div>
        </footer>
      </div>
    </div>
  );
}

/* Tactile Maximalism Theme — Full Website */
export function MaximalismPreview() {
  return (
    <div className="min-h-full relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fef3c7, #fce7f3, #e0e7ff)" }}>
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #e11d48 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5">
          <span className="text-2xl font-black text-[#e11d48]">MAX!</span>
          <div className="flex gap-3">
            {[
              { label: "Gallery", bg: "#fef3c7", border: "#f59e0b" },
              { label: "Shop", bg: "#fce7f3", border: "#ec4899" },
              { label: "About", bg: "#e0e7ff", border: "#6366f1" },
            ].map((n) => (
              <span key={n.label} className="px-3 py-1 text-xs font-bold rounded-md border-2" style={{ background: n.bg, borderColor: n.border }}>{n.label}</span>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <section className="py-14">
          <h1 className="text-7xl font-black mb-5 leading-[0.85]">
            <span className="text-[#e11d48]">MORE</span>{" "}
            <span className="text-[#8b5cf6]" style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}>is</span>{" "}
            <span className="text-[#10b981]">MORE</span>
          </h1>
          <p className="text-lg text-[#1e293b] mb-8 max-w-md font-medium leading-relaxed">
            Layered, textured, rich. Every surface tells a story. Controlled chaos that rewards the curious eye and the bold heart.
          </p>
          <button className="bg-[#e11d48] text-white px-8 py-3 font-bold border-2 border-[#1e293b] shadow-[3px_3px_0px_#1e293b] hover:shadow-[1px_1px_0px_#1e293b] transition-all rounded-md">
            Dive In →
          </button>
        </section>

        {/* Feature cards */}
        <section className="mb-14">
          <div className="grid grid-cols-3 gap-4">
            {[
              { title: "Texture", bg: "#fef3c7", border: "#f59e0b" },
              { title: "Layers", bg: "#fce7f3", border: "#ec4899" },
              { title: "Density", bg: "#e0e7ff", border: "#6366f1" },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-lg border-2" style={{ background: card.bg, borderColor: card.border }}>
                <h3 className="text-xl font-black mb-2" style={{ color: card.border }}>{card.title}</h3>
                <p className="text-sm text-[#1e293b]/45 leading-relaxed">Rich visual details that reward exploration and create unforgettable experiences.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#1e293b] text-white p-8 rounded-lg border-2 border-[#1e293b] mb-14">
          <div className="grid grid-cols-4 gap-6 text-center">
            {[
              { val: "∞", label: "Colors", color: "#e11d48" },
              { val: "100+", label: "Textures", color: "#10b981" },
              { val: "5+", label: "Fonts/Page", color: "#8b5cf6" },
              { val: "0", label: "Boring Pixels", color: "#f59e0b" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.val}</div>
                <div className="text-xs uppercase tracking-wider text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-14 p-8 rounded-lg border-2 border-[#ec4899]" style={{ background: "#fce7f3" }}>
          <p className="text-[#1e293b] font-medium leading-relaxed mb-3">
            "They told us 'less is more.' We proved them wrong. Our maximalist rebrand increased engagement by 280%. Bold wins."
          </p>
          <div className="text-sm text-[#1e293b]/50 font-bold">— Zara Okafor, Brand Director at MaxiCo</div>
        </section>

        {/* CTA */}
        <section className="text-center py-14">
          <h2 className="text-4xl font-black mb-4">
            <span className="text-[#8b5cf6]">GO</span> <span className="text-[#e11d48]">BIG</span> <span className="text-[#10b981]">NOW</span>
          </h2>
          <p className="text-[#1e293b]/50 font-medium mb-6">Life's too short for boring design.</p>
          <button className="bg-[#8b5cf6] text-white px-10 py-4 font-bold border-2 border-[#1e293b] shadow-[4px_4px_0px_#1e293b] rounded-md text-lg">
            START MAXING →
          </button>
        </section>

        <footer className="border-t-2 border-[#1e293b]/10 py-6 flex justify-between text-xs text-[#1e293b]/30 font-bold">
          <span>© 2026 MAX! STUDIO</span>
          <div className="flex gap-4"><span>INSTA</span><span>TIKTOK</span><span>BEHANCE</span></div>
        </footer>
      </div>
    </div>
  );
}

/* Liquid / WebGL Theme — Full Website */
export function LiquidPreview() {
  return (
    <div className="min-h-full bg-[#050505] text-white relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-30 blur-[80px]" style={{ background: "radial-gradient(circle, #06b6d4, #3b82f6)" }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-[100px]" style={{ background: "radial-gradient(circle, #8b5cf6, #06b6d4)" }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between py-6 border-b border-white/5">
          <span className="font-light text-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>◉ Fluid</span>
          <div className="flex gap-6 text-sm text-white/20">
            <span className="text-white/50">Home</span>
            <span>Lab</span>
            <span>Work</span>
            <span>About</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20">
          <h1 className="text-[4.5rem] font-light mb-5 tracking-tight leading-[0.95]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">Fluid</span><br />Interfaces
          </h1>
          <p className="text-white/25 text-lg mb-10 max-w-md font-light leading-relaxed">
            Living, breathing digital surfaces. Nothing is static. Everything flows, morphs, and transforms into beauty.
          </p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white font-medium hover:opacity-80 transition-opacity">
            Experience →
          </button>
        </section>

        {/* Features */}
        <section className="mb-20">
          <div className="grid grid-cols-3 gap-4">
            {["Flow", "Morph", "Pulse"].map((title) => (
              <div key={title} className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-all">
                <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">{title}</h3>
                <p className="text-sm text-white/15 leading-relaxed">Organic motion meets digital precision in an endless dance of fluid expression.</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mb-20 border-l border-[#06b6d4]/20 pl-8">
          <h2 className="text-2xl font-light mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The philosophy</h2>
          <p className="text-white/20 leading-relaxed mb-4">We believe interfaces should feel alive — like biological organisms that respond, adapt, and breathe. Static screens are dead screens.</p>
          <p className="text-white/20 leading-relaxed">Our approach combines generative design, fluid animation, and organic motion to create experiences that feel genuinely alive.</p>
        </section>

        {/* Testimonial */}
        <section className="mb-20 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
          <p className="text-white/30 leading-relaxed mb-3 font-light">
            "It doesn't just look good — it feels alive. Users spend 3x longer on pages built with Fluid. The organic motion is mesmerizing."
          </p>
          <div className="text-xs text-white/15">— Kai Yamamoto, Creative Director at Studio Zero</div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/5">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">Experience the flow</span>
          </h2>
          <p className="text-white/15 mb-6">Let your interface breathe.</p>
          <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white font-medium hover:opacity-80 transition-opacity">
            Start Creating →
          </button>
        </section>

        <footer className="border-t border-white/5 py-6 flex justify-between text-xs text-white/10">
          <span>© 2026 Fluid Studio</span>
          <div className="flex gap-4"><span>Twitter</span><span>GitHub</span><span>Dribbble</span></div>
        </footer>
      </div>
    </div>
  );
}

/* Kinetic Typography Theme — Full Website */
export function KineticTypographyPreview() {
  return (
    <div className="min-h-full bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-6 border-b border-white/5">
          <span className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase">Type Studio</span>
          <div className="flex gap-8 text-sm text-white/15">
            <span className="text-white/40">Home</span>
            <span>Work</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20">
          <h1 className="text-[6rem] font-black leading-[0.88] tracking-tighter mb-4">WORDS</h1>
          <h1 className="text-[6rem] font-black leading-[0.88] tracking-tighter text-[#f43f5e] mb-4">MOVE</h1>
          <h1 className="text-[6rem] font-black leading-[0.88] tracking-tighter mb-8">YOU.</h1>
          <p className="text-white/15 text-lg max-w-sm leading-relaxed">
            Typography is not just read — it's experienced. Every letter is choreographed with intention and meaning.
          </p>
        </section>

        {/* Features as words */}
        <section className="mb-20">
          <div className="space-y-2">
            {[
              { word: "Design", desc: "We craft visual narratives through the power of type" },
              { word: "Motion", desc: "Letters dance, scale, rotate, and transform with purpose" },
              { word: "Impact", desc: "Words become the interface — content and container unified" },
            ].map((item) => (
              <div key={item.word} className="group cursor-pointer border-t border-white/5 py-6 flex justify-between items-center">
                <span className="text-4xl font-black text-white/10 group-hover:text-white transition-colors duration-500 tracking-tight">{item.word}</span>
                <span className="text-sm text-white/0 group-hover:text-white/30 transition-colors duration-500 max-w-xs text-right">{item.desc}</span>
              </div>
            ))}
            <div className="border-t border-white/5" />
          </div>
        </section>

        {/* Manifesto */}
        <section className="mb-20">
          <h2 className="text-5xl font-black tracking-tighter mb-6 leading-[0.9]">
            THE<br />MANI<span className="text-[#f43f5e]">—</span><br />FESTO.
          </h2>
          <p className="text-white/15 leading-relaxed max-w-md">
            We believe in the raw power of words. No images. No icons. No decoration. Just letterforms at monumental scale with choreographed motion. Typography IS the design.
          </p>
        </section>

        {/* Stats */}
        <section className="mb-20 border-t border-white/5 pt-8">
          <div className="grid grid-cols-3 gap-8">
            {[
              { val: "500+", label: "Projects" },
              { val: "12yr", label: "Craft" },
              { val: "∞", label: "Words" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-5xl font-black tracking-tighter text-white/10">{s.val}</div>
                <div className="text-xs text-white/20 uppercase tracking-wider mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 border-t border-white/5">
          <h2 className="text-5xl font-black tracking-tighter mb-4">
            LET'S<br /><span className="text-[#f43f5e]">TALK.</span>
          </h2>
          <p className="text-white/10 mb-8">Words are waiting.</p>
          <button className="text-white/30 border border-white/10 px-10 py-3 text-sm font-bold hover:text-white hover:border-white/30 transition-all">
            START A PROJECT →
          </button>
        </section>

        <footer className="border-t border-white/5 py-6 flex justify-between text-xs text-white/10">
          <span>© 2026 TYPE STUDIO</span>
          <div className="flex gap-4"><span>INSTAGRAM</span><span>BEHANCE</span><span>ARENA</span></div>
        </footer>
      </div>
    </div>
  );
}

/* Scrapbook / Collage Theme — Full Website */
export function ScrapbookPreview() {
  return (
    <div className="min-h-full" style={{ background: "#fef3c7" }}>
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5">
          <span className="text-2xl font-bold text-[#1c1917]" style={{ fontFamily: "'Caveat', cursive" }}>My Journal 📔</span>
          <div className="flex gap-3">
            {[
              { label: "Home", bg: "#fde68a", rot: "1deg" },
              { label: "Gallery", bg: "#fff", rot: "-1deg" },
              { label: "About", bg: "#bfdbfe", rot: "2deg" },
            ].map((n) => (
              <span key={n.label} className="px-3 py-1 text-sm shadow-sm" style={{ background: n.bg, transform: `rotate(${n.rot})`, fontFamily: "'Caveat', cursive" }}>{n.label}</span>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <section className="py-14 relative">
          <div className="absolute top-4 right-0 bg-[#fde68a] px-4 py-2 rotate-3 shadow-md text-sm" style={{ fontFamily: "'Caveat', cursive" }}>
            ✨ handmade with love
          </div>
          <h1 className="text-6xl font-bold text-[#1c1917] mb-5" style={{ fontFamily: "'Caveat', cursive", transform: "rotate(-2deg)" }}>
            My Creative<br />Scrapbook 📔
          </h1>
          <p className="text-lg text-[#92400e] mb-8 max-w-md leading-relaxed" style={{ fontFamily: "'Special Elite', cursive" }}>
            Nothing is perfectly aligned — and that's the beauty of it all. Every element placed by hand, with love and intention.
          </p>
          <button className="bg-[#fb7185] text-white px-8 py-3 rounded-md font-bold rotate-1 shadow-lg hover:rotate-0 transition-transform">
            ✂️ Start Creating
          </button>
        </section>

        {/* Cards */}
        <section className="mb-14">
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: "Memories", rot: "-2deg", bg: "#fff" },
              { title: "Dreams", rot: "1deg", bg: "#fde68a" },
              { title: "Ideas", rot: "-1deg", bg: "#bfdbfe" },
            ].map((card) => (
              <div key={card.title} className="p-5 shadow-lg border border-[#1c1917]/10" style={{ background: card.bg, transform: `rotate(${card.rot})` }}>
                <h3 className="text-xl font-bold text-[#1c1917] mb-2" style={{ fontFamily: "'Caveat', cursive" }}>{card.title}</h3>
                <p className="text-sm text-[#92400e] leading-relaxed" style={{ fontFamily: "'Special Elite', cursive" }}>Cut, paste, create. Make it yours. Embrace the imperfect.</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mb-14 bg-white p-8 shadow-lg" style={{ transform: "rotate(0.5deg)" }}>
          <h2 className="text-3xl font-bold text-[#1c1917] mb-4" style={{ fontFamily: "'Caveat', cursive" }}>About this place ✏️</h2>
          <p className="text-[#92400e] leading-relaxed" style={{ fontFamily: "'Special Elite', cursive" }}>
            This is a space where perfection takes a back seat to personality. Where tape is better than glue, and imperfections tell the best stories. We believe the best designs feel human.
          </p>
        </section>

        {/* Testimonial */}
        <section className="mb-14 bg-[#fde68a] p-8 shadow-lg" style={{ transform: "rotate(-1deg)" }}>
          <p className="text-[#1c1917] leading-relaxed mb-3 text-lg" style={{ fontFamily: "'Caveat', cursive" }}>
            "They made our website feel like opening a beloved scrapbook. Our users stay 4x longer than before. It's magic." ✨
          </p>
          <div className="text-sm text-[#92400e]" style={{ fontFamily: "'Special Elite', cursive" }}>— Sophie Chen, Founder at CraftHouse</div>
        </section>

        {/* CTA */}
        <section className="text-center py-14">
          <h2 className="text-4xl font-bold text-[#1c1917] mb-4" style={{ fontFamily: "'Caveat', cursive", transform: "rotate(-1deg)" }}>Ready to create? ✂️</h2>
          <p className="text-[#92400e] mb-6" style={{ fontFamily: "'Special Elite', cursive" }}>Grab your scissors and let's make something beautiful.</p>
          <button className="bg-[#fb7185] text-white px-10 py-3 rounded-md font-bold shadow-lg hover:rotate-0 rotate-1 transition-transform">
            Let's Go! ✨
          </button>
        </section>

        <footer className="border-t border-[#1c1917]/10 py-6 flex justify-between text-xs text-[#92400e]/40" style={{ fontFamily: "'Special Elite', cursive" }}>
          <span>© 2026 My Journal</span>
          <div className="flex gap-4"><span>Pinterest</span><span>Instagram</span><span>Etsy</span></div>
        </footer>
      </div>
    </div>
  );
}

/* Y2K / Retro-Modern Theme — Full Website */
export function Y2KPreview() {
  return (
    <div className="min-h-full relative overflow-hidden" style={{ background: "linear-gradient(135deg, #e0c3fc, #8ec5fc)" }}>
      <div className="absolute top-8 right-16 text-4xl">✨</div>
      <div className="absolute bottom-32 left-8 text-3xl">💿</div>
      <div className="absolute top-40 left-16 text-2xl">🌀</div>
      <div className="absolute bottom-16 right-24 text-2xl">💫</div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5">
          <span className="font-bold text-lg text-[#333]" style={{ fontFamily: "'Outfit', sans-serif" }}>✨ Y2K Studio</span>
          <div className="flex gap-3">
            {["Home", "Vibes", "Shop", "About"].map((item, i) => (
              <span key={item} className={`backdrop-blur-sm border px-4 py-1.5 rounded-full text-sm text-[#333]${i === 0 ? '/100 bg-white/40 border-white/60 font-medium' : '/50 bg-white/20 border-white/30'}`}>{item}</span>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16">
          <h1 className="text-6xl font-bold text-[#333] mb-5 leading-[1.05]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Welcome to<br />the <span style={{ background: "linear-gradient(90deg, #ff6fff, #8ec5fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Future</span> ✨
          </h1>
          <p className="text-lg text-[#333]/50 mb-8 max-w-md">
            Y2K vibes. Chrome dreams. The millennium is now. The future is shiny, bubbly, and full of possibility. 💫
          </p>
          <button className="px-8 py-3 rounded-full font-bold text-white" style={{ background: "linear-gradient(135deg, #ff6fff, #8ec5fc)", boxShadow: "0 4px 15px rgba(255,111,255,0.4)" }}>
            Enter the Future ✨
          </button>
        </section>

        {/* Cards */}
        <section className="mb-14">
          <div className="grid grid-cols-3 gap-4">
            {["Retro ✨", "Chrome 💿", "Vibes 🌀"].map((title) => (
              <div key={title} className="p-6 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/60 hover:bg-white/50 transition-all">
                <h3 className="text-lg font-bold text-[#333] mb-2">{title}</h3>
                <p className="text-sm text-[#333]/35 leading-relaxed">Optimistic futurism from the year 2000. Shiny, bubbly, and full of hope.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="rounded-3xl p-8 mb-14 text-white" style={{ background: "linear-gradient(135deg, #ff6fff, #8ec5fc)" }}>
          <div className="grid grid-cols-4 gap-6 text-center">
            {[
              { val: "Y2K", label: "Aesthetic" },
              { val: "100%", label: "Vibes" },
              { val: "∞", label: "Nostalgia" },
              { val: "💿", label: "Chrome" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold">{s.val}</div>
                <div className="text-xs text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-14 p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/60">
          <p className="text-[#333]/70 leading-relaxed mb-3">
            "They captured the exact feeling of opening a new iMac G3 in 2001 — but made it work for modern web. Our Gen Z audience loves it." ✨
          </p>
          <div className="text-sm text-[#333]/40">— Mika Torres, Brand Lead at RetroTech</div>
        </section>

        {/* CTA */}
        <section className="text-center py-14">
          <h2 className="text-3xl font-bold text-[#333] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Ready for the future? 💫</h2>
          <p className="text-[#333]/40 mb-6">The millennium bug was a myth. The millennium vibes are real.</p>
          <button className="px-10 py-3 rounded-full font-bold text-white" style={{ background: "linear-gradient(135deg, #ff6fff, #8ec5fc)", boxShadow: "0 4px 15px rgba(255,111,255,0.4)" }}>
            Let's Build ✨
          </button>
        </section>

        <footer className="border-t border-[#333]/10 py-6 flex justify-between text-xs text-[#333]/25">
          <span>© 2026 Y2K Studio ✨</span>
          <div className="flex gap-4"><span>TikTok</span><span>Instagram</span><span>Pinterest</span></div>
        </footer>
      </div>
    </div>
  );
}

/* Corporate SaaS Theme — Full Website */
export function CorporateSaaSPreview() {
  return (
    <div className="min-h-full bg-white text-[#1e293b]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-4 border-b border-[#e2e8f0]">
          <div className="font-bold text-lg">Acme<span className="text-[#3b82f6]">SaaS</span></div>
          <div className="flex gap-6 text-sm text-[#64748b]">
            <span>Features</span><span>Pricing</span><span>Docs</span><span>Blog</span>
          </div>
          <div className="flex gap-3 items-center">
            <button className="text-sm text-[#64748b]">Log in</button>
            <button className="bg-[#3b82f6] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2563eb] transition-colors">Start Free Trial</button>
          </div>
        </nav>

        {/* Hero */}
        <section className="text-center py-20">
          <div className="inline-block bg-[#eff6ff] text-[#3b82f6] text-xs font-medium px-3 py-1 rounded-full mb-5">
            ✦ Trusted by 10,000+ teams worldwide
          </div>
          <h1 className="text-5xl font-semibold mb-5 tracking-tight leading-[1.1]">
            Ship faster with<br />better tools
          </h1>
          <p className="text-lg text-[#64748b] max-w-md mx-auto mb-8 leading-relaxed">
            The all-in-one platform that helps teams build, deploy, and scale their products with confidence.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="bg-[#3b82f6] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#2563eb] transition-colors">Start Free Trial →</button>
            <button className="border border-[#e2e8f0] text-[#1e293b] px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#f8fafc] transition-colors">View Demo</button>
          </div>
        </section>

        {/* Social proof */}
        <section className="text-center mb-16">
          <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-4">Trusted by teams at</p>
          <div className="flex justify-center gap-8 text-[#94a3b8] font-medium text-sm">
            <span>Vercel</span><span>Stripe</span><span>Notion</span><span>Linear</span><span>Figma</span>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#eff6ff] text-[#3b82f6] text-xs font-medium px-3 py-1 rounded-full mb-3">Features</div>
            <h2 className="text-3xl font-semibold tracking-tight">Everything you need to scale</h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { title: "Analytics", desc: "Real-time insights with custom dashboards and automated reports" },
              { title: "Automation", desc: "Workflows that save hours daily and eliminate human error" },
              { title: "Security", desc: "Enterprise-grade SOC2 compliance and data encryption" },
              { title: "Collaboration", desc: "Real-time editing, comments, and team workspaces" },
              { title: "Integrations", desc: "Connect with 200+ tools your team already uses" },
              { title: "API Access", desc: "Full REST API with SDKs for every major language" },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#1e293b] text-white rounded-2xl p-10 mb-16">
          <div className="grid grid-cols-4 gap-8 text-center">
            {[
              { val: "10K+", label: "Teams" },
              { val: "99.9%", label: "Uptime" },
              { val: "50M+", label: "API Calls/Day" },
              { val: "4.9★", label: "G2 Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-[#3b82f6] mb-1">{s.val}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16 p-8 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
          <p className="text-[#1e293b] leading-relaxed mb-3">
            "AcmeSaaS replaced 4 different tools for us. Our engineering velocity increased by 60% in the first quarter. It just works."
          </p>
          <div className="text-sm text-[#64748b]">— Sarah Kim, VP Engineering at ScaleUp</div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-[#e2e8f0]">
          <h2 className="text-3xl font-semibold mb-3 tracking-tight">Ready to ship faster?</h2>
          <p className="text-[#64748b] mb-6">Start free. No credit card required. Cancel anytime.</p>
          <button className="bg-[#3b82f6] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2563eb] transition-colors">
            Start Your Free Trial →
          </button>
        </section>

        <footer className="border-t border-[#e2e8f0] py-6 flex justify-between text-xs text-[#94a3b8]">
          <span>© 2026 AcmeSaaS, Inc.</span>
          <div className="flex gap-4"><span>Twitter</span><span>LinkedIn</span><span>GitHub</span><span>Status</span></div>
        </footer>
      </div>
    </div>
  );
}

/* E-commerce Immersive Theme — Full Website */
export function EcommercePreview() {
  return (
    <div className="min-h-full bg-[#fafaf9] text-[#1c1917]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5 border-b border-[#e7e5e4]">
          <div className="font-bold text-lg" style={{ fontFamily: "'DM Serif Display', serif" }}>MAISON</div>
          <div className="flex gap-6 text-sm text-[#78716c]">
            <span>Shop</span><span>Collection</span><span>Lookbook</span><span>About</span>
          </div>
          <div className="flex gap-4 text-sm text-[#78716c]">
            <span>Search</span><span>Cart (2)</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16">
          <div className="bg-[#e7e5e4] rounded-2xl p-14 text-center">
            <div className="text-xs uppercase tracking-widest text-[#78716c] mb-5">New Arrivals — Spring 2026</div>
            <h1 className="text-5xl font-medium mb-5 leading-[1.1]" style={{ fontFamily: "'DM Serif Display', serif" }}>
              The Spring Edit
            </h1>
            <p className="text-[#78716c] mb-8 max-w-md mx-auto leading-relaxed">Curated pieces for the new season. Timeless quality meets contemporary design in every stitch.</p>
            <button className="bg-[#059669] text-white px-8 py-3 rounded-md font-medium hover:bg-[#047857] transition-colors">
              Shop the Collection →
            </button>
          </div>
        </section>

        {/* Product grid */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-medium" style={{ fontFamily: "'DM Serif Display', serif" }}>Featured</h2>
            <span className="text-sm text-[#78716c] cursor-pointer hover:text-[#1c1917]">View All →</span>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {[
              { name: "Linen Blazer", price: "$245" },
              { name: "Silk Scarf", price: "$89" },
              { name: "Leather Tote", price: "$380" },
              { name: "Wool Coat", price: "$520" },
            ].map((product) => (
              <div key={product.name} className="group cursor-pointer">
                <div className="bg-[#e7e5e4] rounded-xl aspect-[3/4] mb-3 flex items-center justify-center text-[#a8a29e] text-sm overflow-hidden">
                  <span className="group-hover:scale-110 transition-transform duration-500">Image</span>
                </div>
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-sm font-bold text-[#059669]">{product.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial section */}
        <section className="mb-16 grid grid-cols-2 gap-8">
          <div className="bg-[#e7e5e4] rounded-2xl aspect-square flex items-center justify-center text-[#a8a29e]">Editorial Image</div>
          <div className="flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-[#78716c] mb-4">The Maison Story</div>
            <h2 className="text-3xl font-medium mb-4 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>Crafted with care, worn with pride</h2>
            <p className="text-[#78716c] leading-relaxed mb-6">Every piece in our collection is sourced from sustainable materials and crafted by artisans who share our passion for quality.</p>
            <button className="bg-[#059669] text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-[#047857] transition-colors self-start">
              Our Story →
            </button>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16 text-center py-10 border-t border-b border-[#e7e5e4]">
          <p className="text-xl text-[#78716c] max-w-lg mx-auto leading-relaxed mb-4" style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}>
            "The quality is exceptional. I've never received so many compliments on a single piece."
          </p>
          <div className="text-xs text-[#a8a29e] uppercase tracking-wider">— Emily R., London</div>
        </section>

        {/* Newsletter */}
        <section className="text-center py-14">
          <h2 className="text-2xl font-medium mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>Join the Maison</h2>
          <p className="text-[#78716c] mb-6 text-sm">Early access to new collections and exclusive offers.</p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 border border-[#e7e5e4] rounded-md px-4 py-2.5 text-sm" />
            <button className="bg-[#059669] text-white px-5 py-2.5 rounded-md font-medium text-sm hover:bg-[#047857] transition-colors">Subscribe</button>
          </div>
        </section>

        <footer className="border-t border-[#e7e5e4] py-6 flex justify-between text-xs text-[#a8a29e]">
          <span>© 2026 MAISON</span>
          <div className="flex gap-4"><span>Instagram</span><span>Pinterest</span><span>TikTok</span></div>
        </footer>
      </div>
    </div>
  );
}
