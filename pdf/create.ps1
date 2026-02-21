param (
    [string]$givenFile
)

$pwd = (Get-Location).Path
$imageName = "cours-pweb-slides-pdf:latest"

docker build -t $imageName -f "$pwd/pdf/Dockerfile" "$pwd"
if ($LASTEXITCODE -ne 0) {
    throw "Failed to build Docker image $imageName"
}

if ($givenFile) {
    $mdFiles = Get-ChildItem -Path $pwd -Filter $givenFile
} else {
    $mdFiles = Get-ChildItem -Path $pwd -Filter *.md
}

foreach ($file in $mdFiles) {
    $slideName = [IO.Path]::GetFileNameWithoutExtension($file.Name)
    docker run -e SLIDE_NAME=$slideName -i --init --cap-add=SYS_ADMIN --rm -v ${pwd}:/home/pptruser/pdf -v ${pwd}/pdf/print.js:/home/pptruser/print.js $imageName node print.js
}
