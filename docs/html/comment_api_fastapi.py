from fastapi import FastAPI, Request, HTTPException
from pydantic import BaseModel
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
from fastapi import FastAPI, Request, HTTPException
from pydantic import BaseModel
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

# Allow CORS from your documentation server (adjust origins as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, restrict this!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "comments.db"

# Create table if not exists
conn = sqlite3.connect(DB_PATH)
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page TEXT,
    selectedText TEXT,
    comment TEXT,
    timestamp TEXT,
    user TEXT,
    received_at TEXT,
    client_ip TEXT
)''')
conn.commit()
conn.close()

class Comment(BaseModel):
    page: str
    selectedText: str
    comment: str
    timestamp: Optional[str] = None
    user: Optional[str] = None

@app.post("/api/comments")
async def save_comment(comment: Comment, request: Request):
    comment_data = comment.dict()
    received_at = datetime.utcnow().isoformat() + "Z"
    client_ip = request.client.host
    try:
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        c.execute('''INSERT INTO comments (page, selectedText, comment, timestamp, user, received_at, client_ip)
                     VALUES (?, ?, ?, ?, ?, ?, ?)''',
                  (comment_data['page'], comment_data['selectedText'], comment_data['comment'],
                   comment_data.get('timestamp'), comment_data.get('user'), received_at, client_ip))
        conn.commit()
        conn.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save comment: {e}")
    return {"status": "ok"}

@app.get("/api/comments")
async def get_comments():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT id, page, selectedText, comment, timestamp, user, received_at, client_ip FROM comments ORDER BY received_at DESC')
    rows = c.fetchall()
    conn.close()
    comments = [
        {
            "id": row[0],
            "page": row[1],
            "selectedText": row[2],
            "comment": row[3],
            "timestamp": row[4],
            "user": row[5],
            "received_at": row[6],
            "client_ip": row[7],
        }
        for row in rows
    ]
    return comments

# To run: uvicorn comment_api_fastapi:app --reload --host 0.0.0.0 --port 3000
