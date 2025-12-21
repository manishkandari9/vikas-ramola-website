import { MetadataRoute } from "next"
import fs from "fs"
import path from "path"

const baseUrl = "https://VikasRamolavdo.studio"

function getRoutes(dir: string, basePath = ""): string[] {
  const files = fs.readdirSync(dir)
  let routes: string[] = []

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)  

    if (stat.isDirectory()) {
      if (file.startsWith("_") || file === "api") continue
      routes.push(...getRoutes(fullPath, `${basePath}/${file}`))
    }

    if (file === "page.tsx" || file === "page.ts") {
      routes.push(basePath === "" ? "/" : basePath)
    }
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app")
  const routes = getRoutes(appDir)

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }))
}
