import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import "./Navbar.Module.css";
import { Button } from "../../components/ui/button"
import { Home,  Plus } from "lucide-react";
import { LaptopMinimalCheck } from 'lucide-react';
  import { FileText, Github, Linkedin } from "lucide-react";
import { MessageCircleCode } from 'lucide-react'
import { MailPlus } from 'lucide-react';
import CV from "../../assets/ZaynabMohamed-CV-Frontend.pdf";

export default function NavbarPage() {
  return (
    <div className="navbarWrapper">
      <nav className="navbarNav text-gray-500 ">
        {/* Home button */}
        <Button asChild variant="ghost" size="icon" className="rounded-full cursor-pointer">
          <a href="#home" aria-label="Home section">
            <Home className="h-7 w-7" />
          </a>
        </Button>

        {/* Skills button */}
        <Button asChild variant="ghost" size="icon" className="rounded-full cursor-pointer">
          <a href="#skills" aria-label="Skills section">
            <LaptopMinimalCheck className="h-5 w-5" />
          </a>
        </Button>

        {/* Dropdown menu */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              className="rounded-full bg-primary  text-primary-foreground cursor-pointer"
            >
              <Plus className="h-5 w-5" />
              <span className="sr-only">Add</span>
            </Button>
          </DropdownMenuTrigger>


<DropdownMenuContent  className="bg-gray-800/90 text-white border-gray-600" >
    <DropdownMenuItem asChild>
    <a
      href={CV} 
      target="_blank"
      className="flex items-center"
    >
      <FileText className="mr-2 h-4 w-4" />
      CV
    </a>
  </DropdownMenuItem>
  <DropdownMenuItem asChild>
    <a
      href="https://github.com/zaynabmohamed"
      target="_blank"
      className="flex items-center"
    >
      <Github className="mr-2 h-4 w-4" />
      GitHub
    </a>
  </DropdownMenuItem>
  <DropdownMenuItem asChild>
    <a
      href="https://www.linkedin.com/in/your-profile"
      target="_blank"
      className="flex items-center"
    >
      <Linkedin className="mr-2 h-4 w-4" />
      LinkedIn
    </a>
  </DropdownMenuItem>

</DropdownMenuContent>
        </DropdownMenu> 

        {/* Projects button */}
        <Button asChild variant="ghost" size="icon" className="rounded-full cursor-pointer">
          <a href="#projects" aria-label="Projects section">
            <MessageCircleCode className="h-8 w-8" />
          </a>
        </Button>

        {/* Contact button */}
        <Button asChild variant="ghost" size="icon" className="rounded-full cursor-pointer">
          <a href="#contact" aria-label="Contact section">
            <MailPlus className="h-8 w-8" />
          </a>
        </Button>
      </nav>
    </div>
  );
}
