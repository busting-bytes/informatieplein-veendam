/**
 * Frequency options:
 * - "weekly": every week
 * - "even_weeks": every even week
 * - "odd_weeks": every odd week
 * - "*_of_month": every (first | second | third | fourth | last) weekday of the month, where the weekday is specified in the "day" property
 * - "once": once on a specified date taken from the "day" property
 */
const participants = [
    {
        "name": "Hulp bij formulieren",
        "logo": {
            "filename": "logo_humanitas.png",
            "alt": "Humanitas"
        },
        "description": "Humanitas helpt bij vragen over het invullen van (digitale) formulieren of het aanvragen van toeslagen, subsidies en meer.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "weekly"
            },
            {
                "day": "wednesday",
                "start": "10:00",
                "end": "12:00",
                "frequency": "weekly"
            }
        ],
        "calendar_summary": "Iedere maandag van 14:00 tot 16:00 uur en iedere woensdag van 10:00 tot 12:00 uur."
    },
     {
        "name": "Hulp digitale zaken",
        "logo": {
            "filename": "logo_bibliotheekveendam.png",
            "alt": "Bibliotheek Veeendam"
        },
        "description": "Vragen over je computer, e-reader, smartphone of tablet? Kom naar het digitaal spreekuur.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "weekly"
            },
            {
                "day": "wednesday",
                "start": "10:00",
                "end": "12:00",
                "frequency": "weekly"
            }
        ],
        "calendar_summary": "Iedere maandag van 14:00 tot 16:00 uur en iedere woensdag van 10:00 tot 12:00 uur."
    },
   {
        "name": "Web in de wijk",
        "logo": {
            "filename": "logo_webwijk.png",
            "alt": "Web in de wijk"
        },
        "description": "Graag je digitale vaardigheden verbeteren? Informatie over digitale cursussen en voor vragen op digitaal gebied.",
        "calendar": [
            {
                "day": "monday",
                "start": "13:00",
                "end": "15:30",
                "frequency": "weekly"
            }
        ],
        "calendar_summary": "Op maandagen van 13:00 tot 15.30 uur."
    },
    {
        "name": "Informatiepunt digitale overheid",
        "logo": {
            "filename": "logo_bibliotheekveendam.png",
            "alt": "Bibliotheek Veendam"
        },
        "description": "Zaken regelen met de overheid: het moet steeds vaker online. Kun je hulp gebruiken? Kom dan naar het IDO.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "weekly"
            },
            {
                "day": "wednesday",
                "start": "10:00",
                "end": "12:00",
                "frequency": "weekly"
            }

        ],
        "calendar_summary": "Iedere maandag van 14:00 tot 16:00 uur en iedere woensdag van 10.00 tot 12.00 uur."
    },
    {
        "name": "Geheugenproblematiek",
        "logo": {
            "filename": "logo_loketgeheugen4.png",
            "alt": "Buurtzorg, Zorggroep Meander, De Basis"
        },
        "description": "Dit is een gezamenlijk spreekuur van deBasis, Meander, Buurtzorg en TSN.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "weekly"
            }
        ],
        "calendar_summary": "Iedere maandag van 14:00 tot 16:00 uur."
    },
    {
        "name": "Loket Leefbaarheid",
        "logo": {
            "filename": "logo_loketleefbaarheid.png",
            "alt": "Groninger Dorpen, Loko Loket, Loket Leefbaarheid"
        },
        "description": "Tijdens het spreekuur kun je terecht voor aanvragen om de gemeente Veendam leefbaarder te maken. Ook wordt er informatie gegeven over het algehele proces en het uitvoeren van een project.",
        "calendar": [
            {
                "day": "wednesday",
                "start": "10:00",
                "end": "12:00",
                "frequency": "odd_weeks"
            }
        ],
        "calendar_summary": "Oneven weken op woensdag van 10:00 tot 12:00 uur, niet van 14 juli tot/met 25 augustus."
    },
    {
        "name": "Buurtgezinnen",
        "logo": {
            "filename": "logo_loketbuurtgezinnen.png",
            "alt": "Buurtgezinnen"
        },
        "description": "Inloopmoment van Buurtgezinnen. Heb je steun nodig of kun je het geven? (niet in schoolvakanties).",
        "calendar": [
            {
                "day": "wednesday",
                "start": "10:00",
                "end": "12:00",
                "frequency": "odd_weeks"
            }
        ],
        "calendar_summary": "Oneven weken op woensdag van 10:00 tot 12:00 uur."
    },
    {
        "name": "Taalhuis spreekuur",
        "logo": {
            "filename": "logo_bibliotheekveendam.png",
            "alt": "Bibliotheek Veendam"
        },
        "description": "Elke week is er een spreekuur op het Informatieplein met de Taalhuiscoördinator. Samen bekijken jullie wat je nodig hebt en wat bij je past.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "15:00",
                "frequency": "weekly"
            }
        ],
        "calendar_summary": "Op maandagen van 14:00 tot 15:00 uur."
    },
    {
        "name": "Acantus",
        "logo": {
            "filename": "logo_acantus.png",
            "alt": "Acantus"
        },
        "description": "Voor al je vragen over wonen. Wil je een woning huren of doorschuiven naar een ander huis, heb je vragen over leefbaarheid in je wijk?",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "weekly"
            }
        ],
        "calendar_summary": "Iedere maandag van 14:00 tot 16:00 uur."
    },
    {
        "name": "Schuldhulpmaatje",
        "logo": {
            "filename": "logo_schuldhm.png",
            "alt": "SchuldHulpMaatje"
        },
        "description": "Schuldhulpmaatje pakt samen met jou je geldproblemen aan. Gratis en zonder oordeel.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "first_of_month"
            }
        ],
        "calendar_summary": "Eerste maandag van de maand van 14:00 tot 16:00 uur."
    },
    {
        "name": "FNV loopbaancoaching",
        "logo": {
            "filename": "logo_fnv.png",
            "alt": "FNV"
        },
        "description": "Heb je een vraag over je loopbaan of wil je met een coach praten over je werk? Kom naar de loopbaanadviseurs in de bibliotheek.",
        "calendar": [
            {
                "day": "thursday",
                "start": "17:30",
                "end": "19:30",
                "frequency": "odd_weeks"
            }
        ],
        "calendar_summary": "Oneven weken t/m 17 juli op donderdag van 17:30 tot 19:30 uur ."
    },
    {
        "name": "Hulp bij geldzaken",
        "logo": {
            "filename": "Logo_vkb.png",
            "alt": "VKB"
        },
        "description": "Spreekuur VKB. Heb je moeite met het betalen van rekeningen of heb je financiëel advies nodig? Samen zorgen we voor financiële rust en stabiliteit.",
        "calendar": [
            {
                "day": "monday",
                "start": "13:00",
                "end": "15:00",
                "frequency": "weekly"
            }
        ],
        "calendar_summary": "Iedere maandag van 13:00 tot 15:00 uur."
    },
    {
        "name": "Vrijwilligers informatiepunt",
        "logo": {
            "filename": "logo_vip.png",
            "alt": "Vrijwilligers Informatiepunt"
        },
        "description": "Voor mensen die vrijwilligerswerk willen doen en voor organisaties die vrijwilligers zoeken",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "first_of_month"
            },
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "third_of_month"
            }
        ],
        "calendar_summary": "Iedere eerste en derde maandag van de maand van 14:00 tot 16:00 uur."
    },
    {
        "name": "Stichting Leergeld",
        "logo": {
            "filename": "logo_stleergeld.png",
            "alt": "Stichting Leergeld"
        },
        "description": "Stichting Leergeld biedt waar nodig financiële hulp aan gezinnen. Er kunnen aanvragen worden gedaan voor binnen- of buitenschoolse activiteiten.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "first_of_month"
            },
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "third_of_month"
            }
        ],
        "calendar_summary": "Iedere eerste en derde maandag van de maand van 14:00 tot 16:00 uur."
    },
    {
        "name": "Jongerenwerk deBasis",
        "logo": {
            "filename": "logo_debasis.png",
            "alt": "deBasis Veendam"
        },
        "description": "Een plek waar jongeren terecht kunnen met vragen over vrije tijd/activiteiten, werk, school, contact, geld kortom alles wat jongeren bezig kan houden.",
        "calendar": [
            {
                "day": "31-12-2025",
                "start": "14:00",
                "end": "16:00",
                "frequency": "once"
           }
        ],
        "calendar_summary": "Iedere maandag van 14:00 tot 16:00 uur van september t/m juni."
    },
    {
        "name": "ImpulsLoket Nationaal Programma Groningen",
        "logo": {
            "filename": "Logo_Impulsloket.png",
            "alt": "Nationaal programma Groningen"
        },
        "description": "Subsidie voor stichting, vereniging, coöperatie zonder winstoogmerk. Heb je een plan dat de leefbaarheid in jouw omgeving verbetert?",
        "calendar": [
            {
                "day": "10-09-2025",
                "start": "10:00",
                "end": "12:00",
                "frequency": "once"
           },
            {
                "day": "08-10-2025",
                "start": "10:00",
                "end": "12:00",
                "frequency": "once"
           },
            {
                "day": "05-11-2025",
                "start": "10:00",
                "end": "12:00",
                "frequency": "once"
           },
            {
                "day": "03-12-2025",
                "start": "10:00",
                "end": "12:00",
                "frequency": "once"
           }
    ],
        "calendar_summary": "Op 10 september, 8 oktober, 5 november en 3 december van 10:00 tot 12:00 uur."
    },
    // {
    //     "name": "Workshop Wachtwoordbeheer",
    //     "logo": {
    //         "filename": "logo_bibliotheekveendam.png",
    //         "alt": "Bibliotheek Veendam"
    //     },
    //     "description": "Wachtwoorden, je hebt ze overal voor nodig. Vaak moet een wachtwoord aan bepaalde criteria voldoen. En eigenlijk zou je een wachtwoord niet moeten hergebruiken. Hoe onthoud je al die wachtwoorden? Daar zijn goede hulpmiddelen voor. Deze middag leer je er alles over en kom je erachter wat een goed wachtwoord is.",
    //     "calendar": [
    //         {
    //             "day": "10-04-2025",
    //             "start": "14:00",
    //             "end": "16:00",
    //             "frequency": "once"
    //        }
    //     ],
    //     "calendar_summary": "Op donderdag 10 april van 14:00 tot 16:00 uur."
    // }
];
const highlightableParticipants = participants.filter(
    participant => undefined !== participant.calendar.find(calendar => {
        return calendar.frequency !== "once"
            || moment(calendar.day, "DD-MM-YYYY").isSameOrAfter(moment(), "day");
    })
);

