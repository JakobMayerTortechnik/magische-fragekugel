import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function MagicFortuneApp() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const fortunes = [
    "Ja, auf jeden Fall! ✨",
    "Hmm... vielleicht solltest du es nochmal überdenken. 🤔",
    "Die Sterne sagen nein. ❌",
    "Jetzt ist der perfekte Zeitpunkt! ⏳",
    "Nur wenn du heute nett bist! 😇",
    "Du wirst überrascht sein! 🎁",
    "Das Universum flüstert: Ja! 🌌",
    "Nein, aber ein Kuchen hilft immer. 🍰",
    "Klar doch! Warum nicht? 🚀"
  ];

  const tellFortune = () => {
    if (!question.trim()) return;
    const random = Math.floor(Math.random() * fortunes.length);
    setAnswer(fortunes[random]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex flex-col items-center justify-center p-4 text-white">
      <motion.h1 
        className="text-4xl font-bold mb-6 flex items-center gap-2"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <Sparkles className="text-yellow-300" /> Magische Fragekugel
      </motion.h1>

      <Card className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-md shadow-xl">
        <CardContent className="flex flex-col gap-4">
          <Input 
            placeholder="Stell eine Frage ans Universum..." 
            className="text-black" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button onClick={tellFortune} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            Antwort finden ✨
          </Button>
          {answer && (
            <motion.div 
              className="mt-4 text-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {answer}
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}