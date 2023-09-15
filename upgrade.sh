#!/bin/bash

# Update project dependencies
echo "Updating project dependencies..."
yarn upgrade

# Check for vulnerabilities
echo "Checking for vulnerabilities..."
yarn audit

echo "Dependency update and vulnerability check complete."