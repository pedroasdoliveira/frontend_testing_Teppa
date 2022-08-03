import { useNavigate } from 'react-router-dom';
import * as Style from './style'

interface PropRoute {
    Route: () => void
}

const ButtonLogin = ({ Route }: PropRoute) => {
    const navigate = useNavigate();

  return (
    <Style.ButtonLog onClick={Route}>Fazer login</Style.ButtonLog>
  )
}

export default ButtonLogin