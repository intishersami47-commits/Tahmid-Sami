import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Music, Video, Mail } from "lucide-react";
import profilePic from "../assets/Heu.JPG"; // Add your uploaded image inside /src/assets/

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 via-black to-black">
        <motion.img
          src={profilePic}
          alt="Tahmid Sami"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-purple-600 mb-6 object-cover"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-purple-300"
        >
          Tahmid Sami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-gray-300"
        >
          Video Editor & Sound Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6"
        >
          <a href="#portfolio">
            <Button size="lg" className="rounded-2xl bg-purple-700 hover:bg-purple-800 text-white">
              View My Work
            </Button>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-purple-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-300">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a passionate <span className="text-purple-400">Video Editor</span> and
            <span className="text-purple-500"> Sound Engineer</span> with years of
            experience creating cinematic visuals and immersive audio. My work
            blends creativity with precision to bring stories to life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-purple-900/40 border border-purple-700 text-center p-6">
            <CardContent>
              <Video className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold mt-4">Video Editing</h3>
              <p className="text-gray-400 mt-2">
                Crafting cinematic cuts, storytelling visuals, and polished
                productions.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-purple-900/40 border border-purple-700 text-center p-6">
            <CardContent>
              <Music className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold mt-4">Sound Design</h3>
              <p className="text-gray-400 mt-2">
                Mixing, mastering, and designing immersive audio landscapes.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-purple-900/40 border border-purple-700 text-center p-6">
            <CardContent>
              <Play className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold mt-4">Music Scoring</h3>
              <p className="text-gray-400 mt-2">
                Composing original music to enhance visuals and storytelling.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Editing Portfolio */}
      <section id="portfolio" className="py-20 px-6 md:px-20 bg-gradient-to-b from-purple-950 to-black">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Video Editing Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "https://www.youtube.com/embed/URyiCGZNjdI",
            "https://www.youtube.com/embed/TnQFSzkK_UU",
            "https://www.youtube.com/embed/ViGcwiW7rfY"
          ].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg border border-purple-700"
            >
              <iframe
                className="w-full h-60"
                src={link}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Audio Portfolio */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-purple-950">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Audio Mixing & Mastering</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "https://www.youtube.com/embed/m-iGoHRNzV0",
            "https://www.youtube.com/embed/t8MogCE9yjo",
            "https://www.youtube.com/embed/Vm3Xg7q1upo"
          ].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg border border-purple-700"
            >
              <iframe
                className="w-full h-60"
                src={link}
                title={`Audio ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-purple-300">Let’s Work Together</h2>
        <p className="text-gray-300 mb-8">
          Have a project in mind? Reach out and let’s bring it to life.
        </p>
        <a href="mailto:tahmidsami47@gmail.com">
          <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white">
            <Mail className="mr-2 h-5 w-5" /> Contact Me
          </Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-black">
        © {new Date().getFullYear()} Tahmid Sami. All Rights Reserved.
      </footer>
    </div>
  );
}