java -jar openapi-generator-cli.jar generate \
 -i test.json -g typescript-node \
 --git-user-id "j0araya" \
 --git-repo-id "openapi-generator" \
 --release-note "GitHub integration demo" \
 -o /api.json