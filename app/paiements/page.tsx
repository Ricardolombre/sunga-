import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

          {/* Stats Section */}
          <div className="grid grid-cols-5 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-primary font-medium">Effectif général :</p>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-2xl font-bold text-primary">1500</p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-primary font-medium">Masse salariale XAF:</p>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-2xl font-bold text-primary">2 500 000</p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-primary font-medium">Durée du contrat :</p>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-2xl font-bold text-primary">2 ans</p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-primary font-medium">Transactions réussies :</p>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-2xl font-bold text-primary">38</p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-primary font-medium">Revenus générés (en XAF) :</p>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-2xl font-bold text-primary">3 850 320</p>
              </div>
            </div>
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
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Form Section */}
                <div className="flex-1 space-y-6">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="montant-du" className="text-sm text-primary font-medium block">
                          Montant dû (total)
                        </Label>
                        <div className="space-y-1">
                          <Input
                            id="montant-du"
                            type="text"
                            value="0 FCFA"
                            className="border-gray-300 text-primary w-full"
                            readOnly
                          />
                          <p className="text-xs text-gray-500">
                            Somme des prêts actifs pour la période entreprise sélectionnée.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="montant-paye" className="text-sm text-primary font-medium block">
                          Montant payé *
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
                          Référence de transaction
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
                          placeholder="Ajouter des détails si nécessaire"
                          className="border-gray-300 text-primary resize-none w-full"
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="interets" className="text-sm text-primary font-medium block">
                          Intérêts appliqués (si retard)
                        </Label>
                        <div className="space-y-1">
                          <Input
                            id="interets"
                            type="text"
                            value="0 FCFA"
                            className="border-gray-300 text-primary w-full"
                            readOnly
                          />
                          <p className="text-xs text-gray-500">Calcul automatique selon la période de grâce</p>
                        </div>
                      </div>

                      <div className="space-y-2 md:pt-2 lg:pt-4">
                        <Label htmlFor="solde-restant" className="text-sm text-primary font-medium block">
                          Solde restant à payer
                        </Label>
                        <Input
                          id="solde-restant"
                          type="text"
                          value="0 FCFA"
                          className="border-gray-300 text-primary w-full"
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
                          <p className="text-xs text-gray-500">Aucun fichier n'a été sélectionné</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Summary Section */}
                <div className="lg:w-80 flex-shrink-0">
                  <Card className="bg-gray-50 border-0">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Résumé de l'opération</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-primary">Montant dû :</span>
                          <span className="font-semibold text-accent">0.00 FCFA</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-primary">Intérêt :</span>
                          <span className="font-semibold text-accent">0.00 FCFA</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-primary">Montant payé :</span>
                          <span className="font-semibold text-accent">0.00 FCFA</span>
                        </div>
                        <div className="pt-3 border-t border-gray-300">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-primary">Solde actuel :</span>
                            <span className="font-bold text-lg text-red-600">0.00 FCFA</span>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-lg">
                        <span className="mr-2">📋</span>
                        Enregistrer le paiement
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
