import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "../../../core/env/server.mjs";
import { createContext } from "../../../core/server/trpc/context";
import { appRouter } from "../../../core/server/trpc/router/_app";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path}: ${error}`);
        }
      : undefined,
});
