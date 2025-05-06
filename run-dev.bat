@echo off
echo Running Next.js development server...
cd %~dp0
call node node_modules/next/dist/bin/next dev --turbopack 