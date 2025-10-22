@echo off
echo Starting Azure deployment...

:: Build the React app
echo Building React app...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo Build failed!
    exit /b 1
)

:: Copy built files to root (Azure serves from root)
echo Copying built files to root...
if exist "dist\index.html" (
    copy "dist\index.html" "index.html"
    echo Copied index.html to root
)

if exist "dist\assets" (
    if not exist "assets" mkdir "assets"
    xcopy "dist\assets\*" "assets\" /E /Y /I
    echo Copied assets to root
)

:: Copy web.config to root
if exist "web.config" (
    echo web.config already exists in root
) else (
    echo Creating web.config in root...
    echo ^<?xml version="1.0" encoding="utf-8"?^> > web.config
    echo ^<configuration^> >> web.config
    echo   ^<system.webServer^> >> web.config
    echo     ^<rewrite^> >> web.config
    echo       ^<rules^> >> web.config
    echo         ^<rule name="React Routes" stopProcessing="true"^> >> web.config
    echo           ^<match url=".*" /^> >> web.config
    echo           ^<conditions logicalGrouping="MatchAll"^> >> web.config
    echo             ^<add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" /^> >> web.config
    echo             ^<add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" /^> >> web.config
    echo           ^</conditions^> >> web.config
    echo           ^<action type="Rewrite" url="/index.html" /^> >> web.config
    echo         ^</rule^> >> web.config
    echo       ^</rules^> >> web.config
    echo     ^</rewrite^> >> web.config
    echo   ^</system.webServer^> >> web.config
    echo ^</configuration^> >> web.config
)

echo Deployment completed successfully!
