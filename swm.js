const webhookUrl = 'https://discord.com/api/webhooks/1262852004771008565/ABzB_CI2AI4sCm8YyaMrMkAfIqRWJwnvdNAvIC60UYjnY3hIXqncBp1CP_YSn1KEdkyW';
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