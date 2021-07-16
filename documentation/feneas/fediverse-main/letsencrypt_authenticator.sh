
#!/bin/bash
# source https://www.harenslak.nl/blog/https-letsencrypt-gitlab-hugo

mkdir -p $CI_PROJECT_DIR/source/_static/.well-known/acme-challenge
echo $CERTBOT_VALIDATION > $CI_PROJECT_DIR/source/_static/.well-known/acme-challenge/$CERTBOT_TOKEN
git add $CI_PROJECT_DIR/source/_static/.well-known/acme-challenge/$CERTBOT_TOKEN
git commit -m "GitLab runner - Added certbot challenge file for certificate renewal"
git push https://$GITLAB_USER_LOGIN:$CERTBOT_RENEWAL_GIT_TOKEN@gitlab.com/fediverse/fediverse.gitlab.io.git HEAD:master

interval_sec=15
max_tries=80 # ~20 minutes
n_tries=0
while [ $n_tries -le $max_tries ]
do
  status_code=$(curl -L --write-out "%{http_code}\n" --silent --output /dev/null https://fediverse.party/.well-known/acme-challenge/$CERTBOT_TOKEN)
  if [ $status_code -eq 200 ]; then
    exit 0
  fi

  n_tries=$((n_tries+1))
  sleep $interval_sec
done

exit 1
