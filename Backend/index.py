from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origin = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origin,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return "Hola FastAPI!"

@app.post("/publicaciones")
async def publicaciones():
    return {"Publicaciones": "Llegadas con exito"}

#uvicorn index:app --reload