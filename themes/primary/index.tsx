import Head from "next/head";

export default function Index(props: any) {
    return (
        <>
            <Head>
                <title>{props.data.name}</title>
            </Head>

            <main>
                <h1>Primary!</h1>
                <h2>{props.data.name}</h2>
                <ul>
                    {props.data.posts.map((post: any) => <li key={post.id}>{post.title}</li>)}
                </ul>
            </main>

            <footer>
            </footer>
        </>
    )
}