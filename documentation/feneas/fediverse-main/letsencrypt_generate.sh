
#!/bin/bash
# source https://www.harenslak.nl/blog/https-letsencrypt-gitlab-hugo

end_epoch=$(date -d "$(echo | openssl s_client -connect fediverse.party:443 -servername fediverse.party 2>/dev/null | openssl x509 -enddate -noout | cut -d'=' -f2)" "+%s")
current_epoch=$(date "+%s")
renew_days_threshold=30
days_diff=$((($end_epoch - $current_epoch) / 60 / 60 / 24))

if [ $days_diff -lt $renew_days_threshold ]; then
  ls
  echo "Certificate is $days_diff days old, renewing now."
  certbot certonly --manual --debug --preferred-challenges=http -m $GITLAB_USER_EMAIL --agree-tos --manual-auth-hook letsencrypt_authenticator.sh --manual-public-ip-logging-ok -d fediverse.party -d www.fediverse.party
  echo "Certbot finished. Updating GitLab Pages domains."
  curl --request PUT --header "PRIVATE-TOKEN: $CERTBOT_RENEWAL_GIT_TOKEN" --form "certificate=@/etc/letsencrypt/live/fediverse.party/fullchain.pem" --form "key=@/etc/letsencrypt/live/fediverse.party/privkey.pem" https://gitlab.com/api/v4/projects/$CI_PROJECT_ID/pages/domains/fediverse.party
  curl --request PUT --header "PRIVATE-TOKEN: $CERTBOT_RENEWAL_GIT_TOKEN" --form "certificate=@/etc/letsencrypt/live/fediverse.party/fullchain.pem" --form "key=@/etc/letsencrypt/live/fediverse.party/privkey.pem" https://gitlab.com/api/v4/projects/$CI_PROJECT_ID/pages/domains/www.fediverse.party
else
  echo "Certificate still valid for $days_diff days, no renewal required."
fi
