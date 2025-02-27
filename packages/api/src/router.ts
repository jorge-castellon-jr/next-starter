import { authRouter } from './routes/auth'
import { helloRouter } from './routes/hello'
import { userRouter } from './routes/user'
import { router } from './trpc'

export const appRouter = router({
  hello: helloRouter,
  user: userRouter,
  auth: authRouter,
})

export type AppRouter = typeof appRouter
