@if "%SCM_TRACE_LEVEL%" NEQ "4" @echo off

:: ----------------------
:: KUDU Deployment Script for React App
:: ----------------------

:: Verify node.js installed
where node 2>nul >nul
IF %ERRORLEVEL% NEQ 0 (
  echo Missing node.js executable, please install node.js
  goto error
)

setlocal enabledelayedexpansion

SET ARTIFACTS=%~dp0%..\artifacts
SET DEPLOYMENT_SOURCE=%~dp0%.
SET DEPLOYMENT_TARGET=%ARTIFACTS%\wwwroot

echo Handling React app deployment...

:: 1. Install npm packages
pushd "%DEPLOYMENT_SOURCE%"
echo Installing npm packages...
call npm install
IF !ERRORLEVEL! NEQ 0 goto error

:: 2. Build the app
echo Building the React app...
call npm run build
IF !ERRORLEVEL! NEQ 0 goto error

:: 3. Copy built files to deployment target
echo Copying built files...
xcopy "%DEPLOYMENT_SOURCE%\dist\*" "%DEPLOYMENT_TARGET%\" /E /Y
IF !ERRORLEVEL! NEQ 0 goto error

:: 4. Copy web.config to root
IF EXIST "%DEPLOYMENT_SOURCE%\web.config" (
  copy "%DEPLOYMENT_SOURCE%\web.config" "%DEPLOYMENT_TARGET%\web.config"
)

popd

echo Deployment completed successfully!
goto end

:error
echo An error has occurred during deployment.
exit /b 1

:end
endlocal
