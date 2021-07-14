import Head from 'next/head'

export async function getStaticProps() {
    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY
    const API_SITE_ID = process.env.API_SITE_ID
    const res = await fetch(`${API_URL}/sites/${API_SITE_ID}/data?api_key=${API_KEY}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
    }
}

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>{props.data.name}</title>
      </Head>

      <main>
          <h1>{props.data.name}</h1>
          <ul>
              {props.data.posts.map((post: any)=><li key={post.id}>{post.title}</li>)}
          </ul>
      </main>

      <footer>
      </footer>
    </>
  )
}
