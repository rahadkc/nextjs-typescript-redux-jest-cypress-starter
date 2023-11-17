#!/usr/bin/env node

const { execSync } = require('child_process')

const repoName = process.argv(2)
const gitCheckoutCommand = `git clone --depth 1 https://github.com/rahadkc/nextjs-redux-starter ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Cloning the repository ... ${repoName}`)
const checkedOut = runCommand(gitCheckoutCommand)
if (!checkedOut) exitProcess(-1)

console.log(`Installing dependencies for ${repoName}`)
const installDeps = runCommand(installDepsCommand)
if (!installDeps) exitProcess(-1)

console.log('Congratulations! you are ready. Follow the following command to start')
console.log(`cd ${repoName} && npm run dev`)

function runCommand(command) {
  try {
    execSync(`${command}`, { studio: 'inherit' })
  } catch (error) {
    console.log(`Failed to execute command -  ${command}`, error)
    return false
  }
  return true
}

function exitProcess(code) {
  process.exit(code)
}
