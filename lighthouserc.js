module.exports = {
    ci: {
        collect: {
            staticDistDir: '.next',
            url: ['/'],
            startServerCommand: 'npm run start',
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};