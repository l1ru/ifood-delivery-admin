import { Container, OrderListContainer, OrdersContainer } from "./styles";

import * as Header from "./styles/header";

import SideBar from "../../components/SideBar";

export default function () {
  return (
    <Container>
      <Header.Container>
        <div className="w-full h-full pl-10 pr-10 flex items-center justify-between">
          <Header.Business.Container>
            <Header.Business.Image>
              <img />
            </Header.Business.Image>
            <Header.Business.Name>Loja de Teste</Header.Business.Name>
          </Header.Business.Container>
          <Header.Actions.Container>
            <Header.Actions.Button></Header.Actions.Button>
            <Header.Actions.Status></Header.Actions.Status>
          </Header.Actions.Container>
        </div>
      </Header.Container>
      <div className="flex w-full h-full">
        <SideBar />
        <OrderListContainer></OrderListContainer>
        <OrdersContainer></OrdersContainer>
      </div>
    </Container>
  );
}
