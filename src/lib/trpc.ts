import type { AppRouter } from "@api/src/router";
import { httpBatchLink, loggerLink, createTRPCProxyClient } from "@trpc/client";
import superjson from "superjson";

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === 'development' ||
        (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      async headers() {
        return {
          // Authorization: `Bearer ${getToken()}`,
        };
      },
      url: `${process.env.NEXT_PUBLIC_API_URL}/trpc`,
    }),
  ],
});
