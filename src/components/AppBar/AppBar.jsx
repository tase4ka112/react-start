import Logo from "../Logo/logo";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  return (
    <header>
      <UserMenu />
      <Logo />
    </header>
  );
}
