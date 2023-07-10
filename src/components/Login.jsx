import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
//import App from '../App';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'so' && password === 'ichi') {
      setLoggedIn(true);
      //ページが時間がたったら遷移するやつ
      setTimeout(() => {
        window.location.href = "/main";
      }, 2 * 1000);
      alert('ログインに成功しました');
    } else {
      alert('ユーザ名またはパスワードが間違っています');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <h1>ログイン済みです</h1>
      ) : (
        <>
        <h1>ログイン画面</h1>
        <form onSubmit={handleLogin}>
          <label>
            ユーザ名:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            パスワード:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">ログイン</button>
        </form>
        </>
      )}
    </div>
  );
  //ここに遷移する方法
  //App内ならできた
  
};

export default LoginForm;
