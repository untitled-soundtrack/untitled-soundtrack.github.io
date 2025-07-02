// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-über",
    title: "Über",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projekte",
          title: "Projekte",
          description: "Ausgewählte Projekte der letzten Jahre",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publikationen",
          title: "Publikationen",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "projects-drei",
          title: 'Drei',
          description: "Video Producer (2016 - 2022)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/av-2022_drei/";
            },},{id: "projects-karrierereporter",
          title: 'karrierereporter',
          description: "Employer-Branding-Videos für karriere.at (2022 - 2023)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/av-2023_karriere/";
            },},{id: "projects-drei-film",
          title: 'Drei Film',
          description: "VoD bei Drei Österreich",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev-201601_drei_film/";
            },},{id: "projects-drei-live",
          title: 'Drei Live',
          description: "24h Musikvideokanal",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev-201601_drei_live/";
            },},{id: "projects-flimmerkiste",
          title: 'flimmerkiste',
          description: "Alle öffentlich-rechtlichen Mediatheken in einer App",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev-202301_flimmerkiste/";
            },},{id: "projects-pingo",
          title: 'PinGo',
          description: "Eine Location-Based App zum Erkunden",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev-202305_pingo/";
            },},{id: "projects-regiobiograph",
          title: 'RegioBioGraph',
          description: "“Lebende” Archive filmisch erzählen",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev-202308_regiobiograph/";
            },},{id: "projects-ar-multiplayer-spiel",
          title: 'AR-Multiplayer-Spiel',
          description: "Erste Schritte in Augmented Reality",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev-202403_car_kickers_ar/";
            },},{id: "projects-elsewhere-prototyp",
          title: 'elsewhere Prototyp',
          description: "Spielbare Erinnerungskultur",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev-202411_elsewhere/";
            },},{id: "projects-impressum",
          title: 'Impressum',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/impressum/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%75%6E%74%69%74%6C%65%64%73%6F%75%6E%64%74%72%61%63%6B@%70%6F%73%74%65%6F.%61%74", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/florian-bauer-0b72b3197", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/untitled-soundtrack", "_blank");
        },
      },{
        id: 'social-vimeo_id',
        title: 'Vimeo_id',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-flickr',
        title: 'Flickr',
        section: 'Socials',
        handler: () => {
          window.open("https://www.flickr.com/untitledsoundtrack", "_blank");
        },
      },{
        id: 'social-tumblr_url',
        title: 'Tumblr_url',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zotero.org/_florian_bauer_", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
