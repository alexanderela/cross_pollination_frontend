export const successfulLogin = (user) => ({
  type: 'SUCCESSFUL_LOGIN',
  id: user.id,
  user: user
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const contentStatus = (string) => ({
  type: 'CONTENT_STATUS',
  status: string
})