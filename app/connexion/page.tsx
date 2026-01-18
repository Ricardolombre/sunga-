import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function ConnexionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#001B52] p-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/adobe-20express-20-20file.png"
            alt="Sunga+"
            width={200}
            height={60}
            className="h-16 w-auto"
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Connexion</h1>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div className="space-y-2">
            <Input
              id="email"
              type="text"
              placeholder="Entrez votre E-mail (ou votre numéro de téléphone)"
              className="h-14 bg-transparent border-2 border-[#00A67F] text-white placeholder:text-white/60 rounded-xl"
              required
            />
          </div>

          <div className="space-y-2">
            <Input
              id="password"
              type="password"
              placeholder="Saisissez votre mot de passe"
              className="h-14 bg-transparent border-2 border-[#00A67F] text-white placeholder:text-white/60 rounded-xl"
              required
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-[#00A67F] data-[state=checked]:bg-[#00A67F]" />
              <Label htmlFor="remember" className="text-sm text-white cursor-pointer">
                Se souvenir de moi
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="forgot" className="border-[#00A67F] data-[state=checked]:bg-[#00A67F]" />
              <Label htmlFor="forgot" className="text-sm text-white cursor-pointer">
                Mot de passe oublié ?
              </Label>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="terms" className="mt-1 border-[#00A67F] data-[state=checked]:bg-[#00A67F]" />
            <Label htmlFor="terms" className="text-sm text-white leading-relaxed">
              J'accepte les{" "}
              <Link href="/conditions" className="text-[#00A67F] hover:underline">
                conditions d'utilisation
              </Link>{" "}
              et{" "}
              <Link href="/confidentialite" className="text-[#00A67F] hover:underline">
                politique de confidentialité
              </Link>
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full h-14 bg-[#00A67F] hover:bg-[#008f6d] text-white font-semibold text-lg rounded-xl"
          >
            Se connecter
          </Button>

          <div className="text-center text-sm text-white">
            Votre n'êtes pas encore sur Sunga+ ?{" "}
            <Link href="/inscription" className="underline font-semibold hover:text-[#00A67F]">
              S'inscrire
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
