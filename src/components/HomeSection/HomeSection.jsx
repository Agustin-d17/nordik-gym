import { Button } from "@/components/ui/button"

const HomeSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Bienvenido a Nordik Gym
      </h1>
      <p className="text-xl mb-8 text-gray-600 max-w-md">
        Transforma tu cuerpo, mejora tu salud y alcanza tus metas con nosotros.
      </p>
      <Button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full text-lg">
        ¡Comienza Ahora!
      </Button>
    </div>
  )
}

export default HomeSection