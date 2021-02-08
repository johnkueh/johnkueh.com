import useSWR from 'swr';
import { firestore } from '../../shared/firebase';

export interface Like {
  id: string;
  count: number;
}

export function useLike(id: string) {
  return useSWR(`/likes/${id}`, () => getLike(id));
}

export async function getLike(id: string) {
  return firestore.doc(`/likes/${id}`).get().then(docRef => {
    return {
      id,
      ...docRef.data()
    } as Like;
  })
}

export async function incrementLike(id: string, count: number) {
  return firestore.doc(`/likes/${id}`).set({
    id,
    count
  }).then(() => {
    return {
      id,
      count
    } as Like;
  })
}