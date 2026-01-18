import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Book, Phone, ChevronRight } from "lucide-react"

export default function AidePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl font-bold text-foreground">Nous sommes là pour vous aider !</h1>
          <p className="text-muted-foreground">
            Obtenez des réponses instantanées aux questions courantes dans notre centre d'aide ou discutez avec notre
            équipe.
          </p>
        </div>

        {/* Help Options */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Book className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Guide & FAQ</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bienvenue dans notre section FAQ où vous trouverez des réponses aux questions fréquemment posées
                concernant notre service technique de paiement.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chez Lygos, nous nous engageons à faciliter les transactions financières pour les commerçants et les
                entreprises en Afrique francophone.
              </p>
              <Button
                variant="outline"
                className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
              >
                Visiter le centre d'aide
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Support tech</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trouvez et faites-vous assister par un expert Sunga+ qualifié pour faire intégrer facilement toute la
                Data RH de votre entreprise.
              </p>
              <div className="pt-2">
                <p className="text-sm font-medium text-foreground mb-1">Explorer le Hub des entreprises</p>
              </div>
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
              >
                Contacter le support
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow md:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Service client – Échanger et démarrer un chat en direct</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nous sommes là pour vous quand vous en avez besoin. Le service client répond à toutes vos questions ou
                bien vous pouvez aussi trouver quelques-unes en section FAQ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="font-medium">Contact: +242 06 835 00 72</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="font-medium">Contact: +1 000 00 00 00 00</span>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Démarrer une conversation
                <MessageCircle className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Questions fréquentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Comment demander une avance de salaire ?",
              "Quels sont les moyens de paiement disponible ?",
              "Que se passe-t-il en cas de retard ?",
              "Puis-je rembourser mon prêt plus tôt ?",
              "Comment rembourser mon emprunt ?",
              "Comment suivre mon prêt ?",
            ].map((question, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors cursor-pointer group"
              >
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {question}
                </p>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
