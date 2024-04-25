CREATE TABLE Billett
(
    enavn           varchar(255) NOT NULL,
    fnavn           varchar(255) NOT NULL,
    film           varchar(255) NOT NULL,
    antallBilletter INT NOT NULL,
    epost           varchar(255) NOT NULL,
    telefonNr           INT NOT NULL,
    id              INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (enavn)
);