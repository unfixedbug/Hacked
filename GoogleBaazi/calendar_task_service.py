import os.path
import pickle
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/tasks"]


CREDENTIALS_FILE = 'creds3.json'

def get_task_service():
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)
    # if os.path.exists("token.pickle"):
    #     with open('token.pickle', 'rb') as token:
    #         creds = pickle.load(token)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                CREDENTIALS_FILE, SCOPES
            )
            creds = flow.run_local_server(port=0)
        with open("token.json", "w") as token:
            token.write(creds.to_json())

    service = build("tasks", "v1", credentials=creds)
    return service
    # try:

    #     # Call the Tasks API
    #     results = service.tasklists().list(maxResults=10).execute()
    #     items = results.get("items", [])

    #     if not items:
    #         print("No task lists found.")
    #         return

    #     print("Task lists:")
    #     for item in items:
    #         print(f"{item['title']} ({item['id']})")
    # except HttpError as err:
    #     print(err)


if __name__ == "__main__":
    main()
