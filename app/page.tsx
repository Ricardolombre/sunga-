"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, CalendarIcon, ChevronDown, TrendingDown, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Area,
  AreaChart,
  Pie,
  PieChart,
  Cell,
} from "recharts"
import { ChartContainer } from "@/components/ui/chart"

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })

  const [salaryDateRange, setSalaryDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })

  const transactionData = [
    { month: "Jan.", emprunts: 18, remboursements: 0 },
    { month: "Feb.", emprunts: 18, remboursements: 12 },
    { month: "Mar.", emprunts: 18, remboursements: 0 },
    { month: "Apr.", emprunts: 18, remboursements: 3 },
    { month: "May", emprunts: 18, remboursements: 0 },
    { month: "Jun.", emprunts: 18, remboursements: 0 },
    { month: "Jul.", emprunts: 18, remboursements: 0 },
    { month: "Aug.", emprunts: 18, remboursements: 5 },
    { month: "Sep.", emprunts: 18, remboursements: 0 },
    { month: "Oct.", emprunts: 18, remboursements: 0 },
    { month: "Nov.", emprunts: 18, remboursements: 0 },
    { month: "Dec.", emprunts: 8, remboursements: 0 },
  ]

  const salaryAnalyticsData = [
    { date: "1 Jan", value: 12 },
    { date: "15 Jan", value: 14 },
    { date: "1 Feb", value: 11 },
    { date: "15 Feb", value: 16 },
    { date: "1 Mar", value: 13 },
    { date: "15 Mar", value: 18 },
    { date: "1 Avr", value: 15 },
    { date: "6 Avr", value: 15 },
    { date: "15 Avr", value: 20 },
  ]

  const stats = [
    {
      title: "Total emprunt",
      value: "0,00",
      subtitle: "Montants XAF",
      variant: "default" as const,
    },
    {
      title: "Total remboursé",
      value: "0,00",
      subtitle: "Montants XAF",
      variant: "accent" as const,
    },
    {
      title: "Nombre d'entreprises",
      value: "250",
      subtitle: "Partenaires",
      variant: "default" as const,
    },
    {
      title: "Dettes client",
      value: "0,00",
      subtitle: "Montants XAF",
      variant: "warning" as const,
    },
    {
      title: "Demandes en traitement",
      value: "530",
      subtitle: "Operations",
      variant: "default" as const,
    },
    {
      title: "Transactions échouées",
      value: "1002",
      subtitle: "Operations",
      variant: "warning" as const,
    },
  ]

  const recentRequests = [
    {
      id: 1,
      name: "Justin Lipshutz",
      company: "Tech 124",
      status: "CDD",
      salary: "200.000 Fcfa",
      amount: "100.000 Fcfa",
    },
    {
      id: 2,
      name: "Marie Dubois",
      company: "Innovate SA",
      status: "CDI",
      salary: "350.000 Fcfa",
      amount: "150.000 Fcfa",
    },
    {
      id: 3,
      name: "Paul Kamga",
      company: "Digital Plus",
      status: "CDD",
      salary: "180.000 Fcfa",
      amount: "80.000 Fcfa",
    },
  ]

  const requestRateData = [
    { name: "Demandes traitées", value: 35, color: "#001B52" },
    { name: "Demandes non traitées", value: 65, color: "#D4AF37" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-full overflow-x-hidden">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-primary uppercase tracking-wide">TABLEAU DE BORD</h1>
            <p className="text-base font-semibold text-primary">Bienvenu Username (Superadmin)</p>
            <p className="text-sm text-muted-foreground">Vue d'ensemble des transactions financières</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:pt-10">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-accent text-white border-none hover:bg-accent/90 dark:bg-accent dark:hover:bg-accent/90">
                <SelectValue placeholder="Entreprise name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les entreprises</SelectItem>
                <SelectItem value="tech124">Tech 124</SelectItem>
                <SelectItem value="acme">Acme Corp</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full sm:w-[180px] justify-start text-left font-normal border-border bg-background hover:bg-secondary"
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-primary">Période</span>
                  <ChevronDown className="ml-auto h-4 w-4 text-primary" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4 bg-white" align="end">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-primary">Par défaut Vue Globale</p>
                  <div className="border-t pt-3">
                    <p className="text-xs text-muted-foreground mb-2">Sélection à partir du calendrier</p>
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

        <div>
          <h2 className="bg-[#001B52] text-white text-[11px] font-semibold uppercase tracking-[0.2em] mb-6 py-4 pl-3 rounded-sm">
            SI ENTREPRISE OU SALARIÉS
          </h2>
          <p className="text-sm text-muted-foreground mb-4">Vue d'ensemble de votre activité sur SungaPlus</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <h2 className="text-xl font-bold text-[#001B52] uppercase tracking-wide pt-2">
              ANALYSE DU VOLUME DES TRANSACTIONS
            </h2>
          </div>

          <Card className="border-border shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-base font-semibold text-[#001B52]">Statistiques de transactions</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#00A67F] rounded-sm" />
                        <span className="text-sm text-[#001B52]">Emprunts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#00A67F]/30 rounded-sm" />
                        <span className="text-sm text-[#001B52]">Remboursements</span>
                      </div>
                    </div>
                  </div>

                  <ChartContainer
                    config={{
                      emprunts: {
                        label: "Emprunts",
                        color: "#00A67F",
                      },
                      remboursements: {
                        label: "Remboursements",
                        color: "#00A67F",
                      },
                    }}
                    className="h-[350px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={transactionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                            value: "Bilan (XAF)",
                            angle: -90,
                            position: "insideLeft",
                            fill: "#001B52",
                            fontSize: 12,
                          }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                            padding: "8px 12px",
                          }}
                          labelStyle={{ color: "#001B52", fontWeight: 600, marginBottom: "4px" }}
                          itemStyle={{ color: "#001B52", fontSize: "14px" }}
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              // On récupère les valeurs
                              const emprunts = payload[0].value;
                              const remboursements = payload[1].value;
                              // Calcul du montant total ou récupération d'une autre donnée
                              const montant = emprunts + remboursements;

                              return (
                                <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
                                  <p className="font-bold text-[#001B52] mb-1">{label}</p>
                                  <div className="flex flex-col gap-0.5">
                                    <p className="text-[11px] font-bold text-[#00A67F] uppercase">
                                      EMPRUNT : {emprunts}
                                    </p>
                                    <p className="text-[11px] font-bold text-[#00A67F]/50 uppercase">
                                      REMBOUR. : {remboursements}
                                    </p>
                                    <p className="text-[11px] font-bold text-[#001B52] uppercase mt-1 border-t pt-1">
                                      MONTANT. : {montant.toLocaleString()} XAF
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar dataKey="emprunts" fill="#00A67F" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="remboursements" fill="#00A67F" opacity={0.3} radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <h2 className="text-xl font-bold text-[#001B52] uppercase tracking-wide">
              ANALYTIQUES DES SALARIÉS <span className="text-sm font-normal normal-case">(Données scrapes)</span>
            </h2>
          </div>

          <Card className="border-border shadow-sm bg-[#F5F3E8]">
            <CardContent className="pt-6">
              <div className="grid lg:grid-cols-[300px_1fr] gap-6">
                <div className="space-y-6">
                  <Card className="border-border bg-white">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <Users className="h-8 w-8 text-[#00A67F]" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-[#001B52] mb-1">Nombre total des salariés</p>
                          <p className="text-xs text-muted-foreground">Utilisateurs sur la platforme</p>
                        </div>
                      </div>
                      <p className="text-5xl font-bold text-[#001B52] mb-4">0</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-[#00A67F]" />
                          <span className="text-sm text-[#00A67F] font-semibold">Croissance : 0.00 %</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingDown className="h-4 w-4 text-red-500" />
                          <span className="text-sm text-red-500 font-semibold">Régression : - 0.00 %</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-white">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <TrendingUp className="h-6 w-6 text-[#00A67F]" />
                        <p className="text-sm font-semibold text-[#001B52]">Salariés solvables</p>
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <p className="text-5xl font-bold text-[#001B52]">0</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 z-10 max-w-[180px]">
                    <Button className="bg-[#00A67F] hover:bg-[#00A67F]/90 text-white text-sm">Voir les scores →</Button>
                    <p className="text-[9px] text-[#001B52] mt-1">Affiche la liste de ceux qui</p>
                    <p className="text-[9px] text-[#001B52]">peuvent bénéficier de services</p>
                  </div>

                  <ChartContainer
                    config={{
                      value: {
                        label: "Salariés",
                        color: "#00A67F",
                      },
                    }}
                    className="h-[400px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={salaryAnalyticsData} margin={{ top: 40, right: 20, left: 0, bottom: 20 }}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00A67F" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#00A67F" stopOpacity={0.05} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                        <XAxis
                          dataKey="date"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#001B52", fontSize: 11 }}
                        />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#001B52", fontSize: 11 }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #00A67F",
                            borderRadius: "6px",
                            padding: "8px 12px",
                          }}
                          labelStyle={{ color: "#001B52", fontWeight: 600, marginBottom: "4px" }}
                          itemStyle={{ color: "#001B52", fontSize: "14px" }}
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white border border-[#00A67F] rounded-lg p-3 shadow-lg">
                                  <p className="text-sm font-semibold text-[#001B52] mb-1">{label}</p>
                                  <p className="text-xs text-[#001B52]">
                                    <span className="text-[#00A67F] font-bold">REMBOUR. : </span>
                                    {payload[0].value}
                                  </p>
                                  <p className="text-xs text-[#001B52]">
                                    <span className="text-[#001B52] font-bold">MONTANT. : </span>
                                    500.000
                                  </p>
                                  <p className="text-xs text-[#001B52] mt-1 font-semibold">
                                    {payload[0].value} Salariés
                                  </p>
                                </div>
                              )
                            }
                            return null
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#00A67F"
                          strokeWidth={3}
                          fillOpacity={1}
                          fill="url(#colorValue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Requests and Request Rate */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side: Recent Requests Table */}
          <Card className="border-border shadow-sm flex-1 min-w-0">
            <CardHeader className="border-b border-border flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-bold text-[#001B52]">Demandes récentes</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-[#00A67F] hover:bg-[#00A67F]/90 text-white gap-2">
                    <Filter className="h-4 w-4" />
                    Filtre
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel className="text-xs font-semibold text-[#001B52]">Trier par</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-sm">Nom entreprise</DropdownMenuItem>
                  <DropdownMenuItem className="text-sm">Localité</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="border-b border-border bg-secondary/30">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Nom complet
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Société
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Statut
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Salaire
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Montant demandé
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentRequests.map((request) => (
                      <tr key={request.id} className="border-b border-border hover:bg-secondary/20">
                        <td className="py-3 px-4 text-sm text-[#001B52] font-medium whitespace-nowrap">
                          {request.name}
                        </td>
                        <td className="py-3 px-4 text-sm text-[#001B52] whitespace-nowrap">{request.company}</td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <Badge className="bg-[#00A67F] text-white hover:bg-[#00A67F]/90">{request.status}</Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-[#001B52] font-semibold whitespace-nowrap">
                          {request.salary}
                        </td>
                        <td className="py-3 px-4 text-sm text-[#00A67F] font-bold whitespace-nowrap">
                          {request.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Right side: Request Rate Chart */}
          <Card className="border-border shadow-sm w-full lg:w-[400px] flex-shrink-0 min-w-0">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-base font-bold text-[#001B52]">Taux actuel des demandes</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ChartContainer
                config={{
                  treated: {
                    label: "Traitées",
                    color: "#001B52",
                  },
                  untreated: {
                    label: "Non traitées",
                    color: "#D4AF37",
                  },
                }}
                className="h-[280px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={requestRateData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {requestRateData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "6px",
                        padding: "8px 12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#001B52] mt-1" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#001B52]">Taux, 5 Juin</p>
                    <p className="text-xs text-[#00A67F] font-bold">35% de demandes traitées</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#D4AF37] mt-1" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#001B52]">Taux, 5 Juin</p>
                    <p className="text-xs text-[#00A67F] font-bold">65% de demandes non traitées</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border space-y-2">
                <p className="text-xs text-muted-foreground">856 Demandes encours de traitement</p>
                <p className="text-xs text-muted-foreground">1006 Demandes traitées avec succès</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partner Contract Banner */}
        <Card className="bg-[#00A67F] border-none shadow-sm mb-4">
          <CardContent className="px-4">
            <p className="text-white text-sm leading-relaxed">
              Pour continuer à faire bénéficier aux employés des avances sur salaire, vous devez approuver notre contrat
              partenaire et actualiser constamment vos données comptables{" "}
              <a href="#" className="underline font-semibold hover:text-white/90">
                - Mettre à jour le fichier RH
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
