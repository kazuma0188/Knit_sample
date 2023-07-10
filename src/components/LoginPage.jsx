import React, { useEffect, useState } from 'react'
import { getSession, setSession, useAuthContext } from '../logindata/AuthContext'
import { fetch_Fnc } from '../logindata/Fetch'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // ①
  const {
    LoggedIn,
    setLoggedIn,
    AuthInfo,
    setAuthInfo,
    Loading,
    setLoading,
  } = useAuthContext()

  // ②
  useEffect(() => {
    if (LoggedIn||getSession().id) {
      setLoading(true)
    }
  }, [LoggedIn])


  const Login = async () => {
    //バリデーションチェック(超簡易版)
    if (!email) {
      return console.log('メールアドレスを入力してください')
    } else if (!password) {
      return console.log('パスワードを入力してください')
    }

    const data = { email: email, password: password }
    // URLは各自のサーバー環境に合わせてください
    const url = 'http://localhost:3000/login'
    const result = await fetch_Fnc(url, data)
    if (result[0].id) {
      // ④
      setSession(result[0])
      // ⑤
      setAuthInfo(result[0])
      // ⑥
      setLoggedIn(true)
    } else {
      // ⑦
      return alert(result)
    }
  }

  return (
    <>
      <div>LoginPage</div>
      <input type="email"
        value={email}
        placeholder='メールアドレス'
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input type="password"
        value={password}
        placeholder='パスワード'
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button onClick={Login}>ログイン</button>
      // ⑧
      {Loading ? <Navigate to={"/"} /> : ''}
    </>
  )
}

export default LoginPage
