import useSWR from 'swr';
import { Todo } from '../../shared/api';
import { firestore } from '../../shared/firebase';

export interface Vote {
  id: string;
  count: number;
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