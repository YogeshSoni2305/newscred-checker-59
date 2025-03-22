
import React from "react";
import AnalysisTabs from "@/components/AnalysisTabs";

interface IpadAnimationProps {
  isLoading: boolean;
  credibilityScore: number;
  credibilityLevel: 'high' | 'medium' | 'low' | 'unknown';
  analysisText: string;
  keyPoints: string[];
  sources: Array<{
    id: string;
    title: string;
    url: string;
    type: 'article' | 'study' | 'factCheck' | 'official';
    relevance: 'high' | 'medium' | 'low';
    agreeLevel?: 'supports' | 'contradicts' | 'neutral';
  }>;
}

const IpadAnimation: React.FC<IpadAnimationProps> = ({
  isLoading,
  credibilityScore,
  credibilityLevel,
  analysisText,
  keyPoints,
  sources
}) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center animate-slide-up">
      {/* iPad frame */}
      <div className="relative w-full max-w-3xl aspect-[3/4] rounded-[2rem] bg-black p-3 shadow-2xl">
        {/* iPad bezel */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-700 rounded-full"></div>
        
        {/* iPad screen */}
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-background to-accent/30 border border-gray-800">
          {/* Content goes here */}
          <div className="w-full h-full p-4">
            <AnalysisTabs
              isLoading={isLoading}
              credibilityScore={credibilityScore}
              credibilityLevel={credibilityLevel}
              analysisText={analysisText}
              keyPoints={keyPoints}
              sources={sources}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpadAnimation;
