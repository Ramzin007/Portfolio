@echo off
cd /d "%~dp0\.."
"C:\Program Files\nodejs\node.exe" node_modules\next\dist\bin\next dev --hostname 127.0.0.1 --port 3000
