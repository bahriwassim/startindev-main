import { Camera, Video, Mic, Palette, Layers, Download, Upload, Share2, Play, Pause, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function CreativeHub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Palette className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold">Creative Hub</h1>
                <p className="text-xs text-muted-foreground">Studio de création multimédia</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="default" className="bg-gradient-to-r from-blue-500 to-purple-600">Studio Pro</Badge>
              <Button><Upload className="h-4 w-4 mr-2" />Importer</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Projets Actifs</CardTitle>
                <Layers className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs opacity-90">5 en production</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Médias Créés</CardTitle>
                <Camera className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">247</div>
                <p className="text-xs opacity-90">Ce mois-ci</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Temps de Rendu</CardTitle>
                <RotateCw className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.5h</div>
                <p className="text-xs opacity-90">Économisées cette semaine</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Stockage Utilisé</CardTitle>
                <Download className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">76%</div>
                <p className="text-xs opacity-90">2.3 TB / 3 TB</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Tabs */}
          <Tabs defaultValue="projects" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="projects">Projets</TabsTrigger>
              <TabsTrigger value="video">Vidéo</TabsTrigger>
              <TabsTrigger value="photo">Photo</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
              <TabsTrigger value="library">Bibliothèque</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Mes Projets</h2>
                <div className="space-x-2">
                  <Button variant="outline">Nouveau modèle</Button>
                  <Button>Nouveau projet</Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Aftermovie Gala 2024",
                    type: "Vidéo",
                    status: "Montage en cours",
                    progress: 65,
                    duration: "3:45",
                    updated: "Il y a 2h"
                  },
                  {
                    title: "Photos Concert Jazz",
                    type: "Photo",
                    status: "Retouche terminée",
                    progress: 100,
                    duration: "24 photos",
                    updated: "Hier"
                  },
                  {
                    title: "Podcast Interview",
                    type: "Audio",
                    status: "Mixage",
                    progress: 45,
                    duration: "45:20",
                    updated: "Il y a 1h"
                  },
                  {
                    title: "Teaser Événement",
                    type: "Vidéo",
                    status: "Pré-production",
                    progress: 25,
                    duration: "0:30",
                    updated: "Il y a 3h"
                  }
                ].map((project, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-32 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {project.type === 'Vidéo' && <Video className="h-12 w-12 text-blue-500" />}
                        {project.type === 'Photo' && <Camera className="h-12 w-12 text-purple-500" />}
                        {project.type === 'Audio' && <Mic className="h-12 w-12 text-pink-500" />}
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-white/80">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{project.title}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Statut:</span>
                          <span className="font-medium">{project.status}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Durée:</span>
                          <span className="font-medium">{project.duration}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span>Progression</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Modifié {project.updated}
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Play className="h-3 w-3 mr-1" />
                          Ouvrir
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="video" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Studio Vidéo</h2>
                <div className="space-x-2">
                  <Button variant="outline">Importer</Button>
                  <Button><Video className="h-4 w-4 mr-2" />Nouveau montage</Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Timeline de montage</CardTitle>
                    <CardDescription>Projet: Aftermovie Gala 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded p-4 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Button variant="outline" size="sm">
                          <Play className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Pause className="h-3 w-3" />
                        </Button>
                        <div className="flex-1 bg-muted rounded-full h-2 relative">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '35%' }}></div>
                        </div>
                        <span className="text-xs">1:20 / 3:45</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-blue-100 p-2 rounded text-sm">
                        <div className="flex items-center justify-between">
                          <span>🎬 Séquence d'ouverture</span>
                          <span>0:00 - 0:30</span>
                        </div>
                      </div>
                      <div className="bg-green-100 p-2 rounded text-sm">
                        <div className="flex items-center justify-between">
                          <span>🎵 Interview principale</span>
                          <span>0:30 - 2:15</span>
                        </div>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded text-sm">
                        <div className="flex items-center justify-between">
                          <span>✨ Highlights</span>
                          <span>2:15 - 3:45</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Outils de montage</CardTitle>
                    <CardDescription>Effets et transitions disponibles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-16 flex flex-col">
                        <Layers className="h-5 w-5 mb-1" />
                        <span className="text-xs">Transitions</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col">
                        <Palette className="h-5 w-5 mb-1" />
                        <span className="text-xs">Filtres</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col">
                        <Mic className="h-5 w-5 mb-1" />
                        <span className="text-xs">Audio</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col">
                        <Download className="h-5 w-5 mb-1" />
                        <span className="text-xs">Export</span>
                      </Button>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Qualité d'export</span>
                        <select className="border rounded px-2 py-1">
                          <option>4K (2160p)</option>
                          <option>Full HD (1080p)</option>
                          <option>HD (720p)</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Format</span>
                        <select className="border rounded px-2 py-1">
                          <option>MP4</option>
                          <option>MOV</option>
                          <option>AVI</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="photo" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Studio Photo</h2>
                <div className="space-x-2">
                  <Button variant="outline">Lot de photos</Button>
                  <Button><Camera className="h-4 w-4 mr-2" />Retouche rapide</Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6">
                {[...Array(24)].map((_, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="absolute top-1 right-1">
                        <Button variant="secondary" size="sm" className="h-6 w-6 p-0">
                          ✓
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-2">
                      <div className="text-xs text-center text-muted-foreground">
                        IMG_{String(i + 1).padStart(4, '0')}.jpg
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Outils de retouche</CardTitle>
                  <CardDescription>Édition rapide et avancée</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Ajustements de base</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Luminosité</span>
                          <div className="flex items-center space-x-2">
                            <input type="range" className="w-20" defaultValue="50" />
                            <span className="text-xs w-8">+10</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Contraste</span>
                          <div className="flex items-center space-x-2">
                            <input type="range" className="w-20" defaultValue="50" />
                            <span className="text-xs w-8">+5</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Saturation</span>
                          <div className="flex items-center space-x-2">
                            <input type="range" className="w-20" defaultValue="50" />
                            <span className="text-xs w-8">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Filtres prédéfinis</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">Vintage</Button>
                        <Button variant="outline" size="sm">N&B</Button>
                        <Button variant="outline" size="sm">Warm</Button>
                        <Button variant="outline" size="sm">Cool</Button>
                        <Button variant="outline" size="sm">Dramatic</Button>
                        <Button variant="outline" size="sm">Soft</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audio" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Studio Audio</h2>
                <div className="space-x-2">
                  <Button variant="outline">Enregistrer</Button>
                  <Button><Mic className="h-4 w-4 mr-2" />Nouveau projet</Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Pistes audio</CardTitle>
                    <CardDescription>Podcast Interview - Episode 1</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-muted p-3 rounded">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">🎤 Voix principale</span>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Play className="h-3 w-3" />
                            </Button>
                            <span className="text-xs">45:20</span>
                          </div>
                        </div>
                        <div className="bg-green-200 h-8 rounded flex items-center px-2">
                          <div className="w-full bg-green-300 h-4 rounded"></div>
                        </div>
                      </div>

                      <div className="bg-muted p-3 rounded">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">🎵 Musique de fond</span>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Play className="h-3 w-3" />
                            </Button>
                            <span className="text-xs">45:20</span>
                          </div>
                        </div>
                        <div className="bg-blue-200 h-6 rounded flex items-center px-2">
                          <div className="w-3/4 bg-blue-300 h-3 rounded"></div>
                        </div>
                      </div>

                      <div className="bg-muted p-3 rounded">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">🔊 Effets sonores</span>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Play className="h-3 w-3" />
                            </Button>
                            <span className="text-xs">45:20</span>
                          </div>
                        </div>
                        <div className="bg-yellow-200 h-4 rounded flex items-center px-2">
                          <div className="w-1/2 bg-yellow-300 h-2 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mixage et effets</CardTitle>
                    <CardDescription>Outils de post-production</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Égaliseur</h4>
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="flex flex-col items-center">
                              <input 
                                type="range" 
                                className="w-6 h-16" 
                                style={{ writingMode: 'bt-lr' as any, appearance: 'slider-vertical' as any }}
                                defaultValue="50"
                              />
                              <span className="text-xs mt-1">{i}K</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Effets</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">Reverb</Button>
                          <Button variant="outline" size="sm">Echo</Button>
                          <Button variant="outline" size="sm">Compresseur</Button>
                          <Button variant="outline" size="sm">Noise Gate</Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Export</h4>
                        <div className="space-y-2">
                          <select className="w-full border rounded px-3 py-2">
                            <option>MP3 - 320 kbps</option>
                            <option>WAV - 44.1 kHz</option>
                            <option>FLAC - Lossless</option>
                          </select>
                          <Button className="w-full">Exporter l'audio</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="library" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Bibliothèque Créative</h2>
                <div className="space-x-2">
                  <Button variant="outline">Synchroniser cloud</Button>
                  <Button>Organiser</Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Video className="h-5 w-5 mr-2" />
                      Vidéos
                    </CardTitle>
                    <CardDescription>156 fichiers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">1.2 TB</div>
                    <Progress value={75} className="mb-2" />
                    <div className="text-sm text-muted-foreground">75% de l'espace</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Camera className="h-5 w-5 mr-2" />
                      Photos
                    </CardTitle>
                    <CardDescription>2,847 fichiers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">456 GB</div>
                    <Progress value={35} className="mb-2" />
                    <div className="text-sm text-muted-foreground">35% de l'espace</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mic className="h-5 w-5 mr-2" />
                      Audio
                    </CardTitle>
                    <CardDescription>89 fichiers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">127 GB</div>
                    <Progress value={15} className="mb-2" />
                    <div className="text-sm text-muted-foreground">15% de l'espace</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Layers className="h-5 w-5 mr-2" />
                      Projets
                    </CardTitle>
                    <CardDescription>24 projets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">89 GB</div>
                    <Progress value={10} className="mb-2" />
                    <div className="text-sm text-muted-foreground">10% de l'espace</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Fichiers récents</CardTitle>
                  <CardDescription>Dernières créations et modifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Aftermovie_Gala_2024_v3.mp4", type: "Vidéo", size: "2.4 GB", modified: "Il y a 2h" },
                      { name: "Concert_Jazz_Highlights.mov", type: "Vidéo", size: "1.8 GB", modified: "Il y a 4h" },
                      { name: "Interview_Podcast_Edit.mp3", type: "Audio", size: "145 MB", modified: "Hier" },
                      { name: "Event_Promo_Photos_Batch.zip", type: "Archive", size: "856 MB", modified: "Il y a 2 jours" },
                      { name: "Logo_Animation_Final.mov", type: "Vidéo", size: "234 MB", modified: "Il y a 3 jours" },
                    ].map((file, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded hover:bg-muted/50">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                            {file.type === 'Vidéo' && <Video className="h-5 w-5" />}
                            {file.type === 'Audio' && <Mic className="h-5 w-5" />}
                            {file.type === 'Archive' && <Download className="h-5 w-5" />}
                          </div>
                          <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="text-sm text-muted-foreground">{file.type} • {file.size}</div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {file.modified}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}