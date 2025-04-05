'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Component() {
  const handleRetry = () => {
    window.location.href = '/';
  };
  return (
    <div>
      <div className="bg-background flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="text-primary mx-auto h-12 w-12" />
          <h1 className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Oops, something went wrong!
          </h1>
          <p className="text-muted-foreground mt-4">
            {'An unexpected error has occurred.'}
          </p>
          <div className="mt-6">
            <Button
              onClick={handleRetry}
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              Try Again
            </Button>
            <Link
              href="#"
              className="bg-background text-muted-foreground hover:bg-muted focus:ring-muted ml-4 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
              prefetch={false}
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
