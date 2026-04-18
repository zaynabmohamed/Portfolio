import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
const Layout = lazy(()=>import("./Component/Layout/Layout"))
import {HeroUIProvider} from "@heroui/react";
import { Toaster } from 'react-hot-toast';
import Loading from './Component/Loading/Loading';
export default function App() {
  const router = createBrowserRouter([
  {path:"/" , element:<Layout/>},
  ])
  return (
  <HeroUIProvider>
     <Suspense fallback={<Loading/>}>
    <RouterProvider router={router}/>
    </Suspense>
    <Toaster/>
    </HeroUIProvider>
    
  );
}
