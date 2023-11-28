import {
  StyledHeader,
  Logo,
  HeaderTitle,
  StyledFooter,
} from "./StyledComponents";

import logo from "./assets/logo.jpg";

function HeaderAndFoorter() {
  return (
    <>
      <StyledHeader>
        <Logo src={logo} />
        <HeaderTitle>Unique Car Rentals</HeaderTitle>
      </StyledHeader>

      <h2 className="service-heading">
        <span> Pune to Mumbai </span>
        <span>Mumbai to Pune </span>
        <span> One way cab service </span>
      </h2>
    </>
  );
}

export default HeaderAndFoorter;
