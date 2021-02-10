import { orderBy } from "lodash";

function filterPublished(collection: any) {
  return collection.filter(entry => entry['Status'] === "Published") ?? [];
}

function getPageMeta(page: any) {
  const { properties, created_time: createdTime } = page[Object.keys(page)[0]].value;
  return {
    title: properties.title[0][0],
    createdTime
  };
}

export async function getProjects() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/table/2bce795a169044aeb0aa5b6b5a30b0a7"
  ).then((res) => res.json());

  return filterPublished(data);
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

export async function getPageSlugById(id: string) {
  try {
    const blockMap = await fetch(
      `https://notion-api.splitbee.io/v1/page/${id}`
    ).then((res) => res.json());
    const slug = blockMap[Object.keys(blockMap)[0]]?.value.properties.FBDk[0][0]
    return slug
  } catch {
    return null
  }
}

export async function getArticles() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/table/2d9b070b663a4b4380a415581d9aa00e"
  ).then((res) => res.json());

  return filterPublished(data);
}

export async function getArticleData(slug: string) {
  const data = await getArticles();
  return data.find(page => page.Slug === slug);
}

export async function getArticle(slug: string) {
  const page = await getArticleData(slug);
  const blockMap = await fetch(
    `https://notion-api.splitbee.io/v1/page/${page?.id}`
  ).then((res) => res.json());

  return {
    page, blockMap
  }
}

export async function getTestimonials() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/table/719bbddfe8374a60a7524f466cb05176"
  ).then((res) => res.json());

  return filterPublished(data);
}

export async function getDailyBread() {
  const collection = await fetch(
    "https://notion-api.splitbee.io/v1/table/ea4d39a76135405d9c86d4fa4893d62b"
  ).then((res) => res.json());

  const requests = collection.map(async entry => {
    const entryData = await fetch(
      `https://notion-api.splitbee.io/v1/page/${entry.id}`
    ).then((res) => res.json())
    return {
      ...getPageMeta(entryData),
      ...entry,
      blockMap: entryData
    }
  })

  const data = await Promise.all(requests);

  return orderBy(data, 'createdTime', 'desc');
}

export async function getTodos() {
  return fetch(
    "http://notion-api.splitbee.io/v1/table/19c8533dca9c4eeb94084be47e4fb6bf"
  ).then((res) => res.json());
}