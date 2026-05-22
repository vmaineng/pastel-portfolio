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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isPending]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[var(--accent-purple)] text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 hover:opacity-90 transition-all duration-300"
        aria-label="Toggle chat"
      >
        {open ? "✖" : "💬"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-3 sm:right-6 z-50 w-[calc(100vw-3rem)] sm:w-80 max-h-[600px] flex flex-col rounded-2xl shadow-2xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden transition-colors duration-300">
          {/* Header */}
          <div className="bg-[var(--card-bg-alt)] border-b border-[var(--card-border)] px-4 py-3 transition-colors duration-300">
            <p className="font-mono text-sm text-[var(--accent-purple)] font-semibold">
              It&apos;s Digi-Mai. Ask me anything 👋
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[520px]">
            {messages.length === 0 && (
              <p className="text-xs text-[var(--text-muted)] text-center mt-8 transition-colors duration-300">
                Ask me about my experience, skills, or projects!
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-xl text-sm leading-snug transition-colors duration-300 ${
                    msg.role === "user"
                      ? "bg-[var(--accent-purple)] text-white rounded-br-none"
                      : "bg-[var(--card-bg-alt)] text-[var(--text-primary)] rounded-bl-none"
                  }`}
                >
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-purple-300 hover:opacity-70 break-all"
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
                <div className="bg-[var(--card-bg-alt)] text-[var(--text-muted)] px-3 py-2 rounded-xl rounded-bl-none text-sm animate-pulse transition-colors duration-300">
                  Thinking...
                </div>
              </div>
            )}
            {state.error && (
              <p className="text-xs text-red-400 text-center">{state.error}</p>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            action={formAction}
            className="border-t border-[var(--card-border)] p-3 flex gap-2 bg-[var(--card-bg)] transition-colors duration-300"
          >
            <input
              name="prompt"
              placeholder="Ask me anything..."
              className="flex-1 text-sm border border-[var(--card-border)] bg-[var(--background)] text-[var(--text-primary)] rounded-full px-3 py-2 outline-none focus:border-[var(--accent-purple)] transition-colors duration-300 placeholder:text-[var(--text-muted)]"
              disabled={isPending}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isPending}
              className="bg-[var(--accent-purple)] text-white rounded-full w-9 h-9 flex items-center justify-center text-sm hover:opacity-90 disabled:opacity-40 transition-all duration-300 flex-shrink-0"
            >
              ↑
            </button>
          </form>
        </div>
      )}
    </>
  );
}
