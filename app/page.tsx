"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, CalendarIcon, ChevronDown, AlertTriangle, Search, Eye, Pause, Settings } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
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

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })

  const [searchEntreprise, setSearchEntreprise] = useState("")
  const [filterRisque, setFilterRisque] = useState("all")

  // 1.2 Flux Financiers Globaux - courbe + histogramme
  const fluxFinanciersData = [
    { month: "Jan.", emises: 4500000, remboursees: 2800000 },
    { month: "Fev.", emises: 5200000, remboursees: 3100000 },
    { month: "Mar.", emises: 3800000, remboursees: 4200000 },
    { month: "Avr.", emises: 6100000, remboursees: 3500000 },
    { month: "Mai", emises: 4700000, remboursees: 4000000 },
    { month: "Juin", emises: 5500000, remboursees: 3800000 },
    { month: "Juil.", emises: 3200000, remboursees: 4500000 },
    { month: "Aout", emises: 4800000, remboursees: 3900000 },
    { month: "Sep.", emises: 5900000, remboursees: 4100000 },
    { month: "Oct.", emises: 4300000, remboursees: 3700000 },
    { month: "Nov.", emises: 5100000, remboursees: 4400000 },
    { month: "Dec.", emises: 3600000, remboursees: 3200000 },
  ]

  // 1.3 Risque par Entreprise
  const risqueEntreprises = [
    {
      id: 1,
      nom: "TechCorp Solutions",
      encoursActif: "8.500.000",
      tauxRemboursement: 92,
      retards: 2,
      risque: "sain" as const,
    },
    {
      id: 2,
      nom: "Global Industries",
      encoursActif: "15.200.000",
      tauxRemboursement: 65,
      retards: 12,
      risque: "eleve" as const,
    },
    {
      id: 3,
      nom: "Innovate Digital",
      encoursActif: "5.750.000",
      tauxRemboursement: 78,
      retards: 5,
      risque: "surveillance" as const,
    },
    {
      id: 4,
      nom: "Smart Manufacturing",
      encoursActif: "11.300.000",
      tauxRemboursement: 88,
      retards: 3,
      risque: "sain" as const,
    },
    {
      id: 5,
      nom: "Eco Services Group",
      encoursActif: "9.100.000",
      tauxRemboursement: 55,
      retards: 18,
      risque: "eleve" as const,
    },
  ]

  // 1.4 Entreprises partenaires
  const entreprisesPartenaires = [
    {
      id: 1,
      nom: "TechCorp Solutions",
      encours: "8.500.000",
      statut: "Actif",
      risque: "sain" as const,
      salaries: 45,
    },
    {
      id: 2,
      nom: "Global Industries",
      encours: "15.200.000",
      statut: "Actif",
      risque: "eleve" as const,
      salaries: 120,
    },
    {
      id: 3,
      nom: "Innovate Digital",
      encours: "5.750.000",
      statut: "Actif",
      risque: "surveillance" as const,
      salaries: 30,
    },
    {
      id: 4,
      nom: "Smart Manufacturing",
      encours: "11.300.000",
      statut: "Actif",
      risque: "sain" as const,
      salaries: 80,
    },
    {
      id: 5,
      nom: "Eco Services Group",
      encours: "9.100.000",
      statut: "Suspendu",
      risque: "eleve" as const,
      salaries: 55,
    },
  ]

  const getRisqueBadge = (risque: "sain" | "surveillance" | "eleve") => {
    switch (risque) {
      case "sain":
        return <Badge className="bg-[#00A67F] text-white hover:bg-[#00A67F]/90">Sain</Badge>
      case "surveillance":
        return <Badge className="bg-amber-500 text-white hover:bg-amber-500/90">Surveillance</Badge>
      case "eleve":
        return <Badge className="bg-red-500 text-white hover:bg-red-500/90">Risque eleve</Badge>
    }
  }

  const filteredEntreprises = entreprisesPartenaires.filter((e) => {
    const matchSearch = e.nom.toLowerCase().includes(searchEntreprise.toLowerCase())
    const matchRisque = filterRisque === "all" || e.risque === filterRisque
    return matchSearch && matchRisque
  })

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-full overflow-x-hidden">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-primary uppercase tracking-wide">TABLEAU DE BORD</h1>
            <p className="text-base font-semibold text-primary">Bienvenu Username (Superadmin)</p>
            <p className="text-sm text-muted-foreground">Vue d{"'"}ensemble strategique de la plateforme Sunga+</p>
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
                  <p className="text-sm font-medium text-primary">Par defaut Vue Globale</p>
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

        {/* 1.1 KPI Strategiques Globaux */}
        <div>
          <h2 className="bg-[#001B52] text-white text-[11px] font-semibold uppercase tracking-[0.2em] mb-6 py-4 pl-3 rounded-sm">
            KPI STRATEGIQUES GLOBAUX
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Entreprises actives"
              value="48"
              subtitle="Partenaires actifs"
              variant="default"
            />
            <StatCard
              title="Salaries couverts"
              value="1 250"
              subtitle="Salaries actifs rattaches"
              variant="default"
            />
            <StatCard
              title="Encours total"
              value="45.800.000"
              subtitle="XAF - Non rembourses"
              variant="warning"
            />
            <StatCard
              title="Montant a recouvrer"
              value="3.200.000"
              subtitle="XAF - Echeances depassees < 5j"
              variant="warning"
            />
          </div>
        </div>

        {/* 1.2 Flux Financiers Globaux */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <h2 className="text-xl font-bold text-[#001B52] uppercase tracking-wide pt-2">
              FLUX FINANCIERS GLOBAUX
            </h2>
          </div>

          <Card className="border-border shadow-sm">
            <CardContent className="pt-6">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-semibold text-[#001B52]">Dynamique de tresorerie</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#00A67F] rounded-sm" />
                      <span className="text-sm text-[#001B52]">Avances emises</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#001B52] rounded-sm" />
                      <span className="text-sm text-[#001B52]">Avances remboursees</span>
                    </div>
                  </div>
                </div>

                <ChartContainer
                  config={{
                    emises: {
                      label: "Avances emises",
                      color: "#00A67F",
                    },
                    remboursees: {
                      label: "Avances remboursees",
                      color: "#001B52",
                    },
                  }}
                  className="h-[350px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={fluxFinanciersData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                        tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                        label={{
                          value: "Montant (XAF)",
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
                                    {"EMISES : "}{Number(payload[0].value).toLocaleString()} XAF
                                  </p>
                                  <p className="text-[11px] font-bold text-[#001B52] uppercase">
                                    {"REMBOURSEES : "}{Number(payload[1].value).toLocaleString()} XAF
                                  </p>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Bar dataKey="emises" fill="#00A67F" radius={[4, 4, 0, 0]} barSize={30} />
                      <Line type="monotone" dataKey="remboursees" stroke="#001B52" strokeWidth={3} dot={{ r: 4, fill: "#001B52" }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 1.3 Risque par Entreprise */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#001B52] uppercase tracking-wide">
            RISQUE PAR ENTREPRISE
          </h2>

          <Card className="border-border shadow-sm">
            <CardContent className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead className="border-b border-border bg-secondary/30">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Entreprise
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        En cours actif (XAF)
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        {"Taux de remboursement"}
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        {"Retards > 5 jours"}
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Indicateur
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {risqueEntreprises.map((entreprise) => (
                      <tr key={entreprise.id} className="border-b border-border hover:bg-secondary/20">
                        <td className="py-3 px-4 text-sm text-[#001B52] font-medium whitespace-nowrap">
                          {entreprise.nom}
                        </td>
                        <td className="py-3 px-4 text-sm text-[#001B52] whitespace-nowrap">
                          {entreprise.encoursActif}
                        </td>
                        <td className="py-3 px-4 text-sm text-[#001B52] whitespace-nowrap">
                          {entreprise.tauxRemboursement}%
                        </td>
                        <td className="py-3 px-4 text-sm text-[#001B52] whitespace-nowrap">
                          {entreprise.retards} jours
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {getRisqueBadge(entreprise.risque)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 1.4 Entreprises partenaires */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#001B52] uppercase tracking-wide">
            ENTREPRISES PARTENAIRES
          </h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Input
                placeholder="Rechercher une entreprise..."
                value={searchEntreprise}
                onChange={(e) => setSearchEntreprise(e.target.value)}
                className="pr-10 border-2 border-accent rounded-full h-12 text-primary placeholder:text-muted-foreground"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            </div>
            <Select value={filterRisque} onValueChange={setFilterRisque}>
              <SelectTrigger className="w-full sm:w-[180px] border-border bg-background">
                <SelectValue placeholder="Filtrer par risque" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les risques</SelectItem>
                <SelectItem value="sain">Sain</SelectItem>
                <SelectItem value="surveillance">Surveillance</SelectItem>
                <SelectItem value="eleve">Risque eleve</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card className="border-border shadow-sm">
            <CardContent className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="border-b border-border bg-secondary/30">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Entreprise
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Salaries
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Encours (XAF)
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Statut
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Risque
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEntreprises.map((entreprise) => (
                      <tr key={entreprise.id} className="border-b border-border hover:bg-secondary/20">
                        <td className="py-3 px-4 text-sm text-[#001B52] font-medium whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            {entreprise.nom}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-[#001B52] whitespace-nowrap">
                          {entreprise.salaries}
                        </td>
                        <td className="py-3 px-4 text-sm text-[#001B52] font-semibold whitespace-nowrap">
                          {entreprise.encours}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className={`text-sm font-medium ${entreprise.statut === "Actif" ? "text-[#00A67F]" : "text-red-500"}`}>
                            {entreprise.statut}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {getRisqueBadge(entreprise.risque)}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#001B52] hover:bg-secondary">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Voir</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#001B52] hover:bg-secondary">
                              <Settings className="h-4 w-4" />
                              <span className="sr-only">Modifier plafond</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:bg-red-50">
                              <Pause className="h-4 w-4" />
                              <span className="sr-only">Suspendre</span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partner Contract Banner */}
        <Card className="bg-[#00A67F] border-none shadow-sm mb-4">
          <CardContent className="px-4">
            <p className="text-white text-sm leading-relaxed">
              {"Pour continuer a faire beneficier aux employes des avances sur salaire, vous devez approuver notre contrat partenaire et actualiser constamment vos donnees comptables "}
              <a href="#" className="underline font-semibold hover:text-white/90">
                {"- Mettre a jour le fichier RH"}
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
