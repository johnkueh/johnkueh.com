import useSWR from 'swr';
import { firestore } from '../../shared/firebase';

export interface Vote {
  id: string;
  count: number;
}

export function useVote(id: string) {
  return useSWR(`/votes/${id}`, () => getVote(id));
}

export async function getVote(id: string) {
  return firestore.doc(`/votes/${id}`).get().then(docRef => {
    return {
      id,
      ...docRef.data()
    } as Vote;
  })
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