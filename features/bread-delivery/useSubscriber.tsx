import useSWR from "swr";
import { destroy, subscribe, unsubscribe } from "./data";

export function useSubscriber(subscriber: any) {
  const { data, mutate } = useSWR(
    `/subscribers/${subscriber.id}`,
    () => subscriber
  );

  return {
    subscriber: data,
    subscribe: async () => {
      mutate({ ...data, subscribed: true }, false);
      await subscribe(data.id);
    },
    unsubscribe: async () => {
      mutate({ ...data, subscribed: false }, false);
      await unsubscribe(data.id);
    },
    destroy: async () => {
      mutate(null, false);
      await destroy(data.id);
    },
  };
}
