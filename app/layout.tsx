import Home from "./page";
import Grid from "./page-grid";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
       
        {/* {children} */}
       <Home />
       {/* <Grid /> */}
      </body>
    </html>
  );
}
