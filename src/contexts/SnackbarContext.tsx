import { Snackbar } from '@mui/material';
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type SnackbarContextType = {
  showSnackbar: (message: string, duration?: number) => void;
  hideSnackbar: () => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }

  return context;
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [autoHideDuration, setAutoHideDuration] = useState<number | null>(3000);

  const showSnackbar = (message: string, duration: number = 3000) => {
    setSnackbarMessage(message);
    setAutoHideDuration(duration);
  };

  const hideSnackbar = () => {
    setSnackbarMessage(null);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar, hideSnackbar }}>
      {children}
      {snackbarMessage && (
        <Snackbar
          open={!!snackbarMessage}
          onClose={hideSnackbar}
          message={snackbarMessage}
          autoHideDuration={autoHideDuration}
        />
      )}
    </SnackbarContext.Provider>
  );
};
