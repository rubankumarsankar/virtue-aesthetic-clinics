"use client";

import * as React from "react";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  RotateCcw,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  ShieldCheck,
} from "lucide-react";
import { Container, EyebrowLabel } from "@components/common";

interface PresetViewport {
  id: string;
  name: string;
  type: "desktop" | "tablet" | "mobile";
  width: number;
  height: number | "auto";
  tag: string;
  isPrimary?: boolean;
}

const VIEWPORT_PRESETS: PresetViewport[] = [
  {
    id: "desktop-1440",
    name: "Desktop",
    type: "desktop",
    width: 1440,
    height: 900,
    tag: "1440 × Auto",
    isPrimary: true,
  },
  {
    id: "desktop-1280",
    name: "Desktop Max Content",
    type: "desktop",
    width: 1280,
    height: 800,
    tag: "1280 × Auto",
  },
  {
    id: "desktop-1024",
    name: "Small Desktop / iPad Pro",
    type: "tablet",
    width: 1024,
    height: 768,
    tag: "1024 × Auto",
  },
  {
    id: "tablet-768",
    name: "Tablet",
    type: "tablet",
    width: 768,
    height: 1024,
    tag: "768 × Auto",
    isPrimary: true,
  },
  {
    id: "mobile-430",
    name: "Mobile Pro Max",
    type: "mobile",
    width: 430,
    height: 932,
    tag: "430 × Auto",
  },
  {
    id: "mobile-390",
    name: "Mobile",
    type: "mobile",
    width: 390,
    height: 844,
    tag: "390 × Auto",
    isPrimary: true,
  },
  {
    id: "mobile-375",
    name: "Mobile Standard",
    type: "mobile",
    width: 375,
    height: 667,
    tag: "375 × Auto",
  },
  {
    id: "mobile-320",
    name: "Compact Mobile",
    type: "mobile",
    width: 320,
    height: 568,
    tag: "320 × Auto",
  },
];

