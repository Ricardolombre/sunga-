"use client"

import { ProprietaireLayout } from "@/components/proprietaire-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Eye } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const avancesData = [
  {
    id: "AVS-001",
    salarie: "Jean Dupont",
    montantDemande: "150.000",
    montantRembourse: "50.000",
    soldeRestant: "100.000",
    dateDemande: "05 Jan 2026",
    echeance: "05 Fev 2026",
    statut: "En cours" as const,
  },
  {
    id: "AVS-002",
    salarie: "Marie Kouassi",
    montantDemande: "70.000",
    montantRembourse: "70.000",
    soldeRestant: "0",
    dateDemande: "10 Dec 2025",
    echeance: "10 Jan 2026",
    statut: "Cloturee" as const,
  },
  {
    id: "AVS-003",
    salarie: "Paul Konate",
    montantDemande: "200.000",
    montantRembourse: "60.000",
    soldeRestant: "140.000",
    dateDemande: "15 Jan 2026",
    echeance: "15 Fev 2026",
    statut: "En cours" as const,
  },
  {
    id: "AVS-004",
    salarie: "Ibrahim Traore",
    montantDemande: "100.000",
    montantRembourse: "0",
    soldeRestant: "100.000",
    dateDemande: "20 Jan 2026",
    echeance: "20 Fev 2026",
    statut: "En attente" as const,
  },
  {
    id: "AVS-005",
    salarie: "Fatou Diallo",
    montantDemande: "40.000",
    montantRembourse: "20.000",
    soldeRestant: "20.000",
    dateDemande: "02 Jan 2026",
    echeance: "02 Fev 2026",
    statut: "En retard" as const,
  },
  {
    id: "AVS-006",
    salarie: "Jean Dupont",
    montantDemande: "80.000",
    montantRembourse: "80.000",
    soldeRestant: "0",
    dateDemande: "01 Nov 2025",
    echeance: "01 Dec 2025",
    statut: "Cloturee" as const,
  },
]

export default function ProprietaireAvancesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatut, setFilterStatut] = useState("all")

  const filteredAvances = avancesData.filter((avance) => {
    const matchSearch =
      avance.salarie.toLowerCase().includes(searchQuery.toLowerCase()) ||
      avance.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchStatut = filterStatut === "all" || avance.statut === filterStatut
    return matchSearch && matchStatut
  })

  const getStatutBadge = (statut: "En cours" | "Cloturee" | "En attente" | "En retard") => {
    switch (statut) {
      case "En cours":
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">En cours</Badge>
      case "Cloturee":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Cloturee</Badge>
      case "En attente":
        return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">En attente</Badge>
      case "En retard":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">En retard</Badge>
    }
  }

  // Calculs agrégés
  const totalEnCours = avancesData.filter((a) => a.statut === "En cours").length
  const totalMontant = avancesData
    .filter((a) => a.statut !== "Cloturee")
    .reduce((sum, a) => sum + parseInt(a.soldeRestant.replace(".", "")), 0)

  return (
    <ProprietaireLayout>
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary">Avances sur salaire</h1>
          <p className="text-sm text-muted-foreground">
            Suivi des avances des salaries de TechCorp Solutions
          </p>
        </div>

        {/* Recapitulatif rapide */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Avances en cours</p>
            <p className="text-2xl font-bold text-[#001B52]">{totalEnCours}</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Solde restant total</p>
            <p className="text-2xl font-bold text-[#001B52]">{totalMontant.toLocaleString()} FCFA</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Avances en retard</p>
            <p className="text-2xl font-bold text-red-600">
              {avancesData.filter((a) => a.statut === "En retard").length}
            </p>
          </div>
        </div>

        {/* Filtres */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Input
              placeholder="Rechercher par salarie ou ID avance..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 pr-12 h-12 border-2 border-accent rounded-full text-primary placeholder:text-gray-400"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1 h-10 w-10 rounded-full bg-transparent hover:bg-gray-100 text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <Select value={filterStatut} onValueChange={setFilterStatut}>
            <SelectTrigger className="w-full sm:w-[180px] border-border bg-background">
              <SelectValue placeholder="Filtrer par statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="En cours">En cours</SelectItem>
              <SelectItem value="Cloturee">Cloturee</SelectItem>
              <SelectItem value="En attente">En attente</SelectItem>
              <SelectItem value="En retard">En retard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-white">
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">ID</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">Salarie</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Montant
                    <br />
                    demande
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Montant
                    <br />
                    rembourse
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Solde
                    <br />
                    restant
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Date
                    <br />
                    demande
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">Echeance</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">Statut</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAvances.map((avance) => (
                  <tr key={avance.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 text-primary whitespace-nowrap font-medium">{avance.id}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{avance.salarie}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{avance.montantDemande} FCFA</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{avance.montantRembourse} FCFA</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap font-semibold">
                      {avance.soldeRestant} FCFA
                    </td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{avance.dateDemande}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{avance.echeance}</td>
                    <td className="py-4 px-4 whitespace-nowrap">{getStatutBadge(avance.statut)}</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:bg-secondary">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">Voir le detail</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-4">
          <Button variant="outline" size="sm" className="bg-gray-100 hover:bg-gray-200 text-primary border-gray-300">
            {"<"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-100 hover:bg-gray-200 text-primary border-gray-300 px-4"
          >
            Prev
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-100 hover:bg-gray-200 text-primary border-gray-300 px-4"
          >
            Next
          </Button>
          <div className="flex items-center gap-2 text-primary">
            <span>Page :</span>
            <div className="px-3 py-1 border border-gray-300 rounded">1</div>
            <span>of</span>
            <span>1</span>
          </div>
          <Select defaultValue="10">
            <SelectTrigger className="w-[80px] border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ProprietaireLayout>
  )
}
