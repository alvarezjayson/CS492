// Mock data for demonstration purposes
let flights = [
    { id: 1, departure: 'New York', destination: 'Los Angeles', date: '2024-07-01', seatsAvailable: 100 },
    { id: 2, departure: 'Chicago', destination: 'San Francisco', date: '2024-07-02', seatsAvailable: 80 },
    { id: 3, departure: 'Miami', destination: 'Seattle', date: '2024-07-03', seatsAvailable: 120 }
];

let bookings = [];

function searchFlights() {
    event.preventDefault();
    let departure = document.getElementById('departure').value;
    let destination = document.getElementById('destination').value;
    let date = document.getElementById('date').value;

    let results = flights.filter(flight => flight.departure.toLowerCase() === departure.toLowerCase()
                            && flight.destination.toLowerCase() === destination.toLowerCase()
                            && flight.date === date);

    displaySearchResults(results);
}

function displaySearchResults(results) {
    let searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';

    if (results.length === 0) {
        searchResultsDiv.innerHTML = '<p>No flights found.</p>';
    } else {
        results.forEach(flight => {
            let flightDiv = document.createElement('div');
            flightDiv.innerHTML = `
                <p>Flight from ${flight.departure} to ${flight.destination} on ${flight.date}</p>
                <p>Seats Available: ${flight.seatsAvailable}</p>
                <button onclick="showBookingForm(${flight.id})">Book Now</button>
            `;
            searchResultsDiv.appendChild(flightDiv);
        });
    }
    document.getElementById('bookingSection').style.display = 'none';
    document.getElementById('statusSection').style.display = 'none';
    document.getElementById('searchSection').style.display = 'block';
}

function showBookingForm(flightId) {
    let selectedFlight = flights.find(flight => flight.id === flightId);
    let flightDetailsDiv = document.getElementById('flightDetails');
    flightDetailsDiv.innerHTML = `
        <p>Flight from ${selectedFlight.departure} to ${selectedFlight.destination} on ${selectedFlight.date}</p>
        <p>Seats Available: ${selectedFlight.seatsAvailable}</p>
    `;
    document.getElementById('bookingSection').style.display = 'block';
    document.getElementById('statusSection').style.display = 'none';
    document.getElementById('searchSection').style.display = 'none';
}

function purchaseFlight() {
    let passengerName = document.getElementById('passengerName').value;
    let creditCard = document.getElementById('creditCard').value;

    // Mock purchase logic (assuming successful purchase)
    alert(`Flight purchased successfully by ${passengerName}!`);
    document.getElementById('bookingForm').reset();
    document.getElementById('bookingSection').style.display = 'none';
    document.getElementById('statusSection').style.display = 'none';
    document.getElementById('searchSection').style.display = 'block';

    // Update seats available (in a real app, this would be done server-side)
    let flightId = parseInt(document.getElementById('flightDetails').querySelector('button').getAttribute('onclick').match(/\d+/)[0]);
    let index = flights.findIndex(flight => flight.id === flightId);
    if (index !== -1) {
        flights[index].seatsAvailable--;
    }
}

function checkFlightStatus() {
    let bookingReference = document.getElementById('bookingReference').value;

    let booking = bookings.find(booking => booking.reference === bookingReference);

    if (booking) {
        document.getElementById('flightStatus').innerText = `Flight Status: ${booking.status}`;
    } else {
        document.getElementById('flightStatus').innerText = 'Booking reference not found.';
    }

    document.getElementById('statusSection').style.display = 'block';
    document.getElementById('bookingSection').style.display = 'none';
    document.getElementById('searchSection').style.display = 'none';
}
