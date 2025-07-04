## docker command
docker run --name prisma-pg \            
-e POSTGRES_USER=admin \
-e POSTGRES_PASSWORD=secret \
-e POSTGRES_DB=mydb \
-p 5432:5432 \
-d postgres


## docker container start
docker start prisma-pg  

## psql
psql -h localhost -U admin -d mydb  


## Prisma migrate
npx prisma migrate dev --name UserAndTodo

## Prisma Client or Auto generate Client
npx prisma generate