import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

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
    link: 'https://www.google.com',
    SvgClassName: styles.featureSvg,
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
    link: 'https://www.google.com',
    SvgClassName: styles.featureSvg,
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
    link: 'https://www.google.com',
    SvgClassName: styles.featureSvg,
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
    link: 'https://www.google.com',
    SvgClassName: styles.featureSvg,
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
    link: 'https://www.google.com',
    SvgClassName: styles.featureSvg,
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
    link: 'https://www.google.com',
    SvgClassName: styles.featureSvg,
  },
];

const FeatureList_usages = [
  {
    title: 'US Data - VIP Sales',
    Svg: require('@site/static/img/gold-medal-svgrepo-com.svg').default,
    description: (
      <>
        Total user visits: 26
      </>
    ),
    link: 'docs/tutorial-basics/Calendar',
    SvgClassName: styles.featureUsageSvg,
  },
  {
    title: 'US Data - Calendar',
    Svg: require('@site/static/img/second-svgrepo-com.svg')
      .default,
    description: (
      <>
        Total user visits: 21
      </>
    ),
    link: 'docs/tutorial-basics/Calendar',
    SvgClassName: styles.featureUsageSvg,
  },
  {
    title: 'US Data - Wholesaler',
    Svg: require('@site/static/img/third-svgrepo-com.svg').default,
    description: (
      <>
        Total user visits: 20
      </>
    ),
    link: 'docs/tutorial-basics/Calendar',
    SvgClassName: styles.featureUsageSvg,
  },
];

function Feature({ Svg, title, description, link, SvgClassName }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={SvgClassName} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md text-[20px]">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  if (typeof window !== "undefined") {
    AOS.init();
  }
  return (
    <main>
      <h1 className="container text-[50px] py-40" data-aos="fade-up" data-aos-duration="3000">
        <center>Bulletin</center>
      </h1>

      <section className={styles.bulletin_features}>
        <div className="container">
          <div className="row">
            <center>
              <div className={styles.bulletin_item} data-aos="fade-right" data-aos-duration="2000">
                <div className={styles.bulletin_date}>3/17</div>
                <div className={styles.bulletin_text}>Happy St. Patrick's Day!</div>
              </div>
            </center>
          </div>
          <div className="row">
            <center>
              <div className={styles.bulletin_item} data-aos="fade-right" data-aos-duration="2000">
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

      <h1 className="container text-[50px] py-40" data-aos="fade-up" data-aos-duration="3000">
        <center>Datasets by Usage</center>
      </h1>

      <section className={styles.features}>
        <div data-aos="fade-down" data-aos-duration="2000" className="container">
          <div className="row py-20">
            {FeatureList_usages.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <h1 className="container text-[50px] py-40" data-aos="fade-up" data-aos-duration="3000">
        <center>Datasets by Function</center>
      </h1>

      <section className={styles.features}>
        <div data-aos="fade-down" data-aos-duration="2000" className="container">
          <div className="row">
            {FeatureList_functions.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <h1 className="container text-[50px] py-40" data-aos="fade-up" data-aos-duration="3000">
        <center>Datasets by Location</center>
      </h1>

      <section className={styles.features}>
        <div data-aos="fade-down" data-aos-duration="2000" className="container">
          <div className="row">
            {FeatureList_locations.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </main >
  );
}