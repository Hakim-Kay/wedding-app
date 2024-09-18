import { execSync } from 'child_process';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Are you sure you want to deploy to staging? (y/n) ', (answer: string) => {
    if (answer.toLowerCase() === 'y') {
        try {
            console.log('Tagging current commit for staging...');
            execSync('git tag -f stage');
            console.log('Pushing tag to remote...');
            execSync('git push -f origin stage');
            console.log('Staging deployment initiated successfully!');
        } catch (error) {
            console.error('Error during staging deployment:', (error as Error).message);
        }
    } else {
        console.log('Staging deployment cancelled.');
    }
    rl.close();
});