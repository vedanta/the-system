// Vercel serverless function for install script analytics
// Usage: GET /api/stats

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        // Get basic stats (would integrate with real analytics)
        const stats = {
            message: "The System - Install Script Analytics",
            version: "1.0.0",
            timestamp: new Date().toISOString(),
            endpoints: {
                install: "/install.sh",
                website: "/",
                docs: "https://github.com/vedanta/the-system/blob/main/docs/"
            },
            // In production, these would be real metrics
            mockStats: {
                totalDownloads: 1234,
                downloadsToday: 42,
                topCountries: ["US", "UK", "CA", "DE", "AU"],
                successRate: "98.7%",
                avgInstallTime: "45s"
            }
        };

        res.status(200).json(stats);
    } catch (error) {
        console.error('Stats API error:', error);
        res.status(500).json({
            error: 'Internal server error',
            timestamp: new Date().toISOString()
        });
    }
}