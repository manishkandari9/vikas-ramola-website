export async function GET() {
  const content = `
# llms.txt — AI Usage Policy for vikashramolavdo.studio

User-agent: *
Allow: /

# Primary pages
Allow: /
Allow: /about-vikash-chand
Allow: /projects
Allow: /ai-creative-services
Allow: /graphic-designer-in-rishikesh-dehradun
Allow: /video-editor-in-rishikesh-dehradun
Allow: /contact

# Low-value / system paths
Disallow: /api
Disallow: /_next
Disallow: /admin

Sitemap: https://vikashramolavdo.studio/sitemap.xml
Host: https://vikashramolavdo.studio

Contact: mailto:manishkandari43@gmail.com
`.trim()

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
