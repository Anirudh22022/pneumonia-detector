"use client"

import { useState } from "react"
import { AlertTriangle, Phone, Clock, ChevronDown, Globe, Heart } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type EmergencyContact = {
  medical: string
  pediatric: string
  description: string
}

const emergencyContacts: Record<string, EmergencyContact> = {
  Afghanistan: { medical: "119", pediatric: "119", description: "Emergency Services" },
  Albania: { medical: "127", pediatric: "127", description: "Shërbimi i Urgjencës" },
  Algeria: { medical: "14", pediatric: "14", description: "خدمات الطوارئ" },
  Andorra: { medical: "112", pediatric: "112", description: "Serveis d'Emergència" },
  Angola: { medical: "112", pediatric: "112", description: "Serviços de Emergência" },
  Argentina: { medical: "107", pediatric: "107", description: "Servicios de Emergencia" },
  Armenia: { medical: "103", pediatric: "103", description: "Արտակարգ իրավիճակների ծառայություն" },
  Australia: {
    medical: "000",
    pediatric: "13 HEALTH (13 43 25 84)",
    description: "Emergency Services Australia",
  },
  Austria: { medical: "144", pediatric: "141", description: "Notdienst Österreich" },
  Azerbaijan: { medical: "103", pediatric: "103", description: "Təcili Yardım Xidməti" },
  Bahamas: { medical: "919", pediatric: "919", description: "Emergency Services" },
  Bahrain: { medical: "999", pediatric: "999", description: "خدمات الطوارئ" },
  Bangladesh: { medical: "999", pediatric: "999", description: "জরুরি সেবা" },
  Barbados: { medical: "511", pediatric: "511", description: "Emergency Services" },
  Belarus: { medical: "103", pediatric: "103", description: "Служба экстренного реагирования" },
  Belgium: { medical: "112", pediatric: "112", description: "Services d'urgence / Hulpdiensten" },
  Belize: { medical: "90", pediatric: "90", description: "Emergency Services" },
  Benin: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  Bhutan: { medical: "112", pediatric: "112", description: "Emergency Services" },
  Bolivia: { medical: "118", pediatric: "118", description: "Servicios de Emergencia" },
  "Bosnia and Herzegovina": { medical: "124", pediatric: "124", description: "Hitna pomoć" },
  Botswana: { medical: "997", pediatric: "997", description: "Emergency Services" },
  Brazil: { medical: "192", pediatric: "136", description: "Serviços de Emergência" },
  Brunei: { medical: "991", pediatric: "991", description: "Emergency Services" },
  Bulgaria: { medical: "112", pediatric: "112", description: "Спешни услуги" },
  "Burkina Faso": { medical: "112", pediatric: "112", description: "Services d'urgence" },
  Burundi: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  Cambodia: { medical: "119", pediatric: "119", description: "សេវាកម្មបន្ទាន់" },
  Cameroon: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  Canada: { medical: "911", pediatric: "811 (Health Link)", description: "24/7 Emergency Services" },
  "Cape Verde": { medical: "130", pediatric: "130", description: "Serviços de Emergência" },
  "Central African Republic": { medical: "117", pediatric: "117", description: "Services d'urgence" },
  Chad: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  Chile: { medical: "131", pediatric: "131", description: "Servicios de Emergencia" },
  China: { medical: "120", pediatric: "120", description: "紧急服务" },
  Colombia: { medical: "123", pediatric: "123", description: "Servicios de Emergencia" },
  Comoros: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  Congo: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  "Costa Rica": { medical: "911", pediatric: "911", description: "Servicios de Emergencia" },
  Croatia: { medical: "112", pediatric: "112", description: "Hitna služba" },
  Cuba: { medical: "104", pediatric: "104", description: "Servicios de Emergencia" },
  Cyprus: { medical: "112", pediatric: "112", description: "Υπηρεσίες Έκτακτης Ανάγκης" },
  "Czech Republic": { medical: "155", pediatric: "112", description: "Záchranná služba" },
  Denmark: { medical: "112", pediatric: "112", description: "Akutberedskab" },
  Djibouti: { medical: "351351", pediatric: "351351", description: "Services d'urgence" },
  Dominica: { medical: "999", pediatric: "999", description: "Emergency Services" },
  "Dominican Republic": { medical: "911", pediatric: "911", description: "Servicios de Emergencia" },
  Ecuador: { medical: "911", pediatric: "911", description: "Servicios de Emergencia" },
  Egypt: { medical: "123", pediatric: "123", description: "خدمات الطوارئ" },
  "El Salvador": { medical: "911", pediatric: "911", description: "Servicios de Emergencia" },
  "Equatorial Guinea": { medical: "112", pediatric: "112", description: "Servicios de Emergencia" },
  Eritrea: { medical: "112", pediatric: "112", description: "Emergency Services" },
  Estonia: { medical: "112", pediatric: "112", description: "Hädaabiteenused" },
  Eswatini: { medical: "977", pediatric: "977", description: "Emergency Services" },
  Ethiopia: { medical: "907", pediatric: "907", description: "የአደጋ ጊዜ አገልግሎቶች" },
  Fiji: { medical: "911", pediatric: "911", description: "Emergency Services" },
  Finland: { medical: "112", pediatric: "112", description: "Hätäpalvelut" },
  France: { medical: "15", pediatric: "15", description: "Services d'urgence" },
  Gabon: { medical: "1300", pediatric: "1300", description: "Services d'urgence" },
  Gambia: { medical: "117", pediatric: "117", description: "Emergency Services" },
  Georgia: { medical: "112", pediatric: "112", description: "გადაუდებელი დახმარების სამსახური" },
  Germany: { medical: "112", pediatric: "116 117", description: "Notdienst Deutschland" },
  Ghana: { medical: "193", pediatric: "193", description: "Emergency Services" },
  Greece: { medical: "166", pediatric: "112", description: "Υπηρεσίες Έκτακτης Ανάγκης" },
  Grenada: { medical: "911", pediatric: "911", description: "Emergency Services" },
  Guatemala: { medical: "123", pediatric: "123", description: "Servicios de Emergencia" },
  Guinea: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  "Guinea-Bissau": { medical: "112", pediatric: "112", description: "Serviços de Emergência" },
  Guyana: { medical: "913", pediatric: "913", description: "Emergency Services" },
  Haiti: { medical: "114", pediatric: "114", description: "Services d'urgence" },
  Honduras: { medical: "911", pediatric: "911", description: "Servicios de Emergencia" },
  Hungary: { medical: "104", pediatric: "112", description: "Sürgősségi szolgálatok" },
  Iceland: { medical: "112", pediatric: "112", description: "Neyðarþjónusta" },
  India: { medical: "102", pediatric: "1098", description: "आपातकालीन सेवाएं" },
  Indonesia: { medical: "118", pediatric: "118", description: "Layanan Darurat" },
  Iran: { medical: "115", pediatric: "115", description: "خدمات اورژانس" },
  Iraq: { medical: "122", pediatric: "122", description: "خدمات الطوارئ" },
  Ireland: { medical: "112", pediatric: "112", description: "Emergency Services" },
  Israel: { medical: "101", pediatric: "101", description: "שירותי חירום" },
  Italy: { medical: "118", pediatric: "112", description: "Servizi di emergenza" },
  Jamaica: { medical: "110", pediatric: "110", description: "Emergency Services" },
  Japan: { medical: "119", pediatric: "#8000", description: "緊急サービス" },
  Jordan: { medical: "911", pediatric: "911", description: "خدمات الطوارئ" },
  Kazakhstan: { medical: "103", pediatric: "103", description: "Жедел жәрдем қызметі" },
  Kenya: { medical: "999", pediatric: "999", description: "Emergency Services" },
  Kiribati: { medical: "192", pediatric: "192", description: "Emergency Services" },
  Kuwait: { medical: "112", pediatric: "112", description: "خدمات الطوارئ" },
  Kyrgyzstan: { medical: "103", pediatric: "103", description: "Тез жардам кызматы" },
  Laos: { medical: "195", pediatric: "195", description: "ບໍລິການສຸກເສີນ" },
  Latvia: { medical: "112", pediatric: "112", description: "Neatliekamās palīdzības dienests" },
  Lebanon: { medical: "140", pediatric: "140", description: "خدمات الطوارئ" },
  Lesotho: { medical: "121", pediatric: "121", description: "Emergency Services" },
  Liberia: { medical: "911", pediatric: "911", description: "Emergency Services" },
  Libya: { medical: "193", pediatric: "193", description: "خدمات الطوارئ" },
  Liechtenstein: { medical: "112", pediatric: "112", description: "Notdienst" },
  Lithuania: { medical: "112", pediatric: "112", description: "Skubios pagalbos tarnyba" },
  Luxembourg: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  Madagascar: { medical: "124", pediatric: "124", description: "Services d'urgence" },
  Malawi: { medical: "998", pediatric: "998", description: "Emergency Services" },
  Malaysia: { medical: "999", pediatric: "999", description: "Perkhidmatan Kecemasan" },
  Maldives: { medical: "102", pediatric: "102", description: "Emergency Services" },
  Mali: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  Malta: { medical: "112", pediatric: "112", description: "Servizzi ta' Emerġenza" },
  "Marshall Islands": { medical: "911", pediatric: "911", description: "Emergency Services" },
  Mauritania: { medical: "101", pediatric: "101", description: "خدمات الطوارئ" },
  Mauritius: { medical: "114", pediatric: "114", description: "Emergency Services" },
  Mexico: { medical: "911", pediatric: "911", description: "Servicios de Emergencia" },
  Micronesia: { medical: "911", pediatric: "911", description: "Emergency Services" },
  Moldova: { medical: "112", pediatric: "112", description: "Serviciul de urgență" },
  Monaco: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  Mongolia: { medical: "103", pediatric: "103", description: "Яаралтай тусламжийн үйлчилгээ" },
  Montenegro: { medical: "124", pediatric: "124", description: "Hitna pomoć" },
  Morocco: { medical: "15", pediatric: "15", description: "خدمات الطوارئ" },
  Mozambique: { medical: "117", pediatric: "117", description: "Serviços de Emergência" },
  Myanmar: { medical: "192", pediatric: "192", description: "အရေးပေါ်ဝန်ဆောင်မှုများ" },
  Namibia: { medical: "2032276", pediatric: "2032276", description: "Emergency Services" },
  Nauru: { medical: "110", pediatric: "110", description: "Emergency Services" },
  Nepal: { medical: "102", pediatric: "102", description: "आपतकालीन सेवाहरू" },
  Netherlands: { medical: "112", pediatric: "112", description: "Hulpdiensten" },
  "New Zealand": { medical: "111", pediatric: "111", description: "Emergency Services" },
  Nicaragua: { medical: "911", pediatric: "911", description: "Servicios de Emergencia" },
  Niger: { medical: "112", pediatric: "112", description: "Services d'urgence" },
  Nigeria: { medical: "199", pediatric: "199", description: "Emergency Services" },
  "North Korea": { medical: "119", pediatric: "119", description: "응급 서비스" },
  "North Macedonia": { medical: "112", pediatric: "112", description: "Итна помош" },
  Norway: { medical: "113", pediatric: "112", description: "Nødtjenester" },
  Oman: { medical: "999", pediatric: "999", description: "خدمات الطوارئ" },
  Pakistan: { medical: "115", pediatric: "115", description: "ایمرجنسی سروسز" },
  Palau: { medical: "911", pediatric: "911", description: "Emergency Services" },
  Panama: { medical: "911", pediatric: "911", description: "Servicios de Emergencia" },
  "Papua New Guinea": { medical: "111", pediatric: "111", description: "Emergency Services" },
  Paraguay: { medical: "911", pediatric: "911", description: "Servicios de Emergencia" },
  Peru: { medical: "117", pediatric: "117", description: "Servicios de Emergencia" },
  Philippines: { medical: "911", pediatric: "911", description: "Emergency Services" },
  Poland: { medical: "999", pediatric: "112", description: "Służby ratunkowe" },
  Portugal: { medical: "112", pediatric: "112", description: "Serviços de Emergência" },
  Qatar: { medical: "999", pediatric: "999", description: "خدمات الطوارئ" },
  Romania: { medical: "112", pediatric: "112", description: "Servicii de urgență" },
  Russia: { medical: "103", pediatric: "103", description: "Служба экстренного реагирования" },
  Rwanda: { medical: "912", pediatric: "912", description: "Emergency Services" },
  "Saint Kitts and Nevis": { medical: "911", pediatric: "911", description: "Emergency Services" },
  "Saint Lucia": { medical: "999", pediatric: "999", description: "Emergency Services" },
  "Saint Vincent and the Grenadines": {
    medical: "911",
    pediatric: "911",
    description: "Emergency Services",
  },
  Samoa: { medical: "999", pediatric: "999", description: "Emergency Services" },
  "San Marino": { medical: "112", pediatric: "112", description: "Servizi di emergenza" },
  "Saudi Arabia": { medical: "997", pediatric: "997", description: "خدمات الطوارئ" },
  Senegal: { medical: "1515", pediatric: "1515", description: "Services d'urgence" },
  Serbia: { medical: "194", pediatric: "112", description: "Хитна помоћ" },
  Seychelles: { medical: "999", pediatric: "999", description: "Emergency Services" },
  "Sierra Leone": { medical: "999", pediatric: "999", description: "Emergency Services" },
  Singapore: { medical: "995", pediatric: "995", description: "Emergency Services" },
  Slovakia: { medical: "155", pediatric: "112", description: "Záchranná služba" },
  Slovenia: { medical: "112", pediatric: "112", description: "Nujne službe" },
  "Solomon Islands": { medical: "911", pediatric: "911", description: "Emergency Services" },
  Somalia: { medical: "888", pediatric: "888", description: "Emergency Services" },
  "South Africa": {
    medical: "10177",
    pediatric: "0800 029 999",
    description: "Emergency Medical Services",
  },
  "South Korea": { medical: "119", pediatric: "119", description: "응급 서비스" },
  "South Sudan": { medical: "997", pediatric: "997", description: "Emergency Services" },
  Spain: { medical: "112", pediatric: "112", description: "Servicios de emergencia" },
  "Sri Lanka": { medical: "110", pediatric: "110", description: "Emergency Services" },
  Sudan: { medical: "999", pediatric: "999", description: "خدمات الطوارئ" },
  Suriname: { medical: "115", pediatric: "115", description: "Emergency Services" },
  Sweden: { medical: "112", pediatric: "112", description: "Akutsjukvård" },
  Switzerland: { medical: "144", pediatric: "112", description: "Services d'urgence / Notdienst" },
  Syria: { medical: "110", pediatric: "110", description: "خدمات الطوارئ" },
  Taiwan: { medical: "119", pediatric: "119", description: "緊急服務" },
  Tajikistan: { medical: "103", pediatric: "103", description: "Хидматҳои фавриявӣ" },
  Tanzania: { medical: "112", pediatric: "112", description: "Emergency Services" },
  Thailand: { medical: "1669", pediatric: "1669", description: "บริการฉุกเฉิน" },
  "Timor-Leste": { medical: "112", pediatric: "112", description: "Servisu Emerjénsia" },
  Togo: { medical: "8200", pediatric: "8200", description: "Services d'urgence" },
  Tonga: { medical: "911", pediatric: "911", description: "Emergency Services" },
  "Trinidad and Tobago": { medical: "990", pediatric: "990", description: "Emergency Services" },
  Tunisia: { medical: "190", pediatric: "190", description: "خدمات الطوارئ" },
  Turkey: { medical: "112", pediatric: "112", description: "Acil Servisler" },
  Turkmenistan: { medical: "103", pediatric: "103", description: "Gyssagly kömek gullugy" },
  Tuvalu: { medical: "911", pediatric: "911", description: "Emergency Services" },
  Uganda: { medical: "911", pediatric: "911", description: "Emergency Services" },
  Ukraine: { medical: "103", pediatric: "103", description: "Служба екстреного реагування" },
  "United Arab Emirates": { medical: "998", pediatric: "999", description: "خدمات الطوارئ" },
  "United Kingdom": { medical: "999", pediatric: "111 (NHS)", description: "NHS Emergency Services" },
  "United States": {
    medical: "911",
    pediatric: "(555) 123-KIDS",
    description: "24/7 Emergency Services",
  },
  Uruguay: { medical: "911", pediatric: "911", description: "Servicios de Emergencia" },
  Uzbekistan: { medical: "103", pediatric: "103", description: "Shoshilinch yordam xizmati" },
  Vanuatu: { medical: "112", pediatric: "112", description: "Emergency Services" },
  "Vatican City": { medical: "112", pediatric: "112", description: "Servizi di emergenza" },
  Venezuela: { medical: "171", pediatric: "171", description: "Servicios de Emergencia" },
  Vietnam: { medical: "115", pediatric: "115", description: "Dịch vụ cấp cứu" },
  Yemen: { medical: "191", pediatric: "191", description: "خدمات الطوارئ" },
  Zambia: { medical: "991", pediatric: "991", description: "Emergency Services" },
  Zimbabwe: { medical: "994", pediatric: "994", description: "Emergency Services" },
}

