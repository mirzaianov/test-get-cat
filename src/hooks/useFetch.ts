import { useState, useRef, useEffect } from 'react';

export default function useFetch<T>(url: string): {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  fetchData: () => Promise<void>;
} {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const abortController = new AbortController();

    abortControllerRef.current = abortController;

    try {
      setIsLoading(true);
      setError(null);

      // ! Added intensionally to show Skeleton
      // TODO: Remove in production
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // !

      const response = await fetch(url, { signal: abortController.signal });

      if (!response.ok) {
        throw new Error(`Server error! Status: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return;

      setError(e instanceof Error ? e : new Error('An unknown error!'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return { data, isLoading, error, fetchData };
}
