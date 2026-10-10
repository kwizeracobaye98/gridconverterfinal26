param(
  [int]$StartLine,
  [int]$EndLine,
  [string]$Path = 'c:/Users/hp/Desktop/mobilegridconverter2-main/index.html'
)
$lines = Get-Content $Path
$total = $lines.Count
Write-Host "TOTAL LINES: $total"
$start = [Math]::Max(0, $StartLine - 1)
$end = [Math]::Min($total - 1, $EndLine - 1)
for ($i = $start; $i -le $end; $i++) {
  Write-Host ("{0}: {1}" -f ($i + 1), $lines[$i])
}
