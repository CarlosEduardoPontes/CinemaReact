import React from 'react';

const chatbot = () => {
    return (
        <div>
            <script SameSite="None; Secure" src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"></script>
<script>
  var myLandbot = new Landbot.Livechat({
    configUrl:'https://chats.landbot.io/v3/H-889516-S2SKJDPSY3EVI4EY/index.json',
  });
</script>
        </div>
    )
}

export default chatbot;