// const highlightNextParticipantInterval = 1000 * 10; // 10s
const highlightNextParticipantInterval = 1000 * 10; // 6s
const updateItineraryInterval = 1000 * 60 * 60 * 8; // 8h
const dayToWeekday = {
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5
}

moment.locale("nl");

function setItineraryDateRange() {
    const itineraryDateRange = document.querySelector('[data-itinerary-date-range]');
    const startOfWeek = moment().startOf("week");

    itineraryDateRange.textContent = startOfWeek.format("D MMMM") + " t/m " + startOfWeek.add(3, "days").format("D MMMM");
}

function highlightNextParticipant(participantIdx) {
    setHighlightedParticipant(highlightableParticipants[participantIdx]);

    participantIdx++;

    return (participantIdx >= highlightableParticipants.length) ? 0 : participantIdx;
}

function setHighlightedParticipant(participant) {
    const participantName = document.querySelector('[data-participant-name]');
    const participantLogo = document.querySelector('[data-participant-logo]');
    const participantDescription = document.querySelector('[data-participant-description]');
    const participantCalendarSummary = document.querySelector('[data-participant-calendar-summary]');

    participantName.textContent = participant.name;
    participantLogo.src = `assets/images/${participant.logo.filename}`;
    participantLogo.alt = participant.logo.alt;
    participantDescription.textContent = participant.description;
    participantCalendarSummary.textContent = participant.calendar_summary;
}

