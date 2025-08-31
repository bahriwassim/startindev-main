import { Video, Users, Settings, Mic, Monitor, Camera, Radio, Eye, Heart, MessageCircle, Share2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function LiveStreamingStudio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Radio className="h-8 w-8 text-red-500" />
              <div>
                <h1 className="text-xl font-bold">LiveStream Studio</h1>
                <p className="text-xs text-gray-400">Broadcasting professional</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="destructive" className="animate-pulse">🔴 LIVE</Badge>
              <Button variant="destructive" size="sm">Terminer le live</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-red-900/20 border-red-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">Spectateurs</CardTitle>
                <Eye className="h-4 w-4 text-red-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">2,847</div>
                <p className="text-xs text-gray-400">+127 depuis 5 min</p>
              </CardContent>
            </Card>

            <Card className="bg-pink-900/20 border-pink-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">Interactions</CardTitle>
                <Heart className="h-4 w-4 text-pink-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">15.2K</div>
                <p className="text-xs text-gray-400">Likes et réactions</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/20 border-blue-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">Messages</CardTitle>
                <MessageCircle className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">1,234</div>
                <p className="text-xs text-gray-400">Chat actif</p>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">Qualité</CardTitle>
                <Zap className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">1080p</div>
                <p className="text-xs text-gray-400">60 FPS stable</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Interface */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - Live Preview & Controls */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">Prévisualisation Live</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="destructive">🔴 EN DIRECT</Badge>
                      <span className="text-sm text-gray-400">1:23:45</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-black rounded-lg relative mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <Video className="h-16 w-16 mx-auto mb-4" />
                        <p>Flux vidéo principal</p>
                        <p className="text-sm">1920x1080 @ 60fps</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600">LIVE</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">Scène 1</Badge>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        <Radio className="h-4 w-4 mr-2" />
                        Commencer le live
                      </Button>
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-2" />
                        Changer de caméra
                      </Button>
                      <Button variant="outline" size="sm">
                        <Monitor className="h-4 w-4 mr-2" />
                        Partager écran
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Mic className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Sources et Scènes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="scenes" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-800">
                      <TabsTrigger value="scenes">Scènes</TabsTrigger>
                      <TabsTrigger value="sources">Sources</TabsTrigger>
                    </TabsList>

                    <TabsContent value="scenes" className="mt-4 space-y-2">
                      {[
                        { name: "Scène principale", active: true },
                        { name: "Interview", active: false },
                        { name: "Présentation", active: false },
                        { name: "Pause/Intermission", active: false },
                      ].map((scene, i) => (
                        <div key={i} className={`p-3 rounded border cursor-pointer transition-colors ${
                          scene.active 
                            ? 'bg-blue-600/20 border-blue-600 text-blue-400' 
                            : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-800'
                        }`}>
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{scene.name}</span>
                            {scene.active && <Badge variant="secondary">Active</Badge>}
                          </div>
                        </div>
                      ))}
                      <Button className="w-full mt-4" variant="outline">
                        + Nouvelle scène
                      </Button>
                    </TabsContent>

                    <TabsContent value="sources" className="mt-4 space-y-2">
                      {[
                        { name: "Caméra principale", type: "Webcam", status: "Connectée" },
                        { name: "Microphone", type: "Audio", status: "Active" },
                        { name: "Écran partagé", type: "Capture", status: "Prêt" },
                        { name: "Logo overlay", type: "Image", status: "Visible" },
                      ].map((source, i) => (
                        <div key={i} className="p-3 rounded border bg-gray-800/50 border-gray-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-200">{source.name}</div>
                              <div className="text-xs text-gray-400">{source.type}</div>
                            </div>
                            <Badge variant="outline" className="text-green-400 border-green-400">
                              {source.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                      <Button className="w-full mt-4" variant="outline">
                        + Ajouter source
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Chat & Analytics */}
            <div className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Chat en direct</CardTitle>
                  <CardDescription className="text-gray-400">Messages des spectateurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {[
                      { user: "Marie_2024", message: "Super événement ! 🎉", time: "à l'instant" },
                      { user: "Tech_Fan", message: "La qualité vidéo est parfaite", time: "il y a 1m" },
                      { user: "Jean_Martin", message: "Merci pour ce live", time: "il y a 2m" },
                      { user: "Event_Lover", message: "Quand est le prochain ? 😍", time: "il y a 3m" },
                      { user: "Sophie_L", message: "Excellent contenu comme toujours", time: "il y a 4m" },
                      { user: "Alex_Pro", message: "❤️❤️❤️", time: "il y a 5m" },
                    ].map((chat, i) => (
                      <div key={i} className="p-2 rounded bg-gray-800/30">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-400">{chat.user}</span>
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-1">{chat.message}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <input 
                      className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white text-sm"
                      placeholder="Répondre au chat..."
                    />
                    <Button size="sm">Envoyer</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Analytics temps réel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Spectateurs par région</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">France</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={78} className="w-16 h-2" />
                            <span className="text-xs text-gray-400">78%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">Canada</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={12} className="w-16 h-2" />
                            <span className="text-xs text-gray-400">12%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">Autres</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={10} className="w-16 h-2" />
                            <span className="text-xs text-gray-400">10%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Appareils utilisés</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">Mobile</span>
                          <span className="text-xs text-gray-400">65%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">Desktop</span>
                          <span className="text-xs text-gray-400">28%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">Tablette</span>
                          <span className="text-xs text-gray-400">7%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Plateformes de diffusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded border border-red-600 bg-red-600/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                          <span className="text-xs font-bold text-white">YT</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">YouTube Live</div>
                          <div className="text-xs text-red-400">2,134 spectateurs</div>
                        </div>
                      </div>
                      <Badge className="bg-red-600 text-white">LIVE</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded border border-blue-600 bg-blue-600/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-xs font-bold text-white">FB</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Facebook Live</div>
                          <div className="text-xs text-blue-400">687 spectateurs</div>
                        </div>
                      </div>
                      <Badge className="bg-blue-600 text-white">LIVE</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded border border-gray-600 bg-gray-600/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                          <span className="text-xs font-bold text-white">TW</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Twitch</div>
                          <div className="text-xs text-gray-400">Prêt à diffuser</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Démarrer</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}