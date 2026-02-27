"use client";

import { useState, useRef, useEffect, useActionState } from "react";
import { askAI } from "../actions/chat";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatSidebar() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    async (_prev: { error: string | null }, formData: FormData) => {
      const prompt = formData.get("prompt") as string;
      if (!prompt.trim()) return { error: null };

      setMessages((prev) => [...prev, { role: "user", content: prompt }]);

      const result = await askAI(_prev, formData);

      if (result.message) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: result.message! },
        ]);
      }

      formRef.current?.reset();
      return { error: result.error };
    },
    { error: null },
  );

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isPending]);

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        aria-label="Toggle chat"
      >
        {open ? "✖" : "💬"}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-h-[600px] flex flex-col rounded-2xl shadow-2xl bg-white border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-black text-white px-4 py-3 font-semibold text-sm">
            It's Digi-Mai. Ask me anything 👋
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[520px]">
            {messages.length === 0 && (
              <p className="text-xs text-gray-400 text-center mt-8">
                Ask me about my experience, skills, or projects!
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-xl text-sm leading-snug ${
                    msg.role === "user"
                      ? "bg-black text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-500 hover:text-blue-700 break-all"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isPending && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-400 px-3 py-2 rounded-xl rounded-bl-none text-sm animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
            {state.error && (
              <p className="text-xs text-red-400 text-center">{state.error}</p>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            action={formAction}
            className="border-t border-gray-100 p-3 flex gap-2"
          >
            <input
              name="prompt"
              placeholder="Ask me anything..."
              className="flex-1 text-sm border border-gray-200 rounded-full px-3 py-2 text-black outline-none focus:border-black transition-colors"
              disabled={isPending}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isPending}
              className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center text-sm hover:bg-gray-800 disabled:opacity-40 transition-colors flex-shrink-0"
            >
              ↑
            </button>
          </form>
        </div>
      )}
    </>
  );
}
