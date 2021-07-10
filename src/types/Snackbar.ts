export type snackbarType = {
  type: 'error' | 'warning' | 'info' | 'success' | undefined;
  text: string | undefined;
};

export const defaultSnakbar: snackbarType = {
  type: undefined,
  text: undefined,
};
