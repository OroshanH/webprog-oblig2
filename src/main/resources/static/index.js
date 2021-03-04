
        function Kjop() {

            const antall = $("#antall").val();
            const tlf = $("#tlf").val();
            $("#feilAntall").html("");
            $("#feilFornavn").html("");
            $("#feilEtternavn").html("");
            $("#feilTlf").html("");
            $("#feilEpost").html("");

            if (isNaN(parseInt(antall))) {
                $("#feilAntall").html("Vennligst skriv inn antall");
            } else if ($("#fornavn").val() === "") {
                $("#feilFornavn").html("Vennligst skriv inn fornavn");
            } else if ($("#etternavn").val() === "") {
                $("#feilEtternavn").html("Vennligst skriv inn etternavn");
            } else if (isNaN(parseInt(tlf))) {
                $("#feilTlf").html("Vennligst skriv inn tlf");
            } else if ($("#epost").val() === "") {
                $("#feilEpost").html("Vennligst skriv inn epost");
            } else {
                Bestillt();
            }
        }


            function Bestillt(){
                const Billett = {
                    Film: $("#film").val(),
                    Antall: $("#antall").val(),
                    Fornavn: $("#fornavn").val(),
                    Etternavn: $("#etternavn").val(),
                    Tlf: $("#tlf").val(),
                    Epost: $("#epost").val()};

                $.post("/addBillett", Billett, function () {
                    getBilletter() });

            }

                function getBilletter(){
                        $.get("/getBilletter", function (billetter) {
                            skrivUt(billetter);
                        });
                    function skrivUt(billetter){
                        let ut = "";
                        for (const i of billetter) {
                            ut +=  i.film + " " + i.antall + " " + i.fornavn + " " + i.etternavn + " " + i.tlf + " " + i.epost + "<br>";
                        }
                        $("#txt").html(ut);
                    }
                    $("#antall").val("");
                    $("#fornavn").val("");
                    $("#etternavn").val("");
                    $("#tlf").val("");
                    $("#epost").val("");
                    $("#form").trigger("reset");
                }

        function slettKnp() {
            $.get("/slettBilletter", function () {
                getBilletter();
            })
        }
