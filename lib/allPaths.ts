import { MetadataRoute } from "next"

const allPaths: MetadataRoute.Sitemap = [
    {
        url: `${process.env.BASE_URL}/`,
        lastModified: process.env.LAST,
        changeFrequency: "monthly"
    },
    {
        url: `${process.env.BASE_URL}/about`,
        lastModified: process.env.LAST,
        changeFrequency: "monthly"
    },
    {
        url: `${process.env.BASE_URL}/contact`,
        lastModified: process.env.LAST,
        changeFrequency: "monthly"
    },
    {
        url: `${process.env.BASE_URL}/blog`,
        lastModified: process.env.LAST,
        changeFrequency: "monthly"
    }
]

export default allPaths