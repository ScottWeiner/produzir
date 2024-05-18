# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set environment variables for PostgreSQL
ENV POSTGRES_DB=produzir \
    POSTGRES_USER=postgres \
    POSTGRES_PASSWORD=postgrespw

# Expose the PostgreSQL port
EXPOSE 5432

# Create a volume for persisting PostgreSQL data
VOLUME /var/lib/postgresql/data

# By default, run PostgreSQL
CMD ["postgres"]