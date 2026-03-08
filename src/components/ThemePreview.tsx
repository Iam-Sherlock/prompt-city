import { TerminalPreview, NeoBrutalismPreview, CyberpunkPreview, ConstructivismPreview, SwissPreview, MinimalismPreview, BentoPreview } from "./previews/PreviewsA";
import { MonochromePreview, LuxuryPreview, OrganicPreview, VaporwavePreview, GlassmorphismPreview, NeumorphismPreview } from "./previews/PreviewsB";
import { ClaymorphismPreview, MaximalismPreview, LiquidPreview, KineticTypographyPreview, ScrapbookPreview, Y2KPreview, CorporateSaaSPreview, EcommercePreview } from "./previews/PreviewsC";
import { AINativePreview, PredictiveNavPreview, HyperPersonalizedPreview, BentoMobilePreview, BottomHeavyPreview, DynamicIslandPreview, LayeredDepthPreview } from "./previews/PreviewsMobileA";
import { Glassmorphism2Preview, ModernSkeuomorphismPreview, KineticTypoMobilePreview, DarkFirstPreview, HapticFirstPreview, MicroInteractionsPreview, SpatialDesignPreview } from "./previews/PreviewsMobileB";

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
  // Mobile
  "ai-native": AINativePreview,
  "predictive-nav": PredictiveNavPreview,
  "hyper-personalized": HyperPersonalizedPreview,
  "bento-mobile": BentoMobilePreview,
  "bottom-heavy": BottomHeavyPreview,
  "dynamic-island": DynamicIslandPreview,
  "layered-depth": LayeredDepthPreview,
  "glassmorphism-2": Glassmorphism2Preview,
  "modern-skeuomorphism": ModernSkeuomorphismPreview,
  "kinetic-typo-mobile": KineticTypoMobilePreview,
  "dark-first": DarkFirstPreview,
  "haptic-first": HapticFirstPreview,
  "micro-interactions": MicroInteractionsPreview,
  "spatial-design": SpatialDesignPreview,
};

interface ThemePreviewProps {
  themeId: string;
}

export function ThemePreview({ themeId }: ThemePreviewProps) {
  const Preview = previewMap[themeId];
  if (!Preview) return <div className="p-8 text-white/50">Preview not available</div>;
  return <Preview />;
}
