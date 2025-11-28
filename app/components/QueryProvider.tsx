"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QueryProvider({ children }: React.PropsWithChildren) {
  const query = new QueryClient();
  return (
    <QueryClientProvider client={query}>
      {children}
    </QueryClientProvider>
  )
}
