import * as Style from "./style";

const PersonalInformations = () => {
  return (
    <Style.Form>
      <Style.InfoForm>Informações do usuário</Style.InfoForm>

      <Style.Input
        type="text"
        placeholder=" Digite o seu nome"
        name="name"
        id="name"
      />

      <Style.Input
        type="email"
        placeholder=" Digite o seu E-mail"
        name="email"
        id="email"
      />

      <Style.Input
        type="number"
        placeholder=" Digite a sua idade"
        name="age"
        id="age"
      />
      
    </Style.Form>
  );
};

export default PersonalInformations;
