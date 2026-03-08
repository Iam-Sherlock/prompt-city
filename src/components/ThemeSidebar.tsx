import { themes, ThemeConfig } from "@/data/themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ThemeSidebarProps {
  selected: string;
  onSelect: (id: string) => void;
}

export function ThemeSidebar({ selected, onSelect }: ThemeSidebarProps) {
  return (
    <div className="h-full flex flex-col bg-[#0f0f0f] border-r border-white/5">
      <div className="p-4 border-b border-white/5">
        <h1 className="text-lg font-bold text-white tracking-tight">PromptVault</h1>
        <p className="text-[11px] text-white/30 mt-0.5">21 Design System Prompts</p>
      </div>
      <div className="flex-1 overflow-auto p-2 space-y-0.5">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onSelect(theme.id)}
            className={cn(
              "w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center gap-3 group relative",
              selected === theme.id
                ? "bg-white/10 text-white"
                : "text-white/50 hover:text-white/80 hover:bg-white/5"
            )}
          >
            {selected === theme.id && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute inset-0 rounded-lg bg-white/10"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              />
            )}
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0 relative z-10"
              style={{ backgroundColor: theme.accentColor }}
            />
            <span className="text-sm truncate relative z-10">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
