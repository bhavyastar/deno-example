
# Use the official Deno Docker image as the base image
FROM denoland/deno:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the Deno application files to the container
COPY . .

# Set the default value for DENO_APP_URL environment variable
ENV DENO_APP_URL=https://raw.githubusercontent.com/bhavyastar/deno-example/main/mod.ts

# Allow network access for Deno (required to fetch tasks.json)
ENV DENO_PERMISSIONS=net=allow

# Run the Deno application by fetching the code from the URL at runtime
CMD deno run --unstable --allow-read --allow-write $DENO_APP_URL
