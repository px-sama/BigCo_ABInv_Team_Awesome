import React, { useCallback, useEffect, useState } from "react"
import useWindowWidth from "../../theme/useWindowWidth"
import clsx from "clsx"
import Highlight from "../Highlight"
import MergeTimeIcon from "../../assets/img/pages/index/combine.svg"
import seCss from "./section.module.css"
import shCss from "./showcase.module.css"
import NavigateTimeIcon from "../../assets/img/pages/index/add_db.svg"
import DataBaseIcon from "../../assets/img/pages/index/database.svg"
import CheckDB from "../../assets/img/pages/index/ask_db.svg"
import SvgImage from "../SvgImage"
// import styles from "./styles.module.css"

const S = [3, 1, 6, 10]
const M = [3, 0, 4, 8]
const L = [4, 0, 4, 8]

const getTopByIndex = (m: number[], index: 1 | 2 | 3 | 4): number => {
    const scale = {
        1: 25 * (m[0] ?? 0),
        2: -25 * (m[1] ?? 0),
        3: -25 * (m[2] ?? 0),
        4: -25 * (m[3] ?? 0),
    }

    return scale[index] ?? 0
}

const changeDB = `1. Click on File.
2. Go to Options and Settings.
3. Click on Data Source Settings.
4. Press on the Change Source button.
5. Choose the File path.`

const changeAddress = `let
Source = AzureStorage.DataLake(...)`

const changeDBSnowflake = `1. Click on Get Data.
2. Under Database, select Snowflake.
3. Enter Server and Warehouse ID.
(Server = the URL of Snowflake instance.)
4. (Optional) Add custom queries.`

const mergeQuery = `DESCRIBE TABLE_NAME;`

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
    const handleClick3 = useCallback(() => {
        setIndex(3)
    }, [])
    const handleClick4 = useCallback(() => {
        setIndex(4)
    }, [])
    const handleUpClick = useCallback(() => {
        setIndex(Math.max(index - 1, 1) as Index)
    }, [index])
    const handleDownClick = useCallback(() => {
        setIndex(Math.min(index + 1, 4) as Index)
    }, [index])

    useEffect(() => {
        if (windowWidth != null && windowWidth < 622) {
            setTop(S)
            return
        }

        if (windowWidth != null && windowWidth < 800) {
            setTop(M)
            return
        }

        setTop(L)
    }, [windowWidth])

    return (
        <section
            className={clsx(
                seCss.section,
                seCss["section--inner"],
                seCss["section--center"],
                seCss["section--showcase"],
            )}
        >
            <div className={shCss.showcase}>
                <div className={shCss.showcase__inner}>
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
                            style={{ top: getTopByIndex(top, index) }}
                        >
                            <Highlight code={changeDB} language="sql" />
                            <Highlight code={`-- Search time\n${changeDB}`} language="txt" />
                            <Highlight code={changeDBSnowflake} language="sql" />
                            <Highlight code={`-- Slice time\n${changeDBSnowflake}`} language="txt" />
                            <Highlight code={changeAddress} language="sql" />
                            <Highlight code={`-- Navigate time\n${changeAddress}`} language="txt" />
                            <Highlight code={mergeQuery} language="sql" />
                            <Highlight code={`-- Merge time\n${mergeQuery}`} language="txt" />
                        </div>
                    </div>
                    {/* <div
                        className={clsx(
                            shCss.showcase__chevron,
                            shCss["showcase__chevron--bottom"],
                        )}
                        onClick={handleDownClick}
                        style={{ visibility: index === 4 ? "hidden" : "visible" }}
                    >
                        <Chevron />
                    </div> */}
                    <div className={shCss.showcase__right}>
                        <div
                            className={clsx(shCss.showcase__button, {
                                [shCss["showcase__button--active"]]: index === 1,
                            })}
                            // className="bg-white dark:bg-black rounded-sm px-6 py-8"
                            onClick={handleClick1}
                        >
                            <h3 className={shCss.showcase__header}>
                                <SvgImage
                                    image={<DataBaseIcon className={shCss.showcase__icon} />}
                                    title="Magnifying glass icon"
                                />
                                Change Data Source
                            </h3>
                        </div>

                        <div
                            className={clsx(shCss.showcase__button, {
                                [shCss["showcase__button--active"]]: index === 2,
                            })}

                            onClick={handleClick2}
                        >
                            <h3 className={shCss.showcase__header}>
                                <SvgImage
                                    image={<NavigateTimeIcon className={shCss.showcase__icon} />}
                                    title="Knife icon"
                                />
                                Add Data Source (Snowflake)
                            </h3>
                        </div>

                        <div
                            className={clsx(shCss.showcase__button, {
                                [shCss["showcase__button--active"]]: index === 3,
                            })}
                            onClick={handleClick3}
                        >
                            <h3 className={shCss.showcase__header}>
                                <SvgImage
                                    image={<MergeTimeIcon className={shCss.showcase__icon} />}
                                    title="Indication arrow icon"
                                />
                                Edit Addresses
                            </h3>
                        </div>
                        <div
                            className={clsx(shCss.showcase__button, {
                                [shCss["showcase__button--active"]]: index === 4,
                            })}
                            onClick={handleClick4}
                        >
                            <h3 className={shCss.showcase__header}>
                                <SvgImage
                                    image={<CheckDB className={shCss.showcase__icon} />}
                                    title="Two overlapping squares"
                                />
                                Check New Table's Schema
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
