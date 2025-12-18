# Configure Domain: $ARGUMENTS

Set up custom domain for a deployment.

## Usage

```
/ts-domain <target> <domain>             # Add domain
/ts-domain <target> <domain> remove      # Remove domain
/ts-domain <target>                      # List domains
```

### Examples
```
/ts-domain vercel app.example.com        # Add domain to Vercel
/ts-domain railway api.example.com       # Add domain to Railway
/ts-domain vercel app.example.com remove # Remove domain
/ts-domain vercel                        # List Vercel domains
```

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Parse arguments:
   - Target: vercel, netlify, railway, fly, etc.
   - Domain: custom domain name
   - Action: add (default) or remove

3. Use the **sre-deploy-engineer** subagent to:

### Add Domain

```bash
# Vercel
vercel domains add [domain]
vercel alias [deployment-url] [domain]

# Netlify
netlify domains:add [domain]

# Railway
railway domain add [domain]

# Fly
fly certs create [domain]
```

4. Generate DNS configuration:

```
╔══════════════════════════════════════════════════════════════════╗
║           DOMAIN CONFIGURATION: [DOMAIN]                         ║
╚══════════════════════════════════════════════════════════════════╝

Target: [TARGET]
Domain: [DOMAIN]
Status: 🟡 Pending DNS configuration

┌─────────────────────────────────────────────────────────────────┐
│ REQUIRED DNS RECORDS                                            │
├──────┬──────┬──────────────────────────────────┬───────────────┤
│ Type │ Name │ Value                            │ TTL           │
├──────┼──────┼──────────────────────────────────┼───────────────┤
│ A    │ @    │ 76.76.21.21                      │ 300           │
│ CNAME│ www  │ cname.vercel-dns.com             │ 300           │
└──────┴──────┴──────────────────────────────────┴───────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ VERIFICATION                                                    │
├─────────────────────────────────────────────────────────────────┤
│ Add this TXT record to verify ownership:                        │
│                                                                 │
│ Type:  TXT                                                      │
│ Name:  _vercel                                                  │
│ Value: vc-domain-verify=abc123...                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ SSL CERTIFICATE                                                 │
├─────────────────────────────────────────────────────────────────┤
│ Provider: Let's Encrypt (auto-provisioned)                      │
│ Status:   ⏳ Pending DNS propagation                            │
│                                                                 │
│ SSL will be automatically provisioned once DNS is configured.   │
└─────────────────────────────────────────────────────────────────┘

Next Steps:
1. Add the DNS records above to your domain registrar
2. Wait for DNS propagation (5-30 minutes)
3. Run /ts-domain [target] to check status

Common Registrars:
- Cloudflare: DNS → Add Record
- Namecheap: Domain List → Manage → Advanced DNS
- GoDaddy: DNS → Add Record
- Google Domains: DNS → Custom Records
```

5. Check status after DNS configured:

```
╔══════════════════════════════════════════════════════════════════╗
║           DOMAIN STATUS: [DOMAIN]                                ║
╚══════════════════════════════════════════════════════════════════╝

Target: [TARGET]
Domain: [DOMAIN]
Status: 🟢 Active

┌─────────────────────────────────────────────────────────────────┐
│ DNS                                                             │
├─────────────────────────────────────────────────────────────────┤
│ A Record:     ✅ Configured                                     │
│ CNAME Record: ✅ Configured                                     │
│ Propagation:  ✅ Complete                                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ SSL CERTIFICATE                                                 │
├─────────────────────────────────────────────────────────────────┤
│ Issuer:  Let's Encrypt                                          │
│ Status:  ✅ Valid                                                │
│ Expires: 2024-04-15                                             │
│ Auto-renew: ✅ Enabled                                          │
└─────────────────────────────────────────────────────────────────┘

✅ https://[DOMAIN] is now live!
```

6. Update project file with domain configuration
