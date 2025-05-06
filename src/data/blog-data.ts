import { Article, Author, Category } from '../types';

export const authors: Author[] = [
  {
    id: 1,
    name: 'Amit Sharma',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Senior Developer'
  },
  {
    id: 2,
    name: 'Priya Patel',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'UX Designer'
  },
  {
    id: 3,
    name: 'Raj Thapa',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'CTO'
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: 'Technology',
    slug: 'technology'
  },
  {
    id: 2,
    name: 'Design',
    slug: 'design'
  },
  {
    id: 3,
    name: 'Business',
    slug: 'business'
  },
  {
    id: 4,
    name: 'Artificial Intelligence',
    slug: 'ai'
  },
  {
    id: 5,
    name: 'Cyber Security',
    slug: 'cybersecurity'
  }
];

export const articles: Article[] = [
  {
    id: 1,
    title: 'कृत्रिम बुद्धिमत्ता (AI) ले नेपालको प्रविधि क्षेत्रमा ल्याएको परिवर्तनहरू',
    slug: 'artificial-intelligence-transforming-nepal-tech-industry',
    excerpt: 'नेपालको प्रविधि क्षेत्रमा कृत्रिम बुद्धिमत्ता कसरी प्रभावकारी भइरहेको छ र यसले ल्याउने अवसरहरू के-के छन्?',
    content: `
      <p>नेपालको प्रविधि क्षेत्रमा कृत्रिम बुद्धिमत्ता (Artificial Intelligence) को प्रयोग दिन प्रतिदिन बढिरहेको छ। विशेषगरी स्वास्थ्य, शिक्षा, कृषि र सेवा क्षेत्रमा यसको प्रयोग बढीरहेको पाइन्छ।</p>
      
      <h2>स्वास्थ्य क्षेत्रमा AI</h2>
      <p>नेपालका अस्पतालहरूमा AI प्रविधिको प्रयोग गरेर बिरामीहरूको उपचारमा सहयोग पुर्याइरहेका छन्। मेडिकल इमेजहरूको विश्लेषण, रोगको पहिचान र औषधिको सिफारिसमा यसले महत्वपूर्ण भूमिका खेल्छ।</p>
      
      <h2>शिक्षा क्षेत्रमा AI</h2>
      <p>कोभिड-१९ पछि अनलाइन शिक्षाको महत्व बढेको छ। AI प्रविधिको प्रयोग गरेर व्यक्तिगत सिकाइ अनुभव, स्वचालित मूल्यांकन र शिक्षकहरूलाई प्रशासनिक कार्यमा सहयोग गरिरहेको छ।</p>
      
      <h2>कृषि क्षेत्रमा AI</h2>
      <p>नेपालको अर्थतन्त्रको मुख्य आधार कृषि हो। AI प्रविधिको प्रयोग गरेर माटोको गुणस्तर अनुगमन, फसलको रोग पहिचान र कृषि उत्पादन अनुमान गर्न सहयोग गरिरहेको छ।</p>
      
      <h2>चुनौतीहरू र अवसरहरू</h2>
      <p>नेपालमा AI प्रविधिको विकासका लागि प्राविधिक जनशक्ति, पूर्वाधार र नीतिगत व्यवस्थाको कमी प्रमुख चुनौतीहरू हुन्। तर, यो क्षेत्रमा काम गर्ने स्टार्टअपहरूको संख्या बढ्दै गएको छ जसले रोजगारीका अवसरहरू सिर्जना गरेको छ।</p>
      
      <p>नेपालमा AI प्रविधिको भविष्य उज्ज्वल देखिन्छ। सरकारी र निजी क्षेत्रको सहकार्यमा यो क्षेत्रलाई अझ विकसित बनाउन सकिन्छ।</p>
    `,
    featuredImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: authors[0],
    category: categories[3],
    tags: ['AI', 'Technology', 'Nepal', 'Innovation'],
    publishedDate: '2025-02-15',
    readingTime: 5,
    isFeatured: true
  },
  {
    id: 2,
    title: 'Cybersecurity Challenges in the Modern Digital Landscape',
    slug: 'cybersecurity-challenges-modern-digital-landscape',
    excerpt: 'Exploring the evolving cybersecurity threats and solutions in today\'s interconnected world.',
    content: `
      <p>As businesses continue to digitize their operations, cybersecurity threats are becoming increasingly sophisticated and damaging. This article explores the current cybersecurity landscape and provides insights into protecting your digital assets.</p>
      
      <h2>The Evolving Threat Landscape</h2>
      <p>Cyber attacks have evolved from simple virus infections to complex, multi-stage operations targeting specific organizations. Ransomware, supply chain attacks, and social engineering remain the most prevalent forms of cyber threats in 2025.</p>
      
      <h2>Zero Trust Architecture</h2>
      <p>The concept of "never trust, always verify" has become central to modern cybersecurity strategies. Zero Trust Architecture assumes no user or system is trustworthy by default, regardless of whether they're inside or outside the organization's network.</p>
      
      <h2>AI in Cybersecurity</h2>
      <p>Artificial intelligence is being deployed both as a cybersecurity tool and as a weapon by attackers. AI-powered security systems can detect anomalies and respond to threats faster than human analysts, but attackers are also using AI to develop more sophisticated attack vectors.</p>
      
      <h2>Best Practices for Organizations</h2>
      <p>Implementing multi-factor authentication, regular security training for employees, keeping systems updated, and having a well-tested incident response plan are essential practices for organizations of all sizes.</p>
      
      <p>As we continue to embrace digital transformation, cybersecurity must remain at the forefront of business strategy rather than an afterthought. The cost of prevention is always lower than the cost of recovery.</p>
    `,
    featuredImage: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: authors[2],
    category: categories[4],
    tags: ['Cybersecurity', 'Digital', 'Protection', 'Threats'],
    publishedDate: '2025-01-28',
    readingTime: 6,
    isFeatured: false
  },
  {
    id: 3,
    title: 'The Future of Web Development: What to Expect in 2025',
    slug: 'future-web-development-2025',
    excerpt: 'Discover the emerging trends and technologies shaping the future of web development in 2025 and beyond.',
    content: `
      <p>Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging every year. In this article, we'll explore what the web development landscape looks like in 2025 and what skills developers need to stay relevant.</p>
      
      <h2>WebAssembly Dominance</h2>
      <p>WebAssembly (Wasm) has moved beyond its initial promise to become a standard part of web development. Complex applications previously confined to desktop environments now run efficiently in browsers, opening new possibilities for web applications.</p>
      
      <h2>AI-Assisted Development</h2>
      <p>AI coding assistants have transformed from novelties to essential development tools. They now handle routine coding tasks, suggest optimizations, and even help debug applications, allowing developers to focus on more creative and complex aspects of their work.</p>
      
      <h2>Edge Computing</h2>
      <p>The shift toward edge computing continues to accelerate, with more processing happening closer to the user rather than in centralized data centers. This has led to faster applications, reduced bandwidth usage, and new approaches to application architecture.</p>
      
      <h2>The Rise of No-Code and Low-Code</h2>
      <p>While not replacing traditional development, no-code and low-code platforms have found their place in the ecosystem, democratizing application creation and handling many common business applications.</p>
      
      <p>The successful web developer of 2025 is one who embraces these changes, focuses on areas where human creativity and problem-solving still outshine machine capabilities, and views AI tools as collaborators rather than threats.</p>
    `,
    featuredImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: authors[0],
    category: categories[0],
    tags: ['Web Development', 'Future Tech', 'Trends', 'JavaScript'],
    publishedDate: '2025-01-10',
    readingTime: 7,
    isFeatured: false
  },
  {
    id: 4,
    title: 'UX Design Principles That Drive User Engagement',
    slug: 'ux-design-principles-user-engagement',
    excerpt: 'Learn the key UX design principles that can dramatically improve user engagement and satisfaction with your digital products.',
    content: `
      <p>Creating engaging user experiences requires more than just aesthetic appeal. This article explores the fundamental UX design principles that drive meaningful user engagement and business results.</p>
      
      <h2>User-Centered Design</h2>
      <p>Successful products always begin with a deep understanding of user needs, behaviors, and pain points. User research should inform every aspect of the design process, from initial concepts to final implementation.</p>
      
      <h2>Cognitive Load Management</h2>
      <p>Users have limited cognitive resources. Designs that minimize unnecessary thinking, present clear hierarchies, and chunk information appropriately create more enjoyable and effective user experiences.</p>
      
      <h2>Emotional Design</h2>
      <p>Products that connect emotionally with users create stronger loyalty and satisfaction. This can be achieved through thoughtful personality, microcopy, animations, and an overall attention to how the product makes users feel during interactions.</p>
      
      <h2>Accessibility as a Foundation</h2>
      <p>Designing for accessibility isn't just about compliance—it creates better experiences for all users. Products built with accessibility in mind often feature clearer navigation, better contrast, and more thoughtful interaction patterns.</p>
      
      <p>When these principles work together, they create digital experiences that users naturally gravitate toward, understand intuitively, and genuinely enjoy using. In today's competitive digital landscape, these qualities translate directly to business success.</p>
    `,
    featuredImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: authors[1],
    category: categories[1],
    tags: ['UX Design', 'User Experience', 'Design Principles', 'Engagement'],
    publishedDate: '2025-01-05',
    readingTime: 8,
    isFeatured: false
  },
  {
    id: 5,
    title: 'Cloud-Native Development: Best Practices for Scalable Applications',
    slug: 'cloud-native-development-best-practices',
    excerpt: 'Explore the essential best practices for developing scalable, resilient cloud-native applications.',
    content: `
      <p>Cloud-native development has fundamentally changed how we build and deploy applications. This article covers the key practices that ensure your cloud applications remain scalable, resilient, and maintainable.</p>
      
      <h2>Containerization Strategy</h2>
      <p>Containers provide consistency across environments and enable applications to run reliably regardless of the infrastructure. Adopting a well-thought-out containerization strategy with proper image management is the foundation of cloud-native development.</p>
      
      <h2>Microservices Architecture</h2>
      <p>Breaking applications into smaller, independent services allows for better scalability, easier maintenance, and more targeted deployments. However, it's crucial to define clear service boundaries based on business capabilities rather than technical concerns.</p>
      
      <h2>Infrastructure as Code</h2>
      <p>Managing infrastructure through code rather than manual processes ensures consistency, enables version control, and facilitates reproducible deployments across environments.</p>
      
      <h2>Observability and Monitoring</h2>
      <p>Cloud-native applications require comprehensive monitoring beyond simple uptime checks. Implementing proper logging, metrics collection, and distributed tracing helps teams understand system behavior and quickly troubleshoot issues.</p>
      
      <p>The transition to cloud-native development brings significant benefits but requires a shift in both technical approaches and organizational mindsets. Teams that successfully adopt these practices position themselves to deliver more value to customers with greater efficiency and reliability.</p>
    `,
    featuredImage: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: authors[2],
    category: categories[0],
    tags: ['Cloud', 'DevOps', 'Microservices', 'Scalability'],
    publishedDate: '2024-12-15',
    readingTime: 9,
    isFeatured: false
  },
  {
    id: 6,
    title: 'Business Transformation Through Digital Innovation',
    slug: 'business-transformation-digital-innovation',
    excerpt: 'How companies are leveraging digital technologies to transform their business models and create new value.',
    content: `
      <p>Digital transformation has moved beyond buzzword status to become an essential strategy for business survival and growth. This article examines how organizations are successfully implementing digital innovations to transform their operations and create new value.</p>
      
      <h2>Customer Experience Reimagined</h2>
      <p>Leading companies are using digital technologies to create seamless, personalized customer journeys across all touchpoints. This customer-centric approach requires breaking down traditional departmental silos and reimagining processes from the outside in.</p>
      
      <h2>Data-Driven Decision Making</h2>
      <p>Organizations that excel at digital transformation build sophisticated data capabilities that inform every significant business decision. This means not just collecting data, but creating the infrastructure, tools, and culture to translate that data into actionable insights.</p>
      
      <h2>New Business Models</h2>
      <p>Digital technologies enable entirely new ways of creating and capturing value. From subscription services to platform business models, companies are finding innovative approaches that disrupt traditional industry boundaries.</p>
      
      <h2>Agile Organization</h2>
      <p>Successful digital transformation requires organizational agility—the ability to quickly respond to market changes and new opportunities. This often means adopting flatter structures, cross-functional teams, and more iterative approaches to work.</p>
      
      <p>The most successful digital transformations aren't just about implementing new technologies; they're comprehensive changes that touch every aspect of how a business operates. Companies that approach transformation with this holistic mindset are positioning themselves for long-term success in an increasingly digital world.</p>
    `,
    featuredImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: authors[1],
    category: categories[2],
    tags: ['Digital Transformation', 'Innovation', 'Business Strategy', 'Technology'],
    publishedDate: '2024-12-08',
    readingTime: 6,
    isFeatured: false
  }
];