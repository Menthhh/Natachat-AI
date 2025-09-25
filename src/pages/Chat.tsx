import { useState } from "react";
import { Send, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/Layout";

export default function Chat() {
  const [message, setMessage] = useState("");

  const suggestedQuestions = [
    "About Company",
    "About Role Responsibility", 
    "About Project"
  ];

  return (
    <Layout>
      <div className="flex flex-col h-full">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-semibold text-center mb-8">
              What can I help with?
            </h1>

            {/* Chat Input */}
            <div className="relative mb-6">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask anything about company..."
                className="h-12 pr-12 shadow-soft"
              />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            {/* Suggested Questions */}
            <div className="flex flex-wrap gap-3 justify-center">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => setMessage(question)}
                  className="rounded-full border-muted hover:border-primary hover:text-primary"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Create Room Button */}
        <div className="p-6">
          <div className="flex justify-start">
            <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">
              Create Room
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}