import { HeaderContainer } from "../styles/Header.styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import Switch from "react-switch";
import { BookOpenIcon } from "@heroicons/react/24/outline";

type ThemeProps = {
  toggleTheme(): void;
  headerTitle: string;
};

export const Header = ({ toggleTheme, headerTitle }: ThemeProps) => {
  const { title, colors } = useContext(ThemeContext);
  function handleThemeToggle() {
    toggleTheme();
  }
  return (
    <HeaderContainer>
      <h2>
        <BookOpenIcon width={32} height={24} />
        {headerTitle}
      </h2>
      <Switch
        onChange={handleThemeToggle}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={shade(0.2, `${colors.primary}`)}
        offColor={shade(0.6, `${colors.primary}`)}
        height={8}
        width={30}
        handleDiameter={16}
      />
    </HeaderContainer>
  );
};
