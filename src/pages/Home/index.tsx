import { useNavigate } from "react-router-dom";
import ButtonLogin from "../../components/Buttons";
import Card from "../../components/Cards";
import * as Style from "./style";

const Home = () => {
  const navigate = useNavigate()

  return (
    <Style.MainPage>
      <Card>
        <Style.TitlePage>Tech Blog</Style.TitlePage>

        <Style.Description>
          Um blog exclusivo para <span>Desenvolvedores</span>,{" "}
          <span>Designers</span>, <span>Programadores</span> e amantes da
          tecnologia!
        </Style.Description>

        <Style.Description>Faça o login para entrar!</Style.Description>

        <ButtonLogin Route={() => navigate('/login')} />
      </Card>
    </Style.MainPage>
  );
};

export default Home;
