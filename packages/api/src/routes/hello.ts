import { publicProcedure, router } from '../trpc'
import z from 'zod'

export const helloRouter = router({
  world: publicProcedure
    .input(z.string())
    .query(({ input }) => {
      return `Hello ${input}!`
    }),
})