function isMorning(time) {
    return moment(time + ":00", "HH:mm:ss").isBefore(moment("12:00:00", "HH:mm"));
}

function isAfternoon(time) {
    return moment(time + ":00", "HH:mm:ss").isSameOrAfter(moment("12:00:00", "HH:mm"));
}

function getParticipantsPlannedForTimeOfDay(applicableParticipants, day, timeOfDayCheck) {
    return applicableParticipants
        .map(participant => {
            const hasMatchingCalendar = function(calendar) {
                return timeOfDayCheck(calendar.start) && (
                    calendar.day === day || (
                        calendar.frequency === "once" &&
                        moment().startOf("week")
                            .add(dayToWeekday[day] - 1, "day")
                            .isSame(moment(calendar.day, "DD-MM-YYYY"), "day")
                    )
                );
            }

            return participant.calendar.find(calendar => hasMatchingCalendar(calendar))
                ? participant.name
                : false;
        })
        .filter(participantName => participantName !== false)
        .join(", ");
}

function isNthWeekdayOfMonth(weekday, n) {
    const firstDayOfMonth = moment().startOf("month");
    const diff = weekday - firstDayOfMonth.isoWeekday();
    const daysToFirstWeekday = diff < 0 ? 7 + diff : diff;

    const nthWeekdayOfMonth = firstDayOfMonth.add(daysToFirstWeekday, "days");
    nthWeekdayOfMonth.add(n - 1, "week");

    return moment().isSame(nthWeekdayOfMonth, "week");
}

