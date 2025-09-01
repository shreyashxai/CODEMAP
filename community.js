document.getElementById('send-btn').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        // Create a new message div
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        
        const messageContent = document.createElement('p');
        messageContent.textContent = messageText;
        
        const messageTime = document.createElement('span');
        messageTime.classList.add('time');
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        messageTime.textContent = currentTime;

        // Append message and time to the new message div
        newMessage.appendChild(messageContent);
        newMessage.appendChild(messageTime);

        // Add the new message to the chat messages area
        document.getElementById('chat-messages').appendChild(newMessage);

        // Scroll to the bottom
        document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;

        // Clear the input field
        messageInput.value = "";
    }
});

