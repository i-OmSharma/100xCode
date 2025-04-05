docker run -d \
    --name pg_container \
    -e POSTGRES_USER=om \
    -e POSTGRES_PASSWORD=pass \
    -e POSTGRES_DB=mydb \
    -p 5432:5432 \
    postgres:latest