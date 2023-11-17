#!/usr/bin/env node

const { execSync } = require('child_process')

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 git@github.com:rahadkc/nextjs-typescript-redux-jest-cypress-starter.git ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`

function colorizeText(text, colorCode) {
  return `\x1b[${colorCode}m${text}\x1b[0m`
}

function runCommandWithLoading(command, loadingMessage, colorCode) {
  process.stdout.write(`${colorizeText(loadingMessage, colorCode)} ...`)

  try {
    execSync(`${command}`, { stdio: 'inherit' })
    process.stdout.write(colorizeText(' Done\n', '32')) // Green color for success
  } catch (error) {
    process.stdout.write(colorizeText(' Failed\n', '31')) // Red color for failure
    console.error(`Failed to execute command -  ${command}`, error)
    exitProcess(-1)
  }
}

console.log(colorizeText(`Cloning the repository ... ${repoName}`, '34')) // Blue color for cloning
runCommandWithLoading(gitCheckoutCommand, 'Cloning the repository', '34')

console.log(colorizeText(`Installing dependencies for ${repoName}`, '36')) // Cyan color for installing
runCommandWithLoading(installDepsCommand, 'Installing dependencies', '36')

console.log(colorizeText('Congratulations! You are ready to go.', '32')) // Green color for success
console.log('To start the project, run the following commands:')
console.log(`cd ${repoName} && npm run dev`)
console.log(colorizeText('Your project will be available at http://localhost:3050', '33')) // Yellow color for info

function exitProcess(code) {
  process.exit(code)
}
