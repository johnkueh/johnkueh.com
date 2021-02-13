import * as z from 'zod';
import { firestore } from "../../shared/firebase";

export async function subscribe(email: string) {
  const emailSchema = z.string().email();
  emailSchema.parse(email);
  
  return firestore.doc(`/subscribers/${email}`).set({
    id: email,
    subscribed: true
  })
}

export async function getSubscriber(email: string) {
  return firestore.doc(`/subscribers/${email}`).get().then(ref => ref.data());
}

export async function unsubscribe(email: string) {
  return firestore.doc(`/subscribers/${email}`).set({
    subscribed: false
  }, { 
    merge: true
  })
}

export async function destroy(email: string) {
  return firestore.doc(`/subscribers/${email}`).delete()
}