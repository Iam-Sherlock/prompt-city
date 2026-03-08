import { useState } from "react";
import { ThemeConfig } from "@/data/themes";
import { Copy, Check, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PromptPanelProps {
  theme: ThemeConfig;
  isOpen: boolean;
  onToggle: () => void;
}

export function PromptPanel({ theme, isOpen, onToggle }: PromptPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(theme.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all text-sm"
        >
          <Code2 className="w-4 h-4" />
          <span className="hidden sm:inline">View Prompt</span>
        </button>
      )}

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-lg bg-[#111]/95 backdrop-blur-xl border-l border-white/10 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div>
                <h3 className="text-white font-semibold text-lg">{theme.name}</h3>
                <p className="text-white/50 text-sm mt-1">{theme.description}</p>
              </div>
              <button onClick={onToggle} className="text-white/50 hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/40 text-xs uppercase tracking-wider font-medium">Prompt</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 text-white/70 hover:text-white transition-all text-xs"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <pre className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap font-mono bg-white/5 rounded-lg p-4 border border-white/5">
                {theme.prompt}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
