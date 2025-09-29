import { Activity, Shield, Users, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

export function MedicalHeader() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 text-center py-16 px-6">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
            <Activity className="h-12 w-12 text-primary" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          PneumoAI Detection
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
          Advanced AI-powered chest X-ray analysis for pediatric pneumonia detection in children ages 1-5
        </p>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Card className="p-4 medical-card-glow border-primary/20">
            <Users className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium">Pediatric Focus</p>
          </Card>
          <Card className="p-4 medical-card-glow border-primary/20">
            <Activity className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium">AI Powered</p>
          </Card>
          <Card className="p-4 medical-card-glow border-primary/20">
            <Shield className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium">Secure Analysis</p>
          </Card>
          <Card className="p-4 medical-card-glow border-primary/20">
            <Award className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium">Research Based</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
