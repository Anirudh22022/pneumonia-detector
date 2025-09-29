import { Heart, AlertTriangle, Shield, Clock, Users, Stethoscope } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MedicalInfo() {
  return (
    <div className="space-y-12">
      {/* X-Ray Requirements */}
      <Card className="p-8 medical-card-glow border-medical-warning/30">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-medical-warning/20">
              <AlertTriangle className="h-6 w-6 text-medical-warning" />
            </div>
            <h2 className="text-2xl font-bold">X-Ray Image Requirements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-medical-warning">Critical Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5 border-medical-warning text-medical-warning">
                    1
                  </Badge>
                  <div>
                    <p className="font-medium">No annotations or markings</p>
                    <p className="text-sm text-muted-foreground">
                      Remove all text, arrows, markers, or medical annotations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5 border-medical-warning text-medical-warning">
                    2
                  </Badge>
                  <div>
                    <p className="font-medium">Original unmodified format</p>
                    <p className="text-sm text-muted-foreground">
                      Use raw X-ray images without overlays or modifications
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5 border-medical-warning text-medical-warning">
                    3
                  </Badge>
                  <div>
                    <p className="font-medium">Clear, high-quality images</p>
                    <p className="text-sm text-muted-foreground">Ensure images are not blurry, cropped, or distorted</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5">
                    PA/AP
                  </Badge>
                  <div>
                    <p className="font-medium">Standard anatomical position</p>
                    <p className="text-sm text-muted-foreground">
                      Posterior-anterior or anterior-posterior view preferred
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5">
                    Single
                  </Badge>
                  <div>
                    <p className="font-medium">One view at a time</p>
                    <p className="text-sm text-muted-foreground">Upload individual chest X-ray views separately</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5">
                    10MB
                  </Badge>
                  <div>
                    <p className="font-medium">File size limit</p>
                    <p className="text-sm text-muted-foreground">Maximum file size for optimal processing</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* About Pneumonia */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Understanding Pediatric Pneumonia</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive information about pneumonia in children ages 1-5, including symptoms, risks, and when to seek
            medical attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* What is Pneumonia */}
          <Card className="p-6 medical-card-glow">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/20">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">What is Pneumonia?</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pneumonia is an infection that inflames air sacs in one or both lungs. In children aged 1-5, it can be
                particularly serious as their immune systems are still developing. The air sacs may fill with fluid or
                pus, causing breathing difficulties.
              </p>
            </div>
          </Card>

          {/* Symptoms */}
          <Card className="p-6 medical-card-glow">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-medical-warning/20">
                  <Stethoscope className="h-6 w-6 text-medical-warning" />
                </div>
                <h3 className="text-xl font-semibold">Common Symptoms</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-medical-warning"></div>
                  Persistent cough with thick mucus
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-medical-warning"></div>
                  High fever (over 101°F/38.3°C)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-medical-warning"></div>
                  Rapid or difficult breathing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-medical-warning"></div>
                  Chest pain when breathing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-medical-warning"></div>
                  Loss of appetite and fatigue
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-medical-error"></div>
                  Bluish lips or fingernails
                </li>
              </ul>
            </div>
          </Card>

          {/* Risks */}
          <Card className="p-6 medical-card-glow">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-medical-error/20">
                  <AlertTriangle className="h-6 w-6 text-medical-error" />
                </div>
                <h3 className="text-xl font-semibold">Health Risks</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-medical-error">Immediate Risks</p>
                  <p className="text-sm text-muted-foreground">
                    Severe breathing difficulties, dehydration, and high fever
                  </p>
                </div>
                <div>
                  <p className="font-medium text-medical-error">Complications</p>
                  <p className="text-sm text-muted-foreground">
                    Lung abscesses, pleural effusion, sepsis, respiratory failure
                  </p>
                </div>
                <div>
                  <p className="font-medium text-medical-error">Long-term Impact</p>
                  <p className="text-sm text-muted-foreground">
                    Potential permanent lung damage affecting breathing capacity
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* When to Seek Help */}
          <Card className="p-6 medical-card-glow">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-medical-error/20">
                  <Clock className="h-6 w-6 text-medical-error" />
                </div>
                <h3 className="text-xl font-semibold">When to Seek Help</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <Badge variant="destructive" className="mb-2">
                    EMERGENCY
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Difficulty breathing, blue lips/skin, high fever with lethargy, severe chest pain
                  </p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 border-medical-warning text-medical-warning">
                    URGENT
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Persistent cough &gt;3 days, fever &gt;102°F, worsening symptoms
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Prevention */}
          <Card className="p-6 medical-card-glow">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-medical-success/20">
                  <Shield className="h-6 w-6 text-medical-success" />
                </div>
                <h3 className="text-xl font-semibold">Prevention</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-medical-success"></div>
                  Keep vaccinations up-to-date
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-medical-success"></div>
                  Practice good hand hygiene
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-medical-success"></div>
                  Avoid exposure to smoke
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-medical-success"></div>
                  Maintain healthy nutrition
                </li>
              </ul>
            </div>
          </Card>

          {/* Age Group Focus */}
          <Card className="p-6 medical-card-glow">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-accent/20">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Pediatric Focus</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-accent">Ages 1-5 Years</p>
                  <p className="text-sm text-muted-foreground">
                    Specialized AI model trained specifically for pediatric chest X-rays
                  </p>
                </div>
                <div>
                  <p className="font-medium text-accent">Developing Immunity</p>
                  <p className="text-sm text-muted-foreground">
                    Children's immune systems are still developing, making early detection crucial
                  </p>
                </div>
                <div>
                  <p className="font-medium text-accent">Rapid Progression</p>
                  <p className="text-sm text-muted-foreground">Pneumonia can progress quickly in young children</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
