// Vercel serverless function for tracking install script downloads
// Usage: POST /api/track

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Real-IP, X-Forwarded-For');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        // Extract tracking information
        const userAgent = req.headers['user-agent'] || '';
        const ip = req.headers['x-real-ip'] ||
                  req.headers['x-forwarded-for'] ||
                  req.connection.remoteAddress ||
                  'unknown';

        const {
            event = 'install_script_download',
            platform = 'unknown',
            shell = 'unknown',
            flags = [],
            timestamp = new Date().toISOString()
        } = req.body || {};

        // Create tracking record
        const trackingData = {
            event,
            timestamp,
            userAgent,
            ip: ip.split(',')[0].trim(), // First IP in forwarded chain
            platform: detectPlatform(userAgent, platform),
            shell: detectShell(userAgent, shell),
            flags: Array.isArray(flags) ? flags : [],
            sessionId: generateSessionId(ip, userAgent)
        };

        // Log the event (in production, save to database/analytics service)
        console.log('Install tracking:', JSON.stringify(trackingData, null, 2));

        // Respond with success
        res.status(200).json({
            success: true,
            message: 'Event tracked successfully',
            sessionId: trackingData.sessionId,
            timestamp: trackingData.timestamp
        });

    } catch (error) {
        console.error('Tracking API error:', error);
        res.status(500).json({
            error: 'Failed to track event',
            timestamp: new Date().toISOString()
        });
    }
}

function detectPlatform(userAgent, providedPlatform) {
    if (providedPlatform && providedPlatform !== 'unknown') {
        return providedPlatform;
    }

    const ua = userAgent.toLowerCase();
    if (ua.includes('linux')) return 'linux';
    if (ua.includes('darwin') || ua.includes('mac')) return 'macos';
    if (ua.includes('windows')) return 'windows';
    return 'unknown';
}

function detectShell(userAgent, providedShell) {
    if (providedShell && providedShell !== 'unknown') {
        return providedShell;
    }

    const ua = userAgent.toLowerCase();
    if (ua.includes('bash')) return 'bash';
    if (ua.includes('zsh')) return 'zsh';
    if (ua.includes('fish')) return 'fish';
    if (ua.includes('curl')) return 'curl';
    return 'unknown';
}

function generateSessionId(ip, userAgent) {
    // Simple session ID generation (not cryptographically secure)
    const data = `${ip}-${userAgent}-${new Date().toDateString()}`;
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
        const char = data.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
}