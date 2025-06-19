import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="icon"
      variant="ghost"
      className="w-full"
    >
      <div className="flex gap-2 dark:hidden">
        <Moon className="size-10" />
        <span className="block lg:hidden">Switch to Dark Mode </span>
      </div>

      <div className="dark:flex gap-2 hidden">
        <Sun className="size-10" />
        <span className="block lg:hidden">Switch to Light Mode</span>
      </div>

      <span className="sr-only">Switch Theme</span>
    </Button>
  );
};
