import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { FooterApi, Header } from "./components/landing";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./components/themeProvider";
import { CircleLoader } from "react-spinners";
import { BanhcafeDevRouter } from "./router";

export const BanhcafeDevApp = () => {
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setLoadingPage(true); 
    setTimeout(() => {
      setLoadingPage(false); 
    }, 700);
  }, []);

  return (
    <div
      className={`${
        loadingPage ? "flex items-center justify-center w-full h-[100vh]" : ""
      } bg-gradient-to-br lg:bg-gradient-to-tr dark:from-stone-900 from-70% lg:from-85% dark:via-indigo-950 dark:to-blue-950 bg-white`}
    >
      {loadingPage ? (
        <CircleLoader size={40} color={"#BA0C2F"} loading={loadingPage} />
      ) : (
        <>
          <BrowserRouter>
            <Provider store={store}>
              <ThemeProvider>
                <Header />
                {/* {user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>} */}
                {<BanhcafeDevRouter />}
                <FooterApi />
              </ThemeProvider>
            </Provider>
          </BrowserRouter>
        </>
      )}
    </div>
  );
};
