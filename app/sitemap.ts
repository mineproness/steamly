import { MetadataRoute } from "next";
import { allpost } from "./action";
import allPaths from "@/lib/allPaths";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await allpost()
    let post: Array<any> = [];
    posts.map(function (e) {
        post = [...post, {
            url: `${process.env.BASE_URL}/blog/${e.path}`,
            lastModified: process.env.LAST,
            changeFrequency: "monthly",
            // images: e.img
        }]
    })
    return [
        ...allPaths,
        ...post
    ]
}