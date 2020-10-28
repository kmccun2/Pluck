# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..

# Run both Express & React from root
npm run dev **(from root directory)**

# Build for production
cd client
npm run build
