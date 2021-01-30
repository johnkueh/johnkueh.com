import { useEffect, useState } from "react";
import { getPageSlugById } from "../shared/api";

export function usePageSlug(pageId: string) {
  const [slug, setSlug] = useState<string>();

  useEffect(() => {
    async function fetchSlug() {
      const slug = await getPageSlugById(pageId);
      setSlug(slug);
    }

    fetchSlug();
  }, []);

  return { slug };
}
