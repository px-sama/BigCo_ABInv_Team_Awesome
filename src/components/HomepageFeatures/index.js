import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList_functions = [
  {
    title: 'Supply Chain',
    Svg: require('@site/static/img/undraw_order_delivered_re_v4ab.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Finance',
    Svg: require('@site/static/img/undraw_growth_analytics_re_pyxf.svg')
      .default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Miscellaneous',
    Svg: require('@site/static/img/undraw_notes_re_pxhw.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

const FeatureList_locations = [
  {
    title: 'US',
    Svg: require('@site/static/img/us.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Canada',
    Svg: require('@site/static/img/canada.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Global',
    Svg: require('@site/static/img/undraw_connected_world_wuay.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <main>
      {/* <h1 className="container">
        <center>Bulletin</center>
      </h1>

      <section className={styles.bulletin_features}>
        <div className="container">
          <div className="row">
            <center>3/17: Happy St. Patrick's Day!</center>
          </div>
          <div className="row">
            <center>
              3/15: New set of tables in Teradata has been decommissioned.
              Please refer to{' '}
              <a href="https://docs.alchemy.beertech.com/teradata-updates/">
                3/15 Teradata Update
              </a>
            </center>
          </div>
        </div>
      </section> */}
      <h1 className="container mt-5">
        <center>Bulletin</center>
      </h1>

      <section className={styles.bulletin_features}>
        <div className="container">
          <div className="row">
            <center>
              <div className={styles.bulletin_item}>
                <div className={styles.bulletin_date}>3/17</div>
                <div className={styles.bulletin_text}>Happy St. Patrick's Day!</div>
              </div>
            </center>
          </div>
          <div className="row">
            <center>
              <div className={styles.bulletin_item}>
                <div className={styles.bulletin_date}>3/15</div>
                <div className={styles.bulletin_text}>
                  New set of tables in Teradata has been decommissioned. Please refer to{' '}
                  <a href="https://docs.alchemy.beertech.com/teradata-updates/">
                    3/15 Teradata Update
                  </a>
                </div>
              </div>
            </center>
          </div>
        </div>
      </section>


      <h1 className="container">
        <center>Datasets by Function</center>
      </h1>

      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList_functions.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <h1 className="container">
        <center>Datasets by Location</center>
      </h1>

      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList_locations.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
