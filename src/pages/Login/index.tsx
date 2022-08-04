import { useNavigate } from "react-router-dom";
import Card from "../../components/Cards";
import { LoginUser } from "../../types/interfaces";
import * as Style from "./style";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Style.MainPage>
      <Card>
        <Style.LoginForm>
          <Style.LoginInput
            type="text"
            name="email"
            id="email"
            placeholder=" Digite o E-mail de acesso"
          />

          <Style.LoginInput
            type="text"
            name="password"
            id="password"
            placeholder=" Digite a senha de acesso"
          />

          <Style.RegisterUser>
            Não possui cadastro?{" "}
            <strong onClick={() => navigate("/register")}>
              Cadastre-se aqui
            </strong>
          </Style.RegisterUser>

        </Style.LoginForm>
      </Card>
    </Style.MainPage>
  );
};

export default Login;
