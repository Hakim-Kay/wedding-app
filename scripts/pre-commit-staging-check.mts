import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Do you want to deploy these changes to staging? (y/n) ', (answer: string) => {
    if (answer.toLowerCase() === 'y') {
        console.log('After this commit, run "npm run deploy:staging" to deploy to staging.');
    }
    rl.close();
});