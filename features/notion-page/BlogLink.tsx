import Link from "../../shared/Link";
import { usePageSlug } from "./usePageSlug";

const PageLink = ({ path, children }) => {
  const { slug } = usePageSlug(path.replace("/", ""));
  return <Link href={`/blog/${slug}`}>{children}</Link>;
};

export default PageLink;
