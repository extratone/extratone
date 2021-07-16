#!/bin/bash

if [ ! -x "$MARKDOWN" ] || [ ! -x "$MARKDOWNPDF" ]; then
  echo "Run 'npm install markdown-to-html markdown-pdf -g' first!"
  exit 1
fi

command -v jq > /dev/null
if [ "$?" -ne 0 ]; then
  echo "Install jq JSON processor (https://stedolan.github.io/jq/) first!"
  exit 1
fi

command -v gojsontmpl > /dev/null
if [ "$?" -ne 0 ]; then
  echo "Install gojsontmpl (https://git.feneas.org/feneas/infrastructure/gojsontmpl) first!"
  exit 1
fi

stage=$1
if [ -z "$stage" ]; then
  stage="test"
fi
mkdir -p $stage

#
# Convert markdown to PDF and HTML
#
for entry in $(cat documents.json | jq -r '.[] | @base64'); do
  entry=$(echo $entry | base64 -d)
  name=$(echo $entry | jq -r .name)
  path=$(echo $entry | jq -r .path)

  [[ "$path" == "null" ]] && continue
  for file in $(echo $entry | jq -r '.files[]'); do
    extension=${file##*.}
    if [[ "$extension" == "pdf" ]]; then
      $MARKDOWNPDF -o ${stage}/${file} $path || exit 1
    else
      $MARKDOWN $path --title "${name}" > ${stage}/${file} || exit 1
    fi
  done
done

#
# Render html templates
#
gojsontmpl \
  -html-base-file index.html.tmpl \
  -html-files templates/index.html.tmpl,templates/header.html.tmpl,templates/footer.html.tmpl \
  -json-file documents.json > ${stage}/index.html || exit 1

exit 0
