"use client"

import { useState } from "react"
import { Search, UserPlus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function UtilisateursPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [newUser, setNewUser] = useState({
    nom: "",
    email: "",
    telephone: "",
    role: "",
    entreprise: "",
    password: "",
  })

  // Données fictives
  const users = [
    {
      nom: "Jean Dupont",
      email: "jean.dupont@techcorp.cm",
      telephone: "+237 690 123 456",
      role: "Admin",
      statut: "Actif",
      entreprise: "Tech Corp",
    },
    {
      nom: "Marie Kouassi",
      email: "marie.kouassi@financeplus.cm",
      telephone: "+237 670 234 567",
      role: "RH Manager",
      statut: "Actif",
      entreprise: "Finance Plus",
    },
    {
      nom: "Pierre Kamdem",
      email: "pierre.kamdem@services.cm",
      telephone: "+237 680 345 678",
      role: "Utilisateur",
      statut: "Inactif",
      entreprise: "Services SA",
    },
    {
      nom: "Sophie Ndiaye",
      email: "sophie.ndiaye@consulting.cm",
      telephone: "+237 695 456 789",
      role: "Superadmin",
      statut: "Actif",
      entreprise: "Consulting Group",
    },
    {
      nom: "Ahmed Toure",
      email: "ahmed.toure@logistics.cm",
      telephone: "+237 675 567 890",
      role: "RH Manager",
      statut: "Actif",
      entreprise: "Logistics International",
    },
  ]

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) => value.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleCreateUser = () => {
    console.log("Créer utilisateur:", newUser)
    setIsAddUserModalOpen(false)
    setNewUser({
      nom: "",
      email: "",
      telephone: "",
      role: "",
      entreprise: "",
      password: "",
    })
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* En-tête */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Gestion des utilisateurs</h1>
          <div className="flex items-center gap-2">
            <Button
              className="bg-[#001B52] hover:bg-[#001B52]/90 text-white"
              onClick={() => setIsAddUserModalOpen(true)}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Créer un utilisateur
            </Button>
          </div>
        </div>

        {/* Barre de recherche */}
        <div className="relative">
          <Input
            placeholder="Rechercher par email, nom ou rôle"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-2 border-accent rounded-full pl-4 pr-12 py-6 text-base focus-visible:ring-accent"
          />
          <Button
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent text-primary"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* Tableau */}
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-4 font-semibold text-primary whitespace-nowrap">Nom</th>
                  <th className="text-left p-4 font-semibold text-primary whitespace-nowrap">Email</th>
                  <th className="text-left p-4 font-semibold text-primary whitespace-nowrap">Téléphone</th>
                  <th className="text-left p-4 font-semibold text-primary whitespace-nowrap">Rôle</th>
                  <th className="text-left p-4 font-semibold text-primary whitespace-nowrap">Statut</th>
                  <th className="text-left p-4 font-semibold text-primary whitespace-nowrap">Entreprise</th>
                  <th className="text-left p-4 font-semibold text-primary whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 whitespace-nowrap">{user.nom}</td>
                    <td className="p-4 whitespace-nowrap">{user.email}</td>
                    <td className="p-4 whitespace-nowrap">{user.telephone}</td>
                    <td className="p-4 whitespace-nowrap">{user.role}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          user.statut === "Actif" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.statut}
                      </span>
                    </td>
                    <td className="p-4 whitespace-nowrap">{user.entreprise}</td>
                    <td className="p-4 whitespace-nowrap">
                      <Button variant="ghost" size="sm" className="text-primary">
                        Modifier
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="ghost"
            className="text-primary hover:bg-accent/10"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            {"<"}
          </Button>
          <Button variant="ghost" className="bg-green-100 text-primary hover:bg-green-200">
            Prev
          </Button>
          <Button variant="ghost" className="bg-green-100 text-primary hover:bg-green-200">
            Next
          </Button>
          <span className="text-sm text-primary mx-2">Page :</span>
          <div className="border-2 border-primary rounded px-3 py-1 min-w-[40px] text-center">{currentPage}</div>
          <span className="text-sm text-primary">of 1</span>
          <Select value={rowsPerPage.toString()} onValueChange={(value) => setRowsPerPage(Number.parseInt(value))}>
            <SelectTrigger className="w-[70px] border-2 border-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Modal Ajouter utilisateur */}
        {isAddUserModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden">
              <div className="bg-accent p-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">Créer un utilisateur</h2>
                <button
                  onClick={() => setIsAddUserModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6 text-primary" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                {/* Informations utilisateur */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary flex items-center gap-2">
                    <UserPlus className="h-5 w-5" />
                    Informations sur l'utilisateur
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Nom complet"
                      value={newUser.nom}
                      onChange={(e) => setNewUser({ ...newUser, nom: e.target.value })}
                      className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                    />
                    <Input
                      placeholder="Téléphone"
                      value={newUser.telephone}
                      onChange={(e) => setNewUser({ ...newUser, telephone: e.target.value })}
                      className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                    />
                    <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                      <SelectTrigger className="h-12 border-gray-300 rounded-xl">
                        <SelectValue placeholder="Rôle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="superadmin">Superadmin</SelectItem>
                        <SelectItem value="rh">RH Manager</SelectItem>
                        <SelectItem value="user">Utilisateur</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Entreprise"
                      value={newUser.entreprise}
                      onChange={(e) => setNewUser({ ...newUser, entreprise: e.target.value })}
                      className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                    />
                    <Input
                      type="password"
                      placeholder="Mot de passe"
                      value={newUser.password}
                      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                      className="h-12 border-gray-300 rounded-xl text-primary placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex justify-end gap-4 pt-4">
                  <Button
                    onClick={() => setIsAddUserModalOpen(false)}
                    variant="outline"
                    className="px-8 h-12 rounded-xl border-2 border-gray-300 text-primary hover:bg-gray-50"
                  >
                    Annuler
                  </Button>
                  <Button
                    onClick={handleCreateUser}
                    className="px-8 h-12 rounded-xl bg-accent hover:bg-accent/90 text-white"
                  >
                    Créer l'utilisateur
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
