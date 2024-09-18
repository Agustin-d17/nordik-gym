import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        {name: 'Inicio', href: '/'},
        {name: 'Horarios', href: '#horarios'},
        {name: 'Precios', href: '#precios'},
        {name: 'Contacto', href: '#contacto'},
    ]

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <nav className="border-b">
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                <Link className="pt-1" to={"/"}><span className="text-5xl font-bold logo">NORDIK GYM</span></Link>

                <div className="hidden md:flex space-x-4 pt-1">
                    {navItems.map(navItem => (
                        <Link key={navItem.name} to={navItem.href} className="px-3 py-2 rounded-md text-m font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out" 
                            onClick={(e) => {e.preventDefault(); 
                            scrollToSection(navItem.href.substring(1));}}>

                            {navItem.name}
                            
                        </Link>
                    ))}
                </div>
                
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6"/>
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col gap-4">
                            {navItems.map(navItem => (
                                <Link key={navItem.name} onClick={() => setIsOpen(false)} to={navItem.href} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out">{navItem.name}</Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
      )

}

export default Navbar