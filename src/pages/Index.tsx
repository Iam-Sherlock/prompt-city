import { useState } from "react";
import { themes } from "@/data/themes";
import { ThemeSidebar } from "@/components/ThemeSidebar";
import { BrowserFrame } from "@/components/BrowserFrame";
import { IPhoneFrame } from "@/components/IPhoneFrame";
import { ThemePreview } from "@/components/ThemePreview";
import { PromptPanel } from "@/components/PromptPanel";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";

const Index = () => {
  const [selectedId, setSelectedId] = useState(themes[0].id);
  const [promptOpen, setPromptOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedTheme = themes.find((t) => t.id === selectedId) ?? themes[0];
  const isMobile = selectedTheme.category === "mobile";

  return (
    <div className="h-screen flex bg-[#0a0a0a] overflow-hidden">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed md:relative z-40 md:z-auto h-full w-64 shrink-0 transition-transform md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <ThemeSidebar
          selected={selectedId}
          onSelect={(id) => {
            setSelectedId(id);
            setSidebarOpen(false);
          }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col p-4 md:p-6 min-w-0">
        {/* Theme info bar */}
        <div className="flex items-center justify-between mb-4 pl-12 md:pl-0">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedTheme.accentColor }} />
            <h2 className="text-white font-semibold text-lg">{selectedTheme.name}</h2>
            {isMobile && (
              <span className="text-[10px] uppercase tracking-wider text-white/20 font-mono bg-white/5 px-2 py-0.5 rounded">Mobile</span>
            )}
          </div>
        </div>

        {/* Browser / iPhone Frame */}
        <div className="flex-1 min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {isMobile ? (
                <IPhoneFrame>
                  <ThemePreview themeId={selectedId} />
                </IPhoneFrame>
              ) : (
                <BrowserFrame url={`https://${selectedTheme.id}.design`}>
                  <ThemePreview themeId={selectedId} />
                </BrowserFrame>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prompt Panel */}
      <PromptPanel
        theme={selectedTheme}
        isOpen={promptOpen}
        onToggle={() => setPromptOpen(!promptOpen)}
      />
    </div>
  );
};

export default Index;
