'use client'
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import styles from './adminlogin.module.css';

const adminLogin = 'olimpadmin'
const adminPassword = 'ZLNJ8Peh'

function AdminLogin() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [validUser, setValidUser] = useState(false);
  const [validationDone, setValidationDone] = useState(false);

  const router = useRouter();

  const getLogin = (e:any) => {
    setLogin(e.target.value)
  }

  const getPassword = (e:any) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    setValidationDone(false)
    console.log(`login: ${login}, password: ${password}`)
    if (login === adminLogin && password === adminPassword) {
      setValidUser(true)
    } else {
      console.log(login === adminLogin && password === adminPassword)
      setValidUser(false)
    }
  },[login, password]);

  const onEnter = () =>{
    setValidationDone(true)
    if (validUser && validationDone){
      console.log("onEnter")
      router.push('/dashboard');
    } else {
      
    }
    
  }

  return (
    
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
        Admin authorization
        </div>
      <div className={styles.form}>
        <div className={styles.form_item}>
          <div className="">Login</div>
          <input type="text" className={styles.input} value={login} onChange={(e)=>getLogin(e)}/>
        </div>
        <div className={styles.form_item}>
          <div className="">Password</div>
          <input type="password" className={styles.input} value={password} onChange={(e)=>getPassword(e)}/>
        </div>
        <button className={styles.button} onClick={onEnter}>
          ENTER
        </button>
        {
          validationDone && !validUser &&
          <div className={styles.error}>INVALIDE USER OR PASSWORD</div>
        }
      </div>
      
      </div>
    </div>
  )
}

export default AdminLogin