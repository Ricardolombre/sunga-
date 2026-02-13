"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation"

export default function VerificationPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role") || "admin"

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleVerify = () => {
    if (role === "proprietaire") {
      router.push("/proprietaire")
    } else {
      router.push("/")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-[#001B52]">
      <div className="w-full max-w-md space-y-1">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/icon_dark.jpeg"
            alt="Sunga+"
            width={200}
            height={60}
            className="w-[250px]"
          />
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-[#00A67F]/20 flex items-center justify-center">
            <Mail className="w-8 h-8 text-[#00A67F]" />
          </div>
        </div>

        {/* Title and Description */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-white">Vérifiez votre courrier électronique</h1>
          <p className="text-white/80 text-pretty">Nous vous avons envoyé un code de vérification par e-mail.</p>
          <p className="text-sm text-white/70">
            Entrez le code de <span className="font-semibold">6 chiffres</span> pour vérifier votre e-mail.
          </p>
        </div>

        {/* Code Input */}
        <div className="space-y-6">
          <div className="flex justify-center gap-3">
            {code.map((digit, index) => (
              <Input
                key={index}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-xl font-semibold bg-transparent border-2 border-[#00A67F] text-white focus:border-[#00A67F] focus:ring-[#00A67F]"
              />
            ))}
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-[#00A67F] hover:bg-[#008f6d] text-white font-semibold rounded-full"
            disabled={code.some((digit) => !digit)}
            onClick={handleVerify}
          >
            Vérifier
          </Button>

          <div className="text-center">
            <p className="text-sm text-white/70 mb-2">Vous n'avez pas reçu l'e-mail ?</p>
            <button type="button" className="text-sm text-[#00A67F] hover:underline font-semibold">
              Cliquez pour renvoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
