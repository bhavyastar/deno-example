# Use the official Deno Docker image as the base image
FROM hayd/deno:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the application files to the container
COPY . .

# Allow network access for Deno (required to fetch tasks.json)
ENV DENO_PERMISSIONS=net=allow

# The entry point command to run the Deno application
CMD ["deno", "run", "--unstable", "--allow-read", "--allow-write", "mod.ts"]

