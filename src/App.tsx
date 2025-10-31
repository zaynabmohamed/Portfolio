import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
const Projects = lazy(()=>import("./Component/Projects/Projects"))
const Layout = lazy(()=>import("./Component/Layout/Layout"))
const Home = lazy(() => import("./Component/Home/Home"));
const Contact = lazy(()=>import("./Component/Contact/Contact"))
const Skills = lazy (()=>import('./Component/Skills/Skills'))
import {HeroUIProvider} from "@heroui/react";
import { Toaster } from 'react-hot-toast';
import Loading from './Component/Loading/Loading';
export default function App() {
  const router = createBrowserRouter([
  {path:"/" , element:<Layout/> , children:[
   {index:true , element:<Home/> },
  {path:"/skills" , element:<Skills/>},
  {path:"/Projects" , element:<Projects/>},
  {path:"/contact" , element:<Contact/>},
  ]},
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