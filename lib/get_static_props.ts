import siteData from "./site_data";

export async function getStaticProps() {
    const data = await siteData()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
    }
}

export async function getStaticPaths() {
    const data = await siteData()

    const paths = data.posts.map((post: any) => ({
        params: { id: post.id },
    }))

    return { paths, fallback: false }
}