@echo off
set "JAVA_HOME=C:\Program Files\Microsoft\jdk-17.0.20.101-hotspot"
set "PATH=%JAVA_HOME%\bin;%PATH%"

echo Setting Flutter JDK to Microsoft OpenJDK 17...
call flutter config --jdk-dir "C:\Program Files\Microsoft\jdk-17.0.20.101-hotspot"

echo Launching CampusPulse on Samsung Galaxy...
call flutter run -d "SM S942B"
pause
