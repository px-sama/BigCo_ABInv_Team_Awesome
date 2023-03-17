import React, { useCallback, useEffect, useState } from "react"
import useWindowWidth from "../../theme/useWindowWidth"
import clsx from "clsx"
import Highlight from "../Highlight"
// import MergeTimeIcon from "../../assets/img/pages/index/mergeTime.svg"
import Chevron from "../../theme/Chevron"
import seCss from "../../css/section.module.css"
import shCss from "../../css/index/showcase.module.css"
// import NavigateTimeIcon from "../../assets/img/pages/index/navigateTime.svg"
import SliceTimeIcon from "../../assets/img/pages/index/sliceTime.svg"
import SearchTimeIcon from "../../assets/img/pages/index/searchTime.svg"
import SvgImage from "../SvgImage"

const S = [3, 1, 6, 10]
const M = [3, 0, 4, 8]
const L = [4, 0, 4, 8]

const getTopByIndex = (m: number[], index: 1 | 2): number => {
  const scale = {
    1: 25 * (m[0] ?? 0),
    2: -25 * (m[1] ?? 0),
    // 3: -25 * (m[2] ?? 0),
    // 4: -25 * (m[3] ?? 0),
  }

  return scale[index] ?? 0
}

const createReactPage = `SELECT timestamp, tempC
FROM sensors
WHERE timestamp IN '2021-05-14;1M';`

const craeteMDPage = `SELECT timestamp, sensorName, tempC
FROM sensors
LATEST ON timestamp PARTITION BY sensorName;
`

type Index = 1 | 2 | 3 | 4

export const PageCreator = () => {
  const [top, setTop] = useState(S)
  const [index, setIndex] = useState<Index>(2)
  const windowWidth = useWindowWidth()
  const handleClick1 = useCallback(() => {
    setIndex(1)
  }, [])
  const handleClick2 = useCallback(() => {
    setIndex(2)
  }, [])

  const handleUpClick = useCallback(() => {
    setIndex(Math.max(index - 1, 1) as Index)
  }, [index])
  const handleDownClick = useCallback(() => {
    setIndex(Math.min(index + 1, 4) as Index)
  }, [index])

  // 622, 800

  useEffect(() => {
    // if (windowWidth != null && windowWidth < 100) {
    //   setTop(S)
    //   return
    // }

    // if (windowWidth != null && windowWidth < 200) {
    //   setTop(M)
    //   return
    // }

    setTop(M)
  }, [windowWidth])

  return (

    <div className={shCss.showcase}>
      {/* <div className={shCss.showcase__inner}> */}
      {/* <div
          className={clsx(shCss.showcase__chevron)}
          onClick={handleUpClick}
          style={{ visibility: index === 1 ? "hidden" : "visible" }}
        >
          <Chevron />
        </div> */}
      <div className={clsx(shCss.showcase__left)}>
        <div
          className={clsx(
            shCss.showcase__offset,
            shCss[`showcase__${index}`],
          )}
        // style={{ top: getTopByIndex(top, index) }}
        >
          <Highlight code={createReactPage} language="sql" />
          <Highlight code={`-- Created your first React Page\n${createReactPage}`} language="sql" />
          <Highlight code={craeteMDPage} language="sql" />
          <Highlight code={`-- Created your first Markdown Page\n${craeteMDPage}`} language="sql" />
        </div>
      </div>
      <div
        className={clsx(
          shCss.showcase__chevron,
          shCss["showcase__chevron--bottom"],
        )}
        onClick={handleDownClick}
        style={{ visibility: index === 2 ? "hidden" : "visible" }}
      >
        <Chevron />
      </div>
      <div className={shCss.showcase__right}>
        <div
          className={clsx(shCss.showcase__button, {
            [shCss["showcase__button--active"]]: index === 1,
          })}
          onClick={handleClick1}
        >
          <h4 className={shCss.showcase__header}>
            <SvgImage
              image={<SearchTimeIcon className={shCss.showcase__icon} />}
              title="Magnifying glass icon"
            />
            Create React Page
          </h4>
        </div>

        <div
          className={clsx(shCss.showcase__button, {
            [shCss["showcase__button--active"]]: index === 2,
          })}
          onClick={handleClick2}
        >
          <h4 className={shCss.showcase__header}>
            <SvgImage
              image={<SliceTimeIcon className={shCss.showcase__icon} />}
              title="Knife icon"
            />
            Create Markdown Page
          </h4>
        </div>
      </div>
    </div>
    // </div>

  )
}
