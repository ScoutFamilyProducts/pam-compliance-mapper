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
  }
];
