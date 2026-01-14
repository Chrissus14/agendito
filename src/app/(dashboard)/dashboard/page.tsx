import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Users,
  DollarSign,
  ClipboardList,
  Plus,
  ChevronRight,
  UserPlus,
  CheckCircle2,
  RefreshCw,
  Clock,
  Briefcase
} from "lucide-react";

const APPOINTMENTS = [
  { name: "María González", service: "Consulta Inicial", time: "09:30 AM", status: "Confirmada", statusColor: "bg-[#eff6ff] text-[#2563eb]" },
  { name: "Roberto Díaz", service: "Tratamiento Facial", time: "11:00 AM", status: "Pendiente", statusColor: "bg-[#fff7ed] text-[#ea580c]" },
  { name: "Elena Torres", service: "Asesoría Nutricional", time: "02:15 PM", status: "Confirmada", statusColor: "bg-[#eff6ff] text-[#2563eb]" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-8">
      {/* Breadcrumbs & Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Admin</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-slate-700">Dashboard</span>
        </div>

        <div className="flex justify-between items-start mt-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">¡Bienvenido de nuevo, Alejandro!</h1>
            <p className="text-slate-500 mt-1">Aquí tienes el resumen de tu agenda para el día de hoy.</p>
          </div>
          <Button className="bg-[#2563eb] hover:bg-blue-700 text-white rounded-xl px-6 py-6 flex gap-2 shadow-sm transition-all cursor-pointer">
            <Plus className="h-5 w-5" />
            <span className="font-semibold">Nueva Cita</span>
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Citas Hoy", value: "12", change: "+20%", icon: CalendarDays, color: "bg-blue-50 text-blue-600", trend: "up" },
          { title: "Clientes Nuevos", value: "5", change: "+12%", icon: Users, color: "bg-purple-50 text-purple-600", trend: "up" },
          { title: "Ingresos Mes", value: "$1,240", change: "+8%", icon: DollarSign, color: "bg-emerald-50 text-emerald-600", trend: "up" },
          { title: "Pendientes", value: "3", change: "-5%", icon: ClipboardList, color: "bg-orange-50 text-orange-600", trend: "down" },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-2xl overflow-hidden transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <Badge variant="secondary" className={`border-none ${stat.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'} font-medium rounded-lg px-2`}>
                  {stat.change}
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Próximas Citas Table */}
        <Card className="lg:col-span-2 border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-3xl overflow-hidden bg-white">
          <CardHeader className="p-6 md:p-8 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-lg md:text-xl font-bold text-slate-800">Próximas Citas</CardTitle>
            <Button variant="link" className="text-[#2563eb] font-semibold p-0 h-auto text-sm">Ver todo el calendario</Button>
          </CardHeader>
          <CardContent className="px-6 md:px-8 pb-8 pt-0">
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-slate-100">
                    <th className="pb-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Cliente</th>
                    <th className="pb-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Servicio</th>
                    <th className="pb-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Hora</th>
                    <th className="pb-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {APPOINTMENTS.map((appointment, i) => (
                    <tr key={i} className="group">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border-2 border-slate-50">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${appointment.name}`} />
                            <AvatarFallback>{appointment.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="font-semibold text-slate-800 text-sm">{appointment.name}</span>
                        </div>
                      </td>
                      <td className="py-4 text-slate-500 text-sm">{appointment.service}</td>
                      <td className="py-4 font-bold text-slate-800 text-sm">{appointment.time}</td>
                      <td className="py-4">
                        <Badge variant="secondary" className={`${appointment.statusColor} border-none font-semibold rounded-lg px-3 py-1 text-[11px]`}>
                          {appointment.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile List View */}
            <div className="md:hidden space-y-4">
              {APPOINTMENTS.map((appointment, i) => (
                <div key={i} className="flex flex-col p-4 rounded-2xl border border-slate-50 bg-slate-50/30 gap-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${appointment.name}`} />
                        <AvatarFallback>{appointment.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-sm">{appointment.name}</span>
                        <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                          <Clock className="h-3 w-3" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className={`${appointment.statusColor} border-none font-semibold rounded-lg px-2 py-0.5 text-[10px]`}>
                      {appointment.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100/50">
                    <div className="bg-white p-1.5 rounded-lg shadow-sm">
                      <Briefcase className="h-3 w-3 text-slate-400" />
                    </div>
                    <span className="text-slate-600 text-[12px] font-medium">{appointment.service}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actividad Reciente & Sidebar */}
        <div className="space-y-8">
          <Card className="border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-3xl overflow-hidden bg-white">
            <CardHeader className="p-8">
              <CardTitle className="text-xl font-bold text-slate-800">Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8 pt-0">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.2rem] before:w-px before:bg-slate-100 pb-2">
                {[
                  { title: "Nuevo cliente registrado", desc: "Carlos Méndez se unió hoy a las 8:45 AM", icon: UserPlus, color: "bg-blue-50 text-blue-500" },
                  { title: "Cita pagada exitosamente", desc: "Transacción #4592 por $120.00", icon: CheckCircle2, color: "bg-emerald-50 text-emerald-500" },
                  { title: "Cita reprogramada", desc: "Marta Ruiz cambió su cita para mañana", icon: RefreshCw, color: "bg-orange-50 text-orange-400" },
                ].map((activity, i) => (
                  <div key={i} className="relative flex gap-4 items-start">
                    <div className={`${activity.color} p-2 rounded-full relative z-10 shadow-sm border-2 border-white`}>
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{activity.title}</h4>
                      <p className="text-[12px] text-slate-400 mt-0.5 leading-tight">{activity.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Storage Usage Section */}
              <div className="mt-12 pt-8 border-t border-slate-50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Uso del almacenamiento</p>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#2563eb] h-full w-[65%]" />
                </div>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-[11px] text-slate-400 font-medium">6.5 GB de 10 GB utilizados</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
