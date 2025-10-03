const serverurl = ""

async  function sendMessage() {
        const input = document.getElementById('userInput');
        const chatArea = document.getElementById('chatArea');
        const messageText = input.value.trim();

        if (messageText) {
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.textContent = messageText;
            chatArea.appendChild(userMessage);



            const message = await fetch(`${serverurl}/getQuery`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" },
                body: JSON.stringify({query: messageText})})
            .then(response =>
            {
                return response.json()
            })

            console.log(message.message)

            const aiMessage = document.createElement('div');
            aiMessage.className = 'message ai-message';
            aiMessage.textContent = message.message;
            chatArea.appendChild(aiMessage);


            input.value = '';
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    }

    document.getElementById('userInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });