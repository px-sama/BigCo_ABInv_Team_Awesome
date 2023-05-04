import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


// SVG images of non-maps: https://undraw.co/ using color code #CCA43C
// SBG images of maps: https://www.fla-shop.com/svg/ using color code #CCA43C

const FeatureList_functions = [
  {
    title: 'Supply Chain',
    Svg: require('@site/static/img/undraw_logistics_x-4-dc.svg').default,
    description: (
      <>
        Transportation Volume, Warehouse Locations, etc.
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
        Sales by Product, Sales by Region, etc.
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
        Calendar, Legal Codes by Region, etc.
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
        By State, By City, etc.
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
        By Province, By Region, etc.
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
        By Continent, By Country, etc.
      </>
    ),
    link: 'https://www.google.com',
    SvgClassName: styles.featureSvg,
  },
];

const FeatureList_usages = [
  {
    title: 'Most Clicked on Tables this Week: Calendar',
    Svg: require('@site/static/img/calendar.svg').default,
    description: (
      <>
        Tables by click popularity.
      </>
    ),
    link: 'docs/tutorial-basics/Calendar',
    SvgClassName: styles.featureUsageSvg,
  },
  {
    title: 'Featured Table this Week: Vip Sales',
    Svg: require('@site/static/img/vip-sales.svg')
      .default,
    description: (
      <>
        Tables featured by BeerTech team.
      </>
    ),
    link: 'docs/tutorial-basics/Calendar',
    SvgClassName: styles.featureUsageSvg,
  },
  {
    title: 'Newest Table: Wholesaler',
    Svg: require('@site/static/img/wholesaler.svg').default,
    description: (
      <>
        Most recently added / updated table.
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
        <center>Popular Datasets</center>
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