import * as Style from './style'

interface Prop {
    children: React.ReactNode
}

const Card = ({children}: Prop) => {
  return (
    <Style.CardPage>
        {children}
    </Style.CardPage>
  )
}

export default Card