
#!/bin/bash
# source https://www.harenslak.nl/blog/https-letsencrypt-gitlab-hugo

git rm $CI_PROJECT_DIR/static/.well-known/acme-challenge/$CERTBOT_TOKEN
git commit -m "GitLab runner - Removed certbot challenge file"
git push https://$GITLAB_USER_LOGIN:$CERTBOT_RENEWAL_GIT_TOKEN@gitlab.com/fediverse/fediverse.gitlab.io.git HEAD:master
