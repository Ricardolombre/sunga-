"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, X, Building2, User } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const mockCompanies = [
  {
    id: 1,
    nom: "TechCorp Solutions",
    idContrat: "TC2024001",
    debut: "15/01/2024",
    responsable: "Marie Dubois",
    emprunte: "15.500.000",
    rembourse: "8.200.000",
    fin: "15/01/2026",
    statut: "Actif",
  },
  {
    id: 2,
    nom: "Global Industries",
    idContrat: "GI2023087",
    debut: "03/11/2023",
    responsable: "Jean Kamara",
    emprunte: "22.800.000",
    rembourse: "22.800.000",
    fin: "03/11/2025",
    statut: "Complété",
  },
  {
    id: 3,
    nom: "Innovate Digital",
    idContrat: "ID2024015",
    debut: "20/02/2024",
    responsable: "Fatou Ndiaye",
    emprunte: "9.750.000",
    rembourse: "4.500.000",
    fin: "20/02/2025",
    statut: "Actif",
  },
  {
    id: 4,
    nom: "Smart Manufacturing",
    idContrat: "SM2024032",
    debut: "10/03/2024",
    responsable: "Paul Koné",
    emprunte: "18.300.000",
    rembourse: "12.100.000",
    fin: "10/03/2026",
    statut: "Actif",
  },
  {
    id: 5,
    nom: "Eco Services Group",
    idContrat: "ES2023102",
    debut: "05/12/2023",
    responsable: "Aminata Touré",
    emprunte: "12.500.000",
    rembourse: "12.500.000",
    fin: "05/12/2024",
    statut: "Complété",
  },
]

export default function EntreprisesPage() {
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-primary">Toutes les entreprises partenaires</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Input
              placeholder="Rechercher par nom, responsable RH ou ID Contrat"
              className="pr-10 border-2 border-accent rounded-full h-12 text-primary placeholder:text-muted-foreground"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
          </div>
          <Button
            onClick={() => setShowAddModal(true)}
            className="gap-2 bg-accent hover:bg-accent/90 text-white h-12 rounded-full px-6"
          >
            <Plus className="h-5 w-5" />
            Ajouter une entreprise
          </Button>
        </div>

        <Card className="border-2 border-border rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/30 border-b-2 border-border">
                  <th className="text-left py-4 px-6 text-sm font-bold text-primary">Nom</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-primary">ID Contrat</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-primary">Début partenariat</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-primary">Responsable société</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-primary">Montant Emprunté</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-primary">Montant Remboursé</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-primary">Fin de Partenariat</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-primary">Statut</th>
                </tr>
              </thead>
              <tbody>
                {mockCompanies.map((company, index) => (
                  <tr
                    key={company.id}
                    className={`border-b border-border hover:bg-muted/10 ${index === mockCompanies.length - 1 ? "border-b-0" : ""}`}
                  >
                    <td className="py-4 px-6 text-sm text-primary">{company.nom}</td>
                    <td className="py-4 px-6 text-sm text-primary">{company.idContrat}</td>
                    <td className="py-4 px-6 text-sm text-primary">{company.debut}</td>
                    <td className="py-4 px-6 text-sm text-primary">{company.responsable}</td>
                    <td className="py-4 px-6 text-sm text-primary">{company.emprunte}</td>
                    <td className="py-4 px-6 text-sm text-primary">{company.rembourse}</td>
                    <td className="py-4 px-6 text-sm text-primary">{company.fin}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`text-sm font-medium ${company.statut === "Actif" ? "text-accent" : "text-primary"}`}
                      >
                        {company.statut}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="flex items-center justify-center gap-4 pb-6">
          <Button variant="ghost" size="sm" className="text-primary hover:bg-muted/20">
            &lt;
          </Button>
          <Button variant="ghost" size="sm" className="text-primary hover:bg-muted/20 px-3">
            Prev
          </Button>
          <Button variant="ghost" size="sm" className="text-primary hover:bg-muted/20 px-3">
            Next
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-primary">Page :</span>
            <div className="border-2 border-primary rounded-lg px-3 py-1 min-w-[40px] text-center">
              <span className="text-sm font-medium text-primary">1</span>
            </div>
            <span className="text-sm text-primary">of 1</span>
          </div>
          <Select defaultValue="10">
            <SelectTrigger className="w-[70px] border-2 border-primary text-primary rounded-lg h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="bg-primary text-white p-6 rounded-t-2xl flex items-center justify-between">
              <h2 className="text-xl font-bold">Ajouter une entreprise</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-white text-primary rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Informations sur l'entreprise */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold text-primary">Informations sur l'entreprise</h3>
                </div>

                <div className="space-y-4">
                  <Input
                    placeholder="Nom officiel de l'entreprise"
                    className="w-full border-2 border-border rounded-lg h-12 text-primary placeholder:text-muted-foreground"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="RCCM"
                      className="border-2 border-border rounded-lg h-12 text-primary placeholder:text-muted-foreground"
                    />
                    <Input
                      placeholder="SCIEN/SCIET"
                      className="border-2 border-border rounded-lg h-12 text-primary placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Secteur d'activité"
                      className="border-2 border-border rounded-lg h-12 text-primary placeholder:text-muted-foreground"
                    />
                    <Input
                      placeholder="Ville"
                      className="border-2 border-border rounded-lg h-12 text-primary placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="grid grid-cols-[1.5fr,1fr] gap-4">
                    <Input
                      placeholder="Adresse de localisation"
                      className="border-2 border-border rounded-lg h-12 text-primary placeholder:text-muted-foreground"
                    />
                    <Input
                      placeholder="Commission"
                      className="border-2 border-border rounded-lg h-12 text-primary placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              </div>

              {/* Informations sur le Responsable */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold text-primary">Informations sur le Responsable</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Nom (s)"
                      className="border-2 border-border rounded-lg h-12 text-primary placeholder:text-muted-foreground"
                    />
                    <Input
                      placeholder="Prénom (s)"
                      className="border-2 border-border rounded-lg h-12 text-primary placeholder:text-muted-foreground"
                    />
                  </div>

                  <Input
                    placeholder="Fonction ou poste dans l'entreprise"
                    className="w-full border-2 border-border rounded-lg h-12 text-primary placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-end gap-4 pt-4">
                <Button
                  onClick={() => setShowAddModal(false)}
                  variant="outline"
                  className="px-8 h-12 text-primary border-2 border-border hover:bg-muted/20 rounded-lg"
                >
                  Annuler
                </Button>
                <Button
                  onClick={() => setShowAddModal(false)}
                  className="px-8 h-12 bg-accent hover:bg-accent/90 text-white rounded-lg"
                >
                  Créer l'entreprise
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
