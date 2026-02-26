"use server";

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are a friendly assistant on Mai Vang's portfolio website.
Only answer questions based on the information below. Keep responses concise and conversational.
If asked something not covered here, say you're not sure but invite them to reach out directly on LinkedIn.

== About [Your Name] ==
Role: [Software Engineer]
Experience: [2 years]
Skills: [Python, React, Next.js, TypeScript, Node.js, PostgreSQL, etc.]
Current position: [Open Source Contributor]

== Projects ==
- [Junior Repo Open Source]: [An AI-powered tool that helps junior developers find GitHub repositories perfect for their first open-source contributions.]
- [JD-AI]: [AI-powered mock behavorial platform built with React, TypeScript, and OpenAI. Features include writing and speaking behavorial answers and receiving critiques to become better.]

== Contact ==
GitHub: [github.com/vmaineng]
LinkedIn: [linkedin.com/in/mai-vang-swe]
`;

type Message = { role: "user" | "assistant"; content: string };

export async function askAI(
  prev: { error: string | null },
  formData: FormData,
): Promise<{ message: string | null ; error: string | null }> {
  const prompt = formData.get("prompt") as string;
  const historyRaw = formData.get("history") as string;

  if (!prompt.trim()) return { message: null, error: null };
    
let history: Message[] = [];

try {
history = historyRaw ? JSON.parse(historyRaw) : [];
} catch { 
    history = []
}


try {
    const response = await client.messages.create({
           model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: [
        ...history,
        { role: "user", content: prompt },
      ],
    });

    const block = response.content[0];
    if (block.type !== "text") throw new Error("Unexpected response type");
    return {message: block.text, error: null}
} catch (err) {
    console.error("askAI error:", err);
    return {message: null, error: "Something went wrong. Please try again!"}
}

}