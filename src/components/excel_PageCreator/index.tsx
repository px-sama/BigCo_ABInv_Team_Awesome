import React, { useCallback, useEffect, useState } from 'react';
import useWindowWidth from '../../theme/useWindowWidth';
import clsx from 'clsx';
import Highlight from '../Highlight';
import MergeTimeIcon from '../../assets/img/pages/index/combine.svg';
import seCss from './section.module.css';
import shCss from './showcase.module.css';
import NavigateTimeIcon from '../../assets/img/pages/index/add_db.svg';
import DataBaseIcon from '../../assets/img/pages/index/database.svg';
import CheckDB from '../../assets/img/pages/index/ask_db.svg';
import SvgImage from '../SvgImage';
// import styles from "./styles.module.css"

const S = [6, 4];
const M = [6, 4];
const L = [7, 5];

const getTopByIndex = (m: number[], index: 1 | 2): number => {
  const scale = {
    1: 10 * (m[0] ?? 0),
    2: -10 * (m[1] ?? 0),
  };

  return scale[index] ?? 0;
};

const changeDB = `1. Click on the Data tab.
2. Go to Get Data.
3. Click on From Azure.
4. Choose the File path.`;

const changeAddress = `
[VBA]
Dim FSO As New FileSystemObject
Set FSO = CreateObject("[...].FileSystemObject")
Set FileToRead = FSO.OpenTextFile("C:[...]")`;

type Index = 1 | 2;

export const PageCreatorexcel = () => {
  const [top, setTop] = useState(S);
  const [index, setIndex] = useState<Index>(2);
  const windowWidth = useWindowWidth();
  const handleClick1 = useCallback(() => {
    setIndex(1);
  }, []);
  const handleClick2 = useCallback(() => {
    setIndex(2);
  }, []);
  const handleUpClick = useCallback(() => {
    setIndex(Math.max(index - 1, 1) as Index);
  }, [index]);
  const handleDownClick = useCallback(() => {
    setIndex(Math.min(index + 1, 4) as Index);
  }, [index]);

  useEffect(() => {
    if (windowWidth != null && windowWidth < 622) {
      setTop(S);
      return;
    }

    if (windowWidth != null && windowWidth < 800) {
      setTop(M);
      return;
    }

    setTop(L);
  }, [windowWidth]);

  return (
    <section
      className={clsx(
        seCss.section,
        seCss['section--inner'],
        seCss['section--center'],
        seCss['section--showcase']
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
                shCss[`showcase__${index}`]
              )}
              style={{ top: getTopByIndex(top, index) }}
            >
              <Highlight code={changeDB} language="sql" />
              <Highlight code={`-- Search time\n${changeDB}`} language="txt" />
              <Highlight code={changeAddress} language="vba" />
              <Highlight
                code={`-- Navigate time\n${changeAddress}`}
                language="txt"
              />
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
                [shCss['showcase__button--active']]: index === 1,
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
                [shCss['showcase__button--active']]: index === 2,
              })}
              onClick={handleClick2}
            >
              <h3 className={shCss.showcase__header}>
                <SvgImage
                  image={<MergeTimeIcon className={shCss.showcase__icon} />}
                  title="Indication arrow icon"
                />
                Edit Addresses
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
