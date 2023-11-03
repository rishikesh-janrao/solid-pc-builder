// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  useLocation,
} from "solid-start";
import "./root.css";
import Navigation from "./components/navigation";
import { getProperty } from "./utils/getProperty";
import {
  NavigationContext,
  TranslationContext,
} from "./contexts/ConfigContext";
export default function Root() {
  const { pathname } = useLocation();
  const navConfig = getProperty("navigation");
  const translationConfig = getProperty("translations");
  return (
    <Html lang="en">
      <Head>
        <Title>
          {
            navConfig.MainNavigation.find((t) => t.route === pathname)
              ?.route_name
          }
        </Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <NavigationContext.Provider value={navConfig}>
              <TranslationContext.Provider value={translationConfig}>
                <Navigation />
                <Routes>
                  <FileRoutes />
                </Routes>
              </TranslationContext.Provider>
            </NavigationContext.Provider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
