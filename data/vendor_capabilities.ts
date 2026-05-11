export interface VendorProduct {
  productId: string;
  productName: string;
  capabilities: string[];
  partialCapabilities: string[];
  notes: string | null;
  docsUrl: string | null;
  dependsOn?: string | null;
  addOnOf?: string | null;
}

export interface VendorCapability {
  vendorId: string;
  vendorName: string;
  products: VendorProduct[];
}

export const vendorDataLastUpdated = "2026-05";

export const vendorCapabilities: VendorCapability[] = [
  {
    vendorId: "V-001",
    vendorName: "Delinea",
    products: [
      {
        productId: "V-001-P-001",
        productName: "Secret Server On-Premises",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-030", "PAM-031"],
        notes: "Core enterprise PAM vault. On-premises deployment. Credential vaulting, Remote Password Changing (RPC — must be configured, not just available), discovery (AD, Unix, VMware, AWS accounts, GCP accounts, Entra ID), session recording (launcher-based only — direct connections not captured), access request workflows, checkout with time limits, RBAC and folder-based access control, immutable audit logging, break glass with auto-rotation on check-in, dual control approvals, heartbeat, SSH key management, ServiceNow integration. MFA for vault login via integrated IdP only — not step-up at secret level. Partial JIT via checkout with time limits and rotation on check-in — not true zero standing privilege. Azure Key Vault and AWS Secrets Manager integrations are Platform-only, not available in this product.",
        docsUrl: "https://docs.delinea.com/online-help/secret-server/start.htm"
      },
      {
        productId: "V-001-P-002",
        productName: "Secret Server Cloud",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-030", "PAM-031"],
        notes: "SaaS deployment of Secret Server. Identical capability set to Secret Server On-Premises. 99.9% SLA. Does not have the microservice architecture of the Delinea Platform. MFA for vault login via integrated IdP only — step-up MFA at secret level is Platform-only. Launcher-based session recording only — direct connections not captured. Azure Key Vault and AWS Secrets Manager integrations are Platform-only.",
        docsUrl: "https://docs.delinea.com/online-help/secret-server/start.htm"
      },
      {
        productId: "V-001-P-003",
        productName: "Delinea Platform",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-006", "PAM-007", "PAM-008", "PAM-010", "PAM-011", "PAM-012", "PAM-013", "PAM-014", "PAM-015", "PAM-018", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-030", "PAM-032", "PAM-033"],
        partialCapabilities: ["PAM-004", "PAM-009", "PAM-016", "PAM-017", "PAM-028", "PAM-031", "PAM-034", "PAM-035"],
        notes: "Distinct cloud-native product — not Secret Server Cloud with add-ons. Microservice architecture with 99.995% SLA. Includes Secret Server vault capabilities plus: MFA for secrets (step-up authentication at secret level via Platform), Continuous Identity Discovery (CID — continuously discovers admins, shadow admins, NHI, AI identities across AD, Azure AD, AWS, GCP), Identity Threat Protection (ITP/PCCE — identity misconfiguration detection, threat detection, ML-based behavioral analytics), Behavior Analytics included, Azure Key Vault integration, AWS Secrets Manager integration, Privileged Remote Access (PRA — browser-based RDP/SSH sessions), IGA via Identity Lifecycle Management (joiner-mover-leaver automation, in Private Preview as of Spring 2025), Identity Access Certification. Delinea Engine handles all connections via port 443 acting as software-defined jump box — no inbound firewall rules required on target systems. PAM-016 partial — full coverage requires Privilege Control for Servers add-on. PCS is separately purchased.",
        docsUrl: "https://docs.delinea.com/online-help/delinea-platform/getting-started/index.htm"
      },
      {
        productId: "V-001-P-004",
        productName: "Privilege Control for Servers",
        capabilities: ["PAM-016", "PAM-030", "PAM-033"],
        partialCapabilities: ["PAM-005", "PAM-031"],
        notes: "Optional add-on within Delinea Platform — separately purchased, not included by default. Agent-based installation on target servers. Records ALL privileged connections regardless of how initiated — including direct RDP/SSH connections that bypass the PAM broker. Sends recordings back to Secret Server in Platform. Unix/Linux sudo controls. AD bridging for Unix/Linux systems. Privilege elevation controls. Closes the direct connection bypass gap — the only product that captures sessions initiated outside the vault. Requires Delinea Platform.",
        docsUrl: "https://docs.delinea.com/online-help/delinea-platform/getting-started/index.htm",
        addOnOf: "V-001-P-003"
      },
      {
        productId: "V-001-P-005",
        productName: "Server Suite",
        capabilities: ["PAM-005", "PAM-007", "PAM-015", "PAM-016", "PAM-020", "PAM-030"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-008"],
        notes: "On-premises equivalent of Privilege Control for Servers for organizations not on the Delinea Platform. Standalone product. AD bridging for Unix, Linux, Mac OS X — joins non-Windows systems to Active Directory domain. Centralized authentication via AD. RBAC via zones and computer roles. Sudo controls and command-level privilege management on Unix/Linux. Privilege escalation controls. Full session recording and audit on managed Unix/Linux systems — captures all session input/output, replayable. SIEM integration. Single sign-on across platforms. MFA partial — consumed from external IdP (Okta, Duo, Microsoft, etc.), not provided natively. Does not include credential vaulting, rotation, or break glass.",
        docsUrl: "https://docs.delinea.com/online-help/server-suite/using/linux-unix/intro/server-suite.htm"
      },
      {
        productId: "V-001-P-006",
        productName: "Delinea Cloud Suite",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-007", "PAM-014", "PAM-015", "PAM-016", "PAM-020", "PAM-030"],
        partialCapabilities: ["PAM-018", "PAM-023"],
        notes: "SaaS delivery of Server Suite capabilities via the Privileged Access Service (PAS) platform — formerly Centrify. Distinct from Server Suite which is on-premises. Cloud Clients are lightweight agents installed on Linux, Windows, Mac systems. Native MFA enforcement at login and privilege elevation — supports FIDO2, OATH OTP, email, SMS, push (stronger MFA story than Server Suite which consumes external IdP). AD bridging and identity federation. RBAC via zones and roles. Privilege elevation on demand with MFA challenge. Shared account password management via PAS vault. Session recording via PAS. Conditional access policies. Supports Windows workstations as of recent releases.",
        docsUrl: "https://docs.delinea.com/online-help/cloud-suite/start.htm"
      },
      {
        productId: "V-001-P-007",
        productName: "Privilege Manager",
        capabilities: ["PAM-005", "PAM-009", "PAM-016", "PAM-019", "PAM-020", "PAM-025", "PAM-028", "PAM-031"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008", "PAM-010", "PAM-021", "PAM-023", "PAM-026", "PAM-027"],
        notes: "Endpoint least privilege and application control solution for Windows, macOS, Unix/Linux. Standalone product — does not require Secret Server. Two core components: Local Security (manages local group membership, prevents unauthorized admin account creation, enforces password rotation on local accounts) and Application Control (allow listing, blocking, elevation policies per application). True JIT for endpoints — time-limited, approval-based, auto-terminates at expiry, any elevated application self-terminates when window expires. Application elevation — specific applications elevated without full admin rights. User justification workflows. VirusTotal reputation checking for unknown applications. ServiceNow integration. SIEM integration via syslog. Consumes MFA via SSO/SAML integration — no native MFA. No session recording by design — endpoint scale makes recording impractical, event logging and SIEM integration used instead. Discovery limited to local endpoint accounts only.",
        docsUrl: "https://docs.delinea.com/online-help/privilege-manager/start.htm"
      },
      {
        productId: "V-001-P-008",
        productName: "Delinea StrongDM",
        capabilities: ["PAM-005", "PAM-007", "PAM-014", "PAM-015", "PAM-019", "PAM-020", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-006", "PAM-009", "PAM-011", "PAM-012", "PAM-013", "PAM-016", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-028", "PAM-029"],
        notes: "Zero Trust infrastructure access platform. Acquired by Delinea. All connections proxied through gateway/relay architecture — no direct access to target systems possible. Ephemeral leased credentials — users never see credentials, injected at gateway. Supports SSH, RDP, Kubernetes, MySQL, PostgreSQL, Oracle, and many other protocols. RBAC via roles. Cedar policy language for fine-grained access control. Automated JIT via Access Workflows — time-limited, approval-based. PagerDuty on-call integration drives JIT group membership automatically. Session recording — SSH and RDP replays, Kubernetes exec command logging. Tamper-hardened audit log in separate AWS account. SSO/MFA via integrations — Duo, Okta, Entra ID, JumpCloud, Keycloak, Ping Identity. SCIM provisioning for user lifecycle. ServiceNow, Jira, Slack, Microsoft Teams, PagerDuty integrations. Secret store integrations — HashiCorp Vault, Delinea Secret Server, AWS Secrets Manager, GCP, CyberArk, Azure Key Vault. Strong Vault (Enterprise plan) adds native credential management and rotation via secret engines — AD rotation, database rotation, lockable secrets with auto-rotation on release. Without Enterprise plan relies on third-party vault integrations. MFA enforced via integrated IdP, not native. All infrastructure access via gateway prevents bypass at network level.",
        docsUrl: "https://docs.strongdm.com/concepts/what-is-strongdm"
      },
      {
        productId: "V-001-P-009",
        productName: "Delinea Fastpath",
        capabilities: ["PAM-007", "PAM-021"],
        partialCapabilities: ["PAM-005", "PAM-011", "PAM-022", "PAM-035"],
        notes: "Acquired by Delinea. Still sold as a standalone product — only some capabilities brought into Delinea Platform IGA so far. Separation of Duties (SOD) analysis across business applications — cross-application SOD management identifying conflicts at the lowest securable object level. Access risk analysis across all business applications. Change tracking — monitors configuration and master data changes with before/after values, initiating user, and timestamp. Access certification workflows. Not an infrastructure PAM product — focused on business application governance. Does not address MFA, vaulting, session recording, discovery, rotation, break glass, or JIT.",
        docsUrl: "https://docs.delinea.com/online-help/integrations/fast-path.htm"
      },
      {
        productId: "V-001-P-010",
        productName: "Delinea Credential Manager",
        capabilities: [],
        partialCapabilities: ["PAM-015", "PAM-020"],
        notes: "Browser extension (Chrome, Firefox) and mobile app (iOS, Android) that brings business users into the Secret Server or Delinea Platform vault and audit program. Does not provide independent PAM control coverage — all capabilities are inherited from the connected vault. Business User license type provides simplified vault interface for non-IT users. Autofill from vault, TOTP support, step-up MFA via Platform workflows, secret checkout workflows, personal folders. Key compliance value: extends individual user attribution (PAM-015) and audit trail (PAM-020) to business users who previously used unsafe password storage or shared credentials. Requires Secret Server or Delinea Platform as a prerequisite.",
        docsUrl: "https://docs.delinea.com/online-help/mobile/start.htm",
        dependsOn: "V-001-P-001 or V-001-P-003"
      }
    ]
  },
  {
    vendorId: "V-002",
    vendorName: "CyberArk",
    products: [
      {
        productId: "V-002-P-001",
        productName: "CyberArk Privilege Cloud",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-030", "PAM-031", "PAM-032"],
        notes: "SaaS PAM vault hosted by CyberArk. Not cloud-native microservices architecture — runs same underlying architecture as PAM Self-Hosted. Core components: Digital Vault (hardened tamper-proof credential storage), CPM (Central Policy Manager — automated password rotation, must be configured not just available), PSM (Privileged Session Manager — session proxy and recording, launcher-based only, direct connections not captured), PSMP (SSH session proxy), Discovery (AD, Unix, Windows, cloud accounts), Safe-based RBAC, dual control approvals, checkout with time limits, break glass via DR vault, heartbeat, audit logging. MFA via CyberArk Identity integration — not native to Privilege Cloud. Partial JIT via checkout with time limits — not zero standing privilege. PTA (behavioral analytics) separately licensed in SaaS — upgrades PAM-032 to full if PTA included. Session recording launcher-based only — no agent-based recording of direct connections.",
        docsUrl: "https://docs.cyberark.com/privilege-cloud-secrets-rotation/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-002",
        productName: "CyberArk PAM Self-Hosted",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-032"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-030", "PAM-031"],
        notes: "On-premises or customer-managed cloud IaaS deployment of CyberArk PAM. Identical capability set to Privilege Cloud with one key difference: PTA (Privileged Threat Analytics) is natively included, not separately licensed. PTA continuously monitors privileged session activity using behavioral analytics, detects anomalous and high-risk behavior, auto-terminates or suspends sessions on risky activity, detects bypass of PAM controls and AD misconfigurations. This upgrades PAM-032 to full coverage versus Privilege Cloud where PTA is an add-on. OPM (On-Demand Privileges Manager) provides Unix sudo controls. All same notes as Privilege Cloud apply: CPM rotation must be configured, session recording launcher-based only, MFA via CyberArk Identity.",
        docsUrl: "https://docs.cyberark.com/pam-self-hosted/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-003",
        productName: "CyberArk Secure Infrastructure Access",
        capabilities: ["PAM-014", "PAM-015", "PAM-019", "PAM-020", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-013", "PAM-030"],
        notes: "Formerly Dynamic Privileged Access (DPA). SaaS solution for zero standing privilege (ZSP) access to Windows, Linux, database, and Kubernetes targets. Two access modes: vaulted credentials (uses existing Privilege Cloud safe permissions, no additional policy setup required) and ZSP (ephemeral accounts provisioned on demand, no standing credentials). VPN-less — lightweight connector proxies all traffic, no inbound connectivity to customer environment. Native client access — users connect with their tool of choice. MFA enforced via CyberArk Identity. Session idle timeout configurable. Session recording via PSM integration — requires Privilege Cloud or PAM Self-Hosted. Attribute-based access control for ZSP policies. Built-in HA and load balancing.",
        docsUrl: "https://docs.cyberark.com/find-sia-docs/latest/en/content/introduction/sia-new-doc-location.htm"
      },
      {
        productId: "V-002-P-004",
        productName: "CyberArk Remote Access",
        capabilities: ["PAM-001", "PAM-003", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-004", "PAM-030"],
        notes: "SaaS product dedicated to zero trust vendor and third-party privileged access. No VPN, no agents, no passwords required. Native biometric MFA via CyberArk Mobile app — smartphone facial recognition or fingerprint, QR code one-time short-lived session tokens. JIT provisioning — vendor accounts created on demand, no standing access. Integrates with Privilege Cloud or PAM Self-Hosted for session recording via PSM. Integrates with CyberArk Identity for web application vendor access. Vendor Manager delegation allows customers to delegate vendor access management to external vendor managers. Full audit trail of all vendor activity. Session recording partial — requires PSM integration.",
        docsUrl: "https://docs.cyberark.com/remote-access-standard/latest/en/content/intro/getstarted.htm"
      },
      {
        productId: "V-002-P-005",
        productName: "CyberArk Endpoint Privilege Manager",
        capabilities: ["PAM-005", "PAM-009", "PAM-016", "PAM-019", "PAM-020", "PAM-025", "PAM-028"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008", "PAM-010", "PAM-021", "PAM-031", "PAM-032"],
        notes: "Endpoint least privilege and application control for Windows, macOS, Linux. Standalone — does not require Privilege Cloud. Three core capabilities: privilege management (removes local admin rights, elevates specific applications only), application control (allow listing, blocking, elevation policies), and credential theft protection (blocks credential harvesting, Kerberos ticket theft, pass-the-hash — distinguishing capability versus other endpoint PAM products). Local account discovery. Step-up MFA via SAML/SSO integration for elevation challenges. Threat detection integration with PTA — sends EPM events to PTA for centralized analysis. Policy automation detects elevation needs automatically. No session recording by design — endpoint scale makes recording impractical. Partial JIT — elevation policies are task-scoped but without time-limited session termination.",
        docsUrl: "https://docs.cyberark.com/epm/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-006",
        productName: "CyberArk Identity",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-005", "PAM-011", "PAM-012", "PAM-032"],
        notes: "SSO, adaptive MFA, and lifecycle management platform. SAML, OIDC, RADIUS support. Adaptive risk-based MFA — FIDO2, biometric, OTP, SMS, email, push, passwordless. Federation with external IdPs (Entra ID, Okta, etc.). Cloud directory and AD/LDAP integration. Policy-based conditional access — authentication rules enforced based on user, device, location, risk. App Gateway for legacy applications without SSO support. Lifecycle management for joiner-mover-leaver. User behavior analytics built in but focused on identity authentication patterns, not privileged session analytics. PAM-004 full — conditional access rules enforce MFA with no fallback unless explicitly configured.",
        docsUrl: "https://docs.cyberark.com/identity/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-007",
        productName: "CyberArk IGA",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-035"],
        notes: "Identity Governance and Administration. Automates user access review compliance, reduces audit effort with entitlement pre-approvals, lifecycle management for human and machine identities. Access certification campaigns, entitlement reviews, joiner-mover-leaver automation. Integrates with Privilege Cloud for privileged account governance. Acquired Zilla Security IGA capabilities — modern cloud-first IGA approach.",
        docsUrl: "https://docs.cyberark.com/iga/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-008",
        productName: "CyberArk Secrets Manager SaaS",
        capabilities: ["PAM-006", "PAM-023", "PAM-024", "PAM-028", "PAM-031"],
        partialCapabilities: ["PAM-019", "PAM-020"],
        notes: "SaaS DevOps secrets management — Conjur Cloud. Centralizes secrets management across cloud and DevOps environments. Dynamic secrets generation. RBAC policies for secrets access. Full audit logging. CI/CD integrations. Eliminates hardcoded credentials in application code. JIT via dynamic secrets that expire — no standing credentials.",
        docsUrl: "https://docs.cyberark.com/secrets-manager-saas/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-009",
        productName: "CyberArk Secrets Manager Self-Hosted",
        capabilities: ["PAM-006", "PAM-023", "PAM-024", "PAM-028", "PAM-031"],
        partialCapabilities: ["PAM-019", "PAM-020"],
        notes: "On-premises DevOps secrets management — Conjur self-hosted. Identical capability profile to Secrets Manager SaaS. Customer-managed deployment on-premises or private cloud. Same dynamic secrets, RBAC, audit logging, CI/CD integration capabilities.",
        docsUrl: "https://docs.cyberark.com/secrets-manager-sh/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-010",
        productName: "CyberArk Secrets Hub",
        capabilities: [],
        partialCapabilities: ["PAM-023", "PAM-024"],
        notes: "Syncs secrets from CyberArk Privilege Cloud vault to AWS Secrets Manager and Azure Key Vault natively. Allows cloud workloads to consume CyberArk-managed credentials through native cloud secret store APIs without direct Privilege Cloud integration. Rotation managed in Privilege Cloud, synced to cloud platforms automatically. No independent capability — dependent on Privilege Cloud.",
        docsUrl: "https://docs.cyberark.com/secrets-hub-privilege-cloud/latest/en/content/resources/_topnav/cc_home.htm",
        dependsOn: "V-002-P-001"
      },
      {
        productId: "V-002-P-011",
        productName: "CyberArk Secure Cloud Access",
        capabilities: ["PAM-014", "PAM-015", "PAM-019", "PAM-020", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-030"],
        notes: "Zero standing privilege for cloud management consoles — AWS, Azure, GCP. No standing access to cloud consoles — JIT access only via access policies. All traffic proxied through connector. MFA enforced via CyberArk Identity. Session recording via PSM integration. Attribute-based access control policies define available cloud resources and privilege level. Complements SIA which handles infrastructure — Secure Cloud Access handles cloud management plane.",
        docsUrl: "https://docs.cyberark.com/find-sca-docs/latest/en/content/introduction/sca-new-doc-location.htm"
      },
      {
        productId: "V-002-P-012",
        productName: "CyberArk Cloud Visibility",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017"],
        notes: "CIEM — Cloud Infrastructure Entitlement Management. Visualizes identities and permission risk across multi-cloud environments (AWS, Azure, GCP). Discovers over-privileged identities, shadow admins, unused permissions, and misconfigurations. Risk assessment and remediation guidance. Authentication system inventory across cloud environments.",
        docsUrl: "https://docs.cyberark.com/cloud-visibility/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-013",
        productName: "CyberArk Identity Security Intelligence",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-019", "PAM-020", "PAM-021"],
        notes: "UEBA and behavioral analytics — analyzes data to detect and mitigate security breaches and malicious activity. Integrates with Privilege Cloud PTA for privileged session analytics. Risk scoring, threat detection, behavioral baselining. Surfaces anomalous activity across identity and access events.",
        docsUrl: "https://docs.cyberark.com/isi/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-014",
        productName: "CyberArk Identity Compliance",
        capabilities: ["PAM-022"],
        partialCapabilities: ["PAM-035"],
        notes: "Access certification and compliance reporting. Ensures user access complies with current policies. Automates access review campaigns, reduces audit effort. Entitlement pre-approvals streamline certification. Complements CyberArk IGA with focused compliance reporting capability.",
        docsUrl: "https://docs.cyberark.com/identity-compliance/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-015",
        productName: "CyberArk Secure Web Sessions",
        capabilities: ["PAM-030"],
        partialCapabilities: ["PAM-019", "PAM-020"],
        notes: "Records, audits, and protects all user activity within web applications. Session recording for browser-based access — captures all actions taken within web applications. Integrates with CyberArk Identity for authentication context. Complements PSM which handles RDP/SSH sessions — SWS handles web application sessions.",
        docsUrl: "https://docs.cyberark.com/find-sws-docs/latest/en/content/admin/sws-new-doc-location.htm"
      },
      {
        productId: "V-002-P-016",
        productName: "CyberArk Workforce Password Management",
        capabilities: [],
        partialCapabilities: ["PAM-015", "PAM-020"],
        notes: "Browser extension credential management for business users. Securely stores, manages, and shares business application credentials. Connects to Privilege Cloud vault — credentials governed by enterprise policies. Autofill from vault, privileged credential retrieval, MFA integration via CyberArk Identity. Same pattern as Delinea Credential Manager — extends vault coverage to business users, no independent PAM control coverage. Dependent on Privilege Cloud or PAM Self-Hosted.",
        docsUrl: "https://docs.cyberark.com/find-wpm-docs/latest/en/content/getstarted/find-wpm-documentation.htm",
        dependsOn: "V-002-P-001"
      },
      {
        productId: "V-002-P-017",
        productName: "CyberArk Discovery and Context",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-006", "PAM-010"],
        notes: "Machine identity discovery and certificate lifecycle management — Venafi-based, acquired by CyberArk October 2024. Discovers machine identities across sources including certificates, SSH keys, service accounts. Assesses risk and provides remediation steps. Certificate lifecycle management — issuance, renewal, revocation. Identifies expired, unknown, and mismanaged machine identities. Partial PAM-006 and PAM-010 — surfaces service account and machine identity hygiene issues but does not manage them directly.",
        docsUrl: "https://docs.cyberark.com/find-discovery-context-docs/latest/en/content/disco/disco-new-doc-location.htm"
      },
      {
        productId: "V-002-P-018",
        productName: "CyberArk Secure Browser",
        capabilities: [],
        partialCapabilities: ["PAM-013", "PAM-015", "PAM-020"],
        notes: "Secure browser with credential injection, cookie protection, and password replacement. Enhances security and privacy for browser-based access to applications. Integrates with CyberArk Identity for authentication and Workforce Password Management for credential injection. Dependent on CyberArk Identity.",
        docsUrl: "https://docs.cyberark.com/secure-browser/latest/en/content/resources/_topnav/cc_home.htm",
        dependsOn: "V-002-P-006"
      }
    ]
  },
  {
    vendorId: "V-003",
    vendorName: "BeyondTrust",
    products: [
      {
        productId: "V-003-P-001",
        productName: "BeyondTrust Password Safe",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-006", "PAM-030", "PAM-031"],
        notes: "Core PAM vault deployed via BeyondInsight platform. BeyondInsight integrates vulnerability management, patch management, PAM, and incident response into a unified solution. Password Safe capabilities: credential vaulting (privileged accounts, SSH keys, cloud admin accounts, DevOps secrets, service accounts), automated password rotation on managed accounts, discovery and asset scanning (automated onboarding profiles all assets), session monitoring and recording (real-time monitoring with ability to pause or terminate suspicious sessions), Secrets Safe (DevOps secrets management built in), Workforce Passwords (business user credential management built in), RBAC via group-based permissions and Smart Groups, access request workflows with JIT model, searchable audit trail for forensics. Available as cloud and on-premises deployment. MFA via integration with identity providers. Session recording partial — records sessions launched through Password Safe, direct connections not captured. Partial JIT via access request workflows and checkout model.",
        docsUrl: "https://docs.beyondtrust.com/bips/docs/welcome-to-password-safe"
      },
      {
        productId: "V-003-P-002",
        productName: "BeyondTrust Privileged Remote Access",
        capabilities: ["PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-030", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-014", "PAM-031"],
        notes: "Dedicated vendor and remote worker privileged access management. Jump Technology enables access to any system on any network without pre-installed software on every target. Jumpoint provides gateway-based access to network segments. Jump Policies restrict access to defined schedules with forced session termination at schedule end. Real-time session monitoring — administrators can pause or terminate sessions. Full session recording of all access sessions. RBAC via role-based permissions. MFA support. ServiceNow and Jira Service Management integration for ticketed access workflows. Available as cloud and on-premises. Session recording is full — all sessions recorded regardless of initiation method. PAM-014 partial — session timeout configurable via Jump Policies. PAM-031 partial — Jump Policies enforce time windows but not true zero standing privilege.",
        docsUrl: "https://docs.beyondtrust.com/pra/docs/welcome-to-privileged-remote-access"
      },
      {
        productId: "V-003-P-003",
        productName: "BeyondTrust EPM for Windows and Mac",
        capabilities: ["PAM-005", "PAM-009", "PAM-016", "PAM-019", "PAM-020", "PAM-025", "PAM-028"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008", "PAM-010", "PAM-021", "PAM-031"],
        notes: "Endpoint Privilege Management for Windows and Mac. Least privilege enforcement — removes local admin rights, elevates specific applications only. Application control — allow listing, blocking, elevation policies. Local account discovery and management. RBAC via policy-based controls. Audit logging with SIEM integration. Step-up MFA via SAML/SSO integration for elevation. No session recording by design — endpoint scale makes recording impractical. Partial JIT — elevation policies are task-scoped but without full time-limited session termination.",
        docsUrl: "https://docs.beyondtrust.com/epm-wm/docs/epm-windows-mac-landing"
      },
      {
        productId: "V-003-P-004",
        productName: "BeyondTrust EPM for Unix and Linux",
        capabilities: ["PAM-005", "PAM-016", "PAM-019", "PAM-020"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008"],
        notes: "Endpoint Privilege Management for Unix and Linux. Least privilege enforcement on Unix and Linux systems. Privilege escalation controls — sudo controls, command-level privilege management. Application control on Unix/Linux. Audit logging of privileged activity. MFA via SAML/SSO integration. Does not include credential vaulting, rotation, or session recording.",
        docsUrl: "https://docs.beyondtrust.com/epm-l/page/epm-landing"
      },
      {
        productId: "V-003-P-005",
        productName: "BeyondTrust Identity Security Insights",
        capabilities: ["PAM-008", "PAM-017", "PAM-032"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-010", "PAM-016"],
        notes: "ITDR and CIEM — identity security posture management. Provides complete view of identities, accounts, effective privileges, escalation paths, and threats from a single lens. Scans AD, Entra ID, AWS, Okta and other platforms. Identifies dormant and inactive accounts, misconfigurations, over-permissive roles, privilege escalation paths, and lateral movement paths. Risk-ranked remediation report with prioritized fixes. Continuous monitoring. Authentication system inventory across connected platforms. Part of the Pathfinder platform umbrella.",
        docsUrl: "https://docs.beyondtrust.com/insights/docs/identity-security-insights-landing"
      },
      {
        productId: "V-003-P-006",
        productName: "BeyondTrust Entitle",
        capabilities: ["PAM-011", "PAM-012", "PAM-022", "PAM-031"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007"],
        notes: "Comprehensive identity and access management — IGA for cloud and SaaS environments. Manages entire access authorization process by automating JIT access and permission management. Reduces standing privileges, simplifies access reviews, handles evaluation and approval or denial of permission requests. Joiner-mover-leaver automation. Access certification campaigns. Integrates with Password Safe for PAM-governed JIT access. Focused on cloud and SaaS environments — complements Password Safe for infrastructure.",
        docsUrl: "https://docs.beyondtrust.com/entitle/docs/entitle-landing"
      },
      {
        productId: "V-003-P-007",
        productName: "BeyondTrust AD Bridge",
        capabilities: ["PAM-005", "PAM-015", "PAM-016", "PAM-020"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-008"],
        notes: "Centralizes and streamlines authentication across Windows, Unix, and Linux using Active Directory. Joins non-Windows systems to AD domain. Centralized authentication via AD. RBAC via AD groups and policies. Privilege escalation controls on Unix/Linux. Audit logging of privileged activity on managed systems. MFA via AD-integrated identity providers. Same pattern as Delinea Server Suite — focused on cross-platform AD integration and Unix/Linux privilege controls. Does not include credential vaulting or session recording.",
        docsUrl: "https://docs.beyondtrust.com/adb/docs/ad-bridge-landing"
      }
    ]
  },
  {
    vendorId: "V-004",
    vendorName: "KeeperPAM",
    products: [
      {
        productId: "V-004-P-001",
        productName: "KeeperPAM",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-006", "PAM-009", "PAM-010", "PAM-013", "PAM-014", "PAM-022", "PAM-028"],
        notes: "Cloud-native unified PAM platform. Consolidates enterprise password management, secrets management, connection management, zero-trust network access, remote browser isolation and cloud-based access control in one product. Architecture: lightweight Gateway deployed in customer environment communicates outbound only via WebSocket to Keeper cloud. Zero-knowledge encryption — Keeper servers cannot decrypt vault data. No VPN, no agents on endpoints, no inbound firewall rules required. Key capabilities: credential vaulting (zero-knowledge encrypted), automated password rotation (AD accounts, Windows/Linux users, databases, AWS/Azure/GCP IAM, SSH keys, Windows services and scheduled tasks updated automatically on rotation), discovery (via Commander CLI — network discovery across Windows, Linux, AD, databases, cloud; UI coming soon), session recording and playback (full recording of all connections), true JIT with zero standing privilege (ephemeral account creation for duration of session, time-bounded access with automatic rotation on check-in, single-user checkout mode, approval workflows with force check-in), RBAC via roles and enforcement policies, Secrets Manager for DevOps (built in), tunneling, remote browser isolation. ARAM (Advanced Reporting and Alerts Module) for audit and compliance reporting with SIEM integration (Splunk, Sumo Logic, syslog, Azure LA). Break glass via workflow override. PAM-008 partial for UI — discovery currently Commander CLI only. Available as KeeperPAM license or Keeper Enterprise with PAM add-on.",
        docsUrl: "https://docs.keeper.io/en/keeperpam"
      },
      {
        productId: "V-004-P-002",
        productName: "Keeper Endpoint Privilege Manager",
        capabilities: ["PAM-005", "PAM-009", "PAM-016", "PAM-019", "PAM-020", "PAM-031"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008", "PAM-021", "PAM-025", "PAM-028"],
        notes: "Separately licensed Privileged Elevation and Delegation Management (PEDM) solution. Agent-based across Windows, macOS, Linux. Distinguishing capability vs other EPM products: process-level ephemeral accounts — privileged commands execute under a Keeper-managed ephemeral account that is created and destroyed per-execution (true zero standing privilege at the endpoint level, not just task-scoped elevation). Removes users from local admin groups on Windows and removes sudo on macOS/Linux. JIT at both process and machine levels. Elevation requests with approval and escalation workflows. Flexible policy management — application control, file access policies, granular enforcement by user, machine, collection, execution context. Monitoring mode allows observation before enforcement. Cannot be installed on Windows Domain Controllers. Requires Keeper Enterprise subscription with EPM seats.",
        docsUrl: "https://docs.keeper.io/en/keeperpam/endpoint-privilege-manager/overview"
      }
    ]
  },
  {
    vendorId: "V-005",
    vendorName: "One Identity",
    products: [
      {
        productId: "V-005-P-001",
        productName: "One Identity Safeguard for Privileged Passwords",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-013", "PAM-031"],
        notes: "Hardened appliance or virtual appliance credential vault. Hardware appliance approach protects PAM software from attack. Core capabilities: asset and account discovery, password rotation and management across broad platform support (Windows, Unix, Linux, databases, network devices, mainframe, cloud platforms, VMware, SAN), access request workflow with approvals and review cycles, SSH key and API key management, RBAC, dual control, break glass, checkout with time limits, tamper-proof audit log. Session recording NOT included in SPP alone — requires joining with Safeguard for Privileged Sessions (SPS). MFA via external IdP integration. Partial JIT via checkout model. Partial vendor access via access request workflows. Available on-premises (hardware appliance or virtual) and cloud (AWS, Azure).",
        docsUrl: "https://support.oneidentity.com/one-identity-safeguard-for-privileged-passwords/"
      },
      {
        productId: "V-005-P-002",
        productName: "One Identity Safeguard for Privileged Sessions",
        capabilities: ["PAM-014", "PAM-015", "PAM-019", "PAM-020", "PAM-030", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-013"],
        notes: "Dedicated session proxy and recording appliance. Distinguishing capabilities vs other session recording products: (1) transparent or non-transparent interception — SPS operates independently of PAM vault, can intercept existing sessions without requiring vault integration; (2) protocol-level inspection — SPS inspects traffic at the application layer and can reject traffic that violates protocol rules, acting as active defense not just passive recording; (3) OCR full-text search of session content including screen text; (4) keystroke logging and search. All sessions proxied through SPS — no direct connections to target systems. Real-time alerts and automatic blocking of unsafe protocol actions. Can be used standalone or joined with SPP to combine credential management with session recording. When joined with SPP, all sessions from SPP are automatically proxied through SPS.",
        docsUrl: "https://support.oneidentity.com/one-identity-safeguard-for-privileged-sessions/"
      },
      {
        productId: "V-005-P-003",
        productName: "One Identity Safeguard for Privileged Analytics",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-019", "PAM-020", "PAM-021"],
        notes: "ML-based user behavior analytics for privileged sessions. Requires Safeguard for Privileged Sessions as data source — cannot operate standalone. Algorithms: keystroke dynamics (user authentication via typing patterns), FIS (frequent itemset mining for behavioral patterns like typical access times and source IPs), window title analysis (unusual application usage), mouse movement analysis, scripted session detection. Generates individual user behavior profiles continuously updated via ML. Detects anomalies and ranks by risk. Real-time alerts on suspicious activity.",
        docsUrl: "https://support.oneidentity.com/one-identity-safeguard-for-privileged-sessions/",
        dependsOn: "V-005-P-002"
      },
      {
        productId: "V-005-P-004",
        productName: "One Identity Safeguard On Demand",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-014", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-030", "PAM-032", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-013", "PAM-031"],
        notes: "SaaS-delivered combination of SPP, SPS, and SPA — all three Safeguard products delivered as a managed cloud service. Full capability set of all three products: credential vaulting, rotation, discovery, access workflows, session proxy and recording with protocol-level inspection, OCR full-text search, ML-based behavior analytics. Does not require on-premises appliances. MFA via external IdP. Partial JIT via checkout model — not true zero standing privilege.",
        docsUrl: "https://www.oneidentity.com/products/safeguard-on-demand/"
      },
      {
        productId: "V-005-P-005",
        productName: "One Identity Manager",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-035"],
        notes: "Enterprise IGA platform. Identity governance and administration covering joiner-mover-leaver lifecycle automation, access request and provisioning workflows, access certifications and attestation, role management, SOD policy enforcement across applications. Integrates with Safeguard products for privileged account governance. One Identity's core IGA product separate from the PAM Safeguard family.",
        docsUrl: "https://docs.oneidentity.com/"
      },
      {
        productId: "V-005-P-006",
        productName: "One Identity Safeguard Authentication Services",
        capabilities: ["PAM-005", "PAM-015", "PAM-016", "PAM-020"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-008"],
        notes: "AD bridging for Unix, Linux, and macOS — same pattern as Delinea Server Suite and BeyondTrust AD Bridge. Extends Active Directory authentication and policy to non-Windows systems. Centralized authentication via AD. RBAC via AD groups. Privilege controls on Unix/Linux. Audit logging. MFA via AD-integrated identity providers. Formerly Centrify product. Does not include credential vaulting or session recording.",
        docsUrl: "https://docs.oneidentity.com/"
      },
      {
        productId: "V-005-P-007",
        productName: "One Identity Privilege Manager for Unix Linux macOS",
        capabilities: ["PAM-005", "PAM-016", "PAM-019", "PAM-020"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008"],
        notes: "PEDM solution for Unix, Linux, and macOS. Granular delegation of Unix root account and AD administrator accounts. Enterprise-ready sudo management — enhances open source sudo with central policy management, logging, and reporting. Keystroke logging for Unix root activities. Tightly integrated with Safeguard Authentication Services. Privilege escalation controls at command level. MFA via SAML/SSO integration.",
        docsUrl: "https://support.oneidentity.com/"
      },
      {
        productId: "V-005-P-008",
        productName: "OneLogin Workforce Identity",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-005", "PAM-011", "PAM-012", "PAM-032"],
        notes: "SSO, adaptive MFA, and lifecycle management — acquired by One Identity from OneLogin. SmartFactor Authentication uses AI to adjust security based on current risk context. SAML, OIDC support. Multiple MFA methods including biometrics, FIDO2, OTP. Federation with external IdPs. User provisioning and deprovisioning lifecycle. Directory services. Partial user behavior analytics via SmartFactor risk engine.",
        docsUrl: "https://www.oneidentity.com/products/onelogin/"
      },
      {
        productId: "V-005-P-009",
        productName: "One Identity Active Roles",
        capabilities: ["PAM-005", "PAM-015"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-011", "PAM-012"],
        notes: "Active Directory management and delegation. Automates and secures AD and Entra ID administration. RBAC-based delegation of AD management tasks. Account discovery and inventory. User and group lifecycle management. Temporal group membership — access granted for specific time windows. Complements Safeguard PAM products by securing the AD management plane.",
        docsUrl: "https://docs.oneidentity.com/"
      }
    ]
  },
  {
    vendorId: "V-006",
    vendorName: "Silverfort",
    products: [
      {
        productId: "V-006-P-001",
        productName: "Silverfort Identity Security Platform",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-017", "PAM-019", "PAM-020", "PAM-027", "PAM-032"],
        partialCapabilities: ["PAM-006", "PAM-008", "PAM-010", "PAM-015"],
        notes: "IMPORTANT: Silverfort's technical documentation is customer-gated. This capability mapping is based on public-facing materials including whitepapers, solution briefs, and website content — less authoritative than product documentation. Silverfort is a fundamentally different product category from PAM vaults — it operates at the authentication protocol layer, not credential management or session management. Runtime Access Protection (RAP) technology integrates inline with existing IAM infrastructure (AD, RADIUS, LDAP) without requiring agents, proxies, or code changes on any system. Core capabilities: universal MFA enforcement across ALL authentication protocols including those typically excluded by other MFA solutions (PsExec, WMI, Remote PowerShell, NTLM, Kerberos, LDAP) — PAM-004 is the key differentiator, closing MFA bypass gaps that exist in every other solution; risk-based conditional access policies; service account discovery and monitoring including classification of pure machine-to-machine accounts versus interactively-used accounts; identity threat detection including compromised account detection and lateral movement detection; AI-based risk assessment and anomaly detection; complete authentication event logging across the environment. Does NOT provide: credential vaulting, password rotation, session recording, JIT access, break glass, or jump box capabilities — Silverfort augments existing PAM infrastructure but does not replace vault-based PAM.",
        docsUrl: "https://www.silverfort.com/"
      }
    ]
  },
  {
    vendorId: "V-007",
    vendorName: "Okta",
    products: [
      {
        productId: "V-007-P-001",
        productName: "Okta Workforce Identity Cloud",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-005", "PAM-011", "PAM-012", "PAM-032"],
        notes: "Core identity platform. SSO for applications via SAML and OIDC. Adaptive MFA — risk-based with multiple factors including FIDO2, biometric, OTP, push, SMS. Universal Directory — centralized identity store with AD and LDAP integration. Lifecycle Management — joiner-mover-leaver automation, SCIM provisioning. Okta Workflows — no-code automation for identity processes. Policy-based conditional access. Federation with external IdPs. Okta FastPass — phishing-resistant authentication on managed devices. PAM-004 full — phishing-resistant enforcement available via FastPass. Partial lifecycle management covers basic joiner-mover-leaver but full IGA requires Okta Identity Governance add-on. Identity Threat Protection with Okta AI (add-on) provides risk-based threat detection but not included in base WIC.",
        docsUrl: "https://help.okta.com/oie/en-us/content/topics/identity-engine/oie-index.htm"
      },
      {
        productId: "V-007-P-002",
        productName: "Okta Identity Governance",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-035"],
        notes: "IGA add-on to Workforce Identity Cloud. Three components: Lifecycle Management (extended provisioning and deprovisioning automation), Workflows (no-code automation for access processes), and Access Governance (access certifications, access requests, entitlement management). Access Certifications include contextual information such as sign-in frequency and resource last-accessed date to make reviews more meaningful. Joiner-mover-leaver automation for human and non-human identities. Box uses Okta Identity Governance to enforce zero standing privileges. Subscription add-on — not included in base WIC.",
        docsUrl: "https://help.okta.com/oie/en-us/content/topics/identity-governance/iga.htm",
        addOnOf: "V-007-P-001"
      },
      {
        productId: "V-007-P-003",
        productName: "Okta Privileged Access",
        capabilities: ["PAM-005", "PAM-007", "PAM-015", "PAM-019", "PAM-020", "PAM-023", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-006", "PAM-008", "PAM-013", "PAM-014", "PAM-030"],
        notes: "PAM add-on to Workforce Identity Cloud. Architecture is fundamentally different from traditional vault-first PAM — built on Okta identity platform rather than a separate credential management system. Core capabilities: JIT infrastructure access via on-demand server accounts created per session and deleted after (true JIT, zero standing server access), gateway-based access proxying (no direct server connections, client device never receives usable credentials), SSH session recording via gateway, credential vaulting for privileged accounts and secrets, service account governance (eliminates standing access for non-federated service accounts in SaaS apps), access request workflows with approvals, compliance reporting. RDP session recording in development as of September 2025 announcements. MFA enforced via Okta WIC — not separate. Session recording partial — SSH via gateway, RDP in progress. Service account coverage partial — focused on SaaS service accounts. Narrower infrastructure coverage than traditional PAM vaults — optimized for cloud-native server access rather than full enterprise credential lifecycle.",
        docsUrl: "https://help.okta.com/oie/en-us/content/topics/privileged-access/pam-overview.htm",
        addOnOf: "V-007-P-001"
      },
      {
        productId: "V-007-P-004",
        productName: "Okta Device Access",
        capabilities: ["PAM-001", "PAM-002", "PAM-003"],
        partialCapabilities: ["PAM-005", "PAM-009", "PAM-031"],
        notes: "Extends Okta identity and MFA to device sign-in experience. Desktop MFA for Windows and macOS — enforces MFA at device login using same authenticators as Okta-protected apps. Password sync for macOS — keeps local account password synchronized with Okta. JIT local account creation for macOS — creates accounts from Okta identity at login, useful for shared devices and multi-user workstations. Device Logout — admins can remotely sign users out of devices. Desktop MFA recovery — time-limited recovery PIN for users locked out without MFA access. Not a full endpoint privilege management solution — does not provide application control, local account discovery, or privilege escalation controls.",
        docsUrl: "https://help.okta.com/oie/en-us/content/topics/oda/oda-overview.htm",
        addOnOf: "V-007-P-001"
      }
    ]
  },
  {
    vendorId: "V-008",
    vendorName: "HashiCorp",
    products: [
      {
        productId: "V-008-P-001",
        productName: "HashiCorp Vault",
        capabilities: ["PAM-006", "PAM-019", "PAM-020", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-028", "PAM-031"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-008", "PAM-015", "PAM-021"],
        notes: "Secrets management platform covering both static secrets (KV store) and dynamic secrets (on-demand generation with automatic revocation). Covers self-hosted (Community, Enterprise) and HCP Vault Dedicated (managed SaaS) — identical capability set, deployment model difference only. Core capabilities: dynamic secrets engines for databases (MySQL, PostgreSQL, Oracle, MongoDB, etc.) generating time-limited credentials per request, cloud IAM credential generation (AWS, Azure, GCP) eliminating long-lived cloud credentials, SSH secrets engine for JIT SSH certificates (zero standing SSH access), PKI and certificate lifecycle management, static secrets rotation, encryption as a service (encrypt/decrypt data without exposing keys), RBAC via policies (fine-grained path-based access control), multiple auth methods (LDAP, AD, OIDC, AWS IAM, Kubernetes, Azure, GitHub, etc.), tamper-evident audit logging of all operations, lease management (automatic expiration and renewal), namespaces for multi-tenancy (Enterprise). PAM-031 full via dynamic secrets — credentials exist only for the duration of the lease, automatically revoked on expiry. Does not provide session recording, access management, or endpoint controls — Boundary handles access management. MFA enforced via integrated auth methods partial.",
        docsUrl: "https://developer.hashicorp.com/vault/docs"
      },
      {
        productId: "V-008-P-002",
        productName: "HashiCorp Boundary",
        capabilities: ["PAM-005", "PAM-007", "PAM-015", "PAM-019", "PAM-020", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-013", "PAM-014", "PAM-021", "PAM-030"],
        notes: "Zero trust infrastructure access management. Available as Community Edition (free, self-managed), Enterprise (self-managed with commercial features), and HCP Boundary (managed SaaS). Core capabilities: identity-based access without VPN or firewall changes — users authenticate via trusted IdP (Okta, Azure AD, Auth0, Ping) and get access to specific resources only; RBAC via roles, scopes, and composable grants; credential brokering with Vault — Vault generates dynamic credentials per session, users never see credentials and cannot reuse them; JIT access — sessions created on demand, time-limited, automatically expire; automated service discovery for dynamic infrastructure; session monitoring and audit logging; SIEM integration. Session recording: partial for Community Edition, full session recording with session player for Enterprise and HCP Boundary. Integrates with Vault for full zero trust PAM architecture. PAM-013 partial — supports vendor access patterns but not a dedicated RPAM product. PAM-014 partial — session idle timeout configurable. SSO via OIDC enforces MFA from integrated IdP.",
        docsUrl: "https://developer.hashicorp.com/boundary/docs"
      },
      {
        productId: "V-008-P-003",
        productName: "HashiCorp Vault Radar",
        capabilities: [],
        partialCapabilities: ["PAM-008", "PAM-028"],
        notes: "Secret scanning product — scans code repositories, configuration files, and infrastructure for leaked, embedded, or hardcoded secrets. Identifies secret sprawl and exposed credentials. Available as HCP managed service. Partial PAM-008 — discovers unmanaged secrets and credentials across the environment. Partial PAM-028 — detects default and hardcoded credentials before they become a breach vector. Does not provide access management or session controls.",
        docsUrl: "https://developer.hashicorp.com/hcp/docs/vault-radar"
      }
    ]
  }
];
