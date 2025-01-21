const webhookUrl = 'https://discord.com/api/webhooks/1331298954612314234/0p9JhMBy2yHA-1OVMo4BFye9A3vRlKyNPL6R7pCB7fX8iiaRGz4XjcOXPq0JMwA78hNT';
function sendWebhookMessage() {
    const payload = {
        content: 'A user has loaded the page.',
        username: 'Page Notifier'
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => console.log('Successfully sent message to Discord:', data))
        .catch(error => console.error('Error sending message to Discord:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    sendWebhookMessage();
});