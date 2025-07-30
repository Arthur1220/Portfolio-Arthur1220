import { createI18n } from 'vue-i18n';

// Define as traduções
const messages = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Habilidades',
      guestbook: 'Livro de Visitas',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Arthur Marques Azevedo',
      title: 'Desenvolvedor Back-end/Full-stack & Blockchain',
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Uma breve introdução',
      highlight1_title: 'Solucionador de Problemas',
      highlight1_desc: 'Abordagem analítica para superar desafios complexos.',
      highlight2_title: 'Mentalidade de Segurança',
      highlight2_desc: 'Foco em construir aplicações seguras e robustas.',
      highlight3_title: 'Autodidata',
      highlight3_desc: 'Aprendizado contínuo para evoluir e me adaptar.',
      description: 'Desenvolvedor Back-end/Full-stack com foco em Python + Django e Vue.js, e experiência em projetos com sistemas blockchain (Solidity, Hardhat) e automação de APIs REST. Busco atuar no desenvolvimento de soluções de software seguras, escaláveis e de alto impacto.',
      download_button: 'Baixar Currículo',
      education_degree: 'Bacharel em Ciência da Computação',
      education_university: 'Universidade Estadual de Santa Cruz (UESC)'
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Abaixo estão alguns dos meus principais trabalhos. Alguns são de código aberto, enquanto outros são projetos privados ou conceituais.',
      view_code: 'Ver Código',
      live_demo: 'Demo ao Vivo',
      private_repo: 'Repositório Privado',
      view_all_github: 'Ver todos os projetos no GitHub',
      project_list: {
        rastreabilidade: {
          title: 'Sistema de Rastreabilidade Animal com Blockchain (TCC)',
          description: 'Plataforma full-stack para rastreabilidade imutável no agronegócio, solucionando o problema de fraude. A principal inovação é uma arquitetura de carteira custodial no back-end que abstrai 100% da complexidade da Web3 para o usuário final.'
        },
        calculadora: {
          title: 'Calculadora Nutricional para Ovinos e Caprinos',
          description: 'Plataforma web de acesso livre para realizar cálculos de exigências nutricionais para ovinos e caprinos. Construí uma API RESTful segura, conteinerizada com Docker e implantada em uma instância AWS EC2.'
        },
        estimativa: {
          title: 'Estimativa de Peso por Imagens 3D (Iniciação Tecnológica)',
          description: 'Sistema em Python para capturar imagens 3D de ovinos (Intel RealSense) e armazenar metadados com SQLAlchemy, automatizando a coleta de dados para futuros modelos de regressão de peso. Por ser um projeto de pesquisa acadêmica, o código não pode ser divulgado.'
        }
      }
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Meu nível técnico',
      category1: 'Linguagens',
      category2: 'Frameworks & Bibliotecas',
      category3: 'Bancos de Dados',
      category4: 'Blockchain',
      category5: 'DevOps & Ferramentas'
    },
    guestbook: { // A chave 'guestbook' estava faltando na sua nav
      title: 'Livro de Visitas',
      subtitle: 'Deixe sua marca na blockchain! Conecte sua carteira na rede Polygon Amoy de teste e envie uma mensagem.',
      connect_wallet: 'Conectar Carteira',
      placeholder: 'Sua mensagem...',
      send_message: 'Enviar Mensagem On-Chain',
      sending: 'Enviando transação...',
      success: 'Mensagem enviada com sucesso!',
      no_messages: 'Nenhuma mensagem ainda. Seja o primeiro!',
      view_contract: 'Ver Contrato na Polygonscan'
    },
    contact: {
      title: 'Contato',
      subtitle: 'Entre em contato',
      direct_title: 'Fale comigo',
      email_desc: 'Envie um email detalhado.',
      whatsapp_desc: 'Inicie uma conversa rápida.',
      linkedin_desc: 'Visite meu perfil profissional.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      guestbook: 'Guestbook',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Arthur Marques Azevedo',
      title: 'Back-end/Full-stack & Blockchain Developer',
    },
    about: {
      title: 'About Me',
      subtitle: 'A brief introduction',
      highlight1_title: 'Problem Solver',
      highlight1_desc: 'Analytical approach to overcome complex challenges.',
      highlight2_title: 'Security Mindset',
      highlight2_desc: 'Focus on building secure and robust applications.',
      highlight3_title: 'Continuous Learner',
      highlight3_desc: 'Always learning to evolve and adapt.',
      description: 'Back-end/Full-stack developer focused on Python + Django and Vue.js, with experience in projects involving blockchain systems (Solidity, Hardhat) and REST API automation. I aim to develop secure, scalable, and high-impact software solutions.',
      download_button: 'Download Resume',
      education_degree: 'B.Sc. in Computer Science',
      education_university: 'State University of Santa Cruz (UESC)'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Below are some of my main works. Some are open-source, while others are private or conceptual projects.',
      view_code: 'View Code',
      live_demo: 'Live Demo',
      private_repo: 'Private Repository',
      view_all_github: 'View All Projects on GitHub',
      project_list: {
        rastreabilidade: {
          title: 'Animal Traceability System with Blockchain',
          description: 'A full-stack platform for immutable traceability in the agribusiness sector, solving the fraud problem. The main innovation is a back-end custodial wallet architecture that abstracts 100% of Web3 complexity for the end-user.'
        },
        calculadora: {
          title: 'Nutritional Calculator for Sheep and Goats',
          description: 'A free-access web platform to perform nutritional requirement calculations for sheep and goats. I built a secure and containerized RESTful API with Docker, deployed on an AWS EC2 instance.'
        },
        estimativa: {
          title: 'Weight Estimation via 3D Imaging (Tech Initiation)',
          description: 'A Python system to capture 3D images of sheep (Intel RealSense) and store metadata with SQLAlchemy, automating data collection for future weight regression models. As an academic research project, the code cannot be disclosed.'
        }
      }
    },
    skills: {
      title: 'Skills',
      subtitle: 'My technical level',
      category1: 'Languages',
      category2: 'Frameworks & Libraries',
      category3: 'Databases',
      category4: 'Blockchain',
      category5: 'DevOps & Tools'
    },
    guestbook: {
      title: 'On-Chain Guestbook',
      subtitle: 'Leave your mark on the blockchain! Connect your wallet on the Polygon Amoy testnet and send a message.',
      connect_wallet: 'Connect Wallet',
      placeholder: 'Your message...',
      send_message: 'Send Message On-Chain',
      sending: 'Sending transaction...',
      success: 'Message sent successfully!',
      no_messages: 'No messages yet. Be the first!',
      view_contract: 'View Contract on Polygonscan'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch',
      direct_title: 'Talk to me',
      email_desc: 'Send a detailed email.',
      whatsapp_desc: 'Start a quick conversation.',
      linkedin_desc: 'Visit my professional profile.',
    },
  }
};

// Cria a instância do i18n
const i18n = createI18n({
  legacy: false, // Essencial para o modo Composition API
  locale: 'pt', // Define o idioma padrão
  fallbackLocale: 'en', // Idioma de fallback
  messages, // Carrega as traduções
});

export default i18n;