export function GlobalEmergencyContacts() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<string>("")

  const contacts = selectedCountry && emergencyContacts[selectedCountry] ? emergencyContacts[selectedCountry] : null

  return (
    <div className="space-y-6">
      {/* Main Disclaimer */}
      <Alert className="border-medical-warning/50 bg-medical-warning/10">
        <AlertTriangle className="h-5 w-5 text-medical-warning" />
        <AlertDescription className="text-base">
          <strong className="text-medical-warning">Medical Disclaimer:</strong> This AI tool is for educational and
          screening purposes only. It should NOT replace professional medical diagnosis, consultation, or treatment.
          Always consult with qualified healthcare providers for medical advice.
        </AlertDescription>
      </Alert>

      {/* Global Emergency Contacts Section */}
      <Card className="p-6 border-medical-error/30 bg-medical-error/5">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-medical-error/20">
              <Globe className="h-8 w-8 text-medical-error" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-medical-error mb-2">Global Emergency Contacts</h2>
          <p className="text-muted-foreground mb-4">If you suspect pneumonia, seek immediate medical attention</p>

          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="border-medical-error/30 text-medical-error hover:bg-medical-error/10"
          >
            <Phone className="h-4 w-4 mr-2" />
            View Emergency Contacts
            <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </Button>
        </div>

        {isExpanded && (
          <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
            <div className="max-w-md mx-auto">
              <label className="block text-sm font-medium text-foreground mb-2">Select your country:</label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose your country..." />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(emergencyContacts)
                    .sort()
                    .map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            {contacts && (
              <div className="grid md:grid-cols-2 gap-4 animate-in fade-in duration-500">
                <Card className="p-4 border-medical-error/20 bg-background/50">
                  <div className="text-center">
                    <Heart className="h-6 w-6 text-medical-error mx-auto mb-2" />
                    <h3 className="font-semibold text-medical-error">Medical Emergency</h3>
                    <p className="text-2xl font-bold my-2">{contacts.medical}</p>
                    <p className="text-sm text-muted-foreground">Medical emergencies</p>
                  </div>
                </Card>

                <Card className="p-4 border-medical-error/20 bg-background/50">
                  <div className="text-center">
                    <Clock className="h-6 w-6 text-medical-error mx-auto mb-2" />
                    <h3 className="font-semibold text-medical-error">Pediatric Emergency</h3>
                    <p className="text-lg font-bold my-2">{contacts.pediatric}</p>
                    <p className="text-sm text-muted-foreground">Children's Health Services</p>
                  </div>
                </Card>
              </div>
            )}

            {contacts && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground">{contacts.description}</p>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}
