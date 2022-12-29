import React, { useState } from 'react';
import {sendMessage} from "./api";

export default function ServerField({host, setHost}) {
  const [value, setValue] = useState(host);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button disabled={host==value} onClick={() => setHost(value)}>Update host</button>
    </div>
  );
}
