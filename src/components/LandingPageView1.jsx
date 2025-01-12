
import React from 'react';
import { useEffect, useState } from "react";
import { Edit2, Loader2 } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";


const LandingPageView1 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  

  useEffect(() => {
    const fetchLandingPageData = async () => {

      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#0bf9b2",
          "gradientEnd": "#f1ce09"
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          }
        ],
        "songSales": [
          {
            "songId": "song1",
            "title": "Melody of Dreams",
            "priceType": "Variable",
            "description": "An enchanting melody inspired by the beauty of nature.",
            "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584"
          },
          {
            "songId": "song2",
            "title": "Echoes of the Heart",
            "priceType": "Set",
            "price": 100,
            "description": "A heartfelt ballad that resonates deeply with listeners.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg"
          },
          {
            "songId": "song3",
            "title": "Rhythm of the Night",
            "priceType": "Set",
            "price": 200,
            "description": "A vibrant and energetic track perfect for dancing.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg"
          },
          {
            "songId": "song4",
            "title": "Journey Within",
            "priceType": "Set",
            "price": 50,
            "description": "A soulful piece reflecting the artist's inner journey.",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          }
        ],
        "musicVideos": [
          {
            "videoId": "vid1",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg"
          },
        ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3"
        },
        "supportPage": {
          "title": "Show Your Love"
        },
        "musicPlatformLinks": [
          {
            "musicPlatform": "JioSaavan",
            "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo"
          },
          {
            "musicPlatform": "Spotify",
            "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          }
        ]
      }

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);

    };
    fetchLandingPageData();
  }, [username]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };


  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Landing page not found</div>
        </CardContent>
      </Card>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;



 return (
  <div
    className="min-h-screen"
    style={{
      background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`,
    }}
  >
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-white/90 via-white/90 to-gray-100/90 shadow-lg backdrop-blur-lg">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Branding */}
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
        A
      </div>
      <h2 className="font-bold text-lg text-gray-800">@{username}</h2>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex space-x-6">
      {[
        { value: "performances", label: "Performances" },
        { value: "videos", label: "Videos" },
        { value: "songsSale", label: "Songs Sale" },
        { value: "merchandise", label: "Merchandise" },
        { value: "fanMessages", label: "Messages" },
        { value: "support", label: "Support" },
      ].map((tab) => (
        <button
          key={tab.value}
          onClick={() => scrollToSection(tab.value)}
          className="text-gray-700 hover:text-blue-600 font-medium transition relative group"
        >
          {tab.label}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
        </button>
      ))}
    </div>

    {/* Mobile Menu */}
    <div className="md:hidden">
      <button
        className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </div>

</nav>

<header
  className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url(${artistPage.heroImage || "/default-hero.jpg"})`,
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
  <div className="z-10 text-center px-6">
    <h1 className="text-white text-5xl lg:text-7xl font-extrabold drop-shadow-lg">
      {artistPage.artistName}
    </h1>
    <p className="text-gray-300 mt-4 text-lg lg:text-xl">
      Discover the artistry of {artistPage.artistName}.
    </p>
  </div>
</header>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
    <aside className="lg:col-span-4 lg:sticky top-24 space-y-6">
  {/* Profile Card */}
  <div className="bg-white rounded-lg shadow-xl p-6">
    <div className="flex flex-col items-center text-center">
      <Avatar className="w-32 h-32 border-4 border-gray-200 rounded-full">
        <AvatarImage src={profileImage || "/default-avatar.jpg"} alt="Profile" />
        <AvatarFallback>{username}</AvatarFallback>
      </Avatar>
      <h2 className="mt-4 text-2xl font-bold text-gray-800">{artistPage.artistName}</h2>
      <Badge variant="secondary" className="mt-2 text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        {artistPage.stageTitles}
      </Badge>
    </div>
    <div className="mt-6 border-t pt-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Connect with me:</h3>
      <div className="space-y-4">
        {musicPlatformLinks.map((link) => (
          <button
            key={link.musicPlatform + link.url}
            onClick={() => window.open(link.url, "_blank")}
            className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-100 to-indigo-50 border border-indigo-200 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <img
              src={link.icon}
              alt={link.musicPlatform}
              className="w-10 h-10 rounded-full shadow-lg"
            />
            <span className="text-gray-800 font-medium">{link.musicPlatform}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
</aside>


      {/* Main Content Area */}
      <main className="lg:col-span-8 space-y-12">
      <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <h3 className="text-xl font-bold mb-4 text-gray-800 hover:text-indigo-600 transition-colors duration-300">
      About
    </h3>
    <p className="text-gray-600">
      {artistPage.artistBio}
    </p>
  </div>

       {/* Performances */}
<section id="performances" className="space-y-8">
  <h3 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-4 border-blue-600 pb-2">
    Performances
  </h3>
  {performances.map((perf) => (
    <div
      key={perf.performanceId}
      className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative group"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
      
      <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
        {perf.eventTitle}
      </h4>
      <p className="text-sm text-gray-600 mt-3 leading-relaxed">
        {perf.description}
      </p>
      <p className="text-sm text-gray-500 mt-2">Duration: {perf.durationMinutes} mins</p>
      <button className="mt-6 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
        Book Now
      </button>
    </div>
  ))}
</section>

      </main>
    </div>
  </div>
);
}
export default LandingPageView1;