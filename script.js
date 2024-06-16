// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform login logic (e.g., send data to backend API)
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Login successful', data);
        // Redirect or perform actions after successful login
        window.location.href = '/dashboard.html';
    })
    .catch(error => {
        console.error('Error logging in', error);
    });
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform registration logic (e.g., send data to backend API)
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registration successful', data);
        // Redirect or perform actions after successful registration
        window.location.href = '/login.html';
    })
    .catch(error => {
        console.error('Error registering', error);
    });
});

document.getElementById('flightSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    // Perform flight search logic (e.g., send data to backend API)
    fetch('/searchFlights', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ departure, destination, date }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Flight search results', data);
        // Display flight results
        const flightsList = document.getElementById('flightsList');
        flightsList.innerHTML = '';
        data.flights.forEach(flight => {
            const li = document.createElement('li');
            li.textContent = `${flight.departure} to ${flight.destination} on ${flight.date}`;
            flightsList.appendChild(li);
        });
        document.getElementById('flightResults').classList.add('visible');
    })
    .catch(error => {
        console.error('Error searching flights', error);
    });
});

document.getElementById('confirmBooking').addEventListener('click', function(event) {
    event.preventDefault();
    // Perform booking confirmation logic
    // Example: Redirect to booking confirmation page
    window.location.href = '/booking.html';
});
