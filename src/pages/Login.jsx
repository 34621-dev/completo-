import styles from './Login.module.css'

function Login() {
  return (
    <main>
           <div id={styles.esq}>
             <img src="/src" alt="" />
           </div>
   
           <div id={styles.dir}>
             <h1>Activesoft</h1>
             <p>Fazer login</p>
             <label htmlFor="">Login</label>
             <input placeholder='Digite seu email...' type="text" />
             <label htmlFor="">Senha</label>
             <input placeholder='Digite sua senha...' type="password" />
             <button>Entrar</button>
             <a href="" className= {styles.esqueceu}>Esqueceu a senha?</a>
           </div>
</main>
  )
}

export default Login
