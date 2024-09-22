module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            startServerReadyPattern: 'ready on',
            url: [
                'http://localhost:3000/',
                // Add other important routes here
            ],
            numberOfRuns: 3,
        },
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            preset: 'lighthouse:recommended',
        },
    },
};