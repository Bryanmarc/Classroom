import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DatabaseHandler from '../util/DatabaseClient'
import { useState } from 'react'

export function Home({ data }: any) {

  const [issues, setIssues] = useState(JSON.parse(data));

  return (
    <>
      {issues.map( (x: any) => {
          {console.log(x)}
          return (
            <>
              <h1>{x.title}</h1>
              <p>{x.content}</p>
              <p>{x.time_posted}</p> 
            </>
          );

      })}
    </>
  )

}

export async function getServerSideProps() {
  //const res = await fetch("https://localhost:3000/api/GetIssues")
  //const data = await res.json()

  const data = await DatabaseHandler.GetIssues();
  console.log("Successfully fetched Data");
  return { props: { data }}
}

export default Home;