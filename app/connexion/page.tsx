"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"

export default function ConnexionPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<"admin" | "proprietaire">("admin")

  const handleConnection = () => {
    router.push(`/verification?role=${selectedRole}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#001B52] p-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/icon_dark.jpeg"
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

          {/* Role selector */}
          <div className="space-y-2">
            <Label className="text-sm text-white/80">Se connecter en tant que</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole("admin")}
                className={`h-12 rounded-xl border-2 text-sm font-semibold transition-colors ${
                  selectedRole === "admin"
                    ? "border-[#00A67F] bg-[#00A67F]/20 text-[#00A67F]"
                    : "border-white/30 bg-transparent text-white/60 hover:border-white/50"
                }`}
              >
                Admin Sunga
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("proprietaire")}
                className={`h-12 rounded-xl border-2 text-sm font-semibold transition-colors ${
                  selectedRole === "proprietaire"
                    ? "border-[#00A67F] bg-[#00A67F]/20 text-[#00A67F]"
                    : "border-white/30 bg-transparent text-white/60 hover:border-white/50"
                }`}
              >
                Proprietaire
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-[#00A67F] data-[state=checked]:bg-[#00A67F]" />
              <Label htmlFor="remember" className="text-sm text-white cursor-pointer">
                Se souvenir de moi
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/inscription" className="underline text-sm text-white hover:text-[#00A67F]">
                Mot de passe oublie ?
              </Link>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="terms" className="mt-1 border-[#00A67F] data-[state=checked]:bg-[#00A67F]" />
            <Label htmlFor="terms" className="text-sm text-white flex items-center gap-1 whitespace-nowrap">
              <span>J'accepte les</span>
              <Link href="/conditions" className="text-[#00A67F] hover:underline">conditions d'utilisation</Link>
              <span>et</span>
              <Link href="/confidentialite" className="text-[#00A67F] hover:underline">politique de confidentialité</Link>
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full h-14 bg-[#00A67F] hover:bg-[#008f6d] text-white font-semibold text-lg rounded-xl"
            onClick={handleConnection}
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
