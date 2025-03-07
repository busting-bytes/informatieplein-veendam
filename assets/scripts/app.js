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
                "frequency": "weekly"
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
                "frequency": "weekly"
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
                "frequency": "weekly"
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
                "frequency": "weekly"
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
                "frequency": "weekly"
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
                "frequency": "weekly"
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
                "frequency": "weekly"
            }
        ],
        "calendar_summary": "Op maandagen van 14:00 tot 15:00 uur."
    },
    {
        "name": "Vanaf 17 maart: Hulp bij woningzaken",
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
                "frequency": "weekly"
            }
        ],
        "calendar_summary": "Op maandagen van 14:00 tot 16:00 uur."
    },
    {
        "name": "Maatje voor hulp bij geldzaken",
        "logo": {
            "filename": "logo_schuldhm.png",
            "alt": "SchuldHulpMaatje"
        },
        "description": "Voor vragen over hulp en/of een maatje bij geldzaken.",
        "calendar": [
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "even_weeks"
            },
            {
                "day": "wednesday",
                "start": "10:00",
                "end": "12:00",
                "frequency": "odd_weeks"
            }
        ],
        "calendar_summary": "Even weken op maandag van 14:00 tot 16:00 uur, oneven weken op woensdag van 10:00 tot 12:00 uur."
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
                "day": "monday",
                "start": "13:00",
                "end": "15:00",
                "frequency": "odd_weeks"
            }
        ],
        "calendar_summary": "Oneven weken op maandag van 13:00 tot 15:00 uur."
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
                "frequency": "first_of_month"
            },
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "third_of_month"
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
                "frequency": "first_of_month"
            },
            {
                "day": "monday",
                "start": "14:00",
                "end": "16:00",
                "frequency": "third_of_month"
            },
    {
        "name": "Workshop DigiD",
        "logo": {
            "filename": "logo_bibliotheekveendam.png",
            "alt": "Bibliotheek Veendam"
        },
        "description": "In twee lessen leer je wat je met jouw DigiD kunt, hoe je een DigiD aanvraagt, krijg je hulp bij het aanvragen van jouw DigiD en leer je wat je ermee kunt doen.": [
            {
                "day": "07032025",
                "start": "14:00",
                "end": "16:00",
                "frequency": "once"
           }        ],
        "calendar_summary": "Iedere eerste en derde maandag van de maand van 13:00 tot 15:00 uur."
    }
]

const highlightNextParticipantInterval = 1000 * 10; // 10s
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
    setHighlightedParticipant(participants[participantIdx]);

    participantIdx++;

    return (participantIdx >= participants.length) ? 0 : participantIdx;
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

    let participantIdx = 8;

    participantIdx = highlightNextParticipant(participantIdx);
    setInterval(() => {
        participantIdx = highlightNextParticipant(participantIdx);
    }, highlightNextParticipantInterval);

    updateItinerary();
    setInterval(() => updateItinerary, updateItineraryInterval);
});
