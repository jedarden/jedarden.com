const projects = [
  {
    "id": "forge",
    "name": "FORGE",
    "tagline": "Federated Orchestration & Resource Generation Engine",
    "description": [
      "FORGE represents a paradigm shift in AI-powered development workflows. As an intelligent control panel for autonomous coding agents, it provides a unified interface for managing complex multi-agent orchestration, resource allocation, and federated task distribution. Unlike single-agent tools that limit you to one AI assistant at a time, FORGE orchestrates entire teams of specialized agents working in concert.",
      "At its core, FORGE solves the challenge of coordinating multiple AI agents working on different aspects of a software project simultaneously. It handles context management, prevents conflicting changes, and ensures that agents have access to the right resources at the right time. The system implements sophisticated scheduling algorithms that optimize for both speed and code quality, dynamically load-balancing tasks across available agents based on their current workload and specialization.",
      "One of FORGE's most powerful features is its multi-platform agent support. The system seamlessly integrates with Claude Code, OpenCode, Aider, Goose, and other popular autonomous coding frameworks. Each agent can be paired with different language models—from Anthropic's Claude to OpenAI's GPT-4, DeepSeek, GLM-4, and more. This flexibility allows teams to optimize for cost, capability, and specialized domain knowledge. A complex refactoring task might be assigned to Claude Code with Anthropic's Opus, while routine test generation goes to OpenCode with a more cost-effective model.",
      "The architecture employs a hub-and-spoke model where FORGE acts as the central orchestrator, maintaining a shared context pool that all agents can access. When Agent A modifies a file, FORGE immediately propagates that change to Agent B's context if they're working on related code. This prevents the classic multi-agent problem of conflicting edits and ensures consistency across the entire codebase. The system uses sophisticated diff algorithms and conflict detection to identify potential issues before they occur, automatically resolving simple conflicts and escalating complex ones for human review.",
      "Resource management is handled through an intelligent quota system. FORGE tracks token usage, API rate limits, and cost metrics across all agents and models. If you're approaching your API quota, the system automatically scales back non-critical tasks or switches to more economical models. This prevents unexpected bills and ensures critical work always has the resources it needs. The platform provides real-time cost analytics, showing exactly how much each agent operation costs and helping teams optimize their AI development budget.",
      "The real-time monitoring dashboard gives complete visibility into what every agent is doing. You can see which files are being modified, what prompts are being sent, token consumption rates, and success metrics for each task. When an agent encounters an error or gets stuck, FORGE's automatic recovery system kicks in—retrying with different prompts, switching to a different model, or breaking the task into smaller subtasks. This resilience is crucial for production environments where autonomous agents need to operate reliably without constant human supervision.",
      "FORGE excels at intelligent task decomposition and allocation. When you feed it a high-level objective like 'add user authentication to the web app,' it breaks this down into concrete subtasks: database schema changes, API endpoint creation, frontend forms, session management, security testing, and documentation updates. Each subtask is then assigned to the most appropriate agent based on the agent's specialization, current workload, and the estimated complexity. The system can parallelize independent tasks—one agent working on backend auth while another builds the login UI—dramatically reducing overall completion time.",
      "Integration with existing development workflows is seamless. FORGE connects to your Git repository, CI/CD pipelines, issue trackers, and project management tools. When a GitHub issue is created, FORGE can automatically spawn an agent to investigate and propose a fix. When a pull request fails CI tests, an agent can analyze the failure, fix the issue, and resubmit. The system respects your development standards, running code formatters, linters, and test suites before committing any changes. It can even write commit messages that match your team's conventions.",
      "Security and compliance are built into the core architecture. FORGE implements role-based access control, ensuring agents can only modify files and access resources they're authorized for. All agent interactions are logged with full audit trails, making it easy to understand what changed, when, and why. For regulated industries, FORGE can enforce compliance policies—requiring human review for certain types of changes, preventing modifications to critical infrastructure, or ensuring all code meets specific quality gates before deployment.",
      "The platform's scalability is proven in production environments managing dozens of concurrent agents. Whether you're a solo developer using FORGE to coordinate three agents on a side project, or an enterprise team orchestrating fifty agents across multiple microservices, the system scales gracefully. The distributed architecture can run on a single laptop or scale across cloud infrastructure for enterprise deployments. FORGE's event-driven design ensures minimal latency—agents receive task assignments and context updates in milliseconds.",
      "Looking forward, FORGE is evolving toward fully autonomous development operations. The vision is a system where you can assign high-level business objectives—'build a customer analytics dashboard' or 'optimize database performance by 50%'—and FORGE coordinates entire teams of specialized agents to research, design, implement, test, and deploy the solution. With continuous learning from past tasks, the system gets better at estimating effort, choosing the right models for each job, and preventing common pitfalls. This represents the future of software development: humans focusing on product vision and architecture while AI agents handle the implementation details at unprecedented scale and speed."
    ],
    "tech": [
      "Python",
      "AI Orchestration",
      "Distributed Systems",
      "Task Management"
    ],
    "github": "https://github.com/jedarden/forge",
    "demo": null,
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect x=\"40\" y=\"60\" width=\"120\" height=\"100\" rx=\"8\" fill=\"#8B1A1A\" opacity=\"0.9\"/>\n                    <rect x=\"60\" y=\"80\" width=\"30\" height=\"30\" rx=\"4\" fill=\"white\"/>\n                    <rect x=\"110\" y=\"80\" width=\"30\" height=\"30\" rx=\"4\" fill=\"white\"/>\n                    <rect x=\"60\" y=\"120\" width=\"80\" height=\"8\" rx=\"4\" fill=\"white\"/>\n                    <rect x=\"60\" y=\"135\" width=\"60\" height=\"8\" rx=\"4\" fill=\"white\"/>\n                    <circle cx=\"150\" cy=\"50\" r=\"15\" fill=\"#B8534E\"/>\n                    <path d=\"M145 45 L155 50 L145 55\" stroke=\"white\" stroke-width=\"3\" fill=\"none\"/>\n                </svg>",
    "visual": "<div class=\"project-visual visual-forge\">\n                            <div class=\"forge-pipes\">\n                                <div class=\"pipe pipe-1\"><div class=\"data-flow\"></div></div>\n                                <div class=\"pipe pipe-2\"><div class=\"data-flow\"></div></div>\n                                <div class=\"pipe pipe-3\"><div class=\"data-flow\"></div></div>\n                                <div class=\"pipe pipe-4\"><div class=\"data-flow\"></div></div>\n                                <div class=\"pipe pipe-5\"><div class=\"data-flow\"></div></div>\n                                <div class=\"pipe pipe-6\"><div class=\"data-flow\"></div></div>\n                            </div>\n                            <div class=\"agent-combo agent-1\"><span class=\"agent-name\">Claude Code</span><span class=\"model-name\">Anthropic</span></div>\n                            <div class=\"agent-combo agent-2\"><span class=\"agent-name\">OpenCode</span><span class=\"model-name\">OpenAI</span></div>\n                            <div class=\"agent-combo agent-3\"><span class=\"agent-name\">Claude Code</span><span class=\"model-name\">GLM-4</span></div>\n                            <div class=\"agent-combo agent-4\"><span class=\"agent-name\">Goose</span><span class=\"model-name\">GLM-4</span></div>\n                            <div class=\"agent-combo agent-5\"><span class=\"agent-name\">OpenCode</span><span class=\"model-name\">DeepSeek</span></div>\n                            <div class=\"agent-combo agent-6\"><span class=\"agent-name\">Aider</span><span class=\"model-name\">Anthropic</span></div>\n                            <div class=\"control-center\"><div class=\"forge-label\">FORGE</div><div class=\"forge-subtitle\">Multi-Agent<br/>Orchestrator</div></div>\n                        </div>"
  },
  {
    "id": "sunsim",
    "name": "Sun Simulator",
    "tagline": "Interactive Sun Position Visualization",
    "description": [
      "The Sun Simulator is a sophisticated web application that visualizes solar position throughout the day and across seasons with stunning accuracy. It combines astronomical calculations with an intuitive compass rose interface to help photographers, architects, solar installers, and outdoor enthusiasts understand exactly where the sun will be at any given time and location. The interactive map-based interface makes celestial mechanics accessible to everyone, transforming complex astronomical data into intuitive visualizations.",
      "## Astronomical Precision",
      "The application calculates solar azimuth and elevation using precise astronomical algorithms based on Jean Meeus's implementations, accounting for your exact latitude and longitude down to the meter. It factors in atmospheric refraction, the equation of time, solar declination variations, and even the slight differences caused by Earth's elliptical orbit. Users can scrub through time to see how sunlight angles change throughout the day, compare different seasons with solstice and equinox presets, and identify optimal times for solar exposure or shade with minute-by-minute precision.",
      "The compass rose visualization makes it immediately clear which direction the sun rises and sets from any location on Earth, with precise azimuth readings overlaid on an interactive map powered by Leaflet. The sun path arc shows the entire trajectory across the sky, with markers for sunrise, solar noon, and sunset. Color-coded zones indicate golden hour periods, blue hour transitions, and civil/nautical/astronomical twilight phases—critical information for photographers planning shoots.",
      "## Interactive Features",
      "Built with modern web technologies including Canvas for high-performance rendering, the simulator features smooth 60fps animations, responsive touch controls optimized for mobile devices, and real-time calculations that update instantaneously as you adjust location or time parameters. The timeline scrubber allows you to play through an entire day's sun movement in seconds, or advance frame-by-frame for precise analysis. Date controls let you jump to solstices, equinoxes, or any arbitrary date to compare seasonal variations.",
      "The location picker integrates with browser geolocation for instant positioning, or accepts manual coordinate input for planning trips to unfamiliar locations. Search functionality powered by geocoding APIs lets you enter city names, addresses, or landmarks. The map layer supports multiple basemaps—satellite imagery, topographical maps, or street views—giving context to the sun's position relative to local terrain and structures.",
      "## Professional Applications",
      "For solar panel installers, the simulator calculates optimal panel angles for maximum energy capture throughout the year, shows shadow patterns cast by nearby buildings or trees, and estimates seasonal energy production variations. The data export feature provides detailed tables of solar angles, sunrise/sunset times, and day length for entire years, enabling precise system sizing and performance predictions.",
      "Architects and building designers use the tool to analyze natural lighting opportunities, plan window placements for passive solar heating, design overhangs for summer shading while allowing winter sun penetration, and ensure compliance with daylight access regulations. The visualization clearly shows how sunlight will enter spaces at different times of day and year, enabling evidence-based design decisions that optimize for energy efficiency and occupant comfort.",
      "Photographers leverage the simulator for planning landscape shots during golden hour, determining when sunlight will illuminate specific features from desired angles, scheduling portrait sessions with optimal natural lighting, and scouting locations remotely before committing to travel. The ability to preview exactly where and when the sun will be eliminates guesswork and ensures you're in the right place at the right time.",
      "## Educational Value",
      "Beyond professional applications, the Sun Simulator serves as an educational tool that makes celestial mechanics intuitive and accessible. Students can observe how Earth's axial tilt causes seasonal variations in sun path, understand why summer days are longer than winter days at different latitudes, and visualize the midnight sun phenomenon in polar regions or equatorial sun patterns near the equator.",
      "The tool demonstrates why solar panels should be tilted differently in different locations, how sundials work and why they need latitude-specific designs, and why buildings in the northern hemisphere have south-facing windows for maximum solar gain while southern hemisphere buildings favor north-facing orientations. These concepts, often abstract in textbooks, become immediately clear through interactive visualization.",
      "## Technical Implementation",
      "The implementation uses SunCalc.js for astronomical calculations, providing sub-degree accuracy across all latitudes and dates. Canvas rendering ensures smooth performance even on older devices, with careful optimization of draw calls and efficient memory management. The responsive design adapts seamlessly from desktop browsers to mobile phones, maintaining full functionality across all screen sizes.",
      "Real-time performance is achieved through incremental calculations—only recomputing changed values rather than recalculating everything on each frame. State management keeps the UI snappy even during rapid timeline scrubbing, and Web Workers handle complex calculations off the main thread to prevent UI blocking. The result is a fluid, responsive experience that feels instant despite the mathematical complexity happening behind the scenes."
    ],
    "tech": [
      "JavaScript",
      "Canvas",
      "Astronomy",
      "Geolocation"
    ],
    "github": "https://sunsim.jedarden.com",
    "demo": "https://sunsim.jedarden.com",
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                <circle cx=\"100\" cy=\"100\" r=\"30\" fill=\"#B8534E\"/>\n                <line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"60\" stroke=\"#A52A2A\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                <line x1=\"100\" y1=\"140\" x2=\"100\" y2=\"160\" stroke=\"#A52A2A\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                <line x1=\"40\" y1=\"100\" x2=\"60\" y2=\"100\" stroke=\"#A52A2A\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                <line x1=\"140\" y1=\"100\" x2=\"160\" y2=\"100\" stroke=\"#A52A2A\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                <line x1=\"55\" y1=\"55\" x2=\"70\" y2=\"70\" stroke=\"#A52A2A\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                <line x1=\"145\" y1=\"145\" x2=\"130\" y2=\"130\" stroke=\"#A52A2A\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                <line x1=\"145\" y1=\"55\" x2=\"130\" y2=\"70\" stroke=\"#A52A2A\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                <line x1=\"55\" y1=\"145\" x2=\"70\" y2=\"130\" stroke=\"#A52A2A\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                <circle cx=\"100\" cy=\"160\" r=\"5\" fill=\"#8B1A1A\"/>\n                <path d=\"M60 160 Q100 140 140 160\" stroke=\"#1D1D1F\" stroke-width=\"2\" fill=\"none\" opacity=\"0.3\"/>\n            </svg>",
    "visual": "<div class=\"project-visual visual-sunsim\">\n                            <div class=\"map-background\"></div>\n                            <svg class=\"sun-arc\" viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path class=\"arc-path\" d=\"M 40 250 Q 200 50 360 250\" fill=\"none\" stroke=\"rgba(253, 184, 19, 0.4)\" stroke-width=\"3\" stroke-dasharray=\"5,5\"/>\n                                <circle class=\"sun-marker\" r=\"12\" fill=\"#FDB813\">\n                                    <animateMotion dur=\"8s\" repeatCount=\"indefinite\">\n                                        <mpath href=\"#sunPath\"/>\n                                    </animateMotion>\n                                </circle>\n                                <path id=\"sunPath\" d=\"M 40 250 Q 200 50 360 250\" fill=\"none\"/>\n                            </svg>\n                            <div class=\"compass-rose\">\n                                <div class=\"compass-direction n\">N</div>\n                                <div class=\"compass-direction s\">S</div>\n                                <div class=\"compass-direction e\">E</div>\n                                <div class=\"compass-direction w\">W</div>\n                            </div>\n                            <div class=\"time-indicators\">\n                                <span class=\"time-label sunrise\">🌅 6 AM</span>\n                                <span class=\"time-label noon\">☀️ 12 PM</span>\n                                <span class=\"time-label sunset\">🌇 6 PM</span>\n                            </div>\n                        </div>"
  },
  {
    "id": "face",
    "name": "Face Detection",
    "tagline": "Real-Time Face Recognition System",
    "description": [
      "This comprehensive face detection system delivers production-ready real-time facial recognition using face-api.js and TensorFlow.js. It runs entirely in the browser, providing instant face detection, landmark identification, and facial expression analysis without requiring server-side processing or compromising user privacy. The client-side architecture means sensitive biometric data never leaves the user's device, making it ideal for privacy-sensitive applications and GDPR-compliant deployments.",
      "## Core Capabilities",
      "The system detects multiple faces simultaneously in real-time video streams or static images, with no practical limit on the number of faces processed per frame. For each detected face, it identifies 68 facial landmarks with sub-pixel accuracy—points marking eyes, eyebrows, nose, mouth, and jaw contours. These landmarks enable precise face alignment, 3D head pose estimation, and detailed facial geometry analysis. The system estimates age within a 5-year range and determines gender with over 95% accuracy across diverse demographics.",
      "Expression recognition goes beyond simple smile detection, classifying seven distinct emotional states: happy, sad, surprised, neutral, angry, fearful, and disgusted. The system outputs confidence scores for each emotion, allowing nuanced interpretation of mixed or subtle expressions. This multi-label classification means it can detect complex emotional states like 'slightly happy but mostly neutral' or 'surprised and fearful simultaneously.'",
      "Face recognition functionality enables identity verification by comparing detected faces against a database of known individuals. The system generates 128-dimensional face descriptors (embeddings) that capture unique facial characteristics while remaining compact for efficient storage and comparison. Matching uses Euclidean distance in embedding space, with configurable similarity thresholds to balance false positive and false negative rates based on your security requirements.",
      "## Performance & Optimization",
      "All processing happens client-side using WebGL-accelerated neural networks, achieving smooth 30+ FPS frame rates even on mid-range mobile devices. The system intelligently uses WebGL for GPU acceleration when available, falling back to CPU-based computation on older devices while maintaining acceptable performance. Memory usage is carefully managed through frame pooling and efficient tensor operations, preventing the memory leaks common in client-side ML applications.",
      "Three model variants are available to balance accuracy and speed: the Tiny models prioritize real-time performance for resource-constrained devices, delivering 60+ FPS with slightly reduced accuracy. Standard models provide an optimal balance for most use cases, maintaining high accuracy at 30 FPS on typical hardware. High-accuracy models maximize detection quality for scenarios where precision matters more than speed, such as photo analysis or forensic applications.",
      "The inference pipeline is optimized with several techniques: input image scaling reduces computation for distant faces while maintaining quality for close-ups, region-of-interest tracking minimizes redundant processing by focusing on areas where faces are likely to appear, and temporal smoothing across video frames reduces jitter and improves landmark stability. These optimizations combine to deliver production-grade performance without requiring expensive hardware.",
      "## Privacy-First Architecture",
      "By processing everything in the browser, the system ensures biometric data never leaves the user's device. This eliminates server-side storage of facial data, prevents potential data breaches or unauthorized access, satisfies GDPR right-to-be-forgotten requirements automatically (data only exists in browser memory), and allows offline operation without network connectivity. For privacy-sensitive applications like healthcare, education, or consumer products, this architecture provides robust security guarantees that server-based systems cannot match.",
      "The system includes privacy controls allowing users to see exactly what data is being captured, delete their face descriptors at any time, and opt out of recognition features while still using basic detection. Transparency is built in—the code is open source, auditable, and contains no telemetry or hidden data collection. This makes it suitable for applications in regions with strict privacy regulations or privacy-conscious user bases.",
      "## Production Deployment",
      "Built with a focus on both research and production use, the repository includes comprehensive documentation covering API usage, integration patterns, and troubleshooting guides. Docker deployment configurations enable easy scaling across multiple instances, with load balancing support for high-traffic applications. Performance optimization guides help developers tune the system for their specific use cases, covering topics like model selection, hardware acceleration, and batch processing strategies.",
      "The system has been tested across various lighting conditions from bright sunlight to low-light indoor environments, camera angles including extreme pitch and yaw, and demographic groups to ensure robust detection across age, gender, and ethnicity. Benchmark results demonstrate >98% detection accuracy on standard face datasets, with particularly strong performance on challenging scenarios like partially occluded faces or profile views.",
      "## Real-World Applications",
      "Attendance systems use the technology to automate check-ins without physical contact, speeding up entry processes while maintaining accurate records. The system can handle crowded environments with dozens of faces in frame, matching each against employee databases in milliseconds. Integration with access control systems enables touchless door unlocking, time tracking, and occupancy monitoring.",
      "Security applications leverage continuous monitoring capabilities to detect unauthorized individuals, track movement patterns across camera views, and alert on suspicious behavior combined with expression analysis. The multi-face detection enables crowd monitoring, while the landmark tracking can identify individuals attempting to obscure their faces or use disguises.",
      "Photo organization tools use the face recognition to automatically tag people in personal photo collections, create albums grouped by person, and find all photos of specific individuals across years of digital archives. The client-side processing means users' family photos never need to be uploaded to third-party servers, addressing a major privacy concern with cloud-based photo services."
    ],
    "tech": [
      "TensorFlow.js",
      "face-api.js",
      "WebGL",
      "Docker"
    ],
    "github": "https://face.jedarden.com",
    "demo": "https://face.jedarden.com",
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                <circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"none\" stroke=\"#8B1A1A\" stroke-width=\"3\"/>\n                <circle cx=\"80\" cy=\"85\" r=\"8\" fill=\"#A52A2A\"/>\n                <circle cx=\"120\" cy=\"85\" r=\"8\" fill=\"#A52A2A\"/>\n                <path d=\"M75 120 Q100 135 125 120\" stroke=\"#B8534E\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/>\n                <rect x=\"60\" y=\"75\" width=\"30\" height=\"3\" fill=\"#8B1A1A\" opacity=\"0.6\"/>\n                <rect x=\"110\" y=\"75\" width=\"30\" height=\"3\" fill=\"#8B1A1A\" opacity=\"0.6\"/>\n                <circle cx=\"70\" cy=\"50\" r=\"3\" fill=\"#A52A2A\"/>\n                <circle cx=\"130\" cy=\"50\" r=\"3\" fill=\"#A52A2A\"/>\n                <circle cx=\"50\" cy=\"100\" r=\"3\" fill=\"#A52A2A\"/>\n                <circle cx=\"150\" cy=\"100\" r=\"3\" fill=\"#A52A2A\"/>\n            </svg>",
    "visual": "<div class=\"project-visual visual-face\">\n                            <div class=\"face-outline\">\n                                <div class=\"scan-line\"></div>\n                                <div class=\"detection-point\"></div>\n                                <div class=\"detection-point\"></div>\n                                <div class=\"detection-point\"></div>\n                            </div>\n                        </div>"
  },
  {
    "id": "gait",
    "name": "Gait Analysis",
    "tagline": "Real-Time Human Pose & Motion Tracking",
    "description": [
      "This advanced pose detection system leverages TensorFlow.js to perform real-time human pose estimation and gait analysis directly in the browser. It tracks 17 key body points including joints, estimates 3D positioning, and analyzes movement patterns to provide insights into walking patterns, posture, and biomechanics—all without requiring specialized hardware.",
      "The system detects and tracks multiple people simultaneously, calculates joint angles and movement velocities, identifies gait abnormalities, measures stride length and cadence, and provides real-time feedback on posture and form. It's been optimized for both accuracy and performance, running smoothly at 30+ FPS on modern devices while maintaining high-quality pose estimations.",
      "Applications range from fitness training and physical therapy to sports performance analysis and ergonomic assessments. The system includes visualization tools that overlay skeletal structures on video feeds, historical tracking that shows movement patterns over time, and export capabilities for detailed biomechanical analysis. Whether you're a physical therapist tracking patient recovery, an athlete optimizing running form, or a researcher studying human movement, this system provides accessible, accurate pose detection without requiring expensive motion capture equipment."
    ],
    "tech": [
      "TensorFlow.js",
      "PoseNet",
      "Computer Vision",
      "WebGL"
    ],
    "github": "https://gait.jedarden.com",
    "demo": "https://gait.jedarden.com",
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                <circle cx=\"100\" cy=\"40\" r=\"15\" fill=\"#A52A2A\"/>\n                <rect x=\"95\" y=\"55\" width=\"10\" height=\"40\" rx=\"5\" fill=\"#8B1A1A\"/>\n                <rect x=\"85\" y=\"65\" width=\"15\" height=\"5\" rx=\"2.5\" fill=\"#8B1A1A\"/>\n                <rect x=\"110\" y=\"65\" width=\"15\" height=\"5\" rx=\"2.5\" fill=\"#8B1A1A\"/>\n                <rect x=\"93\" y=\"95\" width=\"7\" height=\"40\" rx=\"3.5\" fill=\"#B8534E\"/>\n                <rect x=\"107\" y=\"95\" width=\"7\" height=\"40\" rx=\"3.5\" fill=\"#B8534E\"/>\n                <rect x=\"88\" y=\"135\" width=\"8\" height=\"25\" rx=\"4\" fill=\"#A52A2A\"/>\n                <rect x=\"110\" y=\"135\" width=\"8\" height=\"25\" rx=\"4\" fill=\"#A52A2A\"/>\n                <circle cx=\"100\" cy=\"100\" r=\"3\" fill=\"#8B1A1A\"/>\n                <circle cx=\"85\" cy=\"67\" r=\"3\" fill=\"#8B1A1A\"/>\n                <circle cx=\"115\" cy=\"67\" r=\"3\" fill=\"#8B1A1A\"/>\n                <circle cx=\"96\" cy=\"95\" r=\"3\" fill=\"#B8534E\"/>\n                <circle cx=\"110\" cy=\"95\" r=\"3\" fill=\"#B8534E\"/>\n            </svg>",
    "visual": "<div class=\"project-visual visual-gait\">\n                            <svg class=\"skeleton-figure\" viewBox=\"0 0 80 160\"><circle cx=\"40\" cy=\"20\" r=\"15\" fill=\"#8B1A1A\"/><line x1=\"40\" y1=\"35\" x2=\"40\" y2=\"80\" stroke=\"#8B1A1A\" stroke-width=\"4\"/><line x1=\"40\" y1=\"50\" x2=\"20\" y2=\"70\" stroke=\"#A52A2A\" stroke-width=\"3\"/><line x1=\"40\" y1=\"50\" x2=\"60\" y2=\"70\" stroke=\"#A52A2A\" stroke-width=\"3\"/><line x1=\"40\" y1=\"80\" x2=\"25\" y2=\"120\" stroke=\"#8B1A1A\" stroke-width=\"3\"/><line x1=\"40\" y1=\"80\" x2=\"55\" y2=\"120\" stroke=\"#8B1A1A\" stroke-width=\"3\"/></svg>\n                        </div>"
  },
  {
    "id": "options",
    "name": "Options Trading",
    "tagline": "Real-Time Options Analytics Platform",
    "description": [
      "A sophisticated options trading analytics platform that provides real-time market data analysis, volatility surface visualization, and advanced options pricing models. The system aggregates data from multiple exchanges, calculates Greeks (Delta, Gamma, Theta, Vega), and identifies profitable trading opportunities through machine learning pattern recognition.",
      "The platform features interactive volatility smile charts, automated spread strategy identification, real-time P&L tracking, and backtesting capabilities for validating strategies against historical data. It implements Black-Scholes and binomial tree pricing models with adjustments for American-style options, dividend payments, and early exercise optimization. Risk management tools include portfolio Greeks analysis, maximum loss calculations, and margin requirement estimations.",
      "Built for both professional traders and sophisticated retail investors, the platform includes customizable alerts for unusual options activity, earnings plays, and volatility spikes. The system processes thousands of options contracts per second, providing institutional-grade analytics through an intuitive web interface. Whether you're analyzing iron condors, butterflies, or directional plays, this platform gives you the data and tools to make informed options trading decisions."
    ],
    "tech": [
      "Python",
      "React",
      "WebSockets",
      "Financial Models"
    ],
    "github": null,
    "demo": "https://options.jedarden.com",
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M30 150 L50 120 L70 130 L90 90 L110 100 L130 60 L150 70 L170 40\"\n                      stroke=\"#8B1A1A\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                <path d=\"M30 150 L50 140 L70 145 L90 130 L110 135 L130 120 L150 125 L170 110\"\n                      stroke=\"#A52A2A\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.6\"/>\n                <circle cx=\"130\" cy=\"60\" r=\"6\" fill=\"#B8534E\"/>\n                <rect x=\"25\" y=\"155\" width=\"150\" height=\"2\" fill=\"#1D1D1F\" opacity=\"0.3\"/>\n                <rect x=\"28\" y=\"30\" width=\"2\" height=\"127\" fill=\"#1D1D1F\" opacity=\"0.3\"/>\n                <text x=\"140\" y=\"50\" font-family=\"monospace\" font-size=\"14\" fill=\"#8B1A1A\" font-weight=\"bold\">↑</text>\n            </svg>",
    "visual": "<div class=\"project-visual visual-options\"><div class=\"price-line\"></div></div>"
  },
  {
    "id": "newstrading",
    "name": "News Trading",
    "tagline": "AI-Powered News Sentiment Trading",
    "description": [
      "An automated trading system that leverages natural language processing to analyze breaking news, social media sentiment, and financial reports in real-time, executing trades based on market-moving information before it's fully priced in. The system monitors thousands of news sources, filters for relevance, and uses transformer-based language models to assess sentiment and likely market impact.",
      "The platform ingests news from RSS feeds, Twitter/X, financial APIs, press releases, and regulatory filings, processing each article through multiple NLP models to extract entities (companies, people, locations), classify sentiment (positive, negative, neutral), and estimate market impact probability. It correlates news events with historical price movements to predict likely market reactions and executes trades within milliseconds of significant news breaking.",
      "Risk management is paramount—the system includes position sizing based on confidence scores, automatic stop-losses, exposure limits per news category, and circuit breakers for unusual market conditions. Backtesting shows the strategy's effectiveness across various market regimes, particularly around earnings announcements, FDA approvals, and geopolitical events. The dashboard provides real-time visualization of news flow, sentiment trends, active positions, and performance metrics, enabling traders to monitor algorithmic decisions and override when necessary."
    ],
    "tech": [
      "Python",
      "NLP",
      "Transformers",
      "Trading Algorithms"
    ],
    "github": null,
    "demo": "https://news-trading.jedarden.com",
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"40\" y=\"50\" width=\"120\" height=\"100\" rx=\"4\" fill=\"none\" stroke=\"#8B1A1A\" stroke-width=\"3\"/>\n                <rect x=\"50\" y=\"65\" width=\"50\" height=\"3\" fill=\"#A52A2A\"/>\n                <rect x=\"50\" y=\"75\" width=\"40\" height=\"3\" fill=\"#1D1D1F\" opacity=\"0.3\"/>\n                <rect x=\"50\" y=\"82\" width=\"45\" height=\"3\" fill=\"#1D1D1F\" opacity=\"0.3\"/>\n                <rect x=\"110\" y=\"65\" width=\"40\" height=\"25\" fill=\"#B8534E\" opacity=\"0.3\"/>\n                <path d=\"M115 95 L125 110 L135 100 L145 115\" stroke=\"#8B1A1A\" stroke-width=\"2\" fill=\"none\"/>\n                <rect x=\"50\" y=\"100\" width=\"50\" height=\"3\" fill=\"#A52A2A\"/>\n                <rect x=\"50\" y=\"110\" width=\"40\" height=\"3\" fill=\"#1D1D1F\" opacity=\"0.3\"/>\n                <rect x=\"50\" y=\"117\" width=\"35\" height=\"3\" fill=\"#1D1D1F\" opacity=\"0.3\"/>\n                <circle cx=\"165\" cy=\"45\" r=\"8\" fill=\"#B8534E\"/>\n                <text x=\"161\" y=\"50\" font-family=\"monospace\" font-size=\"12\" fill=\"white\" font-weight=\"bold\">!</text>\n            </svg>",
    "visual": "<div class=\"project-visual visual-newstrading\">\n                            <div class=\"news-ticker\">📰 Breaking: Tech Stock Soars +15%</div>\n                            <div class=\"news-ticker\">📈 Market Alert: Fed Announcement</div>\n                            <div class=\"news-ticker\">💹 Earnings Beat Expectations</div>\n                        </div>"
  },
  {
    "id": "asteroid",
    "name": "Asteroid",
    "tagline": "Physics-Based Space Simulation",
    "description": [
      "An immersive browser-based space simulation that combines classic arcade gameplay with realistic orbital mechanics. Players navigate through procedurally generated asteroid fields, managing momentum, gravitational forces, and resource constraints while exploring the physics of space travel in an engaging, educational format.",
      "The simulation implements Newtonian physics with accurate momentum conservation, gravitational attraction between celestial bodies, and realistic collision detection. Unlike traditional arcade games, movement requires planning—thrust changes velocity rather than position, creating an intuitive introduction to orbital mechanics concepts like Hohmann transfers and gravity assists. The procedural generation ensures each playthrough offers unique challenges and discoveries.",
      "Built with HTML5 Canvas and optimized JavaScript, the game runs smoothly at 60 FPS while simulating dozens of objects with full physics calculations. Features include progressive difficulty scaling, achievement systems, leaderboards, and educational overlays explaining the physics principles in action. Whether you're a space enthusiast, physics student, or casual gamer, Asteroid offers an entertaining way to build intuition about how objects move in space—no atmosphere, no friction, just pure Newtonian mechanics."
    ],
    "tech": [
      "JavaScript",
      "Canvas",
      "Physics Engine",
      "Game Development"
    ],
    "github": null,
    "demo": "https://asteroid.jedarden.com",
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                <polygon points=\"100,30 130,70 160,65 140,100 165,135 125,130 100,170 75,130 35,135 60,100 40,65 70,70\"\n                         fill=\"#86868B\" stroke=\"#1D1D1F\" stroke-width=\"2\"/>\n                <circle cx=\"90\" cy=\"70\" r=\"8\" fill=\"#5A5A5F\"/>\n                <circle cx=\"120\" cy=\"90\" r=\"6\" fill=\"#5A5A5F\"/>\n                <circle cx=\"100\" cy=\"120\" r=\"10\" fill=\"#5A5A5F\"/>\n                <polygon points=\"180,40 185,45 180,50 175,45\" fill=\"#B8534E\"/>\n                <line x1=\"180\" y1=\"40\" x2=\"165\" y2=\"55\" stroke=\"#B8534E\" stroke-width=\"2\"/>\n                <circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"white\" opacity=\"0.6\"/>\n                <circle cx=\"150\" cy=\"40\" r=\"2\" fill=\"white\" opacity=\"0.6\"/>\n                <circle cx=\"160\" cy=\"150\" r=\"2.5\" fill=\"white\" opacity=\"0.6\"/>\n            </svg>",
    "visual": "<div class=\"project-visual visual-asteroid\">\n                            <div class=\"stars\">\n                                <div class=\"star\" style=\"top: 20%; left: 30%;\"></div>\n                                <div class=\"star\" style=\"top: 40%; left: 60%;\"></div>\n                                <div class=\"star\" style=\"top: 70%; left: 20%;\"></div>\n                            </div>\n                            <div class=\"asteroid\"></div>\n                            <div class=\"asteroid\"></div>\n                        </div>"
  },
  {
    "id": "clasp",
    "name": "CLASP",
    "tagline": "Claude Language Agent Super Proxy",
    "description": [
      "CLASP breaks down the walls between AI coding platforms by acting as a universal translation layer that enables Claude Code workflows to run seamlessly with any LLM provider. It's the bridge that connects best-in-class development tools with the flexibility of choosing your preferred language model.",
      "The proxy intelligently translates API calls, manages authentication across multiple providers, handles rate limiting, and ensures consistent behavior regardless of the underlying model. CLASP supports streaming responses, function calling, multi-turn conversations, and all the advanced features that modern AI coding workflows require.",
      "Whether you're working with GPT-4, open-source models like Llama, or emerging providers, CLASP maintains full compatibility with the Claude Code tool ecosystem. It includes built-in cost optimization, automatic fallback handling, and detailed analytics about model performance and usage patterns. This allows development teams to experiment with different models without rewriting their entire workflow infrastructure."
    ],
    "tech": [
      "Python",
      "LLM Proxy",
      "Multi-Provider",
      "API Gateway"
    ],
    "github": "https://github.com/jedarden/CLASP",
    "demo": null,
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"30\" y=\"80\" width=\"60\" height=\"40\" rx=\"6\" fill=\"#8B1A1A\"/>\n                <rect x=\"110\" y=\"80\" width=\"60\" height=\"40\" rx=\"6\" fill=\"#A52A2A\"/>\n                <path d=\"M90 100 L110 100\" stroke=\"#B8534E\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n                <circle cx=\"90\" cy=\"100\" r=\"8\" fill=\"#B8534E\"/>\n                <circle cx=\"110\" cy=\"100\" r=\"8\" fill=\"#B8534E\"/>\n                <text x=\"50\" y=\"105\" font-family=\"monospace\" font-size=\"16\" fill=\"white\" font-weight=\"bold\">AI</text>\n                <text x=\"127\" y=\"105\" font-family=\"monospace\" font-size=\"16\" fill=\"white\" font-weight=\"bold\">LLM</text>\n            </svg>",
    "visual": "<div class=\"project-visual\"><div class=\"tech-flow\"><div class=\"tech-box\">Claude Code</div><div class=\"flow-arrow\">→</div><div class=\"tech-box\">CLASP</div><div class=\"flow-arrow\">→</div><div class=\"tech-box\">Any LLM</div></div></div>"
  },
  {
    "id": "ccdash",
    "name": "CCDash",
    "tagline": "Lightweight TUI Dashboard",
    "description": [
      "CCDash brings the elegance of modern web dashboards to the terminal, creating a beautiful, efficient monitoring solution for developers who live and breathe the command line. It provides comprehensive visibility into system resources, Claude Code token consumption, and tmux session management—all in a sleek terminal interface.",
      "The dashboard features real-time graphs of CPU, memory, and network usage with customizable refresh rates and color themes. For Claude Code users, it tracks token usage across sessions, estimates costs, alerts on approaching limits, and provides insights into which operations consume the most tokens. The tmux integration lets you monitor and manage multiple terminal sessions directly from the dashboard.",
      "Built with Python's rich library ecosystem, CCDash is lightweight, fast, and resource-efficient. It supports plugins for extending functionality, exports metrics for integration with other monitoring tools, and includes a scriptable API for automation. Whether you're managing a single development machine or monitoring multiple remote servers, CCDash gives you the insights you need without leaving your terminal comfort zone."
    ],
    "tech": [
      "Python",
      "TUI",
      "Monitoring",
      "Rich Library"
    ],
    "github": "https://github.com/jedarden/ccdash",
    "demo": null,
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"30\" y=\"50\" width=\"140\" height=\"100\" rx=\"4\" fill=\"#1D1D1F\"/>\n                <rect x=\"40\" y=\"60\" width=\"120\" height=\"80\" fill=\"#0A0A0A\"/>\n                <text x=\"50\" y=\"80\" font-family=\"monospace\" font-size=\"12\" fill=\"#8B1A1A\">$ system stats</text>\n                <rect x=\"50\" y=\"85\" width=\"80\" height=\"4\" fill=\"#A52A2A\"/>\n                <rect x=\"50\" y=\"92\" width=\"60\" height=\"4\" fill=\"#B8534E\"/>\n                <rect x=\"50\" y=\"99\" width=\"95\" height=\"4\" fill=\"#8B1A1A\"/>\n                <text x=\"50\" y=\"115\" font-family=\"monospace\" font-size=\"10\" fill=\"#86868B\">CPU: 45%</text>\n                <text x=\"50\" y=\"128\" font-family=\"monospace\" font-size=\"10\" fill=\"#86868B\">MEM: 8.2GB</text>\n            </svg>",
    "visual": "<div class=\"project-visual\"><div class=\"tech-flow\"><div class=\"tech-box\">System</div><div class=\"flow-arrow\">→</div><div class=\"tech-box\">CCDash</div><div class=\"flow-arrow\">→</div><div class=\"tech-box\">Terminal UI</div></div></div>"
  },
  {
    "id": "ducke",
    "name": "DUCK-E 🦆",
    "tagline": "The Duck That Talks Back",
    "description": [
      "DUCK-E revolutionizes the venerable practice of rubber duck debugging by transforming it from a one-way monologue into an intelligent, interactive conversation. Using OpenAI's groundbreaking Realtime API, DUCK-E doesn't just listen—it asks probing questions, suggests alternative approaches, and actively helps you think through complex problems in real-time.",
      "The system leverages the AutoGen framework to implement sophisticated multi-agent conversations, where specialized debugging agents collaborate to understand your code, identify potential issues, and suggest solutions. DUCK-E can analyze stack traces, review code snippets you share verbally, and even simulate different scenarios to help you understand edge cases and race conditions.",
      "Built with FastAPI for lightning-fast response times, DUCK-E processes your voice in real-time, maintains context throughout long debugging sessions, and adapts its questioning style based on your expertise level and the problem domain. The system integrates with popular IDEs, can access documentation on the fly, and provides both conversational guidance and structured debugging protocols. It's like pair programming with an infinitely patient expert who's available 24/7 and never judges your bugs."
    ],
    "tech": [
      "OpenAI Realtime",
      "FastAPI",
      "AutoGen",
      "Voice AI",
      "Real-time Processing"
    ],
    "github": "https://github.com/jedarden/duck-e",
    "demo": null,
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                <ellipse cx=\"100\" cy=\"120\" rx=\"50\" ry=\"45\" fill=\"#B8534E\"/>\n                <circle cx=\"100\" cy=\"70\" r=\"35\" fill=\"#B8534E\"/>\n                <ellipse cx=\"90\" cy=\"65\" rx=\"8\" ry=\"10\" fill=\"#1D1D1F\"/>\n                <ellipse cx=\"110\" cy=\"65\" rx=\"8\" ry=\"10\" fill=\"#1D1D1F\"/>\n                <path d=\"M85 80 Q100 90 115 80\" stroke=\"#8B1A1A\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/>\n                <ellipse cx=\"70\" cy=\"130\" rx=\"8\" ry=\"12\" fill=\"#A52A2A\"/>\n                <ellipse cx=\"130\" cy=\"130\" rx=\"8\" ry=\"12\" fill=\"#A52A2A\"/>\n                <path d=\"M50 100 Q30 100 35 90 Q40 85 50 90\" fill=\"#8B1A1A\"/>\n                <path d=\"M150 100 Q170 100 165 90 Q160 85 150 90\" fill=\"#8B1A1A\"/>\n            </svg>",
    "visual": "<div class=\"project-visual\"><div class=\"tech-flow\"><div class=\"tech-box\">Voice Input</div><div class=\"flow-arrow\">→</div><div class=\"tech-box\">AI Analysis</div><div class=\"flow-arrow\">→</div><div class=\"tech-box\">Debugging</div></div></div>"
  },
  {
    "id": "mana",
    "name": "MANA",
    "tagline": "Memory-Augmented Neural Assistant",
    "description": [
      "MANA represents the cutting edge of context management for AI coding agents, implementing an adaptive learning system that intelligently manages and retrieves contextual information across long-running development sessions. It solves the critical challenge of maintaining relevant context as projects grow beyond what fits in a single prompt window.",
      "Using advanced RAG (Retrieval-Augmented Generation) techniques, MANA builds a dynamic knowledge graph of your codebase, automatically identifying important patterns, architectural decisions, and coding conventions. It learns which context is most valuable for different types of tasks and proactively surfaces relevant information when agents need it most.",
      "The system implements semantic search across code, documentation, and historical conversations, with intelligent chunking strategies that preserve meaningful context boundaries. MANA tracks relevance decay over time, automatically archiving outdated context while keeping frequently accessed information readily available. It integrates seamlessly with Claude Code and other AI development tools, providing a persistent memory layer that enables truly long-term autonomous development projects. With MANA, your AI agents remember everything that matters and forget everything that doesn't."
    ],
    "tech": [
      "Python",
      "RAG",
      "Vector DB",
      "Context Management"
    ],
    "github": "https://github.com/jedarden/MANA",
    "demo": null,
    "icon": "<svg class=\"project-icon\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n                <circle cx=\"100\" cy=\"100\" r=\"45\" fill=\"none\" stroke=\"#8B1A1A\" stroke-width=\"3\"/>\n                <circle cx=\"70\" cy=\"80\" r=\"12\" fill=\"#A52A2A\"/>\n                <circle cx=\"130\" cy=\"80\" r=\"12\" fill=\"#A52A2A\"/>\n                <circle cx=\"70\" cy=\"120\" r=\"12\" fill=\"#A52A2A\"/>\n                <circle cx=\"130\" cy=\"120\" r=\"12\" fill=\"#A52A2A\"/>\n                <circle cx=\"100\" cy=\"100\" r=\"15\" fill=\"#B8534E\"/>\n                <line x1=\"100\" y1=\"100\" x2=\"70\" y2=\"80\" stroke=\"#8B1A1A\" stroke-width=\"2\"/>\n                <line x1=\"100\" y1=\"100\" x2=\"130\" y2=\"80\" stroke=\"#8B1A1A\" stroke-width=\"2\"/>\n                <line x1=\"100\" y1=\"100\" x2=\"70\" y2=\"120\" stroke=\"#8B1A1A\" stroke-width=\"2\"/>\n                <line x1=\"100\" y1=\"100\" x2=\"130\" y2=\"120\" stroke=\"#8B1A1A\" stroke-width=\"2\"/>\n            </svg>",
    "visual": "<div class=\"project-visual\"><div class=\"tech-flow\"><div class=\"tech-box\">Context</div><div class=\"flow-arrow\">→</div><div class=\"tech-box\">RAG</div><div class=\"flow-arrow\">→</div><div class=\"tech-box\">Memory</div></div></div>"
  }
];

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projects;
}
