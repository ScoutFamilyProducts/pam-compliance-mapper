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
  },
  {
    vendorId: "V-009",
    vendorName: "Microsoft",
    products: [
      {
        productId: "V-009-P-001",
        productName: "Microsoft Entra ID P1",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-005", "PAM-011", "PAM-019"],
        notes: "Core cloud identity platform (formerly Azure Active Directory). Included in Microsoft 365 E3 and Business Premium. Capabilities: SSO for thousands of applications (SAML, OIDC), Multi-Factor Authentication (Microsoft Authenticator, FIDO2, passwordless, SMS), Conditional Access policies (device compliance, location, application sensitivity, sign-in risk), Self-Service Password Reset, AD Connect sync for hybrid environments, Universal Directory, RBAC for application access. PAM-004 full — Conditional Access enforces MFA with no bypass available when properly configured. PAM-019 partial — audit logs via Azure Monitor/Log Analytics, 30-day default retention. P1 does not include PIM (JIT), Identity Protection (risk-based policies), or IGA. These require P2 or ID Governance licenses.",
        docsUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new"
      },
      {
        productId: "V-009-P-002",
        productName: "Microsoft Entra ID P2",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027", "PAM-031", "PAM-032"],
        partialCapabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-010", "PAM-011", "PAM-019"],
        notes: "Includes all P1 capabilities plus Privileged Identity Management (PIM) and Microsoft Entra ID Protection. Included in Microsoft 365 E5. PIM capabilities: JIT time-bound role activation for Microsoft Entra roles, Azure resource roles, and Groups; approval workflows for role activation; MFA required on activation via Conditional Access authentication context; access reviews for privileged roles; assignment expiration with notifications. PIM scope is limited to Microsoft/Azure roles — not general infrastructure or third-party application PAM. ID Protection capabilities: risk-based Conditional Access using ML-driven user and sign-in risk signals; behavioral analytics and anomaly detection; automated risk remediation. PAM-031 scoped to Microsoft Entra and Azure roles only — not infrastructure servers, databases, or third-party applications.",
        docsUrl: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
        addOnOf: "V-009-P-001"
      },
      {
        productId: "V-009-P-003",
        productName: "Microsoft Entra ID Governance",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-031", "PAM-035"],
        notes: "Full IGA add-on — requires P1 or P2 as prerequisite. Includes all P2 PIM capabilities plus: Lifecycle Workflows (joiner-mover-leaver automation via no-code workflows triggered by HR system events), Entitlement Management (access packages bundling resources for request and assignment), Access Reviews (automated campaigns for users, groups, applications, privileged roles), machine learning-driven access recommendations in reviews. PAM-031 partial — PIM included covers JIT for Microsoft roles. PAM-006 partial — service account lifecycle limited to Entra-managed identities. Also available as part of Microsoft Entra Suite which bundles ID Governance with Private Access, Internet Access, ID Protection, and Verified ID.",
        docsUrl: "https://learn.microsoft.com/en-us/entra/id-governance/licensing-fundamentals",
        addOnOf: "V-009-P-001"
      },
      {
        productId: "V-009-P-004",
        productName: "Microsoft Entra Permissions Management",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017"],
        notes: "Cloud Infrastructure Entitlement Management (CIEM) — formerly CloudKnox, acquired by Microsoft. Discovers, remediates, and continuously monitors permissions across AWS, Azure, and GCP. Identifies over-privileged identities, unused permissions, and misconfigured roles across all three major cloud providers. Provides Permissions Creep Index (PCI) scoring for risk ranking. Automated least privilege remediation recommendations. Authentication system inventory across connected cloud platforms. Standalone product — not bundled with Entra ID licenses.",
        docsUrl: "https://learn.microsoft.com/en-us/entra/permissions-management/"
      },
      {
        productId: "V-009-P-005",
        productName: "Microsoft Purview Privileged Access Management",
        capabilities: ["PAM-007", "PAM-031"],
        partialCapabilities: ["PAM-005", "PAM-019", "PAM-020"],
        notes: "JIT PAM specifically for Microsoft 365 administrative tasks — Exchange Online, SharePoint Online, Teams admin operations. Scoped exclusively to M365 admin tasks, not general infrastructure PAM. Zero standing access model for M365 admin roles — administrators must request and receive approval before executing elevated M365 tasks. Time-bound approvals. All approved tasks logged. Separate from Entra PIM — Purview PAM governs task execution within M365, PIM governs role assignment eligibility. Often overlooked but important for organizations with strict M365 compliance requirements (SOX, HIPAA for covered entities using M365).",
        docsUrl: "https://learn.microsoft.com/en-us/purview/privileged-access-management"
      },
      {
        productId: "V-009-P-006",
        productName: "Azure Key Vault",
        capabilities: ["PAM-023", "PAM-024", "PAM-028"],
        partialCapabilities: ["PAM-006", "PAM-019", "PAM-021"],
        notes: "Secrets, key, and certificate management for Azure workloads. Hardware Security Module (HSM) backed option available. Stores API keys, passwords, certificates, cryptographic keys. Automatic key rotation for supported services. RBAC via Azure RBAC or legacy access policies. Audit logging via Azure Monitor and Diagnostic Logs. Integrates natively with Azure services — Azure VMs, Azure Functions, Azure App Service retrieve secrets at runtime without credential exposure. Not a general PAM vault — designed for cloud workload secrets, not human privileged access management. No checkout workflows, session recording, or access request workflows. PAM-006 partial — manages service account secrets but no governance layer.",
        docsUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/overview"
      },
      {
        productId: "V-009-P-007",
        productName: "Microsoft Defender for Identity",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-019", "PAM-020"],
        notes: "ITDR for Active Directory and Microsoft Entra ID. Monitors AD traffic and signals to detect credential-based attacks in real time. Detects: pass-the-hash, pass-the-ticket, Kerberoasting, DCSync, Golden Ticket, lateral movement, privilege escalation paths, account enumeration, brute force, credential stuffing. Identifies dormant and vulnerable accounts. Generates risk alerts integrated with Microsoft Sentinel and Microsoft 365 Defender. Requires sensor deployment on domain controllers (on-premises) and/or integration with Entra ID. Does not perform credential management, session recording, or access control — detection and response only.",
        docsUrl: "https://learn.microsoft.com/en-us/defender-for-identity/what-is"
      },
      {
        productId: "V-009-P-008",
        productName: "Microsoft Sentinel",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-032"],
        notes: "Cloud-native SIEM and SOAR. Collects logs from any source including Entra ID, Azure Key Vault, Microsoft Defender products, and third-party PAM solutions. Provides analytics rules, threat intelligence, workbooks, and automated playbooks. PAM-019 full — centralized immutable audit log when connected to log sources. PAM-020 full — privileged user activity logging when Entra ID and PAM sources are connected. PAM-021 full — audit log review via workbooks, analytics rules, and investigation tools. PAM-032 partial — UEBA capabilities and behavioral analytics, but requires data ingestion from identity sources. Not a PAM product — a SIEM that receives PAM telemetry.",
        docsUrl: "https://learn.microsoft.com/en-us/azure/sentinel/overview"
      }
    ]
  },
  {
    vendorId: "V-010",
    vendorName: "AWS",
    products: [
      {
        productId: "V-010-P-001",
        productName: "AWS IAM",
        capabilities: ["PAM-005", "PAM-015", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-006", "PAM-007", "PAM-008", "PAM-009", "PAM-016", "PAM-017", "PAM-019", "PAM-020", "PAM-031"],
        notes: "Core AWS access control service — included free in every AWS account. Manages authentication and authorization for all AWS API operations. Core capabilities: IAM policies (identity-based and resource-based), IAM roles (temporary credentials via STS — recommended pattern, no long-lived credentials), IAM users (long-lived credentials — should be minimized), IAM groups, Permission Boundaries (limit maximum permissions any identity can have), Service Control Policies via AWS Organizations (guardrails across all accounts), IAM Access Analyzer (built-in policy analysis). MFA partial — configurable for IAM users and root account; federated users get MFA from IdP. PAM-031 partial — IAM roles with STS provide temporary credentials that automatically expire (session duration configurable), reducing standing access in AWS. PAM-016 partial — permission boundaries and SCPs prevent privilege escalation but require explicit configuration. PAM-019 partial — IAM itself does not provide audit logging; CloudTrail is the separate service that captures all IAM API calls. Root account must be protected with MFA and credentials secured in a PAM vault — AWS explicitly recommends a third-party PAM solution for root account credential management.",
        docsUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"
      },
      {
        productId: "V-010-P-002",
        productName: "AWS IAM Identity Center",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-011", "PAM-012", "PAM-019"],
        notes: "Formerly AWS Single Sign-On. Free workforce identity service for multi-account AWS access. Centrally manages user access across multiple AWS accounts via permission sets. Integrates with external identity providers (Okta, Azure AD, Microsoft AD, Ping) via SAML or SCIM. Users authenticate through their IdP and receive temporary AWS credentials per account. Built-in user store available if no external IdP. MFA enforced via integrated IdP or AWS native MFA. Trusted identity propagation passes user identity to AWS managed applications for user-level audit trails. PAM-004 partial — MFA enforcement depends on IdP or Identity Center policy configuration. PAM-011/PAM-012 partial — SCIM provisioning enables user lifecycle automation from IdP. PAM-019 partial — Identity Center activity logged via CloudTrail.",
        docsUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html"
      },
      {
        productId: "V-010-P-003",
        productName: "AWS Secrets Manager",
        capabilities: ["PAM-023", "PAM-024", "PAM-028"],
        partialCapabilities: ["PAM-006", "PAM-019", "PAM-021"],
        notes: "Paid secrets management service. Stores and automatically rotates credentials for RDS databases, Redshift, DocumentDB, and custom rotation targets via Lambda functions. Automatic rotation eliminates long-lived static credentials. Encryption via AWS KMS. RBAC via IAM policies controlling who can retrieve which secrets. Audit logging via CloudTrail — all GetSecretValue calls logged. Cross-region replication. Integration with other AWS services (EC2, Lambda, ECS) for runtime secret retrieval. PAM-006 partial — manages service account credentials but no governance workflow layer. PAM-019 partial — audit via CloudTrail, not built into Secrets Manager itself.",
        docsUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"
      },
      {
        productId: "V-010-P-004",
        productName: "AWS CloudTrail",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-032"],
        notes: "Audit logging service for all AWS API calls and console actions across all AWS services and accounts. First trail per region included free; additional trails and CloudTrail Lake (SQL-based analysis) are paid. Logs are tamper-evident — stored in S3 with optional integrity validation. Covers all IAM, Secrets Manager, KMS, EC2, and other service API calls. CloudTrail Lake provides 7-year immutable audit store with SQL query capability. Organization trail captures activity across all AWS accounts in an organization from a single location. Essential prerequisite for meaningful PAM audit logging in AWS environments — without CloudTrail, no credible audit trail exists.",
        docsUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"
      },
      {
        productId: "V-010-P-005",
        productName: "AWS GuardDuty",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-019"],
        notes: "ML-based threat detection service — paid, 30-day free trial. Continuously analyzes CloudTrail logs, VPC Flow Logs, DNS logs, and other data sources to detect threats. Relevant PAM detections: IAM credential compromise (stolen credentials being used from unusual locations), privilege escalation attempts, brute force attacks, cryptocurrency mining (indicates compromised compute), unusual API call patterns, lateral movement. Detects dormant/unused IAM credentials. Findings integrate with AWS Security Hub and EventBridge for automated response. Does not manage credentials or control access — detection only.",
        docsUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html"
      },
      {
        productId: "V-010-P-006",
        productName: "AWS IAM Access Analyzer",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017", "PAM-022"],
        notes: "Policy analysis service — external access analysis is free, unused access analysis is paid. External access analysis: identifies S3 buckets, IAM roles, KMS keys, and other resources that are accessible from outside the account or organization (public or cross-account exposure). Unused access analysis: identifies IAM users and roles with unused permissions and credentials, helping right-size permissions toward least privilege. Policy validation: checks IAM policies against security best practices before deployment. Access reviews: generates findings that can feed into periodic access review processes. Does not control or manage access — analysis and recommendations only.",
        docsUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html"
      }
    ]
  },
  {
    vendorId: "V-011",
    vendorName: "SailPoint",
    products: [
      {
        productId: "V-011-P-001",
        productName: "SailPoint Identity Security Cloud",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-008", "PAM-021", "PAM-031", "PAM-035"],
        notes: "SaaS IGA platform built on SailPoint Atlas. Trusted by 53% of the Fortune 500. Core capabilities: Lifecycle Management (joiner-mover-leaver automation triggered by HR system events), access certification campaigns (AI-driven recommendations using sign-in frequency and entitlement usage data), access request workflows with approval automation, provisioning and deprovisioning to connected applications, SOD policy enforcement with preventative controls, compliance management with continuous audit readiness. Accelerated Application Management reduces application onboarding time. SAP IAG integration for preventative SOD checks in SAP environments. AI-driven access recommendations improve certification quality. Privilege Security Posture Management (PSPM) emerging within ISC as of March 2026: privilege discovery and classification, privilege insights, JIT access (in development), privilege governance, alert and respond capabilities — not yet fully GA. PAM-031 partial — JIT component of PSPM in development. PAM-006 partial — machine identity and service account governance improving with PSPM. Does not provide credential vaulting, session recording, MFA, or infrastructure access management.",
        docsUrl: "https://documentation.sailpoint.com/"
      },
      {
        productId: "V-011-P-002",
        productName: "SailPoint IdentityIQ",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-008", "PAM-021", "PAM-035"],
        notes: "On-premises IGA platform — legacy product, still actively maintained and deployed in large enterprises. Identical core capability set to Identity Security Cloud: lifecycle management, access certifications, access requests, provisioning, SOD enforcement, compliance. Customer-managed deployment — greater customization but higher operational overhead. PSPM capabilities are being delivered through ISC (SaaS) first.",
        docsUrl: "https://documentation.sailpoint.com/"
      },
      {
        productId: "V-011-P-003",
        productName: "SailPoint Non-Employee Risk Management",
        capabilities: ["PAM-012"],
        partialCapabilities: ["PAM-011", "PAM-013", "PAM-022"],
        notes: "Add-on to Identity Security Cloud. Governs third-party and contractor identity lifecycle — onboarding, access assignment, access reviews, and offboarding for non-employees. Manages the full lifecycle of vendor, contractor, and partner identities separately from employee identities. PAM-013 partial — manages vendor identity governance but not session-level privileged access controls.",
        docsUrl: "https://documentation.sailpoint.com/",
        addOnOf: "V-011-P-001"
      },
      {
        productId: "V-011-P-004",
        productName: "SailPoint Machine Identity Security",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-006", "PAM-010", "PAM-022"],
        notes: "Add-on to Identity Security Cloud for non-human identity (NHI) governance. Discovers and governs service accounts, machine accounts, AI agents, and other non-human identities. Machine Account Migration capability transfers machine accounts into proper governance. Connectors for AI agents from Microsoft 365 Copilot, Databricks, Amazon Bedrock, Google Vertex AI, Salesforce Agentforce, ServiceNow AI Platform. Identifies dormant machine accounts and over-privileged service identities. Does not rotate credentials or provide vault — governance and visibility only.",
        docsUrl: "https://documentation.sailpoint.com/",
        addOnOf: "V-011-P-001"
      },
      {
        productId: "V-011-P-005",
        productName: "SailPoint Cloud Access",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017", "PAM-022"],
        notes: "CIEM add-on to Identity Security Cloud. Discovers and governs access to cloud entitlements and certifications with an identity-focused approach. Identifies over-privileged cloud identities, unused entitlements, and misconfigured access in cloud environments. Integrates cloud entitlement data into access certification campaigns.",
        docsUrl: "https://documentation.sailpoint.com/",
        addOnOf: "V-011-P-001"
      }
    ]
  },
  {
    vendorId: "V-012",
    vendorName: "Saviynt",
    products: [
      {
        productId: "V-012-P-001",
        productName: "Saviynt Identity Cloud",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-011", "PAM-012", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-029", "PAM-030", "PAM-031"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-006", "PAM-009", "PAM-010", "PAM-013", "PAM-014", "PAM-015", "PAM-032", "PAM-035"],
        notes: "Converged identity security platform — IGA, PAM, Application Access Governance (AAG), and Identity Security Posture Management (ISPM) organically built on a single code base. Key differentiator from SailPoint: includes a built-in PAM module with actual credential vaulting and session recording, not governance-adjacent capabilities only. Raised $700M from KKR in December 2025 at ~$3B valuation. Named Gartner Customers Choice for IGA 5 consecutive years. Core capabilities by module: IGA — lifecycle management (joiner-mover-leaver), access certifications with AI-driven Intelligent Recommendations, access request workflows, provisioning and deprovisioning, SOD enforcement; PAM — agentless Cloud PAM (zero-touch, no heavyweight agents), credential vaulting, session recording, discovery of high-risk accounts and shared accounts; AAG — fine-grained application-level SOD and entitlement governance within applications (SAP, Oracle, Workday, Salesforce, etc.); JIT Access — Just-in-Time Access GA 2025, zero standing privileges for cloud/SaaS high-risk accounts, discovers high-risk shared accounts, removes standing privileges, provisions JIT just-enough access; External Identity Management — contractor, vendor, and partner identity lifecycle governance; ISPM — AI-native Identity Security Posture Management launched 2025, continuous risk assessment across identity posture. PAM-001-003 partial — MFA via integrated IdP, not native. PAM-013 partial — external identity management covers vendor access governance but not dedicated RPAM session controls. PAM-030 full — session recording via PAM module. PAM-032 partial — ISPM provides AI-driven risk intelligence and behavioral context.",
        docsUrl: "https://docs.saviyntcloud.com/"
      }
    ]
  },
  {
    vendorId: "V-013",
    vendorName: "JumpCloud",
    products: [
      {
        productId: "V-013-P-001",
        productName: "JumpCloud Directory Platform",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-009", "PAM-011", "PAM-012", "PAM-019"],
        notes: "Cloud directory platform providing identity, access, and device management from a single console. Core capabilities: SSO to SAML and OIDC applications, MFA (TOTP, WebAuthn, push), conditional access policies, device management (Windows, macOS, Linux, iOS, Android), RADIUS for network authentication, LDAP-as-a-Service, cross-OS device policies and patch management. User lifecycle management via HR integrations (Workday, BambooHR, etc.) and SCIM. Password management capabilities — centralized password policies, self-service reset. RBAC via user groups and device groups. Event logging and SIEM integrations. PAM-005 partial — manages device-level credentials and directory passwords, not privileged account vaulting. PAM-009 partial — discovery limited to directory-joined devices and identities, not infrastructure-wide privileged account discovery. PAM-011/012 partial — identity governance via groups and HR-driven lifecycle, not full IGA certification campaigns. PAM-019 partial — conditional access and device trust, not session-level privileged access workflows.",
        docsUrl: "https://jumpcloud.com/support"
      },
      {
        productId: "V-013-P-002",
        productName: "JumpCloud PAM",
        capabilities: ["PAM-019", "PAM-020", "PAM-023", "PAM-029", "PAM-030", "PAM-033"],
        partialCapabilities: ["PAM-005", "PAM-007", "PAM-013", "PAM-014", "PAM-015", "PAM-031"],
        notes: "PAM module added via VaultOne acquisition (May 2025). Extends the JumpCloud Directory Platform with privileged access management capabilities. Session recording for SSH and RDP sessions. Access request workflows with approval chains. Time-limited access grants. Audit logging with tamper-evident trails. Remote browser isolation for web-based privileged access. PAM-005 partial — credential management focused on session injection rather than full enterprise vault with rotation. PAM-007 partial — RBAC for PAM sessions, extends Directory Platform groups. PAM-013 partial — supports vendor access scenarios but not dedicated RPAM infrastructure. PAM-014 partial — session isolation via remote browser, not full gateway architecture. PAM-015 partial — session recording available, keystroke logging scope TBD. PAM-031 partial — time-limited access, full JIT with zero standing privilege model in roadmap.",
        docsUrl: "https://jumpcloud.com/support",
        addOnOf: "V-013-P-001"
      }
    ]
  },
  {
    vendorId: "V-014",
    vendorName: "Splunk",
    products: [
      {
        productId: "V-014-P-001",
        productName: "Splunk Enterprise Security",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-032"],
        notes: "SIEM built on Splunk platform — available on-premises (Splunk Enterprise + ES) or SaaS (Splunk Cloud Platform + ES). As of ES 8.0, integrates SIEM, SOAR (playbook automation), and UEBA into a unified threat detection, investigation, and response solution. Cisco acquired Splunk March 2024. Core PAM-relevant capabilities: centralized log collection and indexing from any source including PAM platforms (Delinea, CyberArk, BeyondTrust, etc.), AD, cloud infrastructure, endpoints, and network devices; correlation rules and analytics for privileged access activity; investigation workbench for incident analysis; dashboards and reports for audit log review and compliance reporting; Mission Control for unified SOC workflow. PAM-032 partial — UEBA in Premier edition (formerly standalone Splunk UBA, which hit end-of-sale December 2025 and EOL January 2027) provides behavioral analytics detecting anomalous user and entity behavior, but requires privileged access data ingestion from connected PAM sources to provide meaningful privileged user analytics. Does not provide credential management, session recording, access control, JIT access, discovery, or any PAM-specific controls — value is entirely dependent on what log sources are connected.",
        docsUrl: "https://help.splunk.com/en/splunk-enterprise-security-8"
      }
    ]
  },
  {
    vendorId: "V-015",
    vendorName: "Semperis",
    products: [
      {
        productId: "V-015-P-001",
        productName: "Semperis Directory Services Protector",
        capabilities: ["PAM-008", "PAM-032"],
        partialCapabilities: ["PAM-010", "PAM-016", "PAM-017", "PAM-019", "PAM-020", "PAM-021"],
        notes: "ITDR solution for hybrid AD and Entra ID — Gartner-recognized ITDR product. Continuous monitoring using multiple data sources including the AD replication stream, which catches changes that evade agent-based and log-based detection (distinguishing capability — catches DCSync, DCShadow, and other attacks that bypass traditional SIEM). Hundreds of built-in, continuously updated security indicators covering indicators of exposure (IOEs) and indicators of compromise (IOCs). Automatic rollback of malicious changes with single-click remediation. Tamperproof audit trail of all AD changes. DSP Intelligence module provides automated security posture assessments. Integration with Microsoft Sentinel to extend visibility into previously hidden AD security data. Detects: privilege escalation paths, shadow admins, attack paths to Tier 0 assets, backdoors, persistence mechanisms, Kerberoasting indicators, Pass-the-Hash, Pass-the-Ticket, Golden Ticket, DCSync. PAM-016 partial — identifies privilege escalation paths but does not enforce access controls. PAM-019 partial — tamperproof audit trail for AD changes specifically, not general PAM audit logging. Not a PAM product — detection and remediation only, no credential management or access control.",
        docsUrl: "https://www.semperis.com/active-directory-security/"
      },
      {
        productId: "V-015-P-002",
        productName: "Semperis Active Directory Forest Recovery",
        capabilities: [],
        partialCapabilities: ["PAM-019", "PAM-029", "PAM-034"],
        notes: "Cyber-first AD forest recovery — purpose-built for ransomware and cyberattack recovery scenarios. Automates complete AD forest recovery in minutes or hours (Forrester-validated 90% reduction in recovery time). Recovers to known-secure state to prevent malware reinfection — critical distinguishing capability. Post-breach identity forensics to close backdoors and remove persistence before returning to production. Staged minimum viable company restore — recovers critical authentication first, remaining DCs in subsequent waves. Fault-tolerant recovery handling complex multi-forest, alternate IP, and mixed hardware environments. PAM-029 partial — ADFR ensures break glass and emergency access workflows can be restored after AD-targeting ransomware; does not manage break glass access itself. PAM-034 partial — validated DR capability contributes to risk posture and annual risk analysis. PAM-019 partial — forensics capability provides audit evidence of changes made during an attack. Not a PAM product — operational resilience product that protects the identity infrastructure PAM depends on.",
        docsUrl: "https://www.semperis.com/active-directory-forest-recovery/"
      }
    ]
  },
  {
    vendorId: "V-016",
    vendorName: "Netwrix",
    products: [
      {
        productId: "V-016-P-001",
        productName: "Netwrix Privilege Secure",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-013", "PAM-019", "PAM-020", "PAM-023", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-003", "PAM-006", "PAM-009", "PAM-010", "PAM-014", "PAM-015", "PAM-021"],
        notes: "Core PAM product — Zero Standing Privilege by design since 2019. Key distinguishing capabilities: Activity Token login accounts generate ephemeral credentials on demand, scoped to the specific task, automatically revoked at session end — no persistent privileged accounts exist in the environment between uses; Bring Your Own Vault (BYOV) — integrates with existing PAM vaults (Delinea, CyberArk, etc.) via out-of-the-box connectors to extend JIT protections without rip-and-replace; post-session cleanup removes Kerberos tickets, disables RDP, and clears session artifacts after every session; Secure Remote Access for VPN-less RPAM covering third-party and workforce access; session recording with searchable video playback; granular SSH command restrictions; real-time session termination and lock; continuous discovery of privileged accounts. JIT access scope covers desktops, servers, directories, cloud resources, network devices, and databases. PAM-001 partial — MFA via integrated IdP or built-in MFA at session initiation. PAM-006 partial — discovers and manages service and task accounts. PAM-015 partial — individual attribution enforced via ephemeral accounts.",
        docsUrl: "https://netwrix.com/en/products/privilege-secure/"
      },
      {
        productId: "V-016-P-002",
        productName: "Netwrix Auditor",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-022"],
        notes: "IT auditing and compliance reporting platform. Collects and correlates audit data across AD, file systems, Exchange, SharePoint, SQL Server, VMware, cloud platforms, and network devices. Pre-built compliance reports mapped to NIST, PCI-DSS, HIPAA, SOX, and other frameworks — reduces manual effort at audit time. Tamper-evident audit trail. Behavior anomaly detection for identifying unusual access patterns. PAM-008 partial — identifies accounts with excessive access rights. PAM-010 partial — identifies dormant accounts and stale access. PAM-022 partial — access review reporting capabilities. Not a PAM product — audit and compliance reporting only.",
        docsUrl: "https://netwrix.com/en/products/auditor/"
      },
      {
        productId: "V-016-P-003",
        productName: "Netwrix Access Analyzer",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-010", "PAM-016", "PAM-017", "PAM-022"],
        notes: "Access rights analysis and entitlement visibility. Discovers and analyzes access rights across AD, file systems, SharePoint, Exchange, cloud platforms, and other systems. Identifies over-privileged accounts, orphaned accounts, and misconfigured access. Provides entitlement intelligence to support least privilege enforcement and access review processes. Not a PAM product — analysis and visibility only.",
        docsUrl: "https://netwrix.com/en/products/access-analyzer/"
      },
      {
        productId: "V-016-P-004",
        productName: "Netwrix Identity Manager",
        capabilities: ["PAM-011", "PAM-012"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-022", "PAM-035"],
        notes: "IGA product for identity lifecycle management. Automates joiner-mover-leaver workflows, access requests, and provisioning. SOD policy enforcement. Access certifications. Lighter-weight IGA compared to SailPoint or Saviynt — positioned for organizations that need governance without enterprise IGA complexity.",
        docsUrl: "https://netwrix.com/en/products/identity-manager/"
      },
      {
        productId: "V-016-P-005",
        productName: "Netwrix Password Secure",
        capabilities: ["PAM-023", "PAM-024", "PAM-028"],
        partialCapabilities: ["PAM-001", "PAM-005", "PAM-006", "PAM-019", "PAM-021"],
        notes: "Credential management and password vaulting. Centralized, role-based access to privileged credentials. Password rotation, complexity policy enforcement, MFA at credential checkout. Secure sharing with audit trails. Compliance reporting. Complements Privilege Secure — Password Secure handles credential storage and rotation while Privilege Secure handles JIT access and session management.",
        docsUrl: "https://netwrix.com/en/products/password-secure/"
      }
    ]
  },
  {
    vendorId: "V-017",
    vendorName: "Varonis",
    products: [
      {
        productId: "V-017-P-001",
        productName: "Varonis Data Security Platform",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-005", "PAM-008", "PAM-010", "PAM-016", "PAM-019", "PAM-020", "PAM-021"],
        notes: "Unified data security platform covering data access governance, DSPM, ITDR, identity protection, and UEBA. Not a PAM product — does not vault credentials, manage JIT access, record privileged sessions, or enforce access controls. Value for PAM compliance is entirely from detection, visibility, and behavioral analytics. Core PAM-relevant capability modules: Data Access Governance — discovers who has access to sensitive data files, shares, and cloud storage; identifies over-privileged users and toxic access combinations; Identity Protection (launched June 2025) — Identity Posture Management identifies risky and misconfigured identities and excessive entitlements across the environment; ITDR detects failed logins, password resets, MFA policy changes, lateral movement, brute force, password spray, and other identity-based threats aligned to MITRE ATT&CK; Identity Resolution maps related identities across all connected systems to a single individual for unified investigation; UEBA — ML-driven user and entity behavior analytics with automated alerting and touchless response. PAM-032 full — ITDR with UEBA is the distinguishing capability, integrating identity threat detection directly with data access context. PAM-005 partial — data access governance enforces least privilege for data access but not general infrastructure access. PAM-008 partial — Identity Posture Management discovers over-privileged identities and excessive entitlements. PAM-010 partial — identifies dormant accounts and stale data access rights. PAM-016 partial — identifies privilege escalation risk paths but detection only, no enforcement. PAM-019/020/021 partial — audit trail and investigation for data access activity, not general PAM audit logging.",
        docsUrl: "https://www.varonis.com/data-security-platform"
      }
    ]
  },
  {
    vendorId: "V-018",
    vendorName: "Google",
    products: [
      {
        productId: "V-018-P-001",
        productName: "Google Cloud IAM",
        capabilities: ["PAM-005", "PAM-015"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-007", "PAM-008", "PAM-016", "PAM-017", "PAM-019", "PAM-020", "PAM-031"],
        notes: "Core GCP access control — included free in every GCP project and organization. Manages authentication and authorization for all GCP API operations. Core capabilities: IAM policies (allow and deny), predefined and custom roles, service accounts for workload identities, workload identity federation (federate external identities to GCP without service account keys), IAM Conditions (attribute-based access control), Organization Policies (guardrails across GCP resources), IAM Recommender (ML-generated least privilege recommendations identifying unused permissions), Principal Access Boundary (limits resources any principal can access regardless of IAM policies — preview). PAM-031 partial — IAM roles with short-lived credentials via workload identity federation reduce standing access but no JIT workflow without Cloud PAM. PAM-016 partial — IAM Recommender identifies privilege escalation risk but remediation is manual. PAM-019 partial — Cloud Audit Logs capture IAM API calls but are a separate service (Cloud Logging). Root/owner account must be protected — Google recommends securing organization admin accounts with hardware security keys.",
        docsUrl: "https://cloud.google.com/iam/docs/overview"
      },
      {
        productId: "V-018-P-002",
        productName: "Google Cloud Privileged Access Manager",
        capabilities: ["PAM-005", "PAM-007", "PAM-019", "PAM-020", "PAM-029", "PAM-031"],
        partialCapabilities: ["PAM-003", "PAM-013", "PAM-014", "PAM-015"],
        notes: "Native GCP JIT privileged access management — reached General Availability 2025. Manages just-in-time temporary privilege elevation for GCP roles at project, folder, and organization scope. Core capabilities: entitlements define who can request access to which resources; time-bound access elevations with configurable maximum duration; approval-based workflows with up to two approval levels and multiple approvers per level; grant customization to scope entitlements to specific resource subsets; full audit logs of all access requests, approvals, and active grants; VPC Service Controls integration; alerting on external IAM modifications outside of PAM; Pub/Sub integration for custom alerting. Scope is limited to GCP roles and resources — not general enterprise infrastructure, on-premises systems, or third-party applications. PAM-013 partial — can be used for vendor/contractor GCP access but not a dedicated RPAM product. PAM-029 full — emergency access entitlements support break glass scenarios with audit trail.",
        docsUrl: "https://cloud.google.com/iam/docs/pam-overview",
        addOnOf: "V-018-P-001"
      },
      {
        productId: "V-018-P-003",
        productName: "Google Cloud Identity",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-011", "PAM-012", "PAM-019", "PAM-025", "PAM-026"],
        notes: "Google's workforce identity platform — available as free tier and Cloud Identity Premium. Separate from Google Workspace (can be deployed without Workspace). Core capabilities: SSO via SAML and OIDC for third-party applications, MFA including TOTP, push notifications, hardware security keys (FIDO2), and passkeys, Context-Aware Access (BeyondCorp) enforces access based on user identity, device health, location, and risk signals (Premium), device management for Windows/macOS/Linux/Android/iOS (Premium), user lifecycle management with SCIM provisioning, password policy enforcement. PAM-004 partial — phishing-resistant MFA enforcement via security keys/passkeys configurable but not on by default. Context-Aware Access in Premium tier adds continuous access evaluation.",
        docsUrl: "https://cloud.google.com/identity/docs/overview"
      },
      {
        productId: "V-018-P-004",
        productName: "Google Security Command Center",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-010", "PAM-016", "PAM-017", "PAM-019", "PAM-020", "PAM-032"],
        notes: "CSPM, CIEM, and threat detection for GCP — with multicloud CIEM in Enterprise tier covering AWS IAM and Entra ID/Okta identities on GCP. Core PAM-relevant capabilities: CIEM identifies excessive permissions, unused access, and over-privileged service accounts across GCP (and multicloud in Enterprise); IAM Recommender integration surfaces least privilege recommendations; threat detection identifies compromised identities, credential misuse, data exfiltration, and misconfigurations; DSPM (Data Security Posture Management) with 150+ AI-driven classifiers; attack path simulation prioritizes high-risk findings. PAM-032 partial — threat detection for identity-based attacks in GCP environment, UEBA-like signals. Available as Standard (free), Premium, and Enterprise tiers — most PAM-relevant capabilities require Premium or Enterprise.",
        docsUrl: "https://cloud.google.com/security/products/security-command-center"
      },
      {
        productId: "V-018-P-005",
        productName: "Google Security Operations",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-032"],
        notes: "Cloud-native SIEM and SOAR — formerly Chronicle. Gartner Magic Quadrant Leader for SIEM 2025. Collects and correlates security telemetry from GCP, Google Workspace, and third-party sources including PAM platforms. Petabyte-scale log ingestion with long retention. AI-powered threat detection using Gemini with curated detections maintained by Google threat researchers. YARA-L custom detection language. Integrated SOAR with playbook automation. Pre-packaged playbooks for GCP-based alerts from Security Command Center. PAM-032 partial — UEBA capabilities with entity risk scoring, anomaly detection for user behavior. Like Splunk, value is dependent on what log sources are connected.",
        docsUrl: "https://cloud.google.com/security/products/security-operations"
      },
      {
        productId: "V-018-P-006",
        productName: "Google Workspace Admin",
        capabilities: [],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-019", "PAM-020", "PAM-025", "PAM-026", "PAM-027"],
        notes: "Google's productivity suite admin controls — not a PAM product. Scope limited to Google Workspace applications (Gmail, Drive, Docs, Meet, etc.) and does not extend to GCP infrastructure or general enterprise access management. Admin controls: MFA enforcement for all users (TOTP, push, hardware keys, passkeys), SSO configuration, password policy enforcement (complexity, length, history, reuse prevention), account lockout settings, Admin Audit Log (tracks all admin actions), Drive Audit Log, Login Audit Log. Context-Aware Access for Workspace apps (BeyondCorp) adds device trust and location controls. Relevant for organizations where Workspace is a significant part of their privileged data environment. All capabilities are partial — narrowly scoped to Workspace application layer.",
        docsUrl: "https://support.google.com/a/topic/7570177"
      }
    ]
  },
  {
    vendorId: "V-019",
    vendorName: "IBM",
    products: [
      {
        productId: "V-019-P-001",
        productName: "IBM Verify",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-011", "PAM-012", "PAM-019", "PAM-025", "PAM-026"],
        notes: "Unified IAM SaaS platform — Gartner MQ Leader for Access Management 2025, TrustRadius Buyer's Choice 2026. Core capabilities: SSO via SAML and OIDC, MFA including TOTP, push, hardware keys, adaptive risk-based authentication, user lifecycle governance, delegation, consent management, continuous audit. IBM Verify Gateway for RADIUS extends authentication to Unix/Linux SSH and other services. IBM Verify Bridge for Directory Sync integrates with on-premises directories. Blocking suspicious users via threat-based access policy. PAM-004 partial — adaptive MFA can enforce phishing-resistant methods but depends on policy configuration. PAM-011/PAM-012 partial — lifecycle governance included but full IGA requires IBM Verify Governance.",
        docsUrl: "https://www.ibm.com/products/verify"
      },
      {
        productId: "V-019-P-002",
        productName: "IBM Verify Privilege Vault",
        capabilities: ["PAM-005", "PAM-019", "PAM-020", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-028", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-006", "PAM-007", "PAM-008", "PAM-009", "PAM-013", "PAM-014", "PAM-015", "PAM-021"],
        notes: "Formerly IBM Secret Server — explicitly labeled as such on ibm.com. This is Delinea Secret Server distributed and supported by IBM. Capability profile is identical to Delinea Secret Server On-Premises (V-001-P-001) and Secret Server Cloud (V-001-P-002). Core capabilities: encrypted credential vaulting, automated password rotation, session recording and proxying, privileged account discovery, checkout workflows, RBAC, dual control approvals, SIEM integration, compliance reporting. IBM ecosystem integration: connects with IBM Verify (SaaS) for MFA enforcement and IBM Verify Governance for unified lifecycle management. Available as on-premises or IBM-hosted cloud deployment.",
        docsUrl: "https://www.ibm.com/products/verify-privileged-identity"
      },
      {
        productId: "V-019-P-003",
        productName: "IBM Verify Privilege Manager",
        capabilities: ["PAM-004", "PAM-005", "PAM-009", "PAM-016"],
        partialCapabilities: ["PAM-006", "PAM-007", "PAM-008", "PAM-010", "PAM-019", "PAM-020", "PAM-021", "PAM-027"],
        notes: "Endpoint privilege management (PEDM) — rebranded Delinea Privilege Manager distributed by IBM. Capability profile mirrors Delinea Privilege Manager (V-001-P-007). Core capabilities: application control and allowlisting, least privilege enforcement on endpoints (Windows, macOS), privilege elevation workflows for specific applications, blocking unauthorized software execution, local admin account management. Identifies endpoints with administrative privileges. Reduces attack surface by removing standing local admin rights.",
        docsUrl: "https://www.ibm.com/products/verify-privileged-identity",
        addOnOf: "V-019-P-002"
      },
      {
        productId: "V-019-P-004",
        productName: "IBM Verify Governance",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-021", "PAM-035"],
        notes: "IGA platform — formerly IBM Security Identity Governance and Intelligence (IGI). Full identity lifecycle management for employees, business partners, customers, system IDs, robots, and IoT devices. Access certifications with SOD violation detection. Integration with Verify Privilege Vault for unified lifecycle management of privileged accounts — prevents toxic combinations of access across both privileged and standard business user accounts. Data Access Governance (DAG) integration. Available as SaaS and on-premises (IBM Security Verify On-Premises FlexPoints bundle).",
        docsUrl: "https://www.ibm.com/products/verify-governance"
      },
      {
        productId: "V-019-P-005",
        productName: "IBM Verify Identity Protection",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-016", "PAM-019", "PAM-020"],
        notes: "ITDR product — advanced identity threat detection and response with detailed contextual analysis across identity infrastructure. Monitors cloud IdPs, on-premises and hybrid directories, MFA solutions, SSO, and PAM solutions for identity-based threats. Detects: identity system misconfigurations, shadow assets, unauthorized local accounts, missing MFA enforcement, usage of unauthorized SaaS apps, hazardous deviations from identity policy. Identifies and enables remediation of identity-related vulnerabilities. IDC MarketScape 2025 recognized. Not a PAM product — detection and posture management only.",
        docsUrl: "https://www.ibm.com/products/verify-identity-protection"
      }
    ]
  },
  {
    vendorId: "V-020",
    vendorName: "Ping Identity",
    products: [
      {
        productId: "V-020-P-001",
        productName: "PingOne Advanced Identity Cloud",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-011", "PAM-012", "PAM-019", "PAM-025", "PAM-026", "PAM-032"],
        notes: "Core SaaS IAM platform. Gartner MQ Leader for Access Management 9 consecutive years, top scores in Workforce, Partner, and Machine Access Management use cases in 2025 Critical Capabilities. Core capabilities: SSO via SAML and OIDC for thousands of applications, MFA including TOTP, push, FIDO2 hardware keys, passkeys, and biometrics, adaptive risk-based authentication via PingOne Protect (AI-driven risk signals, bot detection, deepfake threat detection, identity fraud), identity orchestration via PingOne DaVinci (no-code identity journey builder), identity verification (PingOne Verify), user lifecycle management with SCIM provisioning, password policy enforcement. PingOne Governance add-on provides full IGA: access certifications, lifecycle automation, SOD enforcement. PAM-004 partial — phishing-resistant MFA enforceable but depends on policy configuration. PAM-032 partial — PingOne Protect provides risk-based authentication signals and AI-driven ITDR-adjacent threat detection including agentic automation detection.",
        docsUrl: "https://docs.pingidentity.com/pingone/latest/"
      },
      {
        productId: "V-020-P-002",
        productName: "PingOne Privilege",
        capabilities: ["PAM-005", "PAM-007", "PAM-019", "PAM-020", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-003", "PAM-006", "PAM-013", "PAM-014", "PAM-015", "PAM-023"],
        notes: "JIT privileged access product — launched August 2025. Distinguishing architecture: credential-less runtime PAM with Zero Standing Privilege. ~95% of human privileged access use cases do not require static credentials per Ping's design philosophy — PingOne Privilege eliminates static credentials for those use cases and reserves vault integration only for break glass and bootstrap scenarios. Core capabilities: JIT time-bound access for cloud environments (AWS, GCP, Azure), on-premises servers, databases, Kubernetes, and other critical resources via self-service portal; Zero Standing Privilege — permissions granted only when needed and revoked automatically when the session ends; TPM-backed device assurance — cryptographic keys stored in tamper-resistant hardware on the endpoint, privileged sessions bound to trusted devices so stolen credentials cannot be replayed from unauthorized endpoints (distinguishing capability vs traditional PAM); agent-based deployments for deep session control (SSH, RDP, databases) and agentless for cloud console and CLI access; passwordless access — no credential exposure to end users; full session recording and audit trail; approval workflows. PAM-023 partial — vault integration present for break glass and bootstrap scenarios only, not the primary access model. PAM-013 partial — supports vendor/contractor JIT access but not a dedicated RPAM product.",
        docsUrl: "https://www.pingidentity.com/en/product/pingone-privilege.html",
        addOnOf: "V-020-P-001"
      },
      {
        productId: "V-020-P-003",
        productName: "PingFederate",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-019", "PAM-025"],
        notes: "Enterprise federation server — self-managed on-premises deployment. Provides SSO via OAuth 2.0, OIDC, and SAML for organizations with on-premises requirements or strict data residency controls. Strong presence in regulated industries (banking, insurance, financial services, healthcare). Integrates with existing identity directories (AD, LDAP). MFA via integrated adapters or external MFA providers. PAM-004 partial — phishing-resistant enforcement depends on adapter configuration. Deployed by organizations that cannot use SaaS identity platforms due to regulatory or security requirements.",
        docsUrl: "https://docs.pingidentity.com/pingfederate/latest/"
      }
    ]
  },
  {
    vendorId: "V-021",
    vendorName: "ManageEngine",
    products: [
      {
        productId: "V-021-P-001",
        productName: "ManageEngine PAM360",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-013", "PAM-016", "PAM-019", "PAM-020", "PAM-021", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-028", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-006", "PAM-010", "PAM-014", "PAM-015", "PAM-017", "PAM-027", "PAM-032"],
        notes: "Full-stack unified PAM platform — single product covering credential vaulting, JIT access, endpoint privilege management, session recording, CIEM, and certificate lifecycle management. Every capability built organically from scratch; no acquired products in the codebase. Deployment: on-premises, cloud, or hybrid; most enterprises fully deployed in four weeks or less. Core capabilities: Enterprise Credential Vault — encrypted vaulting with automated rotation and zero credential exposure to users or applications; JIT Privilege Elevation and Zero Standing Privilege — time-bound, policy-based, purpose-specific access with ZSP model; Endpoint Privilege Management (EPM) — removes local admin rights, application allowlisting/blocklisting, child process controls; Privilege Elevation and Delegation Management (PEDM) — application and command-level controls for Windows and Linux; Session Recording — real-time recording archived as searchable video files; Session Shadowing — dual control, supervisors can shadow or terminate sessions in real time; Proxied Remote Access — RDP, VNC, SSH, SQL, and web sessions proxied through PAM360 (users never directly reach target systems); Continuous Discovery — automatic discovery, onboarding, and management of all privileged accounts and resources; CIEM — cloud permissions management and remediation across AWS, Azure, and GCP; Certificate Lifecycle Management (CLM) — SSL/TLS certificates, SSH keys, PGP keys end-to-end lifecycle; UEBA — AI/ML-driven anomaly detection for privileged user behavior; Zero Trust Controls — real-time trust scoring for users and devices, policy-based access control (PBAC); ITSM Integration — ticket ID validation gates credential retrieval to verified service requests; Compliance Reporting — built-in reports for NIST, PCI-DSS, FISMA, HIPAA, SOX, ISO/IEC 27001, NIS2, GDPR, NERC CIP. Integrates with ManageEngine SIEM, ITSM, IGA, and over 800 business applications via Zoho Flow. PAM-001-003 partial — MFA via integrated 2FA adapters (Duo, TOTP, etc.) not native MFA. PAM-032 partial — UEBA/anomaly detection built in but not a dedicated ITDR product.",
        docsUrl: "https://www.manageengine.com/privileged-access-management/help/"
      }
    ]
  },
  {
    vendorId: "V-022",
    vendorName: "Rapid7",
    products: [
      {
        productId: "V-022-P-001",
        productName: "Rapid7 InsightIDR",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-032"],
        notes: "Cloud-native SIEM and XDR — being rebranded as Incident Command. Collects and correlates security telemetry from endpoints, network, cloud, and identity sources including Microsoft Entra ID (integrated November 2025), PAM platforms, and AD. Core PAM-relevant capabilities: UEBA detects lateral movement, privilege abuse, anomalous access patterns, watched/admin-led password resets, and suspicious authentication activity; User Behavior Analytics (UBA) rules unified into Detection Rule Library; identity posture integration (April 2026) enables pivot from SIEM alert to identity profile showing MFA status, account risk, and group memberships; AI-driven alert triage and dynamic exposure scoring prioritizes high-risk identity events; automated containment of compromised users and assets. PAM-032 partial — strong UEBA for privileged user behavioral analytics but not dedicated ITDR. PAM-008 partial — identity posture visibility identifies accounts with risky configurations. Like Splunk and Google Security Operations, value is entirely dependent on which log sources are connected.",
        docsUrl: "https://docs.rapid7.com/insightidr/"
      },
      {
        productId: "V-022-P-002",
        productName: "Rapid7 InsightCloudSec",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017", "PAM-019"],
        notes: "Cloud security platform — CSPM and CIEM across AWS, Azure, and GCP. Continuously identifies misconfigurations, excessive permissions, and risky cloud entitlements. Risk-aware compliance experience maps findings to compliance frameworks. Remediation Hub prioritizes cloud misconfigurations by asset group. GCP Security Command Center integration. PAM-016 partial — identifies privilege escalation paths in cloud environments but detection only. Integrates with InsightIDR for combined cloud security and SIEM workflows.",
        docsUrl: "https://docs.rapid7.com/insightcloudsec/"
      }
    ]
  }
];
