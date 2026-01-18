"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {
  FileSpreadsheet,
  FileText,
  Download,
  CalendarIcon,
  ChevronDown,
  Info,
  CheckCircle2,
  Clock,
  Users,
  Banknote,
} from "lucide-react"
import { cn } from "@/lib/utils"

type ExportFormat = "xlsx" | "csv"
type DataType = "salaries" | "transactions" | "remboursements"

interface ExportHistory {
  id: number
  date: string
  filename: string
  format: "XLS" | "PDF" | "CSV"
  status: "Terminé" | "En attente"
  size: string
}

export default function ExportsPage() {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })
  const [selectedCompany, setSelectedCompany] = useState<string>("all")
  const [selectedDataType, setSelectedDataType] = useState<DataType>("salaries")
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>("xlsx")

  const exportHistory: ExportHistory[] = [
    {
      id: 1,
      date: "13 novembre 2025",
      filename: "Salariés insolvables",
      format: "XLS",
      status: "En attente",
      size: "1.24Mo",
    },
    {
      id: 2,
      date: "20 décembre 2025",
      filename: "Opérations financières",
      format: "PDF",
      status: "Terminé",
      size: "1.24Mo",
    },
    {
      id: 3,
      date: "13 novembre 2025",
      filename: "Salariés insolvables",
      format: "XLS",
      status: "En attente",
      size: "1.24Mo",
    },
    {
      id: 4,
      date: "20 décembre 2025",
      filename: "Opérations financières",
      format: "PDF",
      status: "Terminé",
      size: "1.24Mo",
    },
    {
      id: 5,
      date: "05 janvier 2026",
      filename: "Transactions mensuelles",
      format: "CSV",
      status: "Terminé",
      size: "2.15Mo",
    },
  ]

  const dataTypes = [
    {
      id: "salaries" as DataType,
      label: "Salariés insolvables",
      description: "Exportez votre base de dettes employés",
      icon: Users,
    },
    {
      id: "transactions" as DataType,
      label: "Opérations financières",
      description: "Visualisez vos transactions réussies et les revenus générés",
      icon: Banknote,
    },
    {
      id: "remboursements" as DataType,
      label: "Remboursements",
      description: "Historique des remboursements effectués",
      icon: CheckCircle2,
    },
  ]

  const handleExport = () => {
    console.log("Generating export:", {
      dateRange,
      company: selectedCompany,
      dataType: selectedDataType,
      format: selectedFormat,
    })
  }

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-full overflow-x-hidden">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-[#001B52] uppercase tracking-wide">
            EXPORTS DATAS
          </h1>
          <p className="text-sm text-muted-foreground">
            Exportation des Données d{"'"}entreprises partenaires
          </p>
        </div>

        {/* Info Banner */}
        <Card className="border-[#00A67F]/30 bg-[#00A67F]/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-[#00A67F]/20 flex items-center justify-center flex-shrink-0">
                <Info className="h-6 w-6 text-[#00A67F]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#001B52]">
                  Vos données n{"'"}attendent que vous
                </h3>
                <p className="text-sm text-muted-foreground">
                  Transformez vos ventes et clients en insights précieux. Exportez vos données en Excel ou CSV
                  pour analyser, comprendre et faire grandir votre business. Commencez votre premier export en
                  quelques clics.
                </p>
                <Button variant="link" className="text-[#00A67F] p-0 h-auto font-semibold">
                  En savoir plus
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Settings */}
        <Card className="border-border shadow-sm">
          <CardHeader className="border-b border-border">
            <CardTitle className="text-lg font-bold text-[#001B52]">
              Paramètres d{"'"}exportation
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            {/* Filters Row */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Date Range Picker */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#001B52]">
                  Période <span className="text-destructive">*</span>
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal border-border bg-background hover:bg-secondary"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-[#001B52]" />
                      <span className="text-[#001B52]">
                        {dateRange.from
                          ? dateRange.to
                            ? `${dateRange.from.toLocaleDateString("fr-FR")} - ${dateRange.to.toLocaleDateString("fr-FR")}`
                            : dateRange.from.toLocaleDateString("fr-FR")
                          : "Choisir une période"}
                      </span>
                      <ChevronDown className="ml-auto h-4 w-4 text-[#001B52]" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-4 bg-popover" align="start">
                    <Calendar
                      mode="range"
                      selected={{ from: dateRange.from, to: dateRange.to }}
                      onSelect={(range) => setDateRange({ from: range?.from, to: range?.to })}
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Company Select */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#001B52]">Entreprise</label>
                <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                  <SelectTrigger className="w-full border-border bg-background">
                    <SelectValue placeholder="Choisir une entreprise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les entreprises</SelectItem>
                    <SelectItem value="tech124">Tech 124</SelectItem>
                    <SelectItem value="acme">Acme Corp</SelectItem>
                    <SelectItem value="innovate">Innovate SA</SelectItem>
                    <SelectItem value="digital">Digital Plus</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Data Type Select */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#001B52]">Type de données</label>
                <Select value={selectedDataType} onValueChange={(v) => setSelectedDataType(v as DataType)}>
                  <SelectTrigger className="w-full border-border bg-background">
                    <SelectValue placeholder="Type de données" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salaries">Salariés</SelectItem>
                    <SelectItem value="transactions">Transactions</SelectItem>
                    <SelectItem value="remboursements">Remboursements</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Data Type Cards */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-[#001B52]">Ressource</label>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dataTypes.map((type) => (
                  <Card
                    key={type.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      selectedDataType === type.id
                        ? "border-[#00A67F] ring-2 ring-[#00A67F]/20 bg-[#00A67F]/5"
                        : "border-border hover:border-[#00A67F]/50"
                    )}
                    onClick={() => setSelectedDataType(type.id)}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0",
                            selectedDataType === type.id ? "bg-[#00A67F]/20" : "bg-secondary"
                          )}
                        >
                          <type.icon
                            className={cn(
                              "h-5 w-5",
                              selectedDataType === type.id ? "text-[#00A67F]" : "text-muted-foreground"
                            )}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-[#001B52]">{type.label}</p>
                          <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Format Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-[#001B52]">
                Format <span className="text-destructive">*</span>
              </label>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Excel Card */}
                <Card
                  className={cn(
                    "cursor-pointer transition-all hover:shadow-md",
                    selectedFormat === "xlsx"
                      ? "border-[#00A67F] ring-2 ring-[#00A67F]/20 bg-[#00A67F]/5"
                      : "border-border hover:border-[#00A67F]/50"
                  )}
                  onClick={() => setSelectedFormat("xlsx")}
                >
                  <CardContent className="pt-6 text-center">
                    <div
                      className={cn(
                        "h-16 w-16 rounded-xl mx-auto flex items-center justify-center mb-3",
                        selectedFormat === "xlsx" ? "bg-[#00A67F]/20" : "bg-secondary"
                      )}
                    >
                      <FileSpreadsheet
                        className={cn(
                          "h-8 w-8",
                          selectedFormat === "xlsx" ? "text-[#00A67F]" : "text-muted-foreground"
                        )}
                      />
                    </div>
                    <p className="font-semibold text-[#001B52]">Excel</p>
                    <p className="text-xs text-muted-foreground">.xlsx</p>
                  </CardContent>
                </Card>

                {/* CSV Card */}
                <Card
                  className={cn(
                    "cursor-pointer transition-all hover:shadow-md",
                    selectedFormat === "csv"
                      ? "border-[#00A67F] ring-2 ring-[#00A67F]/20 bg-[#00A67F]/5"
                      : "border-border hover:border-[#00A67F]/50"
                  )}
                  onClick={() => setSelectedFormat("csv")}
                >
                  <CardContent className="pt-6 text-center">
                    <div
                      className={cn(
                        "h-16 w-16 rounded-xl mx-auto flex items-center justify-center mb-3",
                        selectedFormat === "csv" ? "bg-[#00A67F]/20" : "bg-secondary"
                      )}
                    >
                      <FileText
                        className={cn(
                          "h-8 w-8",
                          selectedFormat === "csv" ? "text-[#00A67F]" : "text-muted-foreground"
                        )}
                      />
                    </div>
                    <p className="font-semibold text-[#001B52]">CSV</p>
                    <p className="text-xs text-muted-foreground">.csv</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Export Button */}
            <div className="flex justify-end pt-4">
              <Button
                onClick={handleExport}
                className="bg-[#00A67F] hover:bg-[#00A67F]/90 text-white px-8"
                size="lg"
              >
                <Download className="h-4 w-4 mr-2" />
                Générer l{"'"}export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Export History */}
        <Card className="border-border shadow-sm">
          <CardHeader className="border-b border-border flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold text-[#001B52]">
              Historique des exports
            </CardTitle>
            <Button variant="outline" size="sm" className="border-border bg-transparent dark:hover:hover:bg-[#001B52]">
              Créer un export
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead className="border-b border-border bg-secondary/30">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                      Date de création
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                      Ressource
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                      Format
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                      Statut
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                      Taille
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {exportHistory.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-border hover:bg-secondary/20 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <span className="text-sm text-[#001B52]">{item.date}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm font-medium text-[#001B52]">
                          {item.filename}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant="outline"
                          className={cn(
                            "font-medium",
                            item.format === "XLS" && "border-green-500 text-green-600",
                            item.format === "PDF" && "border-red-500 text-red-600",
                            item.format === "CSV" && "border-blue-500 text-blue-600"
                          )}
                        >
                          {item.format}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {item.status === "Terminé" ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-[#00A67F]" />
                              <span className="text-sm text-[#00A67F] font-medium">{item.status}</span>
                            </>
                          ) : (
                            <>
                              <Clock className="h-4 w-4 text-amber-500" />
                              <span className="text-sm text-amber-500 font-medium">{item.status}</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">{item.size}</span>
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#00A67F] hover:text-[#00A67F]/90 hover:bg-[#00A67F]/10"
                          disabled={item.status === "En attente"}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Télécharger
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
