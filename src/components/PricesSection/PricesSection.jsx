import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const PricesSection = () => {
    const memberships = [
        {
          title: "Mensual",
          price: "$40000",
          description: "Perfecto para probar nuestras instalaciones",
          features: ["Acceso completo al gimnasio", "Clases grupales incluidas", "Casillero personal"],
          color: "bg-primary",
        },
        {
          title: "Trimestral",
          price: "$108000",
          description: "Ideal para comprometerse a corto plazo",
          features: ["Todo lo del plan Mensual", "Descuento del 10%", "1 sesión con entrenador personal"],
          color: "bg-primary",
        },
        {
          title: "Semestral",
          price: "$192000",
          description: "La mejor opción para resultados a largo plazo",
          features: ["Todo lo del plan Trimestral", "Descuento del 20%", "3 sesiones con entrenador personal", "Acceso a área VIP"],
          color: "bg-primary",
        },
      ]
    
      return (
        <section className="container mx-auto py-12" id='precios'>
          <h2 className="text-3xl font-bold text-center mb-8">Nuestras Membresías</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center">
            {memberships.map((membership, index) => (
              <Card key={index} className="flex flex-col max-w-sm w-full min-h-[500px]">
                <CardHeader className={`${membership.color} text-primary-foreground mb-3`}>
                  <CardTitle className="text-2xl">{membership.title}</CardTitle>
                  <CardDescription className="text-primary-foreground/80">{membership.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-5">
                  <p className="text-4xl font-bold mb-4">{membership.price}</p>
                  <ul className="space-y-2">
                    {membership.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Seleccionar Plan</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )
}

export default PricesSection