@Echo Off
if /I "%~1" == "--justdoit" goto nochecks
verify other 2 >nul
setlocal EnableExtensions
if ERRORLEVEL 1 goto error
:nochecks
if exist "item-database.json" (
    echo Generating updated itemj.js . . .
    del /a /f /q itemj.js 1>nul 2>nul
    copy /b itemj.js.stub + /b item-database.json /b itemj.js
    del /a /f /q item-database.json 1>nul 2>nul
)
goto end
:error
echo ERROR: Unable to enable extensions.
echo/
echo Batch code may not work correctly on your system.
echo If you think this is incorrect, re-run the script with
echo the following argument:
echo/
echo    --justdoit
:end
endlocal