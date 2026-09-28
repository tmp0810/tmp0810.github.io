// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic background, research experience, and awards.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-1-paper-emo-embedding-model-distillation-via-intra-model-relation-and-optimal-transport-alignments-was-accepted-to-emnlp-2025-main-conference",
          title: '1 paper, EMO: Embedding Model Distillation via Intra-Model Relation and Optimal Transport Alignments,...',
          description: "",
          section: "News",},{id: "news-i-started-a-research-collaboration-with-asst-prof-khai-nguyen-on-computational-optimal-transport",
          title: 'I started a research collaboration with Asst. Prof. Khai Nguyen on Computational Optimal...',
          description: "",
          section: "News",},{id: "news-2-papers-mol-mixture-of-layers-in-cross-tokenizer-embedding-model-distillation-and-samd-span-aware-matryoshka-distillation-for-cross-tokenizer-embedding-models-were-accepted-to-knowledge-based-systems-and-machine-learning-respectively",
          title: '2 papers, MoL: Mixture of Layers in Cross-Tokenizer Embedding Model Distillation and SAMD:...',
          description: "",
          section: "News",},{id: "news-1-paper-mipic-matryoshka-representation-learning-via-self-distilled-intra-relational-and-progressive-information-chaining-was-accepted-to-acl-2026-findings",
          title: '1 paper, MIPIC: Matryoshka Representation Learning via Self-Distilled Intra-Relational and Progressive Information Chaining,...',
          description: "",
          section: "News",},{id: "news-i-joined-qualcomm-ai-research-as-an-ai-research-resident",
          title: 'I joined Qualcomm AI Research as an AI Research Resident.',
          description: "",
          section: "News",},{id: "news-1-paper-sugar-spectral-and-geometry-aware-alignment-for-matryoshka-representation-distillation-was-accepted-to-emnlp-2026-main-conference",
          title: '1 paper, SUGAR: Spectral and Geometry-Aware Alignment for Matryoshka Representation Distillation, was accepted...',
          description: "",
          section: "News",},{id: "news-1-paper-amortized-optimal-transport-from-sliced-potentials-was-accepted-to-neurips-2026",
          title: '1 paper, Amortized Optimal Transport from Sliced Potentials, was accepted to NeurIPS 2026....',
          description: "",
          section: "News",},{id: "projects-amortized-optimal-transport",
          title: 'Amortized Optimal Transport',
          description: "Learning amortized optimal transport maps from sliced potentials.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/amortized-optimal-transport/";
            },},{id: "projects-deep-learning-optimization",
          title: 'Deep Learning Optimization',
          description: "Optimization geometry, perturbation methods, and training dynamics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deep-learning-optimization/";
            },},{id: "projects-embedding-model-distillation",
          title: 'Embedding Model Distillation',
          description: "Compact embedding models through relational, geometric, spectral, and optimal-transport-based distillation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/embedding-model-distillation/";
            },},{id: "projects-efficient-foundation-model-adaptation",
          title: 'Efficient Foundation Model Adaptation',
          description: "Efficient mechanisms for adapting Transformer-based foundation models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/foundation-model-adaptation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%75%6F%6E%67%6D%69%6E%68%70%68%75%63%30%38%31%30%32%30%30%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tmp0810", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/minh-phuc-truong-92154b319", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=PnwSuNMAAAAJ", "_blank");
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
