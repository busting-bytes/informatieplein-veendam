
const counters = [
    {
        "name": "Hulp bij geldzaken en formulieren",
        "logo": {
            "filename": "logo_loketgeldzaken.png",
            "alt": "Humanitas, Bibliotheek Veendam"
        },
        "description": "Voor vragen over subsidies, uitkeringen, aanvragen DigiD, formulieren overheid, woningstichting en veel meer.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "repeat": "always"
            }
        ],
        "calendar_summary": "Op maandagen van 14:00 tot 16:00 uur."
    },
    {
        "name": "Spreekuur web in de wijk",
        "logo": {
            "filename": "logo_webwijk.png",
            "alt": "Web in de wijk"
        },
        "description": "Voor vragen over subsidies, uitkeringen, aanvragen DigiD, formulieren overheid, woningstichting en veel meer.",
        "calendar": [
            {
                "day": "monday",
                "start": "13:00",
                "end": "14:30",
                "repeat": "always"
            }
        ],
        "calendar_summary": "Op maandagen van 13:00 tot 14.30 uur."
    },
    {
        "name": "Informatieloket digitale overheid",
        "logo": {
            "filename": "logo_bibliotheekveendam.png",
            "alt": "Bibliotheek Veendam"
        },
        "description": "Hulp bij contact met de digitale overheid.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "repeat": "always"
            }
        ],
        "calendar_summary": "Op maandagen van 14:00 tot 16:00 uur."
    },
    {
        "name": "Loket informatie geheugenproblemen",
        "logo": {
            "filename": "logo_loketgeheugen.png",
            "alt": "Buurtzorg, Zorggroep Meander, De Basis"
        },
        "description": "",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "repeat": "always"
            }
        ],
        "calendar_summary": "Op maandagen van 14:00 tot 16:00 uur."
    },
    {
        "name": "Loket Leefbaarheid",
        "logo": {
            "filename": "logo_loketleefbaarheid.png",
            "alt": "Groninger Dorpen, Loko Loket, Loket Leefbaarheid"
        },
        "description": "Heb je samen met buurtgenoten een leuk plan bedacht dat bijdraagt aan prettig wonen in jouw straat of dorp? Loket Leefbaarheid is een subsidieregeling voor inwoners uit de hele provincie Groningen.",
        "calendar": [
            {
                "day": "wednesday",
                "start": "10:00",
                "end": "12:00",
                "repeat": "always"
            }
        ],
        "calendar_summary": "Oneven weken op woensdag van 10:00 tot 12:00 uur."
    },
    {
        "name": "Loket Buurtgezinnen",
        "logo": {
            "filename": "logo_loketbuurtgezinnen.png",
            "alt": "Buurtgezinnen"
        },
        "description": "Onder het motto 'Opvoeden doen we samen', koppelt Buurtgezinnen gezinnen die steun kunnen gebruiken aan een stabiel gezin in de buurt. Zo krijgen kinderen wat extra liefde en aandacht en worden ouders ontlast.",
        "calendar": [
            {
                "day": "wednesday",
                "start": "10:00",
                "end": "12:00",
                "repeat": "always"
            }
        ],
        "calendar_summary": "Oneven weken op woensdag van 10:00 tot 12:00 uur."
    },
    {
        "name": "Informatiepunt Taalhuis",
        "logo": {
            "filename": "logo_bibliotheekveendam.png",
            "alt": "Bibliotheek Veendam"
        },
        "description": "Tijdens dit spreekuur kun je samen met de Taalhuiscoördinator bekijken wat je nodig hebt en wat bij je past. Dat kan bijvoorbeeld een oefenboek zijn of een cursus.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "15:00",
                "repeat": "always"
            }
        ],
        "calendar_summary": "Op maandagen van 14:00 tot 15:00 uur."
    },
    {
        "name": "Hulp bij woningzaken",
        "logo": {
            "filename": "logo_acantus.png",
            "alt": "Acantus"
        },
        "description": "Voor vragen over woning huren, doorschuiven naar een ander huis, leefbaarheid in je wijk en meer.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "repeat": "always"
            }
        ],
        "calendar_summary": "Op maandagen van 14:00 tot 16:00 uur."
    },
    {
        "name": "Hulp bij geldzaken en formulieren",
        "logo": {
            "filename": "logo_schuldhm.png",
            "alt": "SchuldHulpMaatje"
        },
        "description": "Voor vragen over geld, subsidies, uitkeringen, formulieren overheid en meer.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "repeat": "even_weeks"
            },
            {
                "day": "wednesday",
                "start": "10:00",
                "end": "12:00",
                "repeat": "odd_weeks"
            }
        ],
        "calendar_text": "Even weken op maandag van 14:00 tot 16:00 uur, oneven weken op woensdag van 10:00 tot 12:00 uur."
    },
    {
        "name": "Inloopspreekuur FNV",
        "logo": {
            "filename": "logo_fnv.png",
            "alt": "FNV"
        },
        "description": "Voor vragen over je loopbaan of voor een gesprek over je werk met een coach.",
        "calendar": [
            {
                "day": "wednesday",
                "start": "13:00",
                "end": "15:00",
                "repeat": "odd_weeks"
            }
        ],
        "calendar_summary": "Oneven weken op woensdag van 13:00 tot 15:00 uur."
    },
    {
        "name": "Vrijwilligers informatiepunt",
        "logo": {
            "filename": "logo_vip.png",
            "alt": "Vrijwilligers Informatiepunt"
        },
        "description": "Kom langs bij ons voor het zoeken of plaatsen van vacatures, voor informatie, advies en belangenbehartiging en deskundigheidsbevordering van vrijwilligers.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "repeat": "first_week"
            },
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "repeat": "third_week"
            }
        ],
        "calendar_summary": "Iedere eerste en derde maandag van de maand van 13:00 tot 15:00 uur."
    },
    {
        "name": "Loket Stichting Leergeld",
        "logo": {
            "filename": "logo_stleergeld.png",
            "alt": "Stichting Leergeld"
        },
        "description": "Je kunt een vergoeding aanvragen voor activiteiten op het gebied van onderwijs, sport, cultuur en welzijn.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "repeat": "first_week"
            },
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "repeat": "third_week"
            }
        ],
        "calendar_summary": "Iedere eerste en derde maandag van de maand van 13:00 tot 15:00 uur."
    }
]

const counterDisplayDuration = 10000;

function nextCounter(counterIdx) {
    populateDOMWithCounterData(counters[counterIdx]);

    counterIdx++;
    return (counterIdx >= counters.length) ? 0 : counterIdx;
}

function populateDOMWithCounterData(counter) {
    const counterName = document.querySelector('[data-counter-name]');
    const counterLogo = document.querySelector('[data-counter-logo]');
    const counterDescription = document.querySelector('[data-counter-description]');
    const counterCalendarSummary = document.querySelector('[data-counter-calendar-summary]');

    counterName.textContent = counter.name;
    counterLogo.src = `assets/images/${counter.logo.filename}`;
    counterLogo.alt = counter.logo.alt;
    counterDescription.textContent = counter.description;
    counterCalendarSummary.textContent = counter.calendar_summary;
}

document.addEventListener("DOMContentLoaded", () => {
    let counterIdx = 0;

    counterIdx = nextCounter(counterIdx);

    setInterval(() => {
        counterIdx = nextCounter(counterIdx);
    }, counterDisplayDuration);
});
