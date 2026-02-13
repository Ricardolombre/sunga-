"use client"

import { ProprietaireLayout } from "@/components/proprietaire-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Plus, Search, X, Pencil } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const initialEmployees = [
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
    status: "Inactif",
    nextDue: "-",
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

export default function ProprietaireSalariesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [employees, setEmployees] = useState(initialEmployees)
  const [editingEmployee, setEditingEmployee] = useState<typeof initialEmployees[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleStatus = (id: string) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? { ...emp, status: emp.status === "Actif" ? "Inactif" : "Actif" }
          : emp,
      ),
    )
  }

  const handleEdit = (employee: typeof initialEmployees[0]) => {
    setEditingEmployee(employee)
    setIsEditModalOpen(true)
  }

  return (
    <ProprietaireLayout>
      <div className="space-y-6 max-w-full overflow-x-hidden">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary">Gestion des salaries</h1>
          <p className="text-sm text-muted-foreground">
            Salaries rattaches a TechCorp Solutions
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setIsUploadModalOpen(true)}
              variant="outline"
              className="gap-2 border-gray-300 text-primary bg-gray-100 dark:hover:bg-[#001B52]"
            >
              <Download className="h-4 w-4" />
              Televerser un fichier Excel
            </Button>
            <Button onClick={() => setIsModalOpen(true)} className="gap-2 bg-[#0047AB] hover:bg-[#003A8C] text-white">
              <Plus className="h-4 w-4" />
              Ajouter un salarie
            </Button>
          </div>
        </div>

        <div className="relative">
          <Input
            placeholder="Rechercher par nom ou ID"
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
                    Avance
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Montant
                    <br />
                    Rembourse
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">Statut</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">
                    Prochaine
                    <br />
                    echeance
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.name}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.id}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.contractType}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.salary}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.advanced}</td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.reimbursed}</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleStatus(employee.id)}
                        className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                          employee.status === "Actif"
                            ? "bg-green-100 text-green-700 hover:bg-red-100 hover:text-red-700"
                            : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
                        }`}
                      >
                        {employee.status}
                      </button>
                    </td>
                    <td className="py-4 px-4 text-primary whitespace-nowrap">{employee.nextDue}</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-primary hover:bg-secondary"
                        onClick={() => handleEdit(employee)}
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Modifier</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

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

      {/* Modal Ajouter un salarie */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden">
            <div className="bg-accent p-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Ajouter un salarie</h2>
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
                  placeholder="Prenom"
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

              <div className="grid grid-cols-1 gap-4">
                <Input
                  placeholder="Telephone"
                  className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                />
              </div>

              <div className="bg-green-50 border-2 border-accent rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Regles importantes</h3>
                <p className="text-sm text-primary leading-relaxed">
                  Le salarie sera automatiquement rattache a votre entreprise.
                  Statut par defaut : <span className="font-semibold">Actif</span>. Pour tout salaire{" "}
                  <span className="font-semibold">{">="}500 000 FCFA</span>, une justification est requise.
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  variant="outline"
                  className="px-8 h-12 rounded-xl border-2 border-gray-300 text-primary dark:hover:text-[#001B52]"
                >
                  Annuler
                </Button>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 h-12 rounded-xl bg-primary hover:bg-primary/90 text-white"
                >
                  {"Creer l'employe"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Modifier un salarie */}
      {isEditModalOpen && editingEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden">
            <div className="bg-[#001B52] p-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Modifier le salarie</h2>
              <button
                onClick={() => {
                  setIsEditModalOpen(false)
                  setEditingEmployee(null)
                }}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-primary" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  defaultValue={editingEmployee.name.split(" ")[0]}
                  className="h-12 border-gray-300 rounded-xl text-primary"
                />
                <Input
                  defaultValue={editingEmployee.name.split(" ")[1]}
                  className="h-12 border-gray-300 rounded-xl text-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Select defaultValue={editingEmployee.contractType.toLowerCase()}>
                  <SelectTrigger className="h-12 border-gray-300 rounded-xl text-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdi">CDI</SelectItem>
                    <SelectItem value="cdd">CDD</SelectItem>
                    <SelectItem value="stage">Stage</SelectItem>
                    <SelectItem value="interim">Interim</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  defaultValue={editingEmployee.salary.replace(" Fcfa", "")}
                  className="h-12 border-gray-300 rounded-xl text-primary"
                />
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  onClick={() => {
                    setIsEditModalOpen(false)
                    setEditingEmployee(null)
                  }}
                  variant="outline"
                  className="px-8 h-12 rounded-xl border-2 border-gray-300 text-primary dark:hover:text-[#001B52]"
                >
                  Annuler
                </Button>
                <Button
                  onClick={() => {
                    setIsEditModalOpen(false)
                    setEditingEmployee(null)
                  }}
                  className="px-8 h-12 rounded-xl bg-primary hover:bg-primary/90 text-white"
                >
                  Enregistrer
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Upload Excel */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden">
            <div className="bg-accent p-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Televerser un fichier Excel</h2>
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
                  Veuillez telecharger le modele de fichier Excel avant l{"'"}importation de votre Base de Donnees salaries.
                </p>
                <Button
                  variant="outline"
                  className="px-6 h-12 rounded-xl border-2 border-gray-300 text-primary dark:hover:bg-[#001B52] whitespace-nowrap bg-transparent"
                >
                  Telecharger le template
                </Button>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Televersez votre fichier Excel</h3>
                <div className="border-2 border-gray-300 rounded-xl p-6 flex items-center gap-4">
                  <label
                    htmlFor="file-upload-prop"
                    className="px-6 py-2 rounded-lg border-2 border-primary text-primary font-medium cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    choisir un fichier
                  </label>
                  <input
                    id="file-upload-prop"
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
                    {selectedFile ? selectedFile.name : "Aucun fichier n'a ete selectionne"}
                  </span>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-accent rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Regles importantes</h3>
                <p className="text-sm text-primary leading-relaxed">
                  Tous les salaries importes seront automatiquement rattaches a votre entreprise.
                  Pour tout salaire <span className="font-semibold">{">="}500 000 FCFA</span>, une justification est
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
                  className="px-8 h-12 rounded-xl border-2 border-gray-300 text-primary dark:hover:bg-[#001B52]"
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
    </ProprietaireLayout>
  )
}