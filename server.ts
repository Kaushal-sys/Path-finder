import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization of GoogleGenAI
let aiClient: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY environment variable is not set. Please add it via Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// REST Endpoint: Analyze Resume
app.post("/api/analyze-resume", async (req, res) => {
  try {
    const { resumeText, targetRole } = req.body;

    if (!resumeText) {
      return res.status(400).json({ error: "Missing resumeText inside request body." });
    }

    const ai = getAI();

    const prompt = `
      You are an elite career strategist and career elevation engine.
      Analyze the following resume details and target role (if specified) and output a highly customized skill analysis, market demand trends, activity history, relevant job postings, and a targeted 3-phase study roadmap matching the exact JSON format specified in the response schema.

      Target Role constraint if specified: ${targetRole || "Keep it based on best high-conversion pathway for the candidate"}
      Resume Content:
      ${resumeText}

      Please make sure to:
      1. Calculate an authentic Readiness Percent (between 30% and 95%) representing their match for the target role or their general track.
      2. Identify 3 critical skill areas: at least 1 severe gap (status='gap'), 1 warning (status='warning'), and 1 matching strength (status='success').
      3. Generate 4 high-demand current software engineering trends (Q4 2023 - present) relevant to their profile, showing substantial percentage growth (e.g. +120%, +250%).
      4. List 3-4 actual relevant job listings they are matched with.
      5. Construct a structured 3-phase study roadmap to bridge their gap and warning skills. Make Phase 1 'completed' or 'active', Phase 2 'active' or 'locked', and Phase 3 'locked'.
    `;

    const result = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are Pathfinder AI, a professional job market matching system. You only output valid, strictly compliant JSON matching the provided schema.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["readinessPercent", "percentile", "location", "track", "summary", "skills", "trends", "activities", "jobs", "roadmap"],
          properties: {
            readinessPercent: {
              type: Type.INTEGER,
              description: "The calculated readiness level out of 100."
            },
            percentile: {
              type: Type.INTEGER,
              description: "Percentile outperforming other candidates (e.g., 72)."
            },
            location: {
              type: Type.STRING,
              description: "Current candidate location or target region, e.g., 'San Francisco, CA'."
            },
            track: {
              type: Type.STRING,
              description: "The specific professional track chosen, e.g., 'Full Stack AI Track' or 'Cloud Systems Track'."
            },
            summary: {
              type: Type.STRING,
              description: "An encouraging, insightful, 2-3 sentence overview of their strengths and how to bridge their main gaps to elevate market readiness."
            },
            skills: {
              type: Type.ARRAY,
              description: "Exactly 3 critical skill evaluations, capturing gaps.",
              items: {
                type: Type.OBJECT,
                required: ["name", "matchPercent", "status", "description"],
                properties: {
                  name: { type: Type.STRING, description: "Name of the skill, e.g., 'React Native' or 'Distributed Systems'." },
                  matchPercent: { type: Type.INTEGER, description: "Match score out of 100." },
                  status: {
                    type: Type.STRING,
                    description: "Strictly either 'gap' (low match), 'warning' (moderate match), or 'success' (fully mastered)."
                  },
                  description: { type: Type.STRING, description: "Brief advice explaining the alignment or action step." }
                }
              }
            },
            trends: {
              type: Type.ARRAY,
              description: "4 current market trends highlighting high demand.",
              items: {
                type: Type.OBJECT,
                required: ["name", "demandChange", "demandDirection", "description", "category"],
                properties: {
                  name: { type: Type.STRING, description: "Skill/trend name, e.g., 'Generative AI' or 'Rust'." },
                  demandChange: { type: Type.STRING, description: "Percentage growth string, e.g., '+240%' or '+85%'." },
                  demandDirection: { type: Type.STRING, description: "Either 'up' or 'down'." },
                  description: { type: Type.STRING, description: "Market demand rationale." },
                  category: { type: Type.STRING, description: "General category, e.g., 'Artificial Intelligence' or 'Systems Engineering'." }
                }
              }
            },
            activities: {
              type: Type.ARRAY,
              description: "A chronological array of past activities matching recent candidate efforts.",
              items: {
                type: Type.OBJECT,
                required: ["id", "type", "title", "subtitle", "time", "timestamp"],
                properties: {
                  id: { type: Type.STRING },
                  type: { type: Type.STRING, description: "Must be 'application', 'verification', or 'optimization'." },
                  title: { type: Type.STRING, description: "E.g., 'Applied: Web Developer at Stripe' or 'Skill Verified: Redis'." },
                  subtitle: { type: Type.STRING, description: "Brief status message, e.g., '2 hours ago • Under Review'." },
                  time: { type: Type.STRING, description: "Casual label, e.g., 'Yesterday' or '2 hours ago'." },
                  timestamp: { type: Type.NUMBER, description: "Epoch millisecond value." }
                }
              }
            },
            jobs: {
              type: Type.ARRAY,
              description: "3-4 highly matched job postings tailored for this candidate.",
              items: {
                type: Type.OBJECT,
                required: ["id", "title", "company", "location", "type", "salary", "matchPercent", "description", "skills", "applied"],
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  company: { type: Type.STRING },
                  location: { type: Type.STRING },
                  type: { type: Type.STRING },
                  salary: { type: Type.STRING },
                  matchPercent: { type: Type.INTEGER },
                  description: { type: Type.STRING },
                  skills: { type: Type.ARRAY, items: { type: Type.STRING } },
                  applied: { type: Type.BOOLEAN }
                }
              }
            },
            roadmap: {
              type: Type.ARRAY,
              description: "A structured, sequence roadmap with exactly 3 sequential phases.",
              items: {
                type: Type.OBJECT,
                required: ["id", "title", "subtitle", "status", "duration", "steps"],
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  subtitle: { type: Type.STRING },
                  status: { type: Type.STRING, description: "Either 'completed', 'active', or 'locked'." },
                  duration: { type: Type.STRING, description: "E.g., '3 weeks' or '4 weeks'." },
                  steps: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      required: ["id", "title", "description", "hours", "type", "completed"],
                      properties: {
                        id: { type: Type.STRING },
                        title: { type: Type.STRING },
                        description: { type: Type.STRING },
                        hours: { type: Type.INTEGER },
                        type: { type: Type.STRING, description: "Must be 'course', 'project', or 'reading'." },
                        completed: { type: Type.BOOLEAN, description: "Must default to false unless pre-achieved." },
                        resourceLink: { type: Type.STRING, description: "Optional high-quality web resource link." }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    const outputText = result.text;
    if (!outputText) {
      throw new Error("Gemini returned an empty response.");
    }

    const payload = JSON.parse(outputText.trim());
    return res.json(payload);

  } catch (error: any) {
    console.error("Error to execute Gemini analyze-resume endpoint:", error);
    return res.status(500).json({
      error: error.message || "Unknown server execution error.",
      isKeyMissing: !process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "MY_GEMINI_API_KEY"
    });
  }
});

// Configure Vite or Static Assets Server
const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development server linked successfully.");
  } else {
    // Production Mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static production assets from:", distPath);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server listening on http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode.`);
  });
};

startServer().catch((err) => {
  console.error("Fatal startup error in Express/Vite server:", err);
});
