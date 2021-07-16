export { getStaticProps } from '@lib/get_static_props'
export default require(`@themes/${process.env.TEMPLATE_ID}/index`).default
