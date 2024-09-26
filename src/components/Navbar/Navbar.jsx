import { useState, useCallback } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
            {name: 'Inicio', href: '#inicio'},
            {name: 'Horarios', href: '#horarios'},
            {name: 'Precios', href: '#precios'},
            {name: 'Contacto', href: '#contacto'},
        ]

  const scrollToSection = useCallback((e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }, [])

  return (
    <nav className="border-b fixed top-0 left-0 right-0 bg-white z-10">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <a href="#" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, '#')}>
        <span className="text-5xl font-bold logo">NORDIK GYM</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-3 py-2 rounded-md text-m font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar