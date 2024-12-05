'use client';

import { SnackbarContextType } from 'contexts/SnackbarContext';

export const handleDownload = async (
  fileUrl: string,
  customFileName: string,
  showSnackbar: SnackbarContextType['showSnackbar']
) => {
  try {
    const response = await fetch(fileUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    const link = document.createElement('a');

    link.href = downloadUrl;

    // Use the provided custom filename
    link.download = customFileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(downloadUrl);
  } catch (error: unknown) {
    if (error instanceof Error) {
      showSnackbar(`Failed to download file: ${error.message}`);

      return;
    }
    
    showSnackbar('Failed to download file');
  }
};
