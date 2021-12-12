import React from "react";
import { Logo } from "../../components/Logo/Logo";
import {
  Content,
  MainContainer,
  Navigation,
  NavigationItem,
} from "./AdminLayout.styled";
import home from "../../../src/assets/img/home.png";
import settings from "../../../src/assets/img/settings.png";
import user from "../../../src/assets/img/user.png";
import { Programs } from "../../components/Programs/Porgrams";
import { UsersList } from "../../components/UsersList/UsersList";
import { Program } from "../../components/Programs/Program/Program";
import { Settings } from "../../components/Settings/Settings";

export const AdminLayout: React.FC = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <>
      <MainContainer>
        <Navigation>
          <Logo />
          <NavigationItem
            active={activeTab == 0}
            onClick={() => setActiveTab(0)}
          >
            <img src={home.src} height="30" width="30" />
            <p>Главная</p>
          </NavigationItem>
          <NavigationItem
            active={activeTab == 1}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            <img src={user.src} height="30" width="30" />
            <p>Отзывы</p>
          </NavigationItem>
          <NavigationItem
            active={activeTab == 2}
            onClick={() => {
              setActiveTab(2);
            }}
          >
            <img src={settings.src} height="30" width="30" />
            <p>Настройки</p>
          </NavigationItem>
        </Navigation>
        <Content>
          {children ? (
            children
          ) : activeTab == 0 ? (
            <Program />
          ) : activeTab == 1 ? (
            <UsersList />
          ) : <Settings/>}
        </Content>
      </MainContainer>
    </>
  );
};
