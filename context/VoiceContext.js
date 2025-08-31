import React, { createContext, useState } from 'react';

export const VoiceContext = createContext();

export const VoiceProvider = ({ children }) => {
  const [voiceText, setVoiceText] = useState('');

  return (
    <VoiceContext.Provider value={{ voiceText, setVoiceText }}>
      {children}
    </VoiceContext.Provider>
  );
};
