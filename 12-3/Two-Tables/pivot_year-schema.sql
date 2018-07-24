SELECT COUNT(position), year
FROM top5000
GROUP BY year
ORDER BY COUNT(position) DESC;