package com.example.data1700obligatorisk3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreBilletter(Billett billett) {
        System.out.println("billetter " + billett);
        String sql = "INSERT INTO Billett (film, antallBilletter, fnavn, enavn, epost, telefonNr) VALUES (?, ?, ?, ?, ?, ?)";
        db.update(sql, billett.getFilm(), billett.getAntallBilletter(), billett.getFnavn(),
                billett.getEnavn(), billett.getEpost(), billett.getTelefonNr());
    }

    public List<Billett> hentAlleBilletter() {
        String sql = "SELECT * FROM Billett";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        System.out.println(alleBilletter);
        return alleBilletter;
    }

    public Billett hentEnBillett(Integer id) {
        String sql = "SELECT * FROM Billett WHERE id=?";
        List<Billett> result = db.query(sql, new Object[]{id}, new BeanPropertyRowMapper<>(Billett.class));
        return result.isEmpty() ? null : result.get(0);
    }

    public void endreBillett(Billett billett) {
        String sql = "UPDATE Billett SET film=?, antallBilletter=?, fnavn=?, enavn=?, epost=?, telefonNr=? WHERE id=?";
        db.update(sql, billett.getFilm(), billett.getAntallBilletter(), billett.getFnavn(),
                billett.getEnavn(), billett.getEpost(), billett.getTelefonNr(), billett.getId());
    }

    public void slettEn(Integer id) {
        String sql = "DELETE FROM Billett WHERE id=?";
        db.update(sql, id);
    }

    public void slettAlle() {
        String sql = "DELETE FROM denBillett";
        db.update(sql);
    }
}
