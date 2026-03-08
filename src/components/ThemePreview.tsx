import { TerminalPreview, NeoBrutalismPreview, CyberpunkPreview, ConstructivismPreview, SwissPreview, MinimalismPreview, BentoPreview } from "./previews/PreviewsA";
import { MonochromePreview, LuxuryPreview, OrganicPreview, VaporwavePreview, GlassmorphismPreview, NeumorphismPreview } from "./previews/PreviewsB";
import { ClaymorphismPreview, MaximalismPreview, LiquidPreview, KineticTypographyPreview, ScrapbookPreview, Y2KPreview, CorporateSaaSPreview, EcommercePreview } from "./previews/PreviewsC";

const previewMap: Record<string, () => JSX.Element> = {
  terminal: TerminalPreview,
  "neo-brutalism": NeoBrutalismPreview,
  cyberpunk: CyberpunkPreview,
  constructivism: ConstructivismPreview,
  swiss: SwissPreview,
  minimalism: MinimalismPreview,
  bento: BentoPreview,
  monochrome: MonochromePreview,
  luxury: LuxuryPreview,
  organic: OrganicPreview,
  vaporwave: VaporwavePreview,
  glassmorphism: GlassmorphismPreview,
  neumorphism: NeumorphismPreview,
  claymorphism: ClaymorphismPreview,
  maximalism: MaximalismPreview,
  liquid: LiquidPreview,
  "kinetic-typography": KineticTypographyPreview,
  scrapbook: ScrapbookPreview,
  y2k: Y2KPreview,
  "corporate-saas": CorporateSaaSPreview,
  ecommerce: EcommercePreview,
};

interface ThemePreviewProps {
  themeId: string;
}

export function ThemePreview({ themeId }: ThemePreviewProps) {
  const Preview = previewMap[themeId];
  if (!Preview) return <div className="p-8 text-white/50">Preview not available</div>;
  return <Preview />;
}
