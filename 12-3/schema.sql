DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
    position INT NOT NULL,
    artist VARCHAR(100) NULL,
    song VARCHAR(100) NULL,
    year INT(4) NULL,
    raw_total FLOAT(5, 3) NULL,
    raw_usa FLOAT(5, 3) NULL,
    raw_uk FLOAT(5, 3) NULL,
    raw_eur FLOAT(5, 3) NULL,
    raw_row FLOAT(4, 3) NULL,
    PRIMARY KEY(position)
);

SELECT * FROM top5000;