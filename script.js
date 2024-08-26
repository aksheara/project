// Ensure Evo Calendar is initialized correctly
var calendar = $('#calendar').evoCalendar({
}).evoCalendar('instance');
// Function to fetch events and display them on Evo Calendar
function fetchAndViewEvents() {
    fetch('/events')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(events => {
        // Assuming you have a variable `calendar` which is your Evo Calendar instance
        calendar.clear(); // Clear existing events
        events.forEach(event => {
          calendar.addEvent({
            id: event.id,
            title: event.title,
            start: event.date, // Adjust format if necessary
            description: event.description
          });
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Call fetchAndViewEvents on page load to display events
  document.addEventListener('DOMContentLoaded', fetchAndViewEvents);

  

  // Function to add an event
function addEvent(title, date, description) {
    fetch('/add-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, date, description })
    })
    .then(response => response.text())
    .then(message => {
      alert(message);
      fetchAndViewEvents(); // Refresh the event list
    })
    .catch(error => console.error('Error:', error));
  }
  
  // Example usage
  addEvent('Meeting', '2024-09-01T10:00:00', 'Discuss project status');

  

  // Function to delete an event
function deleteEvent(eventId) {
    fetch(`/delete-event/${eventId}`, {
      method: 'DELETE'
    })
    .then(response => response.text())
    .then(message => {
      alert(message);
      fetchAndViewEvents(); // Refresh the event list
    })
    .catch(error => console.error('Error:', error));
  }
  
  // Example usage: Assuming you have an event ID to delete
  deleteEvent(1);
  