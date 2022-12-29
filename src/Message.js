import React, { useState } from 'react';

export default function Message({content}) {
  return (
    <div>
      <span>{content}</span>
    </div>
  );
}
