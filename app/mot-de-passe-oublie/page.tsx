import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MotDePasseOubliePage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Reset Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Back Button */}
          <Link
            href="/connexion"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la connexion
          </Link>

          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/images/adobe-20express-20-20file.png"
              alt="Sunga+"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#00A67F]/10 flex items-center justify-center">
              <KeyRound className="w-8 h-8 text-[#00A67F]" />
            </div>
          </div>

          {/* Title and Description */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold text-foreground">Mot de passe oublié ?</h1>
            <p className="text-muted-foreground text-pretty">
              Entrez votre adresse e-mail et nous vous enverrons un code pour réinitialiser votre mot de passe.
            </p>
          </div>

          {/* Reset Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Adresse e-mail
              </Label>
              <Input id="email" type="email" placeholder="exemple@email.com" className="h-12" required />
            </div>

            <Button type="submit" className="w-full h-12 bg-[#00A67F] hover:bg-[#008f6d] text-white font-semibold">
              Envoyer le code de réinitialisation
            </Button>
          </form>
        </div>
      </div>

      {/* Right side - Brand Image */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-[#001B52] to-[#003380] items-center justify-center p-12">
        <div className="text-center space-y-6 max-w-md">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white text-balance">Récupérez votre accès en toute sécurité</h2>
            <p className="text-lg text-white/90 text-pretty">
              Suivez les étapes simples pour réinitialiser votre mot de passe et retrouver l'accès à votre tableau de
              bord.
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-8">
            <div className="w-20 h-1 bg-white/30 rounded-full" />
            <div className="w-20 h-1 bg-white/30 rounded-full" />
            <div className="w-20 h-1 bg-[#00A67F] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
