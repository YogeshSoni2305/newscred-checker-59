
"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FileText, ShieldCheck } from "lucide-react";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground">
              Verify the truth with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-gradient">
                AI-Powered News Check
              </span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI analyzes news articles for credibility, bias, and factual accuracy, helping you separate truth from fiction.
            </p>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <ShieldCheck className="h-20 w-20 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">News Credibility Analyzer</h2>
            <p className="text-muted-foreground">
              Simply paste any news article to get an instant AI-powered credibility analysis with verified sources.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border flex flex-col items-center">
              <FileText className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Detailed Analysis</h3>
              <p className="text-sm text-muted-foreground text-center">
                Get comprehensive credibility assessments with key points verification
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border flex flex-col items-center">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Sources</h3>
              <p className="text-sm text-muted-foreground text-center">
                Every analysis is backed by references and sources you can trust
              </p>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
