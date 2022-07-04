java -jar openapi-generator-cli.jar generate \
 -i test.json \
 -g typescript-node \
 --git-user-id "j0araya" \
 --git-repo-id "openapi-generator" \
 --release-note "GitHub integration demo" \
--additional-properties artifactId=test \
 -o out \
 -c config.json

read -p "Hit enter to close"

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate -i local/src/api.json -g nodejs-express-server -o local/out -c local/config.json