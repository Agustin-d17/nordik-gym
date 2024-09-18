import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users } from "lucide-react"

const SheduleSection = () => {    
    const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    
    const generalSchedule = [
      { day: "Lunes a Viernes", hours: "6:00 AM - 10:00 PM" },
      { day: "Sábado", hours: "8:00 AM - 8:00 PM" },
      { day: "Domingo", hours: "Cerrado" },
    ]
    
    const classSchedule = {
      Lunes: [
        { time: "7:00 AM", class: "Yoga", intensity: "Suave" },
        { time: "9:00 AM", class: "Spinning", intensity: "Intensa" },
        { time: "6:00 PM", class: "Zumba", intensity: "Moderada" },
      ],
      Martes: [
        { time: "8:00 AM", class: "Pilates", intensity: "Suave" },
        { time: "10:00 AM", class: "Body Pump", intensity: "Intensa" },
        { time: "7:00 PM", class: "Boxeo", intensity: "Intensa" },
      ],
      Miércoles: [
        { time: "7:00 AM", class: "Yoga", intensity: "Suave" },
        { time: "9:00 AM", class: "Spinning", intensity: "Intensa" },
        { time: "6:00 PM", class: "Zumba", intensity: "Moderada" },
      ],
      Jueves: [
        { time: "8:00 AM", class: "Pilates", intensity: "Suave" },
        { time: "10:00 AM", class: "Body Pump", intensity: "Intensa" },
        { time: "7:00 PM", class: "Boxeo", intensity: "Intensa" },
      ],
      Viernes: [
        { time: "7:00 AM", class: "Yoga", intensity: "Suave" },
        { time: "9:00 AM", class: "Spinning", intensity: "Intensa" },
        { time: "6:00 PM", class: "Zumba", intensity: "Moderada" },
      ],
      Sábado: [
        { time: "9:00 AM", class: "Yoga", intensity: "Suave" },
        { time: "11:00 AM", class: "Body Pump", intensity: "Intensa" },
        { time: "4:00 PM", class: "Zumba", intensity: "Moderada" },
      ],
    }

    return (
        <section className="py-12 px-4 max-w-6xl mx-auto" id="horarios">
          <h2 className="text-3xl font-bold text-center mb-4">Horarios</h2>
          
          <div className="mb-12 text-center">
            {generalSchedule.map((schedule) => (
              <p key={schedule.day} className="text-lg mb-2">
                <span className="font-medium">{schedule.day}:</span> {schedule.hours}
              </p>
            ))}
          </div>
    
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Horario de Clases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {daysOfWeek.map((day) => (
                <Card key={day} className="overflow-hidden">
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="text-xl">{day}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {classSchedule[day].map((schedule) => (
                        <li key={schedule.time} className="flex flex-col space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {schedule.time}
                            </span>
                            <span>{schedule.class}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )
}

export default SheduleSection;