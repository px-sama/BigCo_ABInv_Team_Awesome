export default [
  {
    comment: [
      "Find the latest value available for each symbol (crypto pair). This dataset collects live market data from the Coinbase API.",
    ],
    query: `SELECT *
FROM trades
WHERE symbol IN ('BTC-USD', 'ETH-USD')
LATEST ON timestamp PARTITION BY symbol;`,
  },

  {
    comment: [
      "Aggregations for the BTC-USD for the past day downsampled in 15-minute intervals.",
      "We use the SQL extension SAMPLE BY to aggregate data at regular intervals. QuestDB",
      "ingests live market data from the Coinbase API.",
    ],
    query: `SELECT
  timestamp,
  first(price) AS open,
  last(price) AS close,
  min(price),
  max(price),
  sum(amount) AS volume
FROM trades
WHERE symbol = 'BTC-USD' AND timestamp > dateadd('d', -1, now())
SAMPLE BY 15m ALIGN TO CALENDAR;`,
  },

  {
    comment: [
      "Calculates the weighted average for BTC-USD over the past day, downsampled in 15-minute intervals.",
      "We use the SQL extension SAMPLE BY to aggregate data at regular intervals.",
      "QuestDB ingests live market data from the Coinbase API",
    ],
    query: `SELECT
  timestamp,
  sum(price * amount) / sum(amount) AS vwap_price,
  sum(amount) AS volume
FROM trades
WHERE
  symbol = 'BTC-USD'
  AND timestamp > dateadd('d', -1, now())
SAMPLE BY 15m ALIGN TO CALENDAR;`,
  },

  {
    comment: [
      "Find the latest position for each ship in the ocean, for ships within a specific geo boundary and",
      "within a time frame. The geo boundary is represented using a geohash of precision 3, which represents an area",
      "of 156x156 Km. QuestDB supports geohashes from 5000x5000 km to 37.2mmx18.6mm. This dataset has been synthetically",
      "generated for this demo and contains over 122 million records",
    ],
    query: `SELECT *
FROM pos
WHERE geo6 within(#wtq)
  AND time < '2021-09-19T00:00:00.000000Z'
LATEST ON time PARTITION BY id;`,
  },

  {
    comment: [
      "Show all the taxi rides during 2014 and 2015. We filter by time, selecting the entire year.",
      "QuestDB supports SQL extensions to manipulate timestamped data with ease. You can filter the dataset",
      "by any given time range. This dataset includes open data from the City of New York and is over 1.6 billion rows.",
    ],
    query: `SELECT *
FROM trips
WHERE
  pickup_datetime >= '2014-01-01'
  AND pickup_datetime < '2016-01-01'`,
  },
  {
    comment: [
      "Count the number of taxi rides per hour in the 7 days starting from June 1, 2018. We",
      "use SQL extensions to manipulate time ranges with more ease. We also use SAMPLE BY to",
      "aggregate records at regular intervals. This dataset includes open data from the City of New York with 1.6 billion rows.",
    ],
    query: `SELECT pickup_datetime, count()
FROM trips
WHERE pickup_datetime IN '2018-06-01;7d'
SAMPLE BY 1h;`,
  },

  {
    comment: [
      "Show weather statistics aggregated per month",
      "This dataset contains public weather information and is over 137,000 records.",
    ],
    query: `SELECT
  timestamp,
  min(tempF),
  max(tempF),
  avg(tempF)
FROM weather
SAMPLE BY 1M;`,
  },

  {
    comment: [
      "For each taxi ride on June 1, 2018, retrieve the closest weather information we have on record.",
      "This query joins two unrelated tables using an ASOF JOIN, automatically finding the closest event (by timestamp)",
      "across multiple tables.We do not specify which columns to use",
      "for the join, as QuestDB has the concept of a designated timestamp for each table.",
      "join, as QuestDB has the concept of a designated timestamp for each table.",
      "We query a publicly available weather dataset (130K records)",
      "and a New York City taxi rides public dataset containing over 1.6 billion rows.",
    ],
    query: `SELECT
  pickup_datetime,
  fare_amount,
  tempF,
  windDir
FROM
  (
    SELECT * FROM trips
    WHERE pickup_datetime IN '2018-06-01'
  ) ASOF JOIN weather;`,
  },

  {
    comment: [
      "Compute the average gas price per gallon in one-month intervals. We use the SAMPLE BY",
      "SQL extension to aggregate records at regular intervals. This query covers a small demo",
      "dataset (1,028 records) with historical gas prices.",
    ],
    query: `SELECT timestamp, avg(galon_price)
FROM gas_prices
SAMPLE BY 1M;`,
  },
].map(({ comment, query }) => ({
  comment: comment.map((c) => `-- ${c}`).join("\n"),
  query: query.trim(),
}))
