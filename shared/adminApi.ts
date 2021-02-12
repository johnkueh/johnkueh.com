import { firestore } from "./firebase";

export async function getSubscribers() {
  return firestore.collection(`/subscribers`).get().then(ref => {
    return ref.docs.map(doc => doc.data());
  })
}