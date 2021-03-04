package webprog.oblig2.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettKontroller {
    private final List<Billett> Billetter = new ArrayList<>();

    @PostMapping("/addBillett")
    public void LagreFilmene(Billett innFilmer) {
        Billetter.add(innFilmer);
    }

    @GetMapping("/getBilletter")
    public List<Billett> getBilletter() {
        return Billetter;
    }

    @GetMapping("/slettBilletter")
    public void clear() {
        Billetter.clear();
    }

}
