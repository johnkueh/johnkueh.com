import useSWR from 'swr';
import { getVotes, Todo, Vote } from '../../shared/api';
import { firestore } from '../../shared/firebase';

export function useVotes(ids: string[]) {
  return useSWR(`/votes`, () => getVotes(ids));
}

export function useTodos(initialData?: Todo[]) {
  return useSWR(`/todos`, { initialData });
}

export async function incrementVote(id: string, count: number) {
  return firestore.doc(`/votes/${id}`).set({
    id,
    count
  }).then(() => {
    return {
      id,
      count
    } as Vote;
  })
}