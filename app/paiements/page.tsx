import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Users } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PaiementsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-primary">Gestion des paiements</h1>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Select>
              <SelectTrigger className="w-[200px] data-[placeholder]:text-white dark:data-[placeholder]:text-[#001B52] text-white dark:text-[#001B52] bg-accent border-accent hover:bg-accent/90">
                <SelectValue placeholder="Choisir une entreprise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les entreprises</SelectItem>
                <SelectItem value="tech124">Tech 124</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[120px] bg-green-100 text-primary border-green-200">
                <SelectValue placeholder="Mois" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="01">Janvier</SelectItem>
                <SelectItem value="02">Février</SelectItem>
                <SelectItem value="03">Mars</SelectItem>
                <SelectItem value="04">Avril</SelectItem>
                <SelectItem value="05">Mai</SelectItem>
                <SelectItem value="06">Juin</SelectItem>
                <SelectItem value="07">Juillet</SelectItem>
                <SelectItem value="08">Août</SelectItem>
                <SelectItem value="09">Septembre</SelectItem>
                <SelectItem value="10">Octobre</SelectItem>
                <SelectItem value="11">Novembre</SelectItem>
                <SelectItem value="12">Décembre</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[120px] bg-yellow-100 text-primary border-yellow-200">
                <SelectValue placeholder="Année" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              className="ml-auto border-accent text-accent hover:bg-accent hover:text-white bg-transparent dark:text-[#001B52] dark:hover:bg-[#001B52] dark:hover:text-white"
            >
              <Users className="h-4 w-4 mr-2" />
              Emprunteurs actifs
            </Button>
          </div>
        </div>

        {/* Debt Recovery Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-accent">Recouvrement des créances</h2>

          <Card className="border-2 border-accent rounded-2xl overflow-hidden">
            <CardHeader className="bg-white">
              <Input
                type="text"
                placeholder="Entrer le solde versé par l'entreprise (en XAF)"
                className="w-full border-2 border-accent rounded-full text-primary h-12 px-4"
              />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="montant-du" className="text-sm text-primary font-medium block">
                      Montant du (total)
                    </Label>
                    <div className="space-y-1">
                      <Input
                        id="montant-du"
                        type="text"
                        value="0 FCFA"
                        className="border-gray-300 text-primary w-full bg-gray-100 cursor-not-allowed"
                        readOnly
                      />
                      <p className="text-xs text-gray-500">
                        Somme des prets actifs pour la periode entreprise selectionnee.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="montant-paye" className="text-sm text-primary font-medium block">
                      Montant paye *
                    </Label>
                    <Input
                      id="montant-paye"
                      type="text"
                      placeholder="0"
                      className="border-gray-300 text-primary w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date-paiement" className="text-sm text-primary font-medium block">
                      Date de paiement *
                    </Label>
                    <Input
                      id="date-paiement"
                      type="text"
                      placeholder="aaaa-mm-DD"
                      className="border-gray-300 text-primary w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reference" className="text-sm text-primary font-medium block">
                      Reference de transaction
                    </Label>
                    <Input
                      id="reference"
                      type="text"
                      placeholder="PQ-ou-numero-oblige-etc"
                      className="border-gray-300 text-primary w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="commentaire" className="text-sm text-primary font-medium block">
                      Commentaire (facultatif)
                    </Label>
                    <Textarea
                      id="commentaire"
                      placeholder="Ajouter des details si necessaire"
                      className="border-gray-300 text-primary resize-none w-full"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="interets" className="text-sm text-primary font-medium block">
                      Interets appliques (si retard)
                    </Label>
                    <div className="space-y-1">
                      <Input
                        id="interets"
                        type="text"
                        value="0 FCFA"
                        className="border-gray-300 text-primary w-full bg-gray-100 cursor-not-allowed"
                        readOnly
                      />
                      <p className="text-xs text-gray-500">Calcul automatique selon la periode de grace</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="solde-restant" className="text-sm text-primary font-medium block">
                      Solde restant a payer
                    </Label>
                    <Input
                      id="solde-restant"
                      type="text"
                      value="0 FCFA"
                      className="border-gray-300 text-primary w-full bg-gray-100 cursor-not-allowed"
                      readOnly
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type-paiement" className="text-sm text-primary font-medium block">
                      Type de paiement *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-gray-300 text-primary w-full">
                        <SelectValue placeholder="Complet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="complet">Complet</SelectItem>
                        <SelectItem value="partiel">Partiel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preuve" className="text-sm text-primary font-medium block">
                      Preuve de paiement
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center w-full">
                      <Button variant="outline" className="border-primary text-primary mb-2 bg-transparent">
                        Choisir un fichier
                      </Button>
                      <p className="text-xs text-gray-500">Aucun fichier n{"'"}a ete selectionne</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-6">
                <Button className="bg-primary hover:bg-primary/90 text-white h-12 rounded-lg px-8">
                  Enregistrer le paiement
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
