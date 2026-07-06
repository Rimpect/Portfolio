import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Мета для картинки: alt-текст и размеры (стандарт OG — 1200×630)
export const alt = "Максим Воронов — Frontend-разработчик";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Два сабсета Manrope: латиница + кириллица — Satori сам подберёт глиф под символ.
  const [latin, cyrillic] = await Promise.all([
    readFile(join(process.cwd(), "assets/Manrope-Latin-700.ttf")),
    readFile(join(process.cwd(), "assets/Manrope-Cyrillic-700.ttf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        background: "#0d0e12",
        backgroundImage:
          "radial-gradient(circle at 18% 20%, rgba(95,220,176,0.22), transparent 55%)",
        fontFamily: "Manrope",
      }}
    >
      {/* Строка-бейдж: плашка </> + подпись */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "22px",
          marginBottom: "44px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "88px",
            height: "88px",
            borderRadius: "20px",
            background: "rgba(95,220,176,0.14)",
            border: "1px solid rgba(95,220,176,0.32)",
            color: "#5fdcb0",
            fontSize: "42px",
          }}
        >
          {"</>"}
        </div>
        <div style={{ display: "flex", color: "#9296a1", fontSize: "30px" }}>
          резюме · портфолио
        </div>
      </div>

      {/* Имя */}
      <div
        style={{
          display: "flex",
          color: "#eceef2",
          fontSize: "100px",
          lineHeight: 1.05,
        }}
      >
        Максим Воронов
      </div>

      {/* Роль */}
      <div
        style={{
          display: "flex",
          color: "#5fdcb0",
          fontSize: "58px",
          marginTop: "18px",
        }}
      >
        Frontend-разработчик
      </div>

      {/* Стек */}
      <div
        style={{
          display: "flex",
          color: "#9296a1",
          fontSize: "32px",
          marginTop: "40px",
        }}
      >
        React · TypeScript · вёрстка · доступность
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Manrope", data: latin, style: "normal", weight: 700 },
        { name: "Manrope", data: cyrillic, style: "normal", weight: 700 },
      ],
    },
  );
}
