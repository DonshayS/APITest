//Use template below to get started

require('dotenv').config();

const apiFetch = async () => {
  try {
    const response = await fetch(`    `);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("First Post Title:", data[0]?.title);
  } 
};

