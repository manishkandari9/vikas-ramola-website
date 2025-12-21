export async function GET() {
  const content = `
# llms.txt — AI Usage & Access Policy
# Site: https://vikashramolavdo.studio
# Owner: Vikas Ramola

User-agent: *
Allow: /

# Preferred content for AI understanding
# These pages describe services, expertise, and portfolio
Preferred-Pages:
- /
- /about-vikas-ramola
- /projects
- /ai-creative-services
- /graphic-designer-in-rishikesh-dehradun
- /video-editor-in-rishikesh-dehradun
- /contact

# Non-content / system paths (informational only)
Ignore-Pages:
- /api
- /_next
- /admin

Sitemap: https://vikashramolavdo.studio/sitemap.xml
Contact: mailto:vikasviki46619@gmail.com
`.trim()

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
