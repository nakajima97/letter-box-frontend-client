export type snackbarType = {
  type: 'error' | 'warning' | 'info' | 'success' | undefined;
  text: string | undefined;
};

export const defaultSnackbar: snackbarType = {
  type: undefined,
  text: undefined,
};
