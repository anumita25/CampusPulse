Write-Host "Configuring Microsoft OpenJDK 17 environment..." -ForegroundColor Cyan
$env:JAVA_HOME = "C:\Program Files\Microsoft\jdk-17.0.20.101-hotspot"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"

Write-Host "Setting Flutter JDK directory to JDK 17..." -ForegroundColor Cyan
flutter config --jdk-dir "C:\Program Files\Microsoft\jdk-17.0.20.101-hotspot"

Write-Host "Launching CampusPulse on your Samsung Galaxy..." -ForegroundColor Green
flutter run -d "SM S942B"
