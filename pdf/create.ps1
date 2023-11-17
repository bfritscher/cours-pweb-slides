param (
    [string]$givenFile
)

$pwd = (Get-Location).Path

if ($givenFile) {
    $mdFiles = Get-ChildItem -Path $pwd -Filter $givenFile
} else {
    $mdFiles = Get-ChildItem -Path $pwd -Filter *.md
}

foreach ($file in $mdFiles) {
    $slideName = [IO.Path]::GetFileNameWithoutExtension($file.Name)
    docker run -e SLIDE_NAME=$slideName -i --init --cap-add=SYS_ADMIN --rm -v ${pwd}:/home/pptruser/pdf -v ${pwd}/pdf/print.js:/home/pptruser/print.js  ghcr.io/puppeteer/puppeteer:latest node print.js
}
