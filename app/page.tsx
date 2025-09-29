import { MedicalHeader } from "@/components/medical-header"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"
import { XrayAnalyzer } from "@/components/xray-analyzer"
import { MedicalInfo } from "@/components/medical-info"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Header Section */}
        <MedicalHeader />

        {/* Disclaimer Section */}
        <MedicalDisclaimer />

        {/* Main Analysis Tool */}
        <XrayAnalyzer />

        {/* Medical Information */}
        <MedicalInfo />

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 PneumoAI. This tool is for educational purposes only. Always consult healthcare professionals.
          </p>
        </footer>
      </div>
    </main>
  )
}
