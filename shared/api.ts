export async function getProjects() {
  return fetch(
    "https://notion-api.splitbee.io/v1/table/2bce795a169044aeb0aa5b6b5a30b0a7"
  ).then((res) => res.json());
}

export async function getPageData(slug: string) {
  const data = await getProjects();
  return data.find(page => page.Slug === slug);
}

export async function getPage(slug: string) {
  const page = await getPageData(slug);
  const blockMap = await fetch(
    `https://notion-api.splitbee.io/v1/page/${page?.id}`
  ).then((res) => res.json());

  return {
    page, blockMap
  }
}