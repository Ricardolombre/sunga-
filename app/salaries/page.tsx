"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Plus, Search, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const employees = [
  {
    id: "EMP001",
    name: "Jean Dupont",
    contractType: "CDI",
    salary: "500.000 Fcfa",
    advanced: "100.000 Fcfa",
    reimbursed: "50.000 Fcfa",
    status: "Actif",
    nextDue: "15 Jan 2026",
  },
  {
    id: "EMP002",
    name: "Marie Kouassi",
    contractType: "CDD",
    salary: "350.000 Fcfa",
    advanced: "70.000 Fcfa",
    reimbursed: "70.000 Fcfa",
    status: "Actif",
    nextDue: "20 Jan 2026",
  },
  {
    id: "EMP003",
    name: "Paul Konate",
    contractType: "CDI",
    salary: "600.000 Fcfa",
    advanced: "120.000 Fcfa",
    reimbursed: "60.000 Fcfa",
    status: "Actif",
    nextDue: "18 Jan 2026",
  },
  {
    id: "EMP004",
    name: "Fatou Diallo",
    contractType: "Stage",
    salary: "200.000 Fcfa",
    advanced: "40.000 Fcfa",
    reimbursed: "20.000 Fcfa",
    status: "En cours",
    nextDue: "22 Jan 2026",
  },
  {
    id: "EMP005",
    name: "Ibrahim Traore",
    contractType: "CDI",
    salary: "750.000 Fcfa",
    advanced: "150.000 Fcfa",
    reimbursed: "100.000 Fcfa",
    status: "Actif",
    nextDue: "25 Jan 2026",
  },
]

export default function SalariesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary">Gestion des salariés</h1>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setIsUploadModalOpen(true)}
              variant="outline"
              className="gap-2 border-gray-300 text-primary bg-gray-100 hover:bg-primary hover:text-white"
            >
              <Download className="h-4 w-4" />
              Téléverser un fichier Excel
            </Button>
            <Button onClick={() => setIsModalOpen(true)} className="gap-2 bg-[#0047AB] hover:bg-[#003A8C] text-white">
              <Plus className="h-4 w-4" />
              Ajouter un salarié
            </Button>
            <Select>
              <SelectTrigger className="w-[240px] data-[placeholder]:text-white/70 bg-accent hover:bg-accent/90 text-white border-accent">
                <SelectValue placeholder="Choisir une entreprise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les entreprises</SelectItem>
                <SelectItem value="tech124">Tech 124</SelectItem>
                <SelectItem value="company2">Entreprise 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative">
          <Input
            placeholder="Rechercher par nom ou ID"
            className="pl-4 pr-12 h-12 border-2 border-accent rounded-full text-primary placeholder:text-gray-400"
          />
          <Button
            size="icon"
            className="absolute right-1 top-1 h-10 w-10 rounded-full bg-transparent hover:bg-gray-100 text-primary"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-white">
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Nom
                    <br />
                    complet
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">ID</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Type de
                    <br />
                    contrat
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">Salaire</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Montant
                    <br />
                    Avancé
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Montant
                    <br />
                    Remboursé
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">Statut</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Prochaine
                    <br />
                    échéance
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.name}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.id}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.contractType}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.salary}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.advanced}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.reimbursed}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.status}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.nextDue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button variant="outline" size="sm" className="bg-gray-100 hover:bg-primary hover:text-white text-primary border-gray-300">
            <
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-100 hover:bg-primary hover:text-white text-primary border-gray-300 px-4"
          >
            Prev
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-100 hover:bg-primary hover:text-white text-primary border-gray-300 px-4"
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

      {/* Modals remain the same but with improved button contrast */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden">
            <div className="bg-accent p-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Ajouter un employé</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-primary" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Prénom"
                  className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                />
                <Input
                  placeholder="Nom"
                  className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="h-12 border-gray-300 rounded-xl text-primary">
                    <SelectValue placeholder="Type de contrat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdi">CDI</SelectItem>
                    <SelectItem value="cdd">CDD</SelectItem>
                    <SelectItem value="stage">Stage</SelectItem>
                    <SelectItem value="interim">Interim</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Salaire"
                  className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Téléphone"
                  className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                />
                <Input
                  placeholder="Société"
                  className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                />
              </div>

              <div className="bg-green-50 border-2 border-accent rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Règles importantes</h3>
                <p className="text-sm text-primary leading-relaxed">
                  Statut par défaut est <span className="font-semibold">Actif</span>. Pour tout salaire{" "}
                  <span className="font-semibold">≥ 500 000 FCFA</span>, une justification est requise. L'employé ne
                  sera pas ajouté automatiquement.
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  variant="outline"
                  className="px-8 h-12 rounded-xl border-2 border-gray-300 text-primary hover:bg-primary hover:text-white"
                >
                  Annuler
                </Button>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 h-12 rounded-xl bg-primary hover:bg-primary/90 text-white"
                >
                  Créer l'employé
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden">
            <div className="bg-accent p-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Téléverser un fichier Excel</h2>
              <button
                onClick={() => {
                  setIsUploadModalOpen(false)
                  setSelectedFile(null)
                }}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-primary" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-primary">
                  Veuillez télécharger le modèle de fichier Excel avant l'importation de votre Base de Données salariés.
                </p>
                <Button
                  variant="outline"
                  className="px-6 h-12 rounded-xl border-2 border-gray-300 text-primary hover:bg-primary hover:text-white whitespace-nowrap bg-transparent"
                >
                  Télécharger le template
                </Button>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Téléversez votre fichier Excel</h3>
                <div className="border-2 border-gray-300 rounded-xl p-6 flex items-center gap-4">
                  <label
                    htmlFor="file-upload"
                    className="px-6 py-2 rounded-lg border-2 border-primary text-primary font-medium cursor-pointer hover:bg-primary hover:text-white transition-colors"
                  >
                    choisir un fichier
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".xlsx,.xls"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setSelectedFile(e.target.files[0])
                      }
                    }}
                  />
                  <span className="text-gray-500">
                    {selectedFile ? selectedFile.name : "Aucun fichier n'a été sélectionné"}
                  </span>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-accent rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Règles importantes</h3>
                <p className="text-sm text-primary leading-relaxed">
                  Pour tout salaire <span className="font-semibold">≥ 500 000 FCFA</span>, une justification est
                  obligatoire.
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  onClick={() => {
                    setIsUploadModalOpen(false)
                    setSelectedFile(null)
                  }}
                  variant="outline"
                  className="px-8 h-12 rounded-xl border-2 border-gray-300 text-primary hover:bg-primary hover:text-white"
                >
                  Annuler
                </Button>
                <Button
                  onClick={() => {
                    setIsUploadModalOpen(false)
                    setSelectedFile(null)
                  }}
                  className="px-8 h-12 rounded-xl bg-primary hover:bg-primary/90 text-white"
                >
                  Traiter le fichier
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}