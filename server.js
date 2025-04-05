const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9",
};

app.get('/api/search-yahoo', async (req, res) => {
  try {
    const query = req.query.q || 'mazda uk find a retailer';
    const response = await axios.get(`https://search.yahoo.com/search?p=${encodeURIComponent(query)}`, { headers });
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Yahoo results" });
  }
});



app.use(express.json());


app.listen(3001, () => console.log("Proxy server running on http://localhost:3001"));
