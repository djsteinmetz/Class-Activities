SELECT * 
FROM top5000
INNER JOIN top5000_albums ON top5000.artist = top5000_albums.artist and top5000.year = top5000_albums.year;

SELECT 
    *
FROM
    top5000
        JOIN
    top5000_albums ON top5000.artist = top5000_albums.artist
WHERE
    top5000.artist LIKE '%The Beatles%';