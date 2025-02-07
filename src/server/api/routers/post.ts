import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { z } from "zod";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input, ctx }) => {
      return {
        greeting: `Hello ${input.text} ${(await ctx.db.nut.findFirst())?.name ?? ""}`,
      };
    }),
});
