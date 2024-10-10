import {
  SidebarContainer,
  NavList,
  NavItem,
  StyledLink,
} from "./SidebarStyled"; // Ajuste o caminho conforme necessário

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/pessoal">Pessoal</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/profissional">Profissional</StyledLink>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
