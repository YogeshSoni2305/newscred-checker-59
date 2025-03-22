
import React, { useState } from "react";
import NewsInput from "@/components/NewsInput";
import AnalysisTabs from "@/components/AnalysisTabs";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { ModeToggle } from "@/components/ModeToggle";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

// Mock data for our demo
const mockAnalysis = {
  credibilityScore: 72,
  credibilityLevel: 'medium' as const,
  analysisText: "This news article contains several verifiable facts, but also includes some misleading information. The core claim about the scientific study is accurate, but the article misrepresents some of the findings and exaggerates certain conclusions. The timeline of events is mostly correct, though there are minor inaccuracies in the dates mentioned. Overall, the article appears to be presenting a partisan view of the topic, emphasizing certain aspects while downplaying others.",
  keyPoints: [
    "The scientific study mentioned does exist and was published in the claimed journal.",
    "The statistical data presented is partially accurate but some figures are outdated.",
    "The expert quoted in the article did make similar statements, but some quotes appear to be taken out of context.",
    "Several important details that would provide a more balanced view were omitted from the article."
  ]
};

const mockSources = [
  {
    id: "1",
    title: "Original Scientific Study in Journal of Medicine",
    url: "https://example.com/journal-of-medicine/study123",
    type: 'study' as const,
    relevance: 'high' as const,
    agreeLevel: 'neutral' as const
  },
  {
    id: "2",
    title: "Fact-Check: Examining the Claims About Medical Discovery",
    url: "https://factchecker.org/medical-discovery-claims",
    type: 'factCheck' as const,
    relevance: 'high' as const,
    agreeLevel: 'contradicts' as const
  },
  {
    id: "3",
    title: "Official Statement from Health Department",
    url: "https://health.gov/statements/2023-04-15",
    type: 'official' as const,
    relevance: 'medium' as const,
    agreeLevel: 'supports' as const
  },
  {
    id: "4",
    title: "Related News Article from Trusted Source",
    url: "https://news-source.com/health/new-findings",
    type: 'article' as const,
    relevance: 'medium' as const,
    agreeLevel: 'supports' as const
  }
];

// Define the type for credibility level
type CredibilityLevel = 'high' | 'medium' | 'low' | 'unknown';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  
  // In a real application, these would be populated from API responses
  const [analysisData, setAnalysisData] = useState<{
    credibilityScore: number;
    credibilityLevel: CredibilityLevel;
    analysisText: string;
    keyPoints: string[]
  }>({
    credibilityScore: 0,
    credibilityLevel: 'unknown',
    analysisText: '',
    keyPoints: []
  });
  
  const [sources, setSources] = useState<Array<{
    id: string;
    title: string;
    url: string;
    type: 'article' | 'study' | 'factCheck' | 'official';
    relevance: 'high' | 'medium' | 'low';
    agreeLevel?: 'supports' | 'contradicts' | 'neutral';
  }>>([]);

  const handleProcessNews = async (text: string) => {
    // In a real application, this would make an API call to process the news
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Set mock data
      setAnalysisData(mockAnalysis);
      setSources(mockSources);
      setHasResults(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/30 text-foreground">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>
      
      <div className="container max-w-6xl mx-auto py-12 px-4 sm:px-6">
        <ResizablePanelGroup direction="horizontal" className="min-h-[80vh]">
          <ResizablePanel defaultSize={60} minSize={40}>
            {!hasResults ? (
              <HeroScrollDemo />
            ) : (
              <div className="glass-effect rounded-2xl p-6 shadow-sm h-full">
                <NewsInput onProcessNews={handleProcessNews} isLoading={isLoading} />
              </div>
            )}
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          <ResizablePanel defaultSize={40} minSize={30}>
            <div className="glass-effect rounded-2xl p-6 shadow-sm h-full flex flex-col">
              <AnalysisTabs
                isLoading={isLoading}
                credibilityScore={analysisData.credibilityScore}
                credibilityLevel={analysisData.credibilityLevel}
                analysisText={analysisData.analysisText}
                keyPoints={analysisData.keyPoints}
                sources={sources}
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Index;
