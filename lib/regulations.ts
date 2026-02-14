export interface Regulation {
  slug: string;
  name: string;
  shortName: string;
  region: string;
  regionCode: "EU" | "US" | "UK" | "AU" | "CA" | "Global";
  status: "Active" | "Upcoming" | "Draft";
  type: "Law" | "Standard" | "Framework" | "Executive Order";
  effectiveDate: string;
  summary: string;
  overview: string;
  keyRequirements: string[];
  timeline: { date: string; event: string }[];
  whoItAffects: string[];
  readinessChecklist: string[];
  resources: { title: string; url: string }[];
  faq: { question: string; answer: string }[];
}

export const regulations: Regulation[] = [
  {
    slug: "eu-ai-act",
    name: "European Union Artificial Intelligence Act",
    shortName: "EU AI Act",
    region: "European Union",
    regionCode: "EU",
    status: "Active",
    type: "Law",
    effectiveDate: "2024-08-01",
    summary: "The world's first comprehensive AI law, establishing a risk-based framework for AI systems across the EU single market.",
    overview: `The EU AI Act (Regulation 2024/1689) is the world's first comprehensive legal framework for artificial intelligence. Adopted on 13 June 2024, it establishes harmonised rules for the development, placement on the market, putting into service, and use of AI systems within the European Union.

The Act takes a risk-based approach, categorising AI systems into four tiers: unacceptable risk (banned), high-risk (strictly regulated), limited risk (transparency obligations), and minimal risk (largely unregulated). This tiered framework ensures that the most stringent requirements apply to AI systems that pose the greatest potential harm to health, safety, and fundamental rights.

The regulation applies to providers of AI systems placed on the EU market regardless of whether those providers are established within the EU or in a third country. It also applies to deployers of AI systems located within the EU and to providers and deployers located outside the EU where the output produced by the AI system is used in the EU.

Key innovations include the creation of AI regulatory sandboxes, mandatory conformity assessments for high-risk AI systems, requirements for transparency and human oversight, and the establishment of the European AI Office to coordinate enforcement. The Act also introduces specific rules for general-purpose AI (GPAI) models, including additional obligations for GPAI models with systemic risk.

Penalties for non-compliance are significant: up to €35 million or 7% of global annual turnover for prohibited AI practices, up to €15 million or 3% for violations of other provisions, and up to €7.5 million or 1% for supplying incorrect information. For SMEs and startups, the lower of the two amounts applies.

The EU AI Act represents a paradigm shift in technology regulation, moving from sector-specific rules to a horizontal framework that covers AI across all industries. Compliance professionals must understand that this regulation will have extraterritorial reach similar to GDPR, affecting organisations worldwide that serve the EU market.

The Act also mandates the creation of national competent authorities in each member state, the establishment of an AI Board to facilitate consistent application of the regulation, and the appointment of an AI Ombudsman function through the European AI Office.

For organisations developing or deploying AI, the EU AI Act requires a fundamental reassessment of AI governance practices. This includes implementing risk management systems, maintaining technical documentation, ensuring data governance for training datasets, establishing quality management systems, and providing transparency to users about AI-generated content.

The regulation places particular emphasis on fundamental rights impact assessments for high-risk AI systems used by public bodies or private entities providing public services. Deployers of high-risk AI systems in areas like law enforcement, migration management, and critical infrastructure must conduct these assessments before putting systems into service.`,
    keyRequirements: [
      "Prohibited AI practices: social scoring, real-time biometric identification in public spaces (with exceptions), manipulation techniques, exploitation of vulnerabilities",
      "High-risk AI systems must undergo conformity assessment before market placement",
      "Mandatory risk management system covering the entire AI system lifecycle",
      "Data governance requirements for training, validation, and testing datasets",
      "Technical documentation and record-keeping obligations",
      "Transparency obligations: users must be informed when interacting with AI",
      "Human oversight requirements for high-risk AI systems",
      "Accuracy, robustness, and cybersecurity requirements",
      "Quality management system implementation",
      "Registration in EU public database for high-risk AI systems",
      "General-purpose AI model providers must maintain technical documentation and provide information to downstream providers",
      "GPAI models with systemic risk require model evaluations, adversarial testing, and serious incident reporting",
      "AI-generated content must be labelled as such (deepfakes, synthetic text)",
      "Fundamental rights impact assessment for certain high-risk deployments"
    ],
    timeline: [
      { date: "April 2021", event: "European Commission publishes initial proposal" },
      { date: "December 2023", event: "Political agreement reached between EU institutions" },
      { date: "March 2024", event: "European Parliament adopts the AI Act" },
      { date: "May 2024", event: "Council of the EU formally approves" },
      { date: "1 August 2024", event: "AI Act enters into force" },
      { date: "2 February 2025", event: "Prohibited AI practices ban applies" },
      { date: "2 August 2025", event: "GPAI model obligations apply; governance provisions take effect" },
      { date: "2 August 2026", event: "Most provisions apply, including high-risk AI obligations" },
      { date: "2 August 2027", event: "Obligations for high-risk AI systems in Annex I (regulated products) apply" }
    ],
    whoItAffects: [
      "AI system providers placing products on the EU market (regardless of location)",
      "Deployers (users) of AI systems within the EU",
      "Importers and distributors of AI systems in the EU",
      "Product manufacturers placing AI-integrated products on the EU market",
      "Authorised representatives of non-EU providers",
      "Any organisation whose AI output is used within the EU"
    ],
    readinessChecklist: [
      "Inventory all AI systems in use and under development",
      "Classify each AI system by risk category (unacceptable, high, limited, minimal)",
      "Identify any AI practices that fall under prohibited categories and cease them",
      "Implement a risk management system for high-risk AI systems",
      "Establish data governance procedures for training datasets",
      "Create and maintain technical documentation for all high-risk AI systems",
      "Implement logging and monitoring capabilities",
      "Design human oversight mechanisms for high-risk systems",
      "Set up a quality management system",
      "Prepare for conformity assessments (self-assessment or third-party)",
      "Implement transparency measures (user notifications, content labelling)",
      "Assess GPAI model obligations if developing foundation models",
      "Register high-risk AI systems in the EU database",
      "Train staff on AI Act compliance requirements",
      "Establish incident reporting procedures"
    ],
    resources: [
      { title: "Official EU AI Act Text (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689" },
      { title: "European AI Office", url: "https://digital-strategy.ec.europa.eu/en/policies/european-ai-office" },
      { title: "EU AI Act Explorer", url: "https://artificialintelligenceact.eu/" },
      { title: "European Commission AI Policy", url: "https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence" }
    ],
    faq: [
      { question: "When does the EU AI Act take full effect?", answer: "The EU AI Act entered into force on 1 August 2024 with a phased implementation. Prohibited practices bans apply from February 2025, GPAI obligations from August 2025, and most other provisions including high-risk AI requirements from August 2026." },
      { question: "Does the EU AI Act apply to companies outside the EU?", answer: "Yes. The EU AI Act has extraterritorial scope. It applies to any provider placing AI systems on the EU market and any deployer located in the EU, regardless of where the provider is established. It also applies where the AI output is used in the EU." },
      { question: "What are the penalties for non-compliance?", answer: "Fines can reach up to €35 million or 7% of global annual turnover for prohibited AI practices, €15 million or 3% for other violations, and €7.5 million or 1% for supplying incorrect information. Lower caps apply to SMEs and startups." }
    ]
  },
  {
    slug: "iso-42001",
    name: "ISO/IEC 42001 — AI Management System Standard",
    shortName: "ISO 42001",
    region: "International",
    regionCode: "Global",
    status: "Active",
    type: "Standard",
    effectiveDate: "2023-12-18",
    summary: "The first international management system standard for AI, providing a framework for establishing, implementing, and improving AI governance.",
    overview: `ISO/IEC 42001:2023 is the world's first international standard specifying requirements for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System (AIMS) within organisations. Published on 18 December 2023 by the International Organization for Standardization and the International Electrotechnical Commission, it provides a structured framework for managing AI-related risks and opportunities.

The standard follows the Harmonised Structure (HS) common to all ISO management system standards (like ISO 27001, ISO 9001), making it familiar to organisations already certified to other ISO standards and enabling straightforward integration into existing management systems.

ISO 42001 is designed to be applicable to any organisation that provides or uses AI-based products or services, regardless of size, type, or industry sector. It addresses the unique challenges of AI systems, including ethical considerations, transparency, accountability, and the dynamic nature of AI technology.

The standard requires organisations to consider the AI-specific context of their operations, including the societal impact of AI systems, regulatory requirements, and stakeholder expectations. It mandates a systematic approach to AI risk management that goes beyond traditional IT risk frameworks to encompass fairness, transparency, explainability, and human oversight.

Key structural elements include leadership commitment to responsible AI, an AI policy, AI risk assessment and treatment processes, objectives and planning for AI management, support requirements (resources, competence, awareness, communication), operational planning and control, performance evaluation, and continual improvement.

ISO 42001 is particularly valuable as a compliance tool because it provides a certifiable framework that can demonstrate due diligence across multiple regulatory regimes. Organisations seeking to comply with the EU AI Act, for instance, can use ISO 42001 certification as evidence of a robust AI governance framework, although certification alone does not guarantee regulatory compliance.

The standard also addresses the AI system lifecycle, from conception and design through development, testing, deployment, operation, and retirement. This lifecycle approach ensures that AI governance is not an afterthought but is embedded into every stage of AI system development and use.

Annexes to the standard provide detailed guidance on AI-specific controls, including controls for data management, AI system impact assessment, AI system development processes, third-party and customer relationships, and system operation monitoring. These controls can be selected and tailored based on the organisation's specific AI risk assessment.`,
    keyRequirements: [
      "Establish an AI management system with defined scope and boundaries",
      "Develop an AI policy approved by top management",
      "Conduct AI risk assessments covering safety, fairness, transparency, and accountability",
      "Implement AI risk treatment plans with appropriate controls from Annex A",
      "Define roles, responsibilities, and authorities for AI governance",
      "Ensure competence and awareness of personnel involved in AI systems",
      "Maintain documented information for the AIMS",
      "Plan and control AI system lifecycle processes",
      "Conduct AI system impact assessments",
      "Monitor, measure, analyse, and evaluate AIMS performance",
      "Conduct internal audits of the AIMS",
      "Perform management reviews",
      "Address nonconformities and drive continual improvement",
      "Manage third-party AI providers and AI supply chain risks"
    ],
    timeline: [
      { date: "18 December 2023", event: "ISO/IEC 42001:2023 published" },
      { date: "Q1 2024", event: "Accredited certification bodies begin offering audits" },
      { date: "2024–2025", event: "Early adopter organisations achieve certification" },
      { date: "2025–2026", event: "Expected widespread adoption driven by EU AI Act compliance needs" }
    ],
    whoItAffects: [
      "Any organisation developing AI systems or products",
      "Organisations deploying or using AI-based services",
      "AI service providers and cloud AI platform operators",
      "Organisations seeking to demonstrate responsible AI governance",
      "Companies needing to show compliance with AI regulations (e.g., EU AI Act)",
      "Public sector organisations using AI in service delivery"
    ],
    readinessChecklist: [
      "Secure leadership commitment and appoint an AI governance lead",
      "Define the scope of your AI Management System",
      "Inventory all AI systems within scope",
      "Develop an AI policy aligned with organisational values and regulatory requirements",
      "Conduct an AI risk assessment for each AI system",
      "Select and implement controls from Annex A",
      "Establish AI system impact assessment processes",
      "Implement data governance procedures for AI training and operational data",
      "Define competence requirements and training for AI-related roles",
      "Set up monitoring and measurement of AI system performance and fairness",
      "Establish internal audit programme for the AIMS",
      "Integrate AIMS with existing management systems (ISO 27001, ISO 9001)",
      "Engage an accredited certification body for gap analysis",
      "Prepare documented information and records",
      "Conduct management review of AIMS effectiveness"
    ],
    resources: [
      { title: "ISO/IEC 42001:2023 Standard", url: "https://www.iso.org/standard/81230.html" },
      { title: "ISO AI Standards Overview", url: "https://www.iso.org/sectors/it-technologies/ai" },
      { title: "ISO/IEC JTC 1/SC 42 (AI Committee)", url: "https://www.iso.org/committee/6794475.html" }
    ],
    faq: [
      { question: "Is ISO 42001 certification mandatory?", answer: "No, ISO 42001 certification is voluntary. However, it provides a structured framework for AI governance that can help demonstrate compliance with emerging AI regulations like the EU AI Act. Some procurement processes and industry sectors may increasingly require or prefer ISO 42001 certification." },
      { question: "How does ISO 42001 relate to the EU AI Act?", answer: "ISO 42001 provides a management system framework that can support EU AI Act compliance. While the EU AI Act sets legal requirements, ISO 42001 offers a systematic approach to meeting many of those requirements. The European Commission may recognize certain standards as providing a presumption of conformity." },
      { question: "Can ISO 42001 be integrated with other management systems?", answer: "Yes. ISO 42001 follows the ISO Harmonised Structure, making it directly integrable with ISO 27001 (information security), ISO 9001 (quality), ISO 14001 (environmental), and other management system standards." }
    ]
  },
  {
    slug: "nist-ai-rmf",
    name: "NIST AI Risk Management Framework",
    shortName: "NIST AI RMF",
    region: "United States",
    regionCode: "US",
    status: "Active",
    type: "Framework",
    effectiveDate: "2023-01-26",
    summary: "A voluntary framework by the US National Institute of Standards and Technology for managing risks across the AI system lifecycle.",
    overview: `The NIST AI Risk Management Framework (AI RMF 1.0), released on 26 January 2023, is a voluntary guidance document developed by the National Institute of Standards and Technology to help organisations design, develop, deploy, and use AI systems in a trustworthy and responsible manner. While not legally binding, the AI RMF has become a de facto standard for AI governance in the United States and is increasingly referenced in regulatory guidance worldwide.

The framework is structured around four core functions: Govern, Map, Measure, and Manage. These functions provide a flexible, structured approach to AI risk management that can be adapted to any organisation's size, sector, and risk tolerance.

The GOVERN function establishes and maintains the organisational structures, policies, and processes for AI risk management. It emphasises leadership accountability, stakeholder engagement, and the integration of AI risk management into broader enterprise risk management. This function recognises that effective AI governance requires cultural change, not just technical controls.

The MAP function is about understanding the context in which AI systems operate. It involves identifying and categorising AI systems, understanding their intended purposes and potential impacts, and recognising the broader societal context of AI deployment. Mapping also includes identifying relevant stakeholders and understanding the legal and regulatory landscape.

The MEASURE function focuses on employing quantitative and qualitative methods to analyse, assess, benchmark, and monitor AI risks and their related impacts. This includes developing metrics for trustworthiness characteristics such as accuracy, fairness, privacy, security, resilience, transparency, explainability, and accountability.

The MANAGE function involves allocating resources and implementing plans to respond to, recover from, and communicate about AI risks. It includes prioritising risks, implementing mitigation strategies, and establishing processes for ongoing monitoring and adjustment.

The companion document, the NIST AI RMF Playbook, provides suggested actions and references for each subcategory, making the framework highly practical for implementation. The Playbook is a living document that NIST updates as practices evolve.

The AI RMF was developed through an extensive multi-stakeholder process involving hundreds of organisations from industry, academia, civil society, and government. This collaborative development process has given the framework broad legitimacy and acceptance across sectors.

In the context of the US regulatory landscape, the AI RMF serves as a foundational reference. The 2023 Executive Order on AI Safety explicitly references the NIST AI RMF, and several US federal agencies have incorporated it into their AI governance guidance. State-level AI legislation, such as the Colorado AI Act, also references NIST standards.`,
    keyRequirements: [
      "GOVERN: Establish AI governance structures with clear roles, responsibilities, and accountability",
      "GOVERN: Develop organisational AI risk management policies and processes",
      "GOVERN: Foster a culture of responsible AI development and use",
      "MAP: Inventory and categorise all AI systems by context, purpose, and risk",
      "MAP: Identify intended and unintended impacts of AI systems on people and communities",
      "MAP: Understand legal, regulatory, and ethical requirements for each AI system",
      "MEASURE: Develop and apply metrics for AI trustworthiness characteristics",
      "MEASURE: Assess AI system performance, fairness, bias, and reliability",
      "MEASURE: Monitor AI systems for drift, degradation, and emerging risks",
      "MANAGE: Prioritise identified AI risks based on impact and likelihood",
      "MANAGE: Implement risk response strategies (mitigate, transfer, accept, avoid)",
      "MANAGE: Establish incident response and communication plans for AI failures",
      "Engage diverse stakeholders throughout the AI lifecycle",
      "Document and communicate AI risk management activities and decisions"
    ],
    timeline: [
      { date: "July 2021", event: "NIST publishes Request for Information on AI RMF" },
      { date: "March 2022", event: "Initial draft AI RMF released for public comment" },
      { date: "August 2022", event: "Second draft released" },
      { date: "26 January 2023", event: "AI RMF 1.0 officially released" },
      { date: "January 2023", event: "AI RMF Playbook published alongside framework" },
      { date: "October 2023", event: "US Executive Order on AI references NIST AI RMF" },
      { date: "April 2024", event: "NIST releases companion AI RMF Generative AI Profile" },
      { date: "2025", event: "Ongoing updates to Playbook and profiles" }
    ],
    whoItAffects: [
      "US federal agencies (referenced in Executive Order on AI)",
      "AI developers and deployers seeking a governance framework",
      "Organisations responding to US state-level AI legislation",
      "Government contractors developing or procuring AI systems",
      "Any organisation seeking to demonstrate responsible AI practices",
      "International organisations looking for alignment with US AI governance expectations"
    ],
    readinessChecklist: [
      "Designate AI risk management leadership and governance structures",
      "Develop an AI risk management policy aligned with NIST AI RMF functions",
      "Inventory all AI systems and classify by risk level and impact",
      "Map AI system contexts: intended use, affected stakeholders, potential harms",
      "Define metrics for each AI RMF trustworthiness characteristic (fairness, transparency, etc.)",
      "Implement bias testing and fairness assessments for AI systems",
      "Establish monitoring for model drift and performance degradation",
      "Develop AI incident response procedures",
      "Engage stakeholders (including affected communities) in AI risk assessment",
      "Document AI risk management decisions and rationale",
      "Train teams on AI RMF concepts and implementation",
      "Align AI RMF activities with existing enterprise risk management",
      "Review NIST AI RMF Playbook for specific implementation guidance",
      "Consider NIST AI RMF Generative AI Profile for GenAI-specific risks"
    ],
    resources: [
      { title: "NIST AI RMF 1.0", url: "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence" },
      { title: "NIST AI RMF Playbook", url: "https://airc.nist.gov/AI_RMF_Playbook" },
      { title: "NIST AI RMF Generative AI Profile", url: "https://airc.nist.gov/Docs/1" },
      { title: "NIST Trustworthy AI", url: "https://www.nist.gov/trustworthy-and-responsible-ai" }
    ],
    faq: [
      { question: "Is the NIST AI RMF legally mandatory?", answer: "The NIST AI RMF is a voluntary framework. However, it is referenced in the US Executive Order on AI and is increasingly used as a benchmark in federal procurement, state legislation, and industry standards. Adoption signals responsible AI practice." },
      { question: "How does the NIST AI RMF differ from the EU AI Act?", answer: "The NIST AI RMF is a voluntary risk management framework, while the EU AI Act is a binding law. The RMF provides flexible guidance for managing AI risks; the EU AI Act imposes specific legal obligations with penalties. Many organisations use both: the RMF for governance and the EU AI Act for legal compliance." },
      { question: "Does the NIST AI RMF address generative AI?", answer: "Yes. NIST released the Generative AI Profile in April 2024, providing specific guidance for managing risks associated with generative AI systems, including content provenance, information integrity, and novel risks like hallucination and CBRN information." }
    ]
  },
  {
    slug: "gdpr-ai-provisions",
    name: "General Data Protection Regulation — AI Provisions",
    shortName: "GDPR (AI)",
    region: "European Union",
    regionCode: "EU",
    status: "Active",
    type: "Law",
    effectiveDate: "2018-05-25",
    summary: "The EU's landmark data protection law contains critical provisions for AI systems that process personal data, including automated decision-making rules.",
    overview: `The General Data Protection Regulation (GDPR), in force since 25 May 2018, is the EU's comprehensive data protection law. While not specifically an AI regulation, GDPR contains several provisions that have profound implications for AI systems that process personal data, making it one of the most impactful regulations for AI compliance globally.

Article 22 of the GDPR provides individuals with the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects or similarly significant effects. This provision directly governs AI-based decision-making systems used in areas like credit scoring, insurance underwriting, recruitment, and public service delivery. Organisations must provide meaningful information about the logic involved, the significance, and the envisaged consequences of such processing.

The lawful basis requirements under Articles 6 and 9 are particularly challenging for AI systems. Consent must be freely given, specific, informed, and unambiguous — requirements that are difficult to meet when AI processing is complex and opaque. Legitimate interest assessments must balance the organisation's needs against individual rights, which requires understanding how AI systems impact data subjects.

Data minimisation (Article 5(1)(c)) presents a fundamental tension with AI development, which often benefits from large datasets. Organisations must ensure they collect only data that is adequate, relevant, and limited to what is necessary for the specified purpose. This impacts AI training data strategies and requires careful justification for dataset scope.

The right to explanation and transparency requirements (Articles 13-15) mandate that organisations provide meaningful information about automated decision-making. For complex AI models, particularly deep learning systems, providing understandable explanations of how decisions are reached is a significant technical and legal challenge.

Data Protection Impact Assessments (DPIAs) under Article 35 are mandatory for processing that is likely to result in a high risk to individuals' rights and freedoms. Most AI systems processing personal data at scale will trigger DPIA requirements. The DPIA must assess the necessity and proportionality of the processing, the risks to individuals, and the measures to address those risks.

Purpose limitation (Article 5(1)(b)) restricts the use of personal data to the purposes for which it was collected. AI developers must carefully consider whether training AI models constitutes a compatible purpose, and the recent GDPR amendments and regulatory guidance have provided some flexibility for scientific research and statistical purposes.

The international transfer provisions (Chapter V) also affect AI systems, particularly cloud-based AI services and models trained on data from multiple jurisdictions. Organisations must ensure adequate safeguards for any transfer of personal data outside the EEA.

Data protection authorities across Europe have been increasingly active in enforcing GDPR against AI systems. Notable enforcement actions have targeted facial recognition companies, AI-driven advertising systems, and automated credit scoring, establishing precedents that shape how organisations must govern AI processing of personal data.`,
    keyRequirements: [
      "Establish a lawful basis for processing personal data in AI systems (Article 6)",
      "Implement safeguards for automated individual decision-making (Article 22)",
      "Provide meaningful information about AI logic, significance, and consequences (Articles 13-15)",
      "Enable the right to human intervention in automated decisions",
      "Conduct Data Protection Impact Assessments for high-risk AI processing (Article 35)",
      "Apply data minimisation principles to AI training and operational data",
      "Ensure purpose limitation for AI model training and inference",
      "Implement privacy by design and by default in AI systems (Article 25)",
      "Maintain records of processing activities involving AI (Article 30)",
      "Enable data subject rights: access, rectification, erasure, portability for AI-processed data",
      "Appoint a Data Protection Officer if required for AI processing activities",
      "Ensure lawful international data transfers for AI services (Chapter V)",
      "Implement appropriate technical and organisational security measures (Article 32)",
      "Report personal data breaches involving AI systems within 72 hours (Article 33)"
    ],
    timeline: [
      { date: "25 May 2018", event: "GDPR enters into application" },
      { date: "2018–2023", event: "Data protection authorities issue guidance on AI and automated decision-making" },
      { date: "2020", event: "EDPB guidelines on automated individual decision-making and profiling updated" },
      { date: "2023", event: "Italian DPA temporarily bans ChatGPT over GDPR concerns" },
      { date: "2024", event: "EDPB task force on ChatGPT publishes findings" },
      { date: "2024–2025", event: "GDPR and EU AI Act interplay guidance expected from EDPB" }
    ],
    whoItAffects: [
      "Any organisation processing personal data of EU/EEA individuals using AI",
      "AI developers training models on personal data from EU individuals",
      "Organisations using AI for automated decision-making about individuals",
      "Cloud AI service providers handling EU personal data",
      "Organisations transferring personal data internationally for AI processing",
      "Data processors providing AI-as-a-service involving personal data"
    ],
    readinessChecklist: [
      "Map all AI systems that process personal data and document in records of processing",
      "Identify and document the lawful basis for each AI processing activity",
      "Assess whether any AI systems make solely automated decisions with legal/significant effects",
      "Implement human review mechanisms for automated decisions under Article 22",
      "Conduct DPIAs for all high-risk AI processing activities",
      "Develop explainability approaches for AI systems (model cards, plain-language explanations)",
      "Review AI training data for data minimisation compliance",
      "Implement data subject rights processes for AI-processed data (access, erasure, rectification)",
      "Review international data transfers for AI services and implement safeguards",
      "Implement privacy by design in AI development lifecycle",
      "Establish breach notification procedures for AI-related incidents",
      "Train AI development teams on GDPR requirements",
      "Review vendor contracts for AI service providers (Article 28 compliance)",
      "Document the relationship between GDPR compliance and EU AI Act obligations"
    ],
    resources: [
      { title: "GDPR Full Text", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { title: "EDPB Guidelines on Automated Decision-Making", url: "https://edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en" },
      { title: "ICO Guidance on AI and Data Protection", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/" },
      { title: "CNIL AI Guidance", url: "https://www.cnil.fr/en/artificial-intelligence" }
    ],
    faq: [
      { question: "Can I train AI models on personal data under GDPR?", answer: "Yes, but you need a valid lawful basis (e.g., legitimate interest, consent, or the research exemption). You must also apply data minimisation, conduct DPIAs where required, and ensure transparency about the use of personal data for training." },
      { question: "Do I need to explain how my AI model works under GDPR?", answer: "For automated decisions under Article 22, you must provide meaningful information about the logic involved. This doesn't necessarily require full technical explainability, but data subjects should understand the key factors influencing decisions and the general logic of the system." },
      { question: "How does GDPR interact with the EU AI Act?", answer: "The EU AI Act complements GDPR without replacing it. AI systems processing personal data must comply with both. The AI Act adds requirements for risk management, conformity assessment, and transparency that go beyond data protection. DPIAs under GDPR and fundamental rights impact assessments under the AI Act may overlap." }
    ]
  },
  {
    slug: "uk-ai-safety-framework",
    name: "UK AI Safety Framework",
    shortName: "UK AI Safety",
    region: "United Kingdom",
    regionCode: "UK",
    status: "Active",
    type: "Framework",
    effectiveDate: "2024-02-01",
    summary: "The UK's pro-innovation approach to AI governance, distributing responsibility across existing sector regulators with cross-cutting principles.",
    overview: `The UK has adopted a distinctive pro-innovation approach to AI governance, outlined in the March 2023 white paper "A pro-innovation approach to AI regulation" and the subsequent framework published in February 2024. Rather than creating a single horizontal AI law like the EU AI Act, the UK distributes AI regulatory responsibility across existing sector regulators, guided by five cross-cutting principles.

The five principles that form the backbone of the UK approach are: safety, security, and robustness; appropriate transparency and explainability; fairness; accountability and governance; and contestability and redress. These principles are not initially placed on a statutory footing but are expected to guide how existing regulators (like the FCA, Ofcom, CMA, ICO, MHRA) apply their domain-specific regulations to AI.

The UK AI Safety Institute (AISI), established in November 2023 following the Bletchley Park AI Safety Summit, plays a central role in the UK's approach. AISI focuses on evaluating advanced AI models for safety, conducting research into AI risks, and developing technical tools for AI safety assessment. It has published several reports on frontier model safety and evaluation methodologies.

The February 2024 framework update introduced several key developments: the establishment of regulatory coordination mechanisms, initial guidance from sector regulators on applying the five principles, a strategic approach to addressing gaps in the regulatory landscape, and plans for monitoring the effectiveness of the framework.

Several UK regulators have published AI-specific guidance. The ICO has issued detailed guidance on AI and data protection, the FCA has published discussion papers on AI in financial services, the CMA has investigated AI foundation models and competition, and Ofcom has considered AI in the context of online safety. This sector-specific approach means compliance requirements vary significantly depending on the industry.

The UK government has indicated it will legislate to put the cross-cutting principles on a statutory footing if the non-statutory approach proves insufficient. The King's Speech in July 2024 signalled the government's intention to introduce binding requirements for the most powerful AI models, and subsequent consultations have explored what a UK AI Bill might include.

For organisations operating in the UK, the current framework means compliance is primarily about understanding how existing regulations apply to AI systems in their specific sector, while also preparing for potential future legislation. The UK's approach offers more flexibility than the EU AI Act but creates complexity through the patchwork of sector-specific requirements.

International organisations must manage the divergence between UK and EU approaches. The UK's TCA (Trade and Cooperation Agreement) with the EU includes limited provisions on AI, and companies operating in both markets will need dual compliance strategies.`,
    keyRequirements: [
      "Adhere to the five cross-cutting principles: safety/security, transparency, fairness, accountability, contestability",
      "Comply with sector-specific AI guidance from relevant regulators (FCA, ICO, Ofcom, CMA, etc.)",
      "Implement appropriate safety testing for AI systems, particularly frontier models",
      "Ensure transparency in AI decision-making proportionate to risk and context",
      "Maintain fairness in AI systems, addressing bias and discrimination",
      "Establish clear accountability structures for AI governance",
      "Provide mechanisms for contestability and redress for AI-affected individuals",
      "Engage with relevant sector regulators on AI-specific guidance",
      "Consider the AISI's evaluation frameworks for advanced AI models",
      "Monitor evolving UK AI legislation and prepare for potential statutory requirements"
    ],
    timeline: [
      { date: "March 2023", event: "UK publishes AI white paper 'A pro-innovation approach to AI regulation'" },
      { date: "November 2023", event: "UK AI Safety Summit at Bletchley Park; AI Safety Institute established" },
      { date: "February 2024", event: "Government response to white paper consultation; updated framework published" },
      { date: "2024", event: "Sector regulators publish initial AI guidance" },
      { date: "July 2024", event: "King's Speech signals intent for binding AI requirements" },
      { date: "2025", event: "Expected consultation on UK AI legislation" },
      { date: "2025–2026", event: "Potential UK AI Bill introduction" }
    ],
    whoItAffects: [
      "Organisations developing or deploying AI in the UK market",
      "Regulated industries (financial services, healthcare, telecoms, legal)",
      "Developers of frontier and foundation AI models",
      "Organisations subject to UK sector regulators",
      "Public sector bodies using AI in service delivery",
      "International companies operating in the UK market"
    ],
    readinessChecklist: [
      "Identify which UK sector regulators apply to your AI activities",
      "Review sector-specific AI guidance from relevant regulators",
      "Map AI systems against the five cross-cutting principles",
      "Implement safety and security testing appropriate to AI risk level",
      "Ensure AI systems are transparent and explainable to affected individuals",
      "Conduct fairness and bias assessments for AI systems",
      "Establish clear governance and accountability structures for AI",
      "Implement contestability and redress mechanisms",
      "Engage with AISI evaluation frameworks for advanced AI models",
      "Monitor UK legislative developments and prepare for statutory requirements",
      "Consider dual compliance with EU AI Act if operating in both markets",
      "Document AI governance approach aligned with UK principles"
    ],
    resources: [
      { title: "UK AI Regulation White Paper", url: "https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach" },
      { title: "UK AI Safety Institute", url: "https://www.aisafety.gov.uk/" },
      { title: "ICO AI and Data Protection Guidance", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/" },
      { title: "UK Government AI Policy", url: "https://www.gov.uk/government/collections/ai-regulation" }
    ],
    faq: [
      { question: "Does the UK have an AI law like the EU AI Act?", answer: "Not yet. The UK currently uses a principle-based framework applied through existing sector regulators. However, the government has signalled its intention to introduce binding requirements, particularly for the most powerful AI models. A UK AI Bill is expected to be consulted on in 2025." },
      { question: "How does the UK approach differ from the EU AI Act?", answer: "The UK takes a sector-specific, principle-based approach rather than a single horizontal law. This offers more flexibility but less legal certainty. The UK framework is currently non-statutory (voluntary), while the EU AI Act is binding law with significant penalties." },
      { question: "Which UK regulators handle AI?", answer: "Multiple regulators share responsibility: the ICO (data protection), FCA (financial services), Ofcom (communications), CMA (competition), MHRA (health products), and others in their respective domains. The Digital Regulation Cooperation Forum coordinates across regulators." }
    ]
  },
  {
    slug: "australia-ai-ethics-framework",
    name: "Australia AI Ethics Framework",
    shortName: "AU AI Ethics",
    region: "Australia",
    regionCode: "AU",
    status: "Active",
    type: "Framework",
    effectiveDate: "2024-09-01",
    summary: "Australia's voluntary AI ethics principles and governance framework, with mandatory guardrails under development for high-risk AI systems.",
    overview: `Australia's approach to AI governance has evolved significantly from the initial voluntary AI Ethics Principles published in 2019 to the comprehensive framework now being developed. The Australian Government released eight AI Ethics Principles as a voluntary framework and has since been working on mandatory guardrails for high-risk AI settings.

The eight voluntary AI Ethics Principles are: (1) Human, societal, and environmental wellbeing; (2) Human-centred values; (3) Fairness; (4) Privacy protection and security; (5) Reliability and safety; (6) Transparency and explainability; (7) Contestability; and (8) Accountability.

In September 2024, the Australian Government released its interim response to the Safe and Responsible AI consultation, announcing mandatory guardrails for AI in high-risk settings. This marked a significant shift from a purely voluntary approach to one that combines voluntary principles with binding requirements for the highest-risk applications.

The proposed mandatory guardrails for high-risk AI include requirements for testing and transparency, maintaining human oversight, protecting against harmful or misleading AI outputs, and ensuring appropriate accountability. The definition of "high-risk" is expected to align broadly with international approaches while reflecting Australia's specific regulatory context.

Australia's Privacy Act 1988 is currently under significant reform, with proposed amendments that will strengthen protections for automated decision-making using personal information. The Privacy Act Review (Attorney-General's Report, 2023) recommended introducing a right for individuals to request meaningful information about how automated decisions are made and to request human review of significant automated decisions.

The Australian Human Rights Commission has also been active in the AI governance space, publishing a report on human rights and technology that recommended specific protections against AI-related discrimination and bias. The Commission's work has influenced the development of the broader governance framework.

ASIC (Australian Securities and Investments Commission) and APRA (Australian Prudential Regulation Authority) have published expectations for AI governance in financial services, including requirements for model risk management, board accountability, and consumer protection in AI-driven financial products.

The Office of the Australian Information Commissioner (OAIC) has provided guidance on the intersection of AI and privacy law, emphasising that existing privacy obligations apply to AI systems processing personal information and that organisations should adopt privacy by design approaches for AI development.

For organisations operating in Australia, compliance currently requires adherence to existing laws (Privacy Act, anti-discrimination legislation, consumer law) as they apply to AI, voluntary adoption of the AI Ethics Principles, and preparation for the incoming mandatory guardrails for high-risk AI. The timeline for mandatory requirements is expected to crystallise through 2025-2026.`,
    keyRequirements: [
      "Adhere to eight AI Ethics Principles in AI system design and deployment",
      "Comply with Privacy Act 1988 for AI systems processing personal information",
      "Ensure AI systems do not breach anti-discrimination legislation",
      "Comply with Australian Consumer Law for AI-driven products and services",
      "Prepare for mandatory guardrails for high-risk AI settings",
      "Implement human oversight for high-risk automated decision-making",
      "Provide transparency about AI use in consumer-facing applications",
      "Ensure AI systems in financial services meet ASIC and APRA expectations",
      "Maintain records of AI system development and deployment decisions",
      "Implement testing and validation for AI system safety and reliability"
    ],
    timeline: [
      { date: "November 2019", event: "Australia publishes eight voluntary AI Ethics Principles" },
      { date: "February 2023", event: "Attorney-General publishes Privacy Act Review report" },
      { date: "June 2023", event: "Safe and Responsible AI consultation launched" },
      { date: "September 2024", event: "Interim response announces mandatory guardrails for high-risk AI" },
      { date: "2025", event: "Expected detailed design of mandatory guardrails" },
      { date: "2025–2026", event: "Expected Privacy Act reforms including automated decision-making provisions" },
      { date: "2026", event: "Expected implementation of mandatory high-risk AI guardrails" }
    ],
    whoItAffects: [
      "Organisations developing or deploying AI in Australia",
      "Australian Government agencies using AI in service delivery",
      "Financial services companies using AI (regulated by ASIC/APRA)",
      "Healthcare organisations deploying AI systems (regulated by TGA)",
      "International companies offering AI services to Australian consumers",
      "Organisations processing personal information of Australians using AI"
    ],
    readinessChecklist: [
      "Review AI systems against the eight AI Ethics Principles",
      "Map AI processing of personal information under the Privacy Act",
      "Assess AI systems for potential discrimination or bias",
      "Review Australian Consumer Law compliance for AI-driven services",
      "Identify AI systems that may fall under 'high-risk' mandatory guardrails",
      "Implement human oversight for significant automated decisions",
      "Develop transparency measures for consumer-facing AI",
      "Review sector-specific requirements (ASIC, APRA, TGA) for AI governance",
      "Prepare for Privacy Act reforms and automated decision-making provisions",
      "Establish AI governance framework aligned with Australian principles",
      "Monitor developments in mandatory guardrails design",
      "Document AI system testing, validation, and governance decisions"
    ],
    resources: [
      { title: "Australia AI Ethics Principles", url: "https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-framework" },
      { title: "Safe and Responsible AI Consultation", url: "https://www.industry.gov.au/publications/safe-and-responsible-ai-australia" },
      { title: "Privacy Act Review Report", url: "https://www.ag.gov.au/rights-and-protections/publications/privacy-act-review-report" },
      { title: "OAIC AI Guidance", url: "https://www.oaic.gov.au/privacy/your-privacy-rights/artificial-intelligence" }
    ],
    faq: [
      { question: "Are the Australian AI Ethics Principles mandatory?", answer: "Currently, the eight AI Ethics Principles are voluntary. However, the Australian Government announced in September 2024 that mandatory guardrails will be introduced for AI in high-risk settings. The detailed design of these mandatory requirements is expected through 2025." },
      { question: "Does the Privacy Act apply to AI in Australia?", answer: "Yes. The Privacy Act 1988 applies to any processing of personal information by AI systems. Upcoming reforms are expected to introduce specific rights around automated decision-making, including the right to meaningful explanations and human review." },
      { question: "How should Australian companies prepare for AI regulation?", answer: "Start with the voluntary AI Ethics Principles, ensure compliance with existing laws (Privacy Act, anti-discrimination, consumer law), monitor the mandatory guardrails development, and consider international standards like ISO 42001 for a structured governance approach." }
    ]
  },
  {
    slug: "canada-aida",
    name: "Artificial Intelligence and Data Act (AIDA)",
    shortName: "Canada AIDA",
    region: "Canada",
    regionCode: "CA",
    status: "Draft",
    type: "Law",
    effectiveDate: "TBD",
    summary: "Canada's proposed federal AI legislation, part of Bill C-27, establishing requirements for high-impact AI systems.",
    overview: `The Artificial Intelligence and Data Act (AIDA) is Canada's proposed federal AI legislation, introduced as Part 3 of Bill C-27, the Digital Charter Implementation Act. First tabled in June 2022, AIDA would establish a regulatory framework for AI systems in Canada, with a particular focus on "high-impact" AI systems.

AIDA is designed to promote responsible AI development and deployment while supporting Canada's position as a leader in AI innovation. The Act would establish requirements for organisations that design, develop, make available, or manage the operation of AI systems in the course of international or interprovincial trade and commerce.

The Act's centrepiece is the concept of "high-impact" AI systems, which would be defined through regulations rather than in the Act itself. This approach provides flexibility to adapt the definition as AI technology evolves but has been criticised for creating uncertainty about which systems will be captured.

Key obligations under AIDA would include: assessing whether AI systems are high-impact, establishing measures to identify and mitigate risks of harm or biased output, monitoring compliance with mitigation measures, maintaining records of risk assessments and mitigation measures, publishing plain-language descriptions of AI systems, and notifying the Minister of Innovation when AI systems may cause material harm.

AIDA would also create the position of an AI and Data Commissioner, responsible for administering and enforcing the Act. The Commissioner would have powers to audit compliance, issue orders, and recommend penalties. Penalties for serious violations could include fines of up to $10 million or 3% of global revenue for individuals, and up to $25 million or 5% of global revenue for organisations.

The legislative journey of AIDA has been protracted. Bill C-27 passed second reading in the House of Commons in April 2023 and was studied by the Standing Committee on Industry, Science and Technology (INDU). The committee proposed significant amendments, including strengthening individual rights, clarifying the definition of high-impact AI, and adding provisions for algorithmic transparency.

However, AIDA's future became uncertain following the prorogation of Parliament in January 2025, which killed Bill C-27 on the order paper. If the bill is re-introduced, it may be significantly revised. Despite this uncertainty, AIDA provides important signals about Canada's AI regulatory direction and organisations should monitor developments closely.

Canada also has existing laws that apply to AI, including PIPEDA (Personal Information Protection and Electronic Documents Act), the Canadian Human Rights Act, and sector-specific regulations. These create binding obligations for AI systems even in the absence of AIDA.`,
    keyRequirements: [
      "Assess whether AI systems qualify as 'high-impact' under regulatory criteria",
      "Implement measures to identify, assess, and mitigate risks of harm from high-impact AI",
      "Establish measures to address risks of biased output in AI systems",
      "Monitor compliance with risk mitigation measures throughout AI system lifecycle",
      "Maintain records of assessments, mitigation measures, and monitoring activities",
      "Publish plain-language descriptions of high-impact AI systems",
      "Notify the AI and Data Commissioner when AI systems may cause material harm",
      "Comply with regulations to be developed under AIDA",
      "Prohibition on AI systems that cause serious harm (physical or psychological)",
      "Requirement to make AI systems available for audit by the Commissioner"
    ],
    timeline: [
      { date: "June 2022", event: "Bill C-27 (including AIDA) introduced in Parliament" },
      { date: "April 2023", event: "Bill C-27 passes second reading" },
      { date: "2023–2024", event: "INDU committee study and proposed amendments" },
      { date: "November 2024", event: "Companion document published with additional detail on AIDA approach" },
      { date: "January 2025", event: "Parliament prorogued; Bill C-27 dies on the order paper" },
      { date: "2025", event: "Uncertain — bill may be reintroduced in revised form" }
    ],
    whoItAffects: [
      "Organisations designing or developing AI systems in Canada",
      "Companies making AI systems available in Canada (international or interprovincial trade)",
      "Organisations managing the operation of AI systems in Canada",
      "International companies offering AI services in the Canadian market",
      "AI system providers in regulated sectors (finance, health, telecom)"
    ],
    readinessChecklist: [
      "Monitor the status of AIDA and any reintroduction of the bill",
      "Inventory AI systems and assess potential high-impact classification",
      "Implement AI risk assessment processes (valuable regardless of AIDA's status)",
      "Establish bias detection and mitigation measures for AI systems",
      "Ensure PIPEDA compliance for AI systems processing personal information",
      "Review Canadian Human Rights Act implications for AI-driven decisions",
      "Develop plain-language descriptions of AI systems",
      "Implement record-keeping for AI governance decisions",
      "Prepare incident notification procedures for AI harm scenarios",
      "Align AI governance with international frameworks (ISO 42001, NIST AI RMF)",
      "Engage with Canadian AI policy consultations"
    ],
    resources: [
      { title: "Bill C-27 (AIDA) Text", url: "https://www.parl.ca/legisinfo/en/bill/44-1/c-27" },
      { title: "ISED AIDA Companion Document", url: "https://ised-isde.canada.ca/site/innovation-better-canada/en/artificial-intelligence-and-data-act" },
      { title: "Office of the Privacy Commissioner", url: "https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/" },
      { title: "Government of Canada AI Strategy", url: "https://ised-isde.canada.ca/site/ai-strategy/en" }
    ],
    faq: [
      { question: "Is AIDA currently in force?", answer: "No. AIDA was part of Bill C-27, which died on the order paper when Parliament was prorogued in January 2025. It may be reintroduced in a future session, potentially in revised form. However, existing Canadian laws (PIPEDA, Human Rights Act) already apply to AI systems." },
      { question: "What counts as a high-impact AI system under AIDA?", answer: "AIDA delegates the definition of 'high-impact' to regulations, which have not yet been finalized. The companion document indicated categories like systems used in employment, lending, criminal justice, healthcare, and content moderation." },
      { question: "Should Canadian companies prepare for AIDA even though it hasn't passed?", answer: "Yes. Many AIDA obligations align with international best practices. Implementing AI risk management, bias testing, and transparency measures is valuable regardless of AIDA's legislative status, and these practices support compliance with existing Canadian laws and international regulations." }
    ]
  },
  {
    slug: "us-executive-order-ai",
    name: "US Executive Order on Safe, Secure, and Trustworthy AI",
    shortName: "US EO on AI",
    region: "United States",
    regionCode: "US",
    status: "Active",
    type: "Executive Order",
    effectiveDate: "2023-10-30",
    summary: "A sweeping executive order establishing AI safety standards, reporting requirements, and agency guidance across the US federal government.",
    overview: `Executive Order 14110, "Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence," was signed by President Biden on 30 October 2023. It is the most comprehensive US federal action on AI governance to date, establishing requirements across federal agencies and setting expectations that ripple through the private sector.

The Executive Order leverages existing authorities, particularly the Defense Production Act, to require companies developing the most powerful AI models to share safety test results and other critical information with the federal government. It directs NIST to develop standards for red-team testing of AI systems before public release.

Key provisions span eight priority areas: new safety and security standards for AI, protecting Americans' privacy, advancing equity and civil rights, standing up for consumers and workers, promoting innovation and competition, advancing American leadership abroad, ensuring responsible government use of AI, and addressing the needs of the AI workforce.

For the private sector, the most immediately impactful provisions include: reporting requirements for companies training large AI models (above certain compute thresholds), requirements for AI-generated content watermarking and authentication standards, guidance on AI use in critical infrastructure, and expectations for addressing algorithmic discrimination.

The EO directed numerous federal agencies to issue guidance and take action within specific timeframes. NIST was tasked with developing AI safety and security guidelines, the Department of Commerce with establishing reporting requirements for foundation models, HHS with AI in healthcare guidance, DOE with AI in critical infrastructure standards, and many others.

However, the status of EO 14110 became uncertain following the change in administration in January 2025. The incoming administration signalled a different approach to AI governance, potentially revoking or significantly modifying the EO. Organisations should monitor developments closely while recognising that many of the frameworks and standards developed under the EO (such as NIST's AI RMF extensions) retain independent value.

Regardless of the EO's status, many of its directives catalysed important work that continues: NIST AI standards development, AI safety research, and agency-specific AI governance frameworks. The EO also influenced state-level AI legislation and international AI governance discussions.

For compliance professionals, the EO's legacy includes the emphasis on red-team testing, the concept of compute-based thresholds for regulatory attention, the integration of AI governance into existing regulatory frameworks, and the recognition that AI governance requires whole-of-government coordination.`,
    keyRequirements: [
      "Companies developing dual-use foundation models above compute thresholds must report to the federal government",
      "Share results of red-team safety tests with the government",
      "AI-generated content watermarking and authentication standards development",
      "Federal agencies must designate Chief AI Officers and implement AI governance",
      "Agencies must conduct AI impact assessments for rights-impacting AI uses",
      "Advance privacy-preserving AI techniques and research",
      "Address algorithmic discrimination in AI systems",
      "Develop AI safety standards through NIST",
      "Protect workers from AI-related displacement and workplace surveillance",
      "Support responsible AI use in healthcare, education, and criminal justice"
    ],
    timeline: [
      { date: "30 October 2023", event: "Executive Order 14110 signed" },
      { date: "January 2024", event: "Initial reporting requirements take effect (90-day deadlines)" },
      { date: "April 2024", event: "240-day agency actions due" },
      { date: "July 2024", event: "365-day agency actions due; multiple agency reports published" },
      { date: "January 2025", event: "Administration change; future of EO uncertain" },
      { date: "2025", event: "Monitoring for potential revocation or modification" }
    ],
    whoItAffects: [
      "Companies developing large-scale AI models (above compute thresholds)",
      "Federal government agencies and contractors",
      "AI developers in critical infrastructure sectors",
      "Healthcare AI system providers",
      "Companies using AI in employment and hiring",
      "Organisations using AI in ways that affect civil rights and equity"
    ],
    readinessChecklist: [
      "Determine if any AI models exceed the EO's compute reporting thresholds",
      "Implement red-team testing for AI systems, particularly foundation models",
      "Monitor agency-specific guidance issued under the EO",
      "Track the EO's status under the current administration",
      "Implement AI content authentication and watermarking where applicable",
      "Assess AI systems for algorithmic discrimination and bias",
      "Review AI use in employment contexts against EEOC guidance",
      "Align AI governance with NIST AI RMF (developed under EO direction)",
      "Implement AI safety testing practices regardless of EO status",
      "Document AI governance practices for potential regulatory inquiries"
    ],
    resources: [
      { title: "Executive Order 14110 Full Text", url: "https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/" },
      { title: "AI.gov — Federal AI Resources", url: "https://ai.gov/" },
      { title: "NIST AI Safety Standards", url: "https://www.nist.gov/artificial-intelligence" },
      { title: "OMB AI Governance Memo", url: "https://www.whitehouse.gov/omb/briefing-room/" }
    ],
    faq: [
      { question: "Is the Executive Order still in effect?", answer: "The status of EO 14110 is subject to change with the new administration in 2025. While the EO may be revoked or modified, many of the standards and frameworks it catalysed (NIST AI RMF, agency guidance) continue independently. Check current status." },
      { question: "Does the EO apply to private companies?", answer: "Directly, the EO's binding requirements primarily apply to federal agencies. However, it impacts the private sector through reporting requirements for large AI model developers, guidance that shapes industry standards, and influence on federal procurement and contracting." },
      { question: "What are the compute thresholds for reporting?", answer: "The EO requires reporting for models trained using more than 10^26 integer or floating-point operations, or 10^23 operations for models primarily trained on biological sequence data. These thresholds capture only the most powerful models." }
    ]
  },
  {
    slug: "colorado-ai-act",
    name: "Colorado Artificial Intelligence Act",
    shortName: "Colorado AI Act",
    region: "Colorado, United States",
    regionCode: "US",
    status: "Upcoming",
    type: "Law",
    effectiveDate: "2026-02-01",
    summary: "The first comprehensive US state-level AI law, requiring impact assessments and transparency for high-risk AI systems that make consequential decisions.",
    overview: `The Colorado Artificial Intelligence Act (SB 24-205), signed into law on 17 May 2024, is the first comprehensive state-level AI legislation in the United States. Set to take effect on 1 February 2026, it establishes obligations for developers and deployers of "high-risk AI systems" — AI systems that make or substantially support "consequential decisions" affecting Coloradans.

The Act defines "consequential decisions" broadly to include decisions that have a material legal or similarly significant effect on consumers in areas such as education, employment, financial services, government services, healthcare, housing, insurance, and legal services. This broad scope means many AI systems used in consumer-facing contexts will be covered.

A key concept in the Colorado AI Act is "algorithmic discrimination," defined as any condition in which the use of an AI system results in an unlawful differential treatment or impact that disfavours an individual or group based on protected characteristics including age, color, disability, ethnicity, genetic information, national origin, race, religion, sex, and veteran status.

For developers of high-risk AI systems, obligations include: providing deployers with documentation about the system's capabilities, limitations, and known risks; making available a summary of training data and known biases; publishing on their website a statement about the types of high-risk AI systems they develop and how they manage risks of algorithmic discrimination; and providing deployers with information needed to complete impact assessments.

For deployers of high-risk AI systems, obligations include: implementing a risk management policy and programme; completing an impact assessment for each high-risk AI system before deployment; providing consumers with notice that AI is being used to make consequential decisions; providing a statement about the purpose, nature, and limitations of the AI system; providing consumers an opportunity to correct incorrect personal data used by the AI system; and providing consumers an opportunity for human review (with appeal) of adverse consequential decisions.

The Act also requires deployers to notify the Colorado Attorney General within 90 days of discovering that a high-risk AI system has caused algorithmic discrimination. This notification requirement creates a strong incentive for ongoing monitoring and bias detection.

Enforcement is through the Colorado Attorney General, who has exclusive enforcement authority. There is no private right of action. The Attorney General can seek injunctive relief and civil penalties. Importantly, the Act provides an affirmative defence for developers and deployers who maintain reasonable compliance programmes, including compliance with recognized AI risk management frameworks like the NIST AI RMF or ISO 42001.

The Colorado AI Act has been influential, with several other US states introducing similar legislation. It represents a significant development in the patchwork of US AI regulation and provides a template that other states may follow or adapt.`,
    keyRequirements: [
      "Developers must provide deployers with system documentation, training data summaries, and risk information",
      "Developers must publish a public statement about high-risk AI systems they develop",
      "Deployers must implement a risk management policy and programme for high-risk AI",
      "Deployers must complete impact assessments before deploying high-risk AI systems",
      "Provide consumers notice that AI is used for consequential decisions",
      "Provide consumers a description of the AI system's purpose and limitations",
      "Allow consumers to correct inaccurate personal data used by AI systems",
      "Offer human review and appeal for adverse AI-driven consequential decisions",
      "Notify the Attorney General within 90 days of discovering algorithmic discrimination",
      "Maintain documentation demonstrating compliance",
      "Annual review and update of impact assessments",
      "Affirmative defence available for reasonable compliance programmes"
    ],
    timeline: [
      { date: "January 2024", event: "SB 24-205 introduced in Colorado Senate" },
      { date: "May 2024", event: "Governor signs Colorado AI Act into law" },
      { date: "1 February 2026", event: "Act takes effect" },
      { date: "1 February 2026", event: "Developers must make required disclosures available" },
      { date: "1 February 2026", event: "Deployers must have risk management policies and impact assessments in place" }
    ],
    whoItAffects: [
      "Developers of AI systems that make or support consequential decisions about Coloradans",
      "Deployers (businesses) using high-risk AI systems for consequential decisions in Colorado",
      "Organisations making AI-driven decisions in: education, employment, finance, healthcare, housing, insurance, legal services",
      "National and international companies serving Colorado consumers with AI-driven services",
      "AI vendors selling to Colorado-based businesses"
    ],
    readinessChecklist: [
      "Identify all AI systems that make or support 'consequential decisions' about Colorado consumers",
      "Determine developer vs. deployer obligations for each system",
      "Implement a risk management policy and programme for high-risk AI",
      "Conduct impact assessments for each high-risk AI system",
      "Establish bias testing and algorithmic discrimination monitoring",
      "Implement consumer notification mechanisms for AI-driven decisions",
      "Create processes for consumers to correct personal data and request human review",
      "Set up Attorney General notification procedures for algorithmic discrimination discovery",
      "Document compliance with NIST AI RMF or ISO 42001 for affirmative defence",
      "Train staff on Colorado AI Act requirements",
      "Review vendor contracts for AI developer disclosure requirements",
      "Establish annual impact assessment review cycle"
    ],
    resources: [
      { title: "Colorado SB 24-205 Full Text", url: "https://leg.colorado.gov/bills/sb24-205" },
      { title: "Colorado Attorney General AI Resources", url: "https://coag.gov/resources/artificial-intelligence/" },
      { title: "NIST AI RMF (referenced for affirmative defence)", url: "https://www.nist.gov/artificial-intelligence" }
    ],
    faq: [
      { question: "When does the Colorado AI Act take effect?", answer: "The Colorado AI Act takes effect on 1 February 2026. Organisations should already be preparing by inventorying AI systems, conducting impact assessments, and implementing risk management programmes." },
      { question: "What is a 'consequential decision' under the Act?", answer: "A consequential decision is one that has a material legal or similarly significant effect on a consumer in areas including education, employment, financial services, government services, healthcare, housing, insurance, and legal services." },
      { question: "Is there a private right of action?", answer: "No. Only the Colorado Attorney General has enforcement authority. However, the Act requires notification to the AG of algorithmic discrimination, creating accountability. Compliance with NIST AI RMF or ISO 42001 provides an affirmative defence." }
    ]
  },
  {
    slug: "sec-ai-disclosure",
    name: "SEC AI Disclosure Requirements",
    shortName: "SEC AI Disclosure",
    region: "United States",
    regionCode: "US",
    status: "Upcoming",
    type: "Law",
    effectiveDate: "2025-06-01",
    summary: "Emerging SEC requirements for public companies to disclose material AI risks, AI governance practices, and AI-related impacts in securities filings.",
    overview: `The US Securities and Exchange Commission (SEC) has been increasingly focused on artificial intelligence disclosures by public companies, driven by the materiality of AI-related risks and opportunities for investors. While there is no single "SEC AI Disclosure Rule," the SEC has been using existing disclosure frameworks, enforcement actions, and proposed rulemaking to establish expectations for how public companies should disclose AI-related matters.

The SEC's interest in AI disclosures operates on multiple fronts. First, the existing principles-based disclosure framework requires companies to disclose material risks, including those related to AI. SEC Chair Gary Gensler emphasised that companies should not engage in "AI washing" — making misleading claims about AI capabilities — and the SEC has brought enforcement actions against companies for misleading AI-related statements.

In March 2024, the SEC charged two investment advisers with making false and misleading statements about their purported use of AI in investment processes. These enforcement actions signal that the SEC treats AI claims as material statements subject to anti-fraud provisions of the securities laws.

The SEC has also indicated that existing disclosure requirements under Regulation S-K already capture many AI-related disclosures. Item 105 (Risk Factors) requires disclosure of material AI risks, including cybersecurity risks associated with AI, risks of AI model failure, regulatory risks from emerging AI laws, and competitive risks from AI disruption. Item 101 (Description of Business) may require disclosure of material AI use in business operations. Item 103 (Legal Proceedings) requires disclosure of AI-related litigation.

The SEC's proposed rules on cybersecurity disclosure (adopted in 2023) also impact AI governance, as AI systems are subject to cybersecurity risks and incidents involving AI systems may trigger disclosure requirements under the new cybersecurity rules.

For companies using AI in financial services, the SEC proposed Rule 15l-2 in July 2023, which would require broker-dealers and investment advisers to eliminate or neutralise conflicts of interest associated with using predictive data analytics and AI in investor interactions. While this proposal faced significant industry opposition and its future is uncertain, it reflects the SEC's focus on AI's impact in financial services.

The SEC's examination priorities have also included AI governance, with the Division of Examinations indicating that it will review firms' AI disclosures, AI governance practices, and AI-related risk management as part of routine examinations.

For public company compliance professionals, the practical impact is clear: AI-related risks, governance, and use must be evaluated for materiality and disclosed appropriately in periodic filings. Boards should have oversight of AI strategy and risks, and companies should ensure that any public claims about AI capabilities are accurate and not misleading.

The intersection of AI disclosure with ESG reporting is also notable, as investors increasingly view responsible AI as a component of good governance. AI governance disclosures may become a standard element of annual reports and proxy statements.`,
    keyRequirements: [
      "Disclose material AI-related risks in SEC filings (10-K Risk Factors)",
      "Ensure AI-related claims in public statements are accurate and not misleading",
      "Disclose material use of AI in business operations where relevant",
      "Report AI-related legal proceedings and regulatory actions",
      "Comply with cybersecurity disclosure rules for AI-related incidents",
      "Address AI governance in corporate governance disclosures",
      "Evaluate and disclose conflicts of interest in AI-driven financial services (if applicable)",
      "Board oversight of AI strategy, risks, and governance",
      "Internal controls over AI-related financial reporting and disclosures",
      "Monitor SEC guidance and rulemaking on AI-specific disclosure requirements"
    ],
    timeline: [
      { date: "2023", event: "SEC signals increased focus on AI disclosures and 'AI washing'" },
      { date: "July 2023", event: "SEC proposes rules on predictive data analytics/AI in financial services" },
      { date: "March 2024", event: "SEC brings first enforcement actions for misleading AI claims" },
      { date: "2024", event: "SEC examination priorities include AI governance review" },
      { date: "2025", event: "Expected further SEC guidance on AI disclosure expectations" },
      { date: "2025–2026", event: "Potential finalisation of AI-related financial services rules" }
    ],
    whoItAffects: [
      "All SEC-reporting public companies using or developing AI",
      "Broker-dealers and investment advisers using AI in investor interactions",
      "Companies making public claims about AI capabilities",
      "Boards of directors with oversight of AI strategy and risk",
      "CFOs and disclosure committees responsible for SEC filings",
      "Investor relations teams communicating AI strategy to the market"
    ],
    readinessChecklist: [
      "Review current SEC filings for adequacy of AI-related risk disclosures",
      "Assess materiality of AI use, risks, and opportunities for disclosure purposes",
      "Ensure all public AI claims are accurate and substantiated",
      "Implement board-level AI governance and oversight",
      "Review cybersecurity disclosure obligations for AI-related incidents",
      "Assess AI-related conflicts of interest in financial services",
      "Document AI governance practices for potential SEC examination",
      "Train disclosure committees on AI-related disclosure obligations",
      "Monitor SEC guidance, enforcement actions, and rulemaking on AI",
      "Coordinate AI disclosures across SEC filings, earnings calls, and investor communications",
      "Implement internal controls for AI-related financial reporting",
      "Consider voluntary AI governance disclosures in proxy statements"
    ],
    resources: [
      { title: "SEC AI Enforcement Actions", url: "https://www.sec.gov/newsroom" },
      { title: "SEC Regulation S-K Disclosure Requirements", url: "https://www.sec.gov/divisions/corpfin/ecfrlinks.shtml" },
      { title: "SEC Examination Priorities", url: "https://www.sec.gov/about/offices/ocie" },
      { title: "SEC Proposed Rule on Predictive Analytics", url: "https://www.sec.gov/rules/proposed.shtml" }
    ],
    faq: [
      { question: "Is there a specific SEC rule requiring AI disclosure?", answer: "There is no single AI-specific disclosure rule yet. However, existing principles-based disclosure requirements (Regulation S-K) already require disclosure of material AI risks and uses. The SEC has also brought enforcement actions for misleading AI claims under existing anti-fraud provisions." },
      { question: "What is 'AI washing' and why does the SEC care?", answer: "AI washing refers to companies making exaggerated or misleading claims about their use of AI to attract investors. The SEC views this as a material misrepresentation that can mislead investors and has brought enforcement actions against firms for false AI claims." },
      { question: "Do boards need to oversee AI?", answer: "While there is no explicit SEC requirement for board-level AI oversight, good governance practice and investor expectations increasingly demand it. AI strategy and risks are material matters that fall within the board's oversight responsibilities." }
    ]
  }
];

export function getRegulation(slug: string): Regulation | undefined {
  return regulations.find((r) => r.slug === slug);
}

export function getRegulationSlugs(): string[] {
  return regulations.map((r) => r.slug);
}
