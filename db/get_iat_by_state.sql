SELECT
  s.state_name AS state,
  r.name AS race,
  SUM(i.responses) AS responses,
  SUM(i.sum_iat) / SUM(i.responses) AS iat
FROM
  iat_data i
  JOIN races r ON i.race = r.iat_lookup
  JOIN states s ON s.state_abv = i.state_abv
WHERE
  i.state_abv = $1
GROUP BY
  i.state_abv,
  s.state_name,
  r.name
ORDER BY
  i.state_abv;