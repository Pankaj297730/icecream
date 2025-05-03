import Footer from "@/components/ui/Footer";
import Aboutus from "@/pages/Aboutus";
import { Outlet } from "react-router-dom";
const AppLayout = () => {


  return (
      <main>
        <Aboutus/>
        <Footer/>
           </main> 
  ); 
};

export default AppLayout;

