@echo off
title Civilization Sim Installer
color 0A

echo [*] Preparing to install Civilization Sim...
timeout /t 1 >nul

:: Ensure Node.js is available
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Node.js is not installed. Please install it from https://nodejs.org/
    pause
    exit /b
)

echo [*] Installing dependencies...
npm install chalk@4 boxen@4 >nul

if exist world.json (
    echo [*] Existing world.json detected.
) else (
    echo {} > world.json
    echo [*] Created default world.json file.
)

echo [*] Installation complete!
timeout /t 1 >nul

echo [*] Launching Civilization Sim...
start cmd /k "node main.js"

exit
