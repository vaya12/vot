# # keycloak/Dockerfile
# FROM jboss/keycloak:latest

# # Copy the realm export file to the container
# COPY realm-export.json /opt/jboss/keycloak/realm-export.json

# ENTRYPOINT ["/opt/jboss/keycloak/bin/kc.sh", "start-dev"]



# Keycloak Dockerfile
FROM quay.io/keycloak/keycloak:latest

# Copy the realm export file to the container
COPY realm-export.json /opt/jboss/keycloak/realm-export.json

# Expose the ports
EXPOSE 8080

# Set the environment variables if needed
# ENV KEYCLOAK_USER=admin
# ENV KEYCLOAK_PASSWORD=admin

# Start Keycloak in development mode
CMD ["./bin/standalone.sh", "-b", "0.0.0.0", "-Dkeycloak.import=/opt/jboss/keycloak/realm-export.json"]
