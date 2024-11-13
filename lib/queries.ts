import { defineQuery } from "groq";

export const STARTUPS_QUERY = defineQuery(`
    *[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search  ] | order(_createdAt desc) {
  _id , 
  title ,
  slug ,
  _createdAt ,
  views ,
  description,
  category,
  image,
  author -> {
    name , _id , image , bio
  } 
}`)