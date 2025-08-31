import { Play, Pause, Volume2, Maximize, SkipForward, SkipBack, Heart, Download, Share2, Headphones, TrendingUp, Star, Clock, Users, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function StreamingPlatform() {
  const featuredContent = [
    {
      id: 1,
      title: "Concert Live: Electric Dreams Festival",
      artist: "Various Artists",
      type: "Live Concert",
      duration: "2h 15min",
      viewers: "24.5K",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
      tags: ["Electronic", "Live", "Festival"],
      premium: true,
      rating: 4.9
    },
    {
      id: 2,
      title: "Behind the Music: Urban Legends",
      artist: "Documentary Series",
      type: "Documentary",
      duration: "45min",
      viewers: "18.2K",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
      tags: ["Hip-Hop", "Documentary", "Culture"],
      premium: false,
      rating: 4.7
    },
    {
      id: 3,
      title: "Jazz Night at Blue Note",
      artist: "Miles Davis Tribute",
      type: "Live Performance",
      duration: "1h 30min",
      viewers: "12.8K",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600",
      tags: ["Jazz", "Tribute", "Live"],
      premium: true,
      rating: 4.8
    }
  ];

  const trendingTracks = [
    {
      title: "Neon Nights",
      artist: "Synthwave Collective",
      duration: "3:42",
      plays: "2.1M",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100",
      isPlaying: true
    },
    {
      title: "Urban Dreams",
      artist: "City Beats",
      duration: "4:15",
      plays: "1.8M",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100",
      isPlaying: false
    },
    {
      title: "Midnight Jazz",
      artist: "Soul Sessions",
      duration: "5:23",
      plays: "1.5M",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=100",
      isPlaying: false
    },
    {
      title: "Digital Harmony",
      artist: "Future Sound",
      duration: "3:58",
      plays: "1.3M",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100",
      isPlaying: false
    }
  ];

  const playlists = [
    {
      name: "Chill Electronica",
      description: "Perfect for relaxing and coding",
      tracks: 42,
      duration: "2h 48min",
      followers: "15.2K",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300"
    },
    {
      name: "Live Concert Collection",
      description: "Best live performances ever recorded",
      tracks: 67,
      duration: "5h 23min",
      followers: "28.9K",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"
    },
    {
      name: "Jazz & Blues Masters",
      description: "Timeless classics from the legends",
      tracks: 89,
      duration: "6h 12min",
      followers: "22.1K",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300"
    }
  ];

  const liveStreams = [
    {
      title: "Studio Session Live",
      artist: "Indie Rock Band",
      viewers: 3247,
      status: "live",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200"
    },
    {
      title: "DJ Mix Session",
      artist: "Electronic Artist",
      viewers: 1892,
      status: "live",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">StreamSound Pro</h1>
              <Badge className="bg-accent text-black">Entertainment Universe</Badge>
            </div>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={18} />
                <Input 
                  placeholder="Rechercher musique, artistes..." 
                  className="pl-10 w-80 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Heart size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Download size={20} />
              </Button>
              <Button className="bg-white text-primary hover:bg-gray-100">
                Premium
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Featured */}
            <section className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200" 
                alt="Featured content"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <Badge className="mb-4 bg-accent text-black">À la une</Badge>
                  <h2 className="text-4xl font-bold mb-2">Electric Dreams Festival</h2>
                  <p className="text-xl mb-4 opacity-90">Concert live exclusif • 24.5K spectateurs</p>
                  <div className="flex items-center space-x-4">
                    <Button size="lg" className="bg-accent text-black hover:bg-accent/90">
                      <Play className="mr-2" size={20} />
                      Regarder maintenant
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                      <Heart className="mr-2" size={20} />
                      Ajouter aux favoris
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Categories */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">Découvrir</h3>
                <div className="flex items-center space-x-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les genres</SelectItem>
                      <SelectItem value="electronic">Electronic</SelectItem>
                      <SelectItem value="jazz">Jazz</SelectItem>
                      <SelectItem value="rock">Rock</SelectItem>
                      <SelectItem value="hip-hop">Hip-Hop</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Filter size={16} className="mr-2" />
                    Filtres
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {featuredContent.map((content) => (
                  <Card key={content.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={content.image} 
                        alt={content.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button className="rounded-full w-16 h-16 bg-accent text-black hover:bg-accent/90">
                          <Play size={24} />
                        </Button>
                      </div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        {content.premium && <Badge className="bg-accent text-black">Premium</Badge>}
                        <Badge variant="secondary">{content.type}</Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-black/70 text-white">{content.duration}</Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h4 className="font-bold text-foreground mb-1 line-clamp-2">{content.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{content.artist}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {content.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Users size={14} />
                          <span>{content.viewers}</span>
                          <Star className="text-yellow-500 fill-current ml-2" size={14} />
                          <span>{content.rating}</span>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Share2 size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Trending */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <TrendingUp className="mr-2 text-accent" size={24} />
                Tendances audio
              </h3>
              
              <div className="space-y-4">
                {trendingTracks.map((track, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-muted-foreground w-8">
                        {index + 1}
                      </div>
                      <img 
                        src={track.image} 
                        alt={track.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{track.title}</h4>
                        <p className="text-sm text-muted-foreground">{track.artist}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {track.plays} écoutes
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {track.duration}
                      </div>
                      <Button size="sm" variant={track.isPlaying ? "default" : "ghost"}>
                        {track.isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Heart size={16} />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Playlists */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-6">Playlists populaires</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {playlists.map((playlist, index) => (
                  <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={playlist.image} 
                        alt={playlist.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button className="rounded-full w-12 h-12">
                          <Play size={20} />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-foreground mb-1">{playlist.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{playlist.description}</p>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{playlist.tracks} titres • {playlist.duration}</span>
                        <span>{playlist.followers} followers</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Player */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">En cours de lecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200" 
                    alt="Now playing"
                    className="w-full aspect-square object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-bold text-foreground">Neon Nights</h4>
                  <p className="text-sm text-muted-foreground">Synthwave Collective</p>
                </div>
                
                <div className="space-y-2">
                  <Progress value={35} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1:18</span>
                    <span>3:42</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <Button size="sm" variant="ghost">
                    <SkipBack size={16} />
                  </Button>
                  <Button size="sm">
                    <Pause size={16} />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <SkipForward size={16} />
                  </Button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Volume2 size={16} className="text-muted-foreground" />
                  <Slider defaultValue={[75]} max={100} step={1} className="flex-1" />
                </div>
              </CardContent>
            </Card>

            {/* Live Streams */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  Live maintenant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {liveStreams.map((stream, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50 cursor-pointer">
                    <img 
                      src={stream.image} 
                      alt={stream.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h5 className="font-medium text-sm">{stream.title}</h5>
                      <p className="text-xs text-muted-foreground">{stream.artist}</p>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Users size={10} />
                        <span>{stream.viewers.toLocaleString()}</span>
                      </div>
                    </div>
                    <Badge variant="destructive" className="text-xs">Live</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Queue */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">File d'attente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm">
                      <div className="text-muted-foreground">{i}</div>
                      <div className="flex-1">
                        <div className="font-medium">Titre {i}</div>
                        <div className="text-muted-foreground text-xs">Artiste {i}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">3:42</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  Voir toute la queue
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Player Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 z-40">
        <div className="max-w-7xl mx-auto flex items-center space-x-4">
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60" 
            alt="Current track"
            className="w-12 h-12 rounded object-cover"
          />
          <div className="flex-1">
            <h4 className="font-medium text-sm">Neon Nights</h4>
            <p className="text-xs text-muted-foreground">Synthwave Collective</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="sm" variant="ghost">
              <Heart size={16} />
            </Button>
            <Button size="sm" variant="ghost">
              <SkipBack size={16} />
            </Button>
            <Button size="sm">
              <Pause size={16} />
            </Button>
            <Button size="sm" variant="ghost">
              <SkipForward size={16} />
            </Button>
          </div>
          <div className="flex items-center space-x-2 w-80">
            <span className="text-xs text-muted-foreground">1:18</span>
            <Progress value={35} className="flex-1 h-1" />
            <span className="text-xs text-muted-foreground">3:42</span>
          </div>
          <div className="flex items-center space-x-2">
            <Volume2 size={16} className="text-muted-foreground" />
            <Slider defaultValue={[75]} max={100} step={1} className="w-20" />
            <Button size="sm" variant="ghost">
              <Maximize size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom padding to prevent overlap with fixed player */}
      <div className="h-20"></div>
    </div>
  );
}