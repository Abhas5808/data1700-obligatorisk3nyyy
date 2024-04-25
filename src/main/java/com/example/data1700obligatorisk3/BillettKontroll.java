package com.example.data1700obligatorisk3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BillettKontroll {
    @Autowired
    private BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreBillett(@RequestBody Billett billett) {
        rep.lagreBilletter(billett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlleBilletter() {
        return rep.hentAlleBilletter();
    }

    @GetMapping("/hentEn")
    public Billett hentEnBillett(@RequestParam Integer id) {
        return rep.hentEnBillett(id);
    }

    @PostMapping("/endre")
    public void endreBillett(@RequestBody Billett billett) {
        rep.endreBillett(billett);
    }

    @GetMapping("/slettEn")
    public void slettEn(Integer id) {
        rep.slettEn(id);
    }


    @DeleteMapping("/slettAlleBilletter")
    public void slettAlle() {
        rep.slettAlle();
    }

}
