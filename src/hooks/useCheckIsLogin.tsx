const useCheckIsLogin = () => {
  const isLogin = localStorage.getItem('token');

  const setToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  const deleteToken = () => {
    localStorage.removeItem('token');
  };

  return { isLogin, setToken, deleteToken };
};

export default useCheckIsLogin;
