"use client";

import React, { useMemo, useState } from "react";
import {
  Sparkles,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  ArrowDown,
  FileText,
  Phone,
  Calendar,
  Truck,
  AlarmClockOff,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

type IntentKey = "quote" | "schedule" | "fleet" | "emergency";

type CtaItem = {
  href: string;
  text: string;
  icon: React.ReactNode;
  variant: "primary" | "ghost";
};

function pillClasses(variant: CtaItem["variant"]) {
  if (variant === "primary") {
    return "inline-flex items-center gap-2 h-9 px-3 rounded-md bg-white text-slate-900 hover:bg-white/90 text-[13px] font-medium font-sans";
  }
  return "inline-flex items-center gap-2 h-9 px-3 rounded-md border border-white/20 text-white hover:bg-white/10 text-[13px] font-sans";
}

function intentPillBase(active: boolean) {
  const base =
    "intent-pill inline-flex items-center gap-1.5 border px-3 py-1.5 transition font-geist text-xs rounded-xl border-white/20 hover:bg-white/20";
  return active ? `${base} bg-white text-slate-900` : `${base} bg-white/10 text-white`;
}

function scrollToId(href: string) {
  if (!href.startsWith("#")) return false;
  const el = document.querySelector(href);
  if (!el) return true;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export default function HelpBanner() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeIntent, setActiveIntent] = useState<IntentKey | null>(null);

  // ✅ Use environment variable with fallback
  const PHONE = process.env.NEXT_PUBLIC_PHONE || "+1-800-555-0134"; // display
  const PHONE_TEL = PHONE.replace(/[^0-9+]/g, ""); // tel: format (remove dashes, spaces, etc.)

  const CTAS: Record<IntentKey, CtaItem[]> = useMemo(
    () => ({
      quote: [
        { href: "/contact", text: "Contact Us for Quote", icon: <FileText className="w-4 h-4" />, variant: "ghost" },
        { href: `tel:${PHONE_TEL}`, text: "Call for a Quote", icon: <Phone className="w-4 h-4" />, variant: "primary" },
      ],
      schedule: [
        { href: "/contact", text: "Contact to Schedule", icon: <Calendar className="w-4 h-4" />, variant: "ghost" },
        { href: `tel:${PHONE_TEL}`, text: "Call to Schedule", icon: <Phone className="w-4 h-4" />, variant: "primary" },
      ],
      fleet: [
        { href: "/fleet-detailing", text: "Fleet Detailing page", icon: <Truck className="w-4 h-4" />, variant: "ghost" },
        { href: `tel:${PHONE_TEL}`, text: "Call Fleet Team", icon: <Phone className="w-4 h-4" />, variant: "primary" },
      ],
      emergency: [
        { href: `tel:${PHONE_TEL}`, text: "Call Emergency Detail", icon: <AlarmClockOff className="w-4 h-4" />, variant: "primary" },
        { href: "/contact", text: "Request urgent callback", icon: <MessageSquare className="w-4 h-4" />, variant: "ghost" },
        { href: "/services/packages", text: "See all packages", icon: <ArrowRight className="w-4 h-4" />, variant: "ghost" },
      ],
    }),
    [PHONE_TEL]
  );

  const currentCtas = activeIntent ? CTAS[activeIntent] : null;

  return (
    <div
      id="helpBanner"
      className="xl:py-4 bg-gradient-to-r border-b pt-4 pb-4 text-xs rounded-xl text-white from-slate-900 to-slate-800 border-slate-700"
    >
      <div
        id="bannerContainer"
        className={`sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto relative text-xs rounded-xl ${
          collapsed ? "py-2" : "pt-3 pr-4 pb-3 pl-4 sm:py-4"
        }`}
      >
        <button
          id="bannerToggle"
          aria-expanded={!collapsed}
          aria-controls="headerRow chipsMobile chipsDesktop intentCtas"
          title={collapsed ? "Expand" : "Collapse"}
          onClick={() => setCollapsed((v) => !v)}
          className="inline-flex transition xl:top-22 xl:right-8 w-7 h-7 border absolute top-2 right-3 items-center justify-center text-xs rounded-xl hover:bg-white/10 text-white border-white/20"
        >
          {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          <span className="sr-only">{collapsed ? "Expand banner" : "Collapse banner"}</span>
        </button>

        {!collapsed && (
          <div id="headerRow" className="flex gap-4 pb-3 items-start justify-between text-xs rounded-xl">
          <div className="flex items-center gap-3 text-xs rounded-xl">
            <div className="grid place-items-center w-10 h-10 ring-1 rounded-xl bg-white/10 ring-white/10">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="min-w-0 text-xs rounded-xl">
              <h3 className="sm:text-2xl tracking-tight font-geist font-semibold text-white/95">
                How can we help today?
              </h3>
              {!collapsed && (
                <p className="sm:text-sm font-geist text-white/70">
                  Choose an option to see quick actions and get help faster.
                </p>
              )}
            </div>
          </div>

          <div className="hidden sm:flex items-center text-white/70 text-xs">
            <span className="mr-2">Call:</span>
            <a className="text-white/90 hover:text-white underline" href={`tel:${PHONE_TEL}`}>
              {PHONE}
            </a>
          </div>
        </div>

        <div
          id="chipsMobile"
          className={`md:hidden flex gap-2 items-center text-xs rounded-xl ${
            collapsed ? "whitespace-nowrap overflow-x-auto" : "flex-wrap"
          }`}
          style={collapsed ? ({ scrollbarWidth: "none" } as React.CSSProperties) : undefined}
        >
          <span className="font-medium uppercase font-geist text-white/60 shrink-0">I need</span>

          <button
            type="button"
            aria-pressed={activeIntent === "quote"}
            onClick={() => setActiveIntent("quote")}
            className={intentPillBase(activeIntent === "quote")}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            Request Quote
          </button>

          <button
            type="button"
            aria-pressed={activeIntent === "schedule"}
            onClick={() => setActiveIntent("schedule")}
            className={intentPillBase(activeIntent === "schedule")}
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            Schedule Service
          </button>

          <button
            type="button"
            aria-pressed={activeIntent === "fleet"}
            onClick={() => setActiveIntent("fleet")}
            className={intentPillBase(activeIntent === "fleet")}
          >
            <Truck className="w-3.5 h-3.5 shrink-0" />
            Fleet Detailing
          </button>

          <button
            type="button"
            aria-pressed={activeIntent === "emergency"}
            onClick={() => setActiveIntent("emergency")}
            className={intentPillBase(activeIntent === "emergency")}
          >
            <AlarmClockOff className="w-3.5 h-3.5 shrink-0" />
            Emergency Detail
          </button>
        </div>

        <div
          id="chipsDesktop"
          className={`hidden md:flex gap-2 max-w-7xl items-center text-xs rounded-xl ${
            collapsed ? "whitespace-nowrap overflow-x-auto" : "flex-wrap"
          }`}
          style={collapsed ? ({ scrollbarWidth: "none" } as React.CSSProperties) : undefined}
        >
          <span className="font-medium uppercase font-geist text-white/60 shrink-0">I need</span>

          <button
            type="button"
            aria-pressed={activeIntent === "quote"}
            onClick={() => setActiveIntent("quote")}
            className={intentPillBase(activeIntent === "quote")}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            Request Quote
          </button>

          <button
            type="button"
            aria-pressed={activeIntent === "schedule"}
            onClick={() => setActiveIntent("schedule")}
            className={intentPillBase(activeIntent === "schedule")}
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            Schedule Service
          </button>

          <button
            type="button"
            aria-pressed={activeIntent === "fleet"}
            onClick={() => setActiveIntent("fleet")}
            className={intentPillBase(activeIntent === "fleet")}
          >
            <Truck className="w-3.5 h-3.5 shrink-0" />
            Fleet Detailing
          </button>

          <button
            type="button"
            aria-pressed={activeIntent === "emergency"}
            onClick={() => setActiveIntent("emergency")}
            className={intentPillBase(activeIntent === "emergency")}
          >
            <AlarmClockOff className="w-3.5 h-3.5 shrink-0" />
            Emergency Detail
          </button>
        </div>

        {!collapsed && (
          <div
            id="intentCtas"
            className="flex flex-wrap gap-2 mt-3 items-center text-xs rounded-xl"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          >
            {!currentCtas ? (
              <span className="font-sans text-xs text-white/70">
                Choose an option above to see quick actions.
              </span>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setActiveIntent(null)}
                  className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-white/20 text-white hover:bg-white/10 text-[13px] font-sans"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                {currentCtas.map((item) => {
                  const isAnchor = item.href.startsWith("#");
                  return (
                    <a
                      key={`${activeIntent}-${item.href}-${item.text}`}
                      href={item.href}
                      className={pillClasses(item.variant)}
                      role="button"
                      onClick={(e) => {
                        if (isAnchor) {
                          e.preventDefault();
                          scrollToId(item.href);
                        }
                      }}
                    >
                      {item.icon}
                      {item.text}
                    </a>
                  );
                })}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
