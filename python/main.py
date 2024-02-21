from fastapi import FastAPI
import requests


app = FastAPI()
express_url = 'http://localhost:8081'
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/json")
def get_express_json_data():
    try:
        response = requests.get(express_url + '/json')
        express_data = response.json()
        return {"data": express_data}
    except Exception as e:
        print(f"Error sending request to Express: {str(e)}")
        return {"error": "Error sending request to Express"}
    

@app.get("/txt")
def get_express_txt_data():
    try:
        response = requests.get(express_url + '/txt')
        express_data = response.json()
        return {"data": express_data}
    except Exception as e:
        print(f"Error sending request to Express: {str(e)}")
        return {"error": "Error sending request to Express"}
    

@app.get("/yaml")
def get_express_txt_data():
    try:
        response = requests.get(express_url + '/yaml')
        express_data = response.json()
        return {"data": express_data}
    except Exception as e:
        print(f"Error sending request to Express: {str(e)}")
        return {"error": "Error sending request to Express"}
    

@app.get("/csv")
def get_express_txt_data():
    try:
        response = requests.get(express_url + '/csv')
        express_data = response.json()
        return {"data": express_data}
    except Exception as e:
        print(f"Error sending request to Express: {str(e)}")
        return {"error": "Error sending request to Express"}
    

@app.get("/xml")
def get_express_txt_data():
    try:
        response = requests.get(express_url + '/xml')
        express_data = response.json()
        return {"data": express_data}
    except Exception as e:
        print(f"Error sending request to Express: {str(e)}")
        return {"error": "Error sending request to Express"}
    

