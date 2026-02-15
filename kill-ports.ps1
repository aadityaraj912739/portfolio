# Kill Ports Script
# This script kills processes running on ports 3000 and 5000

Write-Host "`n🔍 Checking for processes on ports 3000 and 5000..." -ForegroundColor Cyan

# Find processes on port 5000
$port5000 = netstat -ano | Select-String ":5000" | Select-String "LISTENING"
if ($port5000) {
    $pid5000 = ($port5000 -split '\s+')[-1]
    Write-Host "   Killing process on port 5000 (PID: $pid5000)..." -ForegroundColor Yellow
    taskkill /PID $pid5000 /F 2>$null
    if ($?) {
        Write-Host "   ✅ Port 5000 freed" -ForegroundColor Green
    }
} else {
    Write-Host "   ✅ Port 5000 is already free" -ForegroundColor Green
}

# Find processes on port 3000
$port3000 = netstat -ano | Select-String ":3000" | Select-String "LISTENING"
if ($port3000) {
    $pid3000 = ($port3000 -split '\s+')[-1]
    Write-Host "   Killing process on port 3000 (PID: $pid3000)..." -ForegroundColor Yellow
    taskkill /PID $pid3000 /F 2>$null
    if ($?) {
        Write-Host "   ✅ Port 3000 freed" -ForegroundColor Green
    }
} else {
    Write-Host "   ✅ Port 3000 is already free" -ForegroundColor Green
}

Write-Host "`n✨ Done! You can now run: npm run dev" -ForegroundColor Green
Write-Host ""
