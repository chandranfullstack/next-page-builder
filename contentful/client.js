import * as contentful from "contentful"

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
console.log(process.env.CONTENTFUL_SPACE_ID,process.env.CONTENTFUL_ACCESS_TOKEN)
export const getList = async (type) => {
  const res = await client.getEntries({ content_type: type });

  return res?.items;
};

export const getDetail = async (slug, type) => {
  const res = await client.getEntries({
    content_type: type,
    "fields.slug": slug,
  });

  return res?.items?.[0]?.fields;
};

export const searchList = async (type, search) => {
  const res = await client.getEntries({
    content_type: type,
  });

  return res?.items?.filter((post) =>
    post?.fields?.tags?.some((item) => item?.fields?.tagName === search)
  );
};
