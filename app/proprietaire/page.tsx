"use client"

import { ProprietaireLayout } from "@/components/proprietaire-layout"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ChevronDown } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Line,
  ComposedChart,
} from "recharts"
import { ChartContainer } from "@/components/ui/chart"

export default function ProprietaireDashboardPage() {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })

  // Evolution des avances - demandees vs cloturees
  const evolutionAvancesData = [
    { month: "Jan.", demandees: 12, cloturees: 8 },
    { month: "Fev.", demandees: 15, cloturees: 10 },
    { month: "Mar.", demandees: 9, cloturees: 13 },
    { month: "Avr.", demandees: 18, cloturees: 11 },
    { month: "Mai", demandees: 14, cloturees: 12 },
    { month: "Juin", demandees: 16, cloturees: 14 },
    { month: "Juil.", demandees: 10, cloturees: 15 },
    { month: "Aout", demandees: 13, cloturees: 9 },
    { month: "Sep.", demandees: 17, cloturees: 12 },
    { month: "Oct.", demandees: 11, cloturees: 10 },
    { month: "Nov.", demandees: 14, cloturees: 13 },
    { month: "Dec.", demandees: 8, cloturees: 7 },
  ]

  // Derniers mouvements
  const derniersMouvements = [
    {
      salarie: "Jean Dupont",
      type: "Avance",
      montant: "150.000",
      date: "28 Jan 2026",
      statut: "En cours",
    },
    {
      salarie: "Marie Kouassi",
      type: "Remboursement",
      montant: "70.000",
      date: "27 Jan 2026",
      statut: "Complete",
    },
    {
      salarie: "Paul Konate",
      type: "Avance",
      montant: "200.000",
      date: "26 Jan 2026",
      statut: "En cours",
    },
    {
      salarie: "Fatou Diallo",
      type: "Remboursement",
      montant: "40.000",
      date: "25 Jan 2026",
      statut: "Complete",
    },
    {
      salarie: "Ibrahim Traore",
      type: "Avance",
      montant: "100.000",
      date: "24 Jan 2026",
      statut: "En attente",
    },
  ]

  return (
    <ProprietaireLayout>
      <div className="space-y-8 max-w-full overflow-x-hidden">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-primary uppercase tracking-wide">TABLEAU DE BORD</h1>
            <p className="text-base font-semibold text-primary">Bienvenu, Responsable TechCorp Solutions</p>
            <p className="text-sm text-muted-foreground">
              Vue d{"'"}ensemble RH operationnelle de votre entreprise
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:pt-10">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full sm:w-[180px] justify-start text-left font-normal border-border bg-background hover:bg-secondary"
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-primary">Periode</span>
                  <ChevronDown className="ml-auto h-4 w-4 text-primary" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4 bg-popover" align="end">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-primary">Par defaut : mois en cours</p>
                  <div className="border-t pt-3">
                    <p className="text-xs text-muted-foreground mb-2">Selection a partir du calendrier</p>
                    <Calendar
                      mode="range"
                      selected={{ from: dateRange.from, to: dateRange.to }}
                      onSelect={(range) => setDateRange({ from: range?.from, to: range?.to })}
                      className="rounded-md border"
                    />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* KPI RH Operationnels */}
        <div>
          <h2 className="bg-[#001B52] text-white text-[11px] font-semibold uppercase tracking-[0.2em] mb-6 py-4 pl-3 rounded-sm">
            INDICATEURS RH
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Avances en cours"
              value="23"
              subtitle="Demandes actives"
              variant="default"
            />
            <StatCard
              title="Montant avance"
              value="3.450.000"
              subtitle="XAF - Total avances actives"
              variant="default"
            />
            <StatCard
              title="Montant a retenir"
              value="1.280.000"
              subtitle="XAF - Retenues ce mois"
              variant="warning"
            />
            <StatCard
              title="Salaries actifs"
              value="45"
              subtitle="Employes rattaches"
              variant="default"
            />
          </div>
        </div>

        {/* Evolution des avances - Chart */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <h2 className="text-xl font-bold text-[#001B52] uppercase tracking-wide pt-2">
              EVOLUTION DES AVANCES
            </h2>
          </div>

          <Card className="border-border shadow-sm">
            <CardContent className="pt-6">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-semibold text-[#001B52]">Avances demandees vs cloturees</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#00A67F] rounded-sm" />
                      <span className="text-sm text-[#001B52]">Demandees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#001B52] rounded-sm" />
                      <span className="text-sm text-[#001B52]">Cloturees</span>
                    </div>
                  </div>
                </div>

                <ChartContainer
                  config={{
                    demandees: {
                      label: "Avances demandees",
                      color: "#00A67F",
                    },
                    cloturees: {
                      label: "Avances cloturees",
                      color: "#001B52",
                    },
                  }}
                  className="h-[350px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={evolutionAvancesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#001B52", fontSize: 12 }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#001B52", fontSize: 12 }}
                        label={{
                          value: "Nombre d'avances",
                          angle: -90,
                          position: "insideLeft",
                          fill: "#001B52",
                          fontSize: 12,
                        }}
                      />
                      <Tooltip
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-card p-3 border border-border rounded-lg shadow-sm">
                                <p className="font-bold text-[#001B52] mb-1">{label}</p>
                                <div className="flex flex-col gap-0.5">
                                  <p className="text-[11px] font-bold text-[#00A67F] uppercase">
                                    {"DEMANDEES : "}{Number(payload[0].value)}
                                  </p>
                                  <p className="text-[11px] font-bold text-[#001B52] uppercase">
                                    {"CLOTUREES : "}{Number(payload[1].value)}
                                  </p>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Bar dataKey="demandees" fill="#00A67F" radius={[4, 4, 0, 0]} barSize={30} />
                      <Line type="monotone" dataKey="cloturees" stroke="#001B52" strokeWidth={3} dot={{ r: 4, fill: "#001B52" }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Derniers mouvements */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#001B52] uppercase tracking-wide">
            DERNIERS MOUVEMENTS
          </h2>

          <Card className="border-border shadow-sm">
            <CardContent className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead className="border-b border-border bg-secondary/30">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Salarie
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Type
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Montant (XAF)
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Statut
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {derniersMouvements.map((mouvement, index) => (
                      <tr key={index} className="border-b border-border hover:bg-secondary/20">
                        <td className="py-3 px-4 text-sm text-[#001B52] font-medium whitespace-nowrap">
                          {mouvement.salarie}
                        </td>
                        <td className="py-3 px-4 text-sm text-[#001B52] whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            mouvement.type === "Avance"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-green-50 text-green-700"
                          }`}>
                            {mouvement.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-[#001B52] font-semibold whitespace-nowrap">
                          {mouvement.montant}
                        </td>
                        <td className="py-3 px-4 text-sm text-[#001B52] whitespace-nowrap">
                          {mouvement.date}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            mouvement.statut === "Complete"
                              ? "bg-green-100 text-green-700"
                              : mouvement.statut === "En cours"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-gray-100 text-gray-700"
                          }`}>
                            {mouvement.statut}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProprietaireLayout>
  )
}
