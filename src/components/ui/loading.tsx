"use client";

import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <Loader2 
      className={`animate-spin ${sizeClasses[size]} ${className}`} 
    />
  );
}

interface LoadingCardProps {
  title?: boolean;
  text?: boolean;
  className?: string;
}

export function LoadingCard({ title = true, text = true, className = "" }: LoadingCardProps) {
  return (
    <div className={`border rounded-lg p-6 ${className}`}>
      {title && (
        <div className="h-6 bg-muted rounded mb-4 animate-pulse"></div>
      )}
      {text && (
        <>
          <div className="h-4 bg-muted rounded mb-2 animate-pulse"></div>
          <div className="h-4 bg-muted rounded mb-2 animate-pulse w-4/5"></div>
          <div className="h-4 bg-muted rounded w-3/5 animate-pulse"></div>
        </>
      )}
    </div>
  );
}

interface LoadingButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
}

export function LoadingButton({ children, loading = false, className = "" }: LoadingButtonProps) {
  return (
    <button 
      className={`relative ${className}`}
      disabled={loading}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" />
        </div>
      )}
      <span className={loading ? "opacity-0" : ""}>
        {children}
      </span>
    </button>
  );
}