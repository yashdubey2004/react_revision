# Usage: Open PowerShell as Administrator (if required) and run:
#   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
#   .\scripts\fix-repo.ps1

# remove node_modules and package-lock.json (no -rf like Unix)
if (Test-Path ".\node_modules") {
    Write-Host "Removing node_modules..."
    Remove-Item -Recurse -Force .\node_modules
} else {
    Write-Host "node_modules not found"
}

if (Test-Path ".\package-lock.json") {
    Write-Host "Removing package-lock.json..."
    Remove-Item -Force .\package-lock.json
} else {
    Write-Host "package-lock.json not found"
}

Write-Host "Cleaning npm cache..."
npm cache clean --force

Write-Host "Installing dependencies from npm registry..."
npm install

Write-Host "Done. If a package still tries to use git/ssh, inspect package.json and replace any git:// or github: entries with registry versions (e.g. \"@reduxjs/toolkit\": \"^1.9.7\")."
