import { useMutation, useQuery } from '@tanstack/react-query';
import { agentsInfoSchema } from '@/data/agents';
import { z } from 'zod';

export function useGetAgentsInfo() {
  return useQuery({
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
    initialData: {},
    queryKey: ['agentsInfo'] as const,
    queryFn: async () => {
      const response = await fetch(`/api/runtime`);
      if (!response.ok) {
        throw new Error('Failed to fetch agents info');
      }
      const data = await response.json();
      return data as z.infer<typeof agentsInfoSchema>;
    },
  });
}

export function useRunAgents({
  threadId,
  onSuccess = undefined,
}: {
  threadId: number;
  onSuccess?: () => void;
}) {
  return useMutation({
    mutationKey: ['runAgents', threadId] as const,
    mutationFn: async (agentNames: string[]) => {
      const response = await fetch(`/api/runtime`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ threadId, agentNames }),
      });
      if (!response.ok) {
        throw new Error('Failed to run agents');
      }
    },
    onSuccess: () => {
      onSuccess?.();
    },
  });
}
