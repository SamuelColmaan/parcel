AOS.init();

const eventDate = new Date("jul 17, 2025 00:00:00")
const timeStampEvent = eventDate.getTime();

const countHours = setInterval(function() {
    const now = new Date()
    const timeStampNow = now.getTime()

    const event = timeStampEvent - timeStampNow

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const MinutoEmMs = 1000 * 60 


    const day =  Math.floor(event / diaEmMs);
    const hour = Math.floor((event % diaEmMs) / horaEmMs);
    const minutes = Math.floor((event % (horaEmMs)) / MinutoEmMs);
    const seconds = Math.floor((event % (MinutoEmMs)) / 1000);

    document.getElementById('contador').innerHTML = `${day} D ${hour} H ${minutes} M ${seconds} S`

    if (event < 0 ){
        clearInterval(countHours);
        document.getElementById('contador').innerHTML = `Evento Expirado`

    }
}, 1000)