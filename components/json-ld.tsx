interface JsonLdProps {
  type?: "home" | "video" | "graphic" | "ai" | "projects" | "about" | "contact"
}

export function JsonLd({ type = "home" }: JsonLdProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://vikasRamola.com/#person",
    name: "Vikas Ramola",
    alternateName: "Vikas Ramola",
    jobTitle: "AI-Powered Graphic Designer & Video Editor",
    description:
      "Professional AI-powered Graphic Designer and Video Editor serving Rishikesh and Dehradun, Uttarakhand. Expert in video editing, motion graphics, and AI-enhanced creative services.",
    url: "https://vikasRamola.com",
    email: "vikasviki46619@gmail.com",
    telephone: "+91-6398828373",
    image: "https://vikasRamola.com/professional-creative-designer-portrait-dark-backg.jpg",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
    ],
    knowsAbout: [
      "Video Editing",
      "Graphic Design",
      "AI Video Editing",
      "Motion Graphics",
      "Social Media Design",
      "Adobe Premiere Pro",
      "After Effects",
      "Photoshop",
      "AI Prompting",
    ],
    sameAs: [],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://vikasRamola.com/#business",
    name: "Vikas Ramola - AI Creative Studio",
    description:
      "AI-powered creative studio offering video editing, graphic design, and AI-enhanced content creation services in Rishikesh and Dehradun, Uttarakhand.",
    url: "https://vikasRamola.com",
    telephone: "+91-6398828373",
    email: "vikasviki46619@gmail.com",
    founder: { "@id": "https://vikasRamola.com/#person" },
    areaServed: [
      {
        "@type": "City",
        name: "Rishikesh",
        containedInPlace: { "@type": "State", name: "Uttarakhand" },
      },
      {
        "@type": "City",
        name: "Dehradun",
        containedInPlace: { "@type": "State", name: "Uttarakhand" },
      },
    ],
    priceRange: "$$",
    openingHours: "Mo-Sa 09:00-18:00",
  }

  const breadcrumbSchemas: Record<string, object> = {
    home: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://vikasRamola.com" }],
    },
    video: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vikasRamola.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Video Editing Services",
          item: "https://vikasRamola.com/video-editor-in-rishikesh-dehradun",
        },
      ],
    },
    graphic: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vikasRamola.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Graphic Design Services",
          item: "https://vikasRamola.com/graphic-designer-in-rishikesh-dehradun",
        },
      ],
    },
    ai: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vikasRamola.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Creative Services",
          item: "https://vikasRamola.com/ai-creative-services",
        },
      ],
    },
    projects: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vikasRamola.com" },
        { "@type": "ListItem", position: 2, name: "Projects", item: "https://vikasRamola.com/projects" },
      ],
    },
    about: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vikasRamola.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://vikasRamola.com/about-Vikas-Ramola" },
      ],
    },
    contact: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vikasRamola.com" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://vikasRamola.com/contact" },
      ],
    },
  }

  const videoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Video Editing Services",
    name: "Professional Video Editing in Rishikesh & Dehradun",
    description:
      "Expert video editing services including YouTube videos, shorts, reels, talking head videos, podcast ads, product videos, event videos, motion graphics, and AI-enhanced editing.",
    provider: { "@id": "https://vikasRamola.com/#person" },
    areaServed: ["Rishikesh", "Dehradun", "Uttarakhand", "India"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Video Editing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "YouTube Video Editing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instagram Reels Editing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Talking Head Videos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Video Editing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Motion Graphics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Video Editing" } },
      ],
    },
  }

  const graphicServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Graphic Design Services",
    name: "Professional Graphic Design in Rishikesh & Dehradun",
    description:
      "Creative graphic design services including social media design, poster design, brand graphics, logo design, thumbnails, and AI-enhanced visuals.",
    provider: { "@id": "https://vikasRamola.com/#person" },
    areaServed: ["Rishikesh", "Dehradun", "Uttarakhand", "India"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Graphic Design Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Poster Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logo Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "YouTube Thumbnail Design" } },
      ],
    },
  }

  const aiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Creative Services",
    name: "AI-Powered Creative Services in Uttarakhand",
    description:
      "Cutting-edge AI-powered creative services combining human creativity with artificial intelligence for faster, better, and more cost-effective video editing and graphic design.",
    provider: { "@id": "https://vikasRamola.com/#person" },
    areaServed: ["Rishikesh", "Dehradun", "Uttarakhand", "India"],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the best video editor in Rishikesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vikas Ramola is a leading AI-powered video editor in Rishikesh, helping businesses and creators grow with high-quality, optimized video content using modern AI tools and creative expertise.",
        },
      },
      {
        "@type": "Question",
        name: "What is AI video editing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI video editing uses artificial intelligence tools to enhance video quality, automate repetitive tasks, improve color grading, and create engaging content faster while maintaining creative quality.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide graphic design services in Dehradun?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Vikas Ramola provides professional graphic design services in Dehradun including social media design, poster design, brand graphics, and AI-enhanced creative visuals for businesses.",
        },
      },
      {
        "@type": "Question",
        name: "Is AI-based editing better for social media?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI-based editing is highly effective for social media content. It helps optimize videos for platform algorithms, creates engaging captions automatically, and ensures faster turnarounds for consistent posting.",
        },
      },
    ],
  }

  const schemas: Record<string, object[]> = {
    home: [personSchema, localBusinessSchema, breadcrumbSchemas.home, faqSchema],
    video: [personSchema, localBusinessSchema, videoServiceSchema, breadcrumbSchemas.video, faqSchema],
    graphic: [personSchema, localBusinessSchema, graphicServiceSchema, breadcrumbSchemas.graphic, faqSchema],
    ai: [personSchema, localBusinessSchema, aiServiceSchema, breadcrumbSchemas.ai, faqSchema],
    projects: [personSchema, localBusinessSchema, breadcrumbSchemas.projects],
    about: [personSchema, breadcrumbSchemas.about],
    contact: [personSchema, localBusinessSchema, breadcrumbSchemas.contact],
  }

  return (
    <>
      {schemas[type]?.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}
