$c = Get-Content 'c:/Users/hp/Desktop/mobilegridconverter2-main/index.html'
$s = $c[3140]
# Output the full line between markers
'<<<START>>>'
$s
'<<<END>>>'
