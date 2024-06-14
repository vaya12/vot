# database/maxscale/Dockerfile
FROM mariadb/maxscale:latest

COPY maxscale.cnf /etc/maxscale.cnf

ENV MAXSCALE_USER=${MYSQL_USER}
ENV MAXSCALE_PASSWORD=${MYSQL_PASSWORD}