function isLastWeekdayOfMonth(weekday) {
    const lastDayOfMonth = moment().endOf("month");
    const diff = lastDayOfMonth.isoWeekday() - weekday;
    const daysToLastWeekday = diff < 0 ? 7 + diff : diff;

    return moment().isSame(lastDayOfMonth.subtract(daysToLastWeekday, "days"), "week");
}

function updateItinerary() {
    const mondayMorning = document.querySelector('[data-itinerary-monday-morning]');
    const mondayAfternoon = document.querySelector('[data-itinerary-monday-afternoon]');
    const tuesdayMorning = document.querySelector('[data-itinerary-tuesday-morning]');
    const tuesdayAfternoon = document.querySelector('[data-itinerary-tuesday-afternoon]');
    const wednesdayMorning = document.querySelector('[data-itinerary-wednesday-morning]');
    const wednesdayAfternoon = document.querySelector('[data-itinerary-wednesday-afternoon]');
    const thursdayMorning = document.querySelector('[data-itinerary-thursday-morning]');
    const thursdayAfternoon = document.querySelector('[data-itinerary-thursday-afternoon]');
    const weekNumber = moment().week();
    const isOddWeek = weekNumber % 2 !== 0;

    const applicableParticipants = participants.map(participant => {
        const applicableCalendars = participant.calendar.filter(calendar =>
            calendar.frequency === "weekly" ||
                (calendar.frequency === "even_weeks" && !isOddWeek) ||
                (calendar.frequency === "odd_weeks" && isOddWeek) ||
                (calendar.frequency === "first_of_month" && isNthWeekdayOfMonth(dayToWeekday[calendar.day], 1)) ||
                (calendar.frequency === "second_of_month" && isNthWeekdayOfMonth(dayToWeekday[calendar.day], 2)) ||
                (calendar.frequency === "third_of_month" && isNthWeekdayOfMonth(dayToWeekday[calendar.day], 3)) ||
                (calendar.frequency === "fourth_of_month" && isNthWeekdayOfMonth(dayToWeekday[calendar.day], 4)) ||
                (calendar.frequency === "last_of_month" && isLastWeekdayOfMonth(dayToWeekday[calendar.day])) ||
                (calendar.frequency === "once" && moment().isSame(moment(calendar.day, "DD-MM-YYYY"), "week"))
        );

        return {
            name: participant.name,
            calendar: applicableCalendars,
        };
    });

    mondayMorning.textContent = getParticipantsPlannedForTimeOfDay(applicableParticipants, "monday", isMorning);
    mondayAfternoon.textContent = getParticipantsPlannedForTimeOfDay(applicableParticipants, "monday", isAfternoon);
    tuesdayMorning.textContent = getParticipantsPlannedForTimeOfDay(applicableParticipants, "tuesday", isMorning);
    tuesdayAfternoon.textContent = getParticipantsPlannedForTimeOfDay(applicableParticipants, "tuesday", isAfternoon);
    wednesdayMorning.textContent = getParticipantsPlannedForTimeOfDay(applicableParticipants, "wednesday", isMorning);
    wednesdayAfternoon.textContent = getParticipantsPlannedForTimeOfDay(applicableParticipants, "wednesday", isAfternoon);
    thursdayMorning.textContent = getParticipantsPlannedForTimeOfDay(applicableParticipants, "thursday", isMorning);
    thursdayAfternoon.textContent = getParticipantsPlannedForTimeOfDay(applicableParticipants, "thursday", isAfternoon);
}

document.addEventListener("DOMContentLoaded", () => {
    setItineraryDateRange();

    let participantIdx = 0;

    participantIdx = highlightNextParticipant(participantIdx);
    setInterval(() => {
        participantIdx = highlightNextParticipant(participantIdx);
    }, highlightNextParticipantInterval);

    updateItinerary();
    setInterval(() => updateItinerary, updateItineraryInterval);
});
