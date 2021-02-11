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