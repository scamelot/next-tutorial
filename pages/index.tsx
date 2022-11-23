import Head from 'next/head'
import {server} from '../config'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>

      <Head>
        <title>Webdev News</title>
        <meta name='keywords' content='webdevelopment, programming' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

