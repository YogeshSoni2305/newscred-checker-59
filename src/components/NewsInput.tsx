
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SearchCheck, Loader2 } from "lucide-react";

interface NewsInputProps {
  onProcessNews: (text: string) => void;
  isLoading: boolean;
}

const NewsInput: React.FC<NewsInputProps> = ({ onProcessNews, isLoading }) => {
  const [newsText, setNewsText] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsText.trim() && !isLoading) {
      onProcessNews(newsText);
    }
  };

  return (
    <div className="animate-fade-in w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label 
            htmlFor="news-input" 
            className="text-sm font-medium text-foreground/90 tracking-wide"
          >
            Enter news text to verify
          </label>
          <Textarea
            id="news-input"
            placeholder="Paste or type news content here..."
            className="min-h-[200px] resize-y p-4 text-base leading-relaxed rounded-xl transition-all duration-200
            focus-visible:ring-1 focus-visible:ring-primary/70 focus-visible:border-primary/30 glass-effect"
            value={newsText}
            onChange={(e) => setNewsText(e.target.value)}
            disabled={isLoading}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full h-12 rounded-xl button-press flex items-center justify-center gap-2
          bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300
          font-medium tracking-wide"
          disabled={isLoading || !newsText.trim()}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <SearchCheck className="h-5 w-5" />
              <span>Verify Credibility</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewsInput;
