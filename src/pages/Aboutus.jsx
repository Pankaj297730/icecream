import React, { useState } from 'react';
import {
  Play,
  Heart,
  Users,
  Target,
  Star,
  Award,
  ChevronRight,
  Eye,
  Sparkles,
} from 'lucide-react';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';

const AboutUs = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const demoVideos = [
    {
      id: 'block-printing',
      title: 'Traditional Block Printing',
      description:
        'Experience the ancient art of hand block printing, where artisans use hand-carved wooden blocks to create intricate patterns on fabric.',
      thumbnail:
        'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3:45',
      artisan: 'Master Ramesh Kumar',
      location: 'Sanganer, Jaipur',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
    },
    {
      id: 'carpet-weaving',
      title: 'Hand-Woven Carpet Making',
      description:
        'Watch skilled craftspeople weave magic into every thread, creating magnificent carpets that have adorned palaces for centuries.',
      thumbnail:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5:20',
      artisan: 'Craftsman Abdul Rahman',
      location: 'Bhadohi, Rajasthan',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
    },
    {
      id: 'palmistry',
      title: 'Art of Palmistry Reading',
      description:
        'Discover the mystical tradition of palmistry, where ancient wisdom meets personal insights through the lines of your palm.',
      thumbnail:
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4:15',
      artisan: 'Pandit Mohan Sharma',
      location: 'Pushkar, Rajasthan',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
    },
  ];

  const visionPoints = [
    {
      icon: Heart,
      title: 'Preserve Heritage',
      description:
        'Safeguarding centuries-old traditions and passing them to future generations',
    },
    {
      icon: Users,
      title: 'Empower Artisans',
      description:
        'Creating sustainable livelihoods for skilled craftspeople in rural communities',
    },
    {
      icon: Target,
      title: 'Authentic Craft',
      description:
        'Delivering genuine handmade products that tell stories of cultural richness',
    },
    {
      icon: Sparkles,
      title: 'Bridge Cultures',
      description:
        'Connecting global audiences with the timeless beauty of Rajasthani craftsmanship',
    },
  ];

  // ✅ Clean final version of PlayVideoModal
  const PlayVideoModal = ({ video, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-[#f7f0e7] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-[#1e1a17]">{video.title}</h3>
            <button
              onClick={onClose}
              className="text-[#1e1a17] text-2xl font-bold hover:opacity-70"
            >
              ×
            </button>
          </div>
          <div className="aspect-video bg-black rounded-lg mb-4 overflow-hidden">
            <iframe
              src={video.videoUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-[#1e1a17] mb-2">
                About this craft:
              </h4>
              <p className="text-[#1e1a17] opacity-80">{video.description}</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1e1a17] mb-2">
                Artisan Details:
              </h4>
              <p className="text-[#1e1a17] opacity-80">
                Master: {video.artisan}
              </p>
              <p className="text-[#1e1a17] opacity-80">
                Location: {video.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <Navbar/>
  
    <div className="min-h-screen bg-[#f7f0e7] text-[#1e1a17]">
      {/* Hero Section */}
      <section className="px-6 py-16 text-white bg-[url('https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754475752/abstract-background-design-hd-dark-spring-green-color_851755-36184-_1__lhtfyd.webp')] bg-blend-overlay bg-cover">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl w-full flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
            <h1
              className="text-[3.5rem] leading-[1.1] font-extrabold max-w-xs md:max-w-[22rem] font-[Playfair_Display]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A social enterprise. An authentic platform for pure craft.
            </h1>
            <div className="max-w-xl mt-16">
              <div className="w-20 h-[2px] bg-[#a67c3c] mb-6"></div>
              <p className="text-base leading-relaxed">
                Welcome to Rajasthan Small Scale Cottage Industries — where
                tradition meets craftsmanship. We are dedicated to preserving
                the soul of Indian artisanship by bringing you handmade
                treasures crafted by rural hands. From vibrant handwoven
                textiles and gemstone-studded jewellery to time-honored crafts
                in clay, wood, and metal — each piece reflects Rajasthan's
                enduring beauty and cultural depth. Our mission is to deliver
                stories of heritage and hope from the golden sands of Rajasthan
                to your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Vision & Mission
            </h2>
            <div className="w-20 h-[2px] bg-[#a67c3c] mx-auto mb-8"></div>
            <p className="text-lg text-[#1e1a17] opacity-80 max-w-3xl mx-auto leading-relaxed">
              To become the world's most trusted bridge between traditional
              Rajasthani artisans and global connoisseurs of authentic
              craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="rounded-xl border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-[#f7f0e7] p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#a67c3c] rounded-full flex items-center justify-center mx-auto mb-6">
                  <point.icon className="w-8 h-8 text-[#f7f0e7]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#1e1a17]">
                  {point.title}
                </h3>
                <p className="text-[#1e1a17] opacity-80 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Videos Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Live Craft Demonstrations
            </h2>
            <div className="w-20 h-[2px] bg-[#a67c3c] mx-auto mb-8"></div>
            <p className="text-lg text-[#1e1a17] opacity-80 max-w-3xl mx-auto leading-relaxed">
              Experience the magic of traditional craftsmanship through our
              exclusive live demonstrations by master artisans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoVideos.map((video) => (
              <div
                key={video.id}
                className="overflow-hidden rounded-xl border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setActiveVideo(video)}
                      className="bg-[#a67c3c] hover:bg-[#8d6633] text-[#f7f0e7] rounded-full p-4"
                    >
                      <Play className="w-8 h-8" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#a67c3c] text-[#f7f0e7] px-3 py-1 rounded-full text-sm font-medium">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#1e1a17]">
                    {video.title}
                  </h3>
                  <p className="text-[#1e1a17] opacity-80 mb-4 leading-relaxed">
                    {video.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#a67c3c]" />
                      <span className="text-[#1e1a17] opacity-70">
                        {video.artisan}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#a67c3c]" />
                      <span className="text-[#1e1a17] opacity-70">
                        {video.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="w-full mt-4 flex items-center justify-center bg-[#a67c3c] hover:bg-[#8d6633] text-[#f7f0e7] py-2 px-4 rounded-lg"
                  >
                    Watch Demonstration
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Preserving Tradition, Creating Futures
          </h2>
          <div className="w-20 h-[2px] bg-[#a67c3c] mx-auto mb-8"></div>
          <p className="text-lg text-[#1e1a17] opacity-80 leading-relaxed mb-8">
            Every purchase supports rural artisan families, preserves ancient
            techniques, and ensures these beautiful traditions continue to
            flourish for generations to come.
          </p>
          <div className="flex items-center justify-center gap-8 text-[#a67c3c]">
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">500+ Artisans</p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">20+ Villages</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">100+ Crafts</p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      

      {/* Video Modal */}
      {activeVideo && (
        <PlayVideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
      </>
  );
};

export default AboutUs;