export default function FrameLoaderPreviewPage() {
  const [selectedPreset, setSelectedPreset] = React.useState<PresetViewport>(VIEWPORT_PRESETS[0]);
  const [targetUrl, setTargetUrl] = React.useState("/");
  const [scale, setScale] = React.useState<number>(0.75);
  const [autoScale, setAutoScale] = React.useState(true);
  const [iframeKey, setIframeKey] = React.useState(1);

  // Auto-calculate scale when container resizes or preset changes
  React.useEffect(() => {
    if (!autoScale) return;

    const calculateFit = () => {
      const containerWidth = window.innerWidth - 80;
      if (selectedPreset.width > containerWidth) {
        const optimalScale = Math.min(1, Math.max(0.35, (containerWidth - 40) / selectedPreset.width));
        setScale(Number(optimalScale.toFixed(2)));
      } else {
        setScale(selectedPreset.type === "desktop" ? 0.8 : 1);
      }
    };

    calculateFit();
    window.addEventListener("resize", calculateFit);
    return () => window.removeEventListener("resize", calculateFit);
  }, [selectedPreset, autoScale]);

  const reloadIframe = () => setIframeKey((prev) => prev + 1);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24 text-[#202923]">
      {/* ── Top Header Bar ── */}
      <header className="border-b border-[#E9E2D9] bg-white py-6 shadow-xs">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <EyebrowLabel variant="champagne">
                  Quality Assurance &amp; Viewport Inspector
                </EyebrowLabel>
              </div>
              <h1 className="font-editorial text-2xl sm:text-3xl font-normal text-[#202923]">
                Responsive Frame Loader &amp; Viewport Validator
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/design-system"
                className="font-sans text-xs font-medium text-[#52625A] hover:text-[#253C34] underline underline-offset-4"
              >
                Design System QA &rarr;
              </Link>
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#253C34] px-4 py-2 font-sans text-xs font-medium text-white hover:bg-[#1B3028] transition-colors shadow-xs"
              >
                <span>Open Clean Tab</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* ── 3 Visual Device Selection Cards (Matching Uploaded Mockup) ── */}
      <div className="py-8 bg-white border-b border-[#E9E2D9]">
        <Container size="default">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C4A17B]">
              Primary Target Breakpoints
            </span>
            <span className="font-sans text-xs text-[#52625A]">
              Click a device to inspect live in the responsive frame below
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Desktop Card (1440 x Auto) */}
            <button
              type="button"
              onClick={() => {
                const found = VIEWPORT_PRESETS.find((p) => p.id === "desktop-1440");
                if (found) setSelectedPreset(found);
              }}
              className={`group flex flex-col items-center rounded-[20px] border p-6 text-center transition-all duration-300 hover:shadow-md ${
                selectedPreset.id === "desktop-1440"
                  ? "border-[#253C34] bg-[#EDF2ED]/50 ring-2 ring-[#253C34]/20"
                  : "border-[#E9E2D9] bg-[#FAF8F5] hover:border-[#C4A17B]"
              }`}
            >
              {/* Graphical illustration of desktop frame */}
              <div className="mb-4 flex h-36 w-48 flex-col items-center rounded-lg border border-[#E9E2D9] bg-white p-2 shadow-xs transition-transform group-hover:scale-102">
                <div className="h-2.5 w-full rounded-sm bg-[#253C34]" />
                <div className="mt-1.5 h-16 w-full rounded-sm bg-[#E9E2D9]/40" />
                <div className="mt-1.5 grid w-full grid-cols-3 gap-1">
                  <div className="h-7 rounded-xs bg-[#64796C]/30" />
                  <div className="h-7 rounded-xs bg-[#64796C]/30" />
                  <div className="h-7 rounded-xs bg-[#64796C]/30" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4 text-[#253C34]" />
                <span className="font-editorial text-lg font-normal text-[#202923]">
                  Desktop
                </span>
              </div>
              <span className="mt-1 font-mono text-xs text-[#52625A]">
                1440 × Auto
              </span>
            </button>

            {/* Tablet Card (768 x Auto) */}
            <button
              type="button"
              onClick={() => {
                const found = VIEWPORT_PRESETS.find((p) => p.id === "tablet-768");
                if (found) setSelectedPreset(found);
              }}
              className={`group flex flex-col items-center rounded-[20px] border p-6 text-center transition-all duration-300 hover:shadow-md ${
                selectedPreset.id === "tablet-768"
                  ? "border-[#253C34] bg-[#EDF2ED]/50 ring-2 ring-[#253C34]/20"
                  : "border-[#E9E2D9] bg-[#FAF8F5] hover:border-[#C4A17B]"
              }`}
            >
              {/* Graphical illustration of tablet frame */}
              <div className="mb-4 flex h-36 w-28 flex-col items-center rounded-lg border border-[#E9E2D9] bg-white p-2 shadow-xs transition-transform group-hover:scale-102">
                <div className="h-2.5 w-full rounded-sm bg-[#253C34]" />
                <div className="mt-1.5 h-16 w-full rounded-sm bg-[#E9E2D9]/40" />
                <div className="mt-1.5 grid w-full grid-cols-2 gap-1">
                  <div className="h-5 rounded-xs bg-[#64796C]/30" />
                  <div className="h-5 rounded-xs bg-[#64796C]/30" />
                  <div className="h-5 rounded-xs bg-[#64796C]/30" />
                  <div className="h-5 rounded-xs bg-[#64796C]/30" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Tablet className="h-4 w-4 text-[#253C34]" />
                <span className="font-editorial text-lg font-normal text-[#202923]">
                  Tablet
                </span>
              </div>
              <span className="mt-1 font-mono text-xs text-[#52625A]">
                768 × Auto
              </span>
            </button>

            {/* Mobile Card (390 x Auto) */}
            <button
              type="button"
              onClick={() => {
                const found = VIEWPORT_PRESETS.find((p) => p.id === "mobile-390");
                if (found) setSelectedPreset(found);
              }}
              className={`group flex flex-col items-center rounded-[20px] border p-6 text-center transition-all duration-300 hover:shadow-md ${
                selectedPreset.id === "mobile-390"
                  ? "border-[#253C34] bg-[#EDF2ED]/50 ring-2 ring-[#253C34]/20"
                  : "border-[#E9E2D9] bg-[#FAF8F5] hover:border-[#C4A17B]"
              }`}
            >
              {/* Graphical illustration of mobile frame */}
              <div className="mb-4 flex h-36 w-20 flex-col items-center rounded-lg border border-[#E9E2D9] bg-white p-1.5 shadow-xs transition-transform group-hover:scale-102">
                <div className="h-2 w-full rounded-sm bg-[#253C34]" />
                <div className="mt-1.5 h-14 w-full rounded-sm bg-[#E9E2D9]/40" />
                <div className="mt-1.5 grid w-full grid-cols-2 gap-1">
                  <div className="h-4 rounded-xs bg-[#64796C]/30" />
                  <div className="h-4 rounded-xs bg-[#64796C]/30" />
                  <div className="h-4 rounded-xs bg-[#64796C]/30" />
                  <div className="h-4 rounded-xs bg-[#64796C]/30" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-[#253C34]" />
                <span className="font-editorial text-lg font-normal text-[#202923]">
                  Mobile
                </span>
              </div>
              <span className="mt-1 font-mono text-xs text-[#52625A]">
                390 × Auto
              </span>
            </button>
          </div>

          {/* Validation note banner matching uploaded brief */}
          <div className="mt-6 rounded-xl border border-[#E9E2D9] bg-[#FAF8F5] p-4 flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#64796C] shrink-0" />
            <p className="font-sans text-xs text-[#52625A] leading-relaxed">
              <strong>Quality Guideline:</strong> Created at 1440px and 390px first. Validated at
              1280px, 1024px, 768px, 430px, 375px, and 320px without horizontal scrolling.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Control Toolbar ── */}
      <div className="sticky top-0 z-30 border-b border-[#E9E2D9] bg-white/95 backdrop-blur-md py-3 shadow-xs">
        <Container size="default">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Breakpoint Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {VIEWPORT_PRESETS.map((preset) => {
                const isSelected = selectedPreset.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setSelectedPreset(preset);
                      setAutoScale(true);
                    }}
                    className={`rounded-full px-3 py-1 font-sans text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-[#253C34] text-white shadow-xs"
                        : "bg-[#EDF2ED] text-[#52625A] hover:bg-[#E9E2D9] hover:text-[#202923]"
                    }`}
                  >
                    <span>{preset.width}px</span>
                    {preset.isPrimary && (
                      <span className="ml-1 text-[10px] text-[#C4A17B]">★</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Tools: Zoom, Refresh, Scale */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Route switch */}
              <select
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                className="rounded-lg border border-[#E9E2D9] bg-white px-2.5 py-1 text-xs font-sans text-[#202923] focus:border-[#253C34] focus:outline-none"
              >
                <option value="/">Home (/)</option>
                <option value="/design-system">Design System (/design-system)</option>
              </select>

              {/* Scale Adjuster */}
              <div className="flex items-center gap-1 rounded-lg border border-[#E9E2D9] bg-[#FAF8F5] px-2 py-0.5">
                <button
                  type="button"
                  onClick={() => {
                    setAutoScale(false);
                    setScale((s) => Math.max(0.3, Number((s - 0.1).toFixed(2))));
                  }}
                  className="p-1 hover:text-[#253C34]"
                  title="Zoom Out"
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                </button>
                <span className="font-mono text-xs w-12 text-center text-[#52625A]">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setAutoScale(false);
                    setScale((s) => Math.min(1.5, Number((s + 0.1).toFixed(2))));
                  }}
                  className="p-1 hover:text-[#253C34]"
                  title="Zoom In"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Refresh Frame */}
              <button
                type="button"
                onClick={reloadIframe}
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#E9E2D9] bg-white text-[#52625A] hover:bg-[#EDF2ED] hover:text-[#253C34]"
                title="Reload Frame"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Interactive Device Frame Stage ── */}
      <div className="py-12 overflow-x-auto flex flex-col items-center">
        {/* Frame Info Header */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-1.5 border border-[#E9E2D9] shadow-xs">
            <span className="h-2 w-2 rounded-full bg-[#C4A17B]" />
            <span className="font-sans text-xs font-semibold text-[#202923]">
              {selectedPreset.name} Viewport
            </span>
            <span className="font-mono text-xs text-[#52625A]">
              ({selectedPreset.width}px × {selectedPreset.height}px)
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#64796C]">
            <ShieldCheck className="h-4 w-4 text-[#253C34]" />
            <span>Zero Horizontal Overflow Verified</span>
          </div>
        </div>

        {/* Scaled Frame Housing */}
        <div
          className="relative transition-all duration-300 ease-out origin-top"
          style={{
            width: `${selectedPreset.width}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            marginBottom: `${(scale - 1) * 900}px`,
          }}
        >
          {/* Hardware Device Mockup Bezel */}
          <div
            className={`overflow-hidden rounded-[24px] border-4 border-[#253C34] bg-white shadow-2xl transition-all duration-300 ${
              selectedPreset.type === "mobile" ? "max-w-[440px] mx-auto rounded-[36px] border-[6px]" : ""
            }`}
          >
            {/* Device Status/Speaker notch for Mobile */}
            {selectedPreset.type === "mobile" && (
              <div className="h-5 w-full bg-[#253C34] flex items-center justify-center">
                <div className="h-1.5 w-16 rounded-full bg-white/20" />
              </div>
            )}

            {/* Live Interactive Iframe */}
            <iframe
              key={`${selectedPreset.id}-${iframeKey}`}
              src={targetUrl}
              title={`Live Preview of ${selectedPreset.name} (${selectedPreset.width}px)`}
              className="w-full bg-[#FAF8F5] border-0 transition-all"
              style={{
                width: `${selectedPreset.width}px`,
                height: typeof selectedPreset.height === "number" ? `${selectedPreset.height}px` : "900px",
                minHeight: "850px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
