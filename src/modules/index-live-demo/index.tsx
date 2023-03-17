import React, { useEffect, useState } from "react"
import customFields from "../../config/customFields"
import Highlight from "../../components/Highlight"
import { Section } from "../../components/Section"
import styles from "./styles.module.css"
// import Button from "@theme/Button"
// import { Button } from '@mui/material';
import TypeIt from "typeit-react"

// const exampleQueries = exampleQueriesRaw.map(({ comment, query }) => ({
//   url: `${customFields.demoUrl}?query=${encodeURIComponent(
//     [comment, query].join("\n"),
//   )}&executeQuery=true`,
//   query,
//   view() {
//     return <Highlight code={query} language="js" />
//   },
// }))

const text = `This is the most granular and most dynamic of the Calendar views that defines each Date on the calendar. 

For nearly any possible query requiring or including a date, this should be the primary view referenced. 

It includes a wealth of attributes about a given Date including corresponding time frames from the prior year for quick year over year analysis.`

const createReactPage = (text) => {
  return <Highlight code={text} language="txt" />
}

const LiveDemo = () => {
  const [query, setQuery] = useState<null | number>(null)

  useEffect(() => {
    const isClient = typeof window !== "undefined"

    // if (isClient) {
    //   setQuery(Math.floor(Math.random() * exampleQueries.length))
    // }
  }, [])

  return (
    <Section fullWidth odd center>


      <div className={styles.preview}>
        <Section.Subtitle className={styles.previewHeader}>
          Try QuestDB demo in your browser
        </Section.Subtitle>

        <div className={styles.editor}>
          <div className={styles.code}>
            <TypeIt
              options={{
                startDelay: 1000,
                speed: 2,
                waitUntilVisible: true,
                cursor: false,
                // strings: { createReactPage() }
              }}
            >
              {createReactPage(text)}
            </TypeIt>

          </div>
        </div>
      </div>

    </Section >
  )
}

export default LiveDemo
