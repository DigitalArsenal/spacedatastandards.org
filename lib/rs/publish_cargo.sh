#!/bin/bash

# Load environment variables
source publish_cargo.env

# Ensure the cargo registry token is provided
if [ -z "$CARGO_REGISTRY_TOKEN" ]; then
    echo "Error: The CARGO_REGISTRY_TOKEN environment variable is not set."
    exit 1
fi

# Log in to crates.io
echo "Logging in to crates.io..."
cargo login $CARGO_REGISTRY_TOKEN

# Dry run to verify the package
echo "Performing dry run..."
cargo publish --dry-run

# List package contents
echo "Listing package contents..."
cargo package --list

# Publish the crate
echo "Publishing the crate..."
cargo publish

echo "Crate published successfully!"
