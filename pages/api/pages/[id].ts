import { getPageSlugById } from "../../../shared/api";

export default async (req, res) => {
  const slug = await getPageSlugById(req.query.id);
  if(slug) {
    res.statusCode = 200
    res.json({ slug })
  } else {
    res.statusCode = 404
    res.json({ slug: null });
  }
}
