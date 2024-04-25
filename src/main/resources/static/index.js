$(function() {
    hentAlleBilletter();
});
let ticketArray = [];
function billettKjop() {
    let film = document.getElementById("filmutvalg").value;
    let antall = document.getElementById("antall").value;
    let fnavn = document.getElementById("fnavn").value;
    let enavn = document.getElementById("enavn").value;
    let epost = document.getElementById("epost").value;
    let telefonNr = document.getElementById("telefonNr").value;
    let feilmelding = false;

    if (film === "0") {
        document.getElementById("FeilValg").innerHTML = "skriv en film";
        feilmelding = true;
    }

    if (antall === "" || antall <= 0) {
        document.getElementById("FeilAntall").innerHTML = "trykk på et gyldig antall billeter";
        feilmelding = true;
    }

    if (fnavn === "") {
        document.getElementById("FeilFornavn").innerHTML = "skriv inn fornavnet ditt";
        feilmelding = true;
    }

    if (enavn === "") {
        document.getElementById("FeilEtternavn").innerHTML = "skriv inn etternavn ditt";
        feilmelding = true;
    }

    if (epost === "" || !epost.includes('@')) {
        document.getElementById("FeilEpost").innerHTML = "skriv inn et  gyldig epost ";
        feilmelding = true;
    }

    if (telefonNr === "") {
        document.getElementById("FeilTelefon").innerHTML = "skriv inn et gyldig telefonnummer ditt";
        feilmelding = true;
    }

    if (!feilmelding) {
        let billettData = {
            film: film,
            antallBilletter: antall,
            fnavn: fnavn,
            enavn: enavn,
            epost: epost,
            telefonNr: telefonNr
        };

        $.ajax({
            url: '/lagre',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(billettData),
            success: function(response) {
                console.log('Lagring vellykket: ', response);
                tømInputFelter();
                hentAlleBilletter();
            },
            error: function(error) {
                console.log('Lagring feilet: ', error);
            }
        });
    }
}

function tømInputFelter() {
    document.getElementById("filmutvalg").value = "0";
    document.getElementById("antall").value = "";
    document.getElementById("fnavn").value = "";
    document.getElementById("enavn").value = "";
    document.getElementById("epost").value = "";
    document.getElementById("telefonNr").value = "";
    tømFeilmeldinger();
}

function tømFeilmeldinger() {
    document.getElementById("FeilValg").innerHTML = "";
    document.getElementById("FeilAntall").innerHTML = "";
    document.getElementById("FeilFornavn").innerHTML = "";
    document.getElementById("FeilEtternavn").innerHTML = "";
    document.getElementById("FeilEpost").innerHTML = "";
    document.getElementById("FeilTelefonNr").innerHTML = "";
}

function hentAlleBilletter() {
    $.ajax({
        url: '/hentAlle',
        type: 'GET',
        contentType: 'application/json',
        success: function(billetter) {
            visBillettTabell(billetter);
        },
        error: function(error) {
            console.log('Feil ved henting av billetter: ', error);
        }
    });
}

function visBillettTabell(billetter) {
    let ut = "<table class='table table-striped'><tr>" +
        "<th>Film</th><th>Billetter</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>TelefonNr</th><th>Handlinger</th></tr>";
    billetter.forEach(function(billett) {
        ut += "<tr>" +
            "<td>" + billett.film + "</td>" +
            "<td>" + billett.antallBilletter + "</td>" +
            "<td>" + billett.fnavn + "</td>" +
            "<td>" + billett.enavn + "</td>" +
            "<td>" + billett.epost + "</td>" +
            "<td>" + billett.telefonNr + "</td>" +
            "<td><a href='redigerBillett.html?id=" + billett.id + "' class='btn btn-primary'>Endre</a> " +
            "<button onclick='slettEn(" + billett.id + ")' class='btn btn-danger'>Slett</button></td></tr>";
    });
    document.getElementById("billettTabell").innerHTML = ut;
}

function slettAlle() {
    $.ajax({
        url: "/slettAlleBilletter",
        type: "DELETE",
        success: function () {

            $("#billettTabell").html("");
            $("#filmutvalg").val("0");
            $("#antall").val("");
            $("#fnavn").val("");
            $("#enavn").val("");
            $("#epost").val("");
            $("#telefonNr").val("");
            console.log("Alle billetter er slettet.");
        },
        error: function (error) {
            console.error("Feil ved sletting av alle billetter: ", error);
        }
    });
}
function slettEn(id) {
    const url = "/slettEn?id=" + id;
    $.get(url, function () {
        hentAlleBilletter();
    });
}