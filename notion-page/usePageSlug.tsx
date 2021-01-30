import useSWR from "swr";
import { getPageSlugById } from "../shared/api";

export function usePageSlug(pageId: string) {
  const { data, ...swrProps } = useSWR(`/blog/${pageId}`, () =>
    getPageSlugById(pageId)
  );

  return { slug: data, ...swrProps };
}
