import React, { useState } from 'react';
import {sendMessage} from "./api";

export default function MessageField({host}) {
  const [text, setText] = useState("");

  async function handleSend()
  {
    if(text.trim() == "")
    {
      return;
    }
    //TODO: hardcoded channel id "foo"
    await sendMessage(host, "foo", text);
    setText("");
  }

  return (
    <div>
      <input placeholder="Your message here" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
