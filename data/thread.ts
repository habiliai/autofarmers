import { z } from 'zod';
import { balanceSchema } from './sendai';

export const threadSchema = z.object({
  id: z.number(),
});

export const messageSchema = z.object({
  id: z.number(),
  content: z.string(),
  sender: z.string(),
  toolCalls: z.array(
    z.object({
      name: z.string(),
      arguments: z.record(z.string(), z.any()),
      result: z.any().optional(),
    }),
  ),
  metadata: z.object({
    balance: balanceSchema.optional(),
  }),
});

export type Message = z.infer<typeof messageSchema>;
