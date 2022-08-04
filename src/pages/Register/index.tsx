import Card from '../../components/Cards'
import MultiStep from '../../components/Steps/multiStep'
import * as Style from './style'

const RegisterUser = () => {
  return (
    <Style.MainPage>
      <Card>
        <div>
          <MultiStep />
        </div>
      </Card>
    </Style.MainPage>
  )
}

export default RegisterUser