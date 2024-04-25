package com.example.data1700obligatorisk3;

public class Billett {
    private String film;
    private String antallBilletter;
    private String fnavn;
    private String enavn;
    private String epost;
    private String telefonNr;
    private int id;

    public Billett(){

    }

    public Billett(String film, String antallBilletter, String fnavn, String enavn, String epost, String telefonNr, int id) {
        this.film = film;
        this.antallBilletter = antallBilletter;
        this.fnavn = fnavn;
        this.enavn = enavn;
        this.epost = epost;
        this.telefonNr = telefonNr;
        this.id = id;
    }

    public String getFilm() {
        return this.film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getAntallBilletter() {
        return this.antallBilletter;
    }

    public void setAntallBilletter(String antallBilletter) {
        this.antallBilletter = antallBilletter;
    }

    public String getFnavn() {
        return this.fnavn;
    }

    public void setFnavn(String fnavn) {
        this.fnavn = fnavn;
    }

    public String getEnavn() {
        return this.enavn;
    }

    public void setEnavn(String enavn) {
        this.enavn = enavn;
    }

    public String getEpost() {
        return this.epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public String getTelefonNr() {
        return this.telefonNr;
    }

    public void setTelefonNr(String telefonNr) {
        this.telefonNr = telefonNr;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}