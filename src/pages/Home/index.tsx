import { useNavigate } from 'react-router-dom'
import * as Style from './style'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Style.MainPage>
      <Style.CardPage>
        <Style.TitlePage>Tech Blog</Style.TitlePage>

        <Style.Description>Um blog exclusivo para <span>Desenvolvedores</span>, <span>Designers</span>, <span>Programadores</span> e amantes da tecnologia!</Style.Description>

        <Style.Description>Faça o login para entrar!</Style.Description>

        <Style.ButtonLog onClick={() => navigate('/login')}>Fazer login</Style.ButtonLog>
      </Style.CardPage>
    </Style.MainPage>
  )
}

export default Home