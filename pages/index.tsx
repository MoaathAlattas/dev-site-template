import Head from 'next/head'

export {getStaticProps} from '../lib/get_static_props'

export default function Home(props: any) {
    return (
        <>
            <Head>
                <title>{props.data.name}</title>
            </Head>

            <main>
                <h1>{props.data.name}</h1>
                <ul>
                    {props.data.posts.map((post: any) => <li key={post.id}>{post.title}</li>)}
                </ul>
            </main>

            <footer>
            </footer>
        </>
    )
}
