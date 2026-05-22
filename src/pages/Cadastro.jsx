import styles from './Cadastro.module.css'

function Cadastro() {
  return (
          <div>
          <h1>Activesoft</h1>
          <p>Criar Conta</p>
          <label htmlFor="">Nome</label>
          <input placeholder='Digite seu nome...' type="text" />
          <label htmlFor="">Email</label>
          <input placeholder='Digite seu email...' type="text" />
          <label htmlFor="">Senha</label>
          <input placeholder='Digite sua senha...' type="password" />
          <label htmlFor=""> Confirmar Senha</label>
          <input placeholder='Digite novamente sua senha...' type="password" />
          <button>Criar</button>
          <a href="" className={styles.entrar}>Já tem uma conta? Entrar</a>
          </div>
  )
}

export default Cadastro
