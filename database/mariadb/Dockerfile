# database/mariadb/Dockerfile
FROM bitnami/mariadb-galera:latest

COPY my.cnf /opt/bitnami/mariadb/conf/my.cnf

ENV MARIADB_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
ENV MARIADB_USER=${MYSQL_USER}
ENV MARIADB_PASSWORD=${MYSQL_PASSWORD}
ENV MARIADB_DATABASE=${MYSQL_DATABASE}
ENV MARIADB_GALERA_CLUSTER_NAME=galera_cluster
ENV MARIADB_GALERA_MARIABACKUP_PASSWORD=${MYSQL_ROOT_PASSWORD}


COPY galera.cnf /opt/bitnami/mariadb/conf/my_custom.cnf
