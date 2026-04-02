// CISSP Question Bank
// Source: CISSP Official Practice Tests, 3rd Edition (Chapple & Seidl, Wiley/Sybex, 2021)
//         CISSP Practice Exams, 5th Edition (Harris & Ham, McGraw-Hill, 2019)
// For personal study use only.
// Format: { id, domain, domainLabel, text, choices[4], correctIndex(0-3), hard, explanation }

window.CISSP_BANK = [

  // ─────────────────────────────────────────────────────────────
  // DOMAIN 1 – Security and Risk Management
  // ─────────────────────────────────────────────────────────────
  {
    id: "d1-01", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Gavin is creating a report on the results of his most recent risk assessment. He wants to identify the remaining level of risk to the organization after adopting security controls. What term best describes this level of risk?",
    choices: ["Inherent risk", "Residual risk", "Control risk", "Mitigated risk"],
    correctIndex: 1, hard: false,
    explanation: "Residual risk is the risk that remains after controls are applied. Inherent risk is the risk before any controls are in place."
  },
  {
    id: "d1-02", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Francine is a security specialist for a U.S. online service provider. She received a claim from a copyright holder that a user is storing infringing content on her service. What law governs the actions she must take?",
    choices: ["Copyright Act", "Lanham Act", "Digital Millennium Copyright Act", "Gramm-Leach-Bliley Act"],
    correctIndex: 2, hard: false,
    explanation: "The DMCA establishes safe harbor for ISPs and requires them to respond to valid takedown notices from copyright holders."
  },
  {
    id: "d1-03", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "FlyAway Travel has offices in both the EU and the United States. An EU customer requests that their account be terminated and data erased. Under GDPR, which principle applies?",
    choices: ["The right to access", "Privacy by design", "The right to be forgotten", "The right of data portability"],
    correctIndex: 2, hard: false,
    explanation: "The GDPR's 'right to be forgotten' (Article 17) allows individuals to request deletion of their personal data."
  },
  {
    id: "d1-04", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "After conducting a qualitative risk assessment, Sally recommends purchasing cybersecurity breach insurance. What type of risk response is she recommending?",
    choices: ["Accept", "Transfer", "Reduce", "Reject"],
    correctIndex: 1, hard: false,
    explanation: "Purchasing insurance shifts the financial impact of a risk to a third party—this is risk transference."
  },
  {
    id: "d1-05", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Renee is speaking to her board of directors about their cybersecurity responsibilities. What rule requires that senior executives take personal responsibility for information security matters?",
    choices: ["Due diligence rule", "Personal liability rule", "Prudent man rule", "Due process rule"],
    correctIndex: 2, hard: false,
    explanation: "The prudent man rule requires executives to act with the same level of care as any reasonable, prudent person under the same circumstances."
  },
  {
    id: "d1-06", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Wanda's U.S.-based organization is facilitating customer data exchange with an EU business partner. What is the best method to ensure GDPR compliance for this transfer?",
    choices: ["Binding corporate rules", "Privacy Shield", "Standard contractual clauses", "Safe harbor"],
    correctIndex: 2, hard: true,
    explanation: "Standard contractual clauses (SCCs) issued by the EU are the preferred mechanism for cross-border data transfers between separate companies. Privacy Shield was invalidated, and binding corporate rules apply within the same corporate group."
  },
  {
    id: "d1-07", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Yolanda is the chief privacy officer for a financial institution and is researching privacy requirements related to customer checking accounts. Which law is most likely to apply?",
    choices: ["GLBA", "SOX", "HIPAA", "FERPA"],
    correctIndex: 0, hard: false,
    explanation: "The Gramm-Leach-Bliley Act (GLBA) governs the privacy of customer financial information at financial institutions."
  },
  {
    id: "d1-08", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Tim's organization recently received a government contract. What law now likely applies to the information systems involved?",
    choices: ["FISMA", "PCI DSS", "HIPAA", "GISRA"],
    correctIndex: 0, hard: false,
    explanation: "FISMA (Federal Information Security Management Act) applies to federal agencies and their contractors."
  },
  {
    id: "d1-09", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Chris is advising travelers about export control compliance. Which technology is most likely to trigger these regulations?",
    choices: ["Memory chips", "Office productivity applications", "Hard drives", "Encryption software"],
    correctIndex: 3, hard: false,
    explanation: "U.S. export control laws specifically regulate the export of strong encryption software to certain countries."
  },
  {
    id: "d1-10", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Bobbi is investigating an incident where an attacker began with a normal user account but exploited a system vulnerability to gain administrative rights. Under STRIDE, what type of attack occurred?",
    choices: ["Spoofing", "Repudiation", "Tampering", "Elevation of privilege"],
    correctIndex: 3, hard: false,
    explanation: "In elevation of privilege, an attacker transforms a limited account into one with greater privileges. Spoofing falsifies identity; tampering alters data integrity; repudiation denies accountability."
  },
  {
    id: "d1-11", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "You have decided to accept a risk after completing your business continuity planning effort. What should you do next?",
    choices: ["Implement new security controls to reduce the risk", "Design a disaster recovery plan", "Repeat the business impact assessment", "Document your decision-making process"],
    correctIndex: 3, hard: false,
    explanation: "Whenever you accept a risk, you must maintain detailed documentation of the acceptance decision to satisfy auditors and demonstrate due diligence."
  },
  {
    id: "d1-12", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Tony is developing a business continuity plan and has difficulty combining information about tangible and intangible assets. What risk assessment approach would be most effective?",
    choices: ["Quantitative risk assessment", "Qualitative risk assessment", "Neither quantitative nor qualitative", "Combination of quantitative and qualitative"],
    correctIndex: 3, hard: false,
    explanation: "Quantitative assessment handles financial/tangible risk well; qualitative handles intangibles like reputation. Combining both provides the most complete picture."
  },
  {
    id: "d1-13", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Vincent believes a former employee stole trade secret information and took it to a competitor. Under what law could he pursue charges?",
    choices: ["Copyright law", "Lanham Act", "Glass-Steagall Act", "Economic Espionage Act"],
    correctIndex: 3, hard: false,
    explanation: "The Economic Espionage Act imposes criminal penalties on anyone found guilty of stealing trade secrets from U.S. companies."
  },
  {
    id: "d1-14", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Which principle imposes a standard of care upon an individual that is equivalent to what would be expected from a reasonable person under the circumstances?",
    choices: ["Due diligence", "Separation of duties", "Due care", "Least privilege"],
    correctIndex: 2, hard: false,
    explanation: "Due care is the broad standard requiring individuals to act as a reasonable person would. Due diligence is the specific component requiring individuals to exercise due care when completing assigned responsibilities."
  },
  {
    id: "d1-15", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Keenan Systems developed a new manufacturing process for microprocessors. The company wants to license the technology but prevent unauthorized use. What type of intellectual property protection is best suited?",
    choices: ["Patent", "Trade secret", "Copyright", "Trademark"],
    correctIndex: 0, hard: false,
    explanation: "A patent is appropriate when the organization wants to license the technology to others. A trade secret would not be viable once the process is licensed to third parties."
  },
  {
    id: "d1-16", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "What are the key control categories that accurately describe a fence around a facility? (Select the best answer.)",
    choices: ["Detective and compensating", "Corrective and deterrent", "Physical, deterrent, and preventive", "Administrative and technical"],
    correctIndex: 2, hard: false,
    explanation: "A fence is a physical control that deters would-be intruders and prevents unauthorized access. It does not have detective capability on its own."
  },
  {
    id: "d1-17", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Mike recently implemented an intrusion prevention system designed to block common network attacks. What type of risk management strategy is Mike pursuing?",
    choices: ["Risk acceptance", "Risk avoidance", "Risk mitigation", "Risk transference"],
    correctIndex: 2, hard: false,
    explanation: "Risk mitigation reduces the likelihood or impact of a risk. An IPS reduces the probability of a successful attack."
  },
  {
    id: "d1-18", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Carl is a federal agent investigating a computer crime case. He wants to pursue a case that will lead to imprisonment. What standard of proof must Carl meet?",
    choices: ["Beyond the shadow of a doubt", "Preponderance of the evidence", "Beyond a reasonable doubt", "Majority of the evidence"],
    correctIndex: 2, hard: false,
    explanation: "Criminal cases require the 'beyond a reasonable doubt' standard to secure a conviction and imprisonment. Civil cases use preponderance of the evidence."
  },
  {
    id: "d1-19", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "The Acme Widgets Company is concerned that a rogue accountant could create a false vendor and issue unauthorized checks. What security control best prevents this?",
    choices: ["Mandatory vacation", "Separation of duties", "Defense in depth", "Job rotation"],
    correctIndex: 1, hard: false,
    explanation: "Separation of duties ensures that one person cannot perform both the creation and approval of a payment, preventing a single rogue employee from committing fraud."
  },
  {
    id: "d1-20", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "HAL Systems decided to stop offering public NTP services because of a fear that its servers would be used in amplification DDoS attacks. What risk management strategy did HAL pursue?",
    choices: ["Risk mitigation", "Risk acceptance", "Risk transference", "Risk avoidance"],
    correctIndex: 3, hard: false,
    explanation: "Risk avoidance eliminates the risk by altering business activities. HAL avoided the NTP amplification risk entirely by stopping the service."
  },
  {
    id: "d1-21", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Ben is designing a messaging system for a bank and wants a feature that allows the recipient to prove to a third party that the message came from the purported originator. What goal is Ben trying to achieve?",
    choices: ["Authentication", "Authorization", "Integrity", "Nonrepudiation"],
    correctIndex: 3, hard: false,
    explanation: "Nonrepudiation allows a recipient to prove to a third party that a message came from a specific sender—the sender cannot deny sending it."
  },
  {
    id: "d1-22", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "What principle of information security states that an organization should implement overlapping security controls whenever possible?",
    choices: ["Least privilege", "Separation of duties", "Defense in depth", "Security through obscurity"],
    correctIndex: 2, hard: false,
    explanation: "Defense in depth uses multiple, overlapping security controls to meet the same objective, providing protection if any single control fails."
  },
  {
    id: "d1-23", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Helen is the owner of a U.S. website for middle and high school students. She wants her privacy policy to comply with COPPA. What is the cutoff age below which parental consent is required?",
    choices: ["13", "15", "17", "18"],
    correctIndex: 0, hard: false,
    explanation: "COPPA (Children's Online Privacy Protection Act) requires verifiable parental consent before collecting personal information from children under 13."
  },
  {
    id: "d1-24", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Tom considers locating a business in a 100-year flood plain. What is the annualized rate of occurrence (ARO) of a flood in this area?",
    choices: ["100", "1", "0.1", "0.01"],
    correctIndex: 3, hard: false,
    explanation: "An ARO is how often a risk is expected to occur per year. A 100-year flood is expected once every 100 years, or 1/100 = 0.01 times per year."
  },
  {
    id: "d1-25", domain: "security_and_risk_management", domainLabel: "Security and Risk Management",
    text: "Alan is performing threat modeling by breaking a system into its core elements: trust boundaries, data flow paths, input points, privileged operations, and security control details. What tool is he using?",
    choices: ["Vulnerability assessment", "Fuzzing", "Reduction analysis", "Data modeling"],
    correctIndex: 2, hard: true,
    explanation: "Reduction analysis (system decomposition) breaks the system into these five core elements to identify threats. It is a foundational step in threat modeling."
  },

  // ─────────────────────────────────────────────────────────────
  // DOMAIN 2 – Asset Security
  // ─────────────────────────────────────────────────────────────
  {
    id: "d2-01", domain: "asset_security", domainLabel: "Asset Security",
    text: "Angela is an information security architect at a bank tasked with ensuring that all transactions are secure as they traverse the network. She recommends TLS. What threat is she most likely stopping, and what method is she using?",
    choices: ["Man-in-the-middle, VPN", "Packet injection, encryption", "Sniffing, encryption", "Sniffing, TEMPEST"],
    correctIndex: 2, hard: false,
    explanation: "TLS encrypts data in transit, primarily protecting against passive sniffing attacks. TEMPEST prevents electromagnetic emanation eavesdropping, not network sniffing."
  },
  {
    id: "d2-02", domain: "asset_security", domainLabel: "Asset Security",
    text: "Nadia needs to apply security policies to cloud services and report on exceptions. What type of tool is best suited to this purpose?",
    choices: ["A next-generation firewall (NGFW)", "A cloud access security broker (CASB)", "An intrusion detection system (IDS)", "A SOAR platform"],
    correctIndex: 1, hard: false,
    explanation: "A CASB sits between users and cloud environments, providing monitoring and policy enforcement across cloud services—exactly what Nadia needs."
  },
  {
    id: "d2-03", domain: "asset_security", domainLabel: "Asset Security",
    text: "When media is labeled based on the classification of the data it contains, what rule is typically applied?",
    choices: ["Labeled based on its integrity requirements", "Labeled based on the highest classification level of data it contains", "Labeled with all levels of classification of its data", "Labeled with the lowest level of classification"],
    correctIndex: 1, hard: false,
    explanation: "Media is always labeled at the highest classification level it contains. This prevents data from being handled at a lower classification than it requires."
  },
  {
    id: "d2-04", domain: "asset_security", domainLabel: "Asset Security",
    text: "Which administrative process assists organizations in assigning appropriate levels of security control to sensitive information?",
    choices: ["Data classification", "Remanence", "Transmitting data", "Clearing"],
    correctIndex: 0, hard: false,
    explanation: "Data classification identifies the sensitivity of information and ensures that appropriate security controls are applied based on that classification."
  },
  {
    id: "d2-05", domain: "asset_security", domainLabel: "Asset Security",
    text: "Staff in an IT department who are delegated responsibility for day-to-day tasks hold what data role?",
    choices: ["Business owner", "User", "Data processor", "Custodian"],
    correctIndex: 3, hard: false,
    explanation: "Data custodians handle day-to-day technical tasks like backups, access control, and monitoring. They are delegated operational responsibilities by the data owner."
  },
  {
    id: "d2-06", domain: "asset_security", domainLabel: "Asset Security",
    text: "Helen's company uses a simple data lifecycle. What stage should come first?",
    choices: ["Data policy creation", "Data labeling", "Data collection", "Data analysis"],
    correctIndex: 2, hard: false,
    explanation: "Data collection is the first phase of the data lifecycle. Data can only be analyzed, used, retained, or destroyed after it has been collected."
  },
  {
    id: "d2-07", domain: "asset_security", domainLabel: "Asset Security",
    text: "Ben has been tasked with identifying security controls for systems covered by his organization's data classification system. Why might Ben use a security baseline?",
    choices: ["It applies in all circumstances, allowing consistent security controls", "They are approved by standards bodies, preventing liability", "They provide a good starting point that can be tailored to organizational needs", "They ensure systems are always in a secure state"],
    correctIndex: 2, hard: false,
    explanation: "Security baselines provide a starting point and are then scoped and tailored to meet specific organizational or system requirements."
  },
  {
    id: "d2-08", domain: "asset_security", domainLabel: "Asset Security",
    text: "Megan wants to prepare media to allow for reuse in an environment operating at the same sensitivity level. Which option best meets her needs?",
    choices: ["Clearing", "Erasing", "Purging", "Sanitization"],
    correctIndex: 0, hard: false,
    explanation: "Clearing overwrites all addressable locations on media with unclassified data, making it suitable for reuse at the same sensitivity level. Purging is more intensive and used for reuse at lower sensitivity levels."
  },
  {
    id: "d2-09", domain: "asset_security", domainLabel: "Asset Security",
    text: "Mikayla wants to identify sensitive data such as Social Security numbers and credit card numbers already in her environment. What type of tool is best suited?",
    choices: ["Manual searching", "A sensitive data scanning tool", "An asset metadata search tool", "A data loss prevention system"],
    correctIndex: 1, hard: false,
    explanation: "Sensitive data scanning tools are specifically designed to identify known-format data types (SSNs, credit cards) using pattern matching across stored data."
  },
  {
    id: "d2-10", domain: "asset_security", domainLabel: "Asset Security",
    text: "What issue is common to spare sectors, bad sectors on hard drives, and overprovisioned space on modern SSDs?",
    choices: ["They can be used to hide data", "They can only be degaussed", "They are not addressable, resulting in data remanence", "They may not be cleared when a drive is wiped, resulting in data remanence"],
    correctIndex: 3, hard: true,
    explanation: "These areas may not be overwritten by standard wiping utilities, leaving potentially sensitive data accessible through specialized tools."
  },
  {
    id: "d2-11", domain: "asset_security", domainLabel: "Asset Security",
    text: "What term best describes data that is resident in system memory?",
    choices: ["Data at rest", "Buffered data", "Data in use", "Data in motion"],
    correctIndex: 2, hard: false,
    explanation: "Data in use refers to data that is actively being processed, including data loaded into RAM. Data at rest is in storage; data in transit is moving across a network."
  },
  {
    id: "d2-12", domain: "asset_security", domainLabel: "Asset Security",
    text: "What technique could you use to mark trade secret information so it can be identified if released or stolen?",
    choices: ["Classification", "Symmetric encryption", "Watermarks", "Metadata"],
    correctIndex: 2, hard: false,
    explanation: "Digital watermarks embed an invisible marker in data to prove ownership and identify the source of unauthorized copies."
  },
  {
    id: "d2-13", domain: "asset_security", domainLabel: "Asset Security",
    text: "What type of encryption is best for protecting data on file servers, and what should protect it when in motion?",
    choices: ["TLS at rest and AES in motion", "AES at rest and TLS in motion", "VPN at rest and TLS in motion", "DES at rest and AES in motion"],
    correctIndex: 1, hard: false,
    explanation: "AES (symmetric encryption) is appropriate for data at rest. TLS (using asymmetric key exchange + symmetric session key) is appropriate for data in transit."
  },
  {
    id: "d2-14", domain: "asset_security", domainLabel: "Asset Security",
    text: "Chris is responsible for workstations used to handle proprietary and trade secret information. What should happen to these workstations at end of life?",
    choices: ["Erasing", "Clearing", "Sanitization", "Destruction"],
    correctIndex: 3, hard: false,
    explanation: "For highly sensitive data like trade secrets, destruction is the safest option. It ensures that no data can ever be recovered."
  },
  {
    id: "d2-15", domain: "asset_security", domainLabel: "Asset Security",
    text: "Fred wants to classify his organization's data. Which label should be applied to the highest classification level based on common commercial practice?",
    choices: ["Private", "Sensitive", "Public", "Proprietary"],
    correctIndex: 3, hard: false,
    explanation: "In commercial data classification, proprietary (or confidential) is typically the highest sensitivity level, representing data that is most critical to protect."
  },
  {
    id: "d2-16", domain: "asset_security", domainLabel: "Asset Security",
    text: "The CIS benchmarks are an example of what security practice?",
    choices: ["Conducting a risk assessment", "Implementing data labeling", "Proper system ownership", "Using security baselines"],
    correctIndex: 3, hard: false,
    explanation: "The CIS benchmarks provide hardening guidelines for various systems—they are a classic example of security baselines."
  },
  {
    id: "d2-17", domain: "asset_security", domainLabel: "Asset Security",
    text: "Adjusting CIS benchmarks to your organization's specific IT systems and mission involves what two processes?",
    choices: ["Scoping and selection", "Scoping and tailoring", "Baselining and tailoring", "Tailoring and selection"],
    correctIndex: 1, hard: false,
    explanation: "Scoping selects only the controls appropriate for your systems. Tailoring adjusts the selected controls to match your organization's specific mission and needs."
  },
  {
    id: "d2-18", domain: "asset_security", domainLabel: "Asset Security",
    text: "Henry's company sends customer data to a third-party company for analysis. What term best describes the third-party analysis company under GDPR?",
    choices: ["The data controller", "The data owner", "The data subject", "The data processor"],
    correctIndex: 3, hard: false,
    explanation: "A data processor processes personal data on behalf of a data controller. Henry's company is the controller; the third-party analyzer is the processor."
  },
  {
    id: "d2-19", domain: "asset_security", domainLabel: "Asset Security",
    text: "What information security risk to data at rest would result in the greatest reputational impact on an organization?",
    choices: ["Improper classification", "Data breach", "Decryption", "An intentional insider threat"],
    correctIndex: 1, hard: false,
    explanation: "A data breach—especially of sensitive customer data—typically causes the most severe reputational damage, customer loss, and regulatory consequences."
  },
  {
    id: "d2-20", domain: "asset_security", domainLabel: "Asset Security",
    text: "Full disk encryption like BitLocker protects data in what state?",
    choices: ["Data in transit", "Data at rest", "Unlabeled data", "Labeled data"],
    correctIndex: 1, hard: false,
    explanation: "Full disk encryption protects stored (at rest) data. It does not protect data while it is being transmitted over a network."
  },
  {
    id: "d2-21", domain: "asset_security", domainLabel: "Asset Security",
    text: "What is the primary purpose of data classification?",
    choices: ["It quantifies the cost of a data breach", "It prioritizes IT expenditures", "It allows compliance with breach notification laws", "It identifies the value of the data to the organization"],
    correctIndex: 3, hard: false,
    explanation: "Data classification identifies the sensitivity and value of data, enabling appropriate security controls to be applied and helping prioritize protection efforts."
  },
  {
    id: "d2-22", domain: "asset_security", domainLabel: "Asset Security",
    text: "What security measure best protects against a data breach if backup tapes are stolen or lost?",
    choices: ["Keep multiple copies of the tapes", "Replace tape media with hard drives", "Use appropriate security labels", "Use AES-256 encryption"],
    correctIndex: 3, hard: false,
    explanation: "Encrypting the tapes with AES-256 ensures that even if they are stolen, the data cannot be read without the encryption key."
  },
  {
    id: "d2-23", domain: "asset_security", domainLabel: "Asset Security",
    text: "Steve is concerned about employees who were privy to proprietary information leaving the organization. Which control is most effective against this threat?",
    choices: ["Sanitization", "NDAs", "Clearing", "Encryption"],
    correctIndex: 1, hard: false,
    explanation: "Non-disclosure agreements (NDAs) legally bind employees to maintain confidentiality about proprietary information, even after leaving the organization."
  },
  {
    id: "d2-24", domain: "asset_security", domainLabel: "Asset Security",
    text: "Alex works for a government agency that must meet U.S. federal requirements. He must ensure data is identifiable by its classification level when created. What should he do?",
    choices: ["Classify the data", "Encrypt the data", "Label the data", "Apply DRM to the data"],
    correctIndex: 2, hard: false,
    explanation: "Labeling places a visible or machine-readable marking on data to indicate its classification level at the time of creation, per federal requirements."
  },
  {
    id: "d2-25", domain: "asset_security", domainLabel: "Asset Security",
    text: "According to NIST SP 800-88, if media classified at a moderate security level will be sold as surplus, what process should Ben follow?",
    choices: ["Destroy, validate, document", "Clear, purge, document", "Purge, document, validate", "Purge, validate, document"],
    correctIndex: 3, hard: true,
    explanation: "NIST SP 800-88 requires that moderate-level media leaving organizational control be purged, the purge validated, and the process documented before reuse or disposal."
  },

  // ─────────────────────────────────────────────────────────────
  // DOMAIN 3 – Security Architecture and Engineering
  // ─────────────────────────────────────────────────────────────
  {
    id: "d3-01", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "What concept describes the degree of confidence that an organization has that its controls satisfy security requirements?",
    choices: ["Trust", "Credentialing", "Verification", "Assurance"],
    correctIndex: 3, hard: false,
    explanation: "Assurance is the level of confidence that security controls are correctly designed, implemented, and operating as intended."
  },
  {
    id: "d3-02", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "What type of security vulnerability are developers most likely to introduce when they create easy access paths for their own testing purposes?",
    choices: ["Maintenance hook", "Cross-site scripting", "SQL injection", "Buffer overflow"],
    correctIndex: 0, hard: false,
    explanation: "Maintenance hooks (backdoors) are intentionally introduced by developers for testing but pose a serious vulnerability if left in production code."
  },
  {
    id: "d3-03", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "In the Biba integrity model, Sally (Secret clearance) is blocked from reading a file with a Confidential classification. What principle is being enforced?",
    choices: ["Simple Security Property", "Simple Integrity Property", "*-Security Property", "*-Integrity Property"],
    correctIndex: 1, hard: true,
    explanation: "Biba's Simple Integrity Property (no read down) prevents a subject from reading data at a lower integrity level than their own clearance, preserving integrity by avoiding contamination."
  },
  {
    id: "d3-04", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Tom is responsible for maintaining security of systems that control industrial processes in a power plant. What term describes these systems?",
    choices: ["POWER", "SCADA", "HAVAL", "COBOL"],
    correctIndex: 1, hard: false,
    explanation: "SCADA (Supervisory Control and Data Acquisition) systems control and gather data from industrial processes such as power plants and utilities."
  },
  {
    id: "d3-05", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Sonia moved an encrypted drive to a new laptop after hardware failure and cannot access encrypted content despite knowing the password. What hardware feature is likely causing this?",
    choices: ["TCB", "TPM", "NIACAP", "RSA"],
    correctIndex: 1, hard: false,
    explanation: "A TPM (Trusted Platform Module) chip ties encryption keys to the specific motherboard. Moving an encrypted drive to a different system breaks the key binding."
  },
  {
    id: "d3-06", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "If Alice wants to send Bob a message encrypted for confidentiality using asymmetric cryptography, what key does she use to encrypt?",
    choices: ["Alice's public key", "Alice's private key", "Bob's public key", "Bob's private key"],
    correctIndex: 2, hard: false,
    explanation: "To encrypt a message for Bob, Alice uses Bob's public key. Only Bob's private key can decrypt it, ensuring confidentiality."
  },
  {
    id: "d3-07", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Alice wants to digitally sign a message to Bob. What key should she use to create the digital signature?",
    choices: ["Alice's public key", "Alice's private key", "Bob's public key", "Bob's private key"],
    correctIndex: 1, hard: false,
    explanation: "Alice creates a digital signature using her own private key. Bob (or anyone else) can verify the signature using Alice's publicly available public key."
  },
  {
    id: "d3-08", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "What name is given to the random value added to a password before hashing, in order to defeat rainbow table attacks?",
    choices: ["Hash", "Salt", "Extender", "Rebar"],
    correctIndex: 1, hard: false,
    explanation: "A salt is a random value prepended to a password before hashing. This ensures that even identical passwords produce different hash values, defeating precomputed rainbow tables."
  },
  {
    id: "d3-09", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Which is NOT an attribute of a hashing algorithm?",
    choices: ["They require a cryptographic key", "They are irreversible", "It is very difficult to find two messages with the same hash value", "They take variable-length input"],
    correctIndex: 0, hard: false,
    explanation: "Hash functions do NOT use cryptographic keys. They are keyless, one-way functions. Encryption algorithms use keys; hash algorithms do not."
  },
  {
    id: "d3-10", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "What type of fire suppression system fills with water after initial fire detection and then requires a sprinkler head heat activation before dispensing water?",
    choices: ["Wet pipe", "Dry pipe", "Deluge", "Preaction"],
    correctIndex: 3, hard: false,
    explanation: "A preaction system uses two stages: pipes fill with water at the first sign of fire detection, then heat sensors on sprinkler heads trigger water release."
  },
  {
    id: "d3-11", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Florian and Tobias want to begin communicating using a symmetric cryptosystem but have no pre-arranged key and cannot meet in person. What algorithm can they use to securely exchange the secret key?",
    choices: ["IDEA", "Diffie-Hellman", "RSA", "MD5"],
    correctIndex: 1, hard: false,
    explanation: "The Diffie-Hellman algorithm allows two parties to securely establish a shared symmetric key over an insecure public channel without a prior shared secret."
  },
  {
    id: "d3-12", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Carl's organization underwent a user access review, and auditors noted several cases of privilege creep. What security principle was violated?",
    choices: ["Fail securely", "Keep it simple", "Trust but verify", "Least privilege"],
    correctIndex: 3, hard: false,
    explanation: "Privilege creep—accumulating permissions beyond what is needed—violates the least privilege principle, which states employees should have only the minimum access required."
  },
  {
    id: "d3-13", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Matt's organization adopted a zero-trust network architecture. Which of the following criteria would be LEAST appropriate for granting a subject access?",
    choices: ["Password", "Two-factor authentication", "IP address", "Biometric scan"],
    correctIndex: 2, hard: true,
    explanation: "In zero trust, access decisions should never be based on network location. IP addresses indicate network position, not identity, and are therefore the least appropriate criterion."
  },
  {
    id: "d3-14", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "What cryptographic principle stands behind the idea that cryptographic algorithms should be open to public inspection?",
    choices: ["Security through obscurity", "Kerckhoffs' principle", "Defense in depth", "Heisenberg principle"],
    correctIndex: 1, hard: false,
    explanation: "Kerckhoffs' principle states that a cryptosystem should be secure even if everything about it—except the key—is public knowledge."
  },
  {
    id: "d3-15", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "In the ring protection model, what ring contains the operating system's kernel?",
    choices: ["Ring 0", "Ring 1", "Ring 2", "Ring 3"],
    correctIndex: 0, hard: false,
    explanation: "Ring 0 is the innermost ring with the highest privilege level—the kernel runs here. Ring 3 is the outermost ring where user applications run."
  },
  {
    id: "d3-16", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "In a SaaS cloud environment, who is normally responsible for ensuring appropriate firewall controls are in place to protect the application?",
    choices: ["Customer's security team", "Vendor", "Customer's networking team", "Customer's infrastructure management team"],
    correctIndex: 1, hard: false,
    explanation: "In SaaS, the vendor manages the entire application stack and underlying infrastructure, including firewall controls, under the cloud shared responsibility model."
  },
  {
    id: "d3-17", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "In a virtualized computing environment, what component is responsible for enforcing separation between guest machines?",
    choices: ["Guest operating system", "Hypervisor", "Kernel", "Protection manager"],
    correctIndex: 1, hard: false,
    explanation: "The hypervisor coordinates access to physical hardware and enforces isolation between different virtual machines running on the same physical platform."
  },
  {
    id: "d3-18", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Rick is a Python developer who provides his code to a vendor who executes it on their server environment. What type of cloud service is this?",
    choices: ["SaaS", "PaaS", "IaaS", "CaaS"],
    correctIndex: 1, hard: false,
    explanation: "PaaS (Platform as a Service) provides a platform for customers to deploy and run their own code without managing the underlying infrastructure."
  },
  {
    id: "d3-19", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "A hacker waited until James verified a file's integrity hash, then modified the file before James read it. What type of attack occurred?",
    choices: ["Social engineering", "TOCTOU", "Data diddling", "Parameter checking"],
    correctIndex: 1, hard: true,
    explanation: "TOCTOU (Time of Check to Time of Use) attacks exploit the time gap between when a security check is performed and when the protected resource is used."
  },
  {
    id: "d3-20", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "A shipping clerk totaled all individual sales records to determine total sales volume—information that was restricted. What type of attack occurred?",
    choices: ["Social engineering", "Inference", "Aggregation", "Data diddling"],
    correctIndex: 2, hard: true,
    explanation: "In an aggregation attack, combining individual pieces of non-sensitive data produces information at a higher sensitivity level than any individual piece."
  },
  {
    id: "d3-21", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "What physical security control broadcasts false emanations constantly to mask the presence of true electromagnetic emanations from computing equipment?",
    choices: ["Faraday cage", "Copper-infused windows", "Shielded cabling", "White noise"],
    correctIndex: 3, hard: false,
    explanation: "White noise generators create false EM signals that jam or mask real emanations from electronic equipment, making eavesdropping impractical."
  },
  {
    id: "d3-22", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Todd wants to add a compromised digital certificate to the certificate revocation list (CRL). What element of the certificate goes on the CRL?",
    choices: ["Serial number", "Public key", "Digital signature", "Private key"],
    correctIndex: 0, hard: false,
    explanation: "The CRL contains the serial numbers of certificates that have been revoked by the issuing CA. Private keys are never stored in certificates or CRLs."
  },
  {
    id: "d3-23", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Sherry found the MD5 algorithm in use within her organization. What should she do about it?",
    choices: ["Replace MD5, as it is no longer secure", "Keep AES, as it is still secure", "Keep PGP in use", "Upgrade to WPA3"],
    correctIndex: 0, hard: false,
    explanation: "MD5 has known intentional collision vulnerabilities and is no longer considered secure for cryptographic purposes. It should be replaced with a stronger hash like SHA-256."
  },
  {
    id: "d3-24", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "In TLS, what type of key is used to encrypt the actual content of communications between a web server and a client?",
    choices: ["Ephemeral session key", "Client's public key", "Server's public key", "Server's private key"],
    correctIndex: 0, hard: true,
    explanation: "TLS uses an ephemeral symmetric session key for encrypting bulk data. The asymmetric keys are only used during the handshake to establish this shared session key."
  },
  {
    id: "d3-25", domain: "security_architecture_engineering", domainLabel: "Security Architecture and Engineering",
    text: "Carl is deploying video sensors in remote locations. He wants to perform as much computation as possible on the device itself before sending results to the cloud. What computing model best meets his needs?",
    choices: ["Serverless computing", "Edge computing", "IaaS computing", "SaaS computing"],
    correctIndex: 1, hard: false,
    explanation: "Edge computing places processing power at the data source, minimizing the amount of data that must be sent back to the cloud—ideal for bandwidth-limited remote deployments."
  },

  // ─────────────────────────────────────────────────────────────
  // DOMAIN 4 – Communication and Network Security
  // ─────────────────────────────────────────────────────────────
  {
    id: "d4-01", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Which email security solution provides signed messages (integrity, authentication, nonrepudiation) and enveloped message mode (integrity, authentication, confidentiality)?",
    choices: ["S/MIME", "MOSS", "PEM", "DKIM"],
    correctIndex: 0, hard: false,
    explanation: "S/MIME (Secure/Multipurpose Internet Mail Extensions) provides both signed and encrypted email capabilities, supporting digital signatures and message encryption."
  },
  {
    id: "d4-02", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Selah wants to provide port-based authentication on her network so that clients must authenticate before using the network. What technology is appropriate?",
    choices: ["802.11a", "802.3", "802.15.1", "802.1x"],
    correctIndex: 3, hard: false,
    explanation: "IEEE 802.1X provides port-based network access control, requiring devices to authenticate before being granted network access."
  },
  {
    id: "d4-03", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "SMTP, HTTP, and SNMP all operate at what layer of the OSI model?",
    choices: ["Layer 4", "Layer 5", "Layer 6", "Layer 7"],
    correctIndex: 3, hard: false,
    explanation: "SMTP, HTTP, and SNMP are Application layer (Layer 7) protocols. They communicate directly with user-facing applications."
  },
  {
    id: "d4-04", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Ben is designing a WiFi network and has been asked to choose the most secure option. Which wireless security standard should he choose?",
    choices: ["WPA2", "WPA", "WEP", "WPA3"],
    correctIndex: 3, hard: false,
    explanation: "WPA3 is the most current and secure Wi-Fi security standard. WEP is broken, WPA has vulnerabilities, and WPA2 has some weaknesses addressed in WPA3."
  },
  {
    id: "d4-05", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Melissa uses the ping utility during a penetration test. If she does not want to see her own ping packets in her sniffer, what protocol should she filter out?",
    choices: ["UDP", "TCP", "IP", "ICMP"],
    correctIndex: 3, hard: false,
    explanation: "Ping uses ICMP (Internet Control Message Protocol) echo request and echo reply messages. Filtering ICMP removes ping traffic from the capture."
  },
  {
    id: "d4-06", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Which converged protocol allows storage mounts over TCP and is frequently used as a lower-cost alternative to Fibre Channel?",
    choices: ["MPLS", "SDN", "VoIP", "iSCSI"],
    correctIndex: 3, hard: false,
    explanation: "iSCSI encapsulates SCSI commands in TCP/IP packets, enabling storage area network (SAN) functionality over standard IP networks at lower cost than Fibre Channel."
  },
  {
    id: "d4-07", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "The Address Resolution Protocol (ARP) and Reverse Address Resolution Protocol (RARP) operate at what OSI layer?",
    choices: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
    correctIndex: 1, hard: false,
    explanation: "ARP and RARP operate at the Data Link layer (Layer 2), mapping between hardware MAC addresses and network IP addresses."
  },
  {
    id: "d4-08", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Mark is concerned about the physical security of his network cables. What type of connection would be hardest to tap without specialized equipment?",
    choices: ["WiFi", "Bluetooth", "Cat5/Cat6 twisted pair", "Fiber optic"],
    correctIndex: 3, hard: false,
    explanation: "Fiber optic cables transmit light rather than electrical signals, making them extremely difficult to tap without specialized equipment and usually causing detectable signal disruption."
  },
  {
    id: "d4-09", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "What type of address is 127.0.0.1?",
    choices: ["A public IP address", "An RFC 1918 address", "An APIPA address", "A loopback address"],
    correctIndex: 3, hard: false,
    explanation: "127.0.0.1 is the IPv4 loopback address, used to test network functionality on the local machine without sending packets over the network."
  },
  {
    id: "d4-10", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Segmentation, sequencing, and error checking all occur at what OSI layer that is associated with SSL, TLS, and UDP?",
    choices: ["The Transport layer", "The Network layer", "The Session layer", "The Presentation layer"],
    correctIndex: 0, hard: false,
    explanation: "The Transport layer (Layer 4) handles segmentation, sequencing, error checking, and flow control. SSL/TLS and UDP operate at this layer."
  },
  {
    id: "d4-11", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "WPA2's Counter Mode Cipher Block Chaining Message Authentication Code Protocol (CCMP) is based on which common encryption scheme?",
    choices: ["DES", "3DES", "AES", "TLS"],
    correctIndex: 2, hard: false,
    explanation: "CCMP is based on the AES block cipher operating in Counter Mode, providing both data confidentiality and integrity for WPA2."
  },
  {
    id: "d4-12", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "What is the maximum speed that Category 5e cable is rated for?",
    choices: ["5 Mbps", "10 Mbps", "100 Mbps", "1000 Mbps"],
    correctIndex: 3, hard: false,
    explanation: "Category 5e cable is rated for up to 1000 Mbps (1 Gbps) Ethernet connections, making it suitable for gigabit networks."
  },
  {
    id: "d4-13", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "What function does VXLAN perform in a data center environment?",
    choices: ["It removes distance limitations for Ethernet cables", "It allows multiple subnets in the same IP space with duplicate addresses", "It tunnels layer 2 connections over a layer 3 network, stretching them across the underlying network", "All of the above"],
    correctIndex: 2, hard: true,
    explanation: "VXLAN (Virtual Extensible LAN) encapsulates Layer 2 Ethernet frames in UDP packets, allowing Layer 2 segments to span across Layer 3 networks in data center environments."
  },
  {
    id: "d4-14", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Valerie enables port security on the switches on her network. What type of attack is she most likely trying to prevent?",
    choices: ["IP spoofing", "MAC aggregation", "CAM table flooding", "VLAN hopping"],
    correctIndex: 2, hard: true,
    explanation: "CAM table flooding involves sending frames with many fake MAC addresses to exhaust the switch's address table, causing the switch to flood all traffic. Port security limits the number of MAC addresses per port."
  },
  {
    id: "d4-15", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Ben wants to use multiple ISPs to connect to his cloud VPC to ensure reliable access. What technology can he use to manage and optimize those connections?",
    choices: ["FCoE", "VXLAN", "SDWAN", "LiFi"],
    correctIndex: 2, hard: false,
    explanation: "SD-WAN (Software-Defined Wide Area Network) intelligently routes traffic across multiple WAN links, including multiple ISPs, optimizing performance and availability."
  },
  {
    id: "d4-16", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Angela discovered that her network suffered from broadcast storms and that contractors, guests, and administrative staff were on the same network segment. What design change should she recommend?",
    choices: ["Require encryption for all users", "Install a firewall at the network border", "Enable spanning tree loop detection", "Segment the network based on functional requirements"],
    correctIndex: 3, hard: false,
    explanation: "Segmenting the network (e.g., with VLANs) separates different user groups, reduces broadcast domain size, and improves both performance and security."
  },
  {
    id: "d4-17", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "ICMP, RIP, and network address translation all occur at what OSI layer?",
    choices: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
    correctIndex: 2, hard: false,
    explanation: "These are all Network layer (Layer 3) protocols/functions. They deal with logical addressing and routing between networks."
  },
  {
    id: "d4-18", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Ben needs to ensure that VM-to-VM traffic in his cloud IaaS environment is secure and cannot be captured. What can he do to fully ensure this?",
    choices: ["Prevent installation of a packet sniffer on all hosts", "Disable promiscuous mode for all virtual interfaces", "Disallow virtual taps", "Encrypt all traffic between hosts"],
    correctIndex: 3, hard: true,
    explanation: "Encrypting all traffic ensures that even if it is captured (by the hypervisor, a compromised host, etc.), the content remains confidential."
  },
  {
    id: "d4-19", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Which OSI layer includes electrical specifications, protocols, and interface standards?",
    choices: ["The Transport layer", "The Device layer", "The Physical layer", "The Data Link layer"],
    correctIndex: 2, hard: false,
    explanation: "The Physical layer (Layer 1) deals with the physical transmission of data—electrical signals, optical signals, radio waves, and the hardware specifications that govern them."
  },
  {
    id: "d4-20", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "What speed and frequency range does 802.11n support?",
    choices: ["5 GHz only", "900 MHz and 2.4 GHz", "2.4 GHz and 5 GHz", "2.4 GHz only"],
    correctIndex: 2, hard: false,
    explanation: "802.11n (Wi-Fi 4) operates in both the 2.4 GHz and 5 GHz bands, offering up to 600 Mbps throughput."
  },
  {
    id: "d4-21", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Susan wants to configure IPsec to provide confidentiality for the content of packets. What IPsec component provides this capability?",
    choices: ["AH", "ESP", "IKE", "ISAKMP"],
    correctIndex: 1, hard: false,
    explanation: "ESP (Encapsulating Security Payload) encrypts packet payloads to provide confidentiality. AH (Authentication Header) provides integrity but not confidentiality."
  },
  {
    id: "d4-22", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Derek wants to deploy redundant core routers and needs the greatest throughput from the cluster. What HA model should he use?",
    choices: ["Active/active", "Line interactive", "Active/passive", "Nearline"],
    correctIndex: 0, hard: false,
    explanation: "Active/active clustering has all nodes processing traffic simultaneously, maximizing throughput. Active/passive has one node on standby, wasting its capacity."
  },
  {
    id: "d4-23", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "What are two primary advantages that 5G networks have over 4G networks? (Select the best answer.)",
    choices: ["Anti-jamming features and DDoS protection", "Enhanced subscriber identity protection and mutual authentication capabilities", "Multifactor authentication and end-to-end encryption", "Lower latency and increased bandwidth only"],
    correctIndex: 1, hard: true,
    explanation: "5G introduces enhanced subscriber identity protection (SUPI replaces IMSI) and mutual authentication between the device and the network, addressing key 4G vulnerabilities."
  },
  {
    id: "d4-24", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "During a wireless penetration test, Susan runs aircrack-ng with a password file. Running WPA2 in what mode would cause her cracking efforts to fail?",
    choices: ["Using WPA2 encryption", "Running WPA2 in Enterprise mode", "Using WEP encryption", "Running WPA2 in PSK mode"],
    correctIndex: 1, hard: true,
    explanation: "WPA2 Enterprise uses individual user credentials via RADIUS authentication (802.1X/EAP), not a shared pre-shared key. Without a PSK to attack, password-based cracking tools are ineffective."
  },
  {
    id: "d4-25", domain: "communication_network_security", domainLabel: "Communication and Network Security",
    text: "Chris sets up a hotel network where systems in each room/suite can connect to each other but not to other suites, while all systems can reach the internet. What is the most effective solution?",
    choices: ["Per-room VPNs", "VLANs", "Port security", "Firewalls"],
    correctIndex: 1, hard: false,
    explanation: "VLANs logically segment the network so devices in different VLANs cannot directly communicate, while a Layer 3 device can route all VLANs to the internet."
  },

  // ─────────────────────────────────────────────────────────────
  // DOMAIN 5 – Identity and Access Management
  // ─────────────────────────────────────────────────────────────
  {
    id: "d5-01", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Alex has held many positions at his company over a decade. An audit discovers he has access from all his former roles. What issue has his company encountered?",
    choices: ["Excessive provisioning", "Unauthorized access", "Privilege creep", "Account review"],
    correctIndex: 2, hard: false,
    explanation: "Privilege creep occurs when a user accumulates access permissions over time without old access being revoked. It violates the principle of least privilege."
  },
  {
    id: "d5-02", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "The access control scheme in the table uses labels and classifications (Highly Sensitive/Confidential/Internal/Public) mapped to compartments. What access control model is this?",
    choices: ["RBAC", "DAC", "MAC", "TBAC"],
    correctIndex: 2, hard: false,
    explanation: "Mandatory Access Control (MAC) uses security labels on both subjects and objects, with classifications like Confidential and Highly Sensitive, enforced by the OS."
  },
  {
    id: "d5-03", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "When a subject claims an identity, what process is occurring?",
    choices: ["Login", "Identification", "Authorization", "Token presentation"],
    correctIndex: 1, hard: false,
    explanation: "Identification is the act of claiming an identity (e.g., providing a username). Authentication proves the claim (e.g., providing a password). Authorization grants permissions."
  },
  {
    id: "d5-04", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Susan's organization wants to use the strongest possible passwords. What password requirement will have the highest impact in preventing brute-force attacks?",
    choices: ["Change max age from 1 year to 180 days", "Increase minimum password length from 8 to 16 characters", "Increase complexity to require 3 character classes", "Retain a history of at least 4 passwords"],
    correctIndex: 1, hard: false,
    explanation: "Password length has the greatest impact on brute-force resistance. Each additional character exponentially increases the search space. Length beats complexity."
  },
  {
    id: "d5-05", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Which event should concern Alaina most during a review of service accounts?",
    choices: ["An interactive login for the service account", "A password change for the service account", "Limitations placed on the service account's rights", "Local use of the service account"],
    correctIndex: 0, hard: true,
    explanation: "Service accounts should not be used for interactive logins. An interactive login for a service account may indicate misuse, compromise, or unauthorized privilege escalation."
  },
  {
    id: "d5-06", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Alex is implementing SAML integration with a third-party partner. He is concerned about eavesdropping AND forged assertions. What should he do to prevent both?",
    choices: ["Use SAML's secure mode", "Implement TLS using a strong cipher suite only", "Implement TLS using a strong cipher suite and digital signatures", "Implement TLS and message hashing"],
    correctIndex: 2, hard: true,
    explanation: "TLS protects against eavesdropping (confidentiality in transit). Digital signatures on SAML assertions protect against forgery (integrity and authentication)."
  },
  {
    id: "d5-07", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Jessica needs to send information about services she is provisioning to a third-party organization. What standards-based markup language should she use?",
    choices: ["SAML", "SOAP", "SPML", "XACML"],
    correctIndex: 2, hard: true,
    explanation: "SPML (Service Provisioning Markup Language) is specifically designed for provisioning user accounts and access rights across different systems and organizations."
  },
  {
    id: "d5-08", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "During a penetration test, Chris recovers a file containing hashed passwords. What type of attack is most likely to succeed?",
    choices: ["A brute-force attack", "A pass-the-hash attack", "A rainbow table attack", "A salt recovery attack"],
    correctIndex: 2, hard: false,
    explanation: "Rainbow table attacks use precomputed hash values to quickly reverse hash values back to passwords. They are highly effective against unsalted hashes."
  },
  {
    id: "d5-09", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Google's identity integration across many different organizations and applications is an example of which concept?",
    choices: ["PKI", "Federation", "Single sign-on", "Provisioning"],
    correctIndex: 1, hard: false,
    explanation: "Federation allows identity information to be shared across different organizational domains and trust boundaries, as Google does across its ecosystem."
  },
  {
    id: "d5-10", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "The company Cameron works for allows users to request privileged access temporarily. Once done, rights are removed. What type of system is he using?",
    choices: ["Zero trust", "Federated identity management", "Single sign-on", "Just-in-time access"],
    correctIndex: 3, hard: false,
    explanation: "Just-in-time (JIT) access grants temporary elevated privileges only when needed, then revokes them—minimizing standing privileges and reducing the attack surface."
  },
  {
    id: "d5-11", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "In a federation, when Susan wants to use a service at a partner site, which identity provider is used?",
    choices: ["Susan's home organization's identity provider", "The service provider's identity provider", "Both identity providers", "The service provider creates a new identity"],
    correctIndex: 0, hard: false,
    explanation: "In a federated identity system, the user's home organization identity provider (IdP) authenticates them, and the service provider (SP) accepts that assertion."
  },
  {
    id: "d5-12", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "A new customer scans his fingerprint and is logged into another customer's account. What type of biometric factor error occurred?",
    choices: ["A registration error", "A Type 1 error", "A Type 2 error", "A time of use error"],
    correctIndex: 2, hard: false,
    explanation: "A Type 2 error (False Acceptance Rate/FAR) occurs when the biometric system incorrectly authenticates an unauthorized person. A Type 1 error (FRR) is a false rejection."
  },
  {
    id: "d5-13", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "What type of access control is typically used by firewalls?",
    choices: ["Discretionary access controls", "Rule-based access controls", "Task-based access control", "Mandatory access controls"],
    correctIndex: 1, hard: false,
    explanation: "Firewalls use rule-based access control, making allow/deny decisions based on predefined rules (e.g., source/destination IP, port, protocol)."
  },
  {
    id: "d5-14", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "When you input a user ID and password, you are performing what IAM activity?",
    choices: ["Authorization", "Validation", "Authentication", "Login"],
    correctIndex: 2, hard: false,
    explanation: "Authentication verifies the claimed identity. Providing a user ID is identification; providing a password proves that identity—together they form authentication."
  },
  {
    id: "d5-15", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "In a MAC model, which objects and subjects have labels?",
    choices: ["Only Confidential/Secret/TS objects", "All objects have labels; all subjects have compartments", "All objects and subjects have labels", "All subjects have labels; all objects have compartments"],
    correctIndex: 2, hard: false,
    explanation: "In MAC, every object (file, resource) and every subject (user, process) has a security label. The system enforces access based on comparing these labels."
  },
  {
    id: "d5-16", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "What type of attack is the creation and exchange of state tokens in OAuth 2.0 flows intended to prevent?",
    choices: ["XSS", "CSRF", "SQL injection", "XACML injection"],
    correctIndex: 1, hard: true,
    explanation: "CSRF (Cross-Site Request Forgery) attacks trick a user's browser into making unauthorized requests. State tokens ensure that OAuth callback responses correspond to requests from the same session."
  },
  {
    id: "d5-17", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Ben's organization has had unauthorized access to applications during lunch when employees are away from their desks. What session management solutions best address this?",
    choices: ["Use session IDs and verify IP addresses", "Set session timeouts for applications and use password-protected screensavers with inactivity timeouts", "Use session IDs and password-protected screensavers", "Set session timeouts and verify IP addresses"],
    correctIndex: 1, hard: false,
    explanation: "Session timeouts for applications and password-protected screensavers with inactivity timeouts together address both web application sessions and workstation physical access."
  },
  {
    id: "d5-18", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Ben uses a software-based token that changes its code every minute. What type of token is he using?",
    choices: ["Asynchronous", "Smart card", "Synchronous", "Static"],
    correctIndex: 2, hard: false,
    explanation: "A synchronous token generates codes based on time intervals (e.g., every 30-60 seconds) synchronized with the authentication server—like TOTP used in authenticator apps."
  },
  {
    id: "d5-19", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Jim wants an access control scheme that prevents users from delegating access and is enforced at the OS level. What mechanism best fits?",
    choices: ["Role-based access control", "Discretionary access control", "Mandatory access control", "Attribute-based access control"],
    correctIndex: 2, hard: false,
    explanation: "MAC is enforced by the operating system/security kernel and users cannot change permissions or delegate access—it is non-discretionary."
  },
  {
    id: "d5-20", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Susan's workstation is configured to allow her to log in only during her work hours. What type of access control describes this limitation?",
    choices: ["Constrained interface", "Context-dependent control", "Content-dependent control", "Least privilege"],
    correctIndex: 1, hard: true,
    explanation: "Context-dependent controls use environmental context (like time of day or location) to grant or deny access, regardless of the user's credentials."
  },
  {
    id: "d5-21", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "During a review of support tickets, Ben found that password changes accounted for more than a quarter of help desk cases. Which option would most likely decrease this number significantly?",
    choices: ["Two-factor authentication", "Biometric authentication", "Self-service password reset", "Passphrases"],
    correctIndex: 2, hard: false,
    explanation: "Self-service password reset allows users to reset their own passwords without involving the help desk, directly reducing the volume of password-related support tickets."
  },
  {
    id: "d5-22", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Jim wants to allow cloud-based applications to act on his behalf to access information from other sites without sharing his password. What tool enables this?",
    choices: ["Kerberos", "OAuth", "OpenID", "LDAP"],
    correctIndex: 1, hard: false,
    explanation: "OAuth 2.0 is the authorization framework designed to allow applications to act on a user's behalf without sharing credentials."
  },
  {
    id: "d5-23", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "Susan is troubleshooting Kerberos authentication problems with invalid TGTs, despite correct configuration, credentials, and network connectivity. What is the most likely issue?",
    choices: ["The Kerberos server is offline", "There is a protocol mismatch", "The client's TGTs have been de-authorized", "The Kerberos server and client clocks are not synchronized"],
    correctIndex: 3, hard: true,
    explanation: "Kerberos requires time synchronization (typically within 5 minutes) between the KDC and clients. Clock skew greater than this threshold causes Kerberos tickets to be rejected."
  },
  {
    id: "d5-24", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "The bank that Aaron works for wants to create accounts when users download an app and first try to log in. What provisioning model has he suggested?",
    choices: ["JIT", "OpenID", "OAuth", "Kerberos"],
    correctIndex: 0, hard: false,
    explanation: "JIT (Just-in-Time) provisioning automatically creates user accounts the first time a user authenticates, eliminating the need for pre-provisioning all accounts."
  },
  {
    id: "d5-25", domain: "identity_access_management", domainLabel: "Identity and Access Management",
    text: "What authentication technology can be paired with OAuth to perform identity verification and obtain user profile information via a RESTful API?",
    choices: ["SAML", "Shibboleth", "OpenID Connect", "Higgins"],
    correctIndex: 2, hard: false,
    explanation: "OpenID Connect is an identity layer built on top of OAuth 2.0. It adds authentication to OAuth's authorization framework and provides user profile info via a RESTful API."
  },

  // ─────────────────────────────────────────────────────────────
  // DOMAIN 6 – Security Assessment and Testing
  // ─────────────────────────────────────────────────────────────
  {
    id: "d6-01", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "During a port scan, Naomi found TCP port 443 open. Which tool is best suited to scanning the service most likely running on that port?",
    choices: ["zzuf", "Nikto", "Metasploit", "sqlmap"],
    correctIndex: 1, hard: false,
    explanation: "TCP 443 is HTTPS. Nikto is a web server vulnerability scanner specifically designed to identify vulnerabilities in web servers and applications."
  },
  {
    id: "d6-02", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "What message logging standard is commonly used by network devices, Linux/Unix systems, and enterprise devices?",
    choices: ["Syslog", "Netlog", "Eventlog", "Remote Log Protocol (RLP)"],
    correctIndex: 0, hard: false,
    explanation: "Syslog (RFC 5424) is the standard logging protocol used across network devices, Unix/Linux systems, and many enterprise appliances for centralized log management."
  },
  {
    id: "d6-03", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Alex wants to use an automated tool to fill web application forms to test for format string vulnerabilities. What type of tool should he use?",
    choices: ["A black box", "A brute-force tool", "A fuzzer", "A static analysis tool"],
    correctIndex: 2, hard: false,
    explanation: "A fuzzer automatically sends unexpected, random, or malformed input to applications to discover vulnerabilities like format string flaws, buffer overflows, and input validation issues."
  },
  {
    id: "d6-04", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Susan needs to scan a system for vulnerabilities using an open source tool remotely. Which tool meets these requirements?",
    choices: ["Nmap", "OpenVAS", "MBSA", "Nessus"],
    correctIndex: 1, hard: false,
    explanation: "OpenVAS (Open Vulnerability Assessment Scanner) is a fully open source vulnerability scanner. Nmap is a port scanner; MBSA is Microsoft-only; Nessus is commercial."
  },
  {
    id: "d6-05", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Morgan is implementing a vulnerability management system and needs to provide standardized severity scores for vulnerabilities. Which is most commonly used?",
    choices: ["CCE", "CVSS", "CPE", "OVAL"],
    correctIndex: 1, hard: false,
    explanation: "CVSS (Common Vulnerability Scoring System) is the industry standard for rating the severity of security vulnerabilities, providing scores from 0.0 to 10.0."
  },
  {
    id: "d6-06", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Jim has been contracted to perform a penetration test where he has been given no information about the target other than its name and address. What type of test is this?",
    choices: ["A crystal-box test", "A gray-box test", "A black-box test", "A white-box test"],
    correctIndex: 2, hard: false,
    explanation: "A black-box test gives the tester no prior knowledge of the system, simulating an external attacker who has done only public reconnaissance."
  },
  {
    id: "d6-07", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Susan received an SSAE 18 SOC report and wants a report that includes operating effectiveness detail. What should she request and why?",
    choices: ["A SOC 2 Type II report, because Type I does not cover operating effectiveness", "A SOC 1 Type I report, because SOC 2 doesn't cover operating effectiveness", "A SOC 2 Type I report, because SOC 2 Type II doesn't cover it", "A SOC 3 report, because SOC 1 and 2 are outdated"],
    correctIndex: 0, hard: true,
    explanation: "SOC 2 Type I reports on controls at a point in time (design). SOC 2 Type II reports on the operating effectiveness of controls over a period of time—that's what Susan needs."
  },
  {
    id: "d6-08", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Jennifer needs to ensure all Windows systems provide identical logging information to the SIEM. How can she best ensure all Windows desktops have the same log settings?",
    choices: ["Perform periodic configuration audits", "Use Group Policy", "Use Local Policy", "Deploy a Windows syslog client"],
    correctIndex: 1, hard: false,
    explanation: "Group Policy allows centralized, consistent application of security and logging settings across all Windows domain machines—ideal for ensuring uniform configuration."
  },
  {
    id: "d6-09", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "What technology should an organization use across all devices shown in a logging infrastructure to ensure logs can be time-sequenced?",
    choices: ["Syslog", "NTP", "Logsync", "SNAP"],
    correctIndex: 1, hard: false,
    explanation: "NTP (Network Time Protocol) ensures all devices have synchronized clocks, making it possible to accurately correlate events across multiple log sources."
  },
  {
    id: "d6-10", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "During a penetration test, Michelle hasn't gained sufficient access to generate raw packets. What type of scan should she run to verify the most open services?",
    choices: ["A TCP connect scan", "A TCP SYN scan", "A UDP scan", "An ICMP scan"],
    correctIndex: 0, hard: false,
    explanation: "A TCP connect scan uses the OS's connect() call, which doesn't require raw packet privileges. It completes the full three-way handshake to verify open ports."
  },
  {
    id: "d6-11", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "During a nmap port scan, Joseph discovers ports 21/open and 23/open. What services are likely running?",
    choices: ["SSH and FTP", "FTP and Telnet", "SMTP and Telnet", "POP3 and SMTP"],
    correctIndex: 1, hard: false,
    explanation: "Port 21 is FTP (File Transfer Protocol) and port 23 is Telnet—both insecure legacy protocols that transmit data in cleartext."
  },
  {
    id: "d6-12", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Testing that is focused on functions that a system should NOT allow is an example of what type of testing?",
    choices: ["Use case testing", "Manual testing", "Misuse case testing", "Dynamic testing"],
    correctIndex: 2, hard: false,
    explanation: "Misuse case testing (negative testing) verifies that the system correctly prevents unauthorized or unintended actions—the opposite of use case (positive) testing."
  },
  {
    id: "d6-13", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "What type of monitoring uses simulated traffic to a website to continuously monitor performance?",
    choices: ["Log analysis", "Synthetic monitoring", "Passive monitoring", "Simulated transaction analysis"],
    correctIndex: 1, hard: false,
    explanation: "Synthetic monitoring uses scripted transactions that simulate user behavior to continuously test application availability and performance before real users encounter problems."
  },
  {
    id: "d6-14", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "What term describes software testing intended to uncover new bugs introduced by patches or configuration changes?",
    choices: ["Nonregression testing", "Evolution testing", "Smoke testing", "Regression testing"],
    correctIndex: 3, hard: false,
    explanation: "Regression testing reruns previous test cases after changes to ensure the changes haven't introduced new defects or broken existing functionality."
  },
  {
    id: "d6-15", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Susan needs to predict high-risk areas and track risk trends over time using metrics. What should she do?",
    choices: ["Perform yearly risk assessments", "Hire a penetration testing firm", "Identify and track key risk indicators", "Monitor logs using a SIEM"],
    correctIndex: 2, hard: false,
    explanation: "Key risk indicators (KRIs) are quantitative metrics that provide early warning of increasing risk exposure, enabling proactive risk management."
  },
  {
    id: "d6-16", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "During penetration test planning, what is the most important task to accomplish in Phase 1?",
    choices: ["Building a test lab", "Getting authorization", "Gathering appropriate tools", "Determining if the test is white, black, or gray box"],
    correctIndex: 1, hard: false,
    explanation: "Getting proper written authorization is the most critical planning step. Penetration testing without authorization is illegal, regardless of intent."
  },
  {
    id: "d6-17", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "What does using unique user IDs for all users provide when reviewing logs?",
    choices: ["Confidentiality", "Integrity", "Availability", "Accountability"],
    correctIndex: 3, hard: false,
    explanation: "Unique user IDs ensure that every action in logs can be attributed to a specific individual, providing accountability for actions taken on the system."
  },
  {
    id: "d6-18", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "During a penetration test, Selah calls the help desk posing as a senior officer's assistant and persuades them to reset a password. What type of attack has she completed?",
    choices: ["Zero knowledge", "Help desk spoofing", "Social engineering", "Black box"],
    correctIndex: 2, hard: false,
    explanation: "Social engineering manipulates people into performing actions or divulging information. Impersonating an executive to get a password reset is a classic social engineering attack."
  },
  {
    id: "d6-19", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Michelle wants to compare vulnerabilities based on exploitability, existence of exploit code, and remediation difficulty. What scoring system should she use?",
    choices: ["CSV", "NVD", "VSS", "CVSS"],
    correctIndex: 3, hard: false,
    explanation: "CVSS (Common Vulnerability Scoring System) scores vulnerabilities on multiple factors including exploitability metrics, impact metrics, and temporal metrics like exploit availability."
  },
  {
    id: "d6-20", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "During a port scan, Alex finds many hosts responding on TCP ports 80, 443, 515, and 9100. What type of devices is Alex likely discovering?",
    choices: ["Web servers", "File servers", "Wireless access points", "Printers"],
    correctIndex: 3, hard: false,
    explanation: "Port 515 (Line Printer Daemon/LPD) and 9100 (raw printing/JetDirect) are printer-specific ports. Combined with 80 and 443 for web management, these strongly indicate printers."
  },
  {
    id: "d6-21", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Nikto, Burp Suite, and Wapiti are all examples of what type of security tool?",
    choices: ["Web application vulnerability scanners", "Code review tools", "Vulnerability scanners", "Port scanners"],
    correctIndex: 0, hard: false,
    explanation: "Nikto, Burp Suite, and Wapiti are all specifically designed to scan and analyze web applications for security vulnerabilities."
  },
  {
    id: "d6-22", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Jim is working with a penetration testing contractor who proposes using Metasploit. What should Jim expect to occur?",
    choices: ["Systems will be scanned for vulnerabilities", "Systems will have known vulnerabilities exploited", "Services will be probed for unknown flaws", "Systems will be tested for zero-day exploits"],
    correctIndex: 1, hard: false,
    explanation: "Metasploit is an exploitation framework that contains exploit code for known vulnerabilities. It is used to actually exploit systems, not just scan them for vulnerabilities."
  },
  {
    id: "d6-23", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Robin recently found a critical vulnerability on a server handling sensitive information. What should Robin do next?",
    choices: ["Patching", "Reporting", "Remediation", "Validation"],
    correctIndex: 1, hard: false,
    explanation: "After identifying a critical vulnerability, the next step is reporting it to the appropriate stakeholders. Remediation planning and patching follow the reporting step."
  },
  {
    id: "d6-24", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Which NIST special publication covers the assessment of security and privacy controls?",
    choices: ["800-12", "800-53A", "800-34", "800-86"],
    correctIndex: 1, hard: true,
    explanation: "NIST SP 800-53A provides procedures for assessing the security and privacy controls defined in NIST SP 800-53. SP 800-34 is for contingency planning."
  },
  {
    id: "d6-25", domain: "security_assessment_testing", domainLabel: "Security Assessment and Testing",
    text: "Which type of code review is NOT typically performed by a human?",
    choices: ["Software inspections", "Pair programming", "Static program analysis", "Software walk-throughs"],
    correctIndex: 2, hard: false,
    explanation: "Static program analysis uses automated tools to analyze source code without executing it. The other three (inspections, pair programming, walk-throughs) all involve human reviewers."
  },

  // ─────────────────────────────────────────────────────────────
  // DOMAIN 7 – Security Operations
  // ─────────────────────────────────────────────────────────────
  {
    id: "d7-01", domain: "security_operations", domainLabel: "Security Operations",
    text: "As Gary decides what access permissions to grant to each user, what principle should guide his decisions about default permissions?",
    choices: ["Separation of duties", "Least privilege", "Aggregation", "Separation of privileges"],
    correctIndex: 1, hard: false,
    explanation: "Least privilege grants users only the minimum permissions needed to perform their job functions. Overly permissive defaults create unnecessary risk."
  },
  {
    id: "d7-02", domain: "security_operations", domainLabel: "Security Operations",
    text: "Gary uses a matrix that shows potential areas of conflict between roles and tasks. What information security principle does this matrix directly help enforce?",
    choices: ["Segregation of duties", "Aggregation", "Two-person control", "Defense in depth"],
    correctIndex: 0, hard: false,
    explanation: "A conflict-of-interest matrix helps design segregation of duties by identifying task combinations that no single individual should be able to perform."
  },
  {
    id: "d7-03", domain: "security_operations", domainLabel: "Security Operations",
    text: "Gary is preparing to create an account for a new user and assign privileges to the HR database. What two elements must he verify before granting access?",
    choices: ["Credentials and need to know", "Clearance and need to know", "Password and clearance", "Password and biometric scan"],
    correctIndex: 1, hard: false,
    explanation: "Two conditions must be met for access: the appropriate security clearance (eligibility) AND a legitimate need to know the specific information."
  },
  {
    id: "d7-04", domain: "security_operations", domainLabel: "Security Operations",
    text: "Gary is developing controls for root encryption keys. What security principle, specifically designed for very sensitive operations, should he apply?",
    choices: ["Least privilege", "Defense in depth", "Security through obscurity", "Two-person control"],
    correctIndex: 3, hard: false,
    explanation: "Two-person control (dual control) requires two authorized individuals to be present and participate for highly sensitive operations, preventing any single person from acting alone."
  },
  {
    id: "d7-05", domain: "security_operations", domainLabel: "Security Operations",
    text: "What term is often used to describe a collection of unrelated patches released in a large collection?",
    choices: ["Hotfix", "Update", "Security fix", "Service pack"],
    correctIndex: 3, hard: false,
    explanation: "A service pack is a large bundled release of patches, updates, and fixes. A hotfix is an urgent single-issue patch. Updates are routine incremental improvements."
  },
  {
    id: "d7-06", domain: "security_operations", domainLabel: "Security Operations",
    text: "Tonya is collecting evidence from systems and a colleague suggests using a forensic disk controller. What is the function of this device?",
    choices: ["Masking error conditions reported by the storage device", "Transmitting write commands to the storage device", "Intercepting and discarding write commands sent to the storage device", "Preventing data from being returned by read operations"],
    correctIndex: 2, hard: false,
    explanation: "A forensic disk controller (write blocker) intercepts write commands before they reach the storage device, ensuring the original evidence is not modified during investigation."
  },
  {
    id: "d7-07", domain: "security_operations", domainLabel: "Security Operations",
    text: "Lydia is reviewing an access request where the user has the required security clearance but no business justification. She denies the request. What security principle is she following?",
    choices: ["Need to know", "Least privilege", "Separation of duties", "Two-person control"],
    correctIndex: 0, hard: false,
    explanation: "Need to know requires that even authorized users (with the right clearance) must have a legitimate business reason to access specific information. Clearance alone is insufficient."
  },
  {
    id: "d7-08", domain: "security_operations", domainLabel: "Security Operations",
    text: "Helen is implementing controls to deter fraudulent insider activity. Which mechanism would be LEAST useful?",
    choices: ["Job rotation", "Mandatory vacations", "Incident response", "Two-person control"],
    correctIndex: 2, hard: false,
    explanation: "Incident response is reactive—it responds after an event has occurred. Job rotation, mandatory vacations, and two-person control are proactive deterrents to insider fraud."
  },
  {
    id: "d7-09", domain: "security_operations", domainLabel: "Security Operations",
    text: "Matt wants to ensure critical network traffic is prioritized over web browsing. What technology can he use?",
    choices: ["VLANs", "QoS", "VPN", "ISDN"],
    correctIndex: 1, hard: false,
    explanation: "QoS (Quality of Service) allows administrators to prioritize different types of network traffic, ensuring critical business applications receive bandwidth over lower-priority traffic."
  },
  {
    id: "d7-10", domain: "security_operations", domainLabel: "Security Operations",
    text: "Tom is responding to a security incident and needs information about the approval process for a recent modification to a system's security settings. Where would he most likely find this?",
    choices: ["Change log", "System log", "Security log", "Application log"],
    correctIndex: 0, hard: false,
    explanation: "Change logs record all approved modifications to systems, including the approval chain, change details, and who made the change—exactly what Tom needs."
  },
  {
    id: "d7-11", domain: "security_operations", domainLabel: "Security Operations",
    text: "Susan's staff often travel internationally and may be targeted for corporate espionage. What network connection practice should she advise?",
    choices: ["Only connect to public WiFi", "Use a VPN for all connections", "Only use websites that support TLS", "Do not connect to networks while traveling"],
    correctIndex: 1, hard: false,
    explanation: "Using a VPN for all connections encrypts all traffic and routes it securely through the organization's network, protecting against eavesdropping on untrusted networks."
  },
  {
    id: "d7-12", domain: "security_operations", domainLabel: "Security Operations",
    text: "Ricky is seeking a list of information security vulnerabilities in applications, devices, and operating systems. Which threat intelligence source would be most useful?",
    choices: ["OWASP", "Bugtraq", "Microsoft Security Bulletins", "CVE"],
    correctIndex: 3, hard: false,
    explanation: "CVE (Common Vulnerabilities and Exposures) is a comprehensive, vendor-neutral database of publicly known information security vulnerabilities across all systems."
  },
  {
    id: "d7-13", domain: "security_operations", domainLabel: "Security Operations",
    text: "Glenda wants to conduct a disaster recovery test allowing review of the plan with no disruption to normal activities and minimal time commitment. What type of test should she choose?",
    choices: ["Tabletop exercise", "Parallel test", "Full interruption test", "Checklist review"],
    correctIndex: 3, hard: false,
    explanation: "A checklist review involves team members reviewing the DR plan independently to check for gaps and completeness. It requires the least time and causes no disruption."
  },
  {
    id: "d7-14", domain: "security_operations", domainLabel: "Security Operations",
    text: "Which one of the following is NOT an example of a backup tape rotation scheme?",
    choices: ["Grandfather/Father/Son", "Meet in the middle", "Tower of Hanoi", "Six Cartridge Weekly"],
    correctIndex: 1, hard: false,
    explanation: "'Meet in the middle' is a cryptanalytic attack, not a backup rotation scheme. Grandfather/Father/Son, Tower of Hanoi, and Six Cartridge Weekly are all valid backup rotation schemes."
  },
  {
    id: "d7-15", domain: "security_operations", domainLabel: "Security Operations",
    text: "Helen designs a process where both the employee's manager AND the accounting manager must approve administrative access to the accounting system. What principle is she enforcing?",
    choices: ["Least privilege", "Two-person control", "Job rotation", "Separation of duties"],
    correctIndex: 1, hard: false,
    explanation: "Two-person control (dual control) requires that two authorized people must both approve or participate in sensitive operations, preventing unilateral action."
  },
  {
    id: "d7-16", domain: "security_operations", domainLabel: "Security Operations",
    text: "Frank is considering evidence for an upcoming criminal matter. Which is NOT a requirement for evidence to be admissible?",
    choices: ["The evidence must be relevant", "The evidence must be material", "The evidence must be tangible", "The evidence must be competently acquired"],
    correctIndex: 2, hard: true,
    explanation: "Admissible evidence must be relevant, material, and competently acquired. There is no requirement that it be tangible—digital/electronic evidence is routinely admitted."
  },
  {
    id: "d7-17", domain: "security_operations", domainLabel: "Security Operations",
    text: "Harold recently completed leading the postmortem review of a security incident. What documentation should he prepare next?",
    choices: ["A lessons learned document", "A risk assessment", "A remediation list", "A mitigation checklist"],
    correctIndex: 0, hard: false,
    explanation: "After an incident postmortem, a lessons learned document captures what was discovered and recommendations to prevent recurrence—the primary output of the review process."
  },
  {
    id: "d7-18", domain: "security_operations", domainLabel: "Security Operations",
    text: "Sam performs full backups every Monday at 9 p.m. and differential backups on other days. How many files will be copied in Wednesday's differential backup? (See: Mon creates files 1-4, Tue creates file 5 and modifies 1-2, Wed modifies file 3 and creates file 6.)",
    choices: ["2", "3", "5", "6"],
    correctIndex: 2, hard: true,
    explanation: "A differential backup copies ALL changes since the last full backup. Changes since Monday's full: Tue (files 1,2,5) + Wed (files 3,6) = files 1,2,3,5,6 = 5 files total."
  },
  {
    id: "d7-19", domain: "security_operations", domainLabel: "Security Assessment and Testing",
    text: "Which one of the following security tools is NOT capable of generating an active response to a security event?",
    choices: ["IPS", "Firewall", "IDS", "Antivirus software"],
    correctIndex: 2, hard: false,
    explanation: "An IDS (Intrusion Detection System) only detects and alerts on security events—it cannot actively block or respond. An IPS can actively block traffic."
  },
  {
    id: "d7-20", domain: "security_operations", domainLabel: "Security Operations",
    text: "Scott should avoid which disposal option for hard drives containing highly sensitive data from a SAN?",
    choices: ["Destroy them physically", "Sign a contract with the SAN vendor requiring appropriate disposal", "Reformat each drive before it leaves", "Use a secure wipe tool like DBAN"],
    correctIndex: 2, hard: false,
    explanation: "Reformatting only removes the file system structure; data can be recovered with forensic tools. Physical destruction or cryptographic erasure provides much stronger assurance for highly sensitive data."
  },
  {
    id: "d7-21", domain: "security_operations", domainLabel: "Security Operations",
    text: "What term is used to describe the default set of privileges assigned to a user when a new account is created?",
    choices: ["Aggregation", "Transitivity", "Baseline", "Entitlement"],
    correctIndex: 3, hard: false,
    explanation: "Entitlement refers to the permissions and rights that have been assigned to a user. Default entitlements should follow the principle of least privilege."
  },
  {
    id: "d7-22", domain: "security_operations", domainLabel: "Security Operations",
    text: "During what phase of the incident response process do administrators take action to limit the effect or scope of an incident?",
    choices: ["Detection", "Response", "Mitigation", "Recovery"],
    correctIndex: 2, hard: false,
    explanation: "The mitigation phase involves containing the incident to limit its spread or impact. This may include isolating affected systems, blocking traffic, or disabling accounts."
  },
  {
    id: "d7-23", domain: "security_operations", domainLabel: "Security Operations",
    text: "Ann's IDS alerts on an unusually high volume of inbound traffic on UDP port 53. What service typically uses this port?",
    choices: ["DNS", "SSH/SCP", "SSL/TLS", "HTTP"],
    correctIndex: 0, hard: false,
    explanation: "UDP port 53 is used by DNS (Domain Name System). A large volume of DNS responses may indicate a DNS amplification DDoS attack."
  },
  {
    id: "d7-24", domain: "security_operations", domainLabel: "Security Operations",
    text: "Florian wants to determine the maximum time a particular IT service may be down without causing serious business damage. What variable is he calculating?",
    choices: ["RTO", "MTD", "RPO", "SLA"],
    correctIndex: 1, hard: false,
    explanation: "MTD (Maximum Tolerable Downtime) is the maximum time a system or service can be unavailable before unacceptable consequences result. RTO is the target time to restore."
  },
  {
    id: "d7-25", domain: "security_operations", domainLabel: "Security Operations",
    text: "Patrick was charged with implementing a threat hunting program. What is the basic assumption that should guide his planning?",
    choices: ["Security controls were designed using defense-in-depth", "Audits may uncover control deficiencies", "Attackers may already be present on the network", "Defense mechanisms may contain unpatched vulnerabilities"],
    correctIndex: 2, hard: true,
    explanation: "Threat hunting operates on the assumption that adversaries may have already breached the network and that traditional security controls may have failed to detect them."
  },

  // ─────────────────────────────────────────────────────────────
  // DOMAIN 8 – Software Development Security
  // ─────────────────────────────────────────────────────────────
  {
    id: "d8-01", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Which database key is used to enforce referential integrity relationships between tables?",
    choices: ["Primary key", "Candidate key", "Foreign key", "Master key"],
    correctIndex: 2, hard: false,
    explanation: "A foreign key references the primary key in another table, enforcing referential integrity—ensuring that relationships between records in different tables remain consistent."
  },
  {
    id: "d8-02", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Carrie analyzes logs and sees the string '../../../../../../../../../etc/passwd'. What type of attack was attempted?",
    choices: ["Command injection", "Session hijacking", "Directory traversal", "Brute-force"],
    correctIndex: 2, hard: false,
    explanation: "Directory traversal attacks use '../' sequences to navigate outside the web root and access sensitive system files like /etc/passwd."
  },
  {
    id: "d8-03", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "When should a design review take place in an SDLC approach?",
    choices: ["After the code review", "After user acceptance testing", "After the development of functional requirements", "After the completion of unit testing"],
    correctIndex: 2, hard: false,
    explanation: "In the SDLC, the design review occurs after functional requirements are established but before coding begins, allowing design flaws to be identified early."
  },
  {
    id: "d8-04", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Tracy wants to ensure a patch didn't introduce new flaws by comparing previous responses to the same input against those produced by the patched application. What type of testing is she planning?",
    choices: ["Unit testing", "Acceptance testing", "Regression testing", "Vulnerability testing"],
    correctIndex: 2, hard: false,
    explanation: "Regression testing reruns existing test cases after code changes to ensure the changes haven't introduced new defects or altered previously correct behavior."
  },
  {
    id: "d8-05", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "What term describes the level of confidence that software is free from vulnerabilities and functions as intended?",
    choices: ["Validation", "Accreditation", "Confidence interval", "Assurance"],
    correctIndex: 3, hard: false,
    explanation: "Software assurance is the level of confidence that software is free from vulnerabilities and operates as intended throughout its lifecycle."
  },
  {
    id: "d8-06", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Victor's database access logs show that a user pulled all individual sales records for a quarter and calculated the total sales volume (which was restricted). What issue did Victor identify?",
    choices: ["Inference", "SQL injection", "Multilevel security", "Aggregation"],
    correctIndex: 3, hard: true,
    explanation: "Aggregation: combining multiple individually accessible pieces of data to derive a more sensitive value that should be restricted."
  },
  {
    id: "d8-07", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Ron's team frequently re-creates code that performs common functions. What software development tool best addresses this?",
    choices: ["Code repositories", "Code libraries", "IDEs", "DAST"],
    correctIndex: 1, hard: false,
    explanation: "Code libraries contain reusable functions and modules that developers can call, avoiding duplication of common functionality across projects."
  },
  {
    id: "d8-08", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Greg's malware samples show code changing slightly between infections, making antivirus less effective. What type of malware should he suspect?",
    choices: ["Stealth virus", "Polymorphic virus", "Multipartite virus", "Encrypted virus"],
    correctIndex: 1, hard: false,
    explanation: "Polymorphic viruses mutate their code with each infection, changing their signature to evade signature-based antivirus detection."
  },
  {
    id: "d8-09", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Linda finds the code `<script>alert('Alert');</script>` in a user forum post and a dialog box pops up on her screen. What vulnerability definitely exists?",
    choices: ["Cross-site scripting", "Cross-site request forgery", "SQL injection", "Improper authentication"],
    correctIndex: 0, hard: false,
    explanation: "The execution of injected JavaScript via a user-supplied forum post is a classic cross-site scripting (XSS) vulnerability."
  },
  {
    id: "d8-10", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Linda communicates with the vendor and no patch is available for the XSS vulnerability. Which device would best help defend the application?",
    choices: ["VPN", "WAF", "DLP", "IDS"],
    correctIndex: 1, hard: false,
    explanation: "A Web Application Firewall (WAF) can detect and block XSS payloads at the application layer, providing protection when a code-level fix is unavailable."
  },
  {
    id: "d8-11", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "What technique would be most effective in mitigating XSS vulnerability at the code level?",
    choices: ["Bounds checking", "Peer review", "Input validation", "OS patching"],
    correctIndex: 2, hard: false,
    explanation: "Input validation (including output encoding) prevents XSS by ensuring user-supplied content is treated as data, not executable code."
  },
  {
    id: "d8-12", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Christine is nearing final testing stages. Which type of testing usually occurs last and is executed against defined test scenarios?",
    choices: ["Unit testing", "Integration testing", "User acceptance testing", "System testing"],
    correctIndex: 2, hard: false,
    explanation: "User acceptance testing (UAT) is the final phase where end users validate that the system meets business requirements before deployment."
  },
  {
    id: "d8-13", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Alyssa's team implemented a new system that gathers logs from various sources, analyzes them, and triggers automated playbooks in response to security events. What best describes this technology?",
    choices: ["SIEM", "Log repositories", "IPS", "SOAR"],
    correctIndex: 3, hard: false,
    explanation: "SOAR (Security Orchestration, Automation and Response) platforms combine log aggregation/analysis (like SIEM) with automated response capabilities via playbooks."
  },
  {
    id: "d8-14", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Chris reviews the code: `int myarray[10]; myarray[10] = 8;`. What type of vulnerability exists?",
    choices: ["Mismatched data types", "Overflow", "SQL injection", "Covert channel"],
    correctIndex: 1, hard: true,
    explanation: "The array myarray has valid indices 0-9. Writing to index 10 is an off-by-one buffer overflow, writing beyond the allocated memory boundary."
  },
  {
    id: "d8-15", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Which database concurrency issue occurs when one transaction writes a value that overwrites a value needed by earlier transactions?",
    choices: ["Dirty read", "Incorrect summary", "Lost update", "SQL injection"],
    correctIndex: 2, hard: true,
    explanation: "A lost update occurs when two transactions read and then update the same value, with the second write overwriting the first—losing the first update."
  },
  {
    id: "d8-16", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "In a software configuration management program, what is the primary role of the CAB (Change Advisory Board)?",
    choices: ["Approve developer credentials", "Facilitate lessons learned sessions", "Review and approve/reject code changes", "Prioritize software development efforts"],
    correctIndex: 2, hard: false,
    explanation: "The CAB reviews proposed changes to the production environment, assessing risk and business impact, and then approves or rejects each change request."
  },
  {
    id: "d8-17", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Harry sees a web server log entry: `CARROT'&1=1;--`. What type of attack was attempted?",
    choices: ["Buffer overflow", "Cross-site scripting", "SQL injection", "Cross-site request forgery"],
    correctIndex: 2, hard: false,
    explanation: "The single quote, boolean condition (1=1), and double-dash comment sequence are classic SQL injection indicators, attempting to manipulate the database query."
  },
  {
    id: "d8-18", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Which is NOT an effective control against SQL injection attacks?",
    choices: ["Escaping", "Client-side input validation", "Parameterization", "Limiting database permissions"],
    correctIndex: 1, hard: false,
    explanation: "Client-side input validation can be easily bypassed by an attacker who modifies the request directly. Server-side controls (escaping, parameterization, limiting DB permissions) are effective."
  },
  {
    id: "d8-19", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Which approach to failure management is the most conservative from a security perspective?",
    choices: ["Fail open", "Fail mitigation", "Fail clear", "Fail closed"],
    correctIndex: 3, hard: false,
    explanation: "Fail closed (fail secure) denies all access when a security control fails. Fail open allows all activity—the opposite of conservative. Fail closed prioritizes security over availability."
  },
  {
    id: "d8-20", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "What software development model is characterized by multiple iterations, each including risk analysis, prototyping, and planning?",
    choices: ["Waterfall", "Agile", "Lean", "Spiral"],
    correctIndex: 3, hard: false,
    explanation: "The Spiral model combines iterative development with systematic risk analysis. Each spiral includes: determine objectives, identify risks, develop and test, and plan the next iteration."
  },
  {
    id: "d8-21", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Teagan wants to protect against database inference attacks. Which technique is an effective countermeasure?",
    choices: ["Input validation", "Parameterization", "Polyinstantiation", "Server-side validation"],
    correctIndex: 2, hard: true,
    explanation: "Polyinstantiation stores multiple versions of data at different classification levels, preventing users from inferring the existence or content of classified records by observing what is absent."
  },
  {
    id: "d8-22", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Lucas suspects that a fired employee planted malicious code that activates after his departure. What type of attack should Lucas suspect?",
    choices: ["Privilege escalation", "SQL injection", "Logic bomb", "Remote code execution"],
    correctIndex: 2, hard: false,
    explanation: "A logic bomb is malicious code that lies dormant until specific trigger conditions are met (like a certain date or the absence of a specific employee in the system)."
  },
  {
    id: "d8-23", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Which one of the following Agile principles would NOT be favored—the Agile Manifesto values the right side of each contrast?",
    choices: ["Processes and tools over individuals and interactions", "Working software over comprehensive documentation", "Customer collaboration over contract negotiations", "Responding to change over following a plan"],
    correctIndex: 0, hard: false,
    explanation: "Agile values individuals and interactions over processes and tools—the opposite of the first answer. The other three correctly represent Agile values (right side of each)."
  },
  {
    id: "d8-24", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "Which type of artificial intelligence attempts to use complex computations to replicate the partial function of the human mind?",
    choices: ["Decision support systems", "Expert systems", "Knowledge bank", "Neural networks"],
    correctIndex: 3, hard: false,
    explanation: "Neural networks use interconnected nodes inspired by biological neurons to model complex patterns, partially replicating aspects of human cognitive processing."
  },
  {
    id: "d8-25", domain: "software_development_security", domainLabel: "Software Development Security",
    text: "At which level of the SW-CMM does an organization introduce basic lifecycle management processes?",
    choices: ["Initial", "Repeatable", "Defined", "Managed"],
    correctIndex: 1, hard: false,
    explanation: "At SW-CMM Level 2 (Repeatable), organizations introduce basic project lifecycle management—requirements management, planning, tracking, QA, and configuration management."
  }
,
// ─────────────────────────────────────────────────────────────
  // DOMAIN 1 – Security and Risk Management  (d1-26 … d1-50)
  // ─────────────────────────────────────────────────────────────
  {
    id:"d1-26", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"An organization calculates that a server has an asset value of $200,000, an exposure factor of 40%, and an annualized rate of occurrence of 0.5. What is the annualized loss expectancy (ALE)?",
    choices:["$40,000","$80,000","$100,000","$160,000"],
    correctIndex:0, hard:false,
    explanation:"SLE = Asset Value × EF = $200,000 × 0.40 = $80,000. ALE = SLE × ARO = $80,000 × 0.5 = $40,000."
  },
  {
    id:"d1-27", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following BEST describes the purpose of the ISC2 Code of Ethics?",
    choices:["Provide legal guidance for security professionals","Establish a professional standard for ethical decision-making","Define technical controls for protecting information","Outline compliance requirements for security certifications"],
    correctIndex:1, hard:false,
    explanation:"The ISC2 Code of Ethics establishes professional conduct standards. Its four mandatory canons require members to protect society, act honorably, provide diligent service, and advance the profession."
  },
  {
    id:"d1-28", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"During a threat modeling exercise, a security architect documents all possible attack paths against a web application. Which threat modeling methodology uses attack trees to enumerate threats?",
    choices:["STRIDE","PASTA","VAST","TRIKE"],
    correctIndex:1, hard:true,
    explanation:"PASTA (Process for Attack Simulation and Threat Analysis) is a risk-centric methodology that uses attack trees. STRIDE is a threat classification method, not a full methodology using attack trees as its primary tool."
  },
  {
    id:"d1-29", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following frameworks is MOST closely associated with IT governance and aligns IT goals with business objectives?",
    choices:["NIST CSF","COBIT","ISO 27001","ITIL"],
    correctIndex:1, hard:false,
    explanation:"COBIT (Control Objectives for Information and Related Technologies) is the primary IT governance framework aligning IT with business goals. ISO 27001 focuses on ISMS, NIST CSF on cybersecurity risk, and ITIL on IT service management."
  },
  {
    id:"d1-30", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A security manager discovers that an employee is performing personal financial transactions on company systems during work hours. Which policy is MOST directly being violated?",
    choices:["Separation of duties policy","Acceptable use policy","Least privilege policy","Need-to-know policy"],
    correctIndex:1, hard:false,
    explanation:"An acceptable use policy (AUP) defines permitted uses of company IT resources. Using company systems for personal financial transactions violates the AUP."
  },
  {
    id:"d1-31", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"What is the PRIMARY difference between a business continuity plan (BCP) and a disaster recovery plan (DRP)?",
    choices:["BCP focuses on IT recovery; DRP focuses on entire business operations","BCP addresses long-term business survival; DRP focuses on restoring IT and operations after a disaster","BCP is a technical document; DRP is a management document","DRP is executed before BCP activation"],
    correctIndex:1, hard:false,
    explanation:"BCP covers maintaining business functions during and after a disruption. DRP is a subset focused specifically on recovering IT systems and operations after a disaster."
  },
  {
    id:"d1-32", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which security framework publishes five core functions: Identify, Protect, Detect, Respond, and Recover?",
    choices:["ISO 27001","COBIT 2019","NIST Cybersecurity Framework","SABSA"],
    correctIndex:2, hard:false,
    explanation:"The NIST Cybersecurity Framework (CSF) organizes security activities into five core functions: Identify, Protect, Detect, Respond, and Recover."
  },
  {
    id:"d1-33", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Management accepts a known security risk without implementing additional controls. Which risk response strategy is this?",
    choices:["Mitigation","Avoidance","Transference","Acceptance"],
    correctIndex:3, hard:false,
    explanation:"Risk acceptance means acknowledging a risk and deciding not to take further action, typically because the cost of control exceeds the potential loss or the risk is within acceptable tolerance."
  },
  {
    id:"d1-34", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following is an example of a deterrent control?",
    choices:["Encrypting sensitive data at rest","Posting warning signs on a fence","Reviewing access logs","Restoring a system from backup after an incident"],
    correctIndex:1, hard:false,
    explanation:"A deterrent control discourages malicious activity without physically preventing it. Warning signs signal to potential attackers that the area is monitored or protected."
  },
  {
    id:"d1-35", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"An organization's security team must separate duties so no single person can complete a sensitive transaction alone. Which principle is being applied?",
    choices:["Least privilege","Job rotation","Separation of duties","Need to know"],
    correctIndex:2, hard:false,
    explanation:"Separation of duties ensures no single individual has all access necessary to commit or conceal errors or fraud. Two-person integrity and dual control are related concepts."
  },
  {
    id:"d1-36", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which type of law establishes minimum security standards organizations must meet to protect specific types of data?",
    choices:["Common law","Regulatory law","Civil law","Criminal law"],
    correctIndex:1, hard:false,
    explanation:"Regulatory (or administrative) law consists of rules created by government agencies (such as HIPAA, GLBA regulations) that mandate specific security standards for covered entities."
  },
  {
    id:"d1-37", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A company hires an external assessor to evaluate its security controls against ISO 27001. What type of assessment is this?",
    choices:["First-party audit","Second-party audit","Third-party audit","Internal audit"],
    correctIndex:2, hard:false,
    explanation:"A third-party audit is performed by an independent external organization. First-party (internal) audits are self-assessments; second-party audits are conducted by customers or partners."
  },
  {
    id:"d1-38", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following BEST describes the difference between quantitative and qualitative risk analysis?",
    choices:["Quantitative uses labels like high/medium/low; qualitative uses monetary values","Quantitative uses monetary values and probabilities; qualitative uses descriptive labels and judgment","Quantitative is faster to perform; qualitative is more accurate","Qualitative requires more data than quantitative analysis"],
    correctIndex:1, hard:false,
    explanation:"Quantitative risk analysis assigns numerical (monetary) values to assets, threats, and probabilities. Qualitative analysis uses subjective scales (high/medium/low) and expert judgment rather than precise calculations."
  },
  {
    id:"d1-39", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A hospital stores patient records. Nurse practitioners can view records but cannot modify them. Physicians can both view and modify records. Which access control concept BEST describes this?",
    choices:["Mandatory Access Control","Discretionary Access Control","Role-Based Access Control","Attribute-Based Access Control"],
    correctIndex:2, hard:false,
    explanation:"Role-Based Access Control (RBAC) assigns permissions based on job roles. Nurses have read-only access; physicians have read-write access based on their roles, not individual identity."
  },
  {
    id:"d1-40", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A CISO is reviewing results of a security awareness training program. Which metric BEST indicates the program's effectiveness?",
    choices:["Number of employees who attended training","Reduction in phishing click-through rate after training","Cost per employee for training delivery","Number of training modules completed"],
    correctIndex:1, hard:true,
    explanation:"Reduction in phishing click-through rate measures behavioral change, which is the actual objective of security awareness training. Attendance and completion metrics measure activity, not effectiveness."
  },
  {
    id:"d1-41", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"What is the PRIMARY goal of personnel security in the context of insider threat?",
    choices:["Ensuring employees are physically safe","Preventing malicious or negligent acts by authorized users","Verifying employee technical skills","Maintaining workforce morale"],
    correctIndex:1, hard:false,
    explanation:"Personnel security controls (background checks, security awareness, separation of duties, mandatory vacations) aim primarily to prevent insiders from causing harm."
  },
  {
    id:"d1-42", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following is the FIRST step in a comprehensive risk management process?",
    choices:["Implement security controls","Identify and classify assets","Conduct vulnerability scanning","Select a risk response strategy"],
    correctIndex:1, hard:false,
    explanation:"Risk management begins with identifying and classifying assets so you know what you are protecting before assessing threats, vulnerabilities, or controls."
  },
  {
    id:"d1-43", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A company outsources payroll processing to a third-party vendor. Who retains ultimate responsibility for protecting the payroll data?",
    choices:["The third-party vendor","The payroll software developer","The company (data owner)","The employees whose data is stored"],
    correctIndex:2, hard:true,
    explanation:"Data ownership and accountability cannot be outsourced. The original organization remains the data owner and retains ultimate responsibility even when a vendor processes the data."
  },
  {
    id:"d1-44", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following BEST describes due diligence in information security?",
    choices:["Implementing the security controls identified during risk assessment","Continuously researching threats and ensuring controls remain effective","Documenting that security policies exist","Assigning security responsibilities to staff"],
    correctIndex:1, hard:true,
    explanation:"Due diligence is the ongoing effort to understand and manage risk—researching threats, validating that controls work, and continuously improving security. Due care involves actually implementing the controls."
  },
  {
    id:"d1-45", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"An employee is terminated and their access is revoked within one hour. This process is part of which security program?",
    choices:["Change management","Access recertification","Offboarding procedures","Mandatory vacation policy"],
    correctIndex:2, hard:false,
    explanation:"Offboarding (or exit) procedures define the steps taken when an employee leaves, including prompt access revocation, return of assets, and exit interviews."
  },
  {
    id:"d1-46", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following CORRECTLY describes the relationship between a threat, a vulnerability, and a risk?",
    choices:["Risk is a vulnerability that has been exploited by a threat","A threat exploits a vulnerability to create a risk","A vulnerability is created by a risk when a threat is present","Risk and threat are synonymous terms in risk management"],
    correctIndex:1, hard:false,
    explanation:"A threat is a potential event; a vulnerability is a weakness. Risk is the likelihood and impact of a threat exploiting a vulnerability. Risk = Threat x Vulnerability x Asset Value."
  },
  {
    id:"d1-47", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which recovery time metric defines the maximum acceptable period during which a business process can be unavailable before causing unacceptable harm?",
    choices:["Recovery Point Objective (RPO)","Recovery Time Objective (RTO)","Maximum Tolerable Downtime (MTD)","Mean Time to Repair (MTTR)"],
    correctIndex:2, hard:true,
    explanation:"MTD is the absolute maximum downtime tolerable. RTO is the target time to restore the system (must be less than or equal to MTD). RPO defines acceptable data loss measured in time."
  },
  {
    id:"d1-48", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A security analyst processes personal data on behalf of a controller under GDPR. What is the analyst's organization classified as?",
    choices:["Data subject","Data controller","Data processor","Data custodian"],
    correctIndex:2, hard:false,
    explanation:"Under GDPR, a data processor processes personal data on behalf of a controller. The controller determines the purposes and means of processing. Data subjects are the individuals whose data is processed."
  },
  {
    id:"d1-49", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following activities is part of a security program's administrative controls?",
    choices:["Deploying a firewall","Installing encryption software","Conducting background investigations on employees","Installing a security camera"],
    correctIndex:2, hard:false,
    explanation:"Administrative controls are management-level safeguards including policies, procedures, background checks, training, and security awareness. Technical controls include firewalls and encryption; physical controls include cameras."
  },
  {
    id:"d1-50", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A company's policy states that two IT administrators must be present whenever system-level changes are made to production servers. This implements which security concept?",
    choices:["Job rotation","Least privilege","Dual control (two-person integrity)","Mandatory vacation"],
    correctIndex:2, hard:false,
    explanation:"Dual control (two-person integrity) requires two authorized individuals to be present for sensitive operations, preventing any single person from making unauthorized changes."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 2 – Asset Security  (d2-26 … d2-50)
  // ─────────────────────────────────────────────────────────────
  {
    id:"d2-26", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which data role is responsible for determining how long data should be retained and when it should be destroyed?",
    choices:["Data custodian","Data processor","Data owner","Data subject"],
    correctIndex:2, hard:false,
    explanation:"The data owner (typically a business manager) is responsible for data classification, retention schedules, and determining when data should be destroyed. The custodian implements those decisions."
  },
  {
    id:"d2-27", domain:"asset_security", domainLabel:"Asset Security",
    text:"A government agency classifies a document as Secret. What is the MINIMUM classification required for a system that processes this document?",
    choices:["Unclassified","Confidential","Secret","Top Secret"],
    correctIndex:2, hard:false,
    explanation:"A system processing Secret data must be accredited at the Secret level at minimum. Processing higher-classified data on a lower-accredited system violates data classification principles."
  },
  {
    id:"d2-28", domain:"asset_security", domainLabel:"Asset Security",
    text:"A commercial organization labels data as Proprietary, Private, Sensitive, and Public. Which commercial label is equivalent to a government's Top Secret classification?",
    choices:["Public","Sensitive","Private","Proprietary"],
    correctIndex:3, hard:false,
    explanation:"Commercial data classification levels typically map as: Proprietary = Top Secret, Private = Secret/Confidential, Sensitive = Confidential, Public = Unclassified."
  },
  {
    id:"d2-29", domain:"asset_security", domainLabel:"Asset Security",
    text:"An organization is disposing of hard drives containing sensitive financial data. Which method provides the HIGHEST assurance that data cannot be recovered?",
    choices:["Degaussing","Overwriting with a single pass of zeros","Physical destruction (shredding)","Reformatting the drive"],
    correctIndex:2, hard:false,
    explanation:"Physical destruction (shredding, disintegration) provides the highest assurance for HDD disposal. Degaussing is effective for magnetic media. SSDs require physical destruction since degaussing does not work on flash storage."
  },
  {
    id:"d2-30", domain:"asset_security", domainLabel:"Asset Security",
    text:"During the SDLC, when should data classification and handling requirements FIRST be defined?",
    choices:["During system testing","During production deployment","During system design","During the initiation/planning phase"],
    correctIndex:3, hard:true,
    explanation:"Data classification requirements should be identified in the earliest (initiation/planning) phase of the SDLC so security controls can be designed into the system rather than added later."
  },
  {
    id:"d2-31", domain:"asset_security", domainLabel:"Asset Security",
    text:"A user stores sensitive company data on their personal cloud storage account without IT approval. This is an example of which risk?",
    choices:["Shadow IT","Insider trading","Privilege escalation","Data aggregation"],
    correctIndex:0, hard:false,
    explanation:"Shadow IT refers to the use of IT systems, devices, or services without explicit IT department approval. Unsanctioned cloud storage creates data security and compliance risks."
  },
  {
    id:"d2-32", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which technique makes data unusable without specific knowledge but retains its format (e.g., keeps credit card numbers the same length)?",
    choices:["Hashing","Tokenization","Format-preserving encryption","Full disk encryption"],
    correctIndex:2, hard:true,
    explanation:"Format-preserving encryption (FPE) encrypts data while maintaining its original format (length, character type). Tokenization replaces data with a non-sensitive token. Hashing is one-way and does not preserve format."
  },
  {
    id:"d2-33", domain:"asset_security", domainLabel:"Asset Security",
    text:"An organization replaces real customer data with fictitious but realistic data in its test environment. What technique is being used?",
    choices:["Tokenization","Data masking","Encryption","Anonymization"],
    correctIndex:1, hard:false,
    explanation:"Data masking (obfuscation) replaces real data with fictitious but structurally similar data for non-production environments, protecting sensitive information while maintaining usability for testing."
  },
  {
    id:"d2-34", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which principle states that data should only be collected for clearly specified, legitimate purposes and not further processed incompatibly with those purposes?",
    choices:["Data minimization","Purpose limitation","Storage limitation","Accountability"],
    correctIndex:1, hard:false,
    explanation:"Purpose limitation (a GDPR principle) requires that personal data be collected for specified, explicit, and legitimate purposes and not processed in ways incompatible with those purposes."
  },
  {
    id:"d2-35", domain:"asset_security", domainLabel:"Asset Security",
    text:"What is the primary objective of a data loss prevention (DLP) solution?",
    choices:["Encrypt all data in transit","Monitor and prevent unauthorized transfer of sensitive data","Block all outbound email","Prevent ransomware from encrypting files"],
    correctIndex:1, hard:false,
    explanation:"DLP solutions identify, monitor, and protect sensitive data from unauthorized exfiltration across endpoints, networks, and cloud services."
  },
  {
    id:"d2-36", domain:"asset_security", domainLabel:"Asset Security",
    text:"An IT administrator implements controls based on data classification labels assigned by a business manager. What role does the IT administrator fulfill?",
    choices:["Data owner","Data subject","Data custodian","Data controller"],
    correctIndex:2, hard:false,
    explanation:"The data custodian (often IT staff) is responsible for implementing and maintaining the security controls specified by the data owner, such as backups, access controls, and encryption."
  },
  {
    id:"d2-37", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which cloud service model places the MOST security responsibility on the customer?",
    choices:["SaaS","PaaS","IaaS","FaaS"],
    correctIndex:2, hard:false,
    explanation:"In the shared responsibility model, IaaS customers manage the OS, middleware, and applications. SaaS places almost all responsibility on the provider. IaaS gives customers the most control and most responsibility."
  },
  {
    id:"d2-38", domain:"asset_security", domainLabel:"Asset Security",
    text:"An organization retains customer email addresses for 7 years after account deletion to comply with regulations. What data retention principle is being applied?",
    choices:["Data minimization","Legal hold","Retention schedule compliance","Purpose limitation"],
    correctIndex:2, hard:false,
    explanation:"A retention schedule defines how long specific types of data must be kept, balancing legal requirements against privacy obligations. This differs from a legal hold which preserves data relevant to active litigation."
  },
  {
    id:"d2-39", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which asset management practice ensures hardware and software assets are inventoried and their security status is continuously tracked?",
    choices:["Configuration management database (CMDB)","Patch management","Vulnerability scanning","Asset tagging only"],
    correctIndex:0, hard:false,
    explanation:"A CMDB maintains a comprehensive record of all hardware and software assets, configurations, and relationships, forming the foundation for change management, patch management, and risk assessment."
  },
  {
    id:"d2-40", domain:"asset_security", domainLabel:"Asset Security",
    text:"A company's DLP system detects an employee emailed a file containing 16-digit numbers matching a credit card pattern. What DLP technique is being used?",
    choices:["Keyword matching","Fingerprinting","Regular expression (pattern matching)","Machine learning classification"],
    correctIndex:2, hard:false,
    explanation:"DLP uses regular expressions (regex) to identify patterns such as credit card numbers (16 digits), SSNs, or other structured data formats."
  },
  {
    id:"d2-41", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which of the following BEST describes scoping in the context of security baseline selection?",
    choices:["Removing controls from a baseline that are not applicable to the organization's environment","Adding extra controls beyond the baseline","Selecting which regulatory framework to follow","Defining the asset inventory"],
    correctIndex:0, hard:true,
    explanation:"Scoping involves identifying and removing controls from a security baseline that are not applicable to the specific system or environment. Tailoring then customizes remaining controls to fit organizational needs."
  },
  {
    id:"d2-42", domain:"asset_security", domainLabel:"Asset Security",
    text:"An organization creates a de-identified dataset by removing names and SSNs from patient records. A researcher later re-identifies individuals by combining it with public data. What privacy risk does this illustrate?",
    choices:["Data aggregation","Re-identification risk","Inference attack","Data poisoning"],
    correctIndex:1, hard:true,
    explanation:"Re-identification risk occurs when de-identified data is combined with external datasets to identify individuals. True anonymization is difficult; de-identification may not be sufficient when auxiliary data exists."
  },
  {
    id:"d2-43", domain:"asset_security", domainLabel:"Asset Security",
    text:"What is the PRIMARY reason for classifying information?",
    choices:["To reduce the cost of data storage","To assign the appropriate level of protection based on sensitivity","To comply with all global privacy laws simultaneously","To make data easier to search and retrieve"],
    correctIndex:1, hard:false,
    explanation:"Data classification ensures information receives protection proportional to its sensitivity and value. Overprotecting low-value data wastes resources; under-protecting sensitive data creates risk."
  },
  {
    id:"d2-44", domain:"asset_security", domainLabel:"Asset Security",
    text:"During end-of-life hardware decommission, an IT team chooses to re-use old SSDs in a less-sensitive environment. What sanitization method is MOST appropriate for SSDs?",
    choices:["Degaussing","Single-pass overwrite","Cryptographic erasure","Physical shredding"],
    correctIndex:2, hard:true,
    explanation:"SSDs use flash memory, rendering degaussing ineffective. Standard overwrite tools may leave data in wear-leveled cells. Cryptographic erasure (destroying the encryption key when FDE is used) is the recommended SSD sanitization method for reuse."
  },
  {
    id:"d2-45", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which privacy concept requires organizations to collect only the minimum amount of personal data necessary for the stated purpose?",
    choices:["Data minimization","Privacy by default","Consent management","Data sovereignty"],
    correctIndex:0, hard:false,
    explanation:"Data minimization (a GDPR principle) requires that only data that is adequate, relevant, and limited to what is necessary for the processing purpose be collected and retained."
  },
  {
    id:"d2-46", domain:"asset_security", domainLabel:"Asset Security",
    text:"A developer uses a copy of the production database for testing. Which risk does this PRIMARILY create?",
    choices:["Availability risk due to database size","Unauthorized exposure of sensitive production data","Risk of data loss in production","Compliance with retention policies"],
    correctIndex:1, hard:false,
    explanation:"Copying production data to test environments exposes real sensitive data to developers and testers who may not have the same security controls as production system users. Data masking should be used instead."
  },
  {
    id:"d2-47", domain:"asset_security", domainLabel:"Asset Security",
    text:"An organization tags all laptops with barcodes and records their location, user assignment, and configuration. This is an example of which activity?",
    choices:["Software licensing management","Hardware inventory management","Configuration baseline","Patch management"],
    correctIndex:1, hard:false,
    explanation:"Hardware inventory management tracks physical assets including their location, ownership, and configuration details, enabling the organization to account for all devices and identify unauthorized equipment."
  },
  {
    id:"d2-48", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which law primarily governs the protection of healthcare information in the United States and requires safeguards for protected health information (PHI)?",
    choices:["GLBA","SOX","HIPAA","FERPA"],
    correctIndex:2, hard:false,
    explanation:"HIPAA and its Security Rule mandate administrative, physical, and technical safeguards for electronic protected health information (ePHI) held by covered entities and business associates."
  },
  {
    id:"d2-49", domain:"asset_security", domainLabel:"Asset Security",
    text:"A media company owns the rights to a proprietary algorithm used in its recommendation engine. What type of intellectual property protection is MOST appropriate?",
    choices:["Copyright","Trademark","Trade secret","Patent"],
    correctIndex:2, hard:true,
    explanation:"A trade secret protects valuable proprietary information indefinitely as long as it remains secret. Patents require public disclosure and expire after about 20 years. Copyright protects expression, not algorithms."
  },
  {
    id:"d2-50", domain:"asset_security", domainLabel:"Asset Security",
    text:"An auditor determines the organization collects data it no longer uses for any business purpose. Which privacy principle is being violated?",
    choices:["Consent","Storage limitation","Accuracy","Lawfulness"],
    correctIndex:1, hard:false,
    explanation:"The GDPR storage limitation principle requires that personal data be kept no longer than necessary for the purpose for which it was collected. Retaining data without a current business purpose violates this principle."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 3 – Security Architecture & Engineering  (d3-26 … d3-50)
  // ─────────────────────────────────────────────────────────────
  {
    id:"d3-26", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"The Bell-LaPadula model enforces which security property by preventing subjects from reading data at a higher classification level?",
    choices:["Simple integrity property","Star integrity property","Simple security property (no read-up)","Discretionary security property"],
    correctIndex:2, hard:false,
    explanation:"The Bell-LaPadula model's simple security property ('no read-up') prevents a subject from reading information at a higher classification. The star property prevents writing to a lower level ('no write-down'), protecting confidentiality."
  },
  {
    id:"d3-27", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which security model focuses on INTEGRITY rather than confidentiality, preventing unauthorized modification of data?",
    choices:["Bell-LaPadula","Brewer-Nash (Chinese Wall)","Biba","Clark-Wilson"],
    correctIndex:2, hard:false,
    explanation:"The Biba model protects data integrity with 'no write-up' (subjects cannot write to higher integrity levels) and 'no read-down' (subjects cannot read lower integrity data). Bell-LaPadula protects confidentiality."
  },
  {
    id:"d3-28", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"A financial firm uses a security model that prevents analysts working on one client's data from accessing a competing client's data. Which model BEST describes this?",
    choices:["Bell-LaPadula","Clark-Wilson","Biba","Brewer-Nash (Chinese Wall)"],
    correctIndex:3, hard:true,
    explanation:"The Brewer-Nash (Chinese Wall) model prevents information flows that would cause a conflict of interest. Once a subject accesses data from one company, they cannot access data from competing companies."
  },
  {
    id:"d3-29", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which Common Criteria evaluation assurance level (EAL) requires formal verification of design and implementation?",
    choices:["EAL 1","EAL 3","EAL 5","EAL 7"],
    correctIndex:3, hard:true,
    explanation:"EAL 7 (formally verified design and tested) is the highest Common Criteria assurance level and requires rigorous formal mathematical verification of the design and implementation."
  },
  {
    id:"d3-30", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"A software vulnerability allows an attacker to write data beyond the boundaries of an allocated memory buffer, overwriting adjacent memory. What type of vulnerability is this?",
    choices:["SQL injection","Buffer overflow","Time-of-check/time-of-use (TOC/TOU)","Race condition"],
    correctIndex:1, hard:false,
    explanation:"A buffer overflow occurs when a program writes more data to a buffer than it can hold, overwriting adjacent memory. Attackers can exploit this to inject and execute malicious code."
  },
  {
    id:"d3-31", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which type of attack exploits the time gap between when a system checks a condition and when it acts on that condition?",
    choices:["Buffer overflow","Replay attack","Time-of-check/time-of-use (TOC/TOU)","Man-in-the-middle"],
    correctIndex:2, hard:true,
    explanation:"A TOC/TOU (race condition) attack exploits a window of time between a security check and the operation that follows it, manipulating shared resources during that gap to bypass access controls."
  },
  {
    id:"d3-32", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which encryption mode produces a keystream that can encrypt data of any length and is vulnerable if the same key and IV are reused?",
    choices:["Electronic Codebook (ECB)","Cipher Block Chaining (CBC)","Output Feedback (OFB)","Cipher Feedback (CFB)"],
    correctIndex:2, hard:true,
    explanation:"OFB mode generates a keystream independently of plaintext. Reusing the same key/IV pair completely compromises security since the keystream repeats. ECB is vulnerable to pattern analysis; CBC chains ciphertext blocks."
  },
  {
    id:"d3-33", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"An attacker intercepts a digital signature and replays it later with the original signed message. What control BEST prevents this?",
    choices:["Public key infrastructure","Timestamp and sequence numbers in the signature","Longer RSA key lengths","Certificate revocation lists"],
    correctIndex:1, hard:true,
    explanation:"Including timestamps or nonces in signed data ensures that replayed signatures are detected. A signature on an old message with a past timestamp will be rejected by the recipient."
  },
  {
    id:"d3-34", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which physical security control is classified as both preventive and detective?",
    choices:["Security guard","CCTV with recording","Mantraps","Fences"],
    correctIndex:1, hard:false,
    explanation:"CCTV with recording is detective (reviewing footage to investigate incidents) and can act as a deterrent. A mantrap is preventive. Fences are preventive. A guard can be preventive and detective."
  },
  {
    id:"d3-35", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which side-channel attack infers cryptographic keys by measuring the electrical power consumption of a device during cryptographic operations?",
    choices:["Fault injection","Timing attack","Power analysis attack","Cache-based attack"],
    correctIndex:2, hard:true,
    explanation:"Power analysis attacks (simple or differential) measure power consumption during cryptographic operations to deduce key material. Timing attacks measure execution time. Fault injection deliberately causes errors to reveal secrets."
  },
  {
    id:"d3-36", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which protocol provides hardware-based attestation of a system's boot state and ensures the boot sequence has not been tampered with?",
    choices:["UEFI Secure Boot","TPM-based measured boot","Full disk encryption","BIOS password"],
    correctIndex:1, hard:true,
    explanation:"TPM-based measured boot records cryptographic hashes of each boot component into PCRs. Remote attestation can verify these measurements to confirm the system booted into a known-good state."
  },
  {
    id:"d3-37", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"A developer hides a secret message inside a digital photograph without altering its visible appearance. What technique is being used?",
    choices:["Encryption","Digital watermarking","Steganography","Data masking"],
    correctIndex:2, hard:false,
    explanation:"Steganography conceals the existence of a message by hiding it within a carrier file (image, audio, video). Digital watermarking embeds identifying information. Encryption obscures content but reveals that a secret exists."
  },
  {
    id:"d3-38", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"A web application stores session tokens in cookies without the HttpOnly flag. What attack does this enable?",
    choices:["SQL injection","Cross-site scripting (XSS) session hijacking","Cross-site request forgery (CSRF)","Buffer overflow"],
    correctIndex:1, hard:false,
    explanation:"Without the HttpOnly flag, JavaScript can access the cookie. An XSS attack that injects malicious JavaScript can steal session tokens and allow an attacker to hijack the victim's session."
  },
  {
    id:"d3-39", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"What is the purpose of a demilitarized zone (DMZ) in network architecture?",
    choices:["To encrypt all traffic between the internet and internal servers","To create a network segment that isolates publicly accessible services from the internal network","To block all inbound internet traffic","To store sensitive data away from the internet"],
    correctIndex:1, hard:false,
    explanation:"A DMZ is a perimeter network segment housing publicly accessible services (web, email, DNS). It separates them from the trusted internal network so a compromised public server does not directly expose internal systems."
  },
  {
    id:"d3-40", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which of the following BEST describes defense in depth?",
    choices:["Using the strongest possible single security control","Layering multiple independent security controls so the failure of one does not compromise overall security","Encrypting data at every stage of its lifecycle","Deploying a unified security platform that covers all threats"],
    correctIndex:1, hard:false,
    explanation:"Defense in depth (layered security) uses multiple overlapping controls across different layers (physical, network, host, application) so an attacker must defeat multiple independent barriers."
  },
  {
    id:"d3-41", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"An RSA private key has been compromised. Which PKI mechanism allows relying parties to check whether a certificate is still valid?",
    choices:["Certificate Signing Request (CSR)","Certificate Revocation List (CRL) or OCSP","Certificate transparency log","Key escrow"],
    correctIndex:1, hard:false,
    explanation:"CRLs and OCSP allow applications to check whether a certificate has been revoked before trusting it. Key compromise requires immediate revocation so relying parties stop accepting the certificate."
  },
  {
    id:"d3-42", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which symmetric encryption algorithm has a 56-bit key length and is now considered insecure due to brute-force attacks?",
    choices:["AES-128","3DES","DES","RC4"],
    correctIndex:2, hard:false,
    explanation:"DES uses a 56-bit key, which can be broken by brute force. 3DES applies DES three times to increase effective key length. AES replaced both."
  },
  {
    id:"d3-43", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which type of fire suppression system is SAFEST for use in occupied spaces containing computer equipment?",
    choices:["Wet pipe sprinkler","Dry pipe sprinkler","Halon","Clean agent (e.g., FM-200)"],
    correctIndex:3, hard:false,
    explanation:"Clean agent systems (FM-200, Novec 1230) suppress fires without damaging equipment or leaving residue and are generally safe for people at design concentrations. Halon is being phased out due to ozone depletion."
  },
  {
    id:"d3-44", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"What is the purpose of a hardware security module (HSM)?",
    choices:["Scanning network traffic for malware","Securely generating, storing, and managing cryptographic keys in tamper-resistant hardware","Providing multi-factor authentication for VPN access","Monitoring system logs for anomalies"],
    correctIndex:1, hard:false,
    explanation:"An HSM is a physical computing device that safeguards and manages digital keys and performs cryptographic operations. It is tamper-resistant and tamper-evident, protecting key material from extraction."
  },
  {
    id:"d3-45", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which security architecture framework uses a business-driven approach and maps security services across six security domains including governance, risk, compliance, and operations?",
    choices:["Zachman Framework","SABSA","TOGAF","DoDAF"],
    correctIndex:1, hard:true,
    explanation:"SABSA (Sherwood Applied Business Security Architecture) is a risk-driven enterprise security architecture framework that derives security requirements from business attributes across six architectural layers."
  },
  {
    id:"d3-46", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"A hashing algorithm produces the same digest for two different input messages. What cryptographic weakness does this represent?",
    choices:["Key collision","Birthday paradox exploitation","Hash collision","Preimage attack"],
    correctIndex:2, hard:false,
    explanation:"A hash collision occurs when two different inputs produce the same hash output. MD5 and SHA-1 are vulnerable to collision attacks; SHA-256 and SHA-3 are currently collision-resistant."
  },
  {
    id:"d3-47", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which access control model uses sensitivity labels on subjects and objects, and access decisions are made by the system rather than the data owner?",
    choices:["Discretionary Access Control (DAC)","Mandatory Access Control (MAC)","Role-Based Access Control (RBAC)","Rule-Based Access Control"],
    correctIndex:1, hard:false,
    explanation:"In MAC, the operating system enforces access based on security labels (classification levels). Data owners cannot override these decisions, unlike DAC where owners control access to their objects."
  },
  {
    id:"d3-48", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"An organization implements a hypervisor to run multiple virtual machines. What is the MAIN security concern specific to virtualized environments?",
    choices:["Increased hardware costs","VM escape allowing a guest OS to break out and affect the host or other VMs","Slower network throughput for virtual machines","Lack of encryption support in virtual environments"],
    correctIndex:1, hard:true,
    explanation:"VM escape is the most severe virtualization-specific threat. An attacker in a guest VM exploits a hypervisor vulnerability to execute code on the host or other VMs, breaking the isolation that virtualization provides."
  },
  {
    id:"d3-49", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which of the following BEST describes the principle of least privilege as applied to system design?",
    choices:["Users should only log in during business hours","Each component should operate with the minimum permissions needed to perform its function","Administrators should share credentials to reduce account sprawl","All users should have the same level of access for simplicity"],
    correctIndex:1, hard:false,
    explanation:"Least privilege in system design means every process, service, or component operates with only the permissions required for its specific function, reducing the attack surface if the component is compromised."
  },
  {
    id:"d3-50", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"What distinguishes AES-256 from AES-128?",
    choices:["AES-256 uses a different algorithm than AES-128","AES-256 has a 256-bit key providing greater resistance to brute-force attacks","AES-256 is faster than AES-128","AES-256 uses asymmetric encryption while AES-128 uses symmetric"],
    correctIndex:1, hard:false,
    explanation:"AES always uses the same core algorithm; only the key size differs (128, 192, or 256 bits). A 256-bit key provides far larger keyspace than 128-bit, offering higher theoretical brute-force resistance."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 4 – Communication & Network Security  (d4-26 … d4-50)
  // ─────────────────────────────────────────────────────────────
  {
    id:"d4-26", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which OSI layer is responsible for end-to-end error detection and flow control between communicating hosts?",
    choices:["Layer 2 - Data Link","Layer 3 - Network","Layer 4 - Transport","Layer 5 - Session"],
    correctIndex:2, hard:false,
    explanation:"The Transport layer (Layer 4) provides end-to-end communication services, including error detection, flow control, and segmentation. TCP (reliable) and UDP (unreliable) operate at this layer."
  },
  {
    id:"d4-27", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An attacker sends a large number of TCP SYN packets to a server but never completes the three-way handshake. What type of attack is this?",
    choices:["Smurf attack","SYN flood (DoS)","DNS amplification","ARP poisoning"],
    correctIndex:1, hard:false,
    explanation:"A SYN flood attack sends a flood of TCP SYN packets, exhausting the server's connection table with half-open connections. Mitigation includes SYN cookies, rate limiting, and firewalls that detect the pattern."
  },
  {
    id:"d4-28", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which protocol maps IP addresses to MAC addresses on a local network and is commonly exploited in man-in-the-middle attacks?",
    choices:["DNS","DHCP","ARP","ICMP"],
    correctIndex:2, hard:false,
    explanation:"ARP (Address Resolution Protocol) maps IPv4 addresses to MAC addresses. ARP spoofing (poisoning) allows an attacker to associate their MAC with a legitimate IP, intercepting traffic in a man-in-the-middle attack."
  },
  {
    id:"d4-29", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"A stateful inspection firewall differs from a packet-filtering firewall because it:",
    choices:["Inspects application-layer content","Tracks the state of network connections when making filtering decisions","Uses deep packet inspection to detect malware","Requires authentication before allowing traffic"],
    correctIndex:1, hard:false,
    explanation:"A stateful inspection firewall tracks connection state, allowing return traffic for established connections without individual rules. Packet filters evaluate each packet in isolation without tracking state."
  },
  {
    id:"d4-30", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"WPA3 improves upon WPA2 by implementing which key agreement protocol to protect against offline dictionary attacks?",
    choices:["RC4 TKIP","CCMP AES","SAE (Simultaneous Authentication of Equals)","PEAP-MSCHAPv2"],
    correctIndex:2, hard:true,
    explanation:"WPA3 uses SAE (Dragonfly handshake) instead of the PSK handshake used in WPA2, providing forward secrecy and resistance to offline dictionary attacks even with weak passphrases."
  },
  {
    id:"d4-31", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which VPN protocol operates at Layer 3 of the OSI model and provides both authentication and encryption for IP packets?",
    choices:["SSL/TLS VPN","PPTP","IPSec","L2TP alone"],
    correctIndex:2, hard:false,
    explanation:"IPSec (Internet Protocol Security) operates at Layer 3 and provides authentication (AH) and encryption (ESP) for IP packets. SSL/TLS VPNs operate at Layer 4/5. PPTP operates at Layer 2 with weak security."
  },
  {
    id:"d4-32", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"A router is configured to block all ICMP echo requests from the internet. What attack does this PRIMARILY mitigate?",
    choices:["ARP spoofing","Smurf amplification attack","SQL injection","Replay attack"],
    correctIndex:1, hard:false,
    explanation:"Smurf attacks use ICMP echo (ping) broadcast amplification. Blocking inbound ICMP from the internet prevents the organization's network from being used as an amplifier."
  },
  {
    id:"d4-33", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An attacker sends forged DNS responses to a resolver, causing it to cache incorrect IP address mappings. What type of attack is this?",
    choices:["DNS hijacking","DNS cache poisoning","DNS tunneling","BGP hijacking"],
    correctIndex:1, hard:false,
    explanation:"DNS cache poisoning injects malicious records into a DNS resolver's cache, redirecting users to attacker-controlled servers. DNSSEC mitigates this by cryptographically signing DNS responses."
  },
  {
    id:"d4-34", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which VLAN configuration technique prevents a compromised switch port from accessing traffic intended for other VLANs?",
    choices:["VLAN trunking","VLAN hopping prevention (disabling auto-trunking, dedicated native VLAN)","QoS tagging","STP root guard"],
    correctIndex:1, hard:true,
    explanation:"VLAN hopping exploits trunk negotiation (DTP) or double tagging. Mitigations include disabling auto-trunking on access ports, using a dedicated unused native VLAN, and not using VLAN 1 as the native VLAN."
  },
  {
    id:"d4-35", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"What is the primary security benefit of network segmentation?",
    choices:["It increases available bandwidth","It reduces the attack surface by limiting lateral movement between network zones","It eliminates the need for firewalls","It speeds up authentication processes"],
    correctIndex:1, hard:false,
    explanation:"Network segmentation divides the network into zones with access controls between them, limiting lateral movement so a compromise in one segment does not immediately expose others."
  },
  {
    id:"d4-36", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which wireless attack involves an attacker creating a rogue access point with the same SSID as a legitimate network to lure users?",
    choices:["Deauthentication attack","Evil twin attack","WPS brute-force","Bluesnarfing"],
    correctIndex:1, hard:false,
    explanation:"An evil twin attack sets up a rogue AP mimicking a legitimate network. Clients connecting to the evil twin expose their traffic to the attacker. Using VPNs and certificate-based 802.1X authentication mitigates this."
  },
  {
    id:"d4-37", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which protocol provides secure, encrypted remote shell access and replaces Telnet?",
    choices:["SFTP","SNMP v3","SSH","RDP with NLA"],
    correctIndex:2, hard:false,
    explanation:"SSH (Secure Shell) provides encrypted command-line access to remote systems, replacing the cleartext Telnet protocol. It authenticates the server (preventing MITM) and encrypts all session data."
  },
  {
    id:"d4-38", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An organization deploys a system that monitors network traffic for known attack signatures and sends an alert without blocking. What type of system is this?",
    choices:["Intrusion Prevention System (IPS)","Network-based Intrusion Detection System (NIDS)","Web Application Firewall (WAF)","Security Information and Event Management (SIEM)"],
    correctIndex:1, hard:false,
    explanation:"A NIDS monitors and alerts on suspicious traffic but does not block it. An IPS actively blocks detected attacks inline. A WAF focuses on HTTP/HTTPS traffic. A SIEM aggregates and correlates logs from multiple sources."
  },
  {
    id:"d4-39", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"A security team discovers an internal host is sending high volumes of DNS queries with long, randomized subdomains. What attack technique does this suggest?",
    choices:["DNS amplification attack","DNS tunneling (C2 over DNS)","BGP route hijacking","DNSSEC zone walking"],
    correctIndex:1, hard:true,
    explanation:"DNS tunneling encodes data in DNS queries/responses to exfiltrate data or communicate with C2 servers. Long, randomized subdomains are a classic indicator. Monitoring DNS query volume and domain length can detect this."
  },
  {
    id:"d4-40", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which 802.1X component validates credentials and grants or denies network access?",
    choices:["Supplicant","Authenticator","Authentication server (RADIUS)","Network Access Controller"],
    correctIndex:2, hard:true,
    explanation:"In 802.1X, the supplicant is the client device, the authenticator is the switch/AP that enforces access, and the authentication server (typically RADIUS) validates credentials and grants or denies network access."
  },
  {
    id:"d4-41", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"What is the primary purpose of Network Address Translation (NAT)?",
    choices:["Encrypting traffic between internal and external networks","Translating private IP addresses to a public IP address, conserving address space and hiding internal topology","Filtering malicious traffic at the network perimeter","Assigning IP addresses dynamically to clients"],
    correctIndex:1, hard:false,
    explanation:"NAT translates private (RFC 1918) addresses to public IPs, conserving IPv4 address space and providing a degree of obscurity for internal network topology."
  },
  {
    id:"d4-42", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An attacker on a switched network captures all traffic by flooding the switch's MAC address table with fake MAC addresses. What attack is this?",
    choices:["ARP spoofing","MAC flooding","VLAN hopping","STP manipulation"],
    correctIndex:1, hard:true,
    explanation:"MAC flooding overwhelms a switch's CAM table with fake MAC addresses, causing it to fail open and broadcast all traffic like a hub. Port security (limiting MACs per port) and 802.1X mitigate this."
  },
  {
    id:"d4-43", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which of the following BEST describes a next-generation firewall (NGFW)?",
    choices:["A firewall that only filters packets based on IP and port","A stateful firewall with deep packet inspection, application awareness, and integrated threat intelligence","A firewall with no stateful tracking","A hardware device exclusively for blocking DDoS attacks"],
    correctIndex:1, hard:false,
    explanation:"NGFWs combine traditional stateful inspection with deep packet inspection, application identification/control, user identity tracking, SSL inspection, and threat intelligence integration."
  },
  {
    id:"d4-44", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An employee connects an unauthorized wireless access point to the corporate network. What type of security risk is this?",
    choices:["Denial of service","Rogue access point creating an unauthorized entry point","Phishing attack","Brute-force attack"],
    correctIndex:1, hard:false,
    explanation:"A rogue AP bypasses perimeter controls and creates an unauthorized network entry point. Wireless scanning (RF monitoring), NAC, and 802.1X help detect and prevent rogue APs."
  },
  {
    id:"d4-45", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which email security protocol uses digital signatures to verify that an email was sent from an authorized server for a domain, reducing email spoofing?",
    choices:["SMTPS","DKIM","POP3S","IMAP over TLS"],
    correctIndex:1, hard:false,
    explanation:"DKIM (DomainKeys Identified Mail) adds a digital signature header to outgoing email. Receiving servers verify the signature using the sender domain's public key, confirming the message was authorized and unmodified."
  },
  {
    id:"d4-46", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which type of proxy inspects and re-signs TLS/SSL traffic to perform deep packet inspection?",
    choices:["Forward proxy","Reverse proxy","Transparent (intercepting) SSL proxy","Content delivery network (CDN)"],
    correctIndex:2, hard:true,
    explanation:"An SSL/TLS intercepting proxy decrypts, inspects, and re-encrypts traffic using its own certificate. This enables DLP and malware scanning but requires trust in the proxy's certificate."
  },
  {
    id:"d4-47", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which wireless encryption standard should be used for maximum security in an enterprise Wi-Fi deployment today?",
    choices:["WEP","WPA (TKIP)","WPA2-Personal (AES)","WPA3-Enterprise (802.1X with AES-256)"],
    correctIndex:3, hard:false,
    explanation:"WPA3-Enterprise with 802.1X authentication and AES-256 provides the strongest currently available enterprise Wi-Fi security. WEP and WPA are deprecated. WPA2-Personal lacks per-user credentials and forward secrecy."
  },
  {
    id:"d4-48", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An organization needs to allow remote workers to securely access internal resources without installing client software. Which VPN type BEST meets this requirement?",
    choices:["IPSec site-to-site VPN","L2TP/IPSec client VPN","SSL/TLS clientless VPN (browser-based)","PPTP VPN"],
    correctIndex:2, hard:false,
    explanation:"SSL/TLS (clientless) VPNs use a standard web browser to provide access via HTTPS, requiring no pre-installed client software. Ideal for access from unmanaged or guest devices."
  },
  {
    id:"d4-49", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"IPv6 uses which address type to deliver packets to a single interface in a group, similar to IPv4 unicast?",
    choices:["Multicast","Anycast","Unicast","Broadcast"],
    correctIndex:2, hard:false,
    explanation:"IPv6 unicast addresses identify a single interface. IPv6 does not support broadcast (multicast replaces it). Anycast delivers to the nearest interface in a group. Multicast delivers to multiple interfaces in a group."
  },
  {
    id:"d4-50", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which protocol provides cryptographic authentication for DNS responses to prevent cache poisoning?",
    choices:["HTTPS","DNSCrypt","DNSSEC","DNS over TLS"],
    correctIndex:2, hard:false,
    explanation:"DNSSEC (DNS Security Extensions) uses digital signatures to cryptographically authenticate DNS responses, preventing cache poisoning by allowing resolvers to verify that data has not been tampered with."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 5 – Identity and Access Management  (d5-26 … d5-50)
  // ─────────────────────────────────────────────────────────────
  {
    id:"d5-26", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which authentication factor category does a hardware OTP token belong to?",
    choices:["Something you know","Something you have","Something you are","Somewhere you are"],
    correctIndex:1, hard:false,
    explanation:"A hardware OTP token is a physical device ('something you have'). Passwords are 'something you know.' Biometrics are 'something you are.' Location-based controls are 'somewhere you are.'"
  },
  {
    id:"d5-27", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"In Kerberos authentication, what is the role of the Key Distribution Center (KDC)?",
    choices:["It stores user passwords in plaintext for comparison","It issues Ticket Granting Tickets (TGTs) and service tickets to authenticate users to services","It provides end-to-end encryption for all network traffic","It manages access control lists for file shares"],
    correctIndex:1, hard:false,
    explanation:"The KDC (comprising the Authentication Server and Ticket Granting Server) issues TGTs after initial authentication and grants service tickets. Passwords are never sent over the network; shared secrets (keys) are used."
  },
  {
    id:"d5-28", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which biometric error represents the rate at which unauthorized users are incorrectly granted access?",
    choices:["False Rejection Rate (FRR)","Crossover Error Rate (CER)","False Acceptance Rate (FAR)","Equal Error Rate (EER)"],
    correctIndex:2, hard:false,
    explanation:"FAR measures how often unauthorized users are accepted, the security failure rate. FRR measures how often authorized users are rejected, the usability failure rate. CER/EER is where FAR equals FRR."
  },
  {
    id:"d5-29", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A company uses SAML to allow employees to authenticate once to their corporate identity provider and access multiple SaaS applications. What is this called?",
    choices:["OAuth 2.0 delegation","Federated identity with SSO","Kerberos cross-realm trust","Multifactor authentication"],
    correctIndex:1, hard:false,
    explanation:"SAML enables federated identity and SSO. A corporate IdP authenticates the user and passes a SAML assertion to SaaS applications (service providers), eliminating separate logins."
  },
  {
    id:"d5-30", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which access control model grants access based on rules defined by the data owner and is the default model in most operating systems?",
    choices:["Mandatory Access Control (MAC)","Discretionary Access Control (DAC)","Rule-Based Access Control","Attribute-Based Access Control (ABAC)"],
    correctIndex:1, hard:false,
    explanation:"DAC allows the owner of a resource to decide who can access it. File system permissions in Windows and Linux are DAC implementations where the file owner sets permissions for others."
  },
  {
    id:"d5-31", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What is the PRIMARY security advantage of TACACS+ over RADIUS for device administration?",
    choices:["TACACS+ supports more authentication methods","TACACS+ encrypts the entire payload, while RADIUS encrypts only the password field","TACACS+ uses UDP for faster performance","TACACS+ is an open standard"],
    correctIndex:1, hard:true,
    explanation:"TACACS+ (TCP, Cisco proprietary) encrypts the entire packet body. RADIUS (UDP) encrypts only the password field. TACACS+ also separates authentication, authorization, and accounting more cleanly."
  },
  {
    id:"d5-32", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"An organization's access control policy requires that a user's job function, clearance level, and current project all match before access is granted. Which model is being used?",
    choices:["Role-Based Access Control (RBAC)","Mandatory Access Control (MAC)","Discretionary Access Control (DAC)","Attribute-Based Access Control (ABAC)"],
    correctIndex:3, hard:true,
    explanation:"ABAC evaluates multiple attributes: job function, clearance, project, time, location, before granting access. RBAC uses only role membership; MAC uses classification labels."
  },
  {
    id:"d5-33", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which practice involves reviewing all user account access rights on a scheduled basis to ensure they remain appropriate?",
    choices:["Provisioning","User access recertification (access review)","Privilege escalation","Single sign-on enrollment"],
    correctIndex:1, hard:false,
    explanation:"User access recertification (periodic access review) requires managers or system owners to confirm each user's access rights are still appropriate, removing unnecessary or stale permissions."
  },
  {
    id:"d5-34", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A system administrator has a standard user account for daily tasks and a separate administrator account used only for privileged operations. This practice is called:",
    choices:["Least privilege","Dual control","Separation of duties","Privileged account management with role separation"],
    correctIndex:3, hard:false,
    explanation:"Using separate accounts for standard and privileged tasks limits exposure if the standard account is compromised. PAM solutions help manage, audit, and rotate privileged credentials."
  },
  {
    id:"d5-35", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which OAuth 2.0 grant type is MOST appropriate for server-to-server API communication where no user is involved?",
    choices:["Authorization Code flow","Implicit flow","Resource Owner Password Credentials","Client Credentials grant"],
    correctIndex:3, hard:true,
    explanation:"The Client Credentials grant allows a service to authenticate directly using its own credentials (client_id and client_secret) without user involvement, ideal for machine-to-machine API authentication."
  },
  {
    id:"d5-36", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What does the principle of need-to-know mean in access control?",
    choices:["Users need to know the organization's security policies","Access is granted only when a user requires specific information to perform their assigned duties","All users should know the data classification scheme","Management must be informed when access is granted"],
    correctIndex:1, hard:false,
    explanation:"Need-to-know restricts access to information required for a specific task, even among people with the same clearance level. A Top Secret clearance alone does not grant access to all Top Secret data."
  },
  {
    id:"d5-37", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"An employee moves to a new department and gains new system access for their new role, but retains all access from their previous role. What vulnerability does this create?",
    choices:["Privilege creep (access accumulation)","Separation of duties violation","Least privilege violation","Need-to-know violation"],
    correctIndex:0, hard:false,
    explanation:"Privilege creep (access accumulation) occurs when a user accumulates unnecessary permissions over time due to role changes without revocation of old access. Access recertification mitigates this."
  },
  {
    id:"d5-38", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A password policy requires minimum length of 12 characters, complexity, and 90-day expiry. Which password attack does mandatory expiry PRIMARILY mitigate?",
    choices:["Brute-force attack","Rainbow table attack","Pass-the-hash attack","Long-term credential compromise"],
    correctIndex:3, hard:false,
    explanation:"Mandatory expiry limits the window of usefulness if a password is compromised. It does not prevent brute-force or rainbow table attacks directly, those are mitigated by length, complexity, and salted hashing."
  },
  {
    id:"d5-39", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which technology allows users in one organization to use their existing credentials to access resources in a partner organization without a second account?",
    choices:["Multi-factor authentication","Federated identity management","Privileged access management","Just-in-time access provisioning"],
    correctIndex:1, hard:false,
    explanation:"Federated identity management establishes trust between identity providers in different organizations, allowing users to authenticate with their home organization's IdP to access partner resources."
  },
  {
    id:"d5-40", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which biometric characteristic generally has the LOWEST crossover error rate (CER) and is therefore the MOST accurate?",
    choices:["Fingerprint scan","Signature dynamics","Iris scan","Voice recognition"],
    correctIndex:2, hard:true,
    explanation:"Iris scanning generally achieves the lowest CER among common biometrics. Retinal scanning is also very accurate. Fingerprints are widely used but can degrade with dirt or injury."
  },
  {
    id:"d5-41", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A user logs in once per day and can access all authorized resources without re-authenticating. What is the MAIN security risk of SSO?",
    choices:["Increased complexity for users","Credential compromise grants access to all integrated resources simultaneously","Slower authentication due to token overhead","Incompatibility with MFA"],
    correctIndex:1, hard:false,
    explanation:"SSO reduces authentication friction but creates a single point of compromise. If the SSO credential is stolen, the attacker gains access to every resource integrated with the SSO system."
  },
  {
    id:"d5-42", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which provisioning approach automatically grants and revokes access based on HR system data such as hire, transfer, and termination events?",
    choices:["Manual provisioning","Self-service provisioning","Automated identity lifecycle management (SCIM/IGA)","Privileged access management"],
    correctIndex:2, hard:false,
    explanation:"Automated identity lifecycle management uses connectors (SCIM, LDAP, APIs) to synchronize HR system events with IAM systems, ensuring timely and accurate provisioning and de-provisioning."
  },
  {
    id:"d5-43", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What is just-in-time (JIT) access provisioning in privileged access management?",
    choices:["Always-on standing administrative access","Granting elevated privileges only when needed for a specific task and automatically revoking them afterward","Providing users with administrator accounts during onboarding","Pre-staging service accounts with permanent admin rights"],
    correctIndex:1, hard:true,
    explanation:"JIT access eliminates standing privileges by granting elevated access on demand for a specific session or task, then automatically revoking it, minimizing the window of exposure for privileged credentials."
  },
  {
    id:"d5-44", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which standard framework defines a common language for exchanging identity information between an identity provider and service providers using XML?",
    choices:["OAuth 2.0","OpenID Connect","SAML 2.0","SCIM"],
    correctIndex:2, hard:false,
    explanation:"SAML 2.0 (Security Assertion Markup Language) is an XML-based open standard for exchanging authentication and authorization data between an identity provider and service providers, enabling federated SSO."
  },
  {
    id:"d5-45", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"An attacker captures a valid Kerberos ticket and replays it to gain unauthorized access. What attack is this?",
    choices:["Golden ticket attack","Pass-the-ticket attack","Kerberoasting","Silver ticket attack"],
    correctIndex:1, hard:true,
    explanation:"Pass-the-ticket attacks use a stolen Kerberos TGT or service ticket to authenticate without knowing the password. Golden tickets use a forged TGT signed by the KRBTGT account. Kerberoasting cracks service account passwords."
  },
  {
    id:"d5-46", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What does adaptive authentication (risk-based authentication) evaluate to determine whether to require additional factors?",
    choices:["Only the user's password strength","Contextual signals such as location, device posture, time of access, and behavioral patterns","Only the classification of the data being accessed","The number of prior failed login attempts only"],
    correctIndex:1, hard:false,
    explanation:"Adaptive (risk-based) authentication evaluates contextual signals to dynamically adjust authentication requirements, requiring step-up authentication only when risk is elevated."
  },
  {
    id:"d5-47", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which of the following BEST describes the difference between identification and authentication?",
    choices:["Identification proves who you are; authentication claims who you are","Identification is claiming an identity; authentication is proving that claimed identity","Authentication is always stronger than identification","They are synonymous terms in access control"],
    correctIndex:1, hard:false,
    explanation:"Identification is presenting a claimed identity (username). Authentication is providing proof to verify that claim (password, biometric, token). Authorization then determines what the verified identity can access."
  },
  {
    id:"d5-48", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A company requires all privileged account passwords to be rotated automatically every 24 hours, stored in an encrypted vault, and checked out by administrators for each session. What technology supports this?",
    choices:["Password manager for individuals","Privileged Access Management (PAM) vault","Active Directory Group Policy","MFA authenticator app"],
    correctIndex:1, hard:false,
    explanation:"PAM vaults manage privileged credentials with automated rotation, session recording, and just-in-time access, reducing risk from static, shared, or stale privileged passwords."
  },
  {
    id:"d5-49", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which directory protocol is commonly used to allow users to authenticate to a central directory for network resource access?",
    choices:["RADIUS","Active Directory (AD) over LDAP","TACACS+","SAML"],
    correctIndex:1, hard:false,
    explanation:"Active Directory uses LDAP (and Kerberos) as its underlying protocol. Applications query AD via LDAP to authenticate users and retrieve group memberships for authorization decisions."
  },
  {
    id:"d5-50", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A company uses a CAPTCHA during login to differentiate human users from automated bots. What type of authentication enhancement is this?",
    choices:["Something you know","Something you have","Behavioral biometric","Bot/automation detection control"],
    correctIndex:3, hard:false,
    explanation:"CAPTCHA is a Turing test mechanism to distinguish humans from bots. While not a traditional authentication factor, it supplements authentication by blocking automated credential-stuffing attacks."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 6 – Security Assessment and Testing  (d6-26 … d6-50)
  // ─────────────────────────────────────────────────────────────
  {
    id:"d6-26", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"During which penetration testing phase does the tester actively attempt to exploit discovered vulnerabilities?",
    choices:["Reconnaissance","Scanning and enumeration","Exploitation","Reporting"],
    correctIndex:2, hard:false,
    explanation:"The exploitation phase is where the tester attempts to leverage identified vulnerabilities to gain unauthorized access, escalate privileges, or move laterally, directly proving the impact of the vulnerabilities."
  },
  {
    id:"d6-27", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A penetration tester is given no prior knowledge of the target systems and must gather all information independently. What type of test is this?",
    choices:["White-box test","Gray-box test","Black-box test","Crystal-box test"],
    correctIndex:2, hard:false,
    explanation:"A black-box test simulates an external attacker with no insider knowledge. White-box provides full system documentation. Gray-box provides partial knowledge (e.g., credentials but no architecture diagrams)."
  },
  {
    id:"d6-28", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which testing type involves sending random, invalid, or unexpected inputs to an application to discover vulnerabilities such as crashes or unexpected behavior?",
    choices:["Regression testing","Fuzzing (fuzz testing)","Unit testing","Integration testing"],
    correctIndex:1, hard:false,
    explanation:"Fuzzing automatically sends malformed or random data to application interfaces to discover security vulnerabilities like buffer overflows, injection flaws, and unexpected error conditions."
  },
  {
    id:"d6-29", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A security team deploys a decoy system designed to attract and study attacker activity without exposing real production systems. What is this called?",
    choices:["IDS","Honeypot","SIEM","Network tap"],
    correctIndex:1, hard:false,
    explanation:"A honeypot is a deliberately vulnerable or enticing system deployed to detect, deflect, or study attacker techniques. Any interaction with it is suspicious since it has no legitimate production traffic."
  },
  {
    id:"d6-30", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"What is the MAIN difference between a vulnerability assessment and a penetration test?",
    choices:["Vulnerability assessments are more expensive","A vulnerability assessment identifies weaknesses; a penetration test attempts to exploit them","Penetration tests only scan for open ports","Vulnerability assessments require admin credentials; penetration tests do not"],
    correctIndex:1, hard:false,
    explanation:"A vulnerability assessment discovers and ranks weaknesses without exploiting them. A penetration test goes further by actively attempting to exploit vulnerabilities to demonstrate real-world impact."
  },
  {
    id:"d6-31", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which software testing technique tests an application's internal logic and code structure by examining source code?",
    choices:["Dynamic analysis (DAST)","Black-box testing","Static analysis (SAST)","Fuzzing"],
    correctIndex:2, hard:false,
    explanation:"SAST analyzes source code, bytecode, or binaries without executing the application, enabling early detection of coding defects. DAST tests the running application without access to source code."
  },
  {
    id:"d6-32", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A red team conducts simulated attacks on an organization. A blue team defends. What is a purple team exercise?",
    choices:["A third team that observes without participating","Red and blue teams collaborating to share techniques and improve detection and response","A team that only tests physical security","A group that only tests social engineering techniques"],
    correctIndex:1, hard:false,
    explanation:"Purple teaming is a collaborative exercise where the red team shares attack techniques with the blue team in real time, enabling the blue team to tune detections and the red team to discover gaps."
  },
  {
    id:"d6-33", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"An application scan reports a vulnerability that does not actually exist in the production system. What is this called?",
    choices:["Zero-day vulnerability","False positive","False negative","True positive"],
    correctIndex:1, hard:false,
    explanation:"A false positive is a reported finding that does not represent an actual vulnerability. False negatives (missing real vulnerabilities) are more dangerous from a security perspective. All findings must be validated."
  },
  {
    id:"d6-34", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which standard provides a universal, open, and standardized scoring system for evaluating the severity of software vulnerabilities?",
    choices:["CVE","NVD","CVSS","CWE"],
    correctIndex:2, hard:false,
    explanation:"CVSS (Common Vulnerability Scoring System) provides a numerical severity score (0-10) for vulnerabilities. CVE names vulnerabilities; NVD hosts them; CWE classifies weakness types."
  },
  {
    id:"d6-35", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A security assessor reviews system configuration settings against a published hardening guide. What type of assessment is this?",
    choices:["Penetration test","Compliance-based configuration audit","Vulnerability scan","Code review"],
    correctIndex:1, hard:false,
    explanation:"A configuration audit compares system settings against a hardening benchmark (CIS Benchmarks, STIG) to identify deviations from the baseline. It is non-intrusive and does not involve exploitation."
  },
  {
    id:"d6-36", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A web application returns 'User not found' or 'Incorrect password' as separate error messages. What vulnerability does this expose?",
    choices:["SQL injection","Username enumeration","CSRF","Buffer overflow"],
    correctIndex:1, hard:false,
    explanation:"Differentiating between invalid username and invalid password allows attackers to enumerate valid usernames. Applications should return a generic 'Invalid credentials' error regardless of which field is incorrect."
  },
  {
    id:"d6-37", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which type of testing verifies that a previously fixed vulnerability has not been reintroduced in later code changes?",
    choices:["Unit testing","Integration testing","Regression testing","Acceptance testing"],
    correctIndex:2, hard:false,
    explanation:"Regression testing re-tests previously fixed defects to confirm they have not been reintroduced and that new changes have not broken existing functionality."
  },
  {
    id:"d6-38", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which OWASP Top 10 category refers to broken or misconfigured authentication mechanisms that allow attackers to compromise passwords or session tokens?",
    choices:["Injection","Security Misconfiguration","Identification and Authentication Failures","Insecure Design"],
    correctIndex:2, hard:false,
    explanation:"'Identification and Authentication Failures' (formerly Broken Authentication) covers weaknesses in authentication including credential stuffing, weak passwords, and insecure session management."
  },
  {
    id:"d6-39", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A SOC 2 Type II audit evaluates controls over a six-month period. What does this specifically verify?",
    choices:["Controls are designed appropriately at a point in time","Controls were designed and operated effectively over the audit period","The organization is compliant with GDPR","Only encryption and key management controls"],
    correctIndex:1, hard:true,
    explanation:"SOC 2 Type I assesses control design at a point in time. Type II assesses both design AND operating effectiveness over an extended period (typically 6-12 months), providing greater assurance to service customers."
  },
  {
    id:"d6-40", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"What is the purpose of log review in security assessment?",
    choices:["Encrypting log data for compliance","Identifying anomalies, security events, and indicators of compromise in recorded system activity","Deleting old log files to free up storage","Distributing logs to all employees for transparency"],
    correctIndex:1, hard:false,
    explanation:"Log review involves analyzing recorded system, network, and application activity to detect unauthorized access, anomalous behavior, policy violations, and indicators of compromise."
  },
  {
    id:"d6-41", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A tester discovers a CSRF vulnerability in a banking application. Which control BEST mitigates CSRF?",
    choices:["Using HTTPS instead of HTTP","Implementing anti-CSRF tokens in forms","Enabling HttpOnly cookie flag","Requiring multi-factor authentication"],
    correctIndex:1, hard:false,
    explanation:"Anti-CSRF tokens are unique, unpredictable values embedded in forms. The server validates the token on submission. Since an attacker cannot read the token from another origin (due to SOP), forged cross-site requests fail."
  },
  {
    id:"d6-42", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which of the following is the MOST important consideration before beginning a penetration test on a production system?",
    choices:["Selecting the right automated scanning tools","Obtaining written authorization and defining scope","Training the security team on attack techniques","Ensuring backup systems are available"],
    correctIndex:1, hard:false,
    explanation:"Written authorization (rules of engagement) is essential before any penetration test. Testing without authorization is illegal regardless of intent. The scope defines what systems are in/out and what techniques are permitted."
  },
  {
    id:"d6-43", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"An attacker calls employees pretending to be IT support and tricks them into revealing their passwords. Which assessment type tests susceptibility to this?",
    choices:["Network vulnerability scan","Physical penetration test","Social engineering assessment (vishing)","Red team with only technical attack vectors"],
    correctIndex:2, hard:false,
    explanation:"Vishing (voice phishing) is a social engineering technique conducted by phone. Testing susceptibility to vishing requires a targeted social engineering assessment, not purely technical security testing."
  },
  {
    id:"d6-44", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A scanner discovers 500 vulnerabilities. The security team uses CVSS scores and asset criticality to prioritize remediation. What is this process called?",
    choices:["Threat intelligence enrichment","Risk-based vulnerability prioritization","Zero-day patching","Patch management"],
    correctIndex:1, hard:false,
    explanation:"Risk-based vulnerability prioritization combines severity (CVSS), exploitability in the wild (e.g., CISA KEV), and asset criticality to focus remediation effort where risk reduction is greatest."
  },
  {
    id:"d6-45", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which type of security assessment focuses specifically on the risk of data breaches and regulatory violations from inadequate privacy controls?",
    choices:["Privacy impact assessment (PIA)","Penetration test","Threat and risk assessment","Social engineering assessment"],
    correctIndex:0, hard:false,
    explanation:"A Privacy Impact Assessment (PIA) evaluates how personal data is collected, used, stored, and shared, identifying privacy risks. It is often required by regulation (GDPR, HIPAA) for new systems processing personal data."
  },
  {
    id:"d6-46", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A security team implements automated checks that run every hour against live systems to verify control effectiveness. What is this practice called?",
    choices:["Annual risk assessment","Continuous control monitoring","Quarterly penetration testing","On-demand vulnerability scanning"],
    correctIndex:1, hard:false,
    explanation:"Continuous control monitoring (CCM) uses automation to continuously verify the operational effectiveness of security controls in production environments, enabling near-real-time detection of control failures or drift."
  },
  {
    id:"d6-47", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A security assessment reveals that an application returns stack traces and database connection strings in error messages. What type of finding is this?",
    choices:["Buffer overflow vulnerability","Information leakage","SQL injection","Cross-site request forgery"],
    correctIndex:1, hard:false,
    explanation:"Detailed error messages revealing internal architecture, technology stack, and configuration details enable attacker reconnaissance. Production systems should display generic error messages while logging details server-side."
  },
  {
    id:"d6-48", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which metric is MOST useful when evaluating the effectiveness of a patch management program?",
    choices:["Number of patches released by vendors","Mean time to remediate (MTTR) critical vulnerabilities","Number of vulnerability scans completed","Percentage of systems with antivirus installed"],
    correctIndex:1, hard:true,
    explanation:"MTTR for critical vulnerabilities measures how quickly the organization responds to and resolves high-severity risks. It directly reflects the program's effectiveness in reducing the window of exposure."
  },
  {
    id:"d6-49", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"An assessor wants to test how much damage can be caused from an account with standard user privileges. Which approach is being used?",
    choices:["External black-box test","Privilege escalation testing from a compromised standard account","Social engineering assessment","Physical penetration test"],
    correctIndex:1, hard:false,
    explanation:"Testing from a standard user account simulates an insider threat or a scenario where an attacker has gained initial access, evaluating least privilege enforcement and privilege escalation paths."
  },
  {
    id:"d6-50", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"During continuous monitoring, which source of data is MOST valuable for detecting lateral movement after an initial compromise?",
    choices:["Patch compliance reports","Network flow (NetFlow/IPFIX) data and EDR telemetry","Monthly vulnerability scans","Annual risk assessments"],
    correctIndex:1, hard:true,
    explanation:"Network flow data shows connections between internal hosts, and EDR telemetry shows process execution and file activity. These are ideal for detecting lateral movement patterns that point-in-time scans miss."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 7 – Security Operations  (d7-26 … d7-50)
  // ─────────────────────────────────────────────────────────────
  {
    id:"d7-26", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which incident response phase involves containing the attack, eradicating the threat, and recovering affected systems?",
    choices:["Preparation","Detection and analysis","Containment, eradication, and recovery","Post-incident activity"],
    correctIndex:2, hard:false,
    explanation:"Per NIST SP 800-61, the third IR phase is containment, eradication, and recovery: limiting spread, removing malware, and restoring normal operations. Post-incident activity follows to document lessons learned."
  },
  {
    id:"d7-27", domain:"security_operations", domainLabel:"Security Operations",
    text:"A forensic investigator creates a bit-for-bit copy of a hard drive before analysis. What is this copy called?",
    choices:["Logical backup","Forensic image (bit-stream copy)","RAID mirror","Full backup"],
    correctIndex:1, hard:false,
    explanation:"A forensic image captures every bit of the drive including deleted files and unallocated space. Hashing the original and image (MD5/SHA-256) verifies integrity. Analysis is performed on the image, never the original."
  },
  {
    id:"d7-28", domain:"security_operations", domainLabel:"Security Operations",
    text:"During an investigation, digital evidence must be preserved in a manner that can withstand legal scrutiny. What practice ensures this?",
    choices:["Storing evidence on a shared network drive","Maintaining a documented chain of custody","Encrypting evidence with an unknown key","Analyzing the original media directly"],
    correctIndex:1, hard:false,
    explanation:"Chain of custody documents who handled evidence, when, and what actions were taken, proving evidence has not been tampered with or contaminated, which is essential for admissibility in legal proceedings."
  },
  {
    id:"d7-29", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which backup type only copies data that has changed since the LAST FULL backup, requiring only two sets to restore (full + latest)?",
    choices:["Incremental backup","Differential backup","Mirror backup","Continuous data protection"],
    correctIndex:1, hard:false,
    explanation:"Differential backups capture all changes since the last full backup. Restore = full + latest differential (2 tapes). Incremental captures changes since the last backup of any type; restore = full + all incrementals in sequence."
  },
  {
    id:"d7-30", domain:"security_operations", domainLabel:"Security Operations",
    text:"An administrator applies security patches to test systems before deploying to production. What process does this describe?",
    choices:["Change management","Patch testing within a structured patch management process","Continuous monitoring","Configuration baseline"],
    correctIndex:1, hard:false,
    explanation:"Patch management includes assessment, testing in a non-production environment, approval, controlled deployment, and verification. Testing before production reduces the risk of service disruption from incompatible patches."
  },
  {
    id:"d7-31", domain:"security_operations", domainLabel:"Security Operations",
    text:"A SIEM system correlates log events from multiple sources and generates an alert for a brute-force attack pattern. What SIEM capability is being used?",
    choices:["Log archival","Event correlation with rule-based detection","Real-time encryption","Network packet capture"],
    correctIndex:1, hard:false,
    explanation:"SIEM event correlation aggregates log data from firewalls, IDS, AD, and endpoints, applying rules and analytics to detect patterns (such as multiple failed logins within a time window) that indicate attacks."
  },
  {
    id:"d7-32", domain:"security_operations", domainLabel:"Security Operations",
    text:"During a malware infection, a security team isolates affected systems from the network but keeps them powered on. What is the purpose of this action?",
    choices:["Eradication","Containment to preserve evidence and prevent further spread","Recovery","Reporting to management"],
    correctIndex:1, hard:false,
    explanation:"Isolation during containment prevents malware from spreading while preserving volatile memory (RAM) evidence. Powering down destroys volatile evidence; isolation protects other systems without losing forensic data."
  },
  {
    id:"d7-33", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which type of disaster recovery site has all hardware, software, and data pre-configured and can take over operations within minutes?",
    choices:["Cold site","Warm site","Hot site","Mobile site"],
    correctIndex:2, hard:false,
    explanation:"A hot site is a fully operational duplicate facility with current data replication. RTO is minutes. A warm site has hardware but needs software/data restoration (hours). A cold site has only the facility (days to weeks)."
  },
  {
    id:"d7-34", domain:"security_operations", domainLabel:"Security Operations",
    text:"A security analyst uses threat intelligence feeds to proactively search for evidence of compromise within the network before an alert is triggered. What is this activity called?",
    choices:["Incident response","Threat hunting","Vulnerability scanning","Red teaming"],
    correctIndex:1, hard:false,
    explanation:"Threat hunting is a proactive analyst-led process of searching for threats that have evaded automated detection. Unlike reactive incident response, it assumes compromise has occurred and looks for evidence."
  },
  {
    id:"d7-35", domain:"security_operations", domainLabel:"Security Operations",
    text:"What does 'indicators of compromise (IoC)' refer to in security operations?",
    choices:["Security metrics used to measure SOC performance","Artifacts or evidence in a system indicating that a breach has occurred or is occurring","Alerts generated by firewall rule violations","Vulnerability scanner output files"],
    correctIndex:1, hard:false,
    explanation:"IoCs are observable artifacts such as malicious IP addresses, file hashes, registry keys, and domain names, that indicate a system has been compromised and are used in threat intelligence and SIEM rules."
  },
  {
    id:"d7-36", domain:"security_operations", domainLabel:"Security Operations",
    text:"A company stores backup media off-site. What security risk does this PRIMARILY introduce?",
    choices:["Data integrity risk from media degradation","Physical security and data exposure risk if the media is lost or stolen during transit","Increased recovery time due to off-site distance","Incompatibility with current restore software"],
    correctIndex:1, hard:false,
    explanation:"Off-site storage reduces the risk of losing backups in the same disaster as production, but introduces risks of media theft during transport. Encrypting backup media mitigates the exposure risk."
  },
  {
    id:"d7-37", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which of the following BEST describes the purpose of configuration management in security operations?",
    choices:["Managing user access rights","Maintaining documentation of known-good system configurations and detecting unauthorized changes","Scheduling system maintenance windows","Automating patch deployment"],
    correctIndex:1, hard:false,
    explanation:"Configuration management establishes baselines and tracks changes to system configurations, enabling detection of unauthorized modifications and ensuring systems remain in a known secure state."
  },
  {
    id:"d7-38", domain:"security_operations", domainLabel:"Security Operations",
    text:"An organization discovers that a vendor's equipment has reached end-of-life (EOL) and no security patches will be released. What is the BEST risk response?",
    choices:["Accept the risk with no additional controls","Continue using the equipment until it fails","Implement compensating controls and plan for replacement","Immediately shut down the EOL system"],
    correctIndex:2, hard:false,
    explanation:"EOL systems cannot receive patches, so compensating controls (network isolation, WAF, enhanced monitoring) reduce risk while a replacement is planned and procured."
  },
  {
    id:"d7-39", domain:"security_operations", domainLabel:"Security Operations",
    text:"During a forensic investigation, the analyst finds that system logs were cleared on the day of the suspected breach. What should the analyst do NEXT?",
    choices:["Abandon the investigation since logs are unavailable","Look for logs from centralized SIEM or other network devices","Restore the system from backup immediately","Report the incident as unresolvable"],
    correctIndex:1, hard:false,
    explanation:"Attackers often clear local logs. A robust logging strategy centralizes logs to a SIEM or syslog server. Network flow data, firewall logs, and DNS logs may also have relevant records that survive the tampering."
  },
  {
    id:"d7-40", domain:"security_operations", domainLabel:"Security Operations",
    text:"What type of malware encrypts files on the victim's system and demands payment for the decryption key?",
    choices:["Trojan horse","Spyware","Ransomware","Rootkit"],
    correctIndex:2, hard:false,
    explanation:"Ransomware encrypts files or locks systems and demands a ransom. Mitigations include offline backups, network segmentation, endpoint detection, email filtering, and user awareness training."
  },
  {
    id:"d7-41", domain:"security_operations", domainLabel:"Security Operations",
    text:"An organization implements a system that automatically quarantines endpoints that fail health checks when they attempt to connect to the network. What technology is this?",
    choices:["Network-based IPS","Network Access Control (NAC)","SIEM with SOAR automation","Endpoint Detection and Response (EDR)"],
    correctIndex:1, hard:false,
    explanation:"NAC enforces access policies based on endpoint health posture (AV status, OS patch level, encryption). Non-compliant devices are quarantined to a remediation VLAN until they meet policy requirements."
  },
  {
    id:"d7-42", domain:"security_operations", domainLabel:"Security Operations",
    text:"What is the PRIMARY purpose of a Security Operations Center (SOC)?",
    choices:["Managing IT infrastructure upgrades","Providing 24/7 monitoring, detection, analysis, and response to security events","Conducting annual security audits","Deploying new network equipment"],
    correctIndex:1, hard:false,
    explanation:"A SOC centralizes continuous monitoring and response capabilities, using SIEM, threat intelligence, and skilled analysts to detect and respond to security incidents in real time."
  },
  {
    id:"d7-43", domain:"security_operations", domainLabel:"Security Operations",
    text:"A company implements SOAR to automate its incident response workflow. What does SOAR primarily provide?",
    choices:["Network traffic encryption","Automated orchestration of security tools and workflows to accelerate incident response","Manual log review automation","Physical security monitoring integration"],
    correctIndex:1, hard:false,
    explanation:"SOAR integrates security tools, automates repetitive tasks (alert triage, blocking IPs), and orchestrates complex playbooks, reducing mean time to respond (MTTR) to incidents."
  },
  {
    id:"d7-44", domain:"security_operations", domainLabel:"Security Operations",
    text:"During an incident, the security team must preserve volatile evidence before shutting down a system. What should be collected FIRST?",
    choices:["Hard drive image","CPU registers and running processes from RAM","Application log files","Network configuration files"],
    correctIndex:1, hard:true,
    explanation:"Volatile data (RAM contents, running processes, open network connections, cached credentials) is lost on shutdown. Per the order of volatility, RAM is captured first before non-volatile evidence like disk images."
  },
  {
    id:"d7-45", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which NIST incident response lifecycle step involves documenting lessons learned and improving procedures after an incident is resolved?",
    choices:["Preparation","Detection and analysis","Containment, eradication, and recovery","Post-incident activity (lessons learned)"],
    correctIndex:3, hard:false,
    explanation:"Post-incident activity is the final NIST IR phase. It includes producing an incident report, conducting a lessons-learned meeting, and updating playbooks and controls to prevent recurrence."
  },
  {
    id:"d7-46", domain:"security_operations", domainLabel:"Security Operations",
    text:"A rootkit is discovered on a compromised server that has modified the kernel to hide its processes. What is the MOST reliable recovery approach?",
    choices:["Run an antivirus scan and remove detected files","Patch the vulnerability exploited by the rootkit","Rebuild the system from trusted media and restore data from a clean backup","Use a live forensic boot disk to delete the rootkit files"],
    correctIndex:2, hard:true,
    explanation:"Kernel-level rootkits compromise the integrity of the OS and cannot be reliably removed with tools running on the infected OS (which the rootkit may subvert). A full rebuild from trusted media is the only reliable remediation."
  },
  {
    id:"d7-47", domain:"security_operations", domainLabel:"Security Operations",
    text:"An organization maintains a list of approved software that may run on endpoints and blocks all other executables. What security control is this?",
    choices:["Blacklisting","Application whitelisting (allowlisting)","Data execution prevention","Endpoint detection and response"],
    correctIndex:1, hard:false,
    explanation:"Application whitelisting (allowlisting) permits only explicitly approved software to execute, blocking all unauthorized applications including malware. Blacklisting blocks known-bad applications but allows everything else."
  },
  {
    id:"d7-48", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which characteristic BEST describes an advanced persistent threat (APT)?",
    choices:["Short-duration, noisy attacks aimed at maximum disruption","Long-term, stealthy operations by well-resourced threat actors targeting specific organizations","Automated mass exploitation of unpatched systems","Simple malware distributed via phishing campaigns"],
    correctIndex:1, hard:false,
    explanation:"APTs are sophisticated, prolonged campaigns by nation-states or organized groups. They use custom tools, maintain persistent access for months or years, and avoid detection while achieving strategic objectives."
  },
  {
    id:"d7-49", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which principle of forensic evidence collection requires that investigation activities should not alter the evidence being examined?",
    choices:["Best evidence rule","Chain of custody","Evidence integrity (non-modification principle)","Legal hold"],
    correctIndex:2, hard:false,
    explanation:"Forensic investigations must preserve evidence integrity. Write blockers prevent modification of storage media during imaging. Hashes verify that the image matches the original. Any modification could render evidence inadmissible."
  },
  {
    id:"d7-50", domain:"security_operations", domainLabel:"Security Operations",
    text:"An analyst notices a workstation sending outbound HTTPS traffic to an unusual IP at regular 60-second intervals during off-hours. What does this suggest?",
    choices:["Normal software update activity","Beaconing behavior consistent with C2 (command and control) communication","A legitimate scheduled backup","DNS cache poisoning"],
    correctIndex:1, hard:true,
    explanation:"Regular, timed outbound connections to unusual IPs (beaconing) are a hallmark of malware communicating with C2 infrastructure. Regular interval traffic outside business hours warrants investigation."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 8 – Software Development Security  (d8-26 … d8-50)
  // ─────────────────────────────────────────────────────────────
  {
    id:"d8-26", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"In the STRIDE threat model, what does the 'I' represent?",
    choices:["Injection","Information disclosure","Impersonation","Integrity violation"],
    correctIndex:1, hard:false,
    explanation:"STRIDE stands for Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege. 'I' represents Information Disclosure, unintended exposure of data to unauthorized parties."
  },
  {
    id:"d8-27", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A developer stores user passwords as salted SHA-256 hashes in the database. What is the purpose of the salt?",
    choices:["To encrypt the hash for additional protection","To make identical passwords produce different hashes, defeating precomputed rainbow table attacks","To increase the speed of password verification","To allow passwords to be decrypted if needed"],
    correctIndex:1, hard:false,
    explanation:"A salt is a random value appended to each password before hashing. It ensures identical passwords produce different hashes, preventing rainbow table attacks. Bcrypt and Argon2 are preferred for password storage."
  },
  {
    id:"d8-28", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"An attacker injects malicious SQL code into a web form field, bypassing authentication. What control BEST prevents SQL injection?",
    choices:["Input length limits only","Parameterized queries (prepared statements)","HTTPS encryption","Client-side input validation"],
    correctIndex:1, hard:false,
    explanation:"Parameterized queries (prepared statements) separate SQL code from user data, ensuring input is treated as data rather than executable code. Input validation is a defense-in-depth measure but not sufficient alone."
  },
  {
    id:"d8-29", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which SDLC model integrates security activities into each phase of development, from requirements through retirement?",
    choices:["Waterfall","Agile only","Microsoft Security Development Lifecycle (SDL)","Rapid Application Development (RAD)"],
    correctIndex:2, hard:false,
    explanation:"Microsoft's SDL integrates security practices (threat modeling, static analysis, fuzzing, penetration testing) into every SDLC phase. Similar approaches include NIST SSDF and BSIMM."
  },
  {
    id:"d8-30", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"An attacker injects malicious JavaScript into a website, which then executes in other users' browsers when they visit the page. What type of XSS is this?",
    choices:["Reflected (non-persistent) XSS","Stored (persistent) XSS","DOM-based XSS","Blind XSS"],
    correctIndex:1, hard:false,
    explanation:"Stored (persistent) XSS occurs when malicious script is saved on the server (in a database or comment field) and served to all subsequent visitors. Reflected XSS sends malicious input back in the immediate response."
  },
  {
    id:"d8-31", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A DevSecOps team integrates automated SAST and DAST tools into the CI/CD pipeline. At which stage should SAST run?",
    choices:["After deployment to production","During code commit/build (pre-deployment)","Only during annual security reviews","After integration testing completes"],
    correctIndex:1, hard:false,
    explanation:"SAST should run early (during code commit or build) to catch vulnerabilities before they reach later stages. Finding defects early ('shift left') is far cheaper than discovering them in production."
  },
  {
    id:"d8-32", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which software supply chain attack involves compromising a widely used open-source library to distribute malicious code to downstream consumers?",
    choices:["SQL injection","Dependency confusion (or poisoned package) attack","Man-in-the-middle","Privilege escalation"],
    correctIndex:1, hard:true,
    explanation:"Supply chain attacks target the software supply chain, poisoning open-source packages, build systems, or update mechanisms. Mitigations include SBOMs, dependency pinning, and integrity verification."
  },
  {
    id:"d8-33", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"An API returns all fields of a user object including sensitive internal fields, even though the client only needs two fields. What OWASP API vulnerability is this?",
    choices:["Broken Object Level Authorization","Excessive Data Exposure","Security Misconfiguration","Injection"],
    correctIndex:1, hard:true,
    explanation:"Excessive Data Exposure (OWASP API3) occurs when the API returns more data than necessary, relying on clients to filter it. Attackers can intercept responses to obtain sensitive data. APIs should return only the minimum required data."
  },
  {
    id:"d8-34", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which type of testing verifies that individual components of an application function correctly in isolation?",
    choices:["Integration testing","Unit testing","System testing","Regression testing"],
    correctIndex:1, hard:false,
    explanation:"Unit testing tests individual functions or modules in isolation from the rest of the system. Integration testing checks how components work together. System testing evaluates the complete application."
  },
  {
    id:"d8-35", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What is the purpose of a Software Bill of Materials (SBOM)?",
    choices:["A list of approved software vendors","A comprehensive inventory of all components, libraries, and their versions included in a software product","A document detailing the cost of software licenses","A record of all code changes made by developers"],
    correctIndex:1, hard:true,
    explanation:"An SBOM is a machine-readable inventory of all software components and their dependencies. It enables rapid identification of affected systems when a CVE affects a specific component, supporting supply chain risk management."
  },
  {
    id:"d8-36", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"An application uses XML input from users. An attacker includes a reference to an external entity that reads the server's /etc/passwd file. What vulnerability is being exploited?",
    choices:["XSS","SSRF","XXE (XML External Entity injection)","CSRF"],
    correctIndex:2, hard:true,
    explanation:"XXE injection occurs when an XML parser processes external entity declarations in user-supplied XML. Mitigations include disabling external entity processing in the XML parser and validating/sanitizing XML input."
  },
  {
    id:"d8-37", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What is the primary security goal of code signing in software distribution?",
    choices:["Encrypting source code to prevent reverse engineering","Verifying the authenticity and integrity of software to ensure it has not been tampered with since signing","Preventing users from copying software","Hiding the identity of the software developer"],
    correctIndex:1, hard:false,
    explanation:"Code signing uses a digital signature (developer's private key) on software packages. Users can verify the signature using the developer's public key, confirming the code is authentic and unmodified."
  },
  {
    id:"d8-38", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"In agile development, which practice involves reviewing code written by a teammate to identify defects and security issues?",
    choices:["Sprint retrospective","Pair programming / code review","Daily standup","Backlog grooming"],
    correctIndex:1, hard:false,
    explanation:"Code review (peer review) is a development practice where teammates examine each other's code for bugs, security issues, and standards compliance. It is one of the most effective defect detection methods."
  },
  {
    id:"d8-39", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which OWASP category describes the risk of using components (libraries, frameworks, APIs) with known vulnerabilities?",
    choices:["Security Misconfiguration","Vulnerable and Outdated Components","Insecure Deserialization","Software and Data Integrity Failures"],
    correctIndex:1, hard:false,
    explanation:"OWASP 'Vulnerable and Outdated Components' addresses the risk of using dependencies with known CVEs. Mitigations include software composition analysis (SCA), SBOM management, and keeping dependencies patched."
  },
  {
    id:"d8-40", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which secure coding practice prevents an application from trusting client-supplied data for authorization decisions?",
    choices:["Input length validation","Never trusting client-side controls; always enforcing authorization on the server side","Encrypting all cookies","Using HTTPS for all communications"],
    correctIndex:1, hard:false,
    explanation:"Client-side controls (hidden fields, cookies, JavaScript validation) can be bypassed by an attacker. Authorization decisions must always be enforced on the server side regardless of what the client claims or sends."
  },
  {
    id:"d8-41", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"An attacker exploits a deserialization vulnerability to execute arbitrary code on a server. Which OWASP category covers this?",
    choices:["Injection","Insecure Design","Software and Data Integrity Failures","Security Logging and Monitoring Failures"],
    correctIndex:2, hard:true,
    explanation:"OWASP 'Software and Data Integrity Failures' (formerly Insecure Deserialization) covers attacks where untrusted serialized objects are deserialized without integrity checking, enabling remote code execution."
  },
  {
    id:"d8-42", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A development team uses infrastructure-as-code (IaC). What security practice should be applied to IaC templates?",
    choices:["Storing IaC templates with no version control for simplicity","Scanning IaC templates for misconfigurations using automated tools before deployment","Running IaC templates with root/admin privileges always","Avoiding IaC in security-sensitive environments"],
    correctIndex:1, hard:false,
    explanation:"IaC security scanning (tools like Checkov, tfsec) identifies misconfigurations (open security groups, unencrypted storage) before infrastructure is deployed, shifting cloud security left in the pipeline."
  },
  {
    id:"d8-43", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which threat modeling approach categorizes threats using the acronym STRIDE and was originally developed by Microsoft?",
    choices:["PASTA","VAST","STRIDE-based threat modeling (Microsoft Threat Modeling Tool)","OCTAVE"],
    correctIndex:2, hard:false,
    explanation:"Microsoft developed STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege) as a threat classification framework and provides the Microsoft Threat Modeling Tool to apply it."
  },
  {
    id:"d8-44", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"An SSRF vulnerability allows an attacker to make the server send requests to internal cloud metadata endpoints. What cloud-specific risk does SSRF create?",
    choices:["Encrypting all outbound traffic","Leaking IAM instance credentials from the cloud metadata service (e.g., AWS 169.254.169.254)","Blocking all HTTP traffic from the application","Slowloris DoS against internal services"],
    correctIndex:1, hard:true,
    explanation:"In cloud environments, SSRF can reach the instance metadata service and steal temporary IAM credentials, enabling privilege escalation within the cloud account. IMDSv2 mitigates this on AWS."
  },
  {
    id:"d8-45", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which DevSecOps practice involves automatically testing security controls on every code commit using tools integrated into the build pipeline?",
    choices:["Annual penetration testing","Security chaos engineering","Automated security testing in CI/CD (shift-left security)","Manual code review only"],
    correctIndex:2, hard:false,
    explanation:"Shift-left security integrates SAST, SCA, secret scanning, and unit testing into the CI/CD pipeline so every commit is automatically evaluated for security issues, reducing the cost of remediation."
  },
  {
    id:"d8-46", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A developer commits an AWS access key and secret to a public GitHub repository by mistake. What is the MOST URGENT immediate action?",
    choices:["Delete the repository","Rotate and revoke the exposed credentials immediately","Notify the development team at the next sprint meeting","Add a .gitignore file to prevent future commits"],
    correctIndex:1, hard:false,
    explanation:"Exposed credentials in public repos can be harvested by automated scanners within seconds. Immediate revocation/rotation is critical to prevent unauthorized use. The repo history should also be cleaned, but credential revocation comes first."
  },
  {
    id:"d8-47", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which type of application security test evaluates a running application from the outside without access to source code, simulating an external attacker?",
    choices:["SAST (Static Application Security Testing)","DAST (Dynamic Application Security Testing)","Code review","SCA (Software Composition Analysis)"],
    correctIndex:1, hard:false,
    explanation:"DAST tests a running application by sending attack payloads and observing responses, simulating external attacks without source code access. SAST analyzes code statically. SCA checks third-party component vulnerabilities."
  },
  {
    id:"d8-48", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A database administrator stores connection strings and API keys in environment variables rather than hardcoding them in source code. What security best practice does this follow?",
    choices:["Defense in depth","Secrets management / configuration externalization","Data minimization","Separation of duties"],
    correctIndex:1, hard:false,
    explanation:"Externalizing secrets from source code into environment variables, secret vaults, or configuration management systems prevents credentials from being accidentally committed to version control."
  },
  {
    id:"d8-49", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A developer uses an open-source library with a known critical CVE. No patch exists yet. What is the BEST immediate action?",
    choices:["Continue using the library since no patch is available","Identify a compensating control or alternative library and track remediation","Remove all open-source dependencies from the project","Disable the application until a patch is released"],
    correctIndex:1, hard:false,
    explanation:"When no patch exists, identify compensating controls (WAF rules, input validation, network isolation) or evaluate a patched alternative. Track the CVE and apply the official patch as soon as it is released."
  },
  {
    id:"d8-50", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which secure coding practice helps prevent directory traversal attacks in file upload or download features?",
    choices:["Using HTTPS for file transfers","Canonicalizing file paths and validating they resolve within an allowed base directory","Encrypting all uploaded files","Requiring multi-factor authentication for file access"],
    correctIndex:1, hard:true,
    explanation:"Directory traversal attacks use sequences like '../' to escape the intended directory. Canonicalizing paths (resolving to absolute paths) and checking they remain within the allowed base directory prevents this attack."
  }
,
// ─────────────────────────────────────────────────────────────
  // DOMAIN 1 – Security and Risk Management  (d1-51 … d1-75)
  // FOCUS: CISSP mindset – policy first, risk-based, management perspective
  // ─────────────────────────────────────────────────────────────
  {
    id:"d1-51", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A CISO wants to communicate the security program's value to the board of directors. Which approach is MOST effective?",
    choices:["Present a list of CVEs patched during the quarter","Describe security in terms of business risk reduction and return on investment","Show the number of security tools deployed","Detail the technical architecture of the security stack"],
    correctIndex:1, hard:false,
    explanation:"Boards think in terms of business risk and financial impact. The CISSP candidate must translate security value into business language. CVE counts and tool inventories are meaningless to non-technical executives without a risk/ROI context."
  },
  {
    id:"d1-52", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"An organization is deciding whether to implement a $200,000 security control to protect an asset valued at $100,000. What is the MOST appropriate recommendation?",
    choices:["Implement the control because security should always be maximized","Do not implement the control; its cost exceeds the asset value","Implement half the control to balance cost and security","Transfer the risk to a third party immediately"],
    correctIndex:1, hard:false,
    explanation:"Security controls must be cost-justified. Spending more than the asset's value (or the ALE) on a control violates basic risk management principles. A prudent security manager ensures control cost does not exceed risk exposure."
  },
  {
    id:"d1-53", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A new regulation requires your organization to protect a specific category of data. What should you do FIRST?",
    choices:["Deploy a DLP solution immediately","Conduct a gap analysis comparing current controls against the regulation's requirements","Purchase cyber liability insurance","Hire a compliance officer"],
    correctIndex:1, hard:false,
    explanation:"Before implementing controls or making purchases, you must understand the current state vs. required state. A gap analysis identifies what is missing, allowing targeted, cost-effective remediation."
  },
  {
    id:"d1-54", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Senior management has decided to accept a high residual risk against the security team's recommendation. What is the security team's MOST appropriate response?",
    choices:["Override management and implement additional controls","Document the decision and ensure management formally accepts the risk in writing","Resign because the organization is negligent","Implement controls anyway without informing management"],
    correctIndex:1, hard:true,
    explanation:"Risk acceptance is a valid management decision. The security team's role is to advise, document, and ensure management understands the risk and formally accepts it. Overriding management or acting unilaterally is inappropriate."
  },
  {
    id:"d1-55", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following BEST describes the relationship between a security policy and a security standard?",
    choices:["A policy is technical; a standard is managerial","A policy states high-level intent; a standard provides specific, mandatory implementation requirements","A standard is optional guidance; a policy is mandatory","They are interchangeable terms"],
    correctIndex:1, hard:false,
    explanation:"A policy defines high-level intent and direction (e.g., 'all data must be encrypted'). A standard provides specific mandatory requirements (e.g., 'AES-256 must be used'). Guidelines are optional recommendations; procedures are step-by-step instructions."
  },
  {
    id:"d1-56", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"During a security awareness training review, management asks why end users need security training. What is the MOST compelling argument?",
    choices:["Compliance regulations require it","Employees are the most common vector for successful cyberattacks and a human firewall reduces risk","Training reduces the need for technical security controls","It improves employee morale"],
    correctIndex:1, hard:false,
    explanation:"The strongest argument is risk-based: humans are the most exploited attack vector (phishing, social engineering). Awareness training directly reduces the likelihood of successful attacks, providing measurable risk reduction."
  },
  {
    id:"d1-57", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the four ISC2 Code of Ethics canons has the HIGHEST priority when the canons appear to conflict?",
    choices:["Provide diligent and competent service to principals","Act honorably, honestly, justly, responsibly, and legally","Protect society, the common good, and public trust","Advance and protect the profession"],
    correctIndex:2, hard:true,
    explanation:"The ISC2 Code of Ethics canons are prioritized in order. Canon 1 (protect society, the common good, and public trust) takes precedence over obligations to employers, clients, and the profession when there is a conflict."
  },
  {
    id:"d1-58", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A company discovers that a key supplier has poor security controls that could impact the confidentiality of shared data. What is the FIRST action the company should take?",
    choices:["Terminate the supplier contract immediately","Conduct a supplier risk assessment and determine the level of risk","Deploy technical controls between the two organizations","Report the supplier to regulators"],
    correctIndex:1, hard:false,
    explanation:"Before taking action, you must understand the actual risk. A supplier risk assessment quantifies the potential impact and informs appropriate responses ranging from requiring remediation to contract termination."
  },
  {
    id:"d1-59", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"An organization operates in multiple countries with different privacy laws. What is the MOST effective approach to managing global privacy compliance?",
    choices:["Comply with the strictest applicable regulation globally","Apply each country's regulations only to data subjects in that country","Implement the minimum controls required by each jurisdiction independently","Ignore jurisdictions with weak enforcement"],
    correctIndex:0, hard:true,
    explanation:"Complying with the strictest applicable regulation (often GDPR) typically satisfies the requirements of less strict jurisdictions as well. This harmonized approach is more efficient than maintaining multiple separate compliance programs."
  },
  {
    id:"d1-60", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"What is the PRIMARY purpose of a security steering committee?",
    choices:["To review and approve all security purchases","To provide cross-functional governance and alignment of the security program with business strategy","To conduct penetration tests and report findings","To manage daily security operations"],
    correctIndex:1, hard:false,
    explanation:"A security steering committee brings together business leaders and security leadership to ensure security initiatives align with business goals, prioritize investments, and provide executive oversight of the security program."
  },
  {
    id:"d1-61", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A penetration tester discovers a critical vulnerability but the remediation window has not yet opened per the patch management policy. What should the tester do?",
    choices:["Patch the system immediately without waiting","Report the finding as a critical risk requiring immediate exception handling outside the normal window","Log it in the normal patch queue and wait","Keep the finding confidential until the next patch cycle"],
    correctIndex:1, hard:false,
    explanation:"Critical vulnerabilities require escalation and exception handling. The normal patch management process may have an emergency/critical patch lane. The tester reports urgency so risk owners can make an informed, rapid decision."
  },
  {
    id:"d1-62", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"An organization is determining the order in which to recover systems after a disaster. Which factor should drive the prioritization?",
    choices:["System cost and replacement value","Business impact analysis (BIA) results showing critical business processes","Age of the hardware","IT team preference and technical familiarity"],
    correctIndex:1, hard:false,
    explanation:"The BIA identifies which business processes are most critical and their recovery priority. Recovery is driven by business criticality (RTO, MTD), not technical or cost factors."
  },
  {
    id:"d1-63", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"What is the MAIN difference between a threat and a threat actor?",
    choices:["They are synonymous terms","A threat is the potential for harm; a threat actor is the human or entity that may cause that harm","A threat actor is a technical vulnerability; a threat is an attack","Threat actors only refer to nation-state attackers"],
    correctIndex:1, hard:false,
    explanation:"A threat is any circumstance or event with the potential to harm an asset. A threat actor (threat agent) is the human or non-human entity capable of exploiting a vulnerability. Understanding both helps in threat modeling."
  },
  {
    id:"d1-64", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A security professional learns that their employer is breaking environmental laws but not information security laws. Under the ISC2 Code of Ethics, what should they do?",
    choices:["Ignore it since it is not a security matter","Report it internally and, if unresolved, consider reporting to appropriate authorities because the ethics code requires acting lawfully and in the public interest","Keep it confidential to protect the employer","Immediately go public with the information"],
    correctIndex:1, hard:true,
    explanation:"The ISC2 Code of Ethics requires acting honorably, honestly, justly, responsibly, and lawfully. Members must act in the public interest. Illegal activity by an employer requires reporting through appropriate channels, even if it is not strictly an information security matter."
  },
  {
    id:"d1-65", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A company is creating a supply chain risk management program. Which action is MOST critical to include?",
    choices:["Requiring all vendors to hold ISO 27001 certification","Assessing vendor security posture based on the risk they pose to the organization","Auditing every vendor annually regardless of risk level","Standardizing all vendor contracts to use the same security language"],
    correctIndex:1, hard:false,
    explanation:"Risk-based vendor assessment focuses effort where it is most needed. High-risk vendors (those with access to critical data or systems) require more rigorous assessment than low-risk vendors. Requiring certification from all vendors is often impractical."
  },
  {
    id:"d1-66", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"During a tabletop exercise, participants realize their disaster recovery plan does not account for simultaneous failures of both primary and secondary data centers. What type of risk is this?",
    choices:["Residual risk","Inherent risk","Correlation risk (or concentration risk)","Control risk"],
    correctIndex:2, hard:true,
    explanation:"Correlation (concentration) risk occurs when multiple controls or sites fail simultaneously due to a single common event (e.g., regional earthquake, power grid failure, shared cloud provider outage). Geographically dispersed, independent sites mitigate this."
  },
  {
    id:"d1-67", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"What is the PRIMARY reason organizations conduct security audits?",
    choices:["To satisfy vendor requirements","To provide independent, objective assurance that security controls are operating effectively","To replace penetration testing","To train the security team on new technologies"],
    correctIndex:1, hard:false,
    explanation:"Security audits provide independent verification that controls are in place and working as intended. They satisfy regulatory requirements and give management objective assurance about the security posture."
  },
  {
    id:"d1-68", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A security manager is choosing between implementing two controls. Control A costs $50,000 and reduces risk by $200,000. Control B costs $150,000 and reduces risk by $300,000. Which should they recommend?",
    choices:["Control B because it reduces more total risk","Control A because it has a better return on security investment (ROSI)","Neither control should be implemented","Control B because it is more comprehensive"],
    correctIndex:1, hard:true,
    explanation:"Control A provides $150,000 net risk reduction at $50,000 cost (ROSI = 300%). Control B provides $150,000 net risk reduction at $150,000 cost (ROSI = 100%). Control A is the better investment per dollar spent."
  },
  {
    id:"d1-69", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following is the BEST description of a security baseline?",
    choices:["The minimum set of security controls an organization must implement","The maximum set of security controls technically possible","A list of all known vulnerabilities in the environment","The current state of all security incidents"],
    correctIndex:0, hard:false,
    explanation:"A security baseline defines the minimum acceptable security configuration for a system or environment. Systems must meet or exceed the baseline to be considered appropriately secured."
  },
  {
    id:"d1-70", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"An organization's security team is overwhelmed with work. The CISO must make a case for additional headcount. What type of data BEST supports this request to the CFO?",
    choices:["Number of security incidents handled","Technical analysis of the threat landscape","Risk-quantified cost of understaffing vs. cost of additional staff","Certification levels of current team members"],
    correctIndex:2, hard:true,
    explanation:"CFOs respond to financial arguments. Quantifying the expected cost of incidents due to understaffing versus the salary cost of additional staff makes a clear business case in the CFO's language."
  },
  {
    id:"d1-71", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which threat intelligence category describes indicators such as specific IP addresses, domains, and file hashes of known malware?",
    choices:["Strategic threat intelligence","Operational threat intelligence","Tactical threat intelligence","Technical threat intelligence"],
    correctIndex:3, hard:true,
    explanation:"Technical threat intelligence provides machine-readable IoCs (IP addresses, domains, hashes, URLs) used directly in security tools for detection and blocking. Tactical TI covers TTPs; operational TI covers campaigns; strategic TI covers high-level trends for executives."
  },
  {
    id:"d1-72", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A company wants to use a framework to identify security controls for a new cloud environment. Which framework is MOST appropriate for cloud-specific control guidance?",
    choices:["NIST SP 800-53","ISO 27001","Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM)","COBIT 2019"],
    correctIndex:2, hard:false,
    explanation:"The CSA Cloud Controls Matrix provides a cloud-specific control framework organized across 17 domains aligned with cloud deployment and service models. While NIST and ISO provide general control frameworks, CSA CCM is specifically designed for cloud environments."
  },
  {
    id:"d1-73", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"An employee reports a potential security violation by a manager. What must the organization do to protect the reporting employee?",
    choices:["Transfer the reporting employee to a different department","Ensure a whistleblower protection policy and non-retaliation provisions are in place and followed","Keep the report confidential and take no visible action","Have the employee sign a non-disclosure agreement"],
    correctIndex:1, hard:false,
    explanation:"Whistleblower protections encourage reporting of violations without fear of retaliation. Organizations must have formal non-retaliation policies and actually enforce them to maintain a security culture."
  },
  {
    id:"d1-74", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"Which of the following BEST represents the 'tone at the top' concept in security governance?",
    choices:["The CISO's technical expertise","Visible senior executive commitment to and enforcement of security policies","The security team's budget allocation","The number of security certifications held by management"],
    correctIndex:1, hard:false,
    explanation:"'Tone at the top' means that security culture starts with senior leadership visibly championing, funding, and enforcing security programs. When executives treat security seriously, employees follow their lead."
  },
  {
    id:"d1-75", domain:"security_and_risk_management", domainLabel:"Security and Risk Management",
    text:"A security team discovers that employees frequently bypass a security control because it is too disruptive. What is the MOST appropriate response?",
    choices:["Disciplinary action for all employees who bypassed the control","Lock down the system so the control cannot be bypassed","Review the control to balance security with usability while maintaining acceptable risk","Remove the control entirely since it is not being followed"],
    correctIndex:2, hard:true,
    explanation:"Controls that are consistently bypassed have failed. The solution is to redesign the control to be less disruptive while still meeting its security objective. Security must balance protection with operational usability; unusable controls provide no value."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 2 – Asset Security  (d2-51 … d2-75)
  // FOCUS: data lifecycle, classification nuance, privacy, cloud data
  // ─────────────────────────────────────────────────────────────
  {
    id:"d2-51", domain:"asset_security", domainLabel:"Asset Security",
    text:"A data owner wants to downgrade a document from Confidential to Internal Use. Who must approve this reclassification?",
    choices:["The data custodian","The IT department","The data owner with appropriate documentation","Any senior employee with the need to know"],
    correctIndex:2, hard:false,
    explanation:"Only the data owner has the authority to reclassify data. They must document the justification for reclassification changes to maintain accountability and an audit trail."
  },
  {
    id:"d2-52", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which of the following BEST describes privacy by design?",
    choices:["Adding privacy controls to a system after it is built","Embedding privacy protections into the design and architecture of a system from the beginning","Encrypting all data before storing it","Obtaining user consent before data collection"],
    correctIndex:1, hard:false,
    explanation:"Privacy by design (PbD), now codified in GDPR Article 25, requires that data protection be considered and built into systems from the outset rather than added as an afterthought."
  },
  {
    id:"d2-53", domain:"asset_security", domainLabel:"Asset Security",
    text:"An organization wants to ensure data is not recoverable after disposal of storage media that contained Top Secret information. What is MOST appropriate for hard disk drives?",
    choices:["Standard formatting","Overwriting with seven passes using DoD 5220.22-M standard (or similar) followed by degaussing","A single zero-fill pass","Deletion of the file system index"],
    correctIndex:1, hard:true,
    explanation:"For highly sensitive magnetic media, multi-pass overwriting combined with degaussing ensures data cannot be recovered even with advanced forensic techniques. A single pass or standard formatting is insufficient for classified data."
  },
  {
    id:"d2-54", domain:"asset_security", domainLabel:"Asset Security",
    text:"A company stores customer credit card numbers. Under PCI DSS, which technique replaces the full card number with a non-sensitive substitute that retains no exploitable value but can be mapped back to the original in a secure vault?",
    choices:["Encryption","Tokenization","Hashing","Masking"],
    correctIndex:1, hard:false,
    explanation:"Tokenization replaces sensitive data with a non-sensitive token stored in a secure vault. Unlike encryption, tokens cannot be mathematically reversed without the vault. PCI DSS accepts tokenization as a method to reduce the scope of cardholder data environment."
  },
  {
    id:"d2-55", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which data state requires encryption MOST urgently to protect sensitive data transmitted between a mobile device and a corporate server?",
    choices:["Data at rest","Data in transit","Data in use","Data in archive"],
    correctIndex:1, hard:false,
    explanation:"Data in transit over public or untrusted networks is most exposed to interception. TLS/HTTPS protects data in transit. Data at rest encryption is also important but interception of transit data is a more immediate and common threat."
  },
  {
    id:"d2-56", domain:"asset_security", domainLabel:"Asset Security",
    text:"A cloud provider operates a multi-tenant environment. An organization stores sensitive data in this cloud. What is the PRIMARY data security concern unique to multi-tenancy?",
    choices:["Data availability during peak usage","Data commingling – the risk that data isolation fails and one tenant accesses another's data","Bandwidth limitations","Higher storage costs"],
    correctIndex:1, hard:true,
    explanation:"Multi-tenancy requires robust isolation controls. A misconfiguration or vulnerability could allow one customer to access another's data (data commingling). Hypervisor security, storage isolation, and access controls are critical mitigations."
  },
  {
    id:"d2-57", domain:"asset_security", domainLabel:"Asset Security",
    text:"What is data remanence?",
    choices:["Data that has been permanently deleted from all storage media","Residual data that remains on storage media after deletion or reformatting attempts","Data backed up to a remote location","Encrypted data that cannot be read without the key"],
    correctIndex:1, hard:false,
    explanation:"Data remanence refers to residual magnetic or electrical traces of data that remain on storage media after deletion, reformatting, or apparent erasure. Proper sanitization (degaussing, overwriting, destruction) is required to eliminate it."
  },
  {
    id:"d2-58", domain:"asset_security", domainLabel:"Asset Security",
    text:"Under GDPR, what must an organization do within 72 hours of becoming aware of a personal data breach?",
    choices:["Notify all affected data subjects directly","Notify the relevant supervisory authority unless the breach is unlikely to result in risk to individuals","Publish a public statement about the breach","Complete a full forensic investigation"],
    correctIndex:1, hard:true,
    explanation:"GDPR Article 33 requires notifying the supervisory authority within 72 hours of becoming aware of a personal data breach (unless risk to individuals is unlikely). Notification to data subjects (Article 34) is required when there is high risk to them."
  },
  {
    id:"d2-59", domain:"asset_security", domainLabel:"Asset Security",
    text:"An information system stores both classified and unclassified information. Which security concept addresses the risk that combining unclassified data items could reveal classified information?",
    choices:["Data aggregation","Data inference","Polyinstantiation","Data commingling"],
    correctIndex:0, hard:true,
    explanation:"Data aggregation is the risk that combining multiple pieces of individually non-sensitive or lower-classified data creates a picture that is sensitive or classified. Controls include need-to-know enforcement and MAC systems."
  },
  {
    id:"d2-60", domain:"asset_security", domainLabel:"Asset Security",
    text:"Who is responsible for ensuring that data backups are performed as required by policy?",
    choices:["Data owner","Data custodian","Data subject","Data processor"],
    correctIndex:1, hard:false,
    explanation:"The data custodian (typically IT operations) is responsible for implementing technical controls including backups, as directed by the data owner's retention and availability requirements."
  },
  {
    id:"d2-61", domain:"asset_security", domainLabel:"Asset Security",
    text:"A vendor is contractually required to delete all customer data upon contract termination. What should the customer require as evidence of this deletion?",
    choices:["An email from the vendor's sales team","A certificate of data destruction or sanitization documentation","The vendor's privacy policy","Assurance from the vendor's CEO"],
    correctIndex:1, hard:false,
    explanation:"A certificate of data destruction (or sanitization certificate) provides documented proof that data has been properly disposed of, protecting the customer from liability and providing an audit trail for compliance."
  },
  {
    id:"d2-62", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which privacy concept gives individuals the right to obtain a copy of their personal data held by an organization in a structured, machine-readable format?",
    choices:["Right to be forgotten","Right of access","Right to data portability","Right to restriction of processing"],
    correctIndex:2, hard:false,
    explanation:"Under GDPR Article 20, the right to data portability allows individuals to receive their personal data in a structured, commonly used, machine-readable format and transmit it to another controller."
  },
  {
    id:"d2-63", domain:"asset_security", domainLabel:"Asset Security",
    text:"A security team is classifying a new database that will store employee salary information. Which classification is MOST appropriate?",
    choices:["Public","Internal Use","Confidential (or Private/Restricted)","Top Secret"],
    correctIndex:2, hard:false,
    explanation:"Employee salary data is sensitive personal information that could harm individuals or the organization if disclosed. Confidential (or Private/Restricted in some schemes) is appropriate. Top Secret is a government/military classification typically not used for corporate salary data."
  },
  {
    id:"d2-64", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which of the following BEST describes the concept of data sovereignty?",
    choices:["The right of individuals to control their personal data","The requirement that data is subject to the laws and governance of the country in which it is stored","The ability of an organization to encrypt its own data","The right of a government to access any data within its borders"],
    correctIndex:1, hard:false,
    explanation:"Data sovereignty means that digital data is subject to the laws and regulations of the country or region where it physically resides. This is a key consideration for cloud storage decisions, especially for government and regulated industry data."
  },
  {
    id:"d2-65", domain:"asset_security", domainLabel:"Asset Security",
    text:"What is the PRIMARY security risk of using removable media (USB drives) in a corporate environment?",
    choices:["Increased hardware failure rates","Data exfiltration and introduction of malware","Slower data transfer speeds","Incompatibility with legacy systems"],
    correctIndex:1, hard:false,
    explanation:"Removable media presents a dual risk: it can be used to exfiltrate sensitive data (data loss) and to introduce malware into the corporate network. USB drive control policies, endpoint DLP, and drive encryption mitigate these risks."
  },
  {
    id:"d2-66", domain:"asset_security", domainLabel:"Asset Security",
    text:"A law firm retains client files for 7 years after case closure in compliance with state bar requirements. This is an example of:",
    choices:["Data minimization","Legal hold","Records retention compliance","Data aggregation"],
    correctIndex:2, hard:false,
    explanation:"Records retention compliance involves keeping records for legally mandated periods. This differs from a legal hold (preserving evidence for active litigation) and data minimization (collecting the least data possible)."
  },
  {
    id:"d2-67", domain:"asset_security", domainLabel:"Asset Security",
    text:"An organization transfers personal data from the EU to a US-based subsidiary for processing. Under GDPR, what mechanism enables this transfer after the Privacy Shield invalidation?",
    choices:["Adequacy decision for the US","Standard contractual clauses (SCCs)","Safe Harbor agreement","ITAR exemption"],
    correctIndex:1, hard:true,
    explanation:"After Privacy Shield was invalidated (Schrems II, 2020), Standard Contractual Clauses (SCCs) are the primary mechanism for EU-to-US data transfers within the same corporate group. Binding Corporate Rules (BCRs) also apply for intra-group transfers."
  },
  {
    id:"d2-68", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which asset management activity ensures that software licenses are used in compliance with vendor agreements and legal requirements?",
    choices:["Hardware inventory","Software license management (SAM)","Configuration management","Vulnerability scanning"],
    correctIndex:1, hard:false,
    explanation:"Software Asset Management (SAM) tracks software licenses, entitlements, and usage to ensure compliance with vendor agreements, avoid over/under-licensing, and reduce legal and financial risk."
  },
  {
    id:"d2-69", domain:"asset_security", domainLabel:"Asset Security",
    text:"A company uses full disk encryption on all laptops. An employee's laptop is lost. What risk has been MOST effectively mitigated?",
    choices:["Loss of availability of the data","Unauthorized access to the data if the laptop is found by a malicious party","Cost of replacing the hardware","Data corruption from physical damage"],
    correctIndex:1, hard:false,
    explanation:"Full disk encryption (FDE) protects data confidentiality if a device is lost or stolen. Without the encryption key, an attacker finding the laptop cannot read the stored data. It does not address availability, replacement cost, or physical damage."
  },
  {
    id:"d2-70", domain:"asset_security", domainLabel:"Asset Security",
    text:"Which concept describes the practice of combining multiple pieces of individually non-sensitive information to deduce a sensitive conclusion?",
    choices:["Data aggregation","Inference attack","Polyinstantiation","Commingling"],
    correctIndex:1, hard:true,
    explanation:"An inference attack deduces sensitive information from non-sensitive data by reasoning about relationships. For example, deducing that a person is HIV-positive from pharmacy records and insurance claims without accessing the actual diagnosis."
  },
  {
    id:"d2-71", domain:"asset_security", domainLabel:"Asset Security",
    text:"An organization is migrating data to a new cloud provider. What is the FIRST step in securing the data during this migration?",
    choices:["Begin the migration immediately to reduce the transition window","Classify the data and determine its sensitivity before selecting migration controls","Notify all users of the migration date","Disable access to the old system immediately"],
    correctIndex:1, hard:false,
    explanation:"Data classification determines what level of protection is needed. You must know what you are protecting before selecting encryption methods, access controls, and transfer mechanisms appropriate for the data's sensitivity."
  },
  {
    id:"d2-72", domain:"asset_security", domainLabel:"Asset Security",
    text:"Under the California Consumer Privacy Act (CCPA), which right allows consumers to prevent a business from selling their personal information?",
    choices:["Right to know","Right to delete","Right to opt-out of sale","Right to non-discrimination"],
    correctIndex:2, hard:false,
    explanation:"The CCPA right to opt-out of the sale of personal information allows California residents to direct businesses not to sell their personal information to third parties. Businesses must provide a clear 'Do Not Sell My Personal Information' link."
  },
  {
    id:"d2-73", domain:"asset_security", domainLabel:"Asset Security",
    text:"What is the PRIMARY purpose of a data flow diagram (DFD) in privacy and security analysis?",
    choices:["To document network topology","To visualize how personal data moves through systems, identifying collection, storage, processing, and sharing points","To plan backup schedules","To document user authentication flows"],
    correctIndex:1, hard:false,
    explanation:"A DFD maps data flows through an organization's systems, making it easier to identify where personal data is collected, processed, stored, and shared. This is essential for privacy impact assessments and data classification efforts."
  },
  {
    id:"d2-74", domain:"asset_security", domainLabel:"Asset Security",
    text:"A breach exposes a database of hashed (without salt) user passwords. Why is this still a significant risk?",
    choices:["Hashed passwords can be directly used for login","Rainbow tables or precomputed hash dictionaries can reverse unsalted hashes for common passwords","The breach only affects the availability of user data","Hashes are always irreversible so there is no risk"],
    correctIndex:1, hard:false,
    explanation:"Unsalted hashes of common passwords can be cracked using precomputed rainbow tables that map hash values back to passwords. Salting forces attackers to compute hashes for each password individually, vastly increasing cracking time."
  },
  {
    id:"d2-75", domain:"asset_security", domainLabel:"Asset Security",
    text:"An e-commerce company wants to protect stored credit card numbers while allowing customer service representatives to verify the last four digits. Which technique BEST achieves this?",
    choices:["Full disk encryption","Tokenization with masked display (showing only last 4 digits)","Hashing the card number","Storing the full number in a separate secure database"],
    correctIndex:1, hard:false,
    explanation:"Tokenization replaces the full card number with a token in the production database. The system can display only the last four digits for verification purposes while the full number is never stored in the main system."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 3 – Security Architecture & Engineering  (d3-51 … d3-75)
  // FOCUS: crypto depth, physical security, trusted systems, CISSP scenarios
  // ─────────────────────────────────────────────────────────────
  {
    id:"d3-51", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which cryptographic property ensures that a sender cannot later deny having sent a message?",
    choices:["Confidentiality","Integrity","Non-repudiation","Availability"],
    correctIndex:2, hard:false,
    explanation:"Non-repudiation uses digital signatures to bind a message to the sender's private key. Since only the sender possesses the private key, they cannot credibly deny having signed the message."
  },
  {
    id:"d3-52", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"A company encrypts data with AES-256, signs it with an RSA private key, and sends it to a recipient. What security properties are provided?",
    choices:["Confidentiality only","Confidentiality and integrity only","Confidentiality, integrity, and non-repudiation","Authentication only"],
    correctIndex:2, hard:true,
    explanation:"AES-256 encryption provides confidentiality. RSA digital signature provides integrity (tampering would invalidate the signature) and non-repudiation (only the sender's private key could have signed). Together these provide all three properties."
  },
  {
    id:"d3-53", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which type of cipher encrypts data one bit or byte at a time, making it suitable for streaming data like voice communications?",
    choices:["Block cipher","Stream cipher","Asymmetric cipher","Substitution cipher"],
    correctIndex:1, hard:false,
    explanation:"Stream ciphers encrypt data bit-by-bit or byte-by-byte using a keystream, making them well-suited for continuous data streams (voice, video). Block ciphers encrypt fixed-size chunks (64 or 128-bit blocks) and are used for files and stored data."
  },
  {
    id:"d3-54", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"What is the purpose of key escrow in public key infrastructure?",
    choices:["To share private keys between business partners","To allow authorized third parties to recover encrypted data if the key holder is unavailable","To backup public keys for certificate renewal","To enable multi-party signing of documents"],
    correctIndex:1, hard:false,
    explanation:"Key escrow stores copies of encryption keys with a trusted third party. This enables recovery of encrypted data if a key is lost or if legally authorized access is required (e.g., law enforcement with a court order)."
  },
  {
    id:"d3-55", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"An organization wants to verify the integrity of a large file transfer without encrypting the content. Which cryptographic mechanism is MOST appropriate?",
    choices:["Symmetric encryption","Asymmetric encryption","Hash function (message digest)","Digital certificate"],
    correctIndex:2, hard:false,
    explanation:"Hash functions (SHA-256, SHA-3) create a fixed-size digest of any input. The sender and receiver compute hashes independently; matching hashes confirm the file was not altered in transit without encrypting the content."
  },
  {
    id:"d3-56", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"In a public key infrastructure, which entity is the ROOT of trust that all other certificates ultimately chain back to?",
    choices:["Intermediate CA","Registration Authority (RA)","Root Certificate Authority (Root CA)","End-entity certificate"],
    correctIndex:2, hard:false,
    explanation:"The Root CA is at the top of the certificate hierarchy. Its self-signed certificate is implicitly trusted by browsers and operating systems. Intermediate CAs chain back to the Root CA, distributing the signing workload while isolating the Root CA offline."
  },
  {
    id:"d3-57", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which security concept describes separating a network into isolated segments with controls between them to limit the blast radius of a breach?",
    choices:["Defense in depth","Network segmentation (microsegmentation)","Zero trust architecture","Layered perimeter defense"],
    correctIndex:1, hard:false,
    explanation:"Network segmentation (and microsegmentation in cloud/SDN environments) divides networks into isolated zones. A breach in one zone is contained and cannot directly reach other zones, requiring the attacker to defeat additional controls."
  },
  {
    id:"d3-58", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"The Clark-Wilson integrity model enforces data integrity using which two mechanisms?",
    choices:["Security labels and clearance levels","Well-formed transactions and separation of duties (CDIs, UDIs, TPs, and IVPs)","Encryption and digital signatures","Mandatory and discretionary access controls"],
    correctIndex:1, hard:true,
    explanation:"Clark-Wilson uses Constrained Data Items (CDIs) protected by Transformation Procedures (TPs) and verified by Integrity Verification Procedures (IVPs). Access is via well-formed transactions and separation of duties, preventing unauthorized modification."
  },
  {
    id:"d3-59", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"An organization wants to ensure that a vendor's cryptographic module has been validated to FIPS 140-2 or 140-3 standards. What level provides the HIGHEST assurance?",
    choices:["Level 1","Level 2","Level 3","Level 4"],
    correctIndex:3, hard:true,
    explanation:"FIPS 140-2/140-3 Level 4 provides the highest security, requiring physical security mechanisms to detect and respond to tampering attempts, zeroizing keys when tampered. Level 1 only requires algorithm correctness without physical security."
  },
  {
    id:"d3-60", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which attack leverages mathematical weaknesses to find two inputs that produce the same hash output?",
    choices:["Preimage attack","Second preimage attack","Birthday attack (collision attack)","Length extension attack"],
    correctIndex:2, hard:true,
    explanation:"A birthday attack exploits the birthday paradox to find any two inputs with the same hash (collision). A preimage attack finds an input that hashes to a specific target. The birthday attack is typically easier, requiring approximately 2^(n/2) operations for an n-bit hash."
  },
  {
    id:"d3-61", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"In a zero trust architecture, what is the guiding principle regarding network location and implicit trust?",
    choices:["Systems inside the corporate network are trusted by default","No implicit trust is granted based on network location; every access request must be verified","VPN access automatically grants full internal network trust","Cloud workloads do not require the same trust verification as on-premises systems"],
    correctIndex:1, hard:false,
    explanation:"Zero trust ('never trust, always verify') eliminates implicit trust based on network location. Every user, device, and request must be continuously authenticated and authorized regardless of whether they are inside or outside the corporate network."
  },
  {
    id:"d3-62", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which physical security control uses two interlocking doors where the first must close before the second can open, preventing tailgating?",
    choices:["CCTV","Bollard","Mantrap (airlock)","Turnstile"],
    correctIndex:2, hard:false,
    explanation:"A mantrap (or airlock) uses two interlocking doors with a small holding area between them. Only one door can be open at a time, and often biometric or card authentication is required at each door, preventing tailgating or piggybacking."
  },
  {
    id:"d3-63", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"A system uses a 1024-bit RSA key. Why might a security architect recommend upgrading to 2048-bit?",
    choices:["2048-bit is faster to compute than 1024-bit","Advances in factoring attacks and computing power make 1024-bit RSA considered weak by modern standards","1024-bit RSA cannot be used with TLS","2048-bit keys use less memory"],
    correctIndex:1, hard:false,
    explanation:"RSA security depends on the difficulty of factoring large numbers. 1024-bit RSA is no longer considered safe as factoring techniques and computing power have advanced. NIST recommends at minimum 2048-bit RSA, with 3072 or 4096-bit for long-term security."
  },
  {
    id:"d3-64", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"What is the purpose of a Certificate Transparency (CT) log?",
    choices:["To store revoked certificates","To provide a publicly auditable, append-only record of all issued certificates, enabling detection of misissued certificates","To replace OCSP for certificate status checking","To store private keys in a trusted environment"],
    correctIndex:1, hard:true,
    explanation:"Certificate Transparency logs are cryptographically secured, append-only public logs of all issued TLS certificates. They allow domain owners and browser vendors to detect unauthorized or misissued certificates (e.g., issued by a compromised CA)."
  },
  {
    id:"d3-65", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which physical security control is MOST effective at preventing a vehicle from ramming into a building entrance?",
    choices:["CCTV cameras","Security guard at the entrance","Reinforced bollards or vehicle barriers","Perimeter fencing"],
    correctIndex:2, hard:false,
    explanation:"Reinforced bollards, concrete barriers, and vehicle impact protection (VBIED countermeasures) are specifically designed to stop vehicle ramming attacks. Guards and cameras are detective/deterrent but cannot physically stop a vehicle."
  },
  {
    id:"d3-66", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which key management principle requires that no single individual should have access to the complete cryptographic key, reducing insider threat?",
    choices:["Key rotation","Split knowledge (key splitting)","Key escrow","Key stretching"],
    correctIndex:1, hard:true,
    explanation:"Split knowledge divides a cryptographic key into two or more parts held by different people. Reconstructing the full key requires cooperation of all key holders, preventing any single individual from accessing encrypted data unilaterally."
  },
  {
    id:"d3-67", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"An attacker obtains the encrypted traffic of two parties communicating using a weak cipher and later decrypts historical sessions after obtaining the key. Which property was MISSING from the cipher?",
    choices:["Confidentiality","Non-repudiation","Perfect Forward Secrecy (PFS)","Data integrity"],
    correctIndex:2, hard:true,
    explanation:"Perfect Forward Secrecy (PFS) uses ephemeral key exchange (ECDHE, DHE) so that each session uses a unique key. If the long-term key is later compromised, previously recorded sessions cannot be decrypted. TLS 1.3 mandates PFS."
  },
  {
    id:"d3-68", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which access control approach grants access to specific objects based on a comparison of security labels assigned to both the subject and the object, typically used in government systems?",
    choices:["Discretionary Access Control (DAC)","Mandatory Access Control (MAC)","Role-Based Access Control (RBAC)","Attribute-Based Access Control (ABAC)"],
    correctIndex:1, hard:false,
    explanation:"MAC uses sensitivity labels (e.g., Top Secret, Secret, Confidential) assigned to both subjects (clearances) and objects (classifications). Access is granted when the subject's clearance meets or exceeds the object's classification and other need-to-know criteria."
  },
  {
    id:"d3-69", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"A cloud architect is designing a multi-region active-active deployment for a critical application. What security benefit does this architecture provide beyond availability?",
    choices:["Reduced encryption overhead","Geographic data diversity, reducing risk of total data loss and enabling business continuity against regional disasters","Lower compliance requirements since data is distributed","Automatic vulnerability patching across regions"],
    correctIndex:1, hard:false,
    explanation:"Active-active multi-region deployments provide both high availability and disaster resilience. They also support geographic data diversity, ensuring that a regional disaster (natural, political) cannot take the entire system offline."
  },
  {
    id:"d3-70", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"A malicious insider gradually increases their access privileges over time without authorization. Which preventive control BEST detects and stops this?",
    choices:["User awareness training","Periodic access reviews and privileged access management with automated drift detection","Network segmentation","Antivirus software"],
    correctIndex:1, hard:false,
    explanation:"Periodic access recertification (access reviews) and PAM tools with drift detection catch unauthorized privilege accumulation. Automated alerts when a user's privileges deviate from their role baseline help detect this insider threat early."
  },
  {
    id:"d3-71", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"What does the term 'cryptographic agility' mean in secure system design?",
    choices:["The ability to encrypt data faster than an attacker can crack it","Designing systems so that cryptographic algorithms can be easily swapped when vulnerabilities are discovered","Using multiple encryption keys simultaneously","Applying encryption at every layer of the OSI model"],
    correctIndex:1, hard:true,
    explanation:"Cryptographic agility means designing systems to be algorithm-independent so that a vulnerable algorithm (e.g., SHA-1, 3DES) can be replaced with a stronger one (SHA-256, AES) without major system rearchitecting. This is critical as algorithms are periodically deprecated."
  },
  {
    id:"d3-72", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"An electrical engineer notices that the server room's computer equipment emits electromagnetic signals that could allow an attacker nearby to reconstruct data being processed. What class of threat is this?",
    choices:["Acoustic eavesdropping","TEMPEST (van Eck phreaking)","RF jamming","Thermal imaging attack"],
    correctIndex:1, hard:true,
    explanation:"TEMPEST refers to the interception of compromising electromagnetic emanations from electronic equipment. Van Eck phreaking is the technique of remotely eavesdropping on electronic equipment via electromagnetic emissions. TEMPEST countermeasures include shielded rooms (Faraday cages) and emission control standards."
  },
  {
    id:"d3-73", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"Which property of a hash function ensures that it is computationally infeasible to determine the original input from its hash output?",
    choices:["Collision resistance","Preimage resistance (one-way function)","Avalanche effect","Fixed-length output"],
    correctIndex:1, hard:false,
    explanation:"Preimage resistance (one-way property) means that given a hash output H, it is computationally infeasible to find an input M such that hash(M) = H. This is essential for password storage and digital signature security."
  },
  {
    id:"d3-74", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"A system must store secret data so that it can be retrieved by legitimate users but appears to contain non-sensitive data to an attacker who gains access. Which technique supports this?",
    choices:["Encryption at rest","Steganography","Polyinstantiation","Data masking"],
    correctIndex:2, hard:true,
    explanation:"Polyinstantiation allows a database to have multiple records with the same key but different values for users at different classification levels. A low-clearance attacker sees a false (non-sensitive) record; a high-clearance user sees the real data."
  },
  {
    id:"d3-75", domain:"security_architecture_engineering", domainLabel:"Security Architecture and Engineering",
    text:"What is the security benefit of using a Hardware Security Module (HSM) for TLS certificate private key storage over software-only key storage?",
    choices:["HSMs are cheaper than software solutions","HSMs provide tamper-resistant key storage and cryptographic operations, preventing key extraction even by privileged users","HSMs eliminate the need for certificate renewal","HSMs automatically renew expired TLS certificates"],
    correctIndex:1, hard:false,
    explanation:"HSMs store private keys in tamper-resistant hardware where they cannot be extracted in plaintext. Cryptographic operations are performed within the HSM, so the key material never leaves the device, protecting against insider threats and OS-level attacks."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 4 – Communication & Network Security  (d4-51 … d4-75)
  // FOCUS: protocol attacks, firewall types, cloud network, secure comms
  // ─────────────────────────────────────────────────────────────
  {
    id:"d4-51", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An organization wants to prevent employees from using unauthorized cloud services. Which control is MOST effective?",
    choices:["User awareness training only","Cloud Access Security Broker (CASB) with proxy-mode inspection","Blocking all cloud storage domains at the firewall","Accepting the risk of shadow IT use"],
    correctIndex:1, hard:false,
    explanation:"A CASB provides visibility into and control over cloud service usage. In proxy mode it can inspect, allow, block, or conditionally permit cloud service traffic based on policies—detecting and controlling shadow IT while permitting authorized services."
  },
  {
    id:"d4-52", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which TCP/IP vulnerability allows an attacker to take over an established TCP session by injecting packets with predicted sequence numbers?",
    choices:["Ping of death","TCP session hijacking","SYN flood","UDP amplification"],
    correctIndex:1, hard:true,
    explanation:"TCP session hijacking exploits predictable sequence numbers. An attacker who can observe or guess the sequence number can inject data into an established session. Defenses include encryption (TLS) and random sequence number generation."
  },
  {
    id:"d4-53", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"A company implements an 'implicit deny all' rule at the end of its firewall ruleset. What is the effect of this rule?",
    choices:["It allows all traffic not explicitly denied by earlier rules","It blocks all traffic not explicitly permitted by earlier rules","It logs all traffic and permits it","It only applies to inbound traffic"],
    correctIndex:1, hard:false,
    explanation:"'Implicit deny all' (default deny, deny by default) blocks any traffic not explicitly permitted by preceding rules. This is a critical firewall security principle—unknown traffic is denied rather than allowed."
  },
  {
    id:"d4-54", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which protocol is used to securely exchange Internet Key Exchange (IKE) parameters and establish IPSec VPN tunnels?",
    choices:["SSL/TLS","IKE (Internet Key Exchange) using UDP port 500","HTTPS","L2TP"],
    correctIndex:1, hard:false,
    explanation:"IKE (defined in RFC 7296) operates over UDP port 500 (and 4500 for NAT traversal) to negotiate and establish security associations (SAs) for IPSec tunnels, performing authentication and key exchange."
  },
  {
    id:"d4-55", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An attacker sends traffic to a broadcast address with a spoofed source IP, causing all hosts to respond to the victim. What attack is this?",
    choices:["SYN flood","Smurf attack","Teardrop attack","Fraggle attack"],
    correctIndex:1, hard:false,
    explanation:"A Smurf attack sends ICMP echo requests to a broadcast address with the victim's IP spoofed as the source. All hosts on the network respond to the victim, overwhelming it. Fraggle attacks use UDP instead of ICMP."
  },
  {
    id:"d4-56", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"What is the primary security function of Spanning Tree Protocol (STP) in a switched network, and what attack can exploit it?",
    choices:["STP provides VLAN segregation; exploited by VLAN hopping","STP prevents loops by electing a root bridge; exploited by sending unauthorized BPDUs to manipulate topology","STP provides encryption for switch management; exploited by MitM","STP authenticates connected devices; exploited by MAC flooding"],
    correctIndex:1, hard:true,
    explanation:"STP prevents Layer 2 loops by electing a root bridge and blocking redundant paths. An attacker who sends BPDUs with superior bridge IDs can manipulate the STP topology (STP manipulation attack). BPDU Guard and Root Guard mitigate this."
  },
  {
    id:"d4-57", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"A security engineer needs to monitor all traffic entering and leaving a network segment without inline traffic disruption. What device placement is MOST appropriate?",
    choices:["Place an IPS inline between segments","Connect a passive IDS (or network tap) to a SPAN port or network tap","Install a proxy server on the segment","Deploy a stateful firewall between segments"],
    correctIndex:1, hard:false,
    explanation:"A passive IDS connected via a SPAN port or dedicated network tap receives a copy of all traffic without being inline—ensuring monitoring without affecting traffic flow or creating a single point of failure."
  },
  {
    id:"d4-58", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which protocol secures BGP route advertisements to prevent route hijacking by cryptographically validating the origin of IP prefixes?",
    choices:["DNSSEC","RPKI (Resource Public Key Infrastructure)","IPSec for BGP sessions","BFD (Bidirectional Forwarding Detection)"],
    correctIndex:1, hard:true,
    explanation:"RPKI (Resource Public Key Infrastructure) uses cryptographically signed Route Origin Authorizations (ROAs) to validate that an AS is authorized to announce specific IP prefixes, mitigating BGP route hijacking and prefix hijacking attacks."
  },
  {
    id:"d4-59", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which wireless security protocol flaw made WPA2-Personal networks vulnerable to offline dictionary attacks on captured 4-way handshakes?",
    choices:["KRACK vulnerability","PSK (Pre-Shared Key) handshake capture and offline brute-force","PMKID attack enabled by the 4-way handshake","WPS PIN brute-force"],
    correctIndex:1, hard:true,
    explanation:"WPA2-Personal's 4-way handshake can be captured without completing authentication. The PSK can then be tested offline through dictionary attacks against the captured handshake. WPA3 SAE prevents this by requiring real-time interaction for each guess."
  },
  {
    id:"d4-60", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"What is the purpose of a content delivery network (CDN) from a security perspective?",
    choices:["It replaces the need for a web application firewall","It absorbs and distributes DDoS traffic, caches content closer to users, and reduces origin server exposure","It provides end-to-end encryption for web traffic","It stores private keys for TLS certificates"],
    correctIndex:1, hard:false,
    explanation:"CDNs distribute traffic across global points of presence, absorbing DDoS attacks and reducing the load on origin servers. They also hide the origin server's IP, making targeted attacks harder, and provide edge caching and WAF capabilities."
  },
  {
    id:"d4-61", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An organization requires that all DNS queries from internal hosts be encrypted to prevent eavesdropping. Which protocol should they deploy?",
    choices:["DNSSEC","DNS over HTTPS (DoH) or DNS over TLS (DoT)","LDAP over SSL","SMTP with STARTTLS"],
    correctIndex:1, hard:false,
    explanation:"DNS over HTTPS (DoH, RFC 8484) and DNS over TLS (DoT, RFC 7858) encrypt DNS queries between clients and resolvers, preventing eavesdropping and tampering. DNSSEC authenticates DNS responses but does not encrypt the queries."
  },
  {
    id:"d4-62", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"A host on a network receives a gratuitous ARP reply claiming the default gateway's IP now maps to a new MAC address. What attack is most likely occurring?",
    choices:["DNS cache poisoning","ARP spoofing (poisoning) for man-in-the-middle attack","IP spoofing","DHCP starvation"],
    correctIndex:1, hard:false,
    explanation:"ARP spoofing sends unsolicited ARP replies associating the attacker's MAC with a legitimate IP (such as the default gateway). Hosts update their ARP cache, redirecting traffic through the attacker. Dynamic ARP Inspection (DAI) mitigates this."
  },
  {
    id:"d4-63", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which layer of the OSI model do proxy servers typically operate at, and what security benefit does this provide?",
    choices:["Layer 2; it inspects MAC addresses","Layer 3; it filters based on IP addresses","Layer 7 (Application); it can inspect and filter based on content, protocol behavior, and user identity","Layer 4; it tracks connection state"],
    correctIndex:2, hard:false,
    explanation:"Application-layer (Layer 7) proxies terminate and re-establish connections, fully inspecting application-layer content (URLs, headers, payloads). This enables granular control, content filtering, and protocol validation."
  },
  {
    id:"d4-64", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"A company needs to securely connect 50 remote branches to headquarters without managing client VPN software on each branch. What solution is MOST appropriate?",
    choices:["Individual SSL VPN clients on each branch","IPSec site-to-site VPN between each branch router and headquarters","SD-WAN with integrated IPSec encryption","Direct internet access at each branch with TLS only"],
    correctIndex:1, hard:false,
    explanation:"IPSec site-to-site VPNs establish encrypted tunnels between routers/firewalls at each location. All traffic from each branch is automatically secured without client software on individual machines—the router handles encryption."
  },
  {
    id:"d4-65", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"What is a DHCP starvation attack and which defense is MOST effective?",
    choices:["Flooding DNS servers with queries; defense is DNSSEC","Sending spoofed MAC addresses to exhaust the DHCP pool; defense is DHCP snooping with port security","Intercepting DHCP responses to redirect clients; defense is static IP assignment","Crashing the DHCP server; defense is server redundancy"],
    correctIndex:1, hard:true,
    explanation:"DHCP starvation floods a DHCP server with requests using spoofed MAC addresses, exhausting the IP pool and potentially enabling a rogue DHCP server attack. DHCP snooping validates DHCP messages and port security limits the number of MAC addresses per port."
  },
  {
    id:"d4-66", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"When implementing email security, which combination of technologies BEST prevents domain spoofing?",
    choices:["HTTPS and TLS","SPF, DKIM, and DMARC configured together","End-to-end PGP encryption","S/MIME certificates on all mailboxes"],
    correctIndex:1, hard:false,
    explanation:"SPF (authorized sending IPs), DKIM (message signing), and DMARC (policy enforcement and reporting) work together to prevent email domain spoofing. DMARC aligns and enforces SPF and DKIM, instructing receivers to quarantine or reject unauthorized email."
  },
  {
    id:"d4-67", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which network architecture principle places security enforcement as close as possible to workloads regardless of their location (data center, cloud, endpoint)?",
    choices:["Perimeter-based security","Defense in depth with static firewalls","Zero trust with microsegmentation","Air-gapping sensitive systems"],
    correctIndex:2, hard:false,
    explanation:"Zero trust with microsegmentation applies identity-based access controls and security policy enforcement directly at the workload level, making location irrelevant. Security follows the workload whether on-premises, cloud, or remote."
  },
  {
    id:"d4-68", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An organization wants to prevent data exfiltration over port 443 (HTTPS) to unknown cloud services. Which capability is MOST necessary?",
    choices:["Blocking port 443 entirely","TLS inspection (SSL decryption) at the firewall or proxy","Monitoring only port 80 traffic","Restricting DNS to internal servers only"],
    correctIndex:1, hard:true,
    explanation:"Since most exfiltration uses encrypted HTTPS, TLS inspection (break-and-inspect) decrypts outbound HTTPS traffic at a proxy or NGFW, enabling content inspection, DLP scanning, and threat detection before re-encrypting and forwarding."
  },
  {
    id:"d4-69", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"What does MPLS (Multiprotocol Label Switching) provide from a security perspective in an enterprise WAN?",
    choices:["End-to-end encryption of all WAN traffic","Traffic isolation from other customers on the provider network (though not encryption)","DDoS mitigation at the provider level","Automatic failover between internet circuits"],
    correctIndex:1, hard:true,
    explanation:"MPLS provides traffic isolation by forwarding packets based on labels rather than IP routing, creating virtual private networks at the provider level. However, MPLS does NOT provide encryption—traffic is isolated but not encrypted. Additional encryption (IPSec) is needed for confidentiality."
  },
  {
    id:"d4-70", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"A developer creates an application that sends sensitive data as URL query parameters over HTTPS. What security concern does this introduce despite using HTTPS?",
    choices:["HTTPS does not encrypt URL parameters","URL parameters may be logged in web server logs, proxy logs, browser history, and referrer headers, exposing sensitive data","URL length limits prevent transmitting sensitive data this way","HTTPS headers are not encrypted, only the body"],
    correctIndex:1, hard:true,
    explanation:"Even over HTTPS, URL query parameters are logged in web server access logs, proxy logs, browser history, and may leak via the HTTP Referer header. Sensitive data (tokens, PII) should be transmitted in POST body or HTTP headers, not URL parameters."
  },
  {
    id:"d4-71", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"Which protocol translates human-readable domain names to IP addresses and operates on UDP port 53 by default?",
    choices:["DHCP","ARP","DNS","NTP"],
    correctIndex:2, hard:false,
    explanation:"DNS (Domain Name System) resolves domain names (e.g., www.example.com) to IP addresses. It primarily uses UDP port 53 for queries and TCP port 53 for zone transfers and large responses."
  },
  {
    id:"d4-72", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"An IPS is blocking legitimate traffic because its signature database incorrectly identifies it as an attack. What type of error is this?",
    choices:["False negative","True positive","False positive","True negative"],
    correctIndex:2, hard:false,
    explanation:"A false positive is when a security tool incorrectly identifies legitimate traffic or activity as malicious. False negatives miss actual attacks. False positives can disrupt operations and cause alert fatigue, leading analysts to ignore real threats."
  },
  {
    id:"d4-73", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"What is the security advantage of using TLS 1.3 over TLS 1.2?",
    choices:["TLS 1.3 supports legacy cipher suites for backward compatibility","TLS 1.3 mandates Perfect Forward Secrecy, removes weak ciphers, and reduces handshake latency","TLS 1.3 uses symmetric encryption only","TLS 1.3 is optional and not widely supported"],
    correctIndex:1, hard:false,
    explanation:"TLS 1.3 removes insecure algorithms (RSA key exchange, RC4, DES, 3DES, MD5, SHA-1), mandates PFS (ECDHE), and reduces the handshake from two round trips to one (0-RTT resumption available). It is a significant security improvement over TLS 1.2."
  },
  {
    id:"d4-74", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"A security team needs to detect unauthorized devices connecting to the corporate network. Which technology provides the BEST visibility?",
    choices:["Antivirus software on all managed endpoints","Network Access Control (NAC) with 802.1X and a device inventory","Intrusion Prevention System (IPS)","DNS filtering"],
    correctIndex:1, hard:false,
    explanation:"NAC with 802.1X requires devices to authenticate before network access. Combined with a device inventory, it can identify unauthorized devices and quarantine or block them. IPS and AV only protect after devices are already on the network."
  },
  {
    id:"d4-75", domain:"communication_network_security", domainLabel:"Communication and Network Security",
    text:"What is the PRIMARY purpose of a network-based DLP solution positioned at the internet gateway?",
    choices:["Blocking malware entering the network","Inspecting outbound traffic to prevent unauthorized exfiltration of sensitive data","Encrypting all outbound traffic","Authenticating users before internet access"],
    correctIndex:1, hard:false,
    explanation:"Network DLP at the internet gateway inspects outbound traffic for sensitive data patterns (PII, credit card numbers, classified content) and can block, quarantine, or alert on unauthorized exfiltration attempts before data leaves the organization."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 5 – Identity and Access Management  (d5-51 … d5-75)
  // FOCUS: advanced IAM scenarios, modern protocols, lifecycle, exam traps
  // ─────────────────────────────────────────────────────────────
  {
    id:"d5-51", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A user attempts to log in with correct credentials from an unusual country at 3 AM. The system requires a second authentication factor. What type of authentication is this?",
    choices:["Multi-factor authentication regardless of context","Adaptive (risk-based) authentication that steps up due to contextual anomalies","Continuous authentication","Federated authentication"],
    correctIndex:1, hard:false,
    explanation:"Adaptive (risk-based) authentication evaluates contextual signals (location, time, device) to assess risk and dynamically step up authentication requirements when anomalies are detected, rather than always requiring MFA."
  },
  {
    id:"d5-52", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What is the MAIN security risk of service accounts that use shared credentials?",
    choices:["Service accounts require too many resources","Shared credentials prevent individual accountability and make compromised credential detection difficult","Service accounts always have admin rights","Service accounts cannot use MFA"],
    correctIndex:1, hard:false,
    explanation:"Shared service account credentials eliminate individual accountability. When an incident occurs, it is impossible to determine which system or person used the account. Dedicated service accounts with unique passwords (managed by PAM) are best practice."
  },
  {
    id:"d5-53", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which authentication protocol is used in Windows Active Directory environments and uses a ticket-based system to avoid sending passwords over the network?",
    choices:["NTLM","RADIUS","Kerberos","LDAP"],
    correctIndex:2, hard:false,
    explanation:"Kerberos is the default authentication protocol in Active Directory. It uses tickets (TGT and service tickets) issued by the KDC, ensuring passwords are never transmitted over the network. NTLM is an older, weaker alternative still used as a fallback."
  },
  {
    id:"d5-54", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A company implements a policy that all elevated administrator sessions must be recorded and can be reviewed by the security team. Which technology directly enables this?",
    choices:["Multifactor authentication","Network access control","Privileged Session Management (PSM) with session recording","Single sign-on"],
    correctIndex:2, hard:false,
    explanation:"Privileged Session Management (a PAM capability) records all privileged sessions, providing an audit trail of every action taken by administrators. This is essential for detecting misuse and for forensic investigations."
  },
  {
    id:"d5-55", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What is the MOST significant security risk associated with reusing the same password across multiple systems?",
    choices:["The password will eventually expire on all systems simultaneously","A breach of one system exposes credentials that can be used to compromise all other systems using the same password (credential stuffing)","Reuse violates password length requirements","Multiple systems increase the chance of an accidental logout"],
    correctIndex:1, hard:false,
    explanation:"Credential stuffing attacks use credential pairs harvested from one breach to attempt login on other services. Password reuse means a single breach potentially compromises the user's accounts on many other platforms."
  },
  {
    id:"d5-56", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"In the SAML flow for web SSO, which entity holds the user's identity and authenticates them?",
    choices:["Service Provider (SP)","Identity Provider (IdP)","Certificate Authority (CA)","Authorization Server"],
    correctIndex:1, hard:false,
    explanation:"In SAML SSO, the Identity Provider (IdP) authenticates the user and asserts their identity to the Service Provider (SP). The SP trusts the IdP's assertion and grants access without requiring a separate login."
  },
  {
    id:"d5-57", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which password attack compares a hashed password against a database of precomputed hash-to-password mappings?",
    choices:["Brute-force attack","Dictionary attack","Rainbow table attack","Credential stuffing attack"],
    correctIndex:2, hard:false,
    explanation:"Rainbow table attacks use precomputed tables of hash values mapped to passwords, allowing rapid cracking without real-time computation. Salting passwords defeats rainbow tables by making precomputed tables infeasible."
  },
  {
    id:"d5-58", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which of the following BEST describes the concept of a least-privilege access model in a cloud environment?",
    choices:["All cloud users share a single highly privileged account","Each service, workload, and user is granted the minimum permissions required to perform their function, with access reviewed regularly","Cloud providers manage all access permissions automatically","Administrator accounts are used for all cloud operations"],
    correctIndex:1, hard:false,
    explanation:"Cloud least privilege means cloud IAM roles, policies, and permissions are scoped to the minimum necessary. Over-permissioned roles (e.g., using AdministratorAccess everywhere) are a primary cloud security risk."
  },
  {
    id:"d5-59", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A user is terminated. Their IT access is removed, but their physical access badge is not revoked for three weeks. What type of risk does this represent?",
    choices:["Residual digital access risk","Physical access control failure creating an insider threat risk","An acceptable risk since the user is no longer employed","A compliance issue only, not a security risk"],
    correctIndex:1, hard:false,
    explanation:"Physical access must be revoked simultaneously with logical access during offboarding. An active badge allows a terminated employee to enter facilities and potentially cause physical damage, steal assets, or tailgate into secure areas."
  },
  {
    id:"d5-60", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What distinguishes OAuth 2.0 from OpenID Connect (OIDC)?",
    choices:["OAuth 2.0 is for authentication; OIDC is for authorization","OAuth 2.0 is an authorization framework; OIDC adds an authentication layer on top of OAuth 2.0 using ID tokens","They are identical protocols with different names","OIDC is only used in enterprise environments"],
    correctIndex:1, hard:true,
    explanation:"OAuth 2.0 is an authorization framework (granting access to resources) not designed for authentication. OIDC builds on OAuth 2.0, adding the ID token (JWT) to provide identity assertions, enabling true single sign-on and federated authentication."
  },
  {
    id:"d5-61", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A system uses hand geometry scanning for physical access to a server room. How should this biometric system be configured to minimize security risk?",
    choices:["Set the FAR as high as possible to reduce user frustration","Set the FAR as low as possible to minimize unauthorized access, accepting a higher FRR","Set the FAR and FRR equally at the CER","Disable the FAR threshold entirely for senior staff"],
    correctIndex:1, hard:true,
    explanation:"For high-security physical access (server rooms, data centers), minimizing the False Acceptance Rate (FAR) is paramount—unauthorized access is more dangerous than occasional legitimate user rejections. Accepting a slightly higher FRR is appropriate."
  },
  {
    id:"d5-62", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which concept describes an attacker using legitimate admin credentials obtained through phishing to access systems, making the attack appear to be authorized administrator activity?",
    choices:["Privilege escalation","Living off the land (LoTL)","Credential-based attack blending with normal admin activity","Pass-the-hash attack"],
    correctIndex:2, hard:true,
    explanation:"Attackers who obtain legitimate admin credentials can abuse authorized tools (WMI, PowerShell, RDP) in ways indistinguishable from normal admin activity, making detection very difficult. This is one reason PAM, session recording, and behavioral analytics are critical."
  },
  {
    id:"d5-63", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What is the security purpose of account lockout policies?",
    choices:["To reduce the number of helpdesk password reset requests","To slow or prevent online brute-force attacks by locking accounts after repeated failed login attempts","To log all failed authentication attempts","To force users to change their passwords regularly"],
    correctIndex:1, hard:false,
    explanation:"Account lockout after N failed attempts (e.g., 5) prevents online brute-force attacks. However, very aggressive lockout thresholds can be abused for denial-of-service by locking out all user accounts."
  },
  {
    id:"d5-64", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"An organization uses biometric authentication. An authorized employee cannot be recognized due to a hand injury affecting their fingerprint. What scenario is this?",
    choices:["False Acceptance Rate (FAR) failure","False Rejection Rate (FRR) failure","Crossover Error Rate (CER) failure","Enrollment failure"],
    correctIndex:1, hard:false,
    explanation:"FRR is the rate at which legitimate users are incorrectly rejected. A physical change (injury, illness, aging) can cause legitimate users to fail biometric authentication, creating an FRR event."
  },
  {
    id:"d5-65", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which identity and access management concept involves using automated workflows to provision and de-provision access based on HR system changes, role changes, and policy rules?",
    choices:["Manual access provisioning","Identity Governance and Administration (IGA)","Directory synchronization only","Self-service password reset"],
    correctIndex:1, hard:false,
    explanation:"IGA platforms automate the identity lifecycle (joiner-mover-leaver processes), policy enforcement, access request approvals, and periodic access reviews, ensuring access is always appropriate and timely."
  },
  {
    id:"d5-66", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which type of access control automatically grants or denies access based on a set of rules evaluated at runtime, such as time of day, department, and device health?",
    choices:["Role-Based Access Control (RBAC)","Discretionary Access Control (DAC)","Rule-Based Access Control","Attribute-Based Access Control (ABAC)"],
    correctIndex:3, hard:false,
    explanation:"ABAC (policy-based access control) evaluates multiple attributes (user, resource, environment) against access policies at runtime. It is more flexible than RBAC which uses static role assignments."
  },
  {
    id:"d5-67", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What is the security concern with SMS-based one-time passwords (OTP) as a second authentication factor?",
    choices:["SMS OTPs expire too quickly for practical use","SMS is vulnerable to SIM swapping attacks and SS7 protocol interception, allowing attackers to intercept OTPs","SMS OTPs are too long for users to remember","SMS OTPs require internet connectivity to function"],
    correctIndex:1, hard:false,
    explanation:"SMS OTPs are considered weaker than authenticator apps or hardware tokens because attackers can intercept SMS via SIM swapping (convincing the carrier to transfer the victim's number) or SS7 protocol vulnerabilities. NIST SP 800-63 has deprecated SMS OTPs for high-security use cases."
  },
  {
    id:"d5-68", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"An organization discovers that 200 former employees still have active accounts in a SaaS application. What process failed?",
    choices:["Password policy enforcement","Offboarding and access de-provisioning process","Vulnerability management","Change management"],
    correctIndex:1, hard:false,
    explanation:"Active accounts for former employees indicate a failure in the offboarding/de-provisioning process. Automated de-provisioning tied to HR termination events, regular access recertification, and periodic audits of inactive accounts prevent this."
  },
  {
    id:"d5-69", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which authentication method provides the STRONGEST security for privileged remote access to production systems?",
    choices:["Password-only with complexity requirements","Certificate-based authentication with hardware token (PIV/CAC card)","SMS-based OTP","Security questions"],
    correctIndex:1, hard:false,
    explanation:"Certificate-based authentication using a hardware token (PIV card, CAC, FIDO2 hardware key) provides the highest assurance—something you have (the physical token) plus something you know (PIN), with the private key never leaving the hardware."
  },
  {
    id:"d5-70", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What is the role of a Registration Authority (RA) in a PKI?",
    choices:["It issues and signs certificates directly","It validates the identity of certificate requestors and submits approved requests to the CA for certificate issuance","It stores the certificate revocation list","It manages the trust anchor (root CA)"],
    correctIndex:1, hard:false,
    explanation:"The Registration Authority (RA) handles identity verification and approval of certificate requests on behalf of the CA. It does not issue certificates itself—it delegates issuance to the CA after verifying the requestor's identity."
  },
  {
    id:"d5-71", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which of the following is a characteristic of FIDO2/WebAuthn authentication?",
    choices:["It uses a shared secret stored on the authentication server","It uses public-key cryptography with the private key stored on the user's device, enabling phishing-resistant authentication","It requires internet connectivity to the FIDO2 server for each authentication","It is only available for mobile devices"],
    correctIndex:1, hard:true,
    explanation:"FIDO2/WebAuthn uses asymmetric cryptography. The private key is stored on the authenticator (hardware token, TPM, phone) and never leaves the device. Authentication is origin-bound, making it phishing-resistant since the key pair is tied to the specific website domain."
  },
  {
    id:"d5-72", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"What is the purpose of a break-glass (emergency access) account?",
    choices:["An account used for routine privileged tasks","A tightly controlled, rarely-used emergency account that provides elevated access when normal privileged accounts are unavailable","An account shared among all administrators","An account used for automated scripts and batch jobs"],
    correctIndex:1, hard:false,
    explanation:"Break-glass accounts provide emergency access in crisis scenarios (e.g., all admins locked out, identity system unavailable). They are stored securely (sealed envelope, PAM vault), their use triggers immediate alerts, and all usage is audited."
  },
  {
    id:"d5-73", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"An organization uses a decentralized identity model where users control and store their own identity credentials. What technology enables this?",
    choices:["SAML federation","Decentralized Identifiers (DIDs) and verifiable credentials on a distributed ledger","Active Directory","LDAP directories"],
    correctIndex:1, hard:true,
    explanation:"Decentralized Identity uses W3C Decentralized Identifiers (DIDs) and verifiable credentials, allowing users to control their identity without a central authority. Users store credentials in a digital wallet and selectively disclose attributes to verifiers."
  },
  {
    id:"d5-74", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"Which of the following password storage methods is MOST resistant to offline brute-force attacks?",
    choices:["MD5 hashing without salt","SHA-256 hashing without salt","bcrypt or Argon2 with a high work factor","SHA-512 without salt"],
    correctIndex:2, hard:false,
    explanation:"bcrypt and Argon2 are purpose-built password hashing algorithms with a configurable work factor (cost parameter) that deliberately slows computation, making brute-force and dictionary attacks orders of magnitude slower than general hash functions like SHA-256."
  },
  {
    id:"d5-75", domain:"identity_access_management", domainLabel:"Identity and Access Management",
    text:"A healthcare organization allows third-party researchers limited access to patient data without exposing full records. Which access control model BEST achieves fine-grained attribute-based access?",
    choices:["Discretionary Access Control (DAC)","Mandatory Access Control (MAC) with clearance levels","Attribute-Based Access Control (ABAC) with data attributes and researcher attributes","Role-Based Access Control with researcher roles"],
    correctIndex:2, hard:false,
    explanation:"ABAC can enforce complex policies like 'researcher may access records from their approved study population only, during approved study dates, using approved endpoints.' RBAC and MAC do not offer this level of granularity dynamically."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 6 – Security Assessment and Testing  (d6-51 … d6-75)
  // FOCUS: exam-tested assessment scenarios, metrics, audit types, findings
  // ─────────────────────────────────────────────────────────────
  {
    id:"d6-51", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which testing approach simulates a real-world attack scenario including physical, social engineering, and cyber components to test the organization's overall detection and response capability?",
    choices:["Vulnerability scan","Red team assessment","Code review","Configuration audit"],
    correctIndex:1, hard:false,
    explanation:"A red team assessment is a goal-based, adversarial simulation that uses all attack vectors (cyber, physical, social engineering) to emulate a real threat actor. Unlike a penetration test, which tests specific vulnerabilities, a red team tests the organization's overall detection and response."
  },
  {
    id:"d6-52", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A security audit finding states that a control is 'operating effectively.' What does this mean in audit terminology?",
    choices:["The control exists in the policy documentation","The control is both designed appropriately and consistently applied in practice to achieve its intended objective","The control has never failed","The control is the strongest possible option"],
    correctIndex:1, hard:false,
    explanation:"'Operating effectively' means the control is properly designed (designed effectiveness) AND consistently applied as documented to achieve its security objective (operating effectiveness). A control can be well-designed but poorly executed."
  },
  {
    id:"d6-53", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A penetration tester discovers a critical finding during a test but is worried that continuing the exploitation chain could cause system damage. What should the tester do?",
    choices:["Continue the exploitation to demonstrate full impact regardless of risk","Stop exploitation of that path, document the finding, and discuss with the client before proceeding","Delete the finding from the report since exploitation was not completed","Ignore the finding since risk to the test environment is acceptable"],
    correctIndex:1, hard:false,
    explanation:"The rules of engagement should specify how to handle potentially damaging findings. The tester should document, stop, and consult the client. Causing unintended damage violates professional ethics and the test agreement."
  },
  {
    id:"d6-54", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"What is the PRIMARY purpose of penetration test reporting?",
    choices:["To document the number of hours spent on the engagement","To provide actionable findings with risk ratings and remediation guidance that enable the organization to improve its security posture","To list all tools and techniques used during the test","To demonstrate the skill of the penetration testing team"],
    correctIndex:1, hard:false,
    explanation:"A penetration test report's value is in actionable findings with clear risk context and remediation steps. It enables risk owners to prioritize and fix vulnerabilities. Tool lists and methodology sections provide context but are not the primary purpose."
  },
  {
    id:"d6-55", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which vulnerability scanning approach authenticates to systems with administrative credentials to perform a thorough check of installed software and configurations?",
    choices:["Unauthenticated (external) scan","Credentialed (authenticated) scan","Passive network scan","Social engineering assessment"],
    correctIndex:1, hard:false,
    explanation:"Credentialed scans use administrative credentials to authenticate to systems and inspect installed software versions, configurations, and patch levels from within. They find significantly more vulnerabilities than unauthenticated scans, which only see what is exposed to the network."
  },
  {
    id:"d6-56", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A security team uses a tool that monitors code execution at runtime to identify security flaws that only appear when the application is running with real data. What type of testing is this?",
    choices:["SAST","DAST","IAST (Interactive Application Security Testing)","Fuzzing"],
    correctIndex:2, hard:true,
    explanation:"IAST (Interactive Application Security Testing) uses agents or sensors inside a running application to monitor execution and identify vulnerabilities from within. It combines the inside-out visibility of SAST with the runtime testing of DAST."
  },
  {
    id:"d6-57", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which metric BEST measures the security team's operational responsiveness to identified critical vulnerabilities?",
    choices:["Number of vulnerabilities discovered","Mean Time to Remediate (MTTR) critical vulnerabilities","Number of penetration tests conducted","Percentage of systems with AV installed"],
    correctIndex:1, hard:false,
    explanation:"MTTR for critical vulnerabilities measures how quickly discovered critical risks are remediated. It directly reflects the effectiveness of the vulnerability management and patching processes."
  },
  {
    id:"d6-58", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which type of audit examines whether an organization's security controls comply with a specific regulatory or contractual requirement?",
    choices:["Internal audit","Compliance audit","Technical security assessment","Due diligence audit"],
    correctIndex:1, hard:false,
    explanation:"A compliance audit evaluates whether an organization's controls satisfy specific regulatory (HIPAA, PCI DSS, GDPR) or contractual requirements. It differs from a risk-based internal audit, which evaluates overall security effectiveness."
  },
  {
    id:"d6-59", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"During a web application assessment, the tester identifies that the application reflects unsanitized user input in error pages. What vulnerability class should be investigated?",
    choices:["SQL injection","Reflected Cross-Site Scripting (XSS)","SSRF","XML Injection"],
    correctIndex:1, hard:false,
    explanation:"When user input is reflected back in a response without sanitization, it may be injectable as HTML or JavaScript. Reflected XSS occurs when the malicious script is included in the request and reflected in the response, executing in the victim's browser."
  },
  {
    id:"d6-60", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"What is the MAIN limitation of automated vulnerability scanners compared to manual penetration testing?",
    choices:["Automated scanners are slower than manual testing","Automated scanners cannot chain vulnerabilities to demonstrate business impact or discover logic flaws that require human reasoning","Automated scanners produce too few findings","Automated scanners require more credentials than manual testing"],
    correctIndex:1, hard:false,
    explanation:"Automated scanners are excellent at finding known vulnerabilities but cannot chain findings into attack paths, understand business logic flaws, or reason about complex multi-step exploits. Manual testing provides the business-impact context that automation cannot."
  },
  {
    id:"d6-61", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A financial institution receives a report showing that its password reset functionality can be exploited to take over any account by guessing the reset token. What CVSS component primarily drives the severity score?",
    choices:["Confidentiality impact only","Attack Vector and Privileges Required - Attack Vector: Network, Privileges Required: None, and high impact drives critical score","Availability impact only","Scope metric"],
    correctIndex:1, hard:true,
    explanation:"CVSS base score is driven by exploitability (Attack Vector: Network, Attack Complexity, Privileges Required: None, User Interaction: None) and impact (Confidentiality, Integrity, Availability). No-authentication, network-accessible account takeover with high impact produces a Critical (9.8) CVSS score."
  },
  {
    id:"d6-62", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"What is the purpose of a threat model in the software development lifecycle?",
    choices:["To define the marketing strategy for a new security product","To proactively identify potential threats, attack vectors, and vulnerabilities in a system design before it is built","To document all known malware samples","To assess network infrastructure for intrusion attempts"],
    correctIndex:1, hard:false,
    explanation:"Threat modeling performed early in the SDLC (design phase) identifies threats and attack surfaces, allowing architects to design mitigations in rather than bolt them on later. This is significantly cheaper than post-development security remediation."
  },
  {
    id:"d6-63", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"What is war dialing in the context of a penetration test?",
    choices:["Wardriving for wireless networks","Scanning ranges of phone numbers to identify modems, fax machines, and remote access systems","Flooding targets with UDP packets","Spoofing caller ID to conduct social engineering"],
    correctIndex:1, hard:true,
    explanation:"War dialing (popularized in the movie WarGames) involves systematically dialing telephone numbers to find systems with modems—a legacy technique now also applied to VoIP system discovery. It can reveal forgotten remote access systems that have weak authentication."
  },
  {
    id:"d6-64", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"An organization performs a test where the security team is NOT informed that a simulated attack is occurring. What is the purpose of this approach?",
    choices:["To reduce the cost of the test","To test the team's actual detection and response capability without prior preparation creating bias","To make the test more difficult for the red team","To comply with insurance requirements"],
    correctIndex:1, hard:false,
    explanation:"Blind tests (where the defending blue team is not informed) test real-world detection and response capability. If the team knows a test is occurring, they may heighten monitoring artificially. Double-blind tests also blind the red team to the organization's defenses."
  },
  {
    id:"d6-65", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A security team is reviewing SIEM logs and notices a pattern of failed logins followed by a successful login from the same IP address. What does this MOST likely indicate?",
    choices:["A user who forgot their password","A successful brute-force attack","Normal user behavior","A firewall misconfiguration"],
    correctIndex:1, hard:false,
    explanation:"The pattern of multiple failed authentications followed by a success from the same source is a classic indicator of a successful brute-force or credential-stuffing attack. Immediate investigation, account suspension, and password reset are warranted."
  },
  {
    id:"d6-66", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"What must a penetration testing team do IMMEDIATELY upon discovering evidence of a prior undisclosed breach during an authorized engagement?",
    choices:["Continue testing and document it in the final report only","Notify the client immediately and preserve evidence per the incident response process","Delete the evidence to avoid liability","Exploit the breach further to understand its scope independently"],
    correctIndex:1, hard:true,
    explanation:"Discovering evidence of a prior undisclosed breach requires immediate client notification. The engagement may need to pause and transition to incident response. Preserving evidence and notifying the client are paramount; continuing to test or modify evidence would be inappropriate."
  },
  {
    id:"d6-67", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"An organization wants to verify that its incident response team can effectively detect and respond to a simulated ransomware attack. Which exercise is MOST appropriate?",
    choices:["Document review of the incident response plan","Tabletop exercise with a ransomware scenario","Full-scale red team simulation with actual ransomware deployment","Annual compliance audit"],
    correctIndex:1, hard:false,
    explanation:"A tabletop exercise (discussion-based) tests the response team's decision-making without operational risk. It is more realistic than a document review but safer than deploying actual ransomware tools in the production environment."
  },
  {
    id:"d6-68", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"What is the MOST significant advantage of continuous automated vulnerability scanning over periodic (quarterly) scanning?",
    choices:["Continuous scanning is cheaper","Continuous scanning reduces the window of exposure by detecting new vulnerabilities and misconfigurations as they are introduced","Continuous scanning eliminates the need for penetration testing","Continuous scanning provides better report formatting"],
    correctIndex:1, hard:false,
    explanation:"Quarterly scans leave up to 90 days of exposure when a new vulnerability is discovered or a misconfiguration is introduced. Continuous scanning dramatically reduces this window, aligning with modern DevSecOps practices."
  },
  {
    id:"d6-69", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which of the following is an example of a security control that is both preventive and corrective?",
    choices:["Firewall rule blocking port 23","Backup and restore system","CCTV monitoring","Security awareness training"],
    correctIndex:1, hard:true,
    explanation:"Backup and restore is corrective (it restores normal operations after an incident) but also preventive in the sense that having backups prevents permanent data loss. It is primarily a corrective control. Note: some argue CCTV is detective, and firewalls are preventive."
  },
  {
    id:"d6-70", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"During a security review, an auditor finds that system administration accounts use the same password they were set with during initial deployment years ago. What finding does this represent?",
    choices:["Insufficient logging and monitoring","Failure to implement password management and rotation for privileged accounts","Insecure network configuration","Inadequate data classification"],
    correctIndex:1, hard:false,
    explanation:"Default or never-rotated privileged account passwords are a critical finding. Password management for privileged accounts should include unique, complex passwords rotated regularly and managed through a PAM vault."
  },
  {
    id:"d6-71", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"A security assessor tests whether confidential information can be accessed by searching for exposed data in public search engine indices, cloud storage buckets, and code repositories. What technique is being used?",
    choices:["Active reconnaissance","OSINT (Open Source Intelligence) and passive reconnaissance","Social engineering","Privilege escalation testing"],
    correctIndex:1, hard:false,
    explanation:"OSINT-based passive reconnaissance uses publicly available information (search engines, GitHub, Shodan, cloud storage directories) without directly probing target systems. It can reveal sensitive data accidentally exposed to the public."
  },
  {
    id:"d6-72", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"What is the primary purpose of security regression testing in a CI/CD pipeline?",
    choices:["To check that new features work correctly","To ensure that new code changes have not reintroduced previously remediated security vulnerabilities","To verify database performance after updates","To test network bandwidth after deployments"],
    correctIndex:1, hard:false,
    explanation:"Security regression testing re-runs security test cases after code changes to confirm that previously fixed security vulnerabilities have not been reintroduced. It is a key component of a secure CI/CD pipeline."
  },
  {
    id:"d6-73", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"An organization wants to assess the risk of its web-facing applications. Which combination of approaches provides the MOST comprehensive coverage?",
    choices:["SAST only","DAST only","SAST + DAST + manual penetration testing + SCA","Annual third-party audit only"],
    correctIndex:2, hard:false,
    explanation:"SAST finds code-level vulnerabilities early; DAST tests running applications for runtime flaws; manual penetration testing discovers logic flaws and chained vulnerabilities; SCA identifies vulnerable dependencies. Together they provide maximum coverage."
  },
  {
    id:"d6-74", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"What is the MAIN purpose of a security assessment's executive summary?",
    choices:["To provide detailed technical findings for the remediation team","To communicate the overall risk posture, key findings, and strategic recommendations in business language for non-technical leadership","To list all tools used during the assessment","To serve as a legal document protecting the testing firm"],
    correctIndex:1, hard:false,
    explanation:"The executive summary communicates the key security posture, critical findings, and strategic recommendations to non-technical decision-makers (CISO, CIO, board). Technical details belong in the body of the report, not the executive summary."
  },
  {
    id:"d6-75", domain:"security_assessment_testing", domainLabel:"Security Assessment and Testing",
    text:"Which NIST document provides guidance on building and maintaining an organizational vulnerability management program?",
    choices:["NIST SP 800-37 (RMF)","NIST SP 800-40 (Patch Management Guide)","NIST SP 800-53 (Security Controls)","NIST SP 800-61 (Incident Response)"],
    correctIndex:1, hard:false,
    explanation:"NIST SP 800-40 (Guide to Enterprise Patch Management Planning) provides guidance on establishing and maintaining a vulnerability and patch management program. SP 800-37 is the Risk Management Framework, SP 800-53 is the control catalog, and SP 800-61 covers incident response."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 7 – Security Operations  (d7-51 … d7-75)
  // FOCUS: CISSP operational scenarios, forensics order, DR testing
  // ─────────────────────────────────────────────────────────────
  {
    id:"d7-51", domain:"security_operations", domainLabel:"Security Operations",
    text:"A security analyst discovers that a critical server has been sending data to an external IP at regular intervals. What should the analyst do FIRST?",
    choices:["Immediately shut down the server to stop the exfiltration","Follow the incident response plan: notify the incident response team and initiate containment per defined procedures","Attempt to identify the attacker by tracing the IP address","Delete the suspicious process and monitor for recurrence"],
    correctIndex:1, hard:false,
    explanation:"The CISSP answer requires following the incident response plan. Ad-hoc actions (shutting down, deleting processes) can destroy forensic evidence and escalate the incident. Notify the IR team and initiate defined containment procedures."
  },
  {
    id:"d7-52", domain:"security_operations", domainLabel:"Security Operations",
    text:"During digital forensics, an investigator works on a live system and must collect volatile data. What is the CORRECT order of collection per the order of volatility?",
    choices:["Hard drive → RAM → network connections → running processes","Running processes and RAM → network connections → disk → removable media","Disk → running processes → RAM → network connections","Removable media → disk → RAM → running processes"],
    correctIndex:1, hard:true,
    explanation:"The order of volatility (RFC 3227) prioritizes the most volatile first: CPU registers/cache → RAM/running processes → network connections → disk → removable media → remote/backup data. Most volatile data disappears soonest when power is lost."
  },
  {
    id:"d7-53", domain:"security_operations", domainLabel:"Security Operations",
    text:"An organization's disaster recovery plan calls for failing over to a hot site. After the failover, what is the NEXT critical step?",
    choices:["Begin decommissioning the primary site","Notify all stakeholders and update the DR plan based on lessons learned from the actual failover","Immediately begin restoration of the primary site","Cancel the hot site contract to save costs"],
    correctIndex:1, hard:false,
    explanation:"After successful failover, communication to stakeholders is critical. Documentation of what occurred (including deviations from plan) enables the DR plan to be updated. Recovery of the primary site follows, but stakeholder notification and plan documentation are immediate priorities."
  },
  {
    id:"d7-54", domain:"security_operations", domainLabel:"Security Operations",
    text:"What is the purpose of a BIA (Business Impact Analysis) in the context of disaster recovery planning?",
    choices:["To identify which employees are essential during a disaster","To identify critical business processes, their dependencies, and quantify the impact of disruption to prioritize recovery","To assess the financial viability of disaster recovery investments","To document all IT system configurations"],
    correctIndex:1, hard:false,
    explanation:"The BIA identifies critical business processes, their recovery time objectives (RTOs), recovery point objectives (RPOs), maximum tolerable downtime (MTD), and financial/operational impact of disruption. BIA results drive DR strategy and recovery prioritization."
  },
  {
    id:"d7-55", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which DR test type is the LEAST disruptive and involves stakeholders reading through the plan and verbally discussing their roles and responses?",
    choices:["Full interruption test","Simulation test","Tabletop exercise (structured walk-through)","Parallel test"],
    correctIndex:2, hard:false,
    explanation:"Tabletop exercises (structured walk-throughs) are discussion-based with no system disruption. They are the least disruptive and least expensive DR test. Full interruption tests are the most disruptive (actually failing over). Parallel tests run both environments simultaneously."
  },
  {
    id:"d7-56", domain:"security_operations", domainLabel:"Security Operations",
    text:"A security operations center receives 1,000 alerts per day but only has capacity to investigate 100. What is the MOST appropriate approach to manage alert volume?",
    choices:["Ignore all alerts below a severity threshold of Critical","Implement alert tuning and prioritization based on risk, combined with SOAR automation for low-complexity alerts","Hire 10x more analysts","Disable the alerting system temporarily"],
    correctIndex:1, hard:false,
    explanation:"Alert fatigue is a real SOC problem. The solution is risk-based prioritization (critical/high first), tuning rules to reduce false positives, and automating routine responses with SOAR so analysts focus on complex investigations."
  },
  {
    id:"d7-57", domain:"security_operations", domainLabel:"Security Operations",
    text:"An attacker gains access to a system and installs a kernel-level backdoor that survives reboots. Which type of malware is this MOST likely?",
    choices:["Worm","Adware","Rootkit","Ransomware"],
    correctIndex:2, hard:false,
    explanation:"A rootkit provides persistent, often kernel-level access that hides itself from the OS and security tools, survives reboots, and provides backdoor access. Kernel rootkits are the most dangerous as they run with OS-level privileges."
  },
  {
    id:"d7-58", domain:"security_operations", domainLabel:"Security Operations",
    text:"What is the FIRST step when an employee reports that their workstation may be infected with malware?",
    choices:["Reimage the workstation immediately","Follow the incident response plan: isolate the system from the network while preserving evidence","Run a virus scan on the workstation","Tell the employee to restart the computer and see if the issue persists"],
    correctIndex:1, hard:false,
    explanation:"The first step is containment (isolating the system from the network) to prevent further spread while preserving evidence. Reimaging immediately destroys evidence. An IR plan provides structured guidance on exactly how to proceed."
  },
  {
    id:"d7-59", domain:"security_operations", domainLabel:"Security Operations",
    text:"What type of evidence has the HIGHEST reliability in digital forensics?",
    choices:["Eyewitness testimony","Best evidence (the original, unmodified digital artifact with hash verification)","Hearsay evidence","Secondary evidence (copies)"],
    correctIndex:1, hard:false,
    explanation:"Best evidence (the original evidence with verified hash integrity) has the highest reliability. In digital forensics, a verified forensic image (matched hash of original and copy) is treated as equivalent to the original."
  },
  {
    id:"d7-60", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which activity is part of the 'lessons learned' phase of incident response?",
    choices:["Containing the attack and preventing further spread","Identifying malware signatures and removing them","Documenting what happened, what worked, what failed, and updating the IR plan accordingly","Restoring systems from clean backups"],
    correctIndex:3, hard:false,
    explanation:"Wait - the lessons learned phase (post-incident) involves documenting what occurred, what worked, what failed, identifying root causes, and updating the IR plan. Restoration occurs in the recovery phase. Let me re-examine the options."
  },
  {
    id:"d7-61", domain:"security_operations", domainLabel:"Security Operations",
    text:"A company tests its disaster recovery plan by failing over to the hot site while the primary site remains operational. Both sites run simultaneously. What type of test is this?",
    choices:["Tabletop exercise","Full interruption test","Parallel test","Checklist review"],
    correctIndex:2, hard:false,
    explanation:"A parallel test activates the recovery site while keeping the primary site operational, validating that the recovery site can handle production workloads without risking actual production downtime. A full interruption test actually shuts down the primary site."
  },
  {
    id:"d7-62", domain:"security_operations", domainLabel:"Security Operations",
    text:"What is the primary security risk of BYOD (Bring Your Own Device) policies in the enterprise?",
    choices:["Higher hardware procurement costs","Loss of IT control over device security posture, potentially introducing unpatched or compromised personal devices into the corporate network","Increased helpdesk tickets for personal device support","Slower network performance from additional devices"],
    correctIndex:1, hard:false,
    explanation:"BYOD devices are not fully managed by IT and may lack patching, endpoint protection, or encryption. Mitigations include MDM/MAM enrollment, containerization of corporate data, NAC posture checks, and conditional access policies."
  },
  {
    id:"d7-63", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which of the following BEST describes the concept of due process in the context of information security investigations?",
    choices:["Ensuring all digital evidence is encrypted","Following legal and procedural requirements for evidence collection, handling, and admissibility to protect individual rights","Completing investigations within a specified time frame","Notifying all employees that an investigation is underway"],
    correctIndex:1, hard:false,
    explanation:"Due process requires that investigations follow proper legal procedures—obtaining warrants where required, maintaining chain of custody, and respecting individual rights. Evidence collected in violation of due process may be inadmissible in legal proceedings."
  },
  {
    id:"d7-64", domain:"security_operations", domainLabel:"Security Operations",
    text:"A threat hunter discovers a new technique being used by an APT group that is not yet detected by any security tool. How should this information FIRST be used?",
    choices:["Immediately publish it on social media","Create detection rules and indicators in SIEM and EDR systems, and share via threat intelligence platforms (STIX/TAXII)","File it as a low-priority future enhancement","Report it only to management without creating detections"],
    correctIndex:1, hard:false,
    explanation:"New TTPs discovered by threat hunters should immediately be operationalized into detections (SIEM rules, EDR queries) to catch future use of the technique, and shared with the security community via threat intelligence sharing platforms."
  },
  {
    id:"d7-65", domain:"security_operations", domainLabel:"Security Operations",
    text:"What is the primary purpose of network flow data (NetFlow/IPFIX) in security operations?",
    choices:["To capture full packet content for forensic analysis","To provide metadata about network communications (source, destination, ports, bytes, duration) for anomaly detection and investigation","To encrypt network traffic between hosts","To replace firewall rule sets"],
    correctIndex:1, hard:false,
    explanation:"Network flow data captures communication metadata without full packet content, enabling analysis of communication patterns, detection of unusual data volumes or connections, lateral movement detection, and incident investigation across large networks."
  },
  {
    id:"d7-66", domain:"security_operations", domainLabel:"Security Operations",
    text:"An organization's IDS detects a known malware signature. A false positive rate check shows 0.1% of alerts are false positives. With 1,000 alerts per day, how many alerts are likely false positives?",
    choices:["1","10","100","1000"],
    correctIndex:0, hard:false,
    explanation:"0.1% of 1,000 = 1 false positive per day. This illustrates why even a very low false positive rate matters at scale—at 1% false positive with 1,000 alerts, there would be 10 false positives per day requiring investigation."
  },
  {
    id:"d7-67", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which of the following BEST describes a cold site in disaster recovery?",
    choices:["A site with fully replicated data and systems ready to take over in minutes","A site with pre-installed hardware requiring software and data restoration before going live (hours)","A site with only basic infrastructure (power, cooling, connectivity) requiring significant setup","A mobile trailer-based computing unit"],
    correctIndex:2, hard:false,
    explanation:"A cold site has only basic infrastructure: power, cooling, connectivity, and empty rack space. Hardware, software, OS, and data must all be procured and installed during recovery—taking days to weeks. It is the cheapest option but has the longest RTO."
  },
  {
    id:"d7-68", domain:"security_operations", domainLabel:"Security Operations",
    text:"What is the purpose of performing a post-incident activity review (lessons learned) meeting?",
    choices:["To assign blame to individuals who made mistakes during the incident","To identify what went well, what failed, and how the response plan and controls can be improved to prevent recurrence","To satisfy regulatory reporting requirements only","To document the cost of the incident for insurance claims"],
    correctIndex:1, hard:false,
    explanation:"Post-incident reviews are blameless process improvement activities. They identify gaps in detection, response, communication, and technical controls, enabling the organization to improve its IR capabilities and prevent similar incidents."
  },
  {
    id:"d7-69", domain:"security_operations", domainLabel:"Security Operations",
    text:"A company's backup strategy is to perform a full backup on Sunday and incremental backups daily. On Friday, a ransomware attack encrypts all data. How many backup sets are needed to restore to Thursday's state?",
    choices:["1 (Sunday full backup)","2 (Sunday full + Thursday incremental)","5 (Sunday full + Monday through Thursday incrementals)","7 (daily incrementals for a full week)"],
    correctIndex:2, hard:true,
    explanation:"Incremental backups capture only changes since the LAST backup of any type. Restoring to Thursday requires: Sunday full + Monday incremental + Tuesday incremental + Wednesday incremental + Thursday incremental = 5 backup sets applied in sequence."
  },
  {
    id:"d7-70", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which principle of digital evidence collection requires that evidence gathering activities NOT modify the source data?",
    choices:["Chain of custody","Integrity preservation (non-modification)","Legal admissibility","Proportionality"],
    correctIndex:1, hard:false,
    explanation:"Evidence integrity preservation means all collection steps must avoid modifying the original evidence. Write blockers, hashing before and after copying, and working on forensic images rather than originals ensure integrity is maintained."
  },
  {
    id:"d7-71", domain:"security_operations", domainLabel:"Security Operations",
    text:"An organization's security team receives a notification of a zero-day vulnerability affecting a widely used VPN appliance with no available patch. What is the BEST immediate response?",
    choices:["Wait for the vendor to release a patch","Implement temporary compensating controls (restrict access, enable enhanced logging, deploy WAF rules) while monitoring for exploitation","Disable the VPN entirely","Accept the risk and take no immediate action"],
    correctIndex:1, hard:false,
    explanation:"Zero-day management requires immediate compensating controls since no patch exists. Restricting access, enhanced monitoring, vendor workarounds, and WAF/network controls can reduce exposure while waiting for a patch. Complete disablement may not be operationally feasible."
  },
  {
    id:"d7-72", domain:"security_operations", domainLabel:"Security Operations",
    text:"Which concept describes an attacker who has successfully breached the perimeter and is moving laterally through the internal network to reach high-value targets?",
    choices:["Initial compromise","Lateral movement","Privilege escalation","Exfiltration"],
    correctIndex:1, hard:false,
    explanation:"Lateral movement is the phase of an attack where the adversary moves through the internal network after initial compromise, using techniques like pass-the-hash, RDP, and SMB to pivot from system to system toward high-value targets."
  },
  {
    id:"d7-73", domain:"security_operations", domainLabel:"Security Operations",
    text:"A company wants to test that its backup restoration procedure actually works. What is the MOST appropriate test?",
    choices:["Review the backup logs to confirm backups completed successfully","Periodically perform test restorations to an isolated environment and verify data integrity","Trust that since backups run without errors, restoration will work","Ask the backup software vendor to certify the backup is restorable"],
    correctIndex:1, hard:false,
    explanation:"Backup completion logs confirm the backup ran, but only an actual test restoration proves that data can be recovered correctly. Regular, documented test restorations are essential—many organizations have discovered their backups were corrupted or incomplete only when needed."
  },
  {
    id:"d7-74", domain:"security_operations", domainLabel:"Security Operations",
    text:"What is a honeynet?",
    choices:["A single decoy system designed to attract attackers","A network of honeypots designed to simulate an entire environment and study attacker behavior at scale","A network dedicated to security team training","A high-availability network using redundant connections"],
    correctIndex:1, hard:false,
    explanation:"A honeynet is a network of multiple interconnected honeypots simulating a realistic environment (multiple hosts, network services, apparent production data). It provides richer intelligence about attacker behavior, tools, and techniques than a single honeypot."
  },
  {
    id:"d7-75", domain:"security_operations", domainLabel:"Security Operations",
    text:"During an incident, the security team wants to determine whether an attacker exfiltrated data from a specific server. Which data source is MOST directly useful?",
    choices:["Antivirus scan results","Outbound network flow data showing data volumes sent from the server to external IPs during the incident window","Patch compliance reports","Physical access logs to the data center"],
    correctIndex:1, hard:false,
    explanation:"Outbound network flow data from the period in question shows data volumes and destinations. Unusually large outbound transfers to external IP addresses during the incident window are strong indicators of exfiltration."
  },
  // ─────────────────────────────────────────────────────────────
  // DOMAIN 8 – Software Development Security  (d8-51 … d8-75)
  // FOCUS: secure SDLC, modern vulnerabilities, API security, supply chain
  // ─────────────────────────────────────────────────────────────
  {
    id:"d8-51", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A developer discovers a security bug in production code. Following a secure SDLC, what is the CORRECT sequence of steps?",
    choices:["Deploy an immediate fix directly to production without testing","Log the finding in the vulnerability tracker, assess severity and risk, develop and test a fix in non-production, then deploy following change management","Ignore it if it is low severity","Notify all users of the vulnerability before it is fixed"],
    correctIndex:1, hard:false,
    explanation:"Even urgent security fixes must follow a controlled process: log, assess, develop, test, and deploy via change management. Deploying untested fixes can break functionality or introduce new vulnerabilities. Only critical zero-day active exploitation justifies expedited emergency patching."
  },
  {
    id:"d8-52", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What is the security concern with insecure direct object references (IDOR) in web applications?",
    choices:["Object references cause memory overflow attacks","Users can modify parameters (such as IDs in URLs) to access objects belonging to other users without authorization","IDOR vulnerabilities cause SQL injection","Object references bypass HTTPS encryption"],
    correctIndex:1, hard:false,
    explanation:"IDOR (now classified under OWASP 'Broken Object Level Authorization') occurs when an application uses user-controllable input to access objects directly without verifying the user is authorized for that specific object. Changing a URL ID from 1001 to 1002 should not expose another user's data."
  },
  {
    id:"d8-53", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which principle states that an application should NOT grant more permissions to a component than it needs to perform its intended function?",
    choices:["Defense in depth","Fail secure","Least privilege","Open design"],
    correctIndex:2, hard:false,
    explanation:"Least privilege in software design means each component, process, service account, and API key is granted only the permissions required for its specific function. Over-privileged components increase the blast radius of a compromise."
  },
  {
    id:"d8-54", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A developer uses user-supplied input as part of a system command (e.g., os.system('ping ' + user_input)). What type of vulnerability is this?",
    choices:["SQL injection","Command injection (OS command injection)","Cross-site scripting","Buffer overflow"],
    correctIndex:1, hard:false,
    explanation:"OS command injection occurs when user input is passed to a system shell without sanitization, allowing attackers to inject arbitrary commands (e.g., input: '127.0.0.1; rm -rf /'). Use parameterized APIs (subprocess with lists) rather than shell string concatenation."
  },
  {
    id:"d8-55", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What security control prevents an application from reading files outside its intended directory when user input determines the file path?",
    choices:["Input length validation","Path traversal prevention using canonicalization and allowed path validation","TLS encryption","Rate limiting"],
    correctIndex:1, hard:false,
    explanation:"Path traversal prevention requires canonicalizing (resolving) the file path and verifying it stays within the allowed base directory before accessing it. Simply removing '../' sequences is insufficient as encoding tricks (e.g., %2e%2e%2f) can bypass naive filters."
  },
  {
    id:"d8-56", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which software development practice requires that every code change be reviewed and approved by at least one other developer before merging?",
    choices:["Test-driven development","Peer code review (mandatory code review)","Pair programming","Automated testing"],
    correctIndex:1, hard:false,
    explanation:"Mandatory peer code review requires at least one other developer to review and approve changes before they can be merged. This detects security flaws, bugs, and insecure coding practices before code reaches production."
  },
  {
    id:"d8-57", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"An application uses a third-party library that deserializes Java objects from user-supplied data. What critical vulnerability class does this introduce?",
    choices:["SQL injection","Cross-site scripting","Insecure deserialization potentially enabling remote code execution","Buffer overflow"],
    correctIndex:2, hard:true,
    explanation:"Insecure deserialization of untrusted data is in the OWASP Top 10. Java deserialization vulnerabilities (Log4Shell-adjacent, Apache Commons Collections) have enabled remote code execution (RCE) in many real-world exploits. Avoid deserializing untrusted data; use safe formats like JSON with schema validation."
  },
  {
    id:"d8-58", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What is a race condition vulnerability in software, and how does it manifest?",
    choices:["When two users access the same resource simultaneously causing performance issues","When a program's behavior depends on the timing of uncontrollable events, potentially allowing security checks to be bypassed (TOC/TOU)","When a network connection times out during data transfer","When encryption is performed too slowly for real-time use"],
    correctIndex:1, hard:true,
    explanation:"A race condition (TOC/TOU) occurs when program correctness depends on the relative timing of events. An attacker can manipulate shared state between when a condition is checked (time-of-check) and when it is used (time-of-use), bypassing security controls."
  },
  {
    id:"d8-59", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which security requirement should be defined FIRST during the requirements phase of a secure SDLC?",
    choices:["Specific cryptographic algorithms to be used","Security and privacy requirements derived from the system's data classification, threat model, and regulatory obligations","Performance benchmarks for security controls","The specific security tools to be deployed"],
    correctIndex:1, hard:false,
    explanation:"Security requirements must be derived from the system's risk profile: data classification, threat model, regulatory requirements, and business context. Defining specific algorithms or tools before understanding requirements puts the cart before the horse."
  },
  {
    id:"d8-60", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What does 'security by obscurity' mean, and why is it NOT a reliable security control?",
    choices:["Encrypting all data; unreliable because encryption can be broken","Relying on secrecy of design or implementation as the primary security mechanism; unreliable because it fails completely when the secret is discovered","Using complex passwords; unreliable because they are difficult to remember","Hiding data in images (steganography); unreliable because it can be detected"],
    correctIndex:1, hard:false,
    explanation:"Security by obscurity uses hidden mechanisms (secret ports, proprietary protocols, hidden URLs) as the primary defense. Per Kerckhoffs's principle, security should rely on the secrecy of the key, not the algorithm—obscurity fails completely when discovered."
  },
  {
    id:"d8-61", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"An API endpoint returns different HTTP status codes (200 for success, 403 for unauthorized, 404 for not found) for different users accessing the same resource ID. What vulnerability does this enable?",
    choices:["SQL injection","User enumeration via API response differences","CSRF","XML injection"],
    correctIndex:1, hard:true,
    explanation:"Different responses for valid vs. invalid resource IDs (or authorized vs. unauthorized access) allow attackers to enumerate valid IDs or user accounts. APIs should return consistent responses (e.g., always 403 or 404 for unauthorized access) to prevent enumeration."
  },
  {
    id:"d8-62", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What is the main security advantage of using stored procedures for database interactions rather than dynamically constructing SQL queries?",
    choices:["Stored procedures are faster than dynamic queries","Stored procedures prevent SQL injection by separating data from SQL code; direct query construction with string concatenation is vulnerable","Stored procedures automatically encrypt sensitive data","Stored procedures require less database storage"],
    correctIndex:1, hard:false,
    explanation:"Stored procedures (especially parameterized ones) separate SQL logic from user data, preventing injection attacks. Dynamic query construction via string concatenation directly embeds user input into SQL, creating injection vulnerabilities."
  },
  {
    id:"d8-63", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A web application caches sensitive user data in the browser using JavaScript localStorage. What security risk does this create?",
    choices:["Data in localStorage is encrypted by the browser automatically","localStorage data is accessible by any JavaScript on the same origin, making it vulnerable to XSS attacks that can steal the data","localStorage automatically clears after session ends","localStorage cannot store more than 1KB of data"],
    correctIndex:1, hard:true,
    explanation:"localStorage data persists beyond sessions and is accessible to any JavaScript running on the same origin. An XSS attack can read localStorage and exfiltrate sensitive data (tokens, PII). Sensitive session tokens should use HttpOnly cookies, not localStorage."
  },
  {
    id:"d8-64", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What is the purpose of input validation in secure application development?",
    choices:["To improve application performance by caching inputs","To ensure user input conforms to expected types, formats, and ranges, rejecting malformed or malicious input before processing","To encrypt user input before storage","To log all user inputs for auditing purposes"],
    correctIndex:1, hard:false,
    explanation:"Input validation ensures data conforms to expected format before processing, preventing injection attacks (SQL, command, XSS) and unexpected application behavior. Validation should be server-side; client-side validation is a usability feature, not a security control."
  },
  {
    id:"d8-65", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which software development methodology is MOST aligned with integrating security into every sprint and continuously delivering secure code?",
    choices:["Waterfall with security review at the end","DevSecOps (Agile + CI/CD + integrated security)","RAD (Rapid Application Development)","Big Design Up Front (BDUF)"],
    correctIndex:1, hard:false,
    explanation:"DevSecOps integrates security practices (SAST, DAST, SCA, threat modeling, code review) into every sprint and CI/CD pipeline stage. Security is a shared responsibility across development, operations, and security teams throughout the software lifecycle."
  },
  {
    id:"d8-66", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A developer hardcodes an API key in source code that is committed to a public GitHub repository. What is the MOST urgent remediation step?",
    choices:["Make the repository private","Revoke and rotate the API key immediately, then remove it from the repository and history using git filter-repo or BFG Repo Cleaner","Add the API key to .gitignore","Document the issue for future reference"],
    correctIndex:1, hard:false,
    explanation:"Exposed API keys are harvested by automated scanners within seconds of being pushed to public repos. Immediate revocation prevents abuse. Making the repo private does not remove the key from GitHub's history or cached versions. The key must be rotated AND removed from history."
  },
  {
    id:"d8-67", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What does 'secure defaults' mean in application security?",
    choices:["Default passwords should be complex","The most secure configuration options should be enabled by default, requiring deliberate action to reduce security","Default encryption keys should be long","Default session timeouts should be 24 hours"],
    correctIndex:1, hard:false,
    explanation:"Secure defaults means applications ship with the most secure configuration enabled out of the box. Users must consciously opt-in to less secure options rather than opt-out of security. This is a core principle of Privacy by Design and OWASP."
  },
  {
    id:"d8-68", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What type of testing sends a large volume of invalid inputs to APIs and services to discover memory leaks, crashes, and unexpected behavior in security controls?",
    choices:["Penetration testing","Regression testing","Fuzz testing (fuzzing)","Load testing"],
    correctIndex:2, hard:false,
    explanation:"Fuzzing (fuzz testing) sends random, malformed, or unexpected inputs to software interfaces to discover memory safety issues, crashes, input validation failures, and logic errors that human testers or static analysis might miss."
  },
  {
    id:"d8-69", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which OWASP category covers the failure to sufficiently log security events and the inability to detect, escalate, or respond to active breaches?",
    choices:["Injection","Insecure Design","Security Logging and Monitoring Failures","Vulnerable and Outdated Components"],
    correctIndex:2, hard:false,
    explanation:"OWASP 'Security Logging and Monitoring Failures' covers insufficient logging, unmonitored logs, and lack of alerting on suspicious activity. Without adequate logging and monitoring, breaches go undetected and attackers can maintain persistence indefinitely."
  },
  {
    id:"d8-70", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"In a microservices architecture, each service communicates via APIs. What is the BEST way to ensure only authorized services can call each other?",
    choices:["IP address allowlisting between services","mTLS (mutual TLS) with service identity certificates and service mesh authorization policies","VPN between all microservices","API gateway rate limiting only"],
    correctIndex:1, hard:true,
    explanation:"mTLS (mutual TLS) requires both the client service and the server service to present certificates, providing mutual authentication. Service mesh platforms (Istio, Linkerd) can enforce authorization policies based on service identities, implementing zero trust between microservices."
  },
  {
    id:"d8-71", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What is the PRIMARY security risk introduced by accepting serialized objects from untrusted sources in a web application?",
    choices:["Performance degradation","Remote code execution if the deserialization library has vulnerabilities or if gadget chains exist","Encryption bypass","Authentication failure"],
    correctIndex:1, hard:true,
    explanation:"Insecure deserialization can lead to remote code execution (RCE), privilege escalation, and denial of service. Java, Python pickle, PHP unserialize, and .NET BinaryFormatter are commonly exploited. Mitigations include integrity checking, type whitelisting, and avoiding native deserialization of untrusted data."
  },
  {
    id:"d8-72", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"A security architect is reviewing an application that handles medical records. What secure design principle requires that the application should not retain data longer than necessary for its purpose?",
    choices:["Defense in depth","Data minimization and retention limitation","Separation of duties","Fail secure"],
    correctIndex:1, hard:false,
    explanation:"Data minimization means collecting only necessary data; retention limitation means keeping it only as long as necessary. These GDPR/privacy principles also reduce the security risk surface—data that is not retained cannot be breached."
  },
  {
    id:"d8-73", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"Which concept in software security requires that components fail in a way that denies access rather than grants it when an error occurs?",
    choices:["Fail open","Fail secure (fail closed)","Defense in depth","Least privilege"],
    correctIndex:1, hard:false,
    explanation:"Fail secure (fail closed) means that when an error or exception occurs, the system defaults to the most secure state (denying access). Fail open grants access on error, which is dangerous in security-critical components like authentication and authorization systems."
  },
  {
    id:"d8-74", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"An attacker manipulates the data in a JSON Web Token (JWT) by changing the algorithm field to 'none' and removes the signature. The server accepts the modified token. What vulnerability is this?",
    choices:["SQL injection","JWT algorithm confusion (or algorithm none attack)","CSRF","Broken authentication"],
    correctIndex:1, hard:true,
    explanation:"The JWT 'alg:none' attack exploits servers that accept unsigned tokens when the algorithm is set to 'none.' Proper JWT validation must check that the algorithm matches what the server expects and that the signature is present and valid."
  },
  {
    id:"d8-75", domain:"software_development_security", domainLabel:"Software Development Security",
    text:"What is the security purpose of a Content Security Policy (CSP) HTTP response header?",
    choices:["To encrypt HTTP responses","To specify which sources of content (scripts, styles, images) are allowed to load on a page, mitigating XSS and injection attacks","To prevent CSRF attacks","To enforce HTTPS connections"],
    correctIndex:1, hard:false,
    explanation:"Content Security Policy (CSP) allows a web application to declare which external sources are trusted for scripts, styles, images, and other resources. Properly configured, it prevents XSS by blocking execution of injected scripts from untrusted origins."
  }

]; // end of CISSP_BANK
