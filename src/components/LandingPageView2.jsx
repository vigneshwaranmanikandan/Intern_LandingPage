
import React from 'react';
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Edit2, Loader2 } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const LandingPageView2 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  useEffect(() => {
    const fetchLandingPageData = async () => {
      // const response = await fetchLandingPageByUsername(username);
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
      className="min-h-screen bg-gray-50 flex flex-col items-center pt-24 px-4"
      style={{
        background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`
      }}
    >
{/* Navbar Section */}
<nav
  id="navbar"
  className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 shadow-md"
>
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo/Username */}
    <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
      @{username}
    </h2>

    {/* Tabs/Menu */}
    <div className="hidden md:flex space-x-6">
      {[
        { label: "Performances", value: "performances" },
        { label: "Videos", value: "videos" },
        { label: "Songs Sale", value: "songsSale" },
        { label: "Merchandise", value: "merchandise" },
        { label: "Messages", value: "messages" },
        { label: "Support", value: "support" },
      ].map((tab) => (
        <button
          key={tab.value}
          className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300"
          onClick={() => scrollToSection(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Mobile Menu Icon */}
    <div className="md:hidden">
      <button
        className="text-white text-2xl"
        onClick={() => toggleMobileMenu()} // Add a function to handle mobile menu toggling
      >
        ☰
      </button>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  <div id="mobile-menu" className="md:hidden hidden bg-indigo-700 px-6 py-4">
    {[
      { label: "Performances", value: "performances" },
      { label: "Videos", value: "videos" },
      { label: "Songs Sale", value: "songsSale" },
      { label: "Merchandise", value: "merchandise" },
      { label: "Messages", value: "messages" },
      { label: "Support", value: "support" },
    ].map((tab) => (
      <button
        key={tab.value}
        className="block w-full text-white text-lg font-medium py-2 hover:bg-indigo-600 rounded transition duration-300"
        onClick={() => scrollToSection(tab.value)}
      >
        {tab.label}
      </button>
    ))}
  </div>
</nav>


<div className="w-full max-w-3xl space-y-8">
  {/* Profile Section */}
  <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
    <div className="relative">
      <Avatar className="w-48 h-48 mb-4 transition-transform hover:scale-110">
        <AvatarImage
          src={profileImage || "/default-avatar.jpg"}
          alt="Profile"
          className="rounded-full"
        />
        <AvatarFallback>{username}</AvatarFallback>
      </Avatar>
    </div>

    <h2 className="text-3xl font-bold text-gray-800 transition hover:text-blue-600">
      {artistPage.artistName}
    </h2>
    <Badge variant="secondary" className="mt-2">
      {artistPage.stageTitles}
    </Badge>

    {/* Social Links Section */}
    <div className="mt-6 flex flex-wrap justify-center gap-6">
      {musicPlatformLinks.map((link) => (
        <button
          key={link.musicPlatform + link.url}
          className="group relative flex items-center px-4 py-2 border border-gray-300 rounded-full shadow-md bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all"
          onClick={() => link.url && window.open(link.url, "_blank")}
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 mr-3 group-hover:shadow-lg group-hover:bg-white transition">
            {link.icon ? (
              <img
                src={link.icon}
                alt={`${link.musicPlatform} icon`}
                className="w-10 h-10 object-cover rounded-full group-hover:scale-110 transition"
              />
            ) : null}
          </div>
          <span
            className={`text-sm font-medium ${
              link.musicPlatform ? "" : "opacity-50"
            }`}
          >
            {link.musicPlatform || " "}
          </span>
          {/* Tooltip */}
          {link.musicPlatform && (
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-12 bg-gray-800 text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition">
              Visit {link.musicPlatform}
            </span>
          )}
        </button>
      ))}
    </div>
  </div>



        {/* About Section */}
        <Card className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-gray-100 hover:from-blue-100 hover:to-white transition-all transform hover:scale-105">
  <CardHeader className="text-center space-y-4">
    <CardTitle className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
      About
    </CardTitle>
    <CardDescription className="text-gray-600 text-sm leading-relaxed">
      {artistPage.artistBio || "No bio available."}
    </CardDescription>
  </CardHeader>
</Card>

       {/* Music Videos Section */}
<div id="videos" className="space-y-6">
  <Card className="p-6 rounded-lg shadow-xl bg-gradient-to-r from-gray-50 to-gray-100">
    <CardHeader className="text-center space-y-2">
      <CardTitle className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
        Music Videos
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {musicVideos.map((video) => (
          <Card
            key={video.videoId}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105 bg-white"
            onClick={() => window.open(video.redirectURL, '_blank')}
          >
            <div className="relative group">
              {/* Thumbnail */}
              <div className="w-full" style={{ paddingTop: '56.25%' }}>
                <img
                  src={video.imageURL}
                  alt={video.title}
                  className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover rounded-t-lg group-hover:brightness-75 transition duration-300"
                />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-lg font-semibold">{video.title}</span>
              </div>

              {/* Interactive Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all"
              >
                <Edit2 className="w-5 h-5 text-white" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
</div>

        <ScrollArea>
          {/* Performances Section */}
<div id="performances" className="mt-8">
  <div className="p-8 max-w-4xl mx-auto bg-white backdrop-blur-lg rounded-lg shadow-xl">
    <h2 className="text-4xl font-extrabold text-center text-black mb-8">
      Performances
    </h2>

    {performances.map((perf) => (
      <Card
        key={perf.performanceId}
        className="mb-6 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 hover:shadow-lg bg-white"
      >
        <CardHeader className="p-6 bg-gradient-to-r from-gray-400 to-gray-200">
          <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
            {perf.eventTitle}
          </CardTitle>
          <CardDescription className="text-gray-600">
            <p>{perf.description}</p>
            <p className="mt-2">
              <strong>Duration:</strong> {perf.durationMinutes} mins
            </p>
            <p>
              <strong>Location:</strong> {perf.platform}
            </p>
            <p>
              <strong>Price:</strong> ${perf.ticketPrice}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 flex justify-end items-center bg-gray-50">
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded-md shadow-lg transition-all"
            onClick={() => alert(`Booked: ${perf.eventTitle}`)}
          >
            Book Now
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

          {/* Songs sales Section */}
          <div id="songsSale" className="py-8">
  <div className="p-6 max-w-5xl mx-auto bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-opacity-80 backdrop-blur-xl rounded-3xl shadow-2xl mb-10">
    <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
      🎵 Songs for Sale
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {songSales.map((song) => (
        <div
          key={song.songId}
          className="bg-white bg-opacity-90 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transform transition duration-300 hover:scale-105"
        >
          {/* Image Section */}
          <div className="relative h-56">
            <img
              src={song.imageURL}
              alt={song.title}
              className="object-cover w-full h-full rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-sm px-4 py-2 bg-black bg-opacity-50 rounded-full">
                {song.title}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {song.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {song.description}
              </p>
              <p className="text-lg font-medium text-gray-800">
                Pricing: {song.priceType}
                {song.price && ` - $${song.price}`}
              </p>
            </div>
            <button className="mt-6 w-full px-5 py-3 text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 rounded-lg font-semibold shadow-lg transition duration-300">
              View Song
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* Merchandise Section */}
<div id="merchandise" className="py-8">
  <div className="p-8 max-w-6xl mx-auto bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl">
    <h2 className="text-4xl font-extrabold text-center text-white mb-10 tracking-wide drop-shadow-lg">
      🛍️ Merchandise
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {merchandise.map((merc) => (
        <div
          key={merc.merchId}
          className="bg-white bg-opacity-90 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transform transition duration-300 hover:scale-105"
        >
          {/* Image Section */}
          <div className="relative h-32">
            <img
              src={merc.imageURL}
              alt={merc.merchName}
              className="object-cover w-full h-full rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-lg px-6 py-2 bg-black bg-opacity-50 rounded-full">
                {merc.merchName}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {merc.merchName}
              </h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {merc.merchDescription}
              </p>
              <p className="text-lg font-medium text-gray-900 mb-1">
                Price: <span className="text-green-600 font-bold">${merc.price}</span>
              </p>
              <p className="text-sm text-gray-600">
                Type: {merc.merchType}
              </p>
            </div>
            <button className="mt-6 w-full px-5 py-3 text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 rounded-lg font-semibold shadow-lg transition duration-300">
              View Bundle
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* Messages Section */}
<div id="messages" className="py-10">
  {fanMessages && (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg tracking-wide">
        ✉️ Fan Messages
      </h2>

      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 flex flex-col items-center space-y-6 transform transition duration-300 hover:scale-105">
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            {fanMessages.title}
          </h3>
          <p className="text-sm text-gray-700 text-center leading-relaxed mb-4">
            {fanMessages.description}
          </p>
          <p className="text-sm text-gray-600 text-center">
            <span className="font-medium">Promised Reply Time:</span>{" "}
            <span className="text-blue-600 font-bold">{fanMessages.promisedReplyTime} hours</span>
          </p>
        </div>

        <button className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 rounded-lg shadow-lg transition duration-300">
          Send Message
        </button>
      </div>
    </div>
  )}
</div>


          {/* Support Section */}
<div id="support" className="py-10">
  {supportPage && (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8 tracking-wide drop-shadow-lg">
        🤝 Support Me
      </h2>

      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 flex flex-col items-center space-y-6 transform transition duration-300 hover:scale-105">
        {/* Title */}
        <div className="w-full text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{supportPage.title}</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Your support means the world to me! Join hands and be part of this journey. ❤️
          </p>
        </div>

        {/* Call to Action Button */}
        <button className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 rounded-lg shadow-xl transition duration-300">
          Support Now
        </button>
      </div>
    </div>
  )}
</div>

        </ScrollArea>
      </div>
    </div>
  );
};

export default LandingPageView2;
