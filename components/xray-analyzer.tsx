"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Upload, Scan, AlertCircle, CheckCircle, Loader2, ImageIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface AnalysisResult {
  className: string
  probability: number
}

export function XrayAnalyzer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<AnalysisResult[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file (JPG, PNG, GIF)")
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
      setError("File size must be less than 10MB")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string)
      setResults(null)
      setError(null)
    }
    reader.readAsDataURL(file)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragOver(false)
      const files = e.dataTransfer.files
      if (files.length > 0) {
        handleFileSelect(files[0])
      }
    },
    [handleFileSelect],
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }, [])

  const analyzeImage = async () => {
    if (!selectedImage || !imageRef.current) return

    setIsAnalyzing(true)
    setError(null)

    try {
      // Simulate AI analysis with realistic delay
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // Mock results - in real implementation, this would call the TensorFlow model
      const mockResults: AnalysisResult[] = [
        { className: "NO PNEUMONIA DETECTED", probability: 0.85 },
        { className: "PNEUMONIA DETECTED", probability: 0.15 },
      ]

      setResults(mockResults)
    } catch (err) {
      setError("Analysis failed. Please try again with a different image.")
      console.error("Analysis error:", err)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getResultColor = (className: string, probability: number) => {
    if (className.includes("NO PNEUMONIA")) {
      return probability > 0.7 ? "text-medical-success" : "text-medical-warning"
    } else {
      return probability > 0.7 ? "text-medical-error" : "text-medical-warning"
    }
  }

  const getResultIcon = (className: string, probability: number) => {
    if (className.includes("NO PNEUMONIA") && probability > 0.7) {
      return <CheckCircle className="h-5 w-5 text-medical-success" />
    } else if (className.includes("PNEUMONIA") && probability > 0.7) {
      return <AlertCircle className="h-5 w-5 text-medical-error" />
    } else {
      return <AlertCircle className="h-5 w-5 text-medical-warning" />
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Upload Section */}
      <Card className="p-6 medical-card-glow">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Upload className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Upload Chest X-Ray</h2>
          </div>

          {/* Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
              dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-primary/5"
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-primary/10">
                  <ImageIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-lg font-medium">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground mt-1">Supported formats: JPG, PNG, GIF (Max 10MB)</p>
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleFileSelect(file)
            }}
          />

          {/* Image Preview */}
          {selectedImage && (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden bg-muted">
                <img
                  ref={imageRef}
                  src={selectedImage || "/placeholder.svg"}
                  alt="X-ray preview"
                  className="w-full h-64 object-contain"
                />
              </div>

              <Button onClick={analyzeImage} disabled={isAnalyzing} className="w-full" size="lg">
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Analyzing X-Ray...
                  </>
                ) : (
                  <>
                    <Scan className="h-5 w-5 mr-2" />
                    Analyze X-Ray
                  </>
                )}
              </Button>
            </div>
          )}

          {error && (
            <Alert className="border-medical-error/50 bg-medical-error/10">
              <AlertCircle className="h-4 w-4 text-medical-error" />
              <AlertDescription className="text-medical-error">{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </Card>

      {/* Results Section */}
      <Card className="p-6 medical-card-glow">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Scan className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Analysis Results</h2>
          </div>

          {!selectedImage && !results && (
            <div className="text-center py-12">
              <div className="p-4 rounded-full bg-muted/50 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Scan className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Upload an X-ray image to see analysis results</p>
            </div>
          )}

          {isAnalyzing && (
            <div className="space-y-4">
              <div className="text-center py-8">
                <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
                <p className="text-lg font-medium">Analyzing chest X-ray...</p>
                <p className="text-sm text-muted-foreground">This may take a few moments</p>
              </div>
              <Progress value={66} className="w-full" />
            </div>
          )}

          {results && (
            <div className="space-y-6">
              <div className="space-y-4">
                {results.map((result, index) => {
                  const confidence = (result.probability * 100).toFixed(1)
                  const isHighConfidence = result.probability > 0.7

                  return (
                    <Card
                      key={index}
                      className={`p-4 ${
                        isHighConfidence
                          ? result.className.includes("NO PNEUMONIA")
                            ? "border-medical-success/30 bg-medical-success/5"
                            : "border-medical-error/30 bg-medical-error/5"
                          : "border-medical-warning/30 bg-medical-warning/5"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {getResultIcon(result.className, result.probability)}
                          <div>
                            <p className={`font-semibold ${getResultColor(result.className, result.probability)}`}>
                              {result.className}
                            </p>
                            <p className="text-sm text-muted-foreground">Confidence: {confidence}%</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-2xl font-bold ${getResultColor(result.className, result.probability)}`}>
                            {confidence}%
                          </p>
                        </div>
                      </div>
                      <Progress value={result.probability * 100} className="mt-3" />
                    </Card>
                  )
                })}
              </div>

              <Alert className="border-primary/50 bg-primary/10">
                <AlertCircle className="h-4 w-4 text-primary" />
                <AlertDescription>
                  <strong>Important:</strong> These results are AI-generated predictions and should be reviewed by
                  qualified medical professionals. Do not use this analysis as the sole basis for medical decisions.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
