"use client";
export function Navbar() {
  // const { theme, setTheme } = useTheme();

  return (
    <header className="max-w-4xl mx-auto p-6 sticky top-0 z-50 backdrop-blur-md flex justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-primary">NOTAS</h1>
        <div className="h-1 w-32 bg-primary rounded-full"></div>
      </div>
      {/* <div>
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div> */}
    </header>
  );
}
