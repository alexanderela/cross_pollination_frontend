export const successfulLogin = (user) => ({
  type: 'SUCCESSFUL_LOGIN',
  id: user.id,
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const contentStatus = (string) => ({
  type: 'CONTENT_STATUS',
  status: string
